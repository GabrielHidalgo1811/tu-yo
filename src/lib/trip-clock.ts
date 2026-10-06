import { tripDates as trip } from '../data/trip-dates.ts';

export function buenosAiresClock(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: trip.timeZone, year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(now);
  const part = (type: string) => parts.find((entry) => entry.type === type)?.value ?? '';
  return { date: `${part('year')}-${part('month')}-${part('day')}`, time: `${part('hour')}:${part('minute')}` };
}

export function tripStatus(now = new Date()) {
  const { date } = buenosAiresClock(now);
  if (date < trip.startDate) {
    const days = Math.round((Date.parse(trip.startDate) - Date.parse(date)) / 86_400_000);
    return { phase: 'before', days, message: `Faltan ${days} ${days === 1 ? 'día' : 'días'} para Buenos Aires ❤️` };
  }
  if (date <= trip.endDate) return { phase: 'during', days: 0, message: 'Estamos en Buenos Aires 🇦🇷❤️' };
  return { phase: 'after', days: 0, message: 'Nuestra aventura en Buenos Aires ❤️' };
}
