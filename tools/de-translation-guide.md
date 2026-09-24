# Deutsch-Lokalisierung — Übersetzungsleitfaden (SUPsfactory)

Ziel: die Website vollständig ins **Deutsche** zu übersetzen, als dritte
lokalisierte Sprache neben Español und Français. Alle neuen Dateien folgen der
Namenskonvention `<basis>.de.<ext>` im selben Ordner (z. B. `what-is-sup.de.yaml`,
`sup-cheetah-surge.de.mdx`, `air-deck-floor.de.md`, `faqs.de.yaml`).

## Grundregeln (gelten für ALLE Dateitypen)

1. **Basis ist immer die englische Datei.** Kopiere `x.yaml` / `x.mdx` / `x.md`
   und übersetze nur die *Werte* (Prosa, Labels, Beschreibungen). Die es/fr
   Geschwisterdatei darf höchstens als **Struktur-Referenz** dienen
   (Quoting/Formatierung), NIE als Übersetzungsquelle.
2. **Struktur nie verändern:** gleiche Schlüssel, gleiche Verschachtelung,
   gleiche Reihenfolge, gleiche Array-Längen, gleiche Frontmatter-Felder,
   gleiche Anzahl Tabellenspalten, gleiche Abschnittsanzahl.
3. **Gleiche Quoting-/Formatierungs-Stilrichtung** wie die englische (oder die
   es/fr) Datei: wenn Englisch `'...'` benutzt, benutze `'...'`; wenn `"..."`,
   dann `"..."`. Wenn ein YAML-Wert `:` , führende Sonderzeichen oder `#`
   enthält, in Quotes setzen — wie es die es/fr Vorlage getan hat.
4. **Technische Bausteine unangetastet lassen:** Komponenten `<...>`,
   Imports, JSX/TSX-Ausdrücke, `${...}`-Platzhalter, URLs, Bildpfade, Slugs,
   Anker `#...`, E-Mail- und Telefonnummern, ISO-Daten, ISO-Normen (CE, REACH,
   RoHS, ISO 9001), Maßeinheiten-Werte (`12,500 m²`, `15 PSI`, `11'0"×32"×6"`).
   Zahlen/Formate **nicht** ins Deutsche umformatieren (Punkt/Komma unverändert).
5. **UTF-8, echte Umlaute:** `ä ö ü ß` als echte Zeichen, niemals HTML-Entities.
   Datei mit LF-Zeilenenden und abschließendem Newline speichern, kein BOM.
6. **Nicht übersetzen:** Markennamen (SUPsfactory, Vatrad, Qingdao Vatrad
   Group Co., Ltd.), Produkt-/Modellnamen (z. B. *Cheetah Surge*), Skug-Slugs,
   Dateinamen. Internationale Branchenbegriffe, die im Deutschen ebenfalls
   üblich sind: OEM, ODM, **Private Label**, SUP, PSI, drop-stitch, R&D.
   Einzelne englische Fachebegriffe dürfen stehen bleiben, wenn sie im
   deutschsprachigen Wassersport/B2B Standard sind.

## Sprachqualität

- **Formelles, professionelles Geschäftsdeutsch**, durchgängig „Sie"-Form für
  an den Leser gerichtete Texte.
- Idiomatisch und natürlich — keine Wort-für-Wort-Übersetzung.
- Fachterminologie konsistent; wichtigste Begriffe:

| Englisch            | Deutsch (Vorschlag)                                  |
|---------------------|------------------------------------------------------|
| inflatable SUP      | aufblasbares SUP (Board)                             |
| paddle board        | SUP-Board / Paddelboard                              |
| board               | Board                                                |
| paddle              | Paddel                                               |
| factory             | Fabrik (oder Produktionsstätte)                      |
| manufacturing       | Fertigung / Herstellung                              |
| production line     | Fertigungsstraße / Produktionslinie                  |
| quality control     | Qualitätskontrolle                                   |
| quality inspection  | Qualitätsprüfung                                     |
| non-conforming product | nichtkonformes Produkt                            |
| warranty            | Garantie                                             |
| distributor         | Vertriebspartner / Distributor                       |
| retailer            | Händler / Einzelhandel                               |
| rental operator     | Verleihbetrieb(er)                                   |
| resort              | Resort                                               |
| customization       | Individualisierung / Anpassung                       |
| sample              | Muster                                               |
| trial order         | Probebestellung                                      |
| mass production     | Serienfertigung / Massenproduktion                   |
| prototype           | Prototyp                                             |
| lead time           | Lieferzeit / Durchlaufzeit                           |
| MOQ (minimum order quantity) | MOQ / Mindestbestellmenge                    |
| proof / evidence    | Nachweis / Belege                                    |
| compliance          | Konformität                                          |
| water sports        | Wassersport                                          |

- Titel/Hero-Überschriften: kraftvoll, prägnant, deutsch.
- Bei produktbezogenen „Claim"-Sätzen darauf achten, dass die Aussage exakt
  erhalten bleibt (keine Übertreibung, kein Weglassen von Fakten/Zahlen).
- Em-Dash (—) darf wie im Englischen/der es-fr-Struktur verwendet werden.

## Zielverzeichnisse

- `src/content/site/pages/*.de.yaml`   — aus `*.yaml`
- `src/content/site/products/*.de.mdx` — aus `*.mdx`
- `src/content/site/news/*.de.mdx`     — aus `*.mdx`
- `src/content/site/technology/*.de.md`— aus `*.md`
- `src/content/site/case-use/*.de.md`  — aus `*.md`
- `src/content/site/site/faqs.de.yaml`, `research.de.yaml` — aus den Basis-YAMLs

Pro Datei: nach dem Schreiben erneut öffnen und per kurzem Blick prüfen, dass
keine Struktur geändert wurde, keine Halbsätze/Trennfehler stehen und die Datei
mit einer Leerzeile endet.