# Fotografías del viaje

Guarda aquí tus fotos (por ejemplo `obelisco.jpg`, `palermo.jpg` o `tigre.jpg`) y cambia `src` en `src/data/images.ts` por `/images/obelisco.jpg`.

No se referencian archivos locales inexistentes. `TravelImage.astro` reserva el espacio y muestra una postal tipográfica si no hay imagen o si falla su carga. Las fotos reales de referencia usan Wikimedia Commons; los créditos y licencias aparecen en el pie de página.

Para un lugar nuevo, agrega un objeto `TripImage` en `src/data/images.ts` y asígnalo a su actividad o entrada en `places`. Usa fotos optimizadas en WebP o JPEG y conserva los créditos que correspondan.

Los espacios de Recuerdos son intencionadamente vacíos, sin botones de subida. Para agregar fotos propias, agrega `image: { src: '/images/nuestra-foto.webp', alt: 'Descripción de la foto' }` al recuerdo en `src/data/trip.ts`; no necesitas editar componentes. No hay almacenamiento ni backend.

Las seis fotos de referencia se sirven localmente en WebP. Los originales descargados quedan en `.source-images/`, fuera de Git y de la web. El script puntual `scripts/optimize-images.mjs` permite repetir su conversión con Sharp (incluido por Astro) si están presentes los originales.
