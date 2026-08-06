/**
 * REPORTS.JS
 * VC Industry Reports: a hub page listing available reports, and a
 * reusable sector-report template that computes real stats from the
 * actual firms array for any given sector - so adding a new report
 * later (Climate, Fintech, etc.) means adding one config entry here,
 * not writing new computation logic.
 */

// Config for every available report. Each entry maps directly onto a
// real sector tag already used across the site's data, so nothing
// here needs invented data - just a title and a short, honest intro
// describing what the computed numbers below it show.
const REPORT_CONFIGS = {
  'ai-venture-capital': {
    title: 'State of AI Venture Capital',
    sector: 'AI',
    intro: 'A real, computed snapshot of every firm on this page with AI listed as a sector focus — how many, how much combined capital they manage, and which are the largest by AUM. Not a forecast or an editorial take, just what the tracked data actually shows right now.'
  },
  'healthcare-investors': {
    title: 'Top Healthcare Investors',
    sector: 'Healthcare',
    intro: 'Every firm on this page investing in healthcare, ranked by real assets under management. Spans everything from dedicated biotech and life sciences funds to generalist firms with a healthcare practice.'
  }
};

function renderReportsHub() {
  const cards = Object.entries(REPORT_CONFIGS).map(([slug, cfg]) => {
    const count = firms.filter(f => (f.sectors || []).includes(cfg.sector)).length;
    return `
      <a href="#reports/${slug}" class="report-card">
        <div class="report-card-title">${cfg.title}</div>
        <div class="report-card-meta">${count} firms tracked</div>
      </a>
    `;
  }).join('');

  document.getElementById('reportsHubView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">VC Industry Reports</div>
    <div class="reports-intro">
      <p>Real, computed breakdowns of the firms tracked on this page, grouped by sector. Every number below is derived live from the same data used everywhere else on the site — nothing here is estimated or invented.</p>
    </div>
    <div class="report-card-grid">${cards}</div>
  `;
}

// Reusable sector report renderer - computes everything fresh from
// the real firms array each time it's called, so it can never drift
// out of sync with the actual data, same principle as renderScaleBar.
function renderSectorReport(reportSlug) {
  const cfg = REPORT_CONFIGS[reportSlug];
  if (!cfg) {
    document.getElementById('sectorReportView').innerHTML = `
      <a href="#reports" class="detail-back">← Back to Reports</a>
      <div class="dashboard-title">Report not found</div>
    `;
    return;
  }

  const sectorFirms = firms.filter(f => (f.sectors || []).includes(cfg.sector))
    .slice() // don't mutate the shared firms array
    .sort((a, b) => parseAumNumber(b.aum) - parseAumNumber(a.aum));

  const totalFirms = sectorFirms.length;
  const combinedAUM = Math.round(sectorFirms.reduce((sum, f) => sum + parseAumNumber(f.aum), 0));
  const avgFoundedYear = totalFirms > 0
    ? Math.round(sectorFirms.reduce((sum, f) => sum + f.founded, 0) / totalFirms)
    : '—';
  const countryCount = new Set(sectorFirms.map(f => getCountryFromHQ(f.hq))).size;

  const topFirmsHTML = sectorFirms.slice(0, 10).map((f, i) => `
    <a href="#${f.slug}" class="report-firm-row">
      <span class="report-firm-rank">${String(i + 1).padStart(2, '0')}</span>
      <span class="report-firm-name">${f.name}</span>
      <span class="report-firm-aum">${f.aum}</span>
    </a>
  `).join('');

  document.getElementById('sectorReportView').innerHTML = `
    <a href="#reports" class="detail-back">← Back to Reports</a>
    <div class="dashboard-title">${cfg.title}</div>
    <div class="reports-intro"><p>${cfg.intro}</p></div>

    <div class="scale-bar">
      <div class="stat-card"><span class="stat-card-num">${totalFirms}</span><span class="stat-card-label">Firms Tracked</span></div>
      <div class="stat-card"><span class="stat-card-num">${formatCombinedAUM(combinedAUM)}</span><span class="stat-card-label">Combined AUM</span></div>
      <div class="stat-card"><span class="stat-card-num">${avgFoundedYear}</span><span class="stat-card-label">Avg. Founded Year</span></div>
      <div class="stat-card"><span class="stat-card-num">${countryCount}</span><span class="stat-card-label">Countries</span></div>
    </div>

    <div class="worldmap-sidebar-label" style="margin: 24px 0 14px;">Top ${Math.min(10, totalFirms)} by AUM</div>
    <div class="report-firm-list">${topFirmsHTML}</div>
  `;
}
