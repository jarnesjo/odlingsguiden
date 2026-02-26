# 🌱 Grödguiden – Roadmap

> Allt du behöver veta – en gröda i taget

---

## Vision

Grödguiden ska bli det självklara uppslagsverket för svenska odlare – en app som gör EN sak exceptionellt bra: ger djup, pålitlig och zonanpassad information om varje gröda, bär, krydda och frukt du kan odla i Sverige.

Long tail-filosofin: börja smått och nischat (svenska odlingszoner 1–8), bygg den bästa möjliga produkten, expandera därifrån.

**Avsändare:** Lilla Bosgården (lillabosgarden.se) – ett småbruk utanför Kalmar med grönsakskassar, fönsterhantverk, självplock och gårdsbutik. Grödguiden blir gårdens digitala kunskapserbjudande: "Vi odlar det, vi lär dig odla det."

---

## Nuvarande status

### ✅ Klart

- **5 fullständiga profiler:** Morot, Tomat, Potatis (grönsaker), Hallon (bär), Basilika (kryddor)
- **3 kategorier:** Grönsaker (10 st), Bär (5 st), Kryddor (5 st) med toggle – Frukt planerad som fjärde
- **Zonväljare:** Odlingszon 1–8 med anpassat innehåll
- **15+ sektioner per profil:** Trivs bäst, Bra att veta, Sådd/Beskärning, Näringskurva, Jord & pH, Vattning, Tidslinje, Companion planting, Växtföljd, Sorter, Problem, Skördekalkylator, Lagring, Frötagning/Förökning
- **Kategori-anpassat:** Beskärning + Förökning för bär, Skörd & Användning för kryddor
- **Prompt-system:** Repeterbar prompt (PROMPT-lagg-till-groda.md) med 16-punkts kvalitetschecklista och tonguide
- **Latinskt namn primärt:** Solanaceae (Nattskatta) – som i frökataloger

### ⚠️ Kända brister

- [ ] Ingen säsongsvy/kalender
- [ ] Inga korsreferenser (companion planting nämner grödor men de är inte klickbara)
- [ ] All data i en enda JSX-fil (1700+ rader)
- [x] ~~Inga egna ikoner eller visuell identitet utöver emoji~~ → Designguide och designsystem-prompt klar
- [ ] Frukt saknas som kategori
- [ ] Typsnitt ej valt → Förslag: Fraunces (rubriker) + Lora (brödtext)

---

## Fas 1: Grund (Q1 2026) 🟡 Pågår

Handlar om att lägga grunden rätt innan vi satsar på volym.

### 1.1 Tonpass – Basilika ✅
> ~12 textredigeringar, ingen strukturförändring

- [x] Bort med engelska ord ("Win-win" → "Ett perfekt par!")
- [x] Känsla istället för procent ("70% jord + 30% perlit" → "7 delar jord med 3 delar perlit – hon måste kunna andas")
- [x] Personifiera plantan ("Vill ha jämnt fuktig jord" → "Basilikan älskar fukt men HATAR att stå blöt")
- [x] Uppdatera tonguide i prompten med 8 konkreta regler

### 1.2 Separera data från UI
> Gör det möjligt att lägga till profiler utan risk att röra UI-koden

- [ ] `crops-data.js` – All gröddata (CROPS, CROP_LIST, ZONE_INFO)
- [ ] `components.jsx` – Alla UI-komponenter
- [ ] `App.jsx` – Bara routing och state management

### 1.3 Korsreferenser
> "Wikipedia-effekten" – användare utforskar och fastnar

- [ ] Companion-data får `id`-fält som matchar CROP_LIST id
- [ ] UI renderar klickbara chips istället för ren text
- [ ] Fungerar i: companion planting, växtföljd, bra att veta, sorter

### 1.4 Säsongsvy v1
> "Vad ska jag göra i min odling just nu?"

- [ ] Månadsbaserad startskärm
- [ ] Visar aktiva grödor/bär/kryddor och vad som behöver göras
- [ ] Zonmedveten – anpassar sig efter vald zon
- [ ] Varje åtgärd länkar till relevant profil och sektion

### 1.5 Frukt som fjärde kategori 🍎
> Fruktträd och bärbuskar med flerårig karaktär – "planterar du rätt från början, skördar du i 30 år"

**Varför frukt?**

