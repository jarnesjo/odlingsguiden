# Odlingsguiden – Roadmap

> Allt du behöver veta – en gröda i taget

---

## Vision

Odlingsguiden ska bli det självklara uppslagsverket för svenska odlare – en app som gör EN sak exceptionellt bra: ger djup, pålitlig och zonanpassad information om varje gröda, bär, krydda och frukt du kan odla i Sverige.

Long tail-filosofin: börja smått och nischat (svenska odlingszoner 1–8), bygg den bästa möjliga produkten, expandera därifrån.

**Avsändare:** Lilla Bosgården (lillabosgarden.se) – ett småbruk utanför Kalmar med grönsakskassar, fönsterhantverk, självplock och gårdsbutik. Odlingsguiden blir gårdens digitala kunskapserbjudande: "Vi odlar det, vi lär dig odla det."

---

## Epic: Grundplattan ✅

Arkitektur, design, navigering och build-pipeline - allt som behövdes innan vi kunde skala innehåll.

> Planfiler under `docs/plans/` använder original-numrering (1.x, 2.x) från innan epic-omstruktureringen.

### 1.1 Tonpass – Basilika ✅

> ~12 textredigeringar, ingen strukturförändring

- [x] Bort med engelska ord ("Win-win" → "Ett perfekt par!")
- [x] Känsla istället för procent ("7 delar jord med 3 delar perlit – hon måste kunna andas")
- [x] Personifiera plantan ("Basilikan älskar fukt men HATAR att stå blöt")
- [x] Uppdatera tonguide i prompten med 8 konkreta regler

### 1.2 Separera data från UI ✅

> Gör det möjligt att lägga till profiler utan risk att röra UI-koden

- [x] Vite + React + TypeScript med separerade data, typer, tema, komponenter och hooks
- [x] 27 komponenter i `components/ui/`, `components/crop/`, `components/pages/`
- [x] `App.tsx` med useState-navigation + useLocalStorage för zon

Plan: `docs/plans/1.2-separera-data.yml`

### 1.3 Grafisk profil ✅

> Professionell visuell identitet – custom SVG överallt, inga emojis

- [x] Icon-registry + `<Icon>`-komponent
- [x] ~20 nya SVG-ikoner (samma stil som befintliga 11)
- [x] PotatoIllustration (200×200 + 48×48)
- [x] Byt alla emojis i data till semantiska ID:n
- [x] Uppdatera alla komponenter att rendera SVG istället för emoji
- [x] Appheader med logotyp (SymbolSprout + "Odlingsguiden")
- [x] Branda appen med rätt färgpalett, typografi och visuell profil
- [x] Slutverifiering – grep efter kvarvarande emoji

Plan: `docs/plans/1.3-grafisk-profil.yml`

### 1.4 Korsreferenser ✅

> "Wikipedia-effekten" - användare utforskar och fastnar

- [x] Companion-data får `id`-fält som matchar CROP_LIST id
- [x] UI renderar klickbara chips istället för ren text
- [x] Fungerar i: samodling, växtföljd, bra att veta

### 1.5 Navigering i grödvy ✅

> Behåll appens identitet inne i grödprofiler - sticky navbar med logga och zonväljare

- [x] Ersätt naken "← Tillbaka" med kompakt navbar (back + logga + zon-pill)
- [x] Sticky navbar med position sticky, bakgrund och border
- [x] Zonväljare tillgänglig från grödvyn

Plan: `docs/plans/1.8-grod-navigering.yml`

### 1.6 URL-routing och SEO ✅

> Delbara URLer med svenska tecken, webbläsarhistorik och sökbarhet - `/bondböna`, `/ärtor`

- [x] React Router med URL per gröda (`/:cropSlug`)
- [x] Svenska slugs med åäö (`/bondböna`, `/grönkål`, `/svarta-vinbär`)
- [x] Dynamiska `<title>` och `<meta description>` per gröda
- [x] Sitemap.xml med alla grödor (genereras vid byggtid)
- [x] Webbläsarens bakåtknapp fungerar naturligt

### 1.7 Fler profiler → 16 totalt (10+3+3) ✅

> 11 nya profiler med full data + SVG-illustrationer

