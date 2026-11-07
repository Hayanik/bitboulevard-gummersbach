import type { APIRoute } from 'astro';
import QRCode from 'qrcode';
import { business } from '../config/business';

export const GET: APIRoute = async ({ site }) => {
  const target = new URL(business.appDownloadPath, site).href;
  const svg = await QRCode.toString(target, {
    type: 'svg', errorCorrectionLevel: 'M', margin: 4, width: 192,
    color: { dark: '#0c2c1d', light: '#ffffff' },
  });
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } });
};
