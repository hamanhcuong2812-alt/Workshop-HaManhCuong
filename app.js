const english = document.documentElement.lang === 'en';
const siteRoot = new URL('.', document.currentScript.src);
const menu = document.querySelector('#menu-toggle');
const backdrop = document.querySelector('.backdrop');
const mobileViewport = matchMedia('(max-width:700px)');
function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
  menu.setAttribute('aria-expanded', String(open));
  backdrop.hidden = !open;
  if (document.body.classList.contains('report-page')) {
    const desktop = !mobileViewport.matches;
    document.querySelector('#sidebar').inert = desktop ? open : !open;
    menu.setAttribute('aria-expanded', String(desktop ? !open : open));
    if (desktop) backdrop.hidden = true;
  }
}
menu.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
backdrop.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
const current = document.querySelector('[aria-current="page"]');
if (current) current.scrollIntoView({ block: 'nearest' });
if (document.body.classList.contains('report-page')) setMenu(false);
mobileViewport.addEventListener('change', () => setMenu(false));

const search = document.querySelector('#search');
const clear = document.querySelector('#clear-search');
const navigation = document.querySelector('#navigation');
const results = document.querySelector('#search-results');
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd').toLowerCase();
let indexPromise;
let searchRevision = 0;
async function renderSearch() {
  const revision = ++searchRevision;
  const query = normalize(search.value.trim());
  clear.hidden = !query;
  navigation.hidden = !!query;
  results.hidden = !query;
  results.replaceChildren();
  if (!query) return;
  results.textContent = (document.documentElement.lang === 'en' ? 'Searching…' : 'Đang tìm kiếm…');
  try {
    indexPromise ??= fetch(new URL((document.documentElement.lang === 'en' ? 'en/' : '') + 'search-index.json', siteRoot)).then(response => {
      if (!response.ok) throw new Error('Search index unavailable');
      return response.json();
    }).catch(error => { indexPromise = undefined; throw error; });
    const index = await indexPromise;
    if (revision !== searchRevision) return;
    const tokens = query.split(/\s+/);
    const matches = index.filter(page => tokens.every(token => normalize(page.title + ' ' + page.text).includes(token))).sort((a, b) => Number(normalize(b.title).includes(query)) - Number(normalize(a.title).includes(query)));
    results.textContent = matches.length ? `${matches.length} ${document.documentElement.lang === 'en' ? 'results' : 'kết quả'}` : (document.documentElement.lang === 'en' ? 'No matching content found.' : 'Chưa tìm thấy nội dung phù hợp.');
    for (const page of matches.slice(0, 25)) {
      const link = document.createElement('a');
      link.href = page.route;
      link.textContent = page.title;
      const excerpt = document.createElement('small');
      const position = Math.max(0, normalize(page.text).indexOf(tokens[0]) - 35);
      excerpt.textContent = page.text.slice(position, position + 130) + '…';
      link.append(excerpt);
      results.append(link);
    }
  } catch {
    if (revision === searchRevision) results.textContent = english ? 'Search data could not be loaded. Please try again.' : 'Chưa tải được dữ liệu tìm kiếm. Hãy thử lại.';
  }
}
search.addEventListener('input', renderSearch);
clear.addEventListener('click', () => { search.value = ''; renderSearch(); search.focus(); });

document.querySelectorAll('.copy-code').forEach(button => button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(button.parentElement.querySelector('code').textContent);
    button.textContent = english ? 'Copied' : 'Đã sao chép';
  } catch {
    button.textContent = english ? 'Select the code to copy' : 'Chọn mã để sao chép';
  }
  setTimeout(() => { button.textContent = english ? 'Copy' : 'Sao chép'; }, 2200);
}));
const viewer = document.querySelector('#image-viewer');
document.querySelectorAll('article img').forEach(image => {
  image.tabIndex = 0;
  image.setAttribute('role', 'button');
  image.setAttribute('aria-label', (english ? 'Enlarge image: ' : 'Phóng to ảnh: ') + image.alt);
  const open = () => {
    viewer.querySelector('img').src = image.src;
    viewer.querySelector('img').alt = image.alt;
    viewer.querySelector('p').textContent = image.alt;
    viewer.showModal();
  };
  image.addEventListener('click', open);
  image.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
});
document.querySelector('#close-image').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });

// Native language pages, matching the bilingual source report.
const languageSelect = document.querySelector('#report-language');
languageSelect?.addEventListener('change', () => {
  const target = languageSelect.selectedOptions[0].dataset.url;
  if (target) location.assign(target);
});
// Clear legacy automatic-translation cookies; English now has its own content.
for (const domain of ['', location.hostname, '.' + location.hostname]) {
  document.cookie = `googtrans=; Max-Age=0; path=/${domain ? '; domain=' + domain : ''}`;
}
