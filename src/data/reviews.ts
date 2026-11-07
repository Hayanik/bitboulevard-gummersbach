import { maps } from '../config/business';

export const googleRating = {
  value: 4.5,
  count: 191,
  checkedAt: '2026-11-07',
  source: maps,
} as const;

// Short excerpts checked directly in the restaurant's Google Maps profile.
// Relative ages are Google's labels at the snapshot date above.
export const guestReviews = [
  {
    author: 'MAC BUNNY64',
    initials: 'MB',
    quote: 'Leckere Gerichte und toller Service.',
    leadingEllipsis: true,
    age: { de: 'vor 3 Monaten', en: '3 months ago' },
    source: maps,
  },
  {
    author: 'Nic Yil',
    initials: 'NY',
    quote: 'Ein rundum perfekter Besuch im Bit-Boulevard!',
    leadingEllipsis: false,
    age: { de: 'vor 10 Monaten', en: '10 months ago' },
    source: maps,
  },
  {
    author: 'Marco Neumann',
    initials: 'MN',
    quote: 'das Essen super lecker!',
    leadingEllipsis: true,
    age: { de: 'vor 2 Jahren', en: '2 years ago' },
    source: 'https://www.google.com/maps/contrib/104420099002802866746/place/ChIJW0LM3Pq1vkcREWXj5lyjyrQ',
  },
  {
    author: 'Claus Urban',
    initials: 'CU',
    quote: 'Nettes Lokal zum lecker Bier trinken mit Freunden!',
    leadingEllipsis: false,
    age: { de: 'vor 7 Jahren', en: '7 years ago' },
    source: 'https://www.google.com/maps/contrib/112185028041826924943/place/ChIJW0LM3Pq1vkcREWXj5lyjyrQ',
  },
] as const;
