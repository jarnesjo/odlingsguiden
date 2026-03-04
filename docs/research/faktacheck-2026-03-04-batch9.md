# Faktacheck-rapport: Batch 9 - gurka, paprika, chili

> Datum: 2026-03-04
> Metod: AI-driven verifiering mot svenska kallor (Runabergs, Impecta, Lindbloms, Wexthuset, Odla Atbart, Weibulls, Sara Backmo) och internationella kallor (Wikipedia, Seed Savers Exchange, Southern Exposure Seed Exchange, PepperScale, PFAF)
> Profiler: gurka, paprika, chili

---

## Sammanfattning

| Profil | Kritiska fel | Viktiga | Mindre | Korrekta |
|--------|:-----------:|:-------:|:------:|:--------:|
| Gurka | 1 | 3 | 3 | 7 |
| Paprika | 1 | 1 | 2 | 10 |
| Chili | 2 | 5 | 3 | 6 |
| **Totalt** | **4** | **9** | **8** | **23** |

---

## Kritiska fel (atgardade)

### 1. Gurka: Beit Alpha felaktigt beskriven som renodlad vaxthusgurka

- Fil: `src/data/crops/gurka.ts`
- Profilen beskrev Beit Alpha som "Kompakt OP-vaxthusgurka" och i goodToKnow stod "Vaxthusgurkor (Beit Alpha, Passandra) klarar inte kyla och vind". Lindbloms saljer Beit Alpha bade under "Vaxthusgurka" OCH "Frilandsgurka". Impecta listar den som slanggurka.
- Lindbloms skriver explicit "Ej partenokarp" och "odlas bade i vaxthus och pa friland".
- **Fix:** Omformulerat Beit Alpha till "Mangsidig OP-gurka som fungerar bade pa friland och i vaxthus". Tagit bort Beit Alpha fran goodToKnow-varningen om vaxthusgurkor.
- Kallor: Lindbloms (friland + vaxthus), Impecta

### 2. Chili: "chilifron ar ljusgroende" - ar FALSKT

- Fil: `src/data/crops/chili.ts`
- Profilens sadd-steg pastad att "chilifron ar ljusgroende sa tack bara latt". Wexthuset har en dedikerad artikel som motbevisar detta: "Chili *kan* gro pa ytan. Chili **gror battre tackt**". Runabergs rekommenderar "knappt 1 cm djupt" for alla chilisorter.
- **Fix:** Tagit bort ljusgroende-pastaendet. Andrat till att fron ska tackas latt med jord, 0,5-1 cm djupt.
- Kallor: Wexthuset ("Ar chilifroer ljusgroende?"), Runabergs (saddanvisningar)

### 3. Chili: Isoleringsavstand 10-15 meter ar alldeles for kort

- Fil: `src/data/crops/chili.ts`
- Profilens seedSaving angav 10-15 meters isolering. Runabergs rekommenderar minst 500 meter for frorenhet. Southern Exposure Seed Exchange sager 30m minimum, 90-180m for battre renhet. Capsicum annuum har 2-90% utkorsningsfrekvens beroende pa insektsaktivitet.
- **Fix:** Andrat till "minst 50 meter, helst mer" med tyll/natpasar som foredraget alternativ for hemmaodlare.
- Kallor: Runabergs (frodlingsguide), Southern Exposure Seed Exchange, ChilliChump

### 4. Paprika: Isoleringsavstand 30 meter for kort

- Fil: `src/data/crops/paprika.ts`
- Samma problem som chili. Seed Savers Exchange rekommenderar 91-488 meter. 30 meter ar under alla kallors lagna rekommendationer.
- **Fix:** Andrat till "minst 50 meter, helst mer" med tyll som alternativ.
- Kallor: Seed Savers Exchange, Southern Exposure Seed Exchange

---

## Viktiga korrigeringar (atgardade)

### Gurka

**5. Dagar till skorddagar for optimistiskt:** `50-70` -> `55-75`. Odla Atbart anger 60-75 dagar, Wexthuset 55-75, Runabergs Crystal Apple 58 dagar. 50 dagar ar for optimistiskt for svenska forhallanden.
- Kallor: Odla Atbart (friland), Wexthuset, Runabergs

**6. Fororodlingstid for kort:** `3-4 veckor` -> `4-5 veckor`. Runabergs, Odla Atbart och Wexthuset anger alla 4-5 veckor fore utplantering.
- Kallor: Runabergs, Odla Atbart, Wexthuset

**7. Intern motsagelse zoner vs goodToKnow:** Zones-objektet sa outdoor [1-5] men goodToKnow sa "Friland funkar i zon 1-3". Justerat goodToKnow-texten till "zon 1-4 med frilandssorter" som avspeglar att zon 4 ar marginellt men mojligt.
- Kallor: Profilens egen data, Odla Atbart

### Paprika

**8. Groningstemperatur for snav:** 25-28C -> 22-28C. Wexthuset anger 22-26C, Odla Atbart 20-24C, Runabergs 22-30C. 25C som lagsta ar for hogt.
- Kallor: Wexthuset, Odla Atbart, Runabergs

### Chili

**9. Jalapeno Scoville for hogt pa nedre gransen:** 5 000-8 000 -> 2 500-8 000. Wikipedia, PepperScale och University of Florida anger alla 2 500-8 000 SHU.
- Kallor: Wikipedia, PepperScale, UF Gardening Solutions

