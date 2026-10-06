import test from 'node:test';
import assert from 'node:assert/strict';
import { buenosAiresClock, tripStatus } from '../src/lib/trip-clock.ts';

test('countdown uses Buenos Aires calendar days rather than device UTC day', () => {
  assert.equal(tripStatus(new Date('2026-10-27T02:59:59Z')).days, 1);
  assert.equal(tripStatus(new Date('2026-10-27T03:00:00Z')).phase, 'during');
});
test('the entire last day belongs to the trip', () => {
  assert.equal(tripStatus(new Date('2026-11-01T02:59:59Z')).phase, 'during');
  assert.equal(tripStatus(new Date('2026-11-01T03:00:00Z')).phase, 'after');
});
test('clock formats midnight as 00:00 and converts from another timezone', () => {
  assert.deepEqual(buenosAiresClock(new Date('2026-10-29T03:00:00Z')), { date: '2026-10-29', time: '00:00' });
  assert.deepEqual(buenosAiresClock(new Date('2026-10-29T12:30:00Z')), { date: '2026-10-29', time: '09:30' });
});
