# Fotografías del viaje

Guarda aquí tus fotos (por ejemplo `obelisco.jpg`, `palermo.jpg` o `tigre.jpg`) y cambia `src` en `src/data/images.ts` por `/images/obelisco.jpg`.

No se referencian archivos locales inexistentes. `TravelImage.astro` reserva el espacio y muestra una postal tipográfica si no hay imagen o si falla su carga. Las fotos reales de referencia usan Wikimedia Commons; los créditos y licencias aparecen en el pie de página.

Para un lugar nuevo, agrega un objeto `TripImage` en `src/data/images.ts` y asígnalo a su actividad o entrada en `places`. Usa fotos optimizadas en WebP o JPEG y conserva los créditos que correspondan.

Recuerdos muestra postales de referencia, sin botones de subida. Para agregar fotos propias, reemplaza `image` por `{ src: '/images/nuestra-foto.webp', alt: 'Descripción de la foto' }` en `src/data/trip.ts`; no necesitas editar componentes. No hay almacenamiento ni backend.

Las 31 fotos se sirven localmente en WebP. Los originales descargados quedan en `.source-images/`, fuera de Git y de la web. Los scripts puntuales `scripts/optimize-images.mjs` y `scripts/import-photo-library.mjs` permiten repetir la conversión con Sharp (incluido por Astro) si están presentes los originales y su metadata. Las imágenes nuevas y sus licencias están registradas en `src/data/photo-library.json`. Para validar todos los archivos, ejecutar `npm run build` y `npm run check:images`.
