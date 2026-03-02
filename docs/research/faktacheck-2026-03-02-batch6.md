# Faktacheck-rapport: Batch 6 - krusbar, bjornbar, mullbar, rabarber

> Datum: 2026-03-02
> Metod: AI-driven verifiering mot svenska kallor (Blomsterlandet, Wexthuset, Tradgardstrollet, Stangby, E-planta, Odla.nu, Rangedala Plantskola, Odlargladjen, PFAF) och internationella kallor (Missouri Botanical Garden, NC Extension)
> Profiler: krusbar, bjornbar, mullbar, rabarber

---

## Sammanfattning

| Profil | Kritiska fel | Viktiga | Mindre | Korrekta |
|--------|:-----------:|:-------:|:------:|:--------:|
| Krusbar | 1 | 2 | 1 | 12 |
| Bjornbar | 2 | 3 | 2 | 10 |
| Mullbar | 1 | 3 | 1 | 12 |
| Rabarber | 2 | 2 | 2 | 12 |
| **Totalt** | **6** | **10** | **6** | **46** |

---

## Kritiska fel (atgardade)

### 1. Krusbar: Zonuppgifter kraftigt overskattade
- Fil: `src/data/crops/krusbar.ts`
- Profilen angav zon 1-8, svenska kallor anger max zon 1-6.
- Invicta: 1-7 -> 1-5 (Wexthuset anger zon 1-4, Tradgardstrollet 1-4(5))
- Hinnonmaki Rod/Gul: 1-8 -> 1-6 (Blomsterlandet anger zon 1-6)
- Captivator: 1-7 -> 1-5 (Rangedala Plantskola anger zon 1-4)
- **Fix:** Alla zoner korrigerade.
- Kallor: Wexthuset, Blomsterlandet, Tradgardstrollet sortguide, Rangedala Plantskola

### 2. Bjornbar: Alla sorters zoner overskattade
- Fil: `src/data/crops/bjornbar.ts`
- Profilen angav zon 1-6, svenska kallor anger max zon 1-3 for de flesta sorter.
- Loch Ness: 1-5 -> 1-2 (Blomsterlandet)
- Chester: 1-6 -> 1-3 (Odlargladjen anger zon III)
- Navaho: 1-4 -> 1-2 (USDA zone 6-9, varmare sort)
- Triple Crown: 1-5 -> 1-3 (Tradgardstrollet anger zon I-II(III))
- Black Satin: 1-4 - OK (Tradgardstrollet bekraftar)
- **Fix:** Alla zoner korrigerade. General range 1-6 -> 1-4.
- Kallor: Blomsterlandet, Tradgardstrollet sortguide bjornbar, Odlargladjen, Rangedala

### 3. Bjornbar: 50 meters avstand till hallon
- Fil: `src/data/crops/bjornbar.ts`
- Profilen angav "Hall minst 50 meter avstand". Ingen tradgardskalla stodjer detta - det ar en kommersiell produktionsstandard.
- **Fix:** Andrat till "3-5 meters avstand" / "separata rabatter".
- Kallor: Odla.nu (anger "hallon och bjornbar pa olika platser i tradgarden")

### 4. Mullbar: Mulle beskrevs som "svenskutvecklad hybrid"
- Fil: `src/data/crops/mullbar.ts`
- Mulle ar inte en medveten korsning utan ett froplanstfynd fran Balsgard (SLU:s fruktforskningsstation i Kristianstad). En stadsontoman i Kristianstad sadde fron, en av plantorna delades med Balsgard pa 1960-talet.
- Arten ar Morus accidosa, inte Morus alba eller nigra.
- **Fix:** Andrat till "Froplanstfynd fran Balsgard/SLU pa 1960-talet".
- Kallor: E-planta (Morus Mulle E), Odla.nu, Jeppa S Tradgard

### 5. Rabarber: Canada Red zon 1-8
- Fil: `src/data/crops/rabarber.ts`
- Profilen angav zon 1-8. Blomsterlandet anger explicit zon 1-5.
- **Fix:** Andrat till zon 1-5.
- Kallor: Blomsterlandet, Klostra, Stromsbro Plantskola