Fruktodling skiljer sig fundamentalt från grönsaker och kryddor: det är ett långsiktigt åtagande. Du planterar ett äppelträd och lever med det beslutet i decennier. Det gör att behovet av bra information faktiskt är *större* – du har inte råd att välja fel sort. Och det är precis den typen av djup, genomtänkt info som Grödguiden gör bäst.

**Vad gör frukt unikt jämfört med andra kategorier?**

- **Sortval är kritiskt.** Ett äppelträd i zon 5 behöver en helt annan sort än i zon 2. Fel sort = år av besvikelse. Här kan Grödguiden verkligen lysa med zonanpassade rekommendationer.
- **Pollinationspartners.** De flesta äppel- och päronsorter behöver en pollinatör – vilken sort passar med vilken? Det är korsreferenser på steroider.
- **Beskärning är en hel vetenskap.** Uppbyggnadsbeskärning (år 1–5), underhållsbeskärning (årlig), föryngringsbeskärning (gamla träd). Mer komplext än bärbeskärning.
- **Sjukdomar och skadedjur.** Äppelskorv, päronpest, fruktträdskräfta – fruktträd har fler specifika problem än grönsaker. En "Problem & sjukdomar"-sektion blir extra viktig.
- **Skörd, lagring och förädling.** Äpplen kan lagras i månader om man gör rätt. Plommon torkas. Körsbär syras. Här finns plats för riktigt bra, praktisk info.
- **Livslängd och mognad.** Ett äppelträd ger full skörd först efter 5–8 år. Det behöver kommuniceras tydligt – folk som är vana vid grönsaker (sådd → skörd på 3 månader) behöver andra förväntningar.

**Kategori-specifika sektioner (utöver standardsektioner):**

- **Pollinationspartners** – Vilka sorter behövs? Gruppindelning (triploid, diploid). Avstånd.
- **Beskärningsguide** – Uppbyggnad vs underhåll vs föryngring. Illustrerad tidslinje.
- **Sortguide** – Djupare än för grönsaker: smakprofil, lagringsbarhet, mognadstid, sjukdomsresistens per sort.
- **Etablering** – Plantering, stöd, skydd mot vilt (kaniner, rådjur). Första åren.
- **Mognadsklocka** – Visuell tidslinje: plommon mognar i augusti, äpplen sep–okt, päron okt–nov.

**Koppling till Lilla Bosgården:**

Frukt är extra naturligt för er – om ni odlar eller planerar att odla frukt på gården blir det "vi berättar om det vi själva gör". Och även om ni inte har fruktträd just nu kan guiden bygga trovärdighet: "Vi hjälper dig välja rätt från början – så du slipper plantera om efter 5 år."

**Tekniskt:**

- Ny flik i kategori-togglen: 🍎 Frukt
- `category: "frukt"` i CROP_LIST
- `isFruit`-flagg i CropPage med villkorlig rendering
- `perennial: true`, `lifespan: "20–50 år"`, `yearsToFullHarvest: 5`
- Nya fält: `pollination`, `pruningGuide`, `establishment`
- Färg i designsystem: förslag `fruit: "#B8653B"` (varm terrakotta/äppelröd), `fruitLight: "#F0DDD0"`

**Prioriterade fruktprofiler:**

| Prio | Frukt | Familj | Varför? |
|------|-------|--------|---------|
| 1 | Äpple | Rosaceae | Sveriges mest odlade frukt. Enormt sortutbud. Zonberoende. |
| 2 | Päron | Rosaceae | Näst populärast. Kräver pollinatör. Lagringsvärdig. |
| 3 | Plommon | Rosaceae | Härdigt, populärt, finns sorten som klarar zon 5–6. |
| 4 | Körsbär | Rosaceae | Både söt och sur. Fågelproblem = bra "drama" i profilen. |
| 5 | Rabarber | Polygonaceae | Tekniskt en grönsak men odlas som frukt. Extremt härdig. Enkel. |

> *Notering: Alla topp-4 är Rosaceae – samma familj som hallon och jordgubbar. Det öppnar för riktigt bra korsreferenser kring växtföljd, sjukdomar som sprids inom familjen, och pollinationssamband.*

### 1.6 Fler profiler → 16 totalt (10+3+3)

**Grönsaker (7 nya):**