- [x] Ärtor (Fabaceae) - kvävefixerare, frosttålig, direktsådd
- [x] Squash/Zucchini (Cucurbitaceae) - värmekrävande, enorm skörd
- [x] Sallat (Asteraceae) - svalvädersvän, successionsådd
- [x] Lök (Amaryllidaceae) - grundgröda, sättlök + frösådd
- [x] Grönkål (Brassicaceae) - tål -15°C, bättre efter frost
- [x] Rädisa (Brassicaceae) - 20-30 dagar till skörd
- [x] Bondböna (Fabaceae) - kvävefixerare, tidig sådd
- [x] Jordgubbar (Rosaceae) - bärprofil med revor och beskärning
- [x] Svarta vinbär (Grossulariaceae) - tål -30°C, 15-20 år livsängd
- [x] Persilja (Apiaceae) - tvåårig, långsam groning
- [x] Dill (Apiaceae) - svenskaste kryddan, självsår sig

Plan: `docs/plans/1.7-fler-profiler.yml`

---

## Epic: Innehåll

Alla grödprofiler, fruktkategori, källhantering och faktacheck.

### 2.1 Alla profiler ✅

> Lägg in alla grödor, bär och kryddor som kan odlas i Sverige

- [x] Alla grönsaker (43 av 43 klara)
- [x] Alla bär (16 av 16 klara)
- [x] Alla kryddor (18 av 18 klara)

### 2.2 Källhantering & faktacheck ✅

> Trovärdighet kräver transparens - visa var informationen kommer ifrån

- [x] Skapa `docs/guides/kallor.md` (metod, källtyper, ansvarsfriskrivning)
- [x] Faktacheck befintliga profiler mot svenska källor (SLU, Impecta, Runåbergs)
- [x] Verifiera zondata och sorter mot svenska frökataloger
- [x] Verifiera tidslinjer mot SLU:s odlingskalender
- [x] Ansvarsfriskrivning på sajten
- [x] AI-transparens: öppen om att AI använts, utan att göra det till huvudsaken
- [x] Källrankning baserad på 8 batchar faktacheck-erfarenhet

### 2.3 Frukt som fjärde kategori

> Fruktträd och bärbuskar med flerårig karaktär - "planterar du rätt från början, skördar du i 30 år"

**Varför frukt?**

Fruktodling skiljer sig fundamentalt från grönsaker och kryddor: det är ett långsiktigt åtagande. Du planterar ett äppelträd och lever med det beslutet i decennier. Det gör att behovet av bra information faktiskt är större - du har inte råd att välja fel sort. Och det är precis den typen av djup, genomtänkt info som Odlingsguiden gör bäst.

**Vad gör frukt unikt jämfört med andra kategorier?**

- **Sortval är kritiskt.** Ett äppelträd i zon 5 behöver en helt annan sort än i zon 2. Fel sort = år av besvikelse. Här kan vi verkligen lysa med zonanpassade rekommendationer.
- **Pollinationspartners.** De flesta äppel- och päronsorter behöver en pollinatör - vilken sort passar med vilken? Det är korsreferenser på steroider.
- **Beskärning är en hel vetenskap.** Uppbyggnadsbeskärning (år 1-5), underhållsbeskärning (årlig), föryngringsbeskärning (gamla träd). Mer komplext än bärbeskärning.
- **Sjukdomar och skadedjur.** Äppelskorv, päronpest, fruktträdskräfta - fruktträd har fler specifika problem än grönsaker. En "Problem & sjukdomar"-sektion blir extra viktig.
- **Skörd, lagring och förädling.** Äpplen kan lagras i månader om man gör rätt. Plommon torkas. Körsbär syras. Här finns plats för riktigt bra, praktisk info.
- **Livslängd och mognad.** Ett äppelträd ger full skörd först efter 5-8 år. Det behöver kommuniceras tydligt - folk som är vana vid grönsaker (sådd -> skörd på 3 månader) behöver andra förväntningar.

**Kategori-specifika sektioner (utöver standardsektioner):**

- **Pollinationspartners** - Vilka sorter behövs? Gruppindelning (triploid, diploid). Avstånd.
- **Beskärningsguide** - Uppbyggnad vs underhåll vs föryngring. Illustrerad tidslinje.
- **Sortguide** - Djupare än för grönsaker: smakprofil, lagringsbarhet, mognadstid, sjukdomsresistens per sort.
- **Etablering** - Plantering, stöd, skydd mot vilt (kaniner, rådjur). Första åren.
- **Mognadsklocka** - Visuell tidslinje: plommon mognar i augusti, äpplen sep-okt, päron okt-nov.

