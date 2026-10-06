import { images, type TripImage } from './images';
import { lodging } from './lodging';

export type ActivityType = 'walk' | 'food' | 'museum' | 'park' | 'transfer' | 'boat' | 'landmark' | 'shopping';
export interface Mission { number: string; text: string }
export interface Activity {
  time: string; title: string; description: string; type: ActivityType;
  mapUrl: string; image: TripImage; optional?: boolean; note?: string; mission?: Mission;
}
export interface TripDay {
  date: string; fullDate: string; weekday: string; dayNumber: number; zone: string;
  title: string; emoji: string; coverImage: TripImage; description: string; note?: string;
  activities: Activity[];
}
export const categories: Record<ActivityType, { label: string; icon: string }> = {
  walk: { label: 'A pie', icon: 'walk' }, food: { label: 'Para comer', icon: 'coffee' },
  museum: { label: 'Arte y cultura', icon: 'museum' }, park: { label: 'Al aire libre', icon: 'leaf' },
  transfer: { label: 'Traslado', icon: 'train' }, boat: { label: 'Por el río', icon: 'boat' },
  landmark: { label: 'Imperdible', icon: 'pin' }, shopping: { label: 'Tiendas y cafés', icon: 'bag' },
};
export const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const activityPhotos: Record<string, TripImage> = {
  'Llegada a Buenos Aires': images.diagonal,
  'Check-in y una pausa': images.diagonal,
  'Avenida Corrientes y cena': images.corrientes,
  'Teatro Colón': images.colon,
  'Galerías Pacífico': images.pacifico,
  'Plaza San Martín': images.sanMartin,
  'Almuerzo en Recoleta': images.empanadas,
  'Plaza Francia y Centro Cultural Recoleta': images.cultural,
  'Floralis Genérica': images.floralis,
  'El Ateneo Grand Splendid': images.ateneo,
  'Cena y regreso al Centro': images.pizza,
  'Planetario Galileo Galilei': images.planetario,
  'Jardín Japonés': images.japones,
  'Almuerzo en Palermo': images.empanadas,
  'Jardín Botánico Carlos Thays': images.botanico,
  'Palermo Soho': images.soho,
  'Plaza Serrano / Plaza Julio Cortázar': images.serrano,
  'Tiendas, cafés y street art': images.soho,
  'Una cena para dos': images.pizza,
  'Rumbo a Tigre': images.retiro,
  'Llegada a Tigre': images.tigre,
  'Almuerzo junto al río': images.victorica,
  'Puerto de Frutos': images.puertoFrutos,
  'Paseo Victorica': images.victorica,
  'Museo de Arte Tigre': images.museoTigre,
  'Regreso a Buenos Aires': images.retiro,
  'La Bombonera': images.bombonera,
  'Traslado a San Telmo': images.mercado,
  'Mercado de San Telmo': images.mercado,
  'Mafalda y un paseo por San Telmo': images.mafalda,
  'Plaza de Mayo': images.plazaMayo,
  'Puerto Madero y Puente de la Mujer': images.puente,
  'Equipaje y salida al aeropuerto': images.diagonal,
  'Hasta la próxima, Buenos Aires': images.obelisco,
};
const activity = (time: string, title: string, description: string, type: ActivityType, query: string, extra: Partial<Activity> = {}): Activity => {
  const image = extra.image ?? activityPhotos[title];
  if (!image) throw new Error(`Falta la fotografía de la actividad: ${title}`);
  return { time, title, description, type, mapUrl: maps(query), ...extra, image };
};