| Prio | Gröda | Familj | Varför nu? |
|------|-------|--------|-----------|
| 1 | Ärtor | Fabaceae | Enkel, populär, korsrefereras redan av 3 profiler |
| 2 | Squash/Zucchini | Cucurbitaceae | Storslagen skörd, ny familj, bra drama i näringskurvan |
| 3 | Sallat | Asteraceae | Snabb, enkel, ny familj, bra för nybörjare |
| 4 | Lök | Amaryllidaceae | Grundgröda, nämns som companion överallt |
| 5 | Grönkål | Brassicaceae | Härdig, vintergröda, ny familj |
| 6 | Rädisa | Brassicaceae | Snabbast från sådd till skörd |
| 7 | Bondböna | Fabaceae | Kvävefixerare, bra växtföljdsväxt |

**Bär (2 nya):**

| Prio | Bär | Familj | Varför nu? |
|------|-----|--------|-----------|
| 1 | Jordgubbar | Rosaceae | Sveriges populäraste bär. Måste finnas. |
| 2 | Svarta vinbär | Grossulariaceae | Ny familj, extremt härdig, klassisk svensk buske |

**Kryddor (2 nya):**

| Prio | Krydda | Familj | Varför nu? |
|------|--------|--------|-----------|
| 1 | Persilja | Apiaceae | Grundkrydda, tvåårig, ny dimension |
| 2 | Dill | Apiaceae | Svenskt staple, direktsådd, enkel |

---

## Fas 2: Innehåll & Kvalitet (Q2 2026) 🔵 Planerad

- [ ] 20+ grönsaker, 6+ bär, 8+ kryddor, 3+ frukt
- [ ] Första fruktprofil: Äpple (flagship – bevisar att kategorin fungerar)
- [ ] Sökfunktion tvärs över kategorier
- [ ] Webb-version live på lillabosgarden.se/grodguiden (Statamic)
- [ ] Användartest med 10–15 svenska odlare
- [ ] Koppling till gårdens produkter i relevanta profiler

---

## Fas 3: Lansering (Q3–Q4 2026) 🔵 Planerad

- [ ] 30+ grönsaker, 10+ bär, 12+ kryddor, 5+ frukt
- [ ] React Native-app klar (iOS + Android)
- [ ] "Min odling" – spara vad du odlar, få påminnelser
- [ ] Engångsköp (49–79 kr) via App Store + Google Play
- [ ] Lanseringskampanj via @lillabosgarden Instagram + odlarforum
- [ ] Korsmarknadsföring: grönsakskassar ↔ app, gårdsbutik ↔ webb

---

## Fas 4: Expansion (2027+) 🔮 Framtid

- [ ] Nordisk expansion (Norge, Danmark, Finland)
- [ ] Tempererade zoner globalt (UK, Nordtyskland, Kanada)
- [ ] Community-funktioner (dela tips, bilder, skördrapporter)
- [ ] AI-rådgivare ("Min tomat har gula blad – vad är fel?")
- [ ] Partnerskap med fröföretag (Impecta, Runåbergs, Nelson Garden)

---

## Affärsmodell

### Ny modell: Gratis webb + Betald app

Webben (lillabosgarden.se/grodguiden) är helt gratis – fungerar som marknadsföring för gården och appen. Appen (React Native) kostar en engångssumma och ger en bättre upplevelse.

| | Webb (gratis) | App (49–79 kr engångsköp) |
|---|--------------|--------------------------|
| Allt innehåll | ✓ Alla profiler | ✓ Alla profiler |
| Sök & filter | Grundläggande | Snabb, offline-sökbar |
| Säsongsvy | ✓ | ✓ + push-notiser |
| Offline | ✗ | ✓ Full offline-åtkomst |
| Upplevelse | Webbsida | App-känsla (smooth, snabb) |
| Zonminne | Sessionsbaserat | Sparar dina inställningar |
| Min odling | ✗ | Spara vad du odlar |
| SEO | ✓ Driver trafik | – |
| Koppling Lilla Bosgården | ✓ Direkt på sajten | Länk i meny + "Från Lilla Bosgården" |

**Varför inte prenumeration?** Innehållet finns gratis på webben, så en prenumeration på 399 kr/år är svårmotiverad. Men ett engångsköp för bekvämligheten – snabb åtkomst, offline, app-känsla – det köper folk utan att blinka.

**Koppling till gårdens produkter:** Varje profil kan ha en diskret sektion: "Vill du inte odla själv? Moroten finns i våra grönsakskassar." Inte påträngande, utan hjälpsamt. Självplock av blommor, ägg i gårdsbutiken – allt kan korsrefereras naturligt.

