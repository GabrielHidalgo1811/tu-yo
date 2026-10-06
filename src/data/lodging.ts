export const lodging = {
  name: 'Nuestro rincón en Buenos Aires',
  street: 'Avenida Presidente Roque Sáenz Peña 1119',
  unit: 'Piso 9 · Departamento 923',
  city: 'Buenos Aires, C1048, Argentina',
  mapQuery: 'Avenida Presidente Roque Sáenz Peña 1119, Buenos Aires, Argentina',
};

export const lodgingMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lodging.mapQuery)}`;
export const lodgingDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(lodging.mapQuery)}`;
