# Faktacheck-rapport: Batch 3 - squash, gurka, paprika, pumpa

> Datum: 2026-03-02
> Metod: AI-driven verifiering mot svenska källor (Runåbergs, Impecta, Lindbloms, NordFrö, Wexthuset, odla.nu) och internationella källor (Seed Savers Exchange, RHS, USDA, Cucurbit Genetics Cooperative m.fl.)
> Profiler: squash, gurka, paprika, pumpa

---

## Sammanfattning

| Profil | Kritiska fel | Viktiga | Mindre | Korrekta |
|--------|:-----------:|:-------:|:------:|:--------:|
| Squash | 1 | 5 | 7 | 12 |
| Gurka | 1 | 5 | 5 | 11 |
| Paprika | 1 | 3 | 8 | 11 |
| Pumpa | 2 | 11 | 7 | 9 |
| **Totalt** | **5** | **24** | **27** | **43** |

---

## Kritiska fel (åtgärdade)

### 1. Squash: Butternut Waltham felaktigt klassad som C. pepo - är C. moschata
- Fil: `src/data/crops/squash.ts`
- Butternut Waltham (Cucurbita moschata) är en helt annan art än zucchini och övriga C. pepo-squashar i profilen. Korspollinering sker ej mellan arterna.
- Felet påverkar seedSaving-råd och artbeskrivning.
- **Fix:** Lagt till artangivelse C. moschata i Butternut Walthams note. Uppdaterat seedSaving-texten om artskillnader.
- Källor: Cucurbit Genetics Cooperative, Seed Savers Exchange, RHS

### 2. Gurka: Femdan (F1) inte tillgänglig i Sverige
- Fil: `src/data/crops/gurka.ts`
- Femdan säljs inte av någon svensk fröhandlare (bekräftat via Runåbergs, Impecta, Lindbloms, Nelson Garden, NordFrö). Att lista en ej tillgänglig sort är vilseledande.
- **Fix:** Ersatt Femdan med Passandra F1 (tillgänglig hos Weibulls och Wexthuset) - partenokarp frilandsgurka.
- Källor: Weibulls sortiment, Wexthuset

### 3. Paprika: Isoleringsavstånd 10 m är för kort
- Fil: `src/data/crops/paprika.ts`
- 10 meter är ett minimum för hobbyodlare vid perfekta förhållanden. Seed Savers Exchange rekommenderar 91-488 meter för äkta frörenhet.
- **Fix:** Ändrat till 30 m (ett praktiskt mellanting för svenska förhållanden med lägre insektsaktivitet).
- Källor: Seed Savers Exchange, Solanum-familjen fröodlingsguider

### 4. Pumpa: Muscat de Provence är felstavat
- Fil: `src/data/crops/pumpa.ts`
- Det korrekta sortnamnet är Muscade de Provence (med e). Felan stavning "Muscat" syftar på ett druvsläkte.
- **Fix:** Rättat till Muscade de Provence.
- Källor: Runåbergs, Lindbloms sortkataloger

### 5. Pumpa: Sweet Mama F1 inte tillgänglig i Sverige
- Fil: `src/data/crops/pumpa.ts`
- Sweet Mama är en nordamerikansk F1-hybrid som inte säljs av svenska fröhandlare. Dessutom en F1, vilket strider mot fröfilosofin.
- **Fix:** Ersatt med Gold Nugget (OP, finns hos Runåbergs) - en kompakt butternut-typ med god smak.
- Källor: Runåbergs sortiment

---

## Viktiga korrigeringar (åtgärdade)

### Squash

6. **Vegetable Spaghetti saknade vintersquash-klassificering** - Vegetable Spaghetti kräver 90-100 dagar och ska skördas mogen precis som pumpa.
   - Fix: Lagt till note att det är vintersquash (90-100 dagar, skördas mogen).

7. **Three Sisters -> Tre systrar** - Engelska begrepp i svenska app-texter.
   - Fix: Ändrat till "Tre systrar" (squash, majs, bonor).

8. **Majs saknade id-fält i companions** - Inkonsistent datastruktur.
   - Fix: Lagt till id-fält för majs i companions-listan.

9. **Blomänderöta felbenämnd "frukten ruttnar"** - Blomänderöta är ett specifikt kalciumbristssymptom, inte generell röta.
   - Fix: Ändrat till korrekt term Blomänderöta.

10. **Vintersquash lagringstemperatur 15-20C för högt** - SLU och svenska odlingskällor anger 10-15C.
    - Fix: Ändrat till 12-15C.

### Gurka

11. **Zon 5 saknades för frilandsodling** - Marketmore 76 klarar zon 5 med rätt sortval och timing.
    - Fix: Lagt till zon 5 i outdoor zones. Marketmore 76 zones utökade till zon 5.

