const filterButtons = [...document.querySelectorAll('[data-filter]')];
const postItems = [...document.querySelectorAll('[data-post-item]')];
const searchInput = document.querySelector('[data-search]');
const emptyState = document.querySelector('[data-empty]');
let activeCategory = new URLSearchParams(location.search).get('category') || '全部内容';

function applyFilters() {
  const query = searchInput?.value.trim().toLowerCase() || '';
  let visible = 0;

  postItems.forEach((item) => {
    const categoryMatches = activeCategory === '全部内容' || item.dataset.category === activeCategory;
    const searchMatches = !query || item.dataset.searchText?.toLowerCase().includes(query);
    const show = Boolean(categoryMatches && searchMatches);
    item.classList.toggle('hidden', !show);
    if (show) visible += 1;
  });

  filterButtons.forEach((button) => {
    const active = button.dataset.filter === activeCategory;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('bg-ink-950', active);
    button.classList.toggle('text-white', active);
    button.classList.toggle('border', !active);
    button.classList.toggle('border-line', !active);
    button.classList.toggle('bg-white', !active);
    button.classList.toggle('text-ink-500', !active);
  });

  emptyState?.classList.toggle('hidden', visible > 0);
}

filterButtons.forEach((button) => button.addEventListener('click', () => {
  activeCategory = button.dataset.filter || '全部内容';
  applyFilters();
}));
searchInput?.addEventListener('input', applyFilters);
applyFilters();
