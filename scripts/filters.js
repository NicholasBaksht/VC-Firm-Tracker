/* ============================================================
   FILTERS.JS
   Founding Era / Sector / Investment Stage / Fund Size filtering:
   the active-filter state, every matchesX() predicate renderFirms()
   uses to decide what's visible, the sector chip builder, and the
   stage/sector/AUM chip click listeners.
   ============================================================ */
let activeFilter = 'all';

let activeSectors = new Set();

 // empty = no sector filter applied
let activeStages = new Set();

 // empty = no stage filter applied
let activeAumTier = 'all';

function matchesAumTier(firm) {
  const num = parseAumNumber(firm.aum);
  if (activeAumTier === 'mega') return num >= 50;
  if (activeAumTier === 'large') return num >= 20 && num < 50;
  if (activeAumTier === 'midsize') return num >= 10 && num < 20;
  if (activeAumTier === 'below10') return num >= 5 && num < 10;
  if (activeAumTier === 'below5') return num >= 0.5 && num < 5;
  if (activeAumTier === 'range200to500') return num >= 0.2 && num < 0.5;
  if (activeAumTier === 'range100to200') return num >= 0.1 && num < 0.2;
  if (activeAumTier === 'under100') return num < 0.1;
  return true; // 'all'
}

function matchesSectorFilter(firm) {
  if (activeSectors.size === 0) return true; // no sectors selected = show all
  return firm.sectors.some(s => activeSectors.has(s));
}

// Investment Stage cards - multi-select, OR within the group (e.g.
// Seed + Series A shows firms that invest in either), AND with
// every other active filter, same pattern as the sector chips.
function matchesStageFilter(firm) {
  if (activeStages.size === 0) return true; // no stages selected = show all
  const stages = firmStages[firm.slug] || [];
  return stages.some(s => activeStages.has(s));
}

function matchesFilter(firm) {
  const eraMatch =
    activeFilter === 'pre2000' ? firm.founded < 2000 :
    activeFilter === '2000s' ? (firm.founded >= 2000 && firm.founded < 2010) :
    activeFilter === '2010s' ? firm.founded >= 2010 :
    true; // 'all'
  return eraMatch && matchesAumTier(firm) && matchesSectorFilter(firm) && matchesStageFilter(firm);
}

// Builds the sector filter chips dynamically from every unique
// sector across all tracked firms - never hardcoded, so a new
// sector added to any firm automatically gets its own filter chip.
function renderSectorFilterChips() {
  const allSectors = [...new Set(firms.flatMap(f => f.sectors))].sort();
  document.getElementById('sectorFilterChips').innerHTML = allSectors.map(s => `
    <button class="chip" data-sector="${s}">${s}</button>
  `).join('');
}

// Filter chips - clicking one sets the active era filter
// (scoped to this group only, so it doesn't affect sector/AUM chips)
// Investment Stage cards - multi-select, toggle any number on/off.
// Uses closest() since clicks may land on the icon or label inside
// the card, not just the card element itself.
document.getElementById('stageCardGrid').addEventListener('click', (e) => {
  const card = e.target.closest('.stage-card');
  if (!card) return;
  const stage = card.dataset.stage;
  if (activeStages.has(stage)) {
    activeStages.delete(stage);
    card.classList.remove('active');
  } else {
    activeStages.add(stage);
    card.classList.add('active');
  }
  renderFirms();
});

// Sector chips - multi-select, toggle any number on/off
document.getElementById('sectorFilterChips').addEventListener('click', (e) => {
  if (!e.target.classList.contains('chip')) return;
  const sector = e.target.dataset.sector;
  if (activeSectors.has(sector)) {
    activeSectors.delete(sector);
    e.target.classList.remove('active');
  } else {
    activeSectors.add(sector);
    e.target.classList.add('active');
  }
  renderFirms();
});

// AUM tier chips - single-select, like the era filter
document.getElementById('aumFilterChips').addEventListener('click', (e) => {
  if (!e.target.classList.contains('chip')) return;
  document.querySelectorAll('#aumFilterChips .chip').forEach(c => c.classList.remove('active'));
  e.target.classList.add('active');
  activeAumTier = e.target.dataset.aum;
  renderFirms();
});
