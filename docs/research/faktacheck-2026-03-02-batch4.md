# Faktacheck-rapport: Batch 4 - artor, bondbona, sparris, sockermajs

> Datum: 2026-03-02
> Metod: AI-driven verifiering mot svenska kallor (Runabergs, Impecta, Nelson Garden, Lindbloms, NordFro, Wexthuset, odla.nu, Sara Backmo) och internationella kallor (Seed Savers Exchange, MSU Extension, UMN Extension, Johnny's Seeds, University of Nebraska m.fl.)
> Profiler: artor, bondbona, sparris, sockermajs

---

## Sammanfattning

| Profil | Kritiska fel | Viktiga | Mindre | Korrekta |
|--------|:-----------:|:-------:|:------:|:--------:|
| Artor | 0 | 3 | 2 | 14 |
| Bondbona | 2 | 4 | 3 | 10 |
| Sparris | 1 | 2 | 2 | 14 |
| Sockermajs | 3 | 3 | 3 | 10 |
| **Totalt** | **6** | **12** | **10** | **48** |

---

## Kritiska fel (atgardade)

### 1. Sparris: Felaktig pollineringstyp - "vindpollinerare" ar insektspollinerare
- Fil: `src/data/crops/sparris.ts`
- Sparris pollineras av insekter (bin, humlor), INTE av vind. USDA Pollination Handbook bekraftar: "Wind is not a factor in asparagus pollination."
- seedSaving.type angav "Korspollinerare" (ok) men isolation-texten sa "vindpollineras" (FEL).
- **Fix:** Andrat type till "Insektspollinerare", isolation-text uppdaterad till "pollineras av insekter".
- Kallor: USDA Pollination Handbook, Illinois Wildflowers

### 2. Sockermajs: "Early Extra Sweet F1" inte tillganglig i Sverige
- Fil: `src/data/crops/sockermajs.ts`
- Finns hos Thompson & Morgan (UK) men inte hos nagon svensk frohandlare.
- **Fix:** Ersatt med "Ashworth" (OP, Runabergs/NordFro/Lindbloms) - tidig, gror bra i sval jord.

### 3. Sockermajs: "Sundance F1" inte tillganglig i Sverige
- Fil: `src/data/crops/sockermajs.ts`
- Finns internationellt men inte i svenskt sortiment.
- **Fix:** Ersatt med "Damaun" (OP, Runabergs/NordFro/Lindbloms) - ansedd som sotaste OP-sorten.

### 4. Sockermajs: "Minipop" saknade F1-markering
- Fil: `src/data/crops/sockermajs.ts`
- Wexthuset saljer den som "Minipop F1". Frofilosofi kraver att F1 markeras tydligt.
- **Fix:** Andrat till "Minipop F1" med F1 i note.

### 5. Bondbona: "Over 25°C" - encoding-fel (saknar o)
- Fil: `src/data/crops/bondbona.ts:18`
- "Over" ar engelska, ska vara "Over" (med o).
- **Fix:** Andrat till "Over 25°C".

### 6. Bondbona: "YEARS" - engelska i svensk text
- Fil: `src/data/crops/bondbona.ts:163`
- Lagringstext inneholl engelska ordet "YEARS".
- **Fix:** Andrat till "aratal".

---

## Viktiga korrigeringar (atgardade)

### Artor
7. **Norli ar sockerart, inte margart** - Impecta och NordFro klassar den som "sockerart" (mange tout). Profilen saknade denna info.
   - Fix: Lagt till "Sockerart (mange tout)" i note.

8. **Delikett ar brytsockerart, inte sockerart** - Impecta och Wexthuset klassar den som "brytsockerart" (snap pea). Sockerart ats platt, brytsockerart ats med knubbig balja.
   - Fix: Andrat namn till "Brytsockerart Delikett" med forklaring i note.

9. **Isoleringsavstand 1 m for kort** - Seed Savers Exchange rekommenderar 3-6 m for artor trots sjalvpollinering (humlor kan korsa).
   - Fix: Andrat till "3-5 m".

### Bondbona
10. **Groningstemperatur 2°C for lagt** - Svenska kallor (Runabergs, Lindbloms) anger 4-5°C som minimum. 2°C ar tekniskt mojligt men opraktiskt och leder till rotna.
    - Fix: Andrat min till 4°C, detalj-text till "4-5°C".

11. **Radavstand 40-50 cm for smalt** - Lindbloms rekommenderar 50-70 cm.
    - Fix: Andrat till 45-60 cm.

12. **Hangdown Grunkernig** - saknade tyskt omljud (u). Korrekt stavning: Grunkernig.
    - Fix: Andrat till "Hangdown Grunkernig".

13. **Aguadulce Supersimonia** - namn som svenska frohandlare inte anvander. Impecta saljer som "Superaguadulce".
    - Fix: Andrat till "Superaguadulce".

### Sparris
14. **Spacing 40-50 cm for brett** - Svenska kallor (Klostra, Blomsterlandet) sager 25-40 cm.
    - Fix: Andrat till 30-45 cm.

15. **Millennium zon 1-6 for generost** - Tradgardstrollet rekommenderar "sodra odlingszoner (1-4)". Kanadas ursprung ger hardighet men 1-5 ar rimligare.
    - Fix: Andrat till zon 1-5.

### Sockermajs
16. **Frohallbarhet 2-3 ar for optimistiskt** - High Mowing Seeds, Johnny's Seeds och Old Farmer's Almanac anger 1-2 ar. Majs har bland de kortaste frohallbarheterna.
    - Fix: Andrat till 1-2 ar.

17. **Spacing 30-40 cm for brett** - Svenska kallor sager 20-30 cm eller 25-35 cm.
    - Fix: Andrat till 25-35 cm.

18. **Radavstand 60-75 cm for smalt** - Svenska kallor sager 70-90 cm.
    - Fix: Andrat till 70-80 cm.

---

## Encoding-problem (atgardade)

| # | Fil | Problem | Fix |
|---|-----|---------|-----|
| E1 | sockermajs.ts:18,131,134 | `\u00B0C` (unicode escape) istallet for `°C` | Ersatt med bokstavlig `°C` |
| E2 | bondbona.ts:18 | "Over" istallet for "Over" | Rattat till "Over" |
| E3 | bondbona.ts:163 | "YEARS" (engelska) | Rattat till "aratal" |

---

## Mindre noteringar

| # | Profil | Notering |
|---|--------|----------|
| 19 | Artor | Alderman hojd "1,5 m" andrat till "1,5-2 m" - Runabergs anger 150-200 cm |
| 20 | Artor | Alderman markerad som kulturarvssort (1891) |
| 21 | Bondbona | Witkiem "12 veckor" andrat till "9-11 veckor" - Lindbloms anger 65 dagar |
| 22 | Bondbona | Karmazyn "roda bonor" andrat till "rosa bonor som morknar till rodbrunt" |
| 23 | Bondbona | Hangdown markerad som kulturarvssort |
| 24 | Sparris | Millennium markerad som F1-hanplanta (University of Guelph) |
| 25 | Sparris | Potatis companion-text mjukad - "bada kansliga for liknande jordburna sjukdomar" |
| 26 | Sockermajs | Sortlistan omstrukturerad: OP-sorter forst (Golden Bantam, Ashworth, Damaun) |
| 27 | Sockermajs | Golden Bantam markerad som kulturarvssort (1902) |
| 28 | Sockermajs | Isoleringsavstand andrat till 400-500 m |

---

## OP/F1-status alla sorter

| Sort | Profil | Status | Korrekt i data? |
|------|--------|--------|:---:|
| Kelvedon Wonder | Artor | OP | Korrekt |
| Norli | Artor | OP | Korrekt |
| Alderman | Artor | OP/heirloom (1891) | Korrekt |
| Brytsockerart Delikett | Artor | Troligen OP | Korrekt (ej explicit markerad) |
| Witkiem | Bondbona | OP | Korrekt |
| Hangdown Grunkernig | Bondbona | OP/heirloom | Korrekt |
| Karmazyn | Bondbona | OP | Korrekt |
| Superaguadulce | Bondbona | OP | Korrekt |
| Gijnlim | Sparris | F1-hanplanta | Korrekt (Limgroup, Nederlanderna) |
| Backlim | Sparris | F1-hanplanta | Korrekt (Limgroup, Nederlanderna) |
| Millennium | Sparris | F1-hanplanta | Korrekt (University of Guelph, Kanada) |
| Mary Washington | Sparris | OP/heirloom (1919) | Korrekt |
| Erasmus | Sparris | F1-hanplanta | Korrekt (Bejo Zaden, Nederlanderna) |
| Golden Bantam | Sockermajs | OP/heirloom (1902) | Korrekt (ny) |
| Ashworth | Sockermajs | OP | Korrekt (ny) |
| Damaun | Sockermajs | OP | Korrekt (ny) |
| Sweet Nugget F1 | Sockermajs | F1 | Korrekt (ny) |
| Minipop F1 | Sockermajs | F1 | Korrekt (rattat) |

---

## Kallor

### Frokataloger
- Runabergs Froer - artor (Kelvedon Wonder, Norli, Alderman), bondbona (Witkiem, Hangdown), majs (Ashworth, Damaun)
- Impecta - artor (Norli, Delikett), bondbona (Witkiem, Karmazyn, Superaguadulce), majs (Sweet Nugget F1, Gucio F1)
- Nelson Garden - artor (Alderman), majs (Sweet Nugget F1)
- Lindbloms - artor (Kelvedon Wonder), bondbona (Witkiem, Green Hangdown), majs (Earlibird F1, Damaun, Ashworth)
- NordFro - artor (Norli), majs (Golden Bantam, Ashworth, Damaun)
- Wexthuset - artor (Delikett), sparris (odlingsrad), majs (Minipop F1, Golden Bantam)

### Svenska odlingskallor
- Odla.nu - sparris (pH, spacing), majs (groningstemperatur)
- Sara Backmo (sarabackmo.se) - bondbona sadd, zon 7 odling
- Klostra - sparris (Gijnlim, Backlim, Millennium, Erasmus)
- Blomsterlandet - sparris (plantering, avstand)
- Tradgardstrollet - sparris sortguide, bondbona sortguide
- Leva Hallbart - majsodling

### Internationella kallor
- USDA Pollination Handbook - sparris insektspollinerare
- Illinois Wildflowers - sparris pollinering (bin, humlor)
- Seed Savers Exchange - isoleringsavstand (artor 3-6 m, majs 490 m)
- MSU Extension - isoleringsavstand tabell
- UMN Extension - artor odling, temperaturgrenser
- University of Nebraska - majs groningstemperatur
- Johnny's Seeds - frohallbarhet, Millennium F1
- High Mowing Seeds - froviabilitetstabell
- Limgroup/Vissers - Gijnlim, Backlim (F1-hanplantor)
- Bejo Zaden - Erasmus (F1-hanplanta)
- MDPI (2023) - utkorsning och isoleringsavstand i bondbona

---

*Tredje faktacheck-rapporten. Forsta: faktacheck-2026-03-01.md (tomat, morot, potatis, sallat, lok). Andra: faktacheck-2026-03-02.md (mangold, kalrabbi, palsternacka, brytbona). 31 av 43 profiler nu faktacheckade.*
