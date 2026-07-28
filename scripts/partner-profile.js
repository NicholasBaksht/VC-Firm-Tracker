/* ============================================================
   PARTNER-PROFILE.JS
   Renders an individual partner's bio page.
   ============================================================ */
function renderPartnerProfile(slug) {
  const p = partnerProfiles[slug];
  if (!p) return;

  const investmentsHTML = p.notableInvestments.map(inv => `
    <span class="partner-investment-chip">${inv.name}${inv.ticker ? `<span class="ticker-tag">${inv.ticker}</span>` : ''}</span>
  `).join('');

  const boardHTML = p.boardSeats.map(b => `<li>${b}</li>`).join('');
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

  document.getElementById('partnerView').innerHTML = `
    <a href="#${p.firmSlug}" class="detail-back">← Back to ${p.firm}</a>
    <div class="detail-card">
      <div class="partner-title">${p.name}</div>
      <div class="partner-role-line">${p.title} · <a href="#${p.firmSlug}">${p.firm}</a> · Joined ${p.joinedYear}</div>

      <div class="partner-stat-row">
        <div class="detail-stat">
          <div class="num">${new Date().getFullYear() - p.joinedYear}</div>
          <div class="lbl">Years at Firm</div>
        </div>
        <div class="detail-stat">
          <div class="num">${p.ipoCount}</div>
          <div class="lbl">IPOs</div>
        </div>
        <div class="detail-stat">
          <div class="num">${p.majorExits}</div>
          <div class="lbl">Major Exits</div>
        </div>
        <div class="detail-stat">
          <div class="num">${p.boardSeats.length}</div>
          <div class="lbl">Board Seats</div>
        </div>
      </div>

      <div class="partner-section">
        <div class="detail-subhead" style="margin-top:0;">Biography</div>
        <p class="partner-bio">${p.biography}</p>
      </div>

      <div class="partner-section">
        <div class="detail-subhead" style="margin-top:0;">Investment Focus</div>
        <div class="partner-tag-row">${focusHTML}</div>
      </div>

      <div class="partner-section">
        <div class="detail-subhead" style="margin-top:0;">Notable Investments &amp; Public Holdings</div>
        <div>${investmentsHTML}</div>
      </div>

      <div class="partner-section">
        <div class="detail-subhead" style="margin-top:0;">Board Seats</div>
        <ul class="partner-list">${boardHTML}</ul>
      </div>

      <div class="partner-section">
        <div class="detail-subhead" style="margin-top:0;">Previous Experience</div>
        <ul class="partner-list">${experienceHTML}</ul>
      </div>

      <div class="partner-section">
        <div class="detail-subhead" style="margin-top:0;">Education</div>
        <ul class="partner-list">${educationHTML}</ul>
      </div>

      <div class="partner-section">
        <div class="detail-subhead" style="margin-top:0;">Career Timeline</div>
        <div class="timeline">${timelineHTML}</div>
      </div>

      <div class="partner-section">
        <div class="detail-subhead" style="margin-top:0;">Sources &amp; References</div>
        <div class="partner-source-list">${sourcesHTML}</div>
      </div>
    </div>
  `;
}
