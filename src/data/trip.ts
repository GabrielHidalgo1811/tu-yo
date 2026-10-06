import { images, type TripImage } from './images';
import { tripDates } from './trip-dates';
export interface Memory { title: string; image?: TripImage }

export const trip = {
  title: 'Buenos Aires, tú & yo 🇦🇷 ❤️',
  subtitle: '27 — 31 Octubre 2026',
  description: 'Una pequeña aventura por Buenos Aires.',
  ...tripDates,
  arrival: '21:00',
  flight: '21:00',
  base: 'Muy cerca del Obelisco',
  loveMessage: 'Gracias por acompañarme en otra aventura. Espero que Buenos Aires sea uno de esos recuerdos que queramos volver a vivir una y otra vez. ❤️',
  favoriteMoment: 'Todavía no sabemos cuál será. Y esa es la mejor parte.',
  memories: [
    { title: 'Nuestro primer día', image: images.obelisco }, { title: 'Palermo', image: images.rosedal },
    { title: 'Tigre', image: images.tigre }, { title: 'Último día', image: images.caminito },
  ] as Memory[],
} as const;
