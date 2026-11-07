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
- `src/data/menu.ts` enthält die zweisprachige, aus den vier Originalbildern übertragene Restaurantkarte mit Nummern, Preisen, Pizzagrößen und gedruckten Allergenkennzeichnungen. Astro rendert sie als HTML. React ergänzt Suche und Filter.
- `src/data/photos.ts` bündelt die gekennzeichneten KI-Motive. Astro erzeugt responsive WebP-Varianten. Das vom Auftraggeber bereitgestellte Original-Logo liegt unverändert in src/assets/bit-boulevard-logo.png. Die Farbwelt verwendet dessen Hintergrundfarbe #0c2c1d mit Weiß und gedecktem Salbeigrün.
- `src/styles/boulevard.css` enthält die visuelle Überarbeitung. Die Bewegungen der Startseite sitzen in `src/lib/motion.ts` und im Bildwechsel der Gerichte. Browser-Animationen und IntersectionObserver ersetzen die frühere GSAP-Abhängigkeit. Drei lateinische WOFF2-Dateien decken die beiden Sprachfassungen ab. Es gibt kein Autoplay-Video.
- Heller und dunkler Modus folgen zunächst der Systemeinstellung. Eine manuelle Auswahl wird unter `bb-theme` lokal gespeichert.
- Beim ersten Besuch erscheint eine Auswahl mit gleichwertigem Akzeptieren/Ablehnen und individuellen Einstellungen. Google Maps lädt erst nach Freigabe. `bb-consent-v2` merkt Zustimmung und Ablehnung für 180 Tage im localStorage, ohne Besucher-ID. Footer-Einstellungen erlauben jederzeit Änderungen und Widerruf; ein Maps-Klick nach Ablehnung fragt erneut. Änderungen werden zwischen geöffneten Tabs synchronisiert. Standort und Route bleiben ohne Skript als Links verfügbar. Datenschutz/Impressum bleiben ohne vorherige Auswahl zugänglich. Neue optionale Dienste müssen ausdrücklich in die Sperr- und Freigabelogik aufgenommen werden; dabei ist die Einwilligungsversion anzuheben.
- Barrierefreiheit, Impressum und Datenschutz teilen eine Vorlage mit Inhaltsverzeichnis. Die Barrierefreiheitsseite nutzt den interaktiven Standardvogel aus `Wabiy/Frontend/src/components/Home/AnimatedBird.tsx`. Er reagiert auf Klick, Enter und Leertaste, bietet eine Pausensteuerung und berücksichtigt Reduced Motion. Rückmeldungen zu Barrieren gehen per E-Mail an das Restaurant. Die Erklärung beschreibt Barrierefreiheit als Ziel und weist auf die noch ausstehende vollständige Prüfung hin. Die Animationsbibliothek wird nur auf den beiden Barrierefreiheitsseiten geladen.
- `src/data/reviews.ts` enthält vier kurze, direkt in Google Maps geprüfte Rezensionsauszüge und den Bewertungsstand vom 07.11.2026. Die Startseite kennzeichnet die positiven Auszüge als Auswahl, zeigt den Gesamtstand separat und verlinkt zu Google. Zahlen und Altersangaben sind eine Momentaufnahme und sollten bei Inhaltsaktualisierungen abgeglichen werden.
- Ein gemeinsamer QR-Code wird beim Build als /app-qr.svg lokal erzeugt und führt zur mit `SITE_URL` konfigurierten Domain unter `/app/`. Die Geräteerkennung läuft als Inline-Skript unmittelbar im HTML-Kopf: iPhone/iPad öffnen den App Store, Android öffnet Google Play. Am Desktop oder ohne JavaScript bleiben beide Store-Links verfügbar. Vor dem öffentlichen Einsatz des Codes muss diese Route auf der gewählten Domain erreichbar sein.
- Anfahrt, Bestellen, FAQ und Aus der Küche haben eigene Routen. Der Hero bietet drei manuell wählbare Food-Motive. Weitere Szenen werden erst beim Wechsel geladen.
- Die Startseiten enthalten Restaurant-JSON-LD. `llms.txt` ist ein kompakter Wegweiser zu offiziellen Inhalten. Für Googles KI-Suche setzt die Website auf indexierbares HTML und die üblichen Suchsignale.

## Quellen

- [Kontakt des Restaurants](https://www.bitboulevard.de/kontakt/) und [Bestandsimpressum](https://www.bitboulevard.de/impressum/) für Adresse, Betreiber, Reservierungswege und Küchenzeiten.
- [Lieferdienst](https://bitboulevard-gummersbach.de/), [Bestellportal](https://bestellen.bitboulevard-gummersbach.de/menu), [Lieferando](https://www.lieferando.de/speisekarte/bit-boulevard-gummersbach), [Android](https://play.google.com/store/apps/details?id=com.lieferfabrik.bitboulevard) und [iOS](https://apps.apple.com/de/app/bit-boulevard-in-gummersbach/id6504585524) für Bestellwege, Lieferzeiten und Apps.
- Der Google-Maps-Pin wurde in der eingebetteten Karte anhand des Restaurants und der Adresse geprüft. Das Instagram-Profil https://www.instagram.com/bit.boulevard wurde vom Auftraggeber bestätigt und ist auf Startseite, im Footer und in den strukturierten Daten hinterlegt. Weitere Betriebe sind nicht belegt.
- Das Impressum nennt die belegten Anbieter- und Kontaktangaben nach [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html). Die Startfreigabe für weitere gegebenenfalls nötige Angaben steht aus.
- Die Schriften stammen aus Fontsource und stehen unter der SIL Open Font License. Die Lizenztexte liegen in den jeweiligen npm-Paketen.

## Vor Veröffentlichung klären

- Freigegebene Originalaufnahmen von Gaststube und Gerichten. Derzeit sind die Motive als KI-Bilder gekennzeichnet.
- Restaurantöffnungszeiten und Aktualität der getrennten Küchen- und Lieferzeiten bestätigen. Preise vor Ort, Zutaten, Allergene und Zusatzstoffe abgleichen.
- Impressum um etwaige bestätigte Pflichtangaben ergänzen, etwa vorhandene USt-IdNr., Register- oder Aufsichtsangaben. Anwendbarkeit und Betreiberposition zur Verbraucherstreitbeilegung klären.
- Datenschutzhinweise anhand des gewählten Hostings und der tatsächlichen Datenverarbeitung fertigstellen. Beide Datenschutzseiten sind bis dahin als Entwurf gekennzeichnet und mit `noindex` versehen.

[Testbericht](TESTBERICHT.md)

## Originalkarte und Social Media

Die Restaurantkarte basiert auf den vier veröffentlichten Originalbildern vom 07.11.2026. Alle 49 Positionen, gedruckte Preise, Nummern und Varianten werden in Deutsch und Englisch ausgegeben. Herkunft und Transkriptionshinweise: src/assets/menu/SOURCES.md. Die Suchfunktion unterstützt Zutaten in beiden Sprachen, mehrere Begriffe, Umlautumschreibungen, exakte Kartennummern und Preisreihenfolge je Kategorie. Gedruckte Allergenangaben sind keine eigenständige Prüfung der Rezepturen. Preise und Auswahl des Bestellportals können abweichen. Bestehende Bifteki-Beschreibungen werden der Lieferkarte zugeordnet.

Instagram ist als lokal gestalteter Bereich mit Direktlinks eingebunden; es werden weder Feed noch Tracking von Instagram geladen. Die Originalkarten werden lokal ausgeliefert, ohne Abruf von der bisherigen Website.