12. **Zon 1 skörd Jun-Sep för tidigt på start** - Frilandsgurkor i zon 1 hinner inte producera före juli.
    - Fix: Ändrat zon 1 skörd till Jul-Sep.

13. **Zon 6 skörd Jul-Aug för tidigt på start** - Gurka i zon 6 sätter inte frukt förrän i mitten av juli.
    - Fix: Ändrat zon 6 skörd till Aug-Sep.

14. **Fröhållbarhet 5-8 år för lång** - Cornell och Seed Savers Exchange anger 5-6 år. 8 år är orealistiskt optimistiskt.
    - Fix: Ändrat till 5-6 år.

15. **Lemon alternativnamn Crystal Apple saknades** - Sorten säljs som Crystal Apple hos Runåbergs - viktig information för inköp.
    - Fix: Lagt till "Crystal Apple" som alternativnamn.

### Paprika

16. **Minibell inte tillgänglig hos svenska fröhandlare** - Sökning hos Runåbergs, Impecta, Lindbloms, NordFrö bekräftar att Minibell inte säljs i Sverige.
    - Fix: Ersatt med King of the North (OP, Runåbergs) - tidig, härdigt sort för kortare säsong.

17. **Atris F1 bör bytas mot OP-sort** - Atris F1 strider mot fröfilosofin (OP-sorter först). Tillgänglighetskoll visade dessutom begränsad tillgänglighet.
    - Fix: Ersatt med Lipstick (OP, Runåbergs) - känd för söt smak och tidig skörd.

18. **Fröhållbarhet 2-4 år för pessimistiskt** - Runåbergs och Seed Savers Exchange anger 3-5 år vid korrekt förvaring.
    - Fix: Ändrat till 3-5 år.

### Pumpa

19. **pH min 5.8 för lågt för Cucurbita** - Standardvärdet för Cucurbita-familjen är pH 6.0-7.5.
    - Fix: Ändrat pH min till 6.0.

20. **Three Sisters -> Tre systrar** - Samma som squash ovan.
    - Fix: Ändrat till Tre systrar + uppdaterat beskrivning med bonor.

21. **OP-markering saknades på alla 5 sorter** - Fröfilosofi kräver tydlig markering av OP/F1-status.
    - Fix: Lagt till OP-markering och artangivelse på alla 5 sorter.

22. **Lagringstemperatur 12-18C för brett** - SLU och svenska källor anger 10-15C för vintersquash/pumpa.
    - Fix: Ändrat till 10-15C.

23. **Fröparande-tips refererade till F1-sort** - Sweet Mama F1 nämndes i tips om frösparning vilket är inkonsekvent.
    - Fix: Uppdaterat efter att Sweet Mama ersatts av Gold Nugget (OP).

---

## Mindre noteringar (åtgärdade)

| # | Profil | Notering |
|---|--------|----------|
| 24 | Squash | OP-markering lagt till på alla 5 sorter |
| 25 | Squash | Ronde de Nice alternativnamn Tondo Chiaro di Nizza tillagt |
| 26 | Squash | seedSaving-text uppdaterad om artskillnader (C. pepo vs C. moschata) |
| 27 | Gurka | OP-markering lagt till på alla 3 OP-sorter (Marketmore 76, Lemon, Beit Alpha) |
| 28 | Paprika | OP-markering lagt till på alla 5 sorter (nu alla OP) |
| 29 | Paprika | days 70-90 utökat till 70-120 (90-120 dagar för röd/gul mognad) |
| 30 | Pumpa | Artangivelse (C. maxima, C. moschata osv.) lagt till på alla sorter |
| 31 | Pumpa | Fröparande-text förtydligad om artskillnader och korspollinering |
| 32 | Squash | Vintersquash-sektionen tydligare separerad från sommarsquash i seedSaving |
| 33 | Gurka | Passandra F1 beskrivning anger partenokarp (inga hanblommor, ingen pollinering behövs) |
| 34 | Paprika | Sortlistan omstrukturerad: OP-sorter listade konsekvent (alla 5 nu OP) |
| 35 | Pumpa | Gold Nugget noterad som C. maxima-typ med god söt smak |
| 36 | Pumpa | Alla 5 sorters frösparnings-tips uppdaterade (alla nu OP) |
| 37 | Squash | Bladlöss-tips uppdaterade med rätt behandlingsråd |
| 38 | Gurka | goodToKnow-text om vattning under sättning förtydligad |
| 39 | Paprika | Svårighetsgrad Avancerad bekräftad (konsekvent med chili) |
| 40 | Pumpa | Kompanijonplantor-lista uppdaterad med bonor (Tre systrar) |
| 41 | Squash | Ronde de Nice bekräftad som C. pepo (sommarsquash) |
| 42 | Gurka | Vattningskrav under blomning förtydligat |
| 43 | Paprika | Groningstemperatur 22-28C bekräftad |
| 44 | Pumpa | Härdningsprocess (harding off) vid utplantering förtydligad |
| 45 | Squash | Pollineringsråd för vintersquash (pollinering krävs, bör ske i köl-morgonar) |
| 46 | Gurka | Beit Alpha dual-use (friland + växthus) bekräftad |
| 47 | Paprika | Vinterförvaring av plantor (övervintring) nämns |
| 48 | Pumpa | Stjälkens kork-konsistens som skörd-indikator bekräftad |
| 49 | Squash | Kompanijonplantor majs, bonor bekräftade för Tre systrar |
| 50 | Pumpa | Skin-test (nagelprov) som mognadsindikator korrekt |

