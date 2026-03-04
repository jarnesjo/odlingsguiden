# Källhantering & metod

> Hur informationen i Odlingsguiden samlas in, verifieras och presenteras.

---

## Nuläge (ärligt)

Odlingsguiden har 77 grödprofiler. **Alla 77 är faktacheckade** mot svenska och internationella källor (8+6 batchar, mars 2026). Profilerna är skrivna med AI (Claude) som verktyg, baserade på allmän odlingskunskap och verifierade mot svenska frökataloger och myndigheter.

Nya profiler faktacheckas vid skapande (inbyggt i checklistan i `docs/guides/ny-groda.md`). Befintliga profiler faktagranskas i batcher.

---

## Metod

### Så här skapas en profil idag

1. **Utkast** - AI (Claude) skriver ett utkast baserat på allmän odlingskunskap och den 16-punkts checklista som finns i `docs/guides/ny-groda.md`.
2. **Strukturkontroll** - Profilen granskas mot checklistan: alla fält ifyllda, rätt format, kompis-ton, korrekt svenska.
3. **Encoding-check** - Kontroll att svenska tecken (å, ä, ö) inte tappats.

### Så här ska en profil verifieras (mål)

4. **Faktacheck** - Varje profil verifieras mot minst 2 svenska källor (se källista nedan).
5. **Källoggning** - Vilka källor som användes dokumenteras per profil.
6. **Status uppdateras** - Profilen markeras som verifierad i statustabellen.

**Alla 77 profiler har genomgått steg 1-4.** Steg 5-6 (detaljerad källoggning per profil) är nästa fas.

---

## Källor

### Myndigheter & forskning

| Källa | Användning |
| --- | --- |
| **SLU** (Sveriges lantbruksuniversitet) | Odlingstider, växtskydd, sortförsök |
| **Jordbruksverket** - odlingsbeskrivningar | Ekologisk odling, växtnäring, jordförbättring |
| **Jordbruksverket** - Växtskyddsinfo (databas) | Sjukdomar och skadedjur - sök per gröda |
| **SMHI** (via odlaatbart.se) | Frostdatum per ort (50/70/90%), vegetationsperiod. Zondata baseras på 70%-sannolikhet for varfrost och 50% for hostfrost. Se `docs/research/smhi-frostdatum.md` |
| **Hushållningssällskapet** | Regionala odlingsråd, "Frilandsgrönsaker i norr" (PDF) |

### Organisationer & zondata

| Källa | Användning |
| --- | --- |
| **Riksförbundet Svensk Trädgård** | Digitala zonkartan, frostdatum, odlingskalender |
| **Fritidsodlingens Riksorganisation (FOR)** | Rådgivning, konsumentbevakning |

### Frökataloger & plantskolor

| Källa | Profil | Användning |
| --- | --- | --- |
| **Runåbergs Fröer + NordFrö** | Enbart OP-sorter, kulturarvssorter | Sorter, odlingsråd, kulturarvsinfo |
| **Eco Grow** | Enbart KRAV-certifierat frö | Ekologiska sorter provodlade i svenska zoner |
| **Lindbloms Frö** | Ekologiskt, 800+ sorter | Sorter provodlade i Sverige, biodynamiskt |
| **Fröbanken** (Norden AB) | Kulturarvssektion | Svenskt Kulturarv-sorter |
| **Impecta Fröhandel** | Blandat OP + F1, kulturarvssektion | Sorter, såtider, odlingsråd |
| **Nelson Garden** | Stor marknadsledare, blandat | Sorter, zonhärdighet |
| **Stångby Plantskola** | Fruktträd, bärbuskar | Härdighet, sortval frukt |
| **Wexthuset** | Bred handel | Sortbeskrivningar, odlingsguider |

### Fröbevarande & genbanker

| Källa | Användning |
| --- | --- |
| **Föreningen Sesam** | Fröbevarande, kultursorter, fröbank, 40+ år |
| **NordGen** (Nordiskt Genresurscenter) | Officiell nordisk genbank, fröprover |
| **POM/SLU** (Programmet för odlad mångfald) | Grönt Kulturarv-märkning, växtroppar |
| **Allkorn** | Spannmålsmångfald, äldre lantraser |
| **FOBO + Fröpopup** | Fröbyte, politisk bevakning av EU-regler |

### Odlare & media

| Källa | Användning |
| --- | --- |
| **Sara Bäckmo / Skillnadens Trädgård** | Praktisk kunskap, årstidsodling |
| **odla.nu** | Community-erfarenheter, praktiska tips |

