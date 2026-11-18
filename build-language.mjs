import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { marked } from './vendor/marked.esm.js';

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
const assetVersion = file => createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 12);
const styleVersion = assetVersion('style.css');
const scriptVersion = assetVersion('app.js');
const basePath = (process.env.SITE_BASE_PATH || '').replace(/^\/+|\/+$/g, '');
if (basePath && !/^[a-zA-Z0-9_-][a-zA-Z0-9._-]*$/.test(basePath)) throw new Error('SITE_BASE_PATH must be a repository name or /repository-name/.');
const baseUrl = basePath ? `/${basePath}` : '';
const language = process.env.REPORT_LANGUAGE || 'vi';
const english = language === 'en';
const contentRoot = english ? 'content-en' : 'content';
const languagePrefix = english ? '/en' : '';
const output = path.resolve(english ? 'dist/en' : 'dist');
// Rebuild generated output so removed source pages cannot remain online.
if (![path.resolve('dist'), path.resolve('dist/en')].includes(output)) throw new Error('Unexpected output directory');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
if (!english) fs.cpSync('assets', output, { recursive: true });
fs.writeFileSync(path.join(output, 'style.css'), fs.readFileSync('style.css', 'utf8').replaceAll("url('/", "url('" + baseUrl + "/"));
fs.writeFileSync(path.join(output, 'site-config.json'), JSON.stringify({ basePath: baseUrl }));
fs.copyFileSync('app.js', path.join(output, 'app.js'));

