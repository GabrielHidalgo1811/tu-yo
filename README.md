# Buenos Aires, tú & yo

Mini web de viaje estática, responsive y en español. Astro + TypeScript estricto + Tailwind CSS mediante el plugin oficial de Vite. Sin backend, autenticación ni API de mapas.

## Ejecutar

```sh
npm install
npm run dev
```

```sh
npm run typecheck
npm test
npm run build
npm run check:images
npm run preview
```

`npm run build` genera seis páginas estáticas en `dist/`. No hay configuración de lint: la validación del proyecto es `astro check`, junto con pruebas del reloj del viaje. Requiere Node compatible con Astro (la implementación se verifica con Node 24).

## Editar el viaje

- `src/data/itinerary.ts`: interfaces, días, horarios, categorías, misiones, enlaces Maps y galería de 21 lugares.
- `src/data/trip.ts`: fechas, zona horaria, mensaje romántico, recuerdos y momento favorito.
- `src/data/lodging.ts`: dirección del alojamiento y enlaces para ubicarlo o volver desde la ubicación actual.
- `src/data/food.ts`: 17 recomendaciones por zona, especialidad, orientación para ahorrar y fuente consultada.
- `src/data/photo-library.json`: créditos y rutas locales de las 25 fotografías añadidas.
- `src/data/images.ts`: imágenes y atribución. `public/images/` acepta fotos locales.
- `src/components/`: piezas reutilizables de la portada, tarjetas, timeline, mapas, recuerdos y mensaje.
- `src/pages/index.astro`: portada, alojamiento, itinerario, mapa, lugares, comida y recuerdos.
- `src/pages/dias/[date].astro`: rutas estáticas de cada día, generadas desde los datos.
- `src/styles/global.css`: Tailwind, tokens y diseño responsive.
- `src/lib/trip-clock.ts`: contador por fecha de Buenos Aires, independiente de la zona horaria del dispositivo.

La sección “qué toca ahora” se activa del 27 al 31 de octubre de 2026 y muestra la actividad del plan y la siguiente. No representa ubicación en tiempo real. Maps usa enlaces de búsqueda sin API. El mapa es un listado agrupado por día. El mensaje final y los grupos de mapas funcionan sin JavaScript mediante `<details>`.

## Datos pendientes

Confirmar aeropuerto, vuelo, transporte, aperturas y reservas antes del viaje. El alojamiento está configurado en Avenida Presidente Roque Sáenz Peña 1119, piso 9, departamento 923; Google Maps dirige al edificio. El vuelo tiene una búsqueda genérica de aeropuertos que no debe usarse como ruta. El día 31 se recoge equipaje a las 16:30 y Puerto Madero es opcional, para priorizar el vuelo de las 21:00. Llegada al aeropuerto objetivo: 18:00, ajustable a la aerolínea y al aeropuerto confirmado.

Las 31 fotografías se sirven desde `public/images/` en WebP. Todos los lugares y actividades tienen imagen asignada; el build falla si se agrega una actividad sin fotografía. `npm run check:images`, después del build, revisa las seis páginas y decodifica cada imagen local para detectar ausencias o archivos dañados. La portada tiene prioridad de carga; las demás imágenes se cargan al acercarse al viewport. Recuerdos muestra postales de referencia hasta reemplazarlas por fotos propias; las fotos de traslados y comida son ilustrativas, no del apartamento ni necesariamente del restaurante recomendado. Las fuentes externas tienen sustitutos locales. La web no es una PWA ni funciona completamente sin conexión. Las visitas interiores no están reservadas. Referencias oficiales: [Turismo Buenos Aires](https://turismo.buenosaires.gob.ar/) y [recomendaciones para vuelos](https://www.argentina.gob.ar/usuarios/recomendaciones).