export const itinerary: TripDay[] = [
  {
    date: '27 Octubre', fullDate: '2026-10-27', weekday: 'Martes', dayNumber: 1, zone: 'Obelisco / Centro',
    title: 'Hola, Buenos Aires.', emoji: '🌙', coverImage: images.obelisco,
    description: 'Aterrizar, dejar las maletas y encontrarnos con las luces de la ciudad.',
    note: 'Llegada estimada a las 21:00. El traslado y el check-in mandan: el paseo y la cena se pueden acortar según el cansancio. Nos alojamos en Roque Sáenz Peña 1119, piso 9, departamento 923.',
    activities: [
      activity('21:00', 'Llegada a Buenos Aires', 'Ya estamos aquí. Traslado a Roque Sáenz Peña 1119; aeropuerto por confirmar.', 'transfer', lodging.mapQuery),
      activity('22:15', 'Check-in y una pausa', 'Piso 9, departamento 923. Dejar las maletas, refrescarnos y salir solo si quedan ganas. Hora orientativa.', 'transfer', lodging.mapQuery),
      activity('22:45', 'Obelisco de noche', 'Nuestro primer encuentro con la ciudad, bajo las luces de la 9 de Julio.', 'landmark', 'Obelisco Buenos Aires', { image: images.obelisco, optional: true, mission: { number: '01', text: 'Sacarnos nuestra foto favorita frente al Obelisco 📸❤️' } }),
      activity('23:00', 'Avenida Corrientes y cena', 'Un paseo cortito entre marquesinas y una cena cerca del hotel. La primera noche es para ir sin prisa.', 'food', 'Restaurantes Avenida Corrientes Obelisco Buenos Aires', { optional: true }),
    ],
  },
  {
    date: '28 Octubre', fullDate: '2026-10-28', weekday: 'Miércoles', dayNumber: 2, zone: 'Centro + Recoleta',
    title: 'Entre libros y grandes historias.', emoji: '📖', coverImage: images.recoleta,
    description: 'Cúpulas, cafés y una librería en la que podríamos quedarnos a vivir.',
    note: 'Un día con varias paradas: Colón y los monumentos están pensados como visitas exteriores. Para entrar al teatro o al cementerio, revisar entradas y horarios. Podemos saltar una parada y quedarnos donde más nos guste.',
    activities: [
      activity('09:00', 'Obelisco a la luz del día', 'Empezamos cerca de casa, con otra mirada a nuestro punto de encuentro.', 'landmark', 'Obelisco Buenos Aires', { image: images.obelisco }),
      activity('09:45', 'Teatro Colón', 'Una pausa para admirar su fachada. Visita guiada solo si la reservamos y ajustamos el resto del día.', 'museum', 'Teatro Colon Buenos Aires'),
      activity('10:45', 'Galerías Pacífico', 'Entrar, mirar hacia arriba y descubrir sus murales.', 'shopping', 'Galerias Pacifico Buenos Aires'),
      activity('11:45', 'Plaza San Martín', 'Un respiro entre árboles antes de ir hacia Recoleta.', 'park', 'Plaza San Martin Retiro Buenos Aires'),
      activity('12:30', 'Almuerzo en Recoleta', 'Elegimos una mesa tranquila. Reservamos también tiempo para el traslado desde Retiro.', 'food', 'Restaurantes Recoleta Buenos Aires'),
      activity('14:00', 'Cementerio de la Recoleta', 'Un recorrido breve entre esculturas, pasajes e historias porteñas.', 'museum', 'Cementerio de la Recoleta', { image: images.recoleta, note: 'Consultar entrada y condiciones de acceso antes del viaje.' }),
      activity('15:00', 'Plaza Francia y Centro Cultural Recoleta', 'Pasear por la plaza y asomarnos al centro cultural si está abierto.', 'walk', 'Centro Cultural Recoleta Buenos Aires'),
      activity('16:00', 'Floralis Genérica', 'Una postal junto a la flor metálica; después, una pausa para café.', 'landmark', 'Floralis Generica Buenos Aires'),
      activity('17:30', 'El Ateneo Grand Splendid', 'Un antiguo teatro convertido en librería. Recorremos sus estantes sin apuro.', 'museum', 'El Ateneo Grand Splendid Buenos Aires', { mission: { number: '02', text: 'Elegir juntos un libro en El Ateneo 📚' } }),
      activity('20:00', 'Cena y regreso al Centro', 'Cerramos el día cerca del hotel y guardamos energía para mañana.', 'food', 'Restaurantes Obelisco Buenos Aires'),
    ],
  },
  {
    date: '29 Octubre', fullDate: '2026-10-29', weekday: 'Jueves', dayNumber: 3, zone: 'Palermo',
    title: 'Un día para perdernos entre jardines.', emoji: '🌿', coverImage: images.palermo,
    description: 'Parques, rincones verdes y calles que invitan a quedarse un ratito más.',
    note: 'Horarios orientativos, sujetos a apertura y clima. El Planetario está previsto por fuera; una función requiere reserva y más tiempo. Jardín Japonés: revisar entrada. Si nos demoramos, acortamos tiendas o hacemos el Botánico opcional.',
    activities: [
      activity('09:30', 'Bosques de Palermo', 'Comenzamos el día caminando entre los parques más conocidos de Palermo.', 'park', 'Bosques de Palermo Buenos Aires', { image: images.palermo }),
      activity('10:30', 'El Rosedal', 'Cruzar sus puentes y buscar un banco entre las flores.', 'park', 'El Rosedal de Palermo', { image: images.rosedal, mission: { number: '03', text: 'Encontrar nuestro rincón favorito del Rosedal 🌹' } }),
      activity('11:30', 'Planetario Galileo Galilei', 'Una vuelta por el exterior de este pequeño universo porteño.', 'landmark', 'Planetario Galileo Galilei Buenos Aires'),
      activity('12:30', 'Jardín Japonés', 'Puentes, agua y un paseo tranquilo. Un pequeño cambio de ritmo.', 'park', 'Jardin Japones Buenos Aires'),
      activity('14:00', 'Almuerzo en Palermo', 'Una pausa larga para comer algo rico y descansar los pies.', 'food', 'Restaurantes Palermo Buenos Aires'),
      activity('15:30', 'Jardín Botánico Carlos Thays', 'Un último paseo verde entre senderos y árboles.', 'park', 'Jardin Botanico Carlos Thays Buenos Aires'),
      activity('17:00', 'Palermo Soho', 'Calles arboladas, fachadas y cafés. Acá el plan es caminar juntos.', 'walk', 'Palermo Soho Buenos Aires'),
      activity('19:00', 'Plaza Serrano / Plaza Julio Cortázar', 'Llegamos al corazón del barrio y elegimos dónde sentarnos.', 'landmark', 'Plaza Julio Cortazar Buenos Aires'),
      activity('19:30', 'Tiendas, cafés y street art', 'Buscar murales y entrar a esa tienda que nos llamó la atención.', 'shopping', 'Pasaje Russel Palermo Buenos Aires'),
      activity('21:00', 'Una cena para dos', 'Brindar por nuestro día de jardines y volver cuando tengamos ganas.', 'food', 'Restaurantes Plaza Serrano Buenos Aires'),
    ],
  },
  {
    date: '30 Octubre', fullDate: '2026-10-30', weekday: 'Viernes', dayNumber: 4, zone: 'Tigre',
    title: 'Donde la ciudad se vuelve río.', emoji: '🚤', coverImage: images.tigre,
    description: 'Un día junto al agua, entre islas, paseos y conversaciones sin reloj.',
    note: 'Comprobar el servicio Retiro–Tigre cerca de la fecha. Los horarios del barco dependen del operador y del clima; reservar un paseo de duración compatible. El museo queda sujeto a su agenda.',
    activities: [
      activity('08:00', 'Rumbo a Tigre', 'Salir del alojamiento hacia Retiro y tomar el servicio a Tigre si está operativo. Alternativa: traslado por carretera.', 'transfer', 'Estacion Retiro linea Mitre Buenos Aires'),
      activity('09:30', 'Llegada a Tigre', 'Caminar hacia la estación fluvial y confirmar nuestro paseo.', 'walk', 'Estacion Fluvial Domingo Faustino Sarmiento Tigre'),
      activity('10:00', 'Paseo en barco por el Delta', 'Ver pasar las islas, las casas y sus muelles. Reservamos la mañana para navegar.', 'boat', 'Estacion Fluvial Tigre', { image: images.tigre, mission: { number: '04', text: 'Foto juntos navegando por el Delta 🚤' } }),
      activity('12:30', 'Almuerzo junto al río', 'Una mesa, algo rico y un buen rato para nosotros.', 'food', 'Restaurantes Tigre centro'),
      activity('14:00', 'Puerto de Frutos', 'Pasear por los puestos y buscar un pequeño recuerdo para llevar.', 'shopping', 'Puerto de Frutos Tigre'),
      activity('15:30', 'Paseo Victorica', 'Caminar por la costanera; podemos tomar un traslado desde el Puerto de Frutos.', 'walk', 'Paseo Victorica Tigre'),
      activity('16:00', 'Museo de Arte Tigre', 'Arte y arquitectura frente al agua. Si no entramos, nos quedamos con el paseo exterior.', 'museum', 'Museo de Arte Tigre', { note: 'Revisar apertura y entradas; la visita interior es flexible.' }),
      activity('18:00', 'Regreso a Buenos Aires', 'Volver hacia la estación con margen. Cena libre cerca del alojamiento al llegar.', 'transfer', 'Estacion Tigre linea Mitre'),
    ],
  },
  {
    date: '31 Octubre', fullDate: '2026-10-31', weekday: 'Sábado', dayNumber: 5, zone: 'La Boca + San Telmo + Centro',
    title: 'Una última vuelta, de la mano.', emoji: '☀️', coverImage: images.caminito,
    description: 'Colores, sabores y nuestras últimas postales. Nos llevamos mucho más que fotos.',
    note: 'Dejar el equipaje guardado al hacer check-out. Vuelo estimado 21:00: confirmar aeropuerto y traslado. Para un vuelo internacional, apuntar a estar en el aeropuerto a las 18:00. Recogida de equipaje adelantada a las 16:30; Puerto Madero es opcional y se omite si falta margen.',
    activities: [
      activity('09:00', 'La Bombonera', 'Empezamos por su exterior. Un tour o museo requiere confirmar horario y dedicar más tiempo.', 'landmark', 'La Bombonera Buenos Aires'),
      activity('10:30', 'Caminito', 'Casitas de colores y nuestra última mañana porteña.', 'walk', 'Caminito La Boca Buenos Aires', { image: images.caminito }),
      activity('12:00', 'Traslado a San Telmo', 'Nos movemos hacia el mercado para almorzar.', 'transfer', 'Mercado de San Telmo Buenos Aires'),
      activity('12:30', 'Mercado de San Telmo', 'Recorrer sus puestos y elegir juntos el almuerzo.', 'food', 'Mercado de San Telmo Buenos Aires'),
      activity('13:30', 'Mafalda y un paseo por San Telmo', 'Una foto con Mafalda y unas cuadras por el barrio.', 'walk', 'Estatua de Mafalda Defensa y Chile Buenos Aires'),
      activity('14:30', 'Plaza de Mayo', 'Casa Rosada, Catedral Metropolitana y Cabildo: un paseo por sus exteriores, sin visitas largas.', 'landmark', 'Plaza de Mayo Buenos Aires'),
      activity('15:30', 'Puerto Madero y Puente de la Mujer', 'Una vuelta breve por los diques, solo si el traslado al aeropuerto ya está resuelto y queda margen.', 'walk', 'Puente de la Mujer Puerto Madero Buenos Aires', { optional: true }),
      activity('16:30', 'Equipaje y salida al aeropuerto', 'Volver a Roque Sáenz Peña 1119, piso 9, departamento 923, y salir hacia el aeropuerto confirmado. Ajustar antes si el tráfico o la aerolínea lo requieren.', 'transfer', lodging.mapQuery),
      activity('21:00', 'Hasta la próxima, Buenos Aires', 'Hora estimada del vuelo de regreso. Nuestra aventura se queda con nosotros.', 'transfer', 'Aeropuertos Buenos Aires', { note: 'Aeropuerto y vuelo por confirmar. Este enlace no es una ruta al aeropuerto.', mission: { number: 'final', text: 'Elegir nuestra foto favorita del viaje ❤️' } }),
    ],
  },
];

