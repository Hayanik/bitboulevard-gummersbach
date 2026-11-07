export const business = {
  name: 'Bit Boulevard',
  googlePlaceId: 'ChIJW0LM3Pq1vkcREWXj5lyjyrQ',
  owner: 'Jannis Kanelias',
  street: 'Brückenstraße 8',
  postalCode: '51643',
  city: 'Gummersbach',
  phone: '02261 61083',
  tel: 'tel:+49226161083',
  email: 'bit-boulevard@web.de',
  instagram: 'https://www.instagram.com/bit.boulevard',
  order: 'https://bestellen.bitboulevard-gummersbach.de/menu',
  deliverySite: 'https://bitboulevard-gummersbach.de/',
  lieferando: 'https://www.lieferando.de/speisekarte/bit-boulevard-gummersbach',
  ios: 'https://apps.apple.com/de/app/bit-boulevard-in-gummersbach/id6504585524',
  android: 'https://play.google.com/store/apps/details?id=com.lieferfabrik.bitboulevard',
  hours: {
    kitchen: ['17:00–22:00', '15:00–21:00'],
    delivery: '17:00–00:00',
  },
} as const;

const location = encodeURIComponent(`${business.name}, ${business.street}, ${business.postalCode} ${business.city}`);
export const directions = 'https://www.google.com/maps/dir/?api=1&destination=' + location;
export const googleReview = 'https://search.google.com/local/writereview?placeid=' + business.googlePlaceId;
export const maps = 'https://maps.google.com/maps?cid=13027404491528561937';
export const mapEmbed = 'https://maps.google.com/maps?q=' + location + '&z=16&output=embed';

export function booking(lang: 'de' | 'en') {
  const english = lang === 'en';
  return `mailto:${business.email}?subject=${encodeURIComponent(english ? 'Table enquiry' : 'Tischanfrage')}&body=` +
    encodeURIComponent(english
      ? 'Hello Bit Boulevard,\n\nI would like to enquire about a table.\n\nDate:\nTime:\nGuests:\nName:\nPhone:\n\nThank you'
      : 'Hallo Bit Boulevard,\n\nich möchte einen Tisch anfragen.\n\nDatum:\nUhrzeit:\nPersonenzahl:\nName:\nTelefon für Rückfragen:\n\nViele Grüße');
}
