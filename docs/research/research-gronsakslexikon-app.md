# Research: Nischad uppslagsverks-app för grönsaker och odling

## Vad finns redan?

### Svenska aktörer

| Aktör | Typ | Vad den gör | Vad den saknar |
|-------|-----|-------------|----------------|
| **Odla ätbart** (iOS-app) | App | 110+ växter, odlingskalender, påminnelser, "vad gör jag nu"-vy | Ingen näringskurva, begränsad companion planting, ingen växtföljdsdata, ingen ekonomi |
| **Odlingskalender.se** | Webb | Månad-för-månad-kalender med grödor | Statisk, ingen personalisering, ingen djup gröddata |
| **Vackertväder.se** | Webb | Lokal odlingskalender baserad på frostdatum per ort | Bara timing, ingen odlingsinfo i övrigt |
| **Blomsterlandet/Granngården** | Webb | Säsongsguider, artiklar | Marknadsföring, inte verktyg |

### Internationella aktörer

| Aktör | Typ | Styrkor | Svagheter |
|-------|-----|---------|-----------|
| **GrowVeg** | Webb/app | Companion planting, layout, växtföljdsvarning | Ej nordiskt klimat, prenumeration ($) |
| **Grove.eco** | Webb/app | Bäddplanering, grannskap, växtföljd | Tysk/europeisk, ej nordisk anpassning |
| **Almanac Garden Planner** | Webb | Stor databas, väderstationsdata | Helt USA-fokuserat |
| **Gardenize** | App | Fotologg, 2000+ växter, påminnelser | Uppslagsverk saknas, ingen näringsstyrning |
| **Seed to Spoon** | App | 100+ grödor, GPS-baserade datum | USA-fokus, ingen näringskurva |
| **Nutrient Advisor** (Nutrient TECH) | App | Bristsymtom per gröda, produktrekommendationer | Kommersiellt jordbruk, inte hemmaodlare |
| **PhenologyMMS** (USDA) | Mjukvara | Tillväxtstadier baserat på väder | Forskningsverktyg, ej konsument |

### Sammanfattning av landskapet

Det finns **ingen app** som kombinerar alla dessa funktioner i ett gränssnitt:

1. Detaljerat grödlexikon med nordisk anpassning
2. Visuella näringskurvor (när behöver grödan mest N, P, K)
3. Companion planting-matris
4. Växtföljdsrekommendationer
5. Tillväxtstadie-timeline per gröda

**"Odla ätbart"** är närmaste svenska konkurrenten, men den är i grunden en kalender med påminnelser – inte ett uppslagsverk med djup data.

---

## Luckan: "Grödguiden" – ett riktigt uppslagsverk

### Vad som saknas på marknaden

Tänk dig att du googlar "morot odla" idag. Du får 15 blogginlägg med delvis motstridig info. Det finns ingen app där du kan slå upp **morot** och få:

- **Tidslinje**: Förodla → Härda av → Plantera ut → Gallra → Gödsla → Skörda – anpassad för din zon
- **Näringskurva**: En visuell graf som visar när moroten behöver mest kväve (tidig tillväxt), fosfor (rotutveckling) och kalium (mognad)
- **Companion planting**: Bra grannar (lök, salvia, tomat) och dåliga grannar (dill) med förklaring *varför*
- **Växtföljd**: "Odla inte morot efter palsternacka, selleri eller persilja (samma familj). Bra föregångare: baljväxter, lök, kål"
- **Sortrekommendationer**: Vilka sorter funkar bäst i zon 3 vs zon 6?
- **Vanliga problem**: Morotsflugan – symtom, prevention, åtgärd
- **Jordkrav**: pH 6,0–6,8, luckerjord, undvik nygödslad jord
- **Skördefönster**: "Babymorötter efter 50 dagar, fullstora efter 70–80 dagar"

Allt detta på **ett ställe**, visuellt snyggt, och anpassat efter var i Sverige du bor.

