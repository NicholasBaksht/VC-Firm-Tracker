/* ============================================================
   SEARCH.JS
   The main rankings-page search box: search term state, the
   matchesSearch() predicate, and the search input listener.
   (People-directory and Portfolio-Explorer search boxes live in
   people-portfolio.js instead, since they're page-specific and
   tightly coupled to those renderers - see the Phase 2 summary.)
   ============================================================ */
// Current search text and active filters - all start "empty"/off
let searchTerm = '';

function matchesSearch(firm) {
  if (searchTerm === '') return true;
  const term = searchTerm.toLowerCase();
  if (firm.name.toLowerCase().includes(term)) return true;
  return firm.holdings.some(h =>
    h.name.toLowerCase().includes(term) || h.ticker.toLowerCase().includes(term)
  );
}

// Search box - filters live as you type
document.getElementById('searchInput').addEventListener('input', (e) => {
  searchTerm = e.target.value;
  renderFirms();
});
