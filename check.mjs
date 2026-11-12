import fs from 'node:fs';
import path from 'node:path';

const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
const output = path.resolve('dist');
const { basePath = '' } = JSON.parse(fs.readFileSync(path.join(output, 'site-config.json'), 'utf8'));
const files = walk(output).filter(file => file.endsWith('.html') && !file.endsWith('404.html'));
const errors = [];
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const route = basePath + '/' + path.relative(output, path.dirname(file)).replaceAll('\\', '/') + '/';
  if ((html.match(/<h1[ >]/g) || []).length !== 1) errors.push(`${route}: expected one main heading`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (/^(https?:|mailto:|tel:|data:)/.test(href)) continue;
    const url = new URL(href, 'https://check.invalid' + route.replaceAll('//', '/'));
    if (basePath && !url.pathname.startsWith(basePath + '/')) { errors.push(`${route}: link escapes repository base ${href}`); continue; }
    const localPath = basePath ? url.pathname.slice(basePath.length) : url.pathname;
    let target = path.join(output, decodeURIComponent(localPath));
    if (url.pathname.endsWith('/')) target = path.join(target, 'index.html');
    if (!fs.existsSync(target)) errors.push(`${route}: missing ${href}`);
    if (url.hash && target.endsWith('.html') && fs.existsSync(target)) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!fs.readFileSync(target, 'utf8').includes(`id="${id}"`)) errors.push(`${route}: missing anchor ${href}`);
    }
  }
  if (/Tòng Văn Tâm|tong-van-tam.jpg|ha-manh-khoi.jpg/.test(html)) errors.push(`${route}: inherited author identity`);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${files.length} pages. All internal links, image assets and anchors resolve.`);
}
