# Källhantering & metod

> Hur informationen i Odlingsguiden samlas in, verifieras och presenteras.

---

## Nuläge (ärligt)

Odlingsguiden har 37 grödprofiler. **Ingen av dem är formellt faktacheckad** mot externa källor ännu. Profilerna är skrivna med AI (Claude) som verktyg, baserade på allmän odlingskunskap. De är strukturellt konsekventa och följer kompis-tonen, men vi kan inte garantera att varje datapunkt stämmer.

Det här dokumentet beskriver hur vi *ska* jobba med källor och verifiering - och var vi befinner oss just nu.

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

**Vi är i steg 1-3.** Steg 4-6 är nästa fas.

---

## Källor

### Myndigheter & forskning

| Källa | Användning |
| --- | --- |
| **SLU** (Sveriges lantbruksuniversitet) | Odlingstider, växtskydd, sortförsök |
| **Jordbruksverket** - odlingsbeskrivningar | Ekologisk odling, växtnäring, jordförbättring |
| **Jordbruksverket** - Växtskyddsinfo (databas) | Sjukdomar och skadedjur - sök per gröda |
| **SMHI** | Frostdatum, vegetationsperiod, klimatdata per ort |
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
- **37 profiler, 0 verifierade.** Vi jobbar på det. Statustabellen nedan visar var vi befinner oss.

---

## AI-transparens

Odlingsguiden är skapad med AI som verktyg. Vi gömmer inte det - det är en styrka, inte en svaghet.

**Varför AI?** En person kan inte rimligen skriva 80+ djupa grödprofiler med 25+ datapunkter vardera och hålla allt konsekvent. AI gör det möjligt att skapa innehåll i en skala som annars skulle kräva ett helt redaktionsteam.

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

| Profil | Verifierad | Datum | Källor |
| --- | --- | --- | --- |
| Morot | Nej | - | - |
| Tomat | Nej | - | - |
| Potatis | Nej | - | - |
| Hallon | Nej | - | - |
| Basilika | Nej | - | - |

*Tabellen fylls på allt eftersom profiler faktagranskas. Alla 37 profiler ska in.*

---

## Djupare research

Detaljerad research sparas i `docs/research/`:

| Fil | Ämne |
| --- | --- |
| `f1-frodebatten.md` | F1-hybrider vs kultursorter, svenska aktörer, EU-lagstiftning |

---

*Senast uppdaterad: 2026-03-01*
