# Odlingsguiden – Roadmap

> Allt du behöver veta – en gröda i taget

---

## Vision

Odlingsguiden ska bli det självklara uppslagsverket för svenska odlare – en app som gör EN sak exceptionellt bra: ger djup, pålitlig och zonanpassad information om varje gröda, bär, krydda och frukt du kan odla i Sverige.

Long tail-filosofin: börja smått och nischat (svenska odlingszoner 1–8), bygg den bästa möjliga produkten, expandera därifrån.

**Avsändare:** Lilla Bosgården (lillabosgarden.se) – ett småbruk utanför Kalmar med grönsakskassar, fönsterhantverk, självplock och gårdsbutik. Odlingsguiden blir gårdens digitala kunskapserbjudande: "Vi odlar det, vi lär dig odla det."

---

## Fas 1: Grundplattan ✅

Arkitektur, design, navigering och build-pipeline - allt som behövs innan vi kan skala innehåll.

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

### 1.8 Navigering i grödvy ✅

> Behåll appens identitet inne i grödprofiler - sticky navbar med logga och zonväljare

- [x] Ersätt naken "← Tillbaka" med kompakt navbar (back + logga + zon-pill)
- [x] Sticky navbar med position sticky, bakgrund och border
- [x] Zonväljare tillgänglig från grödvyn

Plan: `docs/plans/1.8-grod-navigering.yml`

### 1.9 URL-routing och SEO ✅

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

### 1.10 Code-splitting och build-optimering ✅

> Snabbare laddning - startsidan behöver bara ~200KB av 998KB

- [x] Lazy-load CropPage-routen med React.lazy
- [x] Bryt CROPS-beroendet i cropUtils (använd CROP_LIST)
- [x] Separera CROP_LIST till egen fil (cropList.ts)
- [x] Separera CropIcon (48px) från CropGraphic (120px)
- [x] Ta bort chunkSizeWarningLimit

Plan: `docs/plans/1.10-code-splitting.yml`

---

## Fas 2: Innehåll & Funktioner

Fyll på med innehåll, lägg till nya funktioner och kvalitetssäkra.

### 2.1 Alla profiler

> Lägg in alla grödor, bär och kryddor som kan odlas i Sverige

- [ ] Alla grönsaker (22 av ~40 klara)
- [ ] Alla bär (7 av ~15 klara)
- [ ] Alla kryddor (8 av ~20 klara)

### 2.2 Källhantering & faktacheck

> Trovärdighet kräver transparens - visa var informationen kommer ifrån

- [ ] Skapa `docs/guides/kallor.md` (metod, källtyper, ansvarsfriskrivning)
- [ ] Faktacheck befintliga profiler mot svenska källor (SLU, Impecta, Runåbergs)
- [ ] Verifiera zondata och sorter mot svenska frökataloger
- [ ] Verifiera tidslinjer mot SLU:s odlingskalender
- [ ] Ansvarsfriskrivning på sajten
- [ ] AI-transparens: öppen om att AI använts, utan att göra det till huvudsaken

### 2.3 Säsongsvy v1

> "Vad ska jag göra i min odling just nu?"

- [ ] Månadsbaserad startskärm
- [ ] Visar aktiva grödor/bär/kryddor och vad som behöver göras
- [ ] Zonmedveten - anpassar sig efter vald zon
- [ ] Varje åtgärd länkar till relevant profil och sektion

### 2.4 Frukt som fjärde kategori

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

- [ ] Ny flik i kategori-togglen + `category: "frukt"` i datamodellen
- [ ] Nya typer och fält i `types.ts`
- [ ] Kategori-specifika sektioner (Pollinationspartners, Beskärningsguide, Sortguide, Etablering, Mognadsklocka)
- [ ] Färg i designsystem + tokens
- [ ] Första fruktprofil: Äpple (flagship - bevisar att kategorin fungerar)

**Prioriterade fruktprofiler:**