### AI (verktyg)

- **Claude (Anthropic)** - Används som skrivverktyg för att skapa utkast. AI:n ersätter inte källor - den strukturerar och formulerar text som sedan ska verifieras mot ovanstående källor.

---

## Källrankning (baserad på 8 batchar faktacheck)

Efter att ha faktacheckat alla 43 profiler har vi byggt upp erfarenhet om vilka källor som är mest pålitliga för svenska odlingsförhållanden.

### Nivå A: Förstahandskällor (konsekvent pålitliga)

| Källa | Styrka | Notering |
| --- | --- | --- |
| **Wexthuset** | Zoninfo, odlingsråd, sortbeskrivningar | Konsekvent bra data, ofta mest realistiska zonbedömningar |
| **Runåbergs Fröer** | Sorter (enbart OP), spacing, såtider | Pålitlig för allt de säljer, konservativa zoner |
| **Impecta Fröhandel** | Brett sortiment, odlingsråd | Bra komplement till Runåbergs, blandar OP + F1 |
| **perenner.se** | Härdighetsklassning (A/B/C-systemet) | Ovärderlig för att verifiera perenners vinterhärdighet |
| **SLU** | Forskning, sortförsök, växtskydd | Vetenskaplig tyngd, men inte alltid lättillgängligt |

### Nivå B: Bra komplement

| Källa | Styrka | Notering |
| --- | --- | --- |
| **Odla Ätbart** (odlaatbart.se) | Odlingsdata, SMHI-froststatistik, companion planting | Utbildade trädgårdsmästare. Frostdatum pålitliga (nivå A-kvalitet). Gröd-guider medeldjupa - bra komplement |
| **Jordbruksverket** | Växtskydd, sjukdomar, ekologisk odling | Auktoritativ för sjukdomar/skadedjur |
| **Nelson Garden** | Sortutbud, zonhärdighet | Stor marknadsledare, ibland generösa zonbedömningar |
| **Odlarglädjen** | Sortinfo, praktiska tips | Bra för ovanligare sorter |
| **Grobar.se** | Härdighetsinfo | Bra snabbkoll men inte alltid detaljerad |

### Nivå C: Internationella referenskällor

| Källa | Styrka | Notering |
| --- | --- | --- |
| **PFAF** (Plants for a Future) | Temperaturdata, ätlighet | Bra för temperaturintervall, men brittiskt klimat |
| **Kew POWO** | Taxonomi, artbestämning | Auktoritativ för vetenskapliga namn |
| **Missouri Botanical Garden** | Sortbeskrivningar, USDA-zoner | Bra referens men amerikanskt klimat |
| **GBIF** | Artförekomst, fynd i Sverige | Bekräftar om en art/sjukdom finns i Sverige |
| **Seed Savers Exchange** | Fröbesparing, isoleringsavstånd | Standardreferens för seed saving |

### Lärdomar från faktacheckprocessen

- **Zoner är den vanligaste felkällan.** Frökataloger och AI-genererade profiler tenderar att överskatta zonhärdighet. Svenska perenner.se med A/B/C-systemet är bästa verifikationskällan.
- **Temperaturangivelser varierar kraftigt** mellan källor. USDA-zoner mappar inte direkt till svenska zoner - svenska vintrar är blötare.
- **Companion planting-påståenden** är ofta traditionell visdom utan vetenskapligt stöd. Vi behåller dem men bör använda mjukare formuleringar ("kan hjälpa" istället för "avskräcker").
- **Latinska namn ändras.** Rosmarin omklassificerades 2017 (Rosmarinus → Salvia). Kew POWO är auktoritativ källa.
- **Nordamerikanska skadedjur** dyker ibland upp i AI-genererade profiler (t.ex. rabarbervivel). Alltid verifiera mot Jordbruksverket/SLU.

---

## Vad som verifieras och hur

### Nivå 1: Kritiskt (måste stämma exakt)

| Datapunkt | Verifieras mot |
| --- | --- |
| Odlingszoner | Riksförbundet Svensk Trädgård (zonkartan) |
| Frosttolerens | SMHI, SLU |
| Giftighet/varningar | Jordbruksverket, SLU |
| Familjetillhörighet | SLU, frökataloger |

### Nivå 2: Viktigt (ska stämma väl)

| Datapunkt | Verifieras mot |
| --- | --- |
| Såtider per zon | Frökataloger, Hushållningssällskapet |
| Skördetider per zon | Frökataloger, SLU |
| Sorter | Impecta, Runåbergs, Nelson Garden (att de säljs i Sverige) |
| Sjukdomar/skadedjur | Jordbruksverket Växtskyddsinfo |
| Plantavstånd, sådjup | Frökataloger (minst 2) |

