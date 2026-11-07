import type { APIRoute } from 'astro';
import { business, maps } from '../config/business';
import { routes } from '../config/locale';

export const GET: APIRoute = ({ site }) => {
  const text = `# Bit Boulevard Gummersbach

> Greek restaurant and takeaway at ${business.street}, ${business.postalCode} ${business.city}, Germany.

Telephone: ${business.phone}. Email: ${business.email}.

## Official pages

- [Speisekarte](${new URL(routes.menu.de, site)})
- [English menu](${new URL(routes.menu.en, site)})
- [Anfahrt und Tischanfrage](${new URL(routes.contact.de, site)})
- [Directions and table enquiries in English](${new URL(routes.contact.en, site)})
- [Directions](${new URL(routes.directions.en, site)})
- [Accessibility and feedback](${new URL(routes.accessibility.en, site)})
- [Online ordering](${business.order})
- [Google Maps](${maps})
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
