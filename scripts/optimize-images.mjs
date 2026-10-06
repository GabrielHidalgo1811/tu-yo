import sharp from 'sharp';
import { readFile, writeFile, stat } from 'node:fs/promises';

const names = ['obelisco', 'palermo', 'rosedal', 'tigre', 'caminito', 'recoleta'];
let registry = await readFile(new URL('../src/data/images.ts', import.meta.url), 'utf8');
for (const name of names) {
  const input = new URL(`../.source-images/${name}.jpg`, import.meta.url);
  const output = new URL(`../public/images/${name}.webp`, import.meta.url);
  await sharp(await readFile(input)).rotate().resize({ width: name === 'obelisco' ? 1800 : 1000, withoutEnlargement: true }).webp({ quality: 78 }).toFile(output.pathname.replace(/^\/(\w:)/, '$1'));
  registry = registry.replace(new RegExp(`(${name}: \\{ src: ')[^']+`), `$1/images/${name}.webp`);
  console.log(`${name}: ${Math.round((await stat(output)).size / 1024)} KB`);
}
await writeFile(new URL('../src/data/images.ts', import.meta.url), registry);
