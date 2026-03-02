# Faktacheck-rapport: Batch 7 - basilika, persilja, dill, graslok

> Datum: 2026-03-02
> Metod: AI-driven verifiering mot svenska kallor (Impecta, Runabergs, Nelson Garden, Blomsterlandet, Sara Backmo, Odla.nu, Tradgardstrollet) och internationella kallor (PMC, Seed Savers Exchange, PFAF)
> Profiler: basilika, persilja, dill, graslok

---

## Sammanfattning

| Profil | Kritiska fel | Viktiga | Mindre | Korrekta |
|--------|:-----------:|:-------:|:------:|:--------:|
| Basilika | 1 | 2 | 1 | 12 |
| Persilja | 0 | 3 | 1 | 14 |
| Dill | 2 | 2 | 2 | 11 |
| Graslok | 0 | 2 | 1 | 14 |
| **Totalt** | **3** | **9** | **5** | **51** |

---

## Kritiska fel (atgardade)

### 1. Dill: Sjalvpollinerare ar fel - insektspollinerad korspollinerad groda
- Fil: `src/data/crops/dill.ts`
- Vetenskaplig artikel (PMC/Scientific Reports): "Anethum graveolens is a cross-pollinated crop, strongly protandrous. Floral visitors play a vital role in pollination."
- Runabergs froguide: anger explicit insektspollinering och 500m isolation.
- **Fix:** Andrat till "Insektspollinerad", isolation 500m.
- Kallor: PMC (pmc.ncbi.nlm.nih.gov/articles/PMC9338944), Runabergs froguide

### 2. Dill: Korspollinering med fankal och morot - botaniskt omojligt
- Fil: `src/data/crops/dill.ts`
- Dill (Anethum), fankal (Foeniculum) och morot (Daucus) ar olika genus. Korspollinering mellan genus forekommer inte naturligt.
- Ingen vetenskaplig artikel stodjer pastaendet. Bloggen Mudflower analyserar detta i detalj och finner noll vetenskapligt stod.
- Problemet med dill+morot ar allelopati (tillvaxthammning), inte korspollinering.
- **Fix:** Borttaget pastaende om korspollinering. Morot-companion andrad till allelopati. Fankal-companion andrad till generell separation.
- Kallor: Mudflower (peer review analysis), Ask Extension (allelopati)

### 3. Basilika: Sjalvpollinerare ar missvisande
- Fil: `src/data/crops/basilika.ts`
- Basilika pollineras primart av insekter med 1.6-19.9% utkorningsfrekvens (ResearchGate).
- **Fix:** Andrat till "Insektspollinerad", isolation 30m -> 45m.
- Kallor: ResearchGate, Mary's Heirloom Seeds, Seed Savers Exchange

---

## Viktiga korrigeringar (atgardade)

### Basilika
4. **"Lemon basil" -> "Citronbasilika"** - alla svenska frohandlare (Runabergs, NordFro, Eco Grow, Lindbloms) anvander det svenska namnet.
5. **Thai-basilika/Citronbasilika zon 1-5 -> 1-4** - inget stod for att de ar hardigare an Genovese.

### Persilja
6. **Frost -5C -> -10C** - Odla atbart anger "talar 10 minusgrader". -5C var for konservativt.
7. **Morot borttagen som companion** - delar morotsfluga, motsager rotation-sektionen. Ersatt med basilika.
8. **Isolation 300m -> 500m** - Runabergs froguide anger explicit "minst 500 meters avstand".

### Dill
9. **Fernleaf -> Dukat** - Fernleaf ar en amerikansk sort som inte saljs av svenska frohandlare. Dukat ar en bladrik sort tillganglig i Sverige.
10. **pH 5.5-6.5 -> 5.5-7.5** - dill tolererar neutral till svagt sur jord; det smala intervallet gav felaktigt intryck av att dill kraver sur jord.

### Graslok
11. **Polyvit markerad som F1** - Promesse de Fleurs säljer "Polyvit F1". Markerat explicit per frofilosofi.
12. **Fina -> Nelly** - "Fina" kunde inte verifieras hos nagon svensk frohandlare. Ersatt med "Nelly" (Impecta).

---

## Mindre korrigeringar (atgardade)

13. **Persilja frohallbarhet 2-3 ar -> 1-2 ar** - Runabergs klassificerar som "mycket kort". Overensstammer battre med profilens eget tips.
14. **Dill Mammut**: tonade ner fran "DEN mest odlade" till "popular sort hos Runabergs" (ej verifierbart pastaende).
15. **Dill Bouquet i sowing-tips**: referens till Fernleaf ersatt med Bouquet.
16. **Graslok companion-text**: mjukare formulering om lokvaxter och baljvaxter (mekanismen ej vetenskapligt belagd).
17. **Basilika isolation**: 30m -> 45m (internationell standard 150 fot).

---

## Verifierat korrekt (urval)

- Basilika familj Kransblommiga (Lamiaceae) - bekraftat
- Basilika zon 1-4 utomhus, Genovese som standardsort - bekraftat
- Persilja familj Flockblommiga (Apiaceae) - bekraftat (bade former accepterade)
- Persilja tvaarig, korspollinerare - bekraftat
- Persilja korsar INTE med morot/dill/selleri - bekraftat (Runabergs)
- Dill familj Flockblommiga (Apiaceae) - bekraftat
- Dill Mammut och Bouquet finns hos svenska frohandlare - bekraftat
- Graslok zon 1-8, -30C hardighet - bekraftat (USDA zone 3)
- Graslok Staro och Prager - bekraftade sorter
- Graslok korspollinerare - bekraftat (insektspollinerad)
