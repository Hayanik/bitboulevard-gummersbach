# Testbericht zur Überarbeitung

## Build und Ausgabe

- `npm run check` und `npm run build` für 14 statische Seiten. Deutsch und Englisch enthalten jeweils die gleichen sieben Seitentypen.
- Ausgabe auf interne Links, Anker und Bildziele, Sprachverweise und Canonicals, Sitemap, robots.txt und llms.txt geprüft.
- Die Speisekarte enthält die Gerichte bereits im statischen HTML. Bestellung, Reservierung und Kartenrouten nutzen direkte Links.

## Browserprüfung

- Startseite bei 320, 375, 430, 768, 1024, 1440 und 1920 CSS-Pixeln geprüft. Alle 14 Seiten zusätzlich bei 320 und 1440 CSS-Pixeln auf horizontalen Überlauf, Sprache und H1 geprüft.
- Mobile Navigation geöffnet, per Escape geschlossen und Fokus-Rückgabe geprüft. Sprachwechsel für Startseite und Speisekarte geprüft.
- Bildwechsel und FAQ per Tastatur bedient. In der englischen Speisekarte Kategorie und Suche geprüft. In der englischen Galerie per Pfeiltaste weitergeschaltet und mit Escape geschlossen.
- Google Maps erst nach Klick eingebunden. Die geladene Karte zeigte den Pin des Restaurants. Einbettung per Tastatur geschlossen und Fokus-Rückgabe geprüft.
- Footer-Link zum Seitenanfang getestet. Die Hero-Typografie wurde nach dem ersten visuellen Durchgang am Desktop entzerrt und erneut kontrolliert. Die erfasste Browserkonsole zeigte bei den getesteten Routen keine Fehler.
- Für Bestellportal, Lieferando und App-Stores wurden die Zielseiten recherchiert. Es wurde keine Bestellung ausgelöst.

## Noch ausstehende Messungen

Lighthouse, reale Core Web Vitals und eine vollständige WCAG-Konformitätsprüfung stehen aus. Die Umsetzung enthält Tastaturbedienung, sichtbare Fokuszustände, Skip-Link, Sprachkennzeichnung und Reduced Motion. Die finale Datenschutzerklärung hängt vom Hosting ab.

## Weiterentwicklung

- Alle 20 Seiten bei 320 und 1440 CSS-Pixeln im dunklen Modus sowie bei 320 CSS-Pixeln im hellen Modus auf horizontalen Überlauf geprüft.
- Modus per Tastatur umgeschaltet und Speicherung nach Seitenwechsel, Sprachwechsel und Neuladen bestätigt. Barrierefreiheitsseite mit Vogel in beiden Modi visuell geprüft. Die englische E-Mail-Vorlage wurde anhand des Linkziels geprüft.
- Google Maps in einem frischen Zustand, bei geöffnetem Dialog und nach Ablehnung blockiert. Live-Einbettung nach Freigabe geprüft. Nach Widerruf und Neuladen war das Iframe wieder entfernt. Den Link vom Datenschutzdialog zum Abschnitt auf derselben Seite separat geprüft.
- Die Galerie ließ sich nach der Erweiterung per Pfeiltaste und Escape bedienen. Die erfasste Browserkonsole zeigte keine Fehler.
- Produktionsausgabe auf 20 statische Seiten, konsistente Sprach- und Canonical-Verweise, interne Ziele, Bilddateien, Sitemap und fehlende initiale Google-Maps-Iframes geprüft.
- Die Startseite referenziert das frühere Animationsbundle mit rund 115 kB unkomprimiert nicht mehr. Der Build gibt drei WOFF2-Dateien aus. Lighthouse, Core Web Vitals und ein vollständiges WCAG-Audit stehen weiterhin aus.

## Hero und redaktioneller Ausbau

- Produktionsausgabe für 24 Seiten, darunter FAQ und Aus der Küche in beiden Sprachen.
- Alle 24 Seiten bei 320, 1024 und 1440 CSS-Pixeln auf horizontalen Überlauf und eine einzelne H1 geprüft.
- Hero-Szenen per Tastatur gewechselt und erste Szene wiederhergestellt. Die Auswahl ist bei 1440 × 900 Pixeln ohne Scrollen erreichbar. Desktop- und Mobilansicht visuell kontrolliert.
- Unterschiedliche Hintergrundfarben für Hero, Lokal-, Bestell- und FAQ-Bereich sowie Footer in beiden Modi bestätigt. FAQ aus der Hauptnavigation geöffnet, Frage per Tastatur aufgeklappt, englische Entsprechung und Menüanker der Küchenseite geprüft.
- SVG aus dem Original-Frontend auf der Barrierefreiheitsseite geladen und visuell geprüft. Browserkonsole ohne Fehler in diesen Durchläufen.

## Responsive Hero und App-QR

- Alle 26 Seiten bei 320, 768, 1024 und 1440 CSS-Pixeln auf horizontalen Überlauf und auf überlappende oder umgebrochene Kopfzeilen geprüft. Der Umbruch bei 320 Pixeln wurde behoben.
- Startseite und Bestellseiten zusätzlich bei 375, 430, 620, 960, 961, 1366, 1920 und 2560 Pixeln geprüft. Die Startseite bei 812 × 375 Pixeln im Querformat geprüft.
- Alle 26 Seiten im hellen Modus bei 375 und 1440 Pixeln geprüft. Hero und App-Bereich mobil und am Desktop visuell kontrolliert. Mobilmenü und Gerichtewechsel per Tastatur geprüft.
- Die vier erzeugten QR-Codes in deutschen und englischen Start- und Bestellseiten wurden aus der SVG-Grafik gerastert und mit einem unabhängigen Decoder ausgelesen. Ergebnis jeweils https://www.bitboulevard.de/app/.
- Die App-Auswahl für iPhone, Android, iPad und Desktop anhand der tatsächlichen Routing-Logik geprüft. Die App-Zielseite und beide Store-Links im Browser kontrolliert. Der Code setzt die Veröffentlichung der neuen /app/-Route auf der konfigurierten Domain voraus.
- Der QR-Code wird auf dem Build-Rechner erzeugt. Er lädt keine externen Dienste und benötigt kein clientseitiges QR-Skript.

## Interaktiver Originalvogel

- Standarddarstellung und Verhalten aus der vom Nutzer bereitgestellten Originaldatei AnimatedBird.tsx übernommen. Nicht verwendete Varianten wurden entfernt. Die Animation wird nur auf den beiden Barrierefreiheitsseiten eingebunden.
- Klick, Enter und Leertaste getestet. Der Vogel reagiert mit Hüpfen, Flügelschlagen und Herzen. Pause, statische Rückmeldung und Fortsetzen geprüft. Reduced Motion nutzt die statische Darstellung mit weiterhin bedienbarer Rückmeldung.
- Die E-Mail-Vorlage adressiert bit-boulevard@web.de. In beiden Sprachen enthält sie Betreff und Felder für eine Barriere-Meldung. Die Erklärung beschreibt das Ziel einer möglichst barrierefreien Website und lädt zu Rückmeldungen ein.
