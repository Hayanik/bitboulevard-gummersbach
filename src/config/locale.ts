export type Language = 'de' | 'en';
export const routes = {
  home: { de: '/', en: '/en/' },
  menu: { de: '/speisekarte/', en: '/en/menu/' },
  about: { de: '/ueber-uns/', en: '/en/about/' },
  gallery: { de: '/galerie/', en: '/en/gallery/' },
  contact: { de: '/kontakt/', en: '/en/contact/' },
  legal: { de: '/impressum/', en: '/en/legal-notice/' },
  accessibility: { de: '/barrierefreiheit/', en: '/en/accessibility/' },
  directions: { de: '/anfahrt/', en: '/en/directions/' },
  order: { de: '/bestellen/', en: '/en/order/' },
  faq: { de: '/fragen/', en: '/en/faq/' },
  kitchen: { de: '/kueche/', en: '/en/kitchen/' },
  app: { de: '/app/', en: '/en/app/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
} as const;
export type Route = keyof typeof routes;
export const language = (path: string): Language => path.startsWith('/en/') ? 'en' : 'de';

export function alternate(path: string) {
  const lang = language(path);
  const other = lang === 'de' ? 'en' : 'de';
  const route = Object.values(routes).find(route => route[lang] === path);
  return route?.[other] ?? routes.home[other];
}

const labels = {
  menu: { de: 'Speisekarte', en: 'Menu' },
  about: { de: 'Das Lokal', en: 'The restaurant' },
  gallery: { de: 'Galerie', en: 'Gallery' },
  directions: { de: 'Anfahrt', en: 'Directions' },
  contact: { de: 'Kontakt', en: 'Contact' },
  faq: { de: 'FAQ', en: 'FAQ' },
} as const;

export function navigation(lang: Language) {
  return (Object.keys(labels) as (keyof typeof labels)[]).map(key => ({
    href: routes[key][lang], label: labels[key][lang],
  }));
}