**Koppling till Lilla Bosgården:**

Frukt är extra naturligt - om ni odlar eller planerar att odla frukt på gården blir det "vi berättar om det vi själva gör". Och även utan fruktträd just nu kan guiden bygga trovärdighet: "Vi hjälper dig välja rätt från början - så du slipper plantera om efter 5 år."

**Tekniskt:**

- Ny flik i kategori-togglen
- `category: "frukt"` i CROP_LIST
- `isFruit`-flagg i CropPage med villkorlig rendering
- `perennial: true`, `lifespan: "20-50 år"`, `yearsToFullHarvest: 5`
- Nya fält: `pollination`, `pruningGuide`, `establishment`
- Färg i designsystem: `fruit: "#B8653B"` (varm terrakotta), `fruitLight: "#F0DDD0"`

**Checkboxar:**

- [x] Ny flik i kategori-togglen + `category: "frukt"` i datamodellen
- [x] Nya typer och fält i `types.ts`
- [x] Kategori-specifika sektioner (Pollinationspartners, Etablering, Mognadsklocka) - beskärning och sortval via befintliga sektioner
- [x] Färg i designsystem + tokens
- [x] Första fruktprofil: Äpple (flagship - bevisar att kategorin fungerar)

**Prioriterade fruktprofiler:**

| Prio | Frukt    | Familj       | Varför?                                                         |
| ---- | -------- | ------------ | --------------------------------------------------------------- |
| 1    | Äpple ✅  | Rosaceae     | Sveriges mest odlade frukt. Enormt sortutbud. Zonberoende.      |
| 2    | Päron ✅  | Rosaceae     | Näst populärast. Kräver pollinatör. Lagringsvärdig.             |
| 3    | Plommon ✅ | Rosaceae     | Härdigt, populärt, finns sorter som klarar zon 5-6.             |
| 4    | Körsbär ✅ | Rosaceae     | Både söt och sur. Fågelproblem = bra "drama" i profilen.        |
| 5    | Rabarber ✅ | Polygonaceae | Tekniskt en grönsak men odlas som frukt. Extremt härdig. Enkel. |
| 6    | Fikon ✅    | Moraceae     | Funkar i zon 1-2 med rätt sort (Hardy Chicago). Växande trend.  |
| 7    | Valnöt ✅   | Juglandaceae | Flerårig investering. Broadview klarar zon 1-3. Nöt som frukt.  |
| 8    | Hasselnöt ✅| Betulaceae   | Buskar, zon 1-5. Svensk kulturhistoria. Enkel etablering.       |
| 9    | Vindruva ✅ | Vitaceae     | Zon 1-3 mot sydvägg. Populärt intresse, kräver rätt sort.      |

> Notering: Alla topp-4 är Rosaceae - samma familj som hallon och jordgubbar. Det öppnar för riktigt bra korsreferenser kring växtföljd, sjukdomar som sprids inom familjen, och pollinationssamband.

---

## Epic: Funktioner

Sök, säsongsvyer, kalender och andra användardrivna funktioner.

### 3.1 Säsongsvy v1 ✅

> "Vad ska jag göra i min odling just nu?"

- [x] Månadsbaserad startskärm
- [x] Visar aktiva grödor/bär/kryddor och vad som behöver göras
- [x] Zonmedveten - anpassar sig efter vald zon
- [x] Varje åtgärd länkar till relevant profil och sektion

Plan: `docs/plans/2.3-sasongsvy.yml`

### 3.2 Odlingskalender ✅

> Skriv om tidslinjen till horisontell bar-chart (Gantt-stil) - samma visuella stil som Mognadsklockan

- [x] `parseMonthEdges()` hjälpfunktion i monthParser.ts
- [x] Skriv om TimelineSection till horisontell bar-chart med färgkodade faser
- [x] CSS: chart-grid + lodräta gridlines + tvåradiga labels

Plan: `docs/plans/2.9-odlingskalender.yml`

### 3.3 Säsongsvy v2 - överskådlighet ✅

