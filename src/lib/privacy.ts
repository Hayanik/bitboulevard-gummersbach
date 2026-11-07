import { CONSENT_KEY, CONSENT_VERSION, parseConsent, type Consent } from './consent';

const dialog = document.querySelector<HTMLDialogElement>('#privacy-settings');
const banner = document.querySelector<HTMLElement>('[data-consent-banner]');
if (dialog && banner) {
  const settings = dialog;
  const notice = banner;
  const status = settings.querySelector<HTMLElement>('[data-privacy-status]');
  const title = settings.querySelector<HTMLElement>('#privacy-settings-title');
  const mapsCheckbox = settings.querySelector<HTMLInputElement>('[data-consent-maps]');
  let storageAvailable = true;
  let consent: Consent | null = readChoice();
  let opener: HTMLElement | undefined;
  let requestedMap: HTMLElement | undefined;

  function readChoice(): Consent | null {
    try { return parseConsent(localStorage.getItem(CONSENT_KEY)); } catch { storageAvailable = false; return null; }
  }

  function setMap(map: HTMLElement, show: boolean) {
    const stage = map.querySelector<HTMLElement>('[data-map-stage]');
    const prompt = stage?.querySelector<HTMLElement>('[data-map-placeholder]');
    const hide = map.querySelector<HTMLButtonElement>('[data-map-hide]');
    if (!stage || !prompt || !hide) return;
    if (show && !stage.querySelector('iframe')) {
      const frame = document.createElement('iframe');
      frame.title = map.dataset.title ?? 'Google Maps';
      frame.referrerPolicy = 'no-referrer';
      frame.loading = 'lazy';
      frame.src = map.dataset.src ?? '';
      prompt.hidden = true;
      stage.append(frame);
    } else if (!show) {
      stage.querySelector('iframe')?.remove();
      prompt.hidden = false;
    }
    hide.hidden = !show;
  }

  function updateUI() {
    const allowed = consent?.googleMaps === true;
    notice.hidden = consent !== null || notice.dataset.autoPrompt === 'false' || settings.open;
    if (mapsCheckbox) mapsCheckbox.checked = allowed;
    if (status) status.textContent = (consent ? allowed ? status.dataset.allowed : status.dataset.blocked : status.dataset.undecided) ?? '';
    for (const map of document.querySelectorAll<HTMLElement>('[data-map]')) setMap(map, allowed);
  }

  function saveChoice(googleMaps: boolean) {
    const focusWasOnBanner = notice.contains(document.activeElement);
    consent = { version: CONSENT_VERSION, updatedAt: Date.now(), googleMaps };
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify(consent)); storageAvailable = true; } catch { storageAvailable = false; }
    if (googleMaps && requestedMap) opener = requestedMap.querySelector<HTMLButtonElement>('[data-map-hide]') ?? opener;
    updateUI();
    if (settings.open) settings.close();
    else if (focusWasOnBanner) document.querySelector<HTMLAnchorElement>('.brand')?.focus({ preventScroll: true });
  }

  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-privacy-open], [data-map-request]')) {
    button.hidden = false;
    button.addEventListener('click', () => {
      // Recheck validity and choices changed in another tab before loading a service.
      if (storageAvailable) {
        try { consent = parseConsent(localStorage.getItem(CONSENT_KEY)); } catch { storageAvailable = false; }
      }
      requestedMap = button.closest<HTMLElement>('[data-map]') ?? undefined;
      if (requestedMap && consent?.googleMaps) {
        setMap(requestedMap, true);
        requestedMap.querySelector<HTMLButtonElement>('[data-map-hide]')?.focus({ preventScroll: true });
        return;
      }
      opener = button;
      if (title) title.textContent = (requestedMap ? title.dataset.mapTitle : title.dataset.defaultTitle) ?? '';
      if (!settings.open) settings.showModal();
      updateUI();
    });
  }
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-consent-all]')) {
    button.addEventListener('click', () => saveChoice(button.dataset.consentAll === 'yes'));
  }
  settings.querySelector('[data-consent-save]')?.addEventListener('click', () => saveChoice(mapsCheckbox?.checked === true));
  settings.querySelector('[data-privacy-close]')?.addEventListener('click', () => settings.close());
  settings.querySelector('[data-privacy-info]')?.addEventListener('click', () => { opener = undefined; settings.close(); });
  settings.addEventListener('close', () => {
    requestedMap = undefined;
    updateUI();
    opener?.focus({ preventScroll: true });
  });
  for (const hide of document.querySelectorAll<HTMLButtonElement>('[data-map-hide]')) {
    hide.addEventListener('click', () => {
      const map = hide.closest<HTMLElement>('[data-map]');
      if (!map) return;
      setMap(map, false);
      map.querySelector<HTMLButtonElement>('[data-map-request]')?.focus({ preventScroll: true });
    });
  }
  window.addEventListener('storage', event => {
    if (event.key !== CONSENT_KEY && event.key !== null) return;
    consent = readChoice();
    updateUI();
  });
  window.addEventListener('pageshow', event => {
    if (!event.persisted) return;
    if (storageAvailable) {
      try { consent = parseConsent(localStorage.getItem(CONSENT_KEY)); } catch { storageAvailable = false; }
    }
    updateUI();
  });
  updateUI();
}
