# Bit Boulevard

Zweisprachige Astro-Website für das griechische Restaurant und den Lieferdienst Bit Boulevard in Gummersbach.

## Lokal starten

Voraussetzung ist Node.js ab 22.23.4. Entwickelt mit Node.js 24 und npm 11.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

Astro gibt 26 statische Seiten nach `dist/` aus. `SITE_URL` setzt die produktive HTTPS-Domain für Canonicals, Sprachverweise, Sitemap, robots.txt und llms.txt. Standard ist die bestehende Restaurantdomain. Deutsch liegt unter `/`, Englisch unter `/en/`. Die Sprachverweise und die Umschaltung führen jeweils auf die Entsprechung der aktuellen Seite.

## Pflege

- `src/config/business.ts` bündelt Adresse, Kontakt, Buchungslinks, Bestellportal, App-Stores, Kartenstandort und veröffentlichte Küchen- und Lieferzeiten.
- `src/config/locale.ts` definiert die Sprachrouten. Die englischen Routen teilen sich die Seitenkomponenten mit den deutschen.
- `src/data/menu.ts` und `src/data/menu-en.ts` pflegen die Karte. Astro rendert sie als HTML. React ergänzt Suche und Filter.
- `src/data/photos.ts` bündelt die gekennzeichneten KI-Motive. Astro erzeugt responsive WebP-Varianten. Die Wortmarke ist ein Entwurf.
- `src/styles/boulevard.css` enthält die visuelle Überarbeitung. Die Bewegungen der Startseite sitzen in `src/lib/motion.ts` und im Bildwechsel der Gerichte. Browser-Animationen und IntersectionObserver ersetzen die frühere GSAP-Abhängigkeit. Drei lateinische WOFF2-Dateien decken die beiden Sprachfassungen ab. Es gibt kein Autoplay-Video.
- Heller und dunkler Modus folgen zunächst der Systemeinstellung. Eine manuelle Auswahl wird unter `bb-theme` lokal gespeichert.
- Google Maps lädt erst nach Freigabe. `bb-maps-consent-v1` merkt die Entscheidung für den aktuellen Browser-Tab. Über die Datenschutzeinstellungen im Footer ist sie widerrufbar. Standort und Route bleiben ohne Skript als Links verfügbar.
- Barrierefreiheit, Impressum und Datenschutz teilen eine Vorlage mit Inhaltsverzeichnis. Die Barrierefreiheitsseite nutzt den interaktiven Standardvogel aus `Wabiy/Frontend/src/components/Home/AnimatedBird.tsx`. Er reagiert auf Klick, Enter und Leertaste, bietet eine Pausensteuerung und berücksichtigt Reduced Motion. Rückmeldungen sind per E-Mail an das Restaurant oder Wabiy möglich. Die Animationsbibliothek wird nur auf den beiden Barrierefreiheitsseiten geladen.
- Der QR-Code wird beim Build lokal erzeugt und führt zur mit `SITE_URL` konfigurierten Domain unter `/app/`. Diese Route öffnet auf iPhone/iPad den App Store und auf Android Google Play. Vor dem öffentlichen Einsatz des Codes muss diese Route auf der gewählten Domain erreichbar sein.
- Anfahrt, Bestellen, FAQ und Aus der Küche haben eigene Routen. Der Hero bietet drei manuell wählbare Food-Motive. Weitere Szenen werden erst beim Wechsel geladen.
- Die Startseiten enthalten Restaurant-JSON-LD. `llms.txt` ist ein kompakter Wegweiser zu offiziellen Inhalten. Für Googles KI-Suche setzt die Website auf indexierbares HTML und die üblichen Suchsignale.

## Quellen

- [Kontakt des Restaurants](https://www.bitboulevard.de/kontakt/) und [Bestandsimpressum](https://www.bitboulevard.de/impressum/) für Adresse, Betreiber, Reservierungswege und Küchenzeiten.
- [Lieferdienst](https://bitboulevard-gummersbach.de/), [Bestellportal](https://bestellen.bitboulevard-gummersbach.de/menu), [Lieferando](https://www.lieferando.de/speisekarte/bit-boulevard-gummersbach), [Android](https://play.google.com/store/apps/details?id=com.lieferfabrik.bitboulevard) und [iOS](https://apps.apple.com/de/app/bit-boulevard-in-gummersbach/id6504585524) für Bestellwege, Lieferzeiten und Apps.
- Der Google-Maps-Pin wurde in der eingebetteten Karte anhand des Restaurants und der Adresse geprüft. Die Recherche ergab keinen hinreichenden Beleg für weitere Betriebe oder ein eindeutig zugehöriges Social-Media-Profil.
- Das Impressum nennt die belegten Anbieter- und Kontaktangaben nach [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html). Die Startfreigabe für weitere gegebenenfalls nötige Angaben steht aus.
- Die Schriften stammen aus Fontsource und stehen unter der SIL Open Font License. Die Lizenztexte liegen in den jeweiligen npm-Paketen.

## Vor Veröffentlichung klären

- Offizielles Logo und freigegebene Originalaufnahmen von Gaststube und Gerichten. Derzeit sind die Motive als KI-Bilder gekennzeichnet.
- Restaurantöffnungszeiten und Aktualität der getrennten Küchen- und Lieferzeiten bestätigen. Preise vor Ort, Zutaten, Allergene und Zusatzstoffe abgleichen.
- Impressum um etwaige bestätigte Pflichtangaben ergänzen, etwa vorhandene USt-IdNr., Register- oder Aufsichtsangaben. Anwendbarkeit und Betreiberposition zur Verbraucherstreitbeilegung klären.
- Datenschutzhinweise anhand des gewählten Hostings und der tatsächlichen Datenverarbeitung fertigstellen. Beide Datenschutzseiten sind bis dahin als Entwurf gekennzeichnet und mit `noindex` versehen.

[Testbericht](TESTBERICHT.md)