> Säsongsvyn blir lång och oöverskådlig - visa 2-3 grödor per sektion med "Visa mer"

- [x] Begränsa varje sektion till 3 grödor som standard
- [x] "Visa mer"-knapp som expanderar hela listan
- [x] Behåll full info men gör det lättare att skanna

### 3.4 Sökfunktion

- [x] CMD+K / Ctrl+K fokuserar sökinputet i listvyn
- [x] 1-4 tangentgenvägar byter kategori (CMD+1-4 i sökinputet)
- [x] type=search med native Escape-clear och rensa-knapp
- [ ] Sök tvärs över kategorier
- [ ] Filtrering på familj, svårighetsgrad, zon

---

## Epic: Performance & Kvalitet

Laddtider, accessibility, bundle-optimering och teknisk kvalitet.

### 4.1 Code-splitting och build-optimering ✅

> Snabbare laddning - startsidan behöver bara ~200KB av 998KB

- [x] Lazy-load CropPage-routen med React.lazy
- [x] Bryt CROPS-beroendet i cropUtils (använd CROP_LIST)
- [x] Separera CROP_LIST till egen fil (cropList.ts)
- [x] Separera CropIcon (48px) från CropGraphic (120px)
- [x] Ta bort chunkSizeWarningLimit

Plan: `docs/plans/1.10-code-splitting.yml`

### 4.2 LCP-optimering ✅

> Render Delay står för 85% av LCP-tiden (2.6s) - grödlistan är flaskhalsen

- [x] Lazy-ladda SVG-ikoner i listan (IntersectionObserver, första 8 direkt)
- [x] Resultat: LCP 3.1s → 2.3s, Performance 91 → 97
- [ ] Virtualisera grödlistan (rendera bara synliga rader)
- [ ] Splitta index-bundlen (cropList-data i egen chunk)

Plan: `docs/plans/4.2-lcp-optimering.yml`

### 4.3 Prerendering (SSG) ✅

> Statisk HTML vid byggtid + React-hydration - snabb FCP/LCP utan att tappa SPA-känslan

Eget prerender-script (inga extra deps) med React 19 `prerender()` API och `StaticRouter`. Renderar 102 routes till statisk HTML med korrekt title, description, och inbäddad JSON-data för flash-fri hydration.

- [x] Eget prerender-script (`scripts/prerender.ts`) - inga extra deps
- [x] SSR entry point (`src/entry-server.tsx`) med React 19 prerender() API
- [x] Alla 102 routes prerenderas (85 grödor, 4 kategorier, 12 säsongsmånader, startsida)
- [x] Flash-fri hydration: gröddata och säsongsdata inbäddad som JSON
- [x] Korrekt title och meta description per route
- [x] Alla CSS-filer (inklusive lazy chunks) injiceras i `<head>`
- [x] useLocalStorage SSR-guard

### 4.4 Accessibility ✅

> Lighthouse Accessibility 84 → 100 - WCAG AA-kontrast och länksynlighet

- [x] Fixa kontrastproblem (zonknappar, viss text)
- [x] Länkar ska skilja sig från omgivande text (inte bara färg)

---

## Epic: Webb & Lansering

Statamic-integration, användartest, gårdskoppling och go-live.

### 5.1 Webb-version (Statamic)

- [ ] Webb-version live på lillabosgarden.se/odlingsguiden
- [ ] Server-renderad HTML via Statamic - varje gröda får egen URL
- [ ] SEO-optimerat

### 5.2 Användartest

- [ ] Test med 10-15 svenska odlare
- [ ] Samla feedback, prioritera förbättringar

### 5.3 Gårdskoppling

- [ ] Koppling till gårdens produkter i relevanta profiler
- [ ] "Vill du inte odla själv? Moroten finns i våra grönsakskassar."

### 5.4 Innehållsmål

- [ ] 30+ grönsaker, 10+ bär, 12+ kryddor, 5+ frukt

### 5.5 Lansering

- [ ] Webbapp live på lillabosgarden.se/odlingsguiden
- [ ] Lanseringskampanj via @lillabosgarden Instagram + odlarforum
- [ ] Korsmarknadsföring: grönsakskassar ↔ webbapp, gårdsbutik ↔ webb

### 5.6 Utvärdering

