/* ============================================================
   PARTNER-PROFILE.JS
   Renders an individual partner's bio page as a three-column
   layout: sidebar stats/focus/education, a center career
   timeline, and a right-hand panel of investments and board
   seats. Every field here already exists on the partner object -
   nothing new is computed or invented for this redesign.
   ============================================================ */
function renderPartnerProfile(slug) {
  const p = partnerProfiles[slug];
  if (!p) return;

  const investmentsHTML = p.notableInvestments.map(inv => `
    <div class="pg-investment-row">
      <span>${inv.name}</span>
      ${inv.ticker ? `<span class="ticker-tag">${inv.ticker}</span>` : ''}
    </div>
  `).join('');

  const boardHTML = p.boardSeats.length > 0
    ? p.boardSeats.map(b => `<div class="pg-board-row">${b}</div>`).join('')
    : `<div class="pg-empty">No board seats on file.</div>`;

  const experienceHTML = p.previousExperience.map(e => `<li>${e}</li>`).join('');
  const educationHTML = p.education.map(e => `<li>${e}</li>`).join('');
  const focusHTML = p.investmentFocus.map(f => `<span class="partner-tag">${f}</span>`).join('');

  const timelineHTML = p.careerTimeline.map(t => `
    <div class="timeline-item">
      <div class="timeline-year">${t.year}</div>
      <div class="timeline-event">${t.event}</div>
    </div>
  `).join('');

  const sourcesHTML = p.sources.map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label} ↗</a>`).join('');

  // Career Path Summary: a real, honest sequence built from actual
  // previousExperience entries plus the partner's current role -
  // not invented, just the same data already shown above,
  // presented as a compact path rather than a bulleted list.
  const pathSteps = [...p.previousExperience, `${p.title}, ${p.firm} (${p.joinedYear})`];
  const pathHTML = pathSteps.map((step, i) => `
    ${i > 0 ? '<div class="pg-path-arrow">↓</div>' : ''}
    <div class="pg-path-step ${i === pathSteps.length - 1 ? 'pg-path-current' : ''}">${step}</div>
  `).join('');

  document.getElementById('partnerView').innerHTML = `
    <a href="#${p.firmSlug}" class="detail-back">← Back to ${p.firm}</a>

    <div class="pg-header">
      <div class="partner-title" style="margin: 0;">${p.name}</div>
      <div class="partner-role-line" style="margin-bottom: 0;">${p.title} · <a href="#${p.firmSlug}">${p.firm}</a> · Joined ${p.joinedYear}</div>
    </div>

    <div class="pg-layout">
      <div class="pg-sidebar-left">
        <div class="pg-stats-grid">
          <div class="pg-stat"><span class="pg-stat-num">${new Date().getFullYear() - p.joinedYear}</span><span class="pg-stat-label">Years at Firm</span></div>
          <div class="pg-stat"><span class="pg-stat-num">${p.ipoCount}</span><span class="pg-stat-label">IPOs</span></div>
          <div class="pg-stat"><span class="pg-stat-num">${p.majorExits}</span><span class="pg-stat-label">Major Exits</span></div>
          <div class="pg-stat"><span class="pg-stat-num">${p.boardSeats.length}</span><span class="pg-stat-label">Board Seats</span></div>
        </div>

        <div class="pg-side-label">Investment Focus</div>
        <div class="partner-tag-row">${focusHTML}</div>

        <div class="pg-side-label">Education</div>
        <ul class="partner-list">${educationHTML || '<li>Not publicly disclosed.</li>'}</ul>

        <div class="pg-side-label">Career Path Summary</div>
        <div class="pg-path">${pathHTML}</div>
      </div>

      <div class="pg-center">
        <div class="pg-side-label" style="margin-top: 0;">Career Timeline</div>
        <div class="timeline">${timelineHTML}</div>

        <div class="pg-side-label">Biography</div>
        <p class="partner-bio">${p.biography}</p>

        <div class="pg-side-label">Previous Experience</div>
        <ul class="partner-list">${experienceHTML || '<li>Not publicly disclosed.</li>'}</ul>

        <div class="pg-side-label">Sources &amp; References</div>
        <div class="partner-source-list">${sourcesHTML}</div>
      </div>

      <div class="pg-sidebar-right">
        <div class="pg-panel">
          <div class="pg-side-label" style="margin-top: 0;">Notable Investments</div>
          ${investmentsHTML || '<div class="pg-empty">None on file.</div>'}
        </div>
        <div class="pg-panel">
          <div class="pg-side-label" style="margin-top: 0;">Board Seats</div>
          ${boardHTML}
        </div>
      </div>
    </div>
  `;
}