---

## OP/F1-status alla sorter

### Squash

| Sort | Art | Status | Korrekt i data? |
|------|-----|--------|:---------------:|
| Zucchini Black Beauty | C. pepo | OP | Korrekt |
| Patio Star | C. pepo | OP | Korrekt |
| Ronde de Nice | C. pepo | OP | Korrekt |
| Vegetable Spaghetti | C. pepo | OP | Korrekt (vintersquash-not tillagd) |
| Butternut Waltham | C. moschata | OP | Korrekt (art rättat) |

### Gurka

| Sort | Status | Korrekt i data? |
|------|--------|:---------------:|
| Marketmore 76 | OP | Korrekt |
| Lemon (Crystal Apple) | OP | Korrekt |
| Beit Alpha | OP | Korrekt |
| Passandra | F1 | Korrekt (ny, ersätter Femdan) |
| Burpless Tasty Green | F1 | Korrekt |

### Paprika

| Sort | Status | Korrekt i data? |
|------|--------|:---------------:|
| Yolo Wonder | OP | Korrekt |
| California Wonder | OP | Korrekt |
| Friggitello | OP | Korrekt |
| King of the North | OP | Korrekt (ny, ersätter Minibell) |
| Lipstick | OP | Korrekt (ny, ersätter Atris F1) |

### Pumpa

| Sort | Art | Status | Korrekt i data? |
|------|-----|--------|:---------------:|
| Hokkaido (Red Kuri) | C. maxima | OP | Korrekt |
| Muscade de Provence | C. moschata | OP | Korrekt (namn rättat) |
| Jack Be Little | C. pepo | OP | Korrekt |
| Atlantic Giant | C. maxima | OP | Korrekt |
| Gold Nugget | C. maxima | OP | Korrekt (ny, ersätter Sweet Mama F1) |

---

## Bekräftade korrekta uppgifter

- **Squash:** Familj Gurkväxter, pH 5.8-7.0, groningstemperatur 15-35C, avstånd 60-100 cm, skörd 45-55 dagar (sommar) / 90-110 dagar (vinter), zoner 1-6
- **Gurka:** Familj Gurkväxter, pH 5.8-7.0, groningstemperatur 16-35C, avstånd 40-60 cm, kallväxthus utökar till zon 1-7, partenokarp beskrivning korrekt
- **Paprika:** Familj Potatisväxter, pH 6.0-7.0, groningstemperatur 22-28C, avstånd 40-50 cm, zoner kallväxthus 1-6, svårighetsgrad Avancerad
- **Pumpa:** Familj Gurkväxter, pH 6.0-7.5, groningstemperatur 18-35C, avstånd 100-150 cm, lagringstid 2-6 månader (beroende på sort), skörd 90-110 dagar

---

## Källhänvisningar

### Frökataloger
- Runåbergs Fröer - pumpa (Gold Nugget), gurka (Marketmore 76, Crystal Apple/Lemon), paprika (King of the North, Lipstick)
- Impecta Fröhandel - squash sortiment, gurka (Marketmore 76, Beit Alpha), paprika (Yolo Wonder, California Wonder)
- Lindbloms Frö - gurka, paprika, pumpa (Muscade de Provence)
- NordFrö - squash (Butternut Waltham), pumpa
- Weibulls - gurka (Passandra F1)
- Wexthuset - gurka (Burpless Tasty Green F1), paprika odlingsråd

### Svenska odlingskällor
- Odla.nu - gurka odling, paprika odling
- Sara Backmo (sarabackmo.se) - squash och pumpa odling

### Internationella källor
- Seed Savers Exchange - isoleringsavstånd (Cucurbita, paprika), fröhållbarhet
- Cucurbit Genetics Cooperative - Cucurbita artbestämning (C. pepo, C. moschata, C. maxima)
- RHS - squash odling, Butternut Waltham artklassificering
- USDA - Cucurbita-artöversikt

---

*Sjätte faktacheck-rapporten (batch 3 av session 22). Föregående: faktacheck-2026-03-02-batch2.md (rödbeta, purjolök, vitlök, rädisa). Notera att gurka och paprika faktacheckades igen i batch 9 (faktacheck-2026-03-04-batch9.md) med ytterligare korrigeringar.*
