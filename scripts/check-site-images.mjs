import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory()
    ? filesIn(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}
const htmlFiles = (await filesIn('dist')).filter((file) => file.endsWith('.html'));
assert.equal(htmlFiles.length, 6, 'Se deben generar la portada y los cinco días');
const images = new Set();
let activities = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const [, src] of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
    assert.ok(src.startsWith('/images/'), `Imagen externa inesperada: ${src}`);
    images.add(src);
  }
  for (const [card] of html.matchAll(/<article class="activity-card">[\s\S]*?<\/article>/g)) {
    assert.match(card, /<img\b/, `Actividad sin fotografía en ${file}`);
    activities++;
  }
  for (const [card] of html.matchAll(/<a class="place-card"[\s\S]*?<\/a>/g)) {
    assert.match(card, /<img\b/, `Lugar sin fotografía en ${file}`);
  }
}
assert.equal(activities, 41);
for (const src of images) {
  const file = path.join('dist', src);
  assert.ok((await stat(file)).size > 1000, `Archivo vacío: ${src}`);
  const { info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  assert.ok(info.width > 200 && info.height > 200, `Imagen inválida: ${src}`);
}
console.log(`OK: ${htmlFiles.length} páginas, ${activities} actividades con foto y ${images.size} imágenes locales decodificadas sin errores.`);
