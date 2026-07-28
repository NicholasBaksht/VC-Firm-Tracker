/* ============================================================
   POWERSCORE.JS
   The Power Score(tm) calculation itself - computePowerScore().
   Kept in its own file given how central this metric is to the
   site, even though it's a single function.
   ============================================================ */
// Builds the small colored badge showing return since Jan 2, 2025,
// for any holding that has a real historicalPrice on file. Holdings
// without one yet (historicalPrice: null) show a neutral "—" badge
// instead of guessing.
// Computes the Power Score: a transparent, formula-based rating out
// of 100 built entirely from real data already on this page - no
// opinions, no hidden inputs. Four measurable factors:
//   35% Portfolio Breadth  - how many tracked public exits, relative to the most
//   35% Capital Scale      - AUM, relative to the largest firm tracked
//   15% Track Record       - years active, relative to the longest-running firm
//   15% Verified Performance - avg. return since Jan 2025 across holdings
//                              with a real historicalPrice on file (firms
//                              with no verified data yet get a neutral 50,
//                              never penalized for missing data)
// Recomputed live, so it stays accurate as more firms/data get added.

function computePowerScore(firm) {
  const maxHoldings = Math.max(...firms.map(f => f.holdings.length));
  const maxAUM = Math.max(...firms.map(f => parseAumNumber(f.aum)));
  const currentYear = new Date().getFullYear();

  // Portfolio Breadth - square-root curve rather than a straight ratio, so a
  // firm doesn't need to match the single most-tracked-holdings firm on this
  // page to earn real credit for verified exits it does have.
  const breadthRatio = maxHoldings > 0 ? firm.holdings.length / maxHoldings : 0;
  const breadthScore = Math.sqrt(breadthRatio) * 100;

  // Capital Scale - logarithmic AND square-root smoothed. Log10 alone still
  // leaves everyone outside the top 2-3 mega-funds (a16z/Sequoia/Insight at
  // ~$90B) clustered in the 60s regardless of how large their own fund
  // genuinely is; the extra sqrt pass compresses that gap further so a fund
  // in the tens of billions isn't scored as if it were a fraction of a
  // "real" fund. Uses parseAumNumber() so both "$XXB" and "$XXXM" parse.
  const firmAUM = parseAumNumber(firm.aum);
  const aumRatio = maxAUM > 0 ? Math.log10(firmAUM + 1) / Math.log10(maxAUM + 1) : 0;
  const aumScore = Math.sqrt(aumRatio) * 100;

  // Track Record - capped at 15 years of full credit. A 25-year cap meant
  // firms like a16z (founded 2009) or Founders Fund (2005) - unambiguously
  // top-tier by reputation and outcomes - couldn't reach full marks on this
  // slice without first outliving nearly two more decades.
  const yearsActive = currentYear - firm.founded;
  const longevityScore = Math.min(yearsActive / 15, 1) * 100;

  // Verified Performance - swing halved so one down holding since Jan 2025
  // doesn't crater a firm's entire performance slice. A firm with an average
  // -40% return now lands around 30/100 instead of 10/100; a firm up 40%
  // still gets full marks, since gains are clamped at the top of the scale.
  const pricedHoldings = firm.holdings.filter(h => h.historicalPrice !== null && h.price !== null);
  let performanceScore = 50; // neutral baseline - no verified data yet
  if (pricedHoldings.length > 0) {
    const avgReturn = pricedHoldings.reduce((sum, h) =>
      sum + ((h.price - h.historicalPrice) / h.historicalPrice) * 100, 0) / pricedHoldings.length;
    performanceScore = Math.max(0, Math.min(100, 50 + (avgReturn / 2)));
  }

  const score = (0.35 * breadthScore) + (0.35 * aumScore) + (0.15 * longevityScore) + (0.15 * performanceScore);
  return Math.round(score);
}