const pages = walk(contentRoot).filter(file => file.endsWith('.md')).map(file => {
  const raw = fs.readFileSync(file, 'utf8');
  const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  const metadata = frontmatter?.[1] || '';
  const title = metadata.match(/^title:\s*["']?(.*?)["']?\s*$/m)?.[1] || path.basename(file);
  const relative = path.relative(contentRoot, path.dirname(file)).replaceAll('\\', '/');
  return { title, displayNumber: metadata.match(/^pre:.*?<b>\s*(\d+(?:\.\d+)*)\.?\s*<\/b>/m)?.[1], route: '/' + relative.toLowerCase() + '/', body: raw.slice(frontmatter?.[0].length || 0), weight: Number(metadata.match(/^weight:\s*(\d+)/m)?.[1] || 0), section: relative.split('/')[0].toLowerCase() };
});
const sections = [
  ['1-worklog', '1. Nhật ký công việc'], ['2-proposal', '2. Bản đề xuất'],
  ['3-events', '3. Các sự kiện meetup đã tham gia'],
  ['4-workshop', '4. Workshop'], ['5-self-evaluation', '5. Tự đánh giá'],
  ['6-feedback', '6. Chia sẻ, đóng góp ý kiến']
];
for (const [slug, title] of sections.filter(([slug]) => !pages.some(page => page.route === `/${slug}/`))) {
  pages.push({ title: title.slice(3), route: `/${slug}/`, section: slug, weight: 0, body: 'Nội dung mục này đang chờ bổ sung.\n\nBạn có thể xem [Nhật ký công việc](/1-worklog/), [Bản đề xuất](/2-proposal/) và [Workshop](/4-workshop/).' });
}

const home = {
  title: 'Báo cáo thực tập', route: '/', section: '', weight: 0,
  body: fs.readFileSync(contentRoot + '/trang-chu.html', 'utf8')
};
pages.unshift(home);
const byRoute = new Map(pages.map(page => [page.route, page]));
const ordered = [home];
function children(route) {
  return pages.filter(page => page.route !== route && page.route.startsWith(route) && page.route.slice(route.length).split('/').filter(Boolean).length === 1).sort((a, b) => a.weight - b.weight || a.route.localeCompare(b.route, 'vi', { numeric: true }));
}
function addOrder(page) {
  ordered.push(page);
  children(page.route).forEach(addOrder);
}
sections.forEach(([slug]) => addOrder(byRoute.get(`/${slug}/`)));

function resolveLink(href, page) {
  if (/^(https?:|mailto:|tel:|data:)/i.test(href)) return href;
  if (href.startsWith('#')) return href;
  const url = new URL(href, 'https://local.invalid' + page.route);
  url.pathname = url.pathname.replace(/^\/en(?=\/)/, '');
  const pathname = url.pathname.startsWith('/images/') || url.pathname.startsWith('/evidence/') ? url.pathname : url.pathname.toLowerCase();
  return pathname + url.search + url.hash;
}
function navBranch(page, current) {
  const list = children(page.route);
  const active = page.route === current.route;
  const expanded = current.route.startsWith(page.route) || (page.section === '4-workshop' && current.section === '4-workshop');
  let label = page.title;
  const number = page.displayNumber || page.route.split('/').filter(Boolean).at(-1)?.match(/^(\d+(?:\.\d+)*)-/)?.[1];
  if (number?.includes('.') && !label.startsWith(number) && !label.startsWith('Worklog')) label = number + '. ' + label;
  const link = `<a href="${page.route}"${active ? ' aria-current="page"' : ''}>${escape(label).replace(/^(\d+(?:\.\d+)*\.?)\s/, '<b>$1</b> ')}</a>`;
  return `<li class="${expanded ? 'in-path' : ''}">${list.length ? `<details${expanded ? ' open' : ''}><summary>${link}<span class="chevron" aria-hidden="true">›</span></summary><ul>${list.map(child => navBranch(child, current)).join('')}</ul></details>` : link}</li>`;
}
function sidebar(page) {
  return `<aside id="sidebar" aria-label="Điều hướng báo cáo"><div class="sidebar-header"><a class="logo" href="/" aria-label="Trang chủ báo cáo"><img src="/AWS_Logo.svg" alt="AWS" width="80" height="50"></a><div class="search-wrap"><span aria-hidden="true">⌕</span><input id="search" type="search" placeholder="Tìm kiếm tài liệu…" aria-label="Tìm kiếm tài liệu" autocomplete="off"><button id="clear-search" aria-label="Xóa tìm kiếm" hidden>×</button></div></div><div class="sidebar-scroll"><div id="search-results" aria-live="polite" hidden></div><nav id="navigation"><ul class="sections">${sections.map(([slug, title]) => {
    const target = byRoute.get(`/${slug}/`);
    return navBranch({ ...target, title }, page);
  }).join('')}</ul></nav><div class="shortcuts"><a href="https://awsstudygroup.com" target="_blank" rel="noopener">AWS Study Group - Blog ↗</a><a href="https://www.facebook.com/groups/awsstudygroupfcj" target="_blank" rel="noopener">AWS Study Group - Nhóm FB ↗</a></div><div class="sidebar-person"><div class="language-switch"><label for="report-language">Ngôn ngữ / Language</label><select id="report-language" aria-label="Ngôn ngữ / Language"><option value="vi" data-url="${baseUrl}${page.route}"${!english ? " selected" : ""}>Tiếng Việt</option><option value="en" data-url="${baseUrl}/en${page.route}"${english ? " selected" : ""}>English</option></select></div><small>Hà Mạnh Cường</small></div><footer><span>Cập nhật</span><em>12-11-2026</em><span>Đề tài</span><em>Vietnam IT Job Market</em><span>Chương trình</span><em>First Cloud AI Journey</em></footer></div></aside><button class="backdrop" aria-label="Đóng điều hướng" hidden></button>`;
}
const search = [];
for (const page of pages) {
  // Preserve source headings while removing a repeated page-level title from Hugo content.
  page.body = page.body.replace(/^# [^\n]+\n/m, '');
  const renderer = new marked.Renderer();
  const ids = new Map();
  renderer.heading = ({ tokens, depth }) => {
    const text = renderer.parser.parseInline(tokens);
    const plain = text.replace(/<[^>]*>/g, '');
    const slug = plain.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
    const repeat = ids.get(slug) || 0;
    ids.set(slug, repeat + 1);
    const id = slug + (repeat ? '-' + repeat : '');
    return `<h${depth} id="${id}">${text}<a class="anchor" href="#${id}" aria-label="Liên kết đến ${escape(plain)}">#</a></h${depth}>`;
  };
  let article = marked.parse(page.body, { renderer, gfm: true });
  article = article.replace(/(href|src)="([^"]*)"/g, (_, attr, href) => `${attr}="${escape(resolveLink(href.replaceAll('&amp;', '&'), page))}"`);
  article = article.replace(/<table>/g, '<div class="table-scroll" tabindex="0" role="region" aria-label="Bảng nội dung"><table>').replace(/<\/table>/g, '</table></div>');
  article = article.replace(/<img /g, '<img loading="lazy" decoding="async" ');
  article = article.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/g, '<div class="code-block"><button class="copy-code" aria-label="Sao chép đoạn mã">Sao chép</button><pre><code$1>$2</code></pre></div>');
  const index = ordered.findIndex(item => item.route === page.route);
  const previous = ordered[index - 1];
  const next = ordered[index + 1];
  const breadcrumbs = page.route === '/' ? '' : `<a href="/">Báo cáo thực tập</a><span>›</span>${page.route.split('/').filter(Boolean).map((segment, i, array) => {
    const route = '/' + array.slice(0, i + 1).join('/') + '/';
    const target = byRoute.get(route);
    return target ? `<a href="${route}">${escape(target.title)}</a>` : '';
  }).join('<span>›</span>')}`;
  const sectionLabel = page.section === '4-workshop' ? 'Tài liệu nhóm · Cập nhật 11/11/2026' : '';
  let html = `<!doctype html><html lang="${language}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${english ? "Internship report by Hà Mạnh Cường – Vietnam IT Job Market. AWS learning journal, project proposal, and deployment workshop." : "Báo cáo thực tập Hà Mạnh Cường – Vietnam IT Job Market. Worklog, bản đề xuất và Workshop triển khai trên AWS."}"><meta name="theme-color" content="#283e5b"><title>${escape(page.title)} – Hà Mạnh Cường</title><link rel="stylesheet" href="/style.css?v=${styleVersion}"><script src="/app.js?v=${scriptVersion}" defer></script></head><body${page.route === "/" ? ' class="homepage"' : page.route !== '/' ? ' class="report-page"' : ""}>${sidebar(page)}<main id="main"><header class="topbar"><button id="menu-toggle" aria-label="Mở điều hướng" aria-expanded="false" aria-controls="sidebar">☰</button><div class="breadcrumbs">${breadcrumbs || 'Vietnam IT Job Market'}</div><a class="home-link" href="/" aria-label="Về trang chủ">⌂</a></header><div class="content"><h1>${escape(page.title)}</h1><article>${article}</article><nav class="page-navigation" aria-label="Trang trước và tiếp theo">${previous ? `<a href="${previous.route}" rel="prev"><small>← Trang trước</small>${escape(previous.title)}</a>` : '<span></span>'}${next ? `<a href="${next.route}" rel="next"><small>Trang tiếp theo →</small>${escape(next.title)}</a>` : ''}</nav>${sectionLabel ? `<p class="document-meta source-date">${sectionLabel}</p>` : ''}<p class="page-credit">Hà Mạnh Cường · Authentication & User · Vietnam IT Job Market</p></div>${next ? `<a class="edge-next" href="${next.route}" aria-label="Trang tiếp theo: ${escape(next.title)}">›</a>` : ''}${previous ? `<a class="edge-prev" href="${previous.route}" aria-label="Trang trước: ${escape(previous.title)}">‹</a>` : ''}</main><dialog id="image-viewer" aria-label="Xem ảnh minh chứng"><button id="close-image" aria-label="Đóng ảnh">×</button><img alt=""><p></p></dialog></body></html>`;
  const directory = path.join(output, page.route);
  fs.mkdirSync(directory, { recursive: true });
  if (english) html = localizeInterface(html);
  const deployedHtml = html.replace(/(href|src)="\/(?!\/)([^"]*)"/g, (_, attribute, target) => `${attribute}="${baseUrl}${attribute === "href" && byRoute.has("/" + target.split(/[?#]/)[0]) ? languagePrefix : ""}/${target}"`);
  fs.writeFileSync(path.join(directory, 'index.html'), deployedHtml.replace('</head>', `<link rel="alternate" hreflang="vi" href="${baseUrl}${page.route}"><link rel="alternate" hreflang="en" href="${baseUrl}/en${page.route}"></head>`));
  search.push({ title: page.title, route: baseUrl + languagePrefix + page.route, text: article.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 18000) });
}
fs.writeFileSync(path.join(output, 'search-index.json'), JSON.stringify(search));
fs.writeFileSync(path.join(output, '404.html'), '<!doctype html><html lang="vi"><meta charset="utf-8"><title>Không tìm thấy trang</title><body><h1>Không tìm thấy trang</h1><p><a href="' + baseUrl + '/">Về trang chủ báo cáo</a></p></body></html>');
console.log(`Built ${pages.length} pages with ${search.length} search entries.`);

function localizeInterface(html) {
  const labels = {"Báo cáo thực tập": "Internship Report", "1. Nhật ký công việc": "1. Worklog", "2. Bản đề xuất": "2. Proposal", "3. Các bài blogs đã đăng": "3. Published blog posts", "3. Các sự kiện meetup đã tham gia": "3. Meetup events attended", "5. Tự đánh giá": "5. Self-evaluation", "6. Chia sẻ, đóng góp ý kiến": "6. Feedback and suggestions", "Điều hướng báo cáo": "Report navigation", "Trang chủ báo cáo": "Report home", "Tìm kiếm tài liệu…": "Search documentation…", "Tìm kiếm tài liệu": "Search documentation", "Xóa tìm kiếm": "Clear search", "Nhóm FB": "FB Group", "Cập nhật": "Updated", "Đề tài": "Project", "Chương trình": "Program", "Đóng điều hướng": "Close navigation", "Liên kết đến": "Link to", "Bảng nội dung": "Content table", "Sao chép đoạn mã": "Copy code", "Sao chép": "Copy", "Mở điều hướng": "Open navigation", "Về trang chủ": "Home", "Trang trước và tiếp theo": "Previous and next pages", "Trang trước": "Previous page", "Trang tiếp theo": "Next page", "Tài liệu nhóm · Cập nhật": "Group document · Updated", "Xem ảnh minh chứng": "View evidence image", "Đóng ảnh": "Close image"};
  for (const [vi,en] of Object.entries(labels).sort((a,b)=>b[0].length-a[0].length)) html = html.replaceAll(vi,en);
  return html;
}
