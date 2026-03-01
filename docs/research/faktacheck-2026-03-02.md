# Faktacheck-rapport: mangold, kalrabbi, palsternacka, brytbona

> Datum: 2026-03-02
> Metod: AI-driven verifiering mot svenska kallor (Runabergs, Impecta, Nelson Garden, Lindbloms, NordFro, odla.nu, Wexthuset) och internationella kallor (Seed Savers Exchange, RHS, MSU Extension m.fl.)
> Profiler: mangold, kalrabbi, palsternacka, brytbona

---

## Sammanfattning

| Profil | Kritiska fel | Viktiga | Mindre | Korrekta |
|--------|:-----------:|:-------:|:------:|:--------:|
| Mangold | 2 | 2 | 3 | 13 |
| Kalrabbi | 0 | 3 | 8 | 13 |
| Palsternacka | 3 | 3 | 4 | 12 |
| Brytbona | 3 | 3 | 3 | 10 |
| **Totalt** | **8** | **11** | **18** | **48** |

---

## Kritiska fel (atgardade)

### 1. Mangold: "Fantasia F1" ar OP, inte F1
- Fil: `src/data/crops/mangold.ts`
- Sorten heter "Orange Fantasia" och ar oppetpollinerad (heirloom). Victory Seeds, Reimer Seeds, Urban Farmer - alla listar den som OP.
- Profilen avradde felaktigt fran frosparing.
- **Fix:** Bytt till "Orange Fantasia", uppdaterat note till OP.

### 2. Mangold: Isoleringsavstand 800 m for kort
- Fil: `src/data/crops/mangold.ts`
- Mangold ar vindpollinerare. Seed Savers Exchange rekommenderar minst 1 mile (1.6 km).
- **Fix:** Andrat till "minst 1.5 km".

### 3. Palsternacka: Sortnamn "Halblange White" felaktigt
- Fil: `src/data/crops/palsternacka.ts`
- Runabergs listar sorten som "Halblange Weiss" (tyska for "halvlang vit").
- **Fix:** Bytt till "Halblange Weiss" med forklarande text.

### 4. Palsternacka: pH 6.0-6.8 for lagt
- Fil: `src/data/crops/palsternacka.ts`
- Odla.nu: optimal pH "ca 7.0". Palsternacka trivs i neutral till svagt alkalisk jord.
- **Fix:** Andrat till pH 6.5-7.5, ideal 7.0.

### 5. Palsternacka: Groningstemperatur 2 grader C vilseledande
- Fil: `src/data/crops/palsternacka.ts`
- Tekniskt mojligt men opraktiskt - fron ruttnar vid sa lag temperatur. MSU Extension: minimum 8 grader C.
- **Fix:** Andrat min till 5 grader C, lagt till text om att 8 grader C+ rekommenderas i praktiken.

### 6. Brytbona: "Brittle Wax" inte tillganglig i Sverige
- Fil: `src/data/crops/brytbona.ts`
- Nordamerikansk sort, inte hos nagon svensk frohandlare. Dessutom vaxbona, inte brytbona.
- **Fix:** Ersatt med "Ferrari" (Nelson Garden) - haricots verts-typ.

### 7. Brytbona: "Rocdor" ar vaxbona, inte brytbona
- Fil: `src/data/crops/brytbona.ts`
- Runabergs och Lindbloms listar den som "vaxbona". Bor markeras tydligt.
- **Fix:** Behallen men tydligt markerad som vaxbona i note.

### 8. Brytbona: "Purple Teepee" ar purpurbona
- Fil: `src/data/crops/brytbona.ts`
- Impecta och NordFro klassar den som "purpurbona", inte "brytbona".
- **Fix:** Behallen men foretydligad i note som purpurbona.

---

## Viktiga korrigeringar (atgardade)

### Mangold
9. **Groningstemperatur 5 grader C behover kvalificering** - praktiskt minimum 10 grader C+.
   - Fix: Lagt till "kan tekniskt gro vid 5 grader C men rakna med 10 grader C+ for palitlig groning".
10. **Fordhook Giant zon 1-5 for snalt** - Runabergs saljer den i sitt nordiska sortiment. Ingen anledning att utesluta zon 6.
    - Fix: Utokat till zon 1-6.

### Kalrabbi
11. **Spacing 20-25 cm for brett** - Odla.nu rekommenderar 15-20 cm. Superschmelz behover mer.
    - Fix: Andrat till 15-25 cm.
12. **Sadjup 1-2 cm for djupt** - Odla.nu rekommenderar 1 cm, internationella kallor 0.5-1 cm.
    - Fix: Andrat till 0.5-1 cm.
13. **pH ideal 6.5 for lagt for kal** - Odla.nu: ca 7.0. Hogre pH motverkar klumprotsjuka.
    - Fix: Andrat ideal till 7.0.
14. **Stavfel**: "svallcr" -> "svaller", "for" -> "for" (2 st).
    - Fix: Rattat.

### Palsternacka
15. **Dagar 100-180 for brett** - Ingen kalla stodjer 180 dagar. Mognad ar 100-130, froststotning ar valfri.
    - Fix: Andrat till 100-150.
16. **Radavstand 30-40 cm smalt** - Runabergs rekommenderar 40-60 cm.
    - Fix: Andrat till 30-60 cm.
17. **Sorten "Student" saknas** - Runabergs kulturarvssort, "en palitlig gammal arbetsfast".
    - Fix: Lagd till som femte sort.

