export type FoodZone = 'centro' | 'recoleta' | 'palermo' | 'tigre' | 'sur';
export interface Restaurant {
  name: string;
  zone: FoodZone;
  area: string;
  address: string;
  specialty: string;
  tip: string;
  budget: 'Al paso' | 'Para compartir' | 'Precio medio';
  sourceUrl: string;
  sourceLabel: string;
}
export const foodZones: { id: FoodZone; label: string; days: number[] }[] = [
  { id: 'centro', label: 'Centro · cerca de casa', days: [1, 2, 5] },
  { id: 'recoleta', label: 'Recoleta · 28 OCT', days: [2] },
  { id: 'palermo', label: 'Palermo · 29 OCT', days: [3] },
  { id: 'tigre', label: 'Tigre · 30 OCT', days: [4] },
  { id: 'sur', label: 'La Boca + San Telmo · 31 OCT', days: [5] },
];

export const restaurants: Restaurant[] = [
  { name: 'Güerrin', zone: 'centro', area: 'Corrientes', address: 'Av. Corrientes 1368, Buenos Aires', specialty: 'Pizza al molde, muzzarella y fugazzeta.', tip: 'Una o dos porciones en el mostrador permiten probar el clásico sin pedir una pizza entera. Puede haber fila.', budget: 'Al paso', sourceUrl: 'https://guerrin.com.ar/', sourceLabel: 'Web del local' },
  { name: 'Las Cuartetas', zone: 'centro', area: 'Obelisco', address: 'Av. Corrientes 838, Buenos Aires', specialty: 'Pizza al molde y fainá; la Salvatore combina queso, cebolla y anchoas.', tip: 'Buena parada cerca del alojamiento. Pedir por porción ayuda a controlar el gasto.', budget: 'Al paso', sourceUrl: 'https://lascuartetas.blogspot.com/2010/12/pagina-en-construccion.html', sourceLabel: 'Historia del local' },
  { name: 'El Cuartito', zone: 'centro', area: 'Tribunales', address: 'Talcahuano 937, Buenos Aires', specialty: 'Fugazzeta, muzzarella y pizza napolitana.', tip: 'Nos queda bien después del Teatro Colón. Comparar porciones con una pizza para compartir.', budget: 'Para compartir', sourceUrl: 'https://www.elcuartito.com.ar/', sourceLabel: 'Web y carta' },
  { name: 'La Americana', zone: 'centro', area: 'Congreso · pequeño desvío', address: 'Av. Callao 83, Buenos Aires', specialty: 'Empanadas, pizza y calzones.', tip: 'Opción de comida rápida tradicional. Esta sucursal queda hacia Congreso, fuera del paseo inmediato al hotel.', budget: 'Al paso', sourceUrl: 'https://pizzerialaamericana.com.ar/', sourceLabel: 'Web y menú' },
  { name: 'El Hornero · Centro', zone: 'centro', area: 'Córdoba / Microcentro', address: 'Av. Córdoba 970, Buenos Aires', specialty: 'Empanadas criollas y comida regional.', tip: 'Una alternativa a la pizza para el día del Centro. Elegir algunas empanadas y revisar el precio por unidad.', budget: 'Al paso', sourceUrl: 'https://elhorneroempanadas.com/home-%F0%9F%87%BA%F0%9F%87%B8', sourceLabel: 'Web y sucursales' },
  { name: 'El Sanjuanino', zone: 'recoleta', area: 'Recoleta', address: 'Posadas 1515, Buenos Aires', specialty: 'Empanadas, humita, tamales y locro.', tip: 'Una parada de cocina regional cerca del recorrido por Recoleta. Las empanadas permiten ajustar cuánto pedir.', budget: 'Al paso', sourceUrl: 'https://buenosairesconnect.com/el-sanjuanino-comida-andina-en-recoleta/', sourceLabel: 'Referencia gastronómica' },
  { name: 'La Cocina', zone: 'recoleta', area: 'Barrio Norte · desvío hacia Pueyrredón', address: 'Av. Pueyrredón 1508, Buenos Aires', specialty: 'Empanadas catamarqueñas al horno; la Picachu lleva queso y cebolla picante.', tip: 'Local pequeño: una opción práctica para llevar. Está más apartado de Floralis; revisar la ruta antes de ir.', budget: 'Al paso', sourceUrl: 'https://www.afar.com/places/la-cocina-buenos-aires', sourceLabel: 'Guía gastronómica' },
  { name: 'Cumaná', zone: 'recoleta', area: 'Barrio Norte · cerca de El Ateneo', address: 'Rodríguez Peña 1149, Buenos Aires', specialty: 'Cazuelas, empanadas y platos de cocina criolla.', tip: 'Para sentarnos después de la librería. Consultar tamaño de las cazuelas antes de pedir varios platos.', budget: 'Para compartir', sourceUrl: 'https://es.mypetitfute.com/files/es/guide.pdf', sourceLabel: 'Guía de viaje' },
  { name: 'Chori', zone: 'palermo', area: 'Palermo Soho', address: 'Thames 1653, Buenos Aires', specialty: 'Choripanes con distintas combinaciones y salsas.', tip: 'Una comida informal cerca de Plaza Serrano. Comparar el sándwich solo con los combos disponibles.', budget: 'Al paso', sourceUrl: 'https://www.mibsas.com/chori/', sourceLabel: 'Ficha del local' },
  { name: 'La Fábrica del Taco', zone: 'palermo', area: 'Palermo Soho', address: 'Gorriti 5062, Buenos Aires', specialty: 'Tacos, burritos y quesadillas.', tip: 'Para variar de pizza y empanadas. Revisar las opciones del día; las bebidas pueden subir bastante el total.', budget: 'Precio medio', sourceUrl: 'https://ar.linkedin.com/company/la-f%C3%A1brica-del-taco', sourceLabel: 'Perfil del local' },
  { name: 'Las Cabras', zone: 'palermo', area: 'Palermo Hollywood · requiere desvío', address: 'Fitz Roy 1795, Buenos Aires', specialty: 'Parrilla y platos de cocina argentina.', tip: 'Alternativa de parrilla para compartir. Está en Hollywood, no junto a Plaza Serrano: dejar tiempo para moverse.', budget: 'Para compartir', sourceUrl: 'https://vidrierabuenosaires.com/gastronomia/las-cabras', sourceLabel: 'Referencia gastronómica' },
  { name: 'El Nono', zone: 'tigre', area: 'Tigre centro', address: 'Av. Italia 1532, Tigre, Buenos Aires', specialty: 'Pastas, ñoquis y milanesa napolitana.', tip: 'Bodegón para una pausa sentados. Preguntar si las porciones se pueden compartir y revisar el menú del día.', budget: 'Para compartir', sourceUrl: 'https://carta.menu/restaurants/tigre/restaurant-el-nono', sourceLabel: 'Ficha y carta' },
  { name: 'Antonias Pasta', zone: 'tigre', area: 'Puerto de Frutos · Trilenium', address: 'Perú 1385, Tigre, Buenos Aires', specialty: 'Pastas frescas con salsa a elección.', tip: 'Cerca del Puerto de Frutos. Está dentro del Casino Trilenium: comprobar condiciones de acceso antes de elegirlo.', budget: 'Precio medio', sourceUrl: 'https://antonias.com.ar/', sourceLabel: 'Web y carta' },
  { name: 'El Hornero · Mercado', zone: 'sur', area: 'San Telmo', address: 'Carlos Calvo 455, locales 88 y 89, Buenos Aires', specialty: 'Empanadas, locro y tamales.', tip: 'Encaja con el almuerzo del mercado. Pedir por unidad permite probar sabores distintos sin una comida larga.', budget: 'Al paso', sourceUrl: 'https://elhorneroempanadas.com/home-%F0%9F%87%BA%F0%9F%87%B8', sourceLabel: 'Web y sucursales' },
  { name: 'Nuestra Parrilla', zone: 'sur', area: 'San Telmo', address: 'Bolívar 950, Buenos Aires', specialty: 'Choripán y sándwiches de parrilla.', tip: 'Para un almuerzo sencillo al paso antes de Mafalda. Verificar dirección y horario en Maps ese día.', budget: 'Al paso', sourceUrl: 'https://www.corner.inc/place/pGBouKfBEZma', sourceLabel: 'Ficha del local' },
  { name: 'El Banco Rojo', zone: 'sur', area: 'San Telmo', address: 'El Banco Rojo, San Telmo, Buenos Aires', specialty: 'Hamburguesas, sándwiches y comida informal.', tip: 'Otra opción para el almuerzo en San Telmo. Las guías difieren en el número de Bolívar: abrir la ficha del local en Maps.', budget: 'Al paso', sourceUrl: 'https://holasantelmo.ar/el-banco-rojo/', sourceLabel: 'Guía del barrio' },
  { name: 'Banchero · La Boca', zone: 'sur', area: 'La Boca', address: 'Av. Almirante Brown y Suárez, Buenos Aires', specialty: 'Fugazza con queso y pizza porteña.', tip: 'Si da hambre antes de ir a San Telmo, podemos compartir una pizza. Revisar apertura: estaremos en La Boca por la mañana.', budget: 'Para compartir', sourceUrl: 'https://buenosaires.gob.ar/areas/cultura/cpphc/sitios/detalle.php?id=74', sourceLabel: 'Referencia de la ciudad' },
];
