# Prompt: Lägg till ny gröda/bär/krydda i Grödguiden

## Instruktion till AI-agent

Du ska lägga till en ny gröda, bärbuske eller krydda i Grödguiden-appen (`grodguiden-wireframe.jsx`). Appen har tre kategorier:

- **Grönsaker** (`category: "grönsaker"`) – ettåriga, med sowing/seedSaving
- **Bär** (`category: "bär"`) – fleråriga buskar, med pruning/propagation istället för sowing/seedSaving. Har `perennial: true` och `lifespan`.
- **Kryddor** (`category: "kryddor"`) – kan vara ettåriga eller fleråriga, med harvest-sektion (skörd & användning)

Följ denna prompt exakt för att säkerställa att varje post håller samma kvalitet och struktur som befintliga poster (morot, tomat, hallon, basilika).

---

## Steg 1: Samla in information

Innan du skriver koden, researcha grödan grundligt. Svara på ALLA dessa frågor:

### Grunddata
- Vad heter grödan? (svenskt namn, emoji)
- Vilken växtfamilj tillhör den? (latinskt namn primärt, svenskt sekundärt – det latinska är det vedertagna bland odlare och i frökataloger)
- Svårighetsgrad: Enkel / Medel / Avancerad? Och VARFÖR – vad gör den enkel/svår?
- I vilka odlingszoner (1–8) kan den odlas utomhus? Behövs växthus i vissa zoner?
- Hur många dagar från sådd/plantering till skörd?
- Plantavstånd, radavstånd, sådjup?
- Idealt pH-värde (min, max, ideal)?

### Trivs bäst (optimala förhållanden)
- **Sol**: Full sol / Sol–halvskugga / Halvskugga / Skuggtålig? Hur många timmar sol minimum? Vad händer om den får för lite sol?
- **Temperatur**: Min/max temperatur i °C, idealtemperatur, vad händer vid extremer?
- **Vind**: Tålig / Skyddat läge? Behövs stöd?

### Vattning (VIKTIGT – eget avsnitt!)
- Övergripande behov: Låg / Medel / Hög
- Sammanfattning: 1–2 meningar om grödans vattenkaraktär
- Per tillväxtfas (3–4 faser): { phase, need: "Låg/Medel/Hög", tip: "Konkret råd" }
- Vanliga vattenmisstag: 3–4 specifika saker folk gör fel
- Bästa tipset: Ett gyllene tips

### Jord & förhållanden
- Vilken typ av jord vill grödan ha? (1–2 meningar, tydlig och konkret)
- 3 praktiska jordtips

### Tidslinje (VIKTIGT: zonberoende)
- Skapa minst 3 tidslinjer: en för zon 1 (söder), en för zon 4 (mellansverige), en för zon 6 (norrland)
- Varje tidslinje ska ha 4–6 faser med: fasnamn, månad(er), passande emoji-ikon
- Tänk på att allt skjuts framåt i högre zoner

### Näringskurva (N-P-K)
- Skapa datapunkter per månad (apr–sep eller mar–sep beroende på gröda)
- Varje punkt: { month, N (0–100), P (0–100), K (0–100), label }
- N = kväve (bladtillväxt), P = fosfor (rötter/frukt), K = kalium (mognad/motståndskraft)
- Kurvorna ska spegla grödans FAKTISKA näringsbehov per tillväxtfas
- Exempel: bladgrönsaker har högt N hela säsongen, rotgrönsaker skiftar från N till P/K

### Näringstips
- 3–4 konkreta gödslingstips kopplade till tillväxtfaser
- Format: { timing: "Vid sådd", tip: "Konkret råd..." }
- Nämn specifika gödseltyper (kompost, alggödsel, benmjöl, vedaska etc.)

### Companion planting
- 3–4 bra grannar med emoji och FÖRKLARING varför (mekanism, inte bara "de trivs ihop")
- 2–3 dåliga grannar med emoji och FÖRKLARING varför