- [ ] Utvärdera behov av native-app baserat på användartrafik

---

## Epic: Expansion

Nordisk och global expansion, community och partnerskap.

### 6.1 Nordisk expansion

- [ ] Norge, Danmark, Finland

### 6.2 Globalt

- [ ] Tempererade zoner: UK, Nordtyskland, Kanada

### 6.3 Community

- [ ] Dela tips, bilder, skördrapporter

### 6.4 Partnerskap

- [ ] Fröföretag: Impecta, Runåbergs, Nelson Garden

---

## Idéer

Ingen prioritet. Plockas upp när det passar.

### Innehåll

- F1-hybrider utbildningssektion
- Plastfritt-perspektiv i odlingstips - lyft alternativ till fiberduk, markduk och plastbaserade material. Granris, halm, jutesäckar, stärkelsebaserade dukar (bio-nedbrytbara). Gå igenom profiler och komplettera med gröna alternativ där det finns. Vara ärliga när plast fortfarande är bästa valet (t.ex. fina insektsnät).
- Biologisk balans & bondepraktika - gammal odlingsvisdom om att jobba med ekosystemet istället för mot det. Två delar:
  - **Ovan jord:** Fångstgrödor (trap crops) som lockar skadedjur bort från huvudgrödorna. Insektbanker (insectary plants) som drar in nyttodjur. "Is i magen"-principen: låt bladlössen komma först så nyckelpiggorna följer efter. Konkreta exempel: silvertistel som bladlusfälla, tagetes mot nematoder, honungsört som lockar syrflar, brännässlan som insektbank, rönn nära äppelträd, dillkronor som lockar parasitsteklar, fågelholkar i fruktträdgården, sten/vedhög för övervintrande nyttodjur.
  - **Under jord:** Mykorrhiza (svampnätverk som ger växter mineraler i utbyte mot socker - 90% av växter lever i symbios). Rhizobium i baljväxternas rotknölar (kvävefixering). Daggmaskar (400-500/m2 i frisk jord, maskgödsel 5x rikare på kväve). Jordbakterier (Bacillus, Pseudomonas) som naturliga antagonister mot svampsjukdomar. Kompost som "vaccination" - miljarder mikroorganismer per gram. No-dig/ytkompostering (bevarar svampnätverk och jordstruktur). Täckodling (bar jord = död jord, naturen täcker alltid marken).
  - **Format:** Kan bli (1) utökad companion/soil-sektion i profiler, (2) fristående guide/sektion "Levande jord" eller "Ekosystemet i din trädgård", (3) både och. Spånas vidare på.

### Funktioner

- Mörkt läge / dark mode
- AI-rådgivare för växtproblem ("Min tomat har gula blad - vad är fel?")

### SEO & Synlighet

- Strukturerad data (JSON-LD) - schema.org markup per grödprofil for bättre synlighet i Google och AI-svar. Article + HowTo + BreadcrumbList. Data finns redan i profilerna, handlar om att mappa till JSON-LD och injektera i head.

### Datakvalitet

- ~~Frostdatum per zon~~ ✅ Uppdaterat mot SMHI-statistik (session 44). 70% vårfrost + 50% höstfrost. Zon 1/2 differentierade. Käll-notis i UI. Research: `docs/research/smhi-frostdatum.md`
- Faktacheck gurka och andra batch 3-profiler som saknar dokumenterade källor

### Utbyggnad av datapunkter

Identifierat vid jämförelse med odlaatbart.se och andra svenska odlingssidor (session 44). Inget kritiskt - vi är redan mer kompletta än de flesta - men skulle höja värdet ytterligare.

- Groningstemperatur (min/optimal) per gröda - praktiskt vid förodling. Vi har `temperature.min` i optimalConditions men det avser växten, inte groningen. Ny datapunkt `germination: { min, optimal }` i SowingInfo.
- Köldtolerans per gröda - konkret gradtal (-2°C, -5°C etc.) som anger vad plantan överlever. Hjälper odlaren bedöma frostrisker på hösten och avgöra om den behöver skydd. Ny datapunkt i optimalConditions.
- Ätbara blommor - vi har `blommor` som kategori men inga profiler ännu. Lavendel, tagetes, penséer, ringblomma etc. Bra komplement till kryddorna.

