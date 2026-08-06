/**
 * FAMILY-TREE.JS
 * Renders the VC Family Tree: for each verified parent firm in
 * FAMILY_TREE, shows the real firm card, then the real spinout
 * firms below it, connected by simple visual lines. Every name,
 * year, and note is drawn from FAMILY_TREE's already-verified data
 * plus the real firm objects themselves - nothing computed or
 * invented here, just laid out.
 */

function renderFamilyTree() {
  const totalParents = FAMILY_TREE.length;
  const totalChildren = FAMILY_TREE.reduce((sum, group) => sum + group.children.length, 0);
  const totalAlumniFounders = new Set(
    FAMILY_TREE.flatMap(group => group.children.flatMap(c => c.founders))
  ).size;

  const groupsHTML = FAMILY_TREE.map(group => {
    const parent = firms.find(f => f.slug === group.parentSlug);
    if (!parent) return ''; // fails quietly if a slug ever goes stale

    const childrenHTML = group.children.map(child => {
      const childFirm = firms.find(f => f.slug === child.slug);
      if (!childFirm) return '';

      const foundersHTML = child.founders.map(name =>
        `<span class="tree-founder-tag">${name}</span>`
      ).join('');

      // Show up to 3 real holdings from the child firm as its
      // "notable companies" row, same real data already on its
      // own firm card - no separate invented list per child.
      const holdingsHTML = childFirm.holdings.slice(0, 3).map(h => `
        <div class="tree-company-row">
          <span class="tree-company-name">${h.name}</span>
          <span class="tree-company-ticker">${h.ticker}</span>
        </div>
      `).join('');

      return `
        <div class="tree-child-branch">
          <a href="#${child.slug}" class="tree-child-card">
            <div class="tree-child-name">${childFirm.name}</div>
            <div class="tree-child-meta">Founded ${child.year} by ${child.founders.join(', ')}</div>
            <div class="tree-child-note">${child.note}</div>
            <div class="tree-founders-row">${foundersHTML}</div>
          </a>
          ${holdingsHTML ? `<div class="tree-companies">${holdingsHTML}</div>` : ''}
        </div>
      `;
    }).join('');

    return `
      <div class="tree-group">
        <a href="#${parent.slug}" class="tree-parent-card">
          <div class="tree-parent-name">${parent.name}</div>
          <div class="tree-parent-meta">${parent.aum} AUM · Founded ${parent.founded} · ${parent.hq}</div>
        </a>
        <div class="tree-connector-label">Spun Out / Founded</div>
        <div class="tree-children-row">${childrenHTML}</div>
      </div>
    `;
  }).join('');

  document.getElementById('familyTreeView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">VC Family Tree</div>
    <div class="reports-intro">
      <p>Real, independently verified spinout relationships between firms tracked on this page — partners who left one firm to found another. This is not a complete map of every VC lineage in existence, just the connections specifically fact-checked while each firm was researched and added here.</p>
    </div>

    <div class="scale-bar" style="margin-bottom: 32px;">
      <div class="stat-card"><span class="stat-card-num">${totalParents}</span><span class="stat-card-label">Parent Firms</span></div>
      <div class="stat-card"><span class="stat-card-num">${totalChildren}</span><span class="stat-card-label">Verified Spinouts</span></div>
      <div class="stat-card"><span class="stat-card-num">${totalAlumniFounders}</span><span class="stat-card-label">Alumni Founders</span></div>
    </div>

    ${groupsHTML}
  `;
}