---

## Appkoncept: "Grödguiden"

### Kärnfunktioner

#### 1. Grödlexikon (uppslagsverk)
- 80–120 grödor som är relevanta för nordisk odling
- Varje gröda har en komplett profil med all data samlad
- Sökbart och filtrerbart (familj, svårighetsgrad, zon, säsong)

#### 2. Visuell näringskurva per gröda
```
Morot – Näringsbehov över säsongen

Kväve (N)  ████████░░░░░░░░  Mest i tidig tillväxt
Fosfor (P) ░░░░████████████  Ökar under rotutveckling
Kalium (K) ░░░░░░░░████████  Mest under mognad

        Sådd  Tillväxt  Rotutveckling  Mognad  Skörd
        Apr     Maj        Jun-Jul       Aug     Sep
```
- Visar kurvor (inte bara text) för N-P-K-behov per tillväxtfas
- "Just nu"-markör baserat på när användaren sådde
- Konkreta gödseltips: "Ge flytande algbaserad gödsel varannan vecka maj–juni"

#### 3. Companion planting-matris
- Visuell matris: grön (bra), röd (dålig), grå (neutral)
- *Varför*-förklaringar: "Lök avskräcker morotsflugan med sin doft"
- Filtrera: "Visa alla bra grannar till morot"

#### 4. Växtföljdsguide
- Per gröda: bra/dåliga föregångare och efterföljare
- Familjebaserat: flödesschema per växtfamilj
- Historik: "Du odlade kål här förra året → föreslår baljväxter i år"

#### 5. Zon-anpassad tidslinje
- Baserad på Sveriges 8 växtzoner
- Visar förodling, utplantering, gödsling, skörd som en visuell tidslinje
- Justeras automatiskt baserat på vald zon/ort

#### 6. Problemlösare
- Vanliga skadedjur och sjukdomar per gröda
- Bildbaserad identifiering (framtid: AI-bildanalys)
- Ekologiska åtgärder i första hand

### Vad som gör den unik (USP)

| Feature | Odla ätbart | GrowVeg | Grödguiden |
|---------|------------|---------|------------|
| Nordiska zoner | Ja (delvis) | Nej | **Ja, djupt** |
| Näringskurvor | Nej | Nej | **Ja** |
| Companion planting med förklaring | Nej | Ja (basic) | **Ja, med varför** |
| Växtföljdshistorik | Nej | Ja (varning) | **Ja, med rekommendation** |
| Tillväxtstadie-timeline | Nej | Nej | **Ja, visuell** |
| Sortrekommendationer per zon | Nej | Nej | **Ja** |

**Den centrala USP:en är näringskurvorna.** Ingen befintlig app visar *visuellt* hur en grödas näringsbehov förändras genom säsongen. Det är precis den typen av "superbra information" som gör att en odlare återkommer.

---

## Affärsmodell

### Intäktsströmmar

| Ström | Detaljer | Uppskattad intäkt |
|-------|----------|-------------------|
| **Freemium** | 15 grödor gratis, resten kräver premium | Konvertering ~5% |
| **Premium-prenumeration** | 49 kr/mån eller 399 kr/år – alla grödor, alla features | Kärn-intäkt |
| **Affiliate** | Länka till fröer, gödsel, verktyg (Blomsterlandet, Impecta, Runåbergs) | 5–10% provision |
| **B2B-licens** | Kommuner, koloniföreningar, studieförbund, skolor | 2 000–10 000 kr/år |
| **Sponsrat innehåll** | Fröföretag sponsrar sin sorts profil i appen | Komplement |

### Prissättning jämfört med konkurrenter
- Odla ätbart: Gratis bas, premiumfunktioner ca 79–99 kr
- GrowVeg: ~$40/år (ca 420 kr)
- Grove.eco: Freemium
- **Grödguiden**: 399 kr/år → positionerad som billigare än GrowVeg men mer nischad och djupare