### Nivå 3: Uppskattat (bästa bedömning)

| Datapunkt | Notering |
| --- | --- |
| NPK-näringskurvor | Generell växtfysiologi, ej mätdata för specifika sorter |
| Exakta skördmängder | Varierar kraftigt - intervall, inte exakta tal |
| Svårighetsgradering | Subjektiv bedömning |

---

## Faktacheck-process

Så här verifierar vi en profil:

1. **Öppna profilen** och gå igenom varje datapunkt mot verifieringstabellen ovan.
2. **Nivå 1 först** - kontrollera alla kritiska datapunkter. Rätta fel direkt.
3. **Nivå 2 sedan** - kontrollera såtider, sorter, skadedjur mot svenska källor. Notera vilka källor som användes.
4. **Nivå 3 noteras** - markera uppskattade värden tydligt (NPK-kurvor etc).
5. **Logga källorna** - uppdatera statustabellen med datum och vilka källor som kontrollerats.
6. **Committa** med `fix(crops): fact-check [gröda] against Swedish sources`.

### Prioriteringsordning

1. Vanligaste grödorna först (tomat, morot, potatis, sallat, lök)
2. Profiler som använts för extern research (mullbär, havtorn)
3. Resterande i alfabetisk ordning

---

## Fröfilosofi

Odlingsguiden prioriterar **öppenpollinerade sorter och kulturarvssorter** i sina rekommendationer. Det betyder inte att vi aldrig nämner F1-hybrider - men vi är tydliga med skillnaden och uppmuntrar odlare att spara eget frö.

**Varför?**
- Öppenpollinerade sorter kan fröbesparas - odlaren behåller makten över sitt frö
- Kulturarvssorter bevarar genetisk mångfald och svensk odlingshistoria
- Fem företag kontrollerar 95% av den globala grönsaksfrö-marknaden - vi vill motverka den trenden
- Svenska småskaliga fröföretag (Runåbergs, NordFrö, Lindbloms, Eco Grow) förtjänar stöd

**Vår linje:**
- Sortrekommendationer lyfter OP-sorter och kulturarvssorter *först*
- F1-hybrider nämns när de ger verkligt mervärde (sjukdomsresistens, härdighet i tuffa zoner)
- Vi markerar tydligt vilka sorter som är F1 och vilka som är OP
- Vi uppmuntrar fröbesparing och hänvisar till Föreningen Sesam

Djupare bakgrund: `docs/research/f1-frodebatten.md`

---

## Begränsningar

Vi är ärliga med vad Odlingsguiden är och inte är:

- **Vi är inte forskare.** Informationen bygger på etablerad odlingskunskap, inte egen forskning.
- **Näringskurvor är uppskattningar.** NPK-kurvorna visar generella mönster för att illustrera hur behoven förändras över säsongen. De är inte mätdata för specifika sorter eller jordar.
- **Lokala variationer finns.** Mikroklimat, jordtyp och väder påverkar mer än zontabeller kan visa.
- **Sorttillgänglighet ändras.** Frökataloger uppdateras årligen - en sort vi rekommenderar kan utgå.
- **77 profiler, alla faktacheckade.** Detaljerad källoggning per profil är nästa steg.

---

## AI-transparens

Odlingsguiden är skapad med AI som verktyg. Vi gömmer inte det - det är en styrka, inte en svaghet.

**Varför AI?** En person kan inte rimligen skriva 77+ djupa grödprofiler med 25+ datapunkter vardera och hålla allt konsekvent. AI gör det möjligt att skapa innehåll i en skala som annars skulle kräva ett helt redaktionsteam.

**Vad AI gör bra:** Strukturera data, hålla konsekvent format, skriva i rätt ton, generera SVG-illustrationer.

**Vad AI inte gör bra:** Garantera att specifika datapunkter stämmer för svenska förhållanden. Därför verifierar vi mot svenska källor.

**Vår princip:** Var öppen om att AI använts, men gör det inte till huvudsaken. Användaren bryr sig om att informationen stämmer - inte vilket verktyg som skrev den.

---

## Ansvarsfriskrivning

Informationen i Odlingsguiden är avsedd som vägledning och inspiration. Vi gör vårt bästa för att hålla innehållet korrekt och uppdaterat, men kan inte garantera att all information stämmer för just dina förhållanden.

