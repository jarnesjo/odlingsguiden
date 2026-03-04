# Faktacheck-rapport: Prioriterade profiler

> Datum: 2026-03-01
> Metod: AI-driven verifiering mot svenska källor (SLU, Jordbruksverket, Runåbergs, Impecta, Wexthuset, Nelson Garden m.fl.)
> Profiler: tomat, morot, potatis, sallat, lok

---

## Sammanfattning

| Profil | Kritiska fel | Viktiga | Mindre | Korrekta |
|--------|:-----------:|:-------:|:------:|:--------:|
| Tomat | 0 | 3 | 3 | 12 |
| Morot | 1 | 2 | 3 | 8 |
| Potatis | 2 | 3 | 3 | 8 |
| Sallat | 0 | 2 | 2 | 12 |
| Lok | 0 | 1 | 2 | 10 |
| **Totalt** | **3** | **11** | **13** | **50** |

---

## Kritiska fel

### 1. Morot: Purple Haze saknar F1-markering
- Fil: `src/data/crops/morot.ts:104`
- Purple Haze ar en bekraftad F1-hybrid (Impecta saljer den som "Sommarmorot F1 'Purple Haze'", Johnny's Seeds listar den som F1, AAS-vinnare)
- Profilen listar den utan F1-markering, bryter mot frofilosofi
- Kallor: Impecta, Johnny's Seeds, All-America Selections, Lindbloms

### 2. Potatis: Coloradobagge listad som vanligt problem
- Fil: `src/data/crops/potatis.ts:114`
- Coloradobaggen ar en karantanskadegorare i Sverige (Jordbruksverket EU 2019/2072)
- INTE etablerad i svenska tradgardar
- Att lista den som rutinproblem bredvid bladmogel och skorv ar vilseledande
- Companion-motiveringar (ringblomma, pepparrot) refererar ocksa till denna skadegorare
- Kallor: Jordbruksverket karantanslista, FOR, Wikipedia

### 3. Potatis/Tomat/Paprika: Familjenamn "Nattskatta" ar felaktigt
- Filer: `potatis.ts:7`, `tomat.ts:7`, `paprika.ts`, `index.ts`
- Solanaceae heter "Potatisvaxter" pa svenska, inte "Nattskatta"
- "Nattskatta" (Solanum nigrum) ar en specifik vaxtart
- Kallor: Wikipedia (Potatisvaxter), iNaturalist Sweden

---

## Viktiga fel

### Tomat
4. **Skordeberakning for lag**: 2-4 kg/m2 bor vara 3-8 kg/m2. En enda tomatplanta kan ge 3-8 kg.
5. **Temperaturtext felaktig**: "Over 35C slutar blommorna att satta frukt" - fruktsattning forsamras vid 30C, upphor vid ~39C (Runabergs)
6. **Polar Star** inte tillganglig hos svenska froforetag. Byt mot t.ex. Sibirjak (Runabergs, 62 dagar) eller annan nordanpassad sort.
   - Kallor: Runabergs sortiment, Tradgardstrollet sortguide

### Morot
7. **Dagar till skord** '70-80' stammer inte med listade sorter - Autumn King tar 115-130 dagar (Runabergs: 130 dagar). Bor vara '60-130'.
8. **Zon 7 ej styrkt** av svenska kallor. Gronskaper.se: "Zon 1-6". Bor vara [1-6].

### Potatis
9. **King Edward zon 7** - sen sort (14+ veckor), sjukdomskanslig. Ingen svensk kalla bekraftar zon 7.
10. **Ringblomma/pepparrot mot coloradobagge** - companion-motivering refererar till skadegorare som inte finns i Sverige.

### Lok
11. **Setton markt som F1 men ar inte F1** - Setton ar en OP-harledd sattlokssort fran Syngenta, inte en F1-hybrid.
    - Kallor: Seeds Plants Bulbs, Thompson & Morgan

### Sallat
12. **Boltingtroskel 22C bor vara 24C** - 22C ar ovre grans for optimal tillvaxt, inte bolting-trigger.
    - Kallor: UC Davis, MSU Extension, Harvest to Table
13. **Frohallbarhet 3-5 ar bor vara 1-3 ar** - Runabergs: "Mycket kort, 1-3 ar"
14. **Stavfel**: `kalkstensmmjol` (lok.ts) bor vara `kalkstensmjol`

---

## Mindre noteringar

| # | Profil | Notering |
|---|--------|----------|
| 15 | Tomat | Sadjup '0,5 cm' bor vara '0,5-1 cm' (Runabergs: "strax under 1 cm") |
| 16 | Tomat | Dagar '60-85' bor vara '60-100' (Black Krim tar 80-90+ dagar) |
| 17 | Morot | Samodling lok/morot mot morotsflugan - SLU-studie visade att det inte fungerade. Mjuka spraket. |
| 18 | Morot | Isoleringsdistans 500 m bor vara 'minst 500 m, garna 1000 m' |
| 19 | Morot | Skordeberakning 1.5-2.5 kg/m2 konservativt (3-6 kg/m2 realistiskt) |
| 20 | Potatis | Sattdjup '10-15 cm' bor vara '8-10 cm' vid sattning |
| 21 | Potatis | Egensparat utsade: "vart tredje ar" bor vara "vart 2-3:e ar" |
| 22 | Sallat | Dagar '30-60' bor vara '30-90' (isbergssallat tar 70-90 dagar) |
| 23 | Lok | Frohallbarhet '1-2 ar' bor vara '1-3 ar' |

---

## F1/OP-status alla sorter

| Sort | Profil | Status | Korrekt i data? |
|------|--------|--------|:---:|
| Sungold F1 | Tomat | F1 | Korrekt |
| Moneymaker | Tomat | OP | Korrekt |
| Black Krim | Tomat | OP/heirloom | Korrekt |
| Polar Star | Tomat | OP | Korrekt (men ej svensk tillganglighet) |
| Nantes 2 | Morot | OP | Korrekt |
| Autumn King | Morot | OP/heirloom | Korrekt |
| Flyaway F1 | Morot | F1 | Korrekt |
| Purple Haze | Morot | F1 | FEL - saknar F1-markering |
| Solist | Potatis | Kommersiell klon (1999) | Korrekt |
| King Edward | Potatis | Kulturarv (1902) | Korrekt |
| Mandel | Potatis | Kulturarv/landras | Korrekt |
| Asterix | Potatis | Kommersiell PVR | Korrekt |
| Amandine | Potatis | Kommersiell PVR | Korrekt |
| Lollo Rossa | Sallat | OP | Korrekt |
| Salad Bowl | Sallat | OP/heirloom | Korrekt |
| Great Lakes | Sallat | OP/heirloom | Korrekt |
| Batavia Leny | Sallat | Troligen OP | Korrekt (osaker) |
| Stuttgarter Riesen | Lok | OP/heirloom | Korrekt |
| Sturon | Lok | OP | Korrekt |
| Setton F1 | Lok | OP-harledd | FEL - markt som F1 |
| Red Baron | Lok | OP (i Sverige) | Korrekt |

---

## Intressanta fynd

- **Black Krim** introducerades till vast via den svenske frobevararen Lars Olov Rosenstrom i Bronna - bra koppling till var svenska profil
- **Apple/potatis-lagring**: Ny forskning (2024, Journal of Food Science and Technology) visar att etylen fran applen faktiskt hammar groning hos potatis kortsiktigt - tvartom mot traditionell radgivning
- **Morot + lok samodling**: SLU-studie (studentuppsats) visade att det inte fungerade mot morotsflugan
- **Coloradobagge**: Hittades i Sverige "i storre skala pa 1970-talet" men har inte aterkommit

---

## Kallor (urval)

### Myndigheter & forskning
- Jordbruksverket - karantanskadegorare lista
- SLU - samodling med tio vanliga frilandsodlade gronsaker (studentuppsats)
- SMHI - frostdatum
- Livsmedelsverket - glykoalkaloider i potatis

### Frokataloger
- Runabergs Froer - frorodling tomat, gronings- och hallbarhetstabell, lok frorodling
- Impecta - sortbeskrivningar (Nantes 2, Purple Haze F1, Sungold F1)
- Wexthuset - odlingstips (tomat, morot, sallat)
- Lindbloms - sortbeskrivningar (Moneymaker, Purple Haze F1)
- Nelson Garden - tomater pa friland

### Ovriga
- Riksforbundet Svensk Tradgard - odla tomater
- Tradgardstrollet - sortguider (tidiga tomater, sommarmorot)
- Gronskaper.se - morot guide
- Sara Backmo - sommarmorotter, zon 7
- Smaka Sverige - Norrlandsk mandelpotatis

---

*Denna rapport ar den forsta formella faktachecken i projektet. Framtida profiler faktacheckas vid skapande (se ny-groda.md checklista).*
