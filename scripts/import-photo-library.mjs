import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const selected = JSON.parse(await readFile(new URL('../.source-images/selected.json', import.meta.url), 'utf8'));
const photos = {};
for (const photo of selected) {
  const input = new URL(`../.source-images/${photo.key}.download`, import.meta.url);
  const output = new URL(`../public/images/${photo.key}.webp`, import.meta.url);
  await sharp(await readFile(input)).rotate().resize({ width: 960, height: 960, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(fileURLToPath(output));
  const { url, key, ...credit } = photo;
  credit.licenseUrl ||= credit.source;
  photos[key] = { ...credit, src: `/images/${key}.webp` };
}
await writeFile(new URL('../src/data/photo-library.json', import.meta.url), JSON.stringify(photos, null, 2) + '\n');
console.log(`${selected.length} fotografías optimizadas y registradas.`);
