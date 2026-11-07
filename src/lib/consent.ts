export const CONSENT_KEY = 'bb-consent-v2';
export const CONSENT_VERSION = 2;
export const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;
export type Consent = { version: typeof CONSENT_VERSION; updatedAt: number; googleMaps: boolean };

export function parseConsent(raw: string | null, now = Date.now()): Consent | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw);
    if (value?.version !== CONSENT_VERSION || typeof value.googleMaps !== 'boolean' ||
      typeof value.updatedAt !== 'number' || !Number.isFinite(value.updatedAt) ||
      value.updatedAt > now || now - value.updatedAt >= CONSENT_MAX_AGE) return null;
    return { version: CONSENT_VERSION, updatedAt: value.updatedAt, googleMaps: value.googleMaps };
  } catch { return null; }
}