### 6. Rabarber: Rabarbervivel (Lixus concavus) ar nordamerikansk
- Fil: `src/data/crops/rabarber.ts`
- Lixus concavus ar endemisk i Nordamerika (ostra USA, Kanada). Arten ar inte dokumenterad i Sverige eller Europa.
- Ingen svensk tradgardskalla namner rabarbervivel som problem.
- **Fix:** Ersatt med "Sniglar" (det vanligaste problemet pa rabarber i Sverige).
- Kallor: iNaturalist (visar utbredning), Wexthuset (listar inte vivlar)

---

## Viktiga korrigeringar (atgardade)

### Krusbar
7. **Planteringsavstand 120-150 -> 150-200 cm** - svenska kallor (Blomsterlandet, Hasselforsgarden, Viivilla) anger minst 150 cm for fristaende buskar.
8. **Hinnonmaki Rod beskrevs som "tal allt"** - andrat till "tal det mesta" for att vara mer nyanserat.

### Bjornbar
9. **pH ideal 6.0 -> 6.5** - Odla.nu anger "hogt pH-varde, omkring 7,0". Bjornbar foredrar hogre pH an hallon.
10. **Temperaturhardighet -25 -> -20°C** - inga kallor bekraftar -25°C for namnsorter av tradgardsbjornbar.
11. **Skottsjuka -> bjornbarsrost** - skottsjuka ar primart en hallonsjukdom. Bjornbarsrost (Phragmidium) ar det relevanta svampproblemet for bjornbar.

### Mullbar
12. **Morus alba: zon 1-3 -> 1-2** - Stangby Plantskola anger zon I-II(-III), dvs primart zon 1-2.
13. **Morus alba Pendula: zon 1-3 -> 1-2** - Stangby anger zon I-II.
14. **Illinois Everbearing: zon 1-4 -> 1-3** - Sannas Tradgard anger zon 3, Gunnebo anger zon 1-2(3).

### Rabarber
15. **Holsteiner Blut: zon 1-6 -> 1-7** - Blomsterlandet anger zon 1-7 (hardare an profilen angav).
16. **Timperley Early: zon 1-5 -> 1-4** - Blomsterlandet anger zon 1-4.

---

## Mindre korrigeringar (atgardade)

17. **Krusbar spacing-text konsekvent** med det nya avstandet.
18. **Bjornbar Chester**: beskrivning uppdaterad fran "klarar zon 6" till "hardigaste av de taggfria".
19. **Rabarber pH**: max 7.0 -> 7.5, ideal 6.0 -> 6.5 (Odla.nu anger 7.0-7.5).
20. **Rabarber spacing 80-100 -> 100 cm** - alla svenska kallor eniga om minst 1 meter.
21. **Mullbar Morus nigra -15°C -> -20 till -23°C** - PFAF anger USDA zone 5 (~-23 till -29°C). -15°C var for konservativt.
22. **Rabarber Canada Red**: "Extremt hardig" -> "Hardig" och "norra Sverige" -> "mellersta Sverige" (passar zon 1-5).

---

## Verifierat korrekt (urval)

- Krusbar familj Ripsvaxter (Grossulariaceae) - bekraftat
- Krusbar mjoldaggsresistenta sorter (Invicta, Hinnonmaki) - bekraftat
- Bjornbar familj Rosvaxter (Rosaceae) - bekraftat
- Bjornbar problem graemogel och hallonanger - bekraftat
- Mullbar familj Mullbarsvaxter (Moraceae) - bekraftat
- Mullbar Mulle E-planta zon 1-4 - bekraftat
- Mullbar sjalvfertilt och vindpollinerat - bekraftat
- Rabarber familj Slidevaxter (Polygonaceae) - bekraftat
- Rabarber kategori gronsaker - bekraftat
- Rabarber zon 1-8 generellt - bekraftat
- Rabarber Victoria zon 1-7 - bekraftat
- Rabarber Glaskins Perpetual tillganglig i Sverige - bekraftat
- Rabarber Holsteiner Blut tillganglig i Sverige - bekraftat