### Optimering & Teknik

- ~~Fortsatt bundle-optimering~~ ✅ Implementerat session 40 - dynamic import för alla illustrationer och grödprofiler. Main bundle: 1043 KB → 253 KB
- ~~Stat-fält med noter (depthNote/spacingNote)~~ ✅ Implementerat session 37

### Plattform

- Native-app (React Native + Expo) som betald version med offline-åtkomst och premium-känsla
  - Monorepo-struktur: `packages/shared` (data, typer), `packages/web` (nuvarande Vite-app), `packages/app` (Expo)
  - Delar all crop-data, typer, kategorier, zoner via shared-paket
  - UI skrivs om i RN-komponenter (React DOM och React Native är olika)
  - SVG-illustrationer: path-data kan delas, renderare skiljer sig (svg vs react-native-svg)
  - Expo Go för snabb test-loop på telefon under utveckling
  - EAS Build för TestFlight-distribution
- Push-notiser i native-app (säsongsbaserade)

### Projekt

- README.md - så GitHub-sidan ser inbjudande ut istället för tom och trist

---

## Referens

### Designprinciper

1. **En sak, exceptionellt bra.** Uppslagsverk, inte kalender/planerare/socialt nätverk.
2. **Djup slår bredd.** 30 profiler × 15 sektioner > 300 profiler × 3 sektioner.
3. **Zon först.** All info anpassas efter användarens odlingszon.
4. **Kompistonen.** Läs texterna högt – låter det som en kompis vid trädgårdsbordet? Perfekt. Låter det som en lärobok? Skriv om.
5. **Latinska namn primärt.** Solanaceae (Nattskatta), inte tvärtom.
6. **Offline-redo.** Odlare är i trädgården, inte vid datorn.
7. **Ingen emoji – all grafik egengjord.** Custom SVG-ikoner och illustrationer genomgående.

### Affärsmodell

**Gratis webbapp först, native-app senare.**

**Steg 1 (nu):** Bygg en gratis webbapp – öppen för alla, driver trafik via SEO, och bevisar konceptet. Webben är huvudprodukten och ska vara komplett i sig.

**Steg 2 (framtida):** Native-app (iOS/Android) som valfri betalversion. Samma innehåll men bättre upplevelse. Användare kan välja att stödja projektet genom att betala för bekvämligheten.

|                          | Webbapp (gratis)  | Native-app (framtida, betald)        |
| ------------------------ | ----------------- | ------------------------------------ |
| Allt innehåll            | Ja                | Ja                                   |
| Sök & filter             | Ja                | Ja, offline-sökbar                   |
| Säsongsvy                | Ja                | Ja + push-notiser                    |
| Offline                  | Nej               | Ja, full offline-åtkomst             |
| Upplevelse               | Webbapp           | Native app-känsla                    |
| Zonminne                 | Sessionsbaserat   | Sparar inställningar                 |
| Min odling               | Nej               | Spara vad du odlar                   |
| SEO                      | Ja, driver trafik | –                                    |
| Koppling Lilla Bosgården | Direkt på sajten  | Länk i meny + "Från Lilla Bosgården" |

**Varför gratis webbapp först?** Validera att innehållet och upplevelsen håller innan vi investerar i native-app. Webben bygger publik, SEO-trafik och varumärke. Native-appen blir ett naturligt nästa steg när det finns en etablerad användarbas.

**Betalmodell för native-appen:** Engångsköp (pris TBD) – inte prenumeration. Användaren betalar för bekvämligheten: offline-åtkomst, app-känsla, push-notiser. Samma innehåll som webben, men smidigare.

**Koppling till gårdens produkter:** Varje profil kan ha en diskret sektion: "Vill du inte odla själv? Moroten finns i våra grönsakskassar." Inte påträngande, utan hjälpsamt.

### Teknikstack

**Webb (lillabosgarden.se/odlingsguiden):**

- **CMS:** Statamic (redan befintlig sajt – Laravel-baserad, flat-file)
- **Gröddata:** Statamic collections (varje gröda = ett entry med fält)
- **Interaktivitet:** React-komponenter för zonväljare, filter, näringskurvor
- **Grafer:** Recharts (redan i prototypen)
- **SEO:** Server-renderad HTML via Statamic – varje gröda får egen URL
- **Hosting:** Samma som befintlig sajt