### Brytbona
18. **Zon 6 bor vara utomhus** - Sara Backmo m.fl. bekraftar att bonor kan odlas utomhus i zon 6 med fiberduk.
    - Fix: Andrat outdoor till [1-6], greenhouse till [7-8].
19. **Isoleringsavstand 1-2 m for kort** - Seed Savers Exchange: 10-20 feet (3-6 m). 3-5% korspollinering kan forekomma.
    - Fix: Andrat till 3-6 m.
20. **"Primel" svartillganglig** - Inte hos nagon stor svensk frohandlare.
    - Fix: Ersatt med "Provider" (tidig, koldharding, brett tillganglig).

---

## Mindre noteringar (oatgardade - lagre prioritet)

| # | Profil | Notering |
|---|--------|----------|
| 21 | Mangold | "Mallvaxter" ar traditionellt namn for Chenopodiaceae, inte Amaranthaceae (APG IV). Pragmatiskt val for malgruppen. |
| 22 | Mangold | Dagar 50-60 andrat till 50-70 for att tacka alla sorter i svalare zoner. |
| 23 | Mangold | Fler sorter tillgangliga hos Runabergs (Flamingo Pink, Golden Chard, Erbette m.fl.) |
| 24 | Kalrabbi | difficultyWhy-texten sa "50-60 dagar" - rattat till "50-70" for konsekvens. |
| 25 | Kalrabbi | Isoleringsavstand 1 km justerat till "500 m-1 km" (mer i linje med kallor). |
| 26 | Palsternacka | Frotid 1 ar (max 2) korrekt men kunde betonas mer: "kop alltid farskt fro". |
| 27 | Palsternacka | Skordekalkyl 2-4 kg/m2 justerad till 1.5-3 kg/m2 (realistiskt for hemodling). |
| 28 | Palsternacka | Overvintring i jorden korrekt men kraver rejal tacking i zon 1-3 (15+ cm halm). |
| 29 | Brytbona | Groningsminimum 10 grader C ar korrekt men 12 grader C+ rekommenderas i praktiken. |
| 30 | Brytbona | Bonor kan forodlas i plugg med forsiktighet - profilen forenklar. |
| 31 | Brytbona | Lok/vitlok-pastaendet mjukat upp till "anses kunna hamma" (traditionsbaserat, ej peer-reviewed). |

---

## OP/F1-status alla sorter

| Sort | Profil | Status | Korrekt i data? |
|------|--------|--------|:---:|
| Bright Lights | Mangold | OP | Korrekt |
| Lucullus | Mangold | OP | Korrekt |
| Rhubarb Chard | Mangold | OP | Korrekt |
| Fordhook Giant | Mangold | OP | Korrekt |
| Orange Fantasia | Mangold | OP | Korrekt (rattat fran "Fantasia F1") |
| Superschmelz | Kalrabbi | OP | Korrekt |
| Blaro | Kalrabbi | OP | Korrekt (bekraftad via Lindbloms, Bingenheimer) |
| Lanro | Kalrabbi | OP | Korrekt |
| Korist F1 | Kalrabbi | F1 | Korrekt (Bejo Seeds) |
| Logo | Kalrabbi | OP | Korrekt (Impecta) |
| Halblange Weiss | Palsternacka | OP | Korrekt (rattat namn) |
| White Gem | Palsternacka | OP | Korrekt (Runabergs, Impecta, Nelson Garden) |
| Tender and True | Palsternacka | OP | Korrekt (Runabergs, Lindbloms) |
| Guernsey | Palsternacka | OP/heirloom | Korrekt |
| Student | Palsternacka | Kulturarv | Korrekt (ny, Runabergs) |
| Maxi | Brytbona | OP | Korrekt (Impecta, Lindbloms) |
| Ferrari | Brytbona | OP | Korrekt (ny, Nelson Garden) |
| Purple Teepee | Brytbona | OP | Korrekt (Impecta, NordFro - purpurbona) |
| Provider | Brytbona | OP | Korrekt (ny) |
| Rocdor | Brytbona | OP | Korrekt (Runabergs, Lindbloms - vaxbona) |

---

## Kallor

### Frokataloger
- Runabergs Froer - mangold sortiment, palsternacka (Halblange Weiss, Student), frorodling
- Impecta - kalrabbi (Logo, Korist F1), brytbona (Maxi), purpurbona (Purple Teepee)
- Nelson Garden - palsternacka (White Gem), brytbona (Ferrari)
- Lindbloms - kalrabbi (Blaro), brytbona (Rocdor som vaxbona), palsternacka (Tender and True)
- NordFro - purpurbona (Purple Teepee)

### Svenska odlingskallor
- Odla.nu - kalrabbi (pH, spacing), palsternacka (pH ca 7.0)
- Sara Backmo (sarabackmo.se) - bonor i norra Sverige

### Internationella kallor
- Seed Savers Exchange - isoleringsavstand for mangold (1 mile) och bonor (10-20 feet)
- MSU Extension - palsternacka groningstemperatur (minimum 8 grader C)
- Victory Seeds, Reimer Seeds - Orange Fantasia (heirloom, OP)
- RHS - palsternacka odling
- Bingenheimer Saatgut, SATIVA - kalrabbi Blaro (OP)
- Bejo Seeds - Korist F1 (F1-hybrid)
- Oregon State Extension - Beta vulgaris groningstemperatur

---

*Denna rapport ar den andra formella faktachecken. Forsta: faktacheck-2026-03-01.md (tomat, morot, potatis, sallat, lok). Profiler skapade fran session 20 och framat faktacheckas vid skapande.*