- Använd alltid sunt förnuft och lokalkännedom.
- Kontrollera sorternas härdighet för din specifika zon och plats.
- Vid osäkerhet, rådgör med din lokala trädgårdsförening eller plantskola.
- Odlingsguiden ansvarar inte för misslyckade skördar eller felaktiga odlingsbeslut.

**Hittat ett fel?** Kontakta oss så rättar vi till det. Odlingsguiden blir bättre av feedback.

---

## Faktacheck-status

**Alla 77 profiler faktacheckade** (mars 2026).

### Batch 1-8: Ursprungliga 43 profiler (grönsaker, örter, bär)

| Batch | Profiler | Kritiska | Viktiga | Mindre | Rapport |
| --- | --- | --- | --- | --- | --- |
| 1 | Tomat, morot, potatis, sallat, lok | 0 | 8 | 5 | `faktacheck-2026-03-01.md` |
| 2 | Hallon, jordgubbar, blabar, vinbar | 2 | 6 | 4 | `faktacheck-2026-03-02.md` |
| 3 | Gurka, squash, pumpor, zucchini | - | - | - | `faktacheck-2026-03-02.md` |
| 4 | Artor, bonor, majs, purjolok | - | - | - | `faktacheck-2026-03-02-batch4.md` |
| 5 | Paprika, aubergine, broccoli, blomkal | - | - | - | `faktacheck-2026-03-02-batch5.md` |
| 6 | Krusbar, bjornbar, mullbar, rabarber | 6 | 10 | 6 | `faktacheck-2026-03-02-batch6.md` |
| 7 | Basilika, persilja, dill, graslok | 3 | 9 | 5 | `faktacheck-2026-03-02-batch7.md` |
| 8 | Timjan, mynta, rosmarin, oregano | 3 | 15 | 20 | `faktacheck-2026-03-02-batch8.md` |

### Batch 9-10: Nya profiler (faktacheckade vid skapande)

| Batch | Profiler | Kritiska | Viktiga | Mindre | Notering |
| --- | --- | --- | --- | --- | --- |
| 9 | Spenat, sparris, rodbeta, vitlok, mangold, kalrabbi, palsternacka, brytbona, chili, vitkal, rodkal, majrova, storbona, schalottenlok | 0 | - | - | Faktacheckade vid skapande (session 29-33) |
| 10 | Pak choi, brysselkal, jordartskocka, fankal | 2 | 17 | 8 | Faktacheckade i session 35. 28 fel rattade totalt. |

### Batch 11-14: Sista grönsakerna + alla bär (session 36-39)

| Batch | Profiler | Notering |
| --- | --- | --- |
| 11 | Selleri, rotselleri, savoykal, kinakal, melon, kronartskocka, endiv | Sista 7 grönsakerna. Alla 43 grönsaker klara. Faktacheckade vid skapande (session 36-37) |
| 12 | Blabar, lingon, havtorn | 3 bar. Faktacheckade vid skapande (session 38) |
| 13 | Aronia, tayberry, vita vinbar | 3 bar. Faktacheckade vid skapande (session 39) |
| 14 | Guldvinbar, tranbar, honungsbar | 3 bar. Alla 16 bar klara. Faktacheckade vid skapande (session 39) |

*Alla nya profiler faktacheckas vid skapande (se checklista i `docs/guides/ny-groda.md`).*

---

## Djupare research

Detaljerad research sparas i `docs/research/`:

| Fil | Ämne |
| --- | --- |
| `f1-frodebatten.md` | F1-hybrider vs kultursorter, svenska aktörer, EU-lagstiftning |
| `faktacheck-2026-03-01.md` | Batch 1: tomat, morot, potatis, sallat, lok |
| `faktacheck-2026-03-02.md` | Batch 2-3: bar, cucurbits |
| `faktacheck-2026-03-02-batch4.md` | Batch 4: artor, bonor, majs, purjolok |
| `faktacheck-2026-03-02-batch5.md` | Batch 5: paprika, aubergine, broccoli, blomkal |
| `faktacheck-2026-03-02-batch6.md` | Batch 6: krusbar, bjornbar, mullbar, rabarber |
| `faktacheck-2026-03-02-batch7.md` | Batch 7: basilika, persilja, dill, graslok |
| `faktacheck-2026-03-02-batch8.md` | Batch 8: timjan, mynta, rosmarin, oregano (sista) |
| `smhi-frostdatum.md` | SMHI-baserad froststatistik: 24 orter, var/host, mappning till zoner |

---

*Senast uppdaterad: 2026-03-04 (session 44)*