**App (iOS + Android):**

- **Framework:** React Native + Expo
- **Data:** JSON/TS-filer bundlade i appen (snabbt, offline-först)
- **Grafer:** react-native-svg + victory-native
- **Betalning:** Engångsköp via App Store / Google Play
- **Delad datamodell:** Samma gröddata-filer matar både webben och appen

**Prototyp (nu):**

| Komponent   | Teknologi                                                          |
| ----------- | ------------------------------------------------------------------ |
| Byggverktyg | Vite 7.3                                                           |
| UI          | React 19 + TypeScript (strict)                                     |
| Styling     | CSS Modules + CSS custom properties                                |
| Typografi   | Fraunces (rubriker) + Lora (brödtext), self-hosted via @fontsource |
| UI-element  | System-font (badges, etiketter, knappar)                           |
| Grafer      | Recharts 3.7                                                       |

### Konkurrentanalys

|                      | Odlingsguiden | Odla ätbart | GrowVeg | Grove.eco |
| -------------------- | ------------- | ----------- | ------- | --------- |
| Näringskurvor        | Ja            | Nej         | Nej     | Nej       |
| Sv. odlingszoner     | Ja            | Ja          | Nej     | Nej       |
| Djup per-profil      | Ja            | Delvis      | Nej     | Delvis    |
| Companion planting   | Ja            | Delvis      | Ja      | Nej       |
| Bär, Kryddor & Frukt | Ja            | Delvis      | Delvis  | Nej       |
| Offline              | Planerat      | Nej         | Nej     | Nej       |
| Pris                 | Gratis (webb) | Gratis      | $40/år  | $60/år    |

**Vårt gap:** Ingen befintlig app kombinerar näringskurvor + nordisk klimatanpassning + djup per-profil-data. Och ingen har fruktträd med pollinationsguider och zonanpassade sortrekommendationer.

### Kända brister

- [x] ~~Emojis används överallt istället för custom SVG-ikoner~~ (åtgärdat: 1.3 grafisk profil)
- [x] ~~Potatis saknar illustration~~ (åtgärdat: 1.3 grafisk profil)
- [x] ~~Odlingszonerna och landskapstilldelning behöver faktagranskas (Gotland = zon 1, m.fl.)~~ (åtgärdat: Öland/Gotland→zon 1, Mälardalen→zon 2, alla regioner uppdaterade)
- [x] ~~Ingen säsongsvy/kalender~~ (åtgärdat: 3.1 säsongsvy v1)
- [x] ~~Inga korsreferenser~~ (åtgärdat: 1.4 korsreferenser)
- [x] ~~Frukt saknas som kategori~~ (åtgärdat: 2.3 frukt som fjärde kategori)
- [x] ~~Bundle size >500KB pga Recharts~~ (åtgärdat: session 40, dynamic import - main bundle 1043→253 KB. Recharts redan lazy-loaded i egen chunk)

### Filer

| Fil | Beskrivning |
| --- | --- |
| `prototypes/grodguiden-wireframe.jsx` | Huvudprototyp – referens, ej längre aktiv kod |
| `prototypes/grodguiden-designguide.jsx` | Visuell designguide med paletter och typsnitt |
| `prototypes/grodguiden-illustrationer.jsx` | SVG-illustrationer för grödor |
| `prototypes/grodguiden-logotyper.jsx` | Logotypkoncept och branding (migrerat till `src/components/brand/` + `public/brand/`) |
| `docs/guides/ny-groda.md` | Guide för att lägga till grödprofiler (16-punkts checklista) |
| `docs/guides/designsystem.md` | Designsystem-specifikation (färger, typografi, spacing, komponenter) |
| `docs/guides/svg-illustrationer.md` | SVG-illustrationsriktlinjer (200×200 + 48×48) |
| `docs/guides/kallor.md` | Källhantering, metod, fröfilosofi, AI-transparens |
| `docs/research/f1-frodebatten.md` | F1-hybrider vs kultursorter, svenska aktörer, EU-lagstiftning |
| `docs/research/faktacheck-*.md` | Faktacheck-rapporter (8 batchar, alla 43 profiler) |

---

_Senast uppdaterad: 2026-03-04 (session 53)_