### Växtföljd
- Vilka grödor ska man UNDVIKA att odla på samma plats? Varför? Hur många år bör man vänta?
- Vilka grödor är bra FÖREGÅNGARE? Varför?
- Vilka grödor är bra EFTERFÖLJARE? Varför?

### Sortrekommendationer
- 3-5 sorter som fungerar i Sverige
- Varje sort: { name, zones: [array av zonnummer], note: "Kort, personlig beskrivning" }
- Inkludera minst en sort för norra Sverige om möjligt
- **Prioritera OP-sorter och kulturarvssorter** - lyft dessa först
- F1-hybrider bara om de ger verkligt mervärde (sjukdomsresistens, härdighet) - markera tydligt med "F1" i namn och notera i `note`
- Använd svenska fröföretag som källa (Runåbergs, NordFrö, Impecta, Lindbloms, Eco Grow)

### Vanliga problem
- 2–4 vanliga skadedjur/sjukdomar/odlingsproblem
- Format: { name, symptom: "Vad ser man?", fix: "Konkret åtgärd, gärna ekologisk" }

### Bra att veta (VIKTIGT – detta gör appen unik!)
- 3–6 insikter som erfarna odlare vet men nybörjare inte
- Varje punkt: { icon: "emoji", title: "Kort rubrik", text: "Förklaring 1-2 meningar", severity: "warning" eller "tip" }
- "warning" = saker som kan gå FEL (gul bakgrund)
- "tip" = saker som gör det BÄTTRE (grön bakgrund)
- Tänk: Vad önskar du att du visste innan du odlade denna gröda första gången?
- Inkludera varningar om spridning om relevant (typ jordärtskocka, pepparrot, mynta)

### Sådd
- method: "direct" (direktsådd), "indoor" (förodling) eller "both"
- Varför denna metod? (1–2 meningar)
- 5–7 numrerade steg-för-steg
- 2–3 praktiska tips
- Om förodling: hur många veckor före utplantering?

### Frötagning
- Svårighetsgrad: Enkel / Medel / Avancerad
- Typ: Självpollinerare / Korspollinerare / Vindpollinerare
- Tvåårig? (true/false)
- Beskrivning (1–2 meningar)
- 5–8 steg-för-steg
- Isoleringskrav (korspollinering)
- Lagringstid för frö
- Viktigt tips (t.ex. om F1-hybrider)

### Lagring (VIKTIGT – hela resan från skörd till tallrik!)
- Övergripande hållbarhet (shelfLife)
- 3–5 lagringsmetoder, varje med:
  - method: Namn på metoden
  - icon: Passande emoji
  - duration: Hur länge håller det
  - description: 1-2 meningar med konkret hur man gör
  - best: true/false (markera den bästa/vanligaste metoden)
- Tänk på: Kan grödan lagras i marken? (som morot, palsternacka, jordärtskocka)
- Tänk på: Vanliga misstag (som att lägga tomater i kylen)
- 3–5 lagringstips

### Skördekalkylator
- Ungefärlig min/max skörd per kvadratmeter i kg (eller styck för t.ex. squash)

---

## Steg 2: Formatera som JavaScript-objekt

Använd exakt denna struktur. ALLA fält är obligatoriska.

