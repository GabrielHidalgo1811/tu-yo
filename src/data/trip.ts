import type { TripImage } from './images';
export interface Memory { title: string; image?: TripImage }

export const trip = {
  title: 'Buenos Aires, tú & yo 🇦🇷 ❤️',
  subtitle: '27 — 31 Octubre 2026',
  description: 'Una pequeña aventura por Buenos Aires.',
  timeZone: 'America/Argentina/Buenos_Aires',
  startDate: '2026-10-27',
  endDate: '2026-10-31',
  arrival: '21:00',
  flight: '21:00',
  base: 'Muy cerca del Obelisco',
  loveMessage: 'Gracias por acompañarme en otra aventura. Espero que Buenos Aires sea uno de esos recuerdos que queramos volver a vivir una y otra vez. ❤️',
  favoriteMoment: 'Todavía no sabemos cuál será. Y esa es la mejor parte.',
  memories: [
    { title: 'Nuestro primer día' }, { title: 'Palermo' },
    { title: 'Tigre' }, { title: 'Último día' },
  ] as Memory[],
} as const;
