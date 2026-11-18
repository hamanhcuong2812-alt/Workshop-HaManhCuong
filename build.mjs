import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
const routes = root => fs.readdirSync(root, {recursive:true}).filter(file => file.endsWith('.md')).map(file => path.dirname(file).replaceAll('\\','/')).sort();
if (JSON.stringify(routes('content')) !== JSON.stringify(routes('content-en'))) throw new Error('Vietnamese and English page routes do not match');
for (const language of ['vi', 'en']) {
  execFileSync(process.execPath, ['build-language.mjs'], {stdio: 'inherit', env: {...process.env, REPORT_LANGUAGE: language}});
}