### Intäktsscenario (år 1)

- Webben driver 2 000–5 000 besökare/månad via SEO
- 5% laddar ner appen = 100–250 köp
- 200 × 69 kr = ~14 000 kr
- Plus: Ökad trafik till gården, fler kassekunder, stärkt varumärke
- Målet: validera att folk betalar för bekvämlighet, samtidigt som webben bygger Lilla Bosgårdens varumärke

---

## Designprinciper

1. **En sak, exceptionellt bra.** Uppslagsverk, inte kalender/planerare/socialt nätverk.
2. **Djup slår bredd.** 30 profiler × 15 sektioner > 300 profiler × 3 sektioner.
3. **Zon först.** All info anpassas efter användarens odlingszon.
4. **Kompistonen.** Läs texterna högt – låter det som en kompis vid trädgårdsbordet? Perfekt. Låter det som en lärobok? Skriv om.
5. **Latinska namn primärt.** Solanaceae (Nattskatta), inte tvärtom.
6. **Offline-redo.** Odlare är i trädgården, inte vid datorn.

---

## Teknikstack (förslag)

### Webb (lillabosgarden.se/grodguiden)
- **CMS:** Statamic (redan befintlig sajt – Laravel-baserad, flat-file)
- **Gröddata:** Statamic collections (varje gröda = ett entry med fält)
- **Interaktivitet:** React-komponenter för zonväljare, filter, näringskurvor (alternativt Livewire)
- **Grafer:** Recharts (redan i prototypen)
- **SEO:** Server-renderad HTML via Statamic – varje gröda får egen URL
- **Hosting:** Samma som befintlig sajt

### App (iOS + Android)
- **Framework:** React Native + Expo
- **Data:** JSON/TS-filer bundlade i appen (snabbt, offline-först)
- **Grafer:** react-native-svg + victory-native
- **Betalning:** Engångsköp via App Store / Google Play
- **Delad datamodell:** Samma gröddata-filer matar både webben och appen

### Typografi
- **Rubriker:** Fraunces (Google Fonts, variabel, organisk serif)
- **Brödtext:** Lora (Google Fonts, bokaktig serif)
- **UI-element:** System-font (badges, etiketter, knappar)

---

## Konkurrentanalys

| | Grödguiden | Odla ätbart | GrowVeg | Grove.eco |
|---|-----------|------------|---------|-----------|
| Näringskurvor | ✓ | ✗ | ✗ | ✗ |
| Sv. odlingszoner | ✓ | ✓ | ✗ | ✗ |
| Djup per-profil | ✓ | Delvis | ✗ | Delvis |
| Companion planting | ✓ | Delvis | ✓ | ✗ |
| Bär, Kryddor & Frukt | ✓ | Delvis | Delvis | ✗ |
| Offline | Planerat | ✗ | ✗ | ✗ |
| Pris | 399 kr/år | Gratis | $40/år | $60/år |

**Vårt gap:** Ingen befintlig app kombinerar näringskurvor + nordisk klimatanpassning + djup per-profil-data. Och ingen har fruktträd med pollinationsguider och zonanpassade sortrekommendationer.

---

## Nästa steg (i ordning)

1. ~~Tonpass på basilika~~ ✅
2. Separera data från UI (crops-data.js)
3. Lägg till ärtor via prompten (validerar att prompten fungerar)
4. Implementera korsreferenser
5. Fylla på resterande fas 1-profiler (mål: 16 totalt)
6. Bygga säsongsvy v1

---

## Filer

| Fil | Beskrivning |
|-----|------------|
| `grodguiden-wireframe.jsx` | Huvudprototyp – React JSX med all data och UI |
| `grodguiden-designguide.jsx` | Visuell designguide med paletter, ikoner och typsnitt |
| `PROMPT-lagg-till-groda.md` | Repeterbar prompt för att lägga till profiler |
| `PROMPT-designsystem.md` | Designsystem-prompt för konsekvent visuell stil |
| `ROADMAP.md` | Denna fil – utvecklingsplan |
| `grodguiden-roadmap.docx` | Snygg Word-version av roadmapen |
| `research-smabruk-app.md` | Initial marknadsresearch |
| `research-gronsakslexikon-app.md` | Fokuserad research på crop lookup-appar |

---

*Senast uppdaterad: 2026-02-26*