```javascript
groda_id: {
    name: "Svenskt namn",
    emoji: "🥬",
    family: "Svenskt familjenamn",
    familyLatin: "Latinskt familjenamn",
    difficulty: "Enkel", // "Enkel", "Medel", "Avancerad"
    difficultyWhy: "Kort förklaring varför denna svårighetsgrad.",
    zones: {
      outdoor: [1, 2, 3, 4, 5],      // Vilka zoner utomhus, null om ej möjligt
      indoor: null,                     // null eller array av zoner
      greenhouse: [1, 2, 3, 4, 5, 6]  // null eller array av zoner
    },
    days: "XX–XX",                      // Dagar till skörd (sträng)
    spacing: "XX cm",
    rowSpacing: "XX cm",
    depth: "X cm",
    ph: { min: X.X, max: X.X, ideal: X.X },
    optimalConditions: {
      sun: { level: "Full sol", icon: "☀️", detail: "Beskrivning inkl. timmar sol och vad som händer i skugga." },
      temperature: { min: X, max: X, ideal: "XX–XX°C", detail: "Beskrivning av temperaturkrav och extremer." },
      wind: { level: "Tålig", detail: "Vindkrav och tips." },         // "Tålig" eller "Skyddat"
    },
    watering: {
      need: "Medel",               // "Låg", "Medel", "Medel–Hög", "Hög"
      icon: "💧💧",               // 💧 = Låg, 💧💧 = Medel, 💧💧💧 = Hög
      summary: "Sammanfattning av vattenkaraktär. 1–2 meningar.",
      phases: [
        { phase: "Fasnamn", need: "Medel", tip: "Konkret vattningstips." },
        // ... 3-4 faser
      ],
      mistakes: [
        "Vanligt misstag 1",
        // ... 3-4 misstag
      ],
      tip: "Det bästa enskilda vattentipset för denna gröda.",
    },
    soil: "Beskrivning av jordkrav. Max 2 meningar.",
    soilTips: [
      "Tip 1",
      "Tip 2",
      "Tip 3",
    ],
    timeline: {
      1: [ // Zon 1 (södra Sverige)
        { phase: "Fasnamn", months: "Mån", icon: "🌱" },
        // ... 4-6 faser
      ],
      4: [ // Zon 4 (mellansverige)
        // ...
      ],
      6: [ // Zon 6 (norra Sverige)
        // ...
      ],
    },
    nutritionData: [
      { month: "Mån", N: XX, P: XX, K: XX, label: "Fas" },
      // ... en per månad under odlingssäsongen
    ],
    nutritionTips: [
      { timing: "När", tip: "Konkret gödseltips" },
      // ... 3-4 stycken
    ],
    companions: {
      good: [
        { name: "Grödnamn", emoji: "🥬", why: "Förklaring av MEKANISMEN" },
        // ... 3-4 stycken
      ],
      bad: [
        { name: "Grödnamn", emoji: "🥬", why: "Förklaring av VARFÖR" },
        // ... 2-3 stycken
      ],
    },
    rotation: {
      avoid: ["Gröda1", "Gröda2"],
      avoidWhy: "Förklaring + hur många år man bör vänta.",
      goodBefore: ["Gröda1", "Gröda2"],
      goodBeforeWhy: "Förklaring av varför dessa är bra föregångare.",
      goodAfter: ["Gröda1", "Gröda2"],
      goodAfterWhy: "Förklaring av varför dessa är bra efterföljare.",
    },
    varieties: [
      { name: "Sortnamn", zones: [1,2,3,4,5], note: "Kort, personlig beskrivning." },
      // ... 3-5 sorter
    ],
    problems: [
      { name: "Problemnamn", symptom: "Vad man ser", fix: "Konkret åtgärd" },
      // ... 2-4 stycken
    ],
    goodToKnow: [
      { icon: "⚠️", title: "Kort rubrik", text: "Förklaring 1–2 meningar.", severity: "warning" },
      { icon: "💡", title: "Kort rubrik", text: "Förklaring 1–2 meningar.", severity: "tip" },
      // ... 3-6 stycken, blandning av warning och tip
    ],
    sowing: {
      method: "direct",           // "direct", "indoor", "both"
      label: "Direktsådd",        // "Direktsådd", "Förodling inomhus", "Direktsådd eller förodling"
      description: "Varför denna metod. 1–2 meningar.",
      steps: [
        "Steg 1...",
        // ... 5-7 steg
      ],
      tips: [
        "Tips 1...",
        // ... 2-3 tips
      ],
      indoorWeeks: null,           // null eller "X–X veckor"
    },
    seedSaving: {
      difficulty: "Enkel",         // "Enkel", "Medel", "Avancerad"
      type: "Självpollinerare",    // "Självpollinerare", "Korspollinerare", "Vindpollinerare"
      biennial: false,             // true om tvåårig
      description: "Kort beskrivning av frötagningsprocessen. 1–2 meningar.",
      steps: [
        "Steg 1...",
        // ... 5-8 steg
      ],
      isolation: "Isoleringskrav. 1 mening.",
      storageYears: "X–X år",
      tip: "Viktigt tips, t.ex. om F1-hybrider.",
    },
    storage: {
      shelfLife: "X–X månader",
      methods: [
        { method: "Metodnamn", icon: "📦", duration: "Hur länge", description: "Hur man gör. 1–2 meningar.", best: true },
        // ... 3-5 metoder, exakt EN med best: true
      ],
      tips: [
        "Lagringstips 1...",
        // ... 3-5 tips
      ],
    },
    harvestCalc: { minPerSqm: X.X, maxPerSqm: X.X, unit: "kg" },
  },
```