### Marknadskanal
- SEO: Varje grödsida blir en landningssida ("hur odla morot i Sverige")
- YouTube/TikTok: Korta "visste du att..."-klipp per gröda
- Odlingsgrupper: Facebook, Reddit (r/odling, r/trädgård)
- Samarbeten: Sara Bäckmo, Skillnadens Trädgård, andra odlingsinfluencers

---

## Teknisk approach (MVP)

### Fas 1 – Webb-app (3–4 månader)
- Responsiv webbapp (React/Next.js)
- 30 grödor med komplett data
- Zon-baserad kalender
- Companion planting-matris
- Näringskurvor som interaktiva grafer

### Fas 2 – Utökning (3–4 månader)
- 80+ grödor
- Växtföljdshistorik (konto krävs)
- PWA (installera som app)
- Push-notiser: "Dags att gödsla dina tomater"

### Fas 3 – Native app + AI (6+ månader)
- iOS/Android native
- AI-bildanalys: "Vad är fel med min planta?"
- Community: dela bilder och tips per gröda
- B2B-dashboard för kommuner/föreningar

### Datakällor för näringskurvor
- Akademisk litteratur (SLU, Jordbruksverket)
- USDA Crop Nutrient Tool (öppen data, anpassas till nordiska förhållanden)
- Konsultation med svenska rådgivare/agronomer
- Pinch of Seeds fertilizer charts (validering)

---

## Riskanalys

| Risk | Sannolikhet | Konsekvens | Åtgärd |
|------|-------------|------------|--------|
| "Odla ätbart" kopierar features | Medel | Hög | Fokusera på djup data (kurvor) som är svårt att kopiera snabbt |
| Svårt att samla korrekt näringsdata | Medel | Hög | Samarbeta med SLU/Jordbruksverket, börja med 30 välkända grödor |
| Liten betalningsvilja hos hobbyodlare | Hög | Medel | Generös gratisversion, affiliate som komplement |
| Säsongsberoende användning | Hög | Medel | Vinterinnehåll: planering, kurser, fröbeställning |

---

## Slutsats

**Luckan är verklig och tydlig.** Det finns ingen app som fungerar som ett riktigt uppslagsverk för grönsaker med visuella näringskurvor, companion planting-förklaringar och växtföljdsdata – anpassat för Sverige.

**Näringskurvorna** är den feature som ingen annan har. Det är datadrivet, visuellt tilltalande och svårt att replikera utan arbete. Det är den typen av "wow, det här visste jag inte"-moment som får användare att stanna och betala.

**Rekommendation:** Börja med en webbapp med 30 grödor. Gör varje grödsida så bra att den rankar på Google ("odla tomat i Sverige"). Bygg trafik genom SEO + sociala medier. Monetisera med freemium + affiliate. Expandera gradvis.

---

## Källor

- [Odla ätbart (App Store)](https://apps.apple.com/se/app/odla-%C3%A4tbart/id1582156997)
- [Odlingskalender.se](https://odlingskalender.se/)
- [GrowVeg](https://www.growveg.com/guides/companion-planting-made-easy/)
- [Grove.eco](https://www.grove.eco/en/)
- [Nutrient Advisor App](https://nutrient.tech/nutrient-advisor-app)
- [USDA Crop Nutrient Tool](https://plants.usda.gov/npk/main)
- [Pinch of Seeds – Fertilizer Chart](https://pinchofseeds.com/vegetable-garden-fertilizer-chart/)
- [Seedtime](https://seedtime.us/)
- [The Local – Growing in Sweden](https://www.thelocal.se/20240506/how-to-grow-your-own-fruits-and-vegetables-in-sweden)
- [Garden.org – Stockholm Calendar](https://garden.org/apps/calendar/?q=Stockholm)
- [PhenologyMMS – USDA](https://www.ars.usda.gov/news-events/news/research-news/2011/software-reveals-critical-crop-growth-stages/)
