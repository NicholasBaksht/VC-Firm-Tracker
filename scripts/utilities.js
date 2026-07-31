/* ============================================================
   UTILITIES.JS
   Small, genuinely generic helpers with no feature-specific
   knowledge: URL-safe slugs, AUM-string parsing, fund-scale
   labels, and the return-badge builder shared by firm cards and
   the firm detail page.
   ============================================================ */
// Turns a company name into a URL-safe slug for the #company/
// route (e.g. "Square (Block)" -> "square-block").
function slugifyCompany(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// Parses a firm's AUM string (e.g. "$58B+") into a plain number for
// tier comparisons. Falls back to 0 if the format is unexpected.
function parseAumNumber(aumStr) {
 // Accepts $, £, or € - Molten Ventures reports in pounds and Porsche
  // Ventures in euros, and without this they'd parse as 0 and land in
  // the wrong fund-size tier (and at the bottom of the rankings).
  // Currencies are treated as equivalent rather than FX-converted, which
  // is consistent with AUM already being an approximate figure here.
  const bMatch = aumStr.match(/[$£€](\d+\.?\d*)B/);
  if (bMatch) return parseFloat(bMatch[1]);
  // Handles fund sizes stated in millions (e.g. "$200M+"), converting
  // to the same billions-denominated scale everything else uses -
  // without this, any millions-denominated firm would silently
  // parse as 0 and land in the wrong tier once tiers below $1B exist.
const mMatch = aumStr.match(/[$£€](\d+\.?\d*)M/);
  if (mMatch) return parseFloat(mMatch[1]) / 1000;
  return 0;
}

// Returns a plain-language fund scale label for a firm, using the
// same tiers as the AUM filter chips below - so the label a
// founder sees always matches how the site actually filters that
// firm elsewhere. (The Find Investors questionnaire asks about the
// founder's own funding ask, matched against real investment
// stage data instead - a genuinely different question, so it's
// intentionally not tied to these 8 fund-scale tiers. See
// computeFinderMatches for that logic.)
function getScaleLabel(firm) {
  const num = parseAumNumber(firm.aum);
  if (num >= 50) return 'Mega Fund ($50B+)';
  if (num >= 20) return 'Large Fund ($20B–$50B)';
  if (num >= 10) return 'Mid-Size Fund ($10B–$20B)';
  if (num >= 5) return 'Below $10B';
  if (num >= 0.5) return 'Below $5B';
  if (num >= 0.2) return '$200M–$500M';
  if (num >= 0.1) return '$100M–$200M';
  return 'Under $100M';
}

// Builds the small colored badge showing return since Jan 2, 2025,
// for any holding that has a real historicalPrice on file. Holdings
// without one yet (historicalPrice: null) show a neutral "—" badge
// instead of guessing.
function buildReturnBadge(h) {
  if (h.historicalPrice === null || h.price === null) {
    return `<span class="return-badge unknown">— since Jan '25</span>`;
  }
  const pct = ((h.price - h.historicalPrice) / h.historicalPrice) * 100;
  const cls = pct >= 0 ? 'positive' : 'negative';
  const sign = pct >= 0 ? '+' : '';
  return `<span class="return-badge ${cls}">${sign}${pct.toFixed(1)}% since Jan '25</span>`;
}
// ---------- RANKINGS ORDER ----------
// Sort every firm by real AUM, highest to lowest, then derive rank from
// that sorted position. Doing this in code rather than relying on where
// a firm object physically sits in data.js means the rankings can never
// drift out of order - and a newly added firm can be pasted ANYWHERE in
// the array and still land in its correct slot automatically. Firms with
// no disclosed AUM parse to 0 and collect at the bottom, which is the
// honest place for them.
firms.sort((a, b) => parseAumNumber(b.aum) - parseAumNumber(a.aum));
firms.forEach((f, i) => { f.rank = i + 1; });
// Formats a combined-AUM figure (stored in billions, e.g. 1223 for
// $1223B) as trillions once it crosses the 1000 mark, since "$1223B+"
// reads worse than "$1.223T+" at this scale. Below $1T, displays in
// billions as before.
function formatCombinedAUM(billions) {
  if (billions >= 1000) {
    return '$' + (billions / 1000).toFixed(3) + 'T+';
  }
  return '$' + billions + 'B+';
}
