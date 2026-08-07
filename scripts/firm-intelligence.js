/**
 * FIRM-INTELLIGENCE.JS
 * Real co-investment patterns for a firm - other firms that hold
 * at least one of the same public company, ranked by how many
 * companies they share. This is the one genuinely new signal not
 * already shown elsewhere on the firm detail page (sectors already
 * appear in the "For Founders" callout, and similar firms are
 * already handled by renderSimilarFirms) - see conversation notes
 * for why the other originally-planned dimensions were skipped.
 */
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

function renderFirmIntelligence(firm) {
  const coInvestors = getCoInvestors(firm);
  if (coInvestors.length === 0) return ''; // nothing to show, skip the section entirely

  const rowsHTML = coInvestors.map(c => `
    <a href="#${c.firm.slug}" class="fi-row">
      <span class="fi-row-name">${c.firm.name}</span>
      <span class="fi-row-meta">${c.shared.length} shared holding${c.shared.length === 1 ? '' : 's'}: ${c.shared.slice(0, 2).join(', ')}${c.shared.length > 2 ? '…' : ''}</span>
    </a>
  `).join('');

  return `
    <div class="detail-subhead">Frequent Co-Investors</div>
    <div class="fi-list">${rowsHTML}</div>
  `;
}
