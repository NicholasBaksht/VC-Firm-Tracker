/**
 * VC-ECOSYSTEM-GRAPH.JS
 * An interactive D3 force-directed graph connecting firms by three
 * real, verifiable relationship types: firm lineage (reusing
 * FAMILY_TREE), shared public portfolio holdings, and shared board
 * seats across different firms' partners. Deliberately excludes
 * "co-investment history" (would just duplicate portfolio overlap
 * given the data actually tracked here) and "competitor firms"
 * (nothing in the data model supports that claim honestly).
 */

// Builds the full graph: one node per firm that has at least one
// real connection, plus edges for each verified relationship type.
function buildEcosystemGraph() {
  const edges = [];

  // --- Lineage edges (reuses the already-verified FAMILY_TREE data) ---
  FAMILY_TREE.forEach(group => {
    group.children.forEach(child => {
      edges.push({
        source: group.parentSlug,
        target: child.slug,
        type: 'lineage',
        label: `${child.founders.join(', ')} left to found this firm (${child.year})`
      });
    });
  });

  // --- Portfolio overlap edges (real shared holdings) ---
  const companyHolders = {};
  firms.forEach(f => f.holdings.forEach(h => {
    if (!companyHolders[h.name]) companyHolders[h.name] = [];
    companyHolders[h.name].push(f.slug);
  }));
  const overlapPairs = {}; // "slugA|slugB" -> [company names]
  Object.entries(companyHolders).forEach(([company, slugs]) => {
    if (slugs.length < 2) return;
    for (let i = 0; i < slugs.length; i++) {
      for (let j = i + 1; j < slugs.length; j++) {
        const key = [slugs[i], slugs[j]].sort().join('|');
        if (!overlapPairs[key]) overlapPairs[key] = [];
        overlapPairs[key].push(company);
      }
    }
  });
  Object.entries(overlapPairs).forEach(([key, companies]) => {
    const [source, target] = key.split('|');
    edges.push({
      source, target, type: 'portfolio',
      label: `Both hold: ${companies.slice(0, 3).join(', ')}${companies.length > 3 ? ` +${companies.length - 3} more` : ''}`
    });
  });

  // --- Shared board seat edges (real, matched across different firms) ---
  // Normalizes each board seat string to just its leading company name
  // (stripping anything after a parenthesis, e.g. "Microsoft
  // (1981-2014)" -> "Microsoft") so genuinely equivalent seats match
  // even when partners recorded the date range differently.
  const boardHolders = {}; // normalized company -> [{firmSlug, partnerName}]
  Object.entries(partnerProfiles).forEach(([slug, p]) => {
    (p.boardSeats || []).forEach(seat => {
      const normalized = seat.split('(')[0].trim();
      if (!normalized) return;
      if (!boardHolders[normalized]) boardHolders[normalized] = [];
      boardHolders[normalized].push({ firmSlug: p.firmSlug, partnerName: p.name });
    });
  });
  const boardPairs = {};
  Object.entries(boardHolders).forEach(([company, holders]) => {
    for (let i = 0; i < holders.length; i++) {
      for (let j = i + 1; j < holders.length; j++) {
        if (holders[i].firmSlug === holders[j].firmSlug) continue; // same firm, not cross-firm
        const key = [holders[i].firmSlug, holders[j].firmSlug].sort().join('|');
        if (!boardPairs[key]) boardPairs[key] = [];
        boardPairs[key].push(`${company} (${holders[i].partnerName} & ${holders[j].partnerName})`);
      }
    }
  });
  Object.entries(boardPairs).forEach(([key, seats]) => {
    const [source, target] = key.split('|');
    edges.push({
      source, target, type: 'board',
      label: `Shared board seat: ${seats[0]}`
    });
  });

  // Only include firms that actually appear in at least one edge -
  // an isolated firm with zero real connections would just be a
  // meaningless floating dot.
  const connectedSlugs = new Set(edges.flatMap(e => [e.source, e.target]));
  const nodes = firms
    .filter(f => connectedSlugs.has(f.slug))
    .map(f => ({ id: f.slug, name: f.name, aum: parseAumNumber(f.aum) }));

  return { nodes, edges };
}