| Prio | Frukt    | Familj       | Varför?                                                         |
| ---- | -------- | ------------ | --------------------------------------------------------------- |
| 1    | Äpple    | Rosaceae     | Sveriges mest odlade frukt. Enormt sortutbud. Zonberoende.      |
| 2    | Päron    | Rosaceae     | Näst populärast. Kräver pollinatör. Lagringsvärdig.             |
| 3    | Plommon  | Rosaceae     | Härdigt, populärt, finns sorter som klarar zon 5-6.             |
| 4    | Körsbär  | Rosaceae     | Både söt och sur. Fågelproblem = bra "drama" i profilen.        |
| 5    | Rabarber | Polygonaceae | Tekniskt en grönsak men odlas som frukt. Extremt härdig. Enkel. |

> Notering: Alla topp-4 är Rosaceae - samma familj som hallon och jordgubbar. Det öppnar för riktigt bra korsreferenser kring växtföljd, sjukdomar som sprids inom familjen, och pollinationssamband.

### 2.5 Sökfunktion

- [ ] Sök tvärs över kategorier
- [ ] Filtrering på familj, svårighetsgrad, zon

### 2.6 Webb-version (Statamic)

- [ ] Webb-version live på lillabosgarden.se/odlingsguiden
- [ ] Server-renderad HTML via Statamic - varje gröda får egen URL
- [ ] SEO-optimerat

### 2.7 Användartest

- [ ] Test med 10-15 svenska odlare
- [ ] Samla feedback, prioritera förbättringar

### 2.8 Gårdskoppling

- [ ] Koppling till gårdens produkter i relevanta profiler
- [ ] "Vill du inte odla själv? Moroten finns i våra grönsakskassar."

---

## Fas 3: Lansering

Gå live och bygg publik.

### 3.1 Innehållsmål

- [ ] 30+ grönsaker, 10+ bär, 12+ kryddor, 5+ frukt

### 3.2 Lansering

- [ ] Webbapp live på lillabosgarden.se/odlingsguiden
- [ ] Lanseringskampanj via @lillabosgarden Instagram + odlarforum
- [ ] Korsmarknadsföring: grönsakskassar ↔ webbapp, gårdsbutik ↔ webb

### 3.3 Utvärdering

- [ ] Utvärdera behov av native-app baserat på användartrafik

---

## Fas 4: Expansion

Väx och bredda.

### 4.1 Nordisk expansion

- [ ] Norge, Danmark, Finland

### 4.2 Globalt

- [ ] Tempererade zoner: UK, Nordtyskland, Kanada

### 4.3 Community

- [ ] Dela tips, bilder, skördrapporter

### 4.4 Partnerskap

- [ ] Fröföretag: Impecta, Runåbergs, Nelson Garden

---

## Idéer

Ingen prioritet. Plockas upp när det passar.

### Innehåll

- F1-hybrider utbildningssektion
- Plastfritt-perspektiv i odlingstips - lyft alternativ till fiberduk, markduk och plastbaserade material. Granris, halm, jutesäckar, stärkelsebaserade dukar (bio-nedbrytbara). Gå igenom profiler och komplettera med gröna alternativ där det finns. Vara ärliga när plast fortfarande är bästa valet (t.ex. fina insektsnät).

### Funktioner

- Mörkt läge / dark mode
- AI-rådgivare för växtproblem ("Min tomat har gula blad - vad är fel?")

### SEO & Synlighet

- Strukturerad data (JSON-LD) - schema.org markup per grödprofil for bättre synlighet i Google och AI-svar. Article + HowTo + BreadcrumbList. Data finns redan i profilerna, handlar om att mappa till JSON-LD och injektera i head.

### Optimering & Teknik

- Fortsatt bundle-optimering - utvärdera kontinuerligt: (1) separera illustrationsfiler (Icon vs Illustration) så stora SVG inte hamnar i main chunk, (2) dynamic import per grödprofil istället for att ladda alla 37 på en gång, (3) övervaka bundle-storlekar när fler profiler tillkommer

### Plattform

- Native-app (iOS/Android) som betald version med offline-åtkomst
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
- [ ] Odlingszonerna och landskapstilldelning behöver faktagranskas (Gotland = zon 1, m.fl.)
- [ ] Ingen säsongsvy/kalender
- [x] ~~Inga korsreferenser~~ (åtgärdat: 1.4 korsreferenser)
- [ ] Frukt saknas som kategori
- [ ] Bundle size >500KB pga Recharts

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
| `docs/research/faktacheck-2026-03-01.md` | Faktacheck av 5 profiler mot svenska källor |

---

_Senast uppdaterad: 2026-03-01_