---

## Steg 3: Lägg till i CROP_LIST

Lägg till en rad i `CROP_LIST`-arrayen under rätt kategori-kommentar:

```javascript
{ id: "groda_id", name: "Namn", emoji: "🥬", family: "Svenskt familjenamn", familyLatin: "Latinskt familjenamn", difficulty: "Enkel", category: "grönsaker" },
```

Kategorin ska vara `"grönsaker"`, `"bär"` eller `"kryddor"`. Ta bort `locked: true` om den fanns sedan innan.

### Kategori-specifika fält

**Bär** (`category: "bär"`): Lägg till `perennial: true`, `lifespan`, `pruning` och `propagation` istället för `sowing` och `seedSaving`.

**Kryddor** (`category: "kryddor"`): Lägg till `harvest`-objekt med `label`, `method`, `description` och `uses`-array utöver vanliga fält.

---

## Steg 4: Kvalitetskontroll

Innan du är klar, verifiera:

- [ ] **Alla fält finns** – inget fält saknas eller är tomt (inkl. optimalConditions och watering)
- [ ] **Zoner stämmer** – odlingszonerna är realistiska för Sverige
- [ ] **Tidslinjer skiljer sig** – zon 1, 4 och 6 har OLIKA datum (inte samma)
- [ ] **Näringskurvorna är logiska** – N/P/K speglar grödans faktiska behov per fas
- [ ] **Companion planting har förklaringar** – inte bara "de trivs ihop"
- [ ] **Växtföljd nämner familjen** – och förklarar varför
- [ ] **Sorter har zondata** – varje sort har en array av zonnummer
- [ ] **goodToKnow har blandning** – minst 1 warning + minst 1 tip
- [ ] **Lagring har best: true** – exakt en metod markerad som rekommenderad
- [ ] **Sowing method matchar label** – "direct" → "Direktsådd", "indoor" → "Förodling inomhus"
- [ ] **Sorter prioriterar OP** - öppenpollinerade och kulturarvssorter listas före eventuella F1
- [ ] **F1 tydligt markerat** - alla F1-hybrider har "F1" i namn och förklaring i note
- [ ] **Frötagning varnar om F1** - om hybrider finns bland sorterna
- [ ] **Faktacheck** - verifiera kritiska datapunkter mot svenska kallor (se `docs/guides/kallor.md`)
- [ ] **Sorter finns i Sverige** - alla sortrekommendationer ska finnas hos svenska froforetag
- [ ] **Problem ar relevanta** - bara skadegorare som faktiskt ar etablerade i Sverige
- [ ] **Texterna är på svenska** – naturlig, varm, tydlig svenska
- [ ] **Tonen är personlig** – som en erfaren odlarvän som delar med sig, inte en lärobok
- [ ] **Trivs bäst har alla 3 fält** – sun, temperature, wind (alla med level, icon/min/max, detail)
- [ ] **Vattning har faser** – minst 3 faser med need + tip, plus minst 3 mistakes
- [ ] **Korsreferenser stämmer** – om Gröda A nämner Gröda B som dålig granne, gäller det åt båda håll

---

## Steg 5: Tonguide (KRITISKT – läs noga!)

Tonen är det som skiljer Grödguiden från en tråkig faktadatabas. Varje text ska låta som att en erfaren odlarkompis berättar – varm, personlig, med humor och igenkänning.

### Regler:

