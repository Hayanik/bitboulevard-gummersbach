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

## Google-Gästestimmen

- Vier positive Rezensionen direkt im Google-Maps-Profil mit Autorennamen und 5-Sterne-Bewertung abgeglichen. Kurze Originalauszüge mit Quellenlinks übernommen. Die englische Seite kennzeichnet die deutschen Originalzitate.
- Der Gesamtdurchschnitt wurde am 07.11.2026 mit 4,5 von 5 bei 191 Rezensionen angezeigt. Die Website zeigt diesen Stand als Momentaufnahme und kennzeichnet die positiven Auszüge als Auswahl.
- Der direkte Bewertungslink nutzt die im Google-Bewertungsfenster geprüfte Place-ID. Er führt für abgemeldete Nutzer zur Google-Anmeldung. Es wurde keine Rezension verfasst oder veröffentlicht.
- Deutsche und englische Startseite bei 320, 375, 430, 768, 1024 und 1440 CSS-Pixeln auf Überlauf geprüft. Helle Mobilansicht und dunkle Desktopansicht visuell kontrolliert. Keine Fehler in der erfassten Browserkonsole.
- Der Bewertungsbereich rendert statisches HTML. Er lädt keine Google-Widgets, externen Profilbilder oder zusätzlichen Client-Skripte.

## Originalkarte und Instagram · 07.11.2026

- Alle vier veröffentlichten JPG-Karten visuell gelesen und 49 Positionen übertragen: 12 Vorspeisen/Salate, 7 Spezialitäten, 14 Pizzen, 9 Fleischgerichte und 7 Extras. Nummern, Zutaten, beide Pizzagrößen (20/24 cm), Preise sowie separate Filet-/Steakvarianten abgeglichen. Quellen und Besonderheiten stehen in src/assets/menu/SOURCES.md.
- Deutsch und Englisch teilen dieselben Preis- und Variantendaten. Die Originalbilder sind als responsive WebP-Vorschauen eingebunden. Große JPGs laden bei Auswahl. Ohne JavaScript bleiben die Originalbilder über normale Links und sämtliche Gerichte als HTML erreichbar.
- Die abgedruckten Allergenkennzeichnungen sind als solche gekennzeichnet; fehlende Kennzeichnungen werden nicht als Allergenfreiheit ausgegeben. Der Hinweis nennt die Unvollständigkeit anhand von Calamari und Salatbrot ausdrücklich.
- Suche nach mehreren Begriffen (pizza thunfisch), englischen Zutaten (pizza tuna), Umlautumschreibung (haehnchen), Tzatziki-Schreibweisen, exakten Nummern (20, #20, Nr. 25a), Pizzagröße und fehlenden Treffern geprüft. Kategorieauswahl liefert 14 Pizzen mit jeweils zwei Preisen. Preisreihenfolge und Zurücksetzen geprüft.
- Beide Sprachfassungen von Karte und Startseite bei 320, 375, 768, 1024 und 1440 CSS-Pixeln ohne horizontalen Überlauf geprüft. Helle und dunkle Ansichten visuell kontrolliert. Bilddialog öffnet mit Tastaturfokus, schließt mit Escape und gibt den Fokus an den auslösenden Link zurück. Kein horizontaler Überlauf im mobilen Dialog.
- Instagram-Profil vom Auftraggeber übernommen: https://www.instagram.com/bit.boulevard. Pro Startseite drei korrekte Links (CTA, Profilkarte, Footer), zusätzlich Restaurant-JSON-LD und llms.txt. Kein Instagram-Embed, kein zusätzliches Tracking und keine externen Bildabrufe. Datenschutzhinweis zu externen Links ergänzt.
- Produktions-HTML enthält je Sprachfassung alle 49 Positionen. Alle vier JPG-Links zeigen auf existierende Build-Dateien. Browserkonsole in der Prüfung ohne Fehler. Abschließend: Astro-Prüfung mit 0 Fehlern, 0 Warnungen und 0 Hinweisen; Produktionsbuild für alle 26 Seiten erfolgreich.

## Original-Logo und einheitlicher App-QR · 07.11.2026

- Das vom Auftraggeber gelieferte Logo wurde unverändert übernommen (SHA-256 mit C:/Users/karam/Desktop/logo.png verglichen). Header, Footer, Instagram-Karte, Favicon, Vorschau-Metadaten und Restaurant-JSON-LD verwenden die Originaldatei.
- Exakte Hintergrundfarbe des PNG: RGB 12/44/29 (#0c2c1d). Website auf Waldgrün, Weiß und gedeckte Salbeifarben abgestimmt, einschließlich Hero, Menü, Karten, Formulare, Navigation, Footer und beider Farbmodi. Original-Logo nicht umgefärbt oder verzerrt. Der Header zeigt einen per CSS passend eingerahmten Bildausschnitt ohne Beschnitt des Schriftzugs.
- Alle 26 DE-/EN-Seiten im dunklen Modus bei 320, 1024 und 1440 CSS-Pixeln auf Überlauf, Logo, Headerfarbe und einzelne H1 geprüft: 78 erfolgreiche Kombinationen. Zusätzlich sechs repräsentative Seiten im hellen Modus bei 320, 375, 1024 und 1440 Pixeln: 24 erfolgreiche Kombinationen. Homepage-Header zusätzlich bei 375, 430, 768, 960 und am Desktop-Breakpoint geprüft. Mobiles Menü mit Tastatur geöffnet und mit Escape geschlossen; helle Darstellung kontrastreich. Keine Fehler in der erfassten Website-Konsole.
- Alle vier QR-Einbindungen nutzen dieselbe statisch erzeugte Datei /app-qr.svg und denselben Zielpfad /app/. Der Code enthält die konfigurierte öffentliche Domain unter /app/, unabhängig von der Sprache. Kein externer QR-Dienst. Store-Links bleiben als Alternativen erhalten.
- Tatsächlich generiertes Inline-Skript aus beiden App-HTML-Seiten in isolierter JS-Ausführung geprüft: iPhone, iPad mit Desktop-Kennung, Android, Android-Client-Hints, Windows-Desktop, Mac-Desktop, unbekanntes Gerät und Windows Phone. Alle 16 Fälle erfolgreich. Das Skript steht im HTML-Kopf und benötigt keinen zusätzlichen JavaScript-Download. Desktop-Link im Browser bis zur App-Auswahl geprüft.
- Die öffentliche Zieladresse https://www.bitboulevard.de/app/ liefert zum Prüfzeitpunkt HTTP 404. Für reale Scans muss die neue /app/-Route auf dieser Domain veröffentlicht sein. Ein Git-Push allein ersetzt diesen Hosting-Schritt nicht. Physische iPhone-/Android-Geräte wurden nicht verwendet; die Geräteerkennung wurde mit den genannten Browserkennungen geprüft.
- Abschluss: Astro-Prüfung mit 0 Fehlern, 0 Warnungen und 0 Hinweisen; Produktionsbuild für 26 Seiten erfolgreich. Original-Logo und QR-Datei im Build vorhanden, Logo-Metadaten und unmittelbare Inline-Weiterleitung in beiden Sprachrouten geprüft.