**10. Sibirisk chili "kompakt" ar missvisande:** Runabergs anger att plantan blir 100 cm hog. Det ar inte kompakt. Andrat till "produktiv och busig".
- Kallor: Runabergs (Sibirisk chili)

**11. Dagar till skord for hogt pa lagre gransen:** 80-150 -> 60-150. Runabergs listar Sibirisk chili pa 58 dagar, Jalapeno pa 65 dagar.
- Kallor: Runabergs

**12. Radavstand for snart:** 50-60 cm -> 50-70 cm. Runabergs anger 50-70 cm genomgaende for alla chilisorter.
- Kallor: Runabergs

**13. Frohallbarhet for kort:** 2-4 ar -> 2-5 ar. Flera kallor bekraftar 2-5 ar med korrekt forvaring.
- Kallor: Sandia Seed, Southern Exposure

---

## Mindre noteringar

| # | Profil | Notering |
|---|--------|----------|
| 14 | Gurka | Marketmore 76 beskrevs som "framtagen for nordliga forhallanden" - den togs fram pa Cornell for sjukdomsresistens, inte specifikt for norr. Andrat till "trivs utmarkt i nordligt klimat". |
| 15 | Gurka | Skorddkalkyl 3-8 kg/m2 - ovre gransen ar vaxthusniva. Behalls men ar generost for friland. |
| 16 | Gurka | Companions saknar majs och solrosor som Odla Atbart listar som bra grannar. Inte andrat - profilens urval ar bra. |
| 17 | Chili | Habanero ar Capsicum chinense, inte C. annuum som ovriga sorter. Lagt till not i sortbeskrivningen. |
| 18 | Chili | Padron saknade Scoville-angivelse. Lagt till 500-2 500 SHU. |
| 19 | Chili | Sibirisk chili saknade Scoville-angivelse. Lagt till ~30 000 SHU. |
| 20 | Paprika | Tomat listad som dalig granne - manga odlare kör dem i samma vaxthus. Behalls da det ar korrekt ur sjukdomsperspektiv. |
| 21 | Chili | Ideal temperatur 22-28C - nedre gransen kunde vara 20C per Wexthuset. Smalkorrigering, inte andrad. |

---

## OP/F1-status alla sorter

### Gurka

| Sort | Status | Korrekt i data? |
|------|--------|:---------------:|
| Marketmore 76 | OP | Ja |
| Lemon (Crystal Apple) | OP | Ja |
| Beit Alpha | OP | Ja |
| Passandra | F1 | Ja, markerad |
| Burpless Tasty Green | F1 | Ja, markerad |

### Paprika

| Sort | Status | Korrekt i data? |
|------|--------|:---------------:|
| Yolo Wonder | OP | Ja |
| California Wonder | OP | Ja |
| Friggitello | OP | Ja |
| King of the North | OP | Ja |
| Lipstick | OP | Ja |

### Chili

| Sort | Status | Korrekt i data? |
|------|--------|:---------------:|
| Jalapeno | OP | Ja |
| Cayenne | OP | Ja |
| Padron | OP | Ja |
| Sibirisk chili | OP | Ja |
| Habanero | OP | Ja |

---

## Bekraftade korrekta uppgifter

- **Gurka:** Familj Gurkvaxter (Cucurbitaceae), pH 5.8-7.0, temperatur min 12/max 35/ideal 22-28C, avstand 40-60 cm, froforvaring 5-6 ar, Lemon/Crystal Apple koppling till Runabergs, Passandra F1 partenokarp, Burpless Tasty Green F1 dual-use
- **Paprika:** Familj Potatisvaxter (Solanaceae), pH 6.0-7.0, temperatur min 12/max 35/ideal 20-25C, avstand 40-50 cm, froforvaring 3-5 ar, alla 5 sorter bekraftade OP och tillgangliga hos angivna aterforaljare, svarighetsgrad Medel
- **Chili:** Familj Potatisvaxter, pH 6.0-7.0, zoner outdoor [1-3] korrekt restriktivt, Cayenne Scoville 30 000-50 000, Habanero Scoville 100 000-350 000, skodrkalykl 1-3 kg/m2 rimligt, overvintring 10-15C korrekt

---

## Kallor (urval)

### Frokataloger
- Runabergs Froer: Crystal Apple, Sibirisk chili, Jalapeno M, Cayenne, Padron, Habanero, King of the North, Lipstick
- Impecta Frohandel: Marketmore, Beth Alpha, California Wonder
- Lindbloms Fro: Beth Alpha (friland + vaxthus), Yolo Wonder
- Weibulls: Passandra F1
- Wexthuset: Burpless Tasty Green F1, Appelgurka Lemon, Friggitello

### Svenska odlingskallor
- Odla Atbart: odla-gurka-friland, odla-paprika
- Wexthuset: odlingsrad gurka, paprika, chili + "Ar chilifroer ljusgroende?"
- Sara Backmo: paprika for frilandsodling

### Internationella kallor
- Seed Savers Exchange: froforvaring, isoleringsavstand
- Southern Exposure Seed Exchange: isoleringsavstand paprika/chili
- Wikipedia: Jalapeno, Cayenne, Habanero (Scoville)
- PepperScale: Padron, Cayenne (Scoville)
- ChilliChump: pH, isolering

*Nionde faktacheck-rapporten. Totalt ~39 av 77 profiler nu faktacheckade.*