1. **Personifiera plantan.** Ge henne en personlighet. "Basilikan älskar fukt men HATAR att stå blöt – hon är lite bortskämd." Inte: "Basilika kräver jämn fukt."

2. **Beskriv plantans reaktion, inte bara fakta.** "Morötter blir faktiskt sötare efter frost!" Inte: "Frost påverkar sockerhalten positivt."

3. **Dramatisera viktiga moment.** "Kritisk period! Vattenstress nu ger att blommorna faller av." Inte: "Vattna regelbundet under blomning."

4. **Humor och igenkänning.** Lägg in "hard way"-lärdomar. "...istället för 40 kg morötter samtidigt i september." Saker som erfarna odlare skrattar igenkännande åt.

5. **Känsla istället för procent.** "Blanda ungefär 7 delar jord med 3 delar perlit – hon måste kunna andas." Inte: "Använd 70% jord + 30% perlit."

6. **Aldrig engelska ord.** "Ett perfekt par!" Inte: "Win-win." "Stillastående fukt" Inte: "Constantfukt."

7. **Aldrig marknadsföringsord.** "Perfekt i kruka på balkongen" Inte: "Superenkelt i kruka."

8. **Varna ärligt, fira det som är kul.** Var inte rädd för att säga "Tyvärr ingen bot" eller "Glöm det."

### Bra exempel:
- ✅ "Morötter blir faktiskt sötare efter en lätt frost!"
- ✅ "Var brutal – 3–5 cm avstånd."
- ✅ "Tomater ska ALDRIG i kylen – kylan dödar smaken och gör dem mjöliga."
- ✅ "Hon gillar inte att ha blöta fötter hela tiden."
- ✅ "Busken vaknar och börjar skjuta nya skott."
- ✅ "De pratar helt enkelt olika språk."
- ✅ "Hallonrötter skickar ut utlöpare och nya plantor dyker upp överallt."

### Dåliga exempel:
- ❌ "Morötterna bör optimalt sett skördas efter en initial frostperiod."
- ❌ "Rekommenderat plantavstånd uppgår till 3–5 cm."
- ❌ "Förvaring i kylskåp rekommenderas ej."
- ❌ "Win-win." (engelska)
- ❌ "Superenkelt" (marknadsföring)
- ❌ "Basilika kräver jämn fukt." (teknisk, ingen personlighet)
- ❌ "Använd 70% planteringsjord + 30% perlit." (procent istället för känsla)

### Självtest efter varje profil:
Läs igenom alla texter högt. Låter det som en faktabok? Skriv om. Låter det som att en kompis berättar vid ett trädgårdsbord? Perfekt.

---

## Exempelgrödor att lägga till (i prioritetsordning)

1. **Potatis** – nattskatta, direktplantering med läggsättspotatis, kupning, lagring i mörker
2. **Ärtor** – baljväxt, kvävefixerare, direktsådd, stöd/spaljé
3. **Squash/zucchini** – gurkväxt, förodling, massiv skörd, "the zucchini problem"
4. **Sallat** – korgblommig, snabb, successionsådd, skuggtålig
5. **Lök** – lökväxt, sättlök vs frösådd, tork/lagring
6. **Grönkål** – korsblommig, tålig, vinterodling, "bättre efter frost"
7. **Rädisa** – korsblommig, snabbast av alla, nybörjarfavorit
8. **Bondböna** – baljväxt, kvävefixerare, tidig sådd, bladlöss
9. **Jordärtskocka** – korgblommig, VIKTIG varning om spridning!
10. **Gurka** – gurkväxt, växthus vs utomhus, värmekrävande

---

## Att tänka på vid varje ny gröda

- **Korskolla companion planting** – om Gröda A säger att Gröda B är bra granne, se till att Gröda B också nämner Gröda A
- **Korskolla växtföljd** – om Gröda A säger "bra efter baljväxter", bör baljväxterna nämna Gröda A som bra efterföljare
- **Uppdatera CROP_LIST** – ta bort `locked: true` från grödan
- **Testa i appen** – klicka igenom alla sektioner och verifiera att inget ser trasigt ut
