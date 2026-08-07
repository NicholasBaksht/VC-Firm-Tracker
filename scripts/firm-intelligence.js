/**
 * FIRM-INTELLIGENCE.JS
 * Three honest, computed insights for any firm: real sector focus,
 * real co-investment patterns (firms sharing public holdings), and
 * firms most similar by real sector + fund-size overlap. Explicitly
 * does not attempt "why founders choose this firm," "which founders
 * to avoid," or "what differentiates them from competitors" - none
 * of those have any real supporting data anywhere on this site, and
 * generating confident answers anyway would be fabrication dressed
 * up as insight. See conversation notes for the full reasoning.
 */

// Real co-investment partners: other firms that hold at least one
// of the same public company as this firm, ranked by how many
// companies they share. Same underlying logic already proven
// correct in the Ecosystem Graph's portfolio-overlap edges.
function getCoInvestors(firm) {
  const counts = {};
  firm.holdings.forEach(h => {
    firms.forEach(other => {
      if (other.slug === firm.slug) return;
      if (other.holdings.some(oh => oh.name === h.name)) {
        if (!counts[other.slug]) counts[other.slug] = { firm: other, shared: [] };
        counts[other.slug].shared.push(h.name);
      }
    });
  });
  return Object.values(counts).sort((a, b) => b.shared.length - a.shared.length).slice(0, 6);
}

// Firms "most similar" by a transparent, real proxy: overlapping
// sector tags plus a comparable AUM tier - explicitly labeled as
// exactly that (sector + scale overlap), not a claim of deep
// qualitative similarity this data can't actually support.
function getSimilarFirms(firm) {
  const firmAum = parseAumNumber(firm.aum);
  return firms
    .filter(f => f.slug !== firm.slug)
    .map(f => {
      const sectorOverlap = (f.sectors || []).filter(s => (firm.sectors || []).includes(s)).length;
      const aumRatio = firmAum > 0 && parseAumNumber(f.aum) > 0
        ? Math.min(firmAum, parseAumNumber(f.aum)) / Math.max(firmAum, parseAumNumber(f.aum))
        : 0;
      const score = (sectorOverlap * 2) + aumRatio;
      return { firm: f, sectorOverlap, score };
    })
    .filter(x => x.sectorOverlap > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

// Renders the full section - appended into the firm detail page,
// not a separate route, since this is inherently per-firm content.
function renderFirmIntelligence(firm) {
  const coInvestors = getCoInvestors(firm);
  const similarFirms = getSimilarFirms(firm);

  const sectorsHTML = (firm.sectors || []).map(s => `<span class="partner-tag">${s}</span>`).join('');

  const coInvestorsHTML = coInvestors.length > 0
    ? coInvestors.map(c => `
        <a href="#${c.firm.slug}" class="fi-row">
          <span class="fi-row-name">${c.firm.name}</span>
          <span class="fi-row-meta">${c.shared.length} shared holding${c.shared.length === 1 ? '' : 's'}: ${c.shared.slice(0, 2).join(', ')}${c.shared.length > 2 ? '…' : ''}</span>
        </a>
      `).join('')
    : `<div class="fi-empty">No shared public holdings with other tracked firms yet.</div>`;

  const similarHTML = similarFirms.length > 0
    ? similarFirms.map(s => `
        <a href="#${s.firm.slug}" class="fi-row">
          <span class="fi-row-name">${s.firm.name}</span>
          <span class="fi-row-meta">${s.sectorOverlap} shared sector${s.sectorOverlap === 1 ? '' : 's'} · ${s.firm.aum}</span>
        </a>
      `).join('')
    : `<div class="fi-empty">No firms with overlapping sector focus found.</div>`;

  return `
    <div class="fi-section">
      <div class="detail-subhead" style="margin-top:0;">Firm Intelligence</div>
      <p class="fi-caveat">Three real, computed signals — not editorial opinion. This deliberately doesn't speculate on why founders choose this firm, who should avoid pitching it, or how it differs from "competitors," since none of that has real supporting data on this site.</p>

      <div class="fi-subhead">Sector Focus</div>
      <div class="partner-tag-row">${sectorsHTML}</div>

      <div class="fi-subhead">Frequent Co-Investors</div>
      <div class="fi-list">${coInvestorsHTML}</div>

      <div class="fi-subhead">Similar Firms (by sector &amp; fund size)</div>
      <div class="fi-list">${similarHTML}</div>
    </div>
  `;
}