export interface Place { name: string; dayNumber: number; image: TripImage; mapUrl: string }
const placeEntries: [string, number, TripImage][] = [
  ['Obelisco', 1, images.obelisco], ['Teatro Colón', 2, images.colon], ['Galerías Pacífico', 2, images.pacifico],
  ['El Ateneo Grand Splendid', 2, images.ateneo], ['Floralis Genérica', 2, images.floralis], ['Bosques de Palermo', 3, images.palermo],
  ['El Rosedal', 3, images.rosedal], ['Planetario Galileo Galilei', 3, images.planetario], ['Jardín Japonés', 3, images.japones],
  ['Jardín Botánico Carlos Thays', 3, images.botanico], ['Palermo Soho', 3, images.soho], ['Tigre', 4, images.tigre],
  ['Delta del Tigre', 4, images.tigre], ['Puerto de Frutos', 4, images.puertoFrutos], ['Museo de Arte Tigre', 4, images.museoTigre],
  ['La Bombonera', 5, images.bombonera], ['Caminito', 5, images.caminito], ['San Telmo', 5, images.mercado],
  ['Plaza de Mayo', 5, images.plazaMayo], ['Puerto Madero', 5, images.puertoMadero], ['Puente de la Mujer', 5, images.puente],
];
export const places: Place[] = placeEntries.map(([name, dayNumber, image]) => ({ name, dayNumber, image, mapUrl: maps(`${name} ${dayNumber === 4 ? 'Tigre Argentina' : 'Buenos Aires'}`) }));
