# Faktacheck-rapport: Batch 8 - timjan, mynta, rosmarin, oregano

> Datum: 2026-03-02
> Metod: AI-driven verifiering mot svenska kallor (Wexthuset, Runabergs, Impecta, perenner.se, Odla Atbart, Odlargladjen) och internationella kallor (PFAF, Kew POWO, Missouri Botanical Garden, GBIF)
> Profiler: timjan, mynta, rosmarin, oregano

---

## Sammanfattning

| Profil | Kritiska fel | Viktiga | Mindre | Korrekta |
|--------|:-----------:|:-------:|:------:|:--------:|
| Timjan | 1 | 4 | 4 | 5 |
| Mynta | 1 | 5 | 6 | 7 |
| Rosmarin | 1 | 4 | 6 | 7 |
| Oregano | 0 | 2 | 4 | 8 |
| **Totalt** | **3** | **15** | **20** | **27** |

---

## Kritiska fel (atgardade)

### 1. Timjan: Isoleringsavstand 50 meter alldeles for kort

- Fil: `src/data/crops/timjan.ts`
- Timjan pollineras av bin som flyger kilometerlanga strackor. 50 meter ger ingen som helst sortisolering.
- Seed Savers Exchange rekommenderar 800+ meter for insektspollinerade orter.
- **Fix:** Omformulerat till "hundratals meter" och rekommenderar sticklingar som sakraste metoden for sortbevarande.
- Kallor: Seed Savers Exchange (isolation methods)

### 2. Mynta: Vattenmynta pastad "allra hardigast" - ar tvartom halvhardig

- Fil: `src/data/crops/mynta.ts`
- Vattenmynta (Mentha aquatica) beskrevs som "allra hardigast av alla myntor" med zoner [1-8]. I verkligheten ar den halvhardig och vaxer vild bara i Gotaland/sodra Svealand.
- VegTech och Blomsterlexikonet bekraftar begransad hardighet.
- **Fix:** Zoner [1-8] -> [1-4]. "Allra hardigast" borttaget, ersatt med "halvhardig".
- Kallor: VegTech (vegtech.se), Blomsterlexikonet (blomsterlexikon.se), NatureGate

### 3. Rosmarin: Salem beskrevs som "en av de hardigaste" - stammer inte alls

- Fil: `src/data/crops/rosmarin.ts`
- Salem beskrevs som "en av de hardigaste sorterna" med zoner [1-3] och pastadd -15C hardighet. Missouri Botanical Garden listar Salem som zon 8-10 (USDA), vilket ar MINDRE hardig an standardrosmarin.
- **Fix:** Salem nedjusterad till zon [1] (kruka), beskrivning korrigerad. Arp ar den verkligt hardiga sorten.
- Kallor: Missouri Botanical Garden, Plant Delights Nursery

---

## Viktiga korrigeringar (atgardade)

### Timjan

**4. Odlingszoner overskattade:** T. vulgaris zoner [1-6] -> [2-6]. Zon 1 ar inte palitligt for perenn utomhusodling. Wexthuset anger zon 2-6.
- Kallor: Wexthuset, perenner.se, Grobar.se

**5. Temperatur overskattad:** Min -20C -> -15C. PFAF anger ca -15C, svenska hardighetsklassning C* ("overvintrar ibland").
- Kallor: PFAF, perenner.se

**6. Citrontimjan zoner for generosa:** [1-5] -> [1-4]. Mindre hardig an vanlig timjan, hardighet C* pa perenner.se.
- Kallor: perenner.se

**7. "Bredbladig timjan" finns inte som sort:** Ersatt med German Winter (Thymus vulgaris), en riktig sort som saljs av Impecta.
- Kallor: Impecta frohandel

### Mynta

**8. Temperatur:** Min -25C -> -20C. Odla Atbart anger -15C, vi satter -20C med snotacke som kompromiss.
- Kallor: Odla Atbart

**9. Dagar fran fro:** 60-90 -> 90-110. Odla Atbart anger explicit 90-110 dagar.
- Kallor: Odla Atbart

**10. Myntbagge (Chrysolina herbacea):** Lade till vetenskapligt namn. Arten ar inte bekraftad som etablerad i Sverige - noterat som "ovanlig i Sverige".
- Kallor: Wikipedia, NBN Atlas

**11. Artvivel-pastaende utan stod:** Companion-texten pastad att mynta haller bort artvivel - inget vetenskapligt eller traditionellt stod hittades. Ersatt med bladloss-pastaende (battre stod).
- Kallor: Growfully, RHS

**12. Marockansk mynta skyddsrad:** "Skydda i zon 5+" andrat till "skydda i zon 4 och norrut" - mer korrekt da grans ar zon 6.

### Rosmarin

**13. Utomhuszoner:** [1-3] -> [1-2]. Wexthuset anger "zon 1 i valdranerad jord". Zon 3 ar inte realistiskt.
- Kallor: Wexthuset, Odla Atbart

**14. Latinnamn:** Rosmarinus officinalis -> Salvia rosmarinus. Omklassificerad 2017 baserat pa DNA-evidens (Drew et al., Taxon). RHS och Kew har adopterat det nya namnet. Familjen Lamiaceae ar oforandrad.
- Kallor: Gardens Illustrated/RHS, Wikipedia, Kew POWO

**15. Vanlig rosmarin zoner:** [1-2] -> [1]. Standardrosmarin ar mindre hardig an Arp.

**16. Temperaturtext klarifierad:** -15C gallde bara Arp i ideala forhallanden, inte generellt.

### Oregano

**17. Temperatur kraftigt underskattad:** Min -15C -> -25C. Oregano ar USDA zon 5 (ner till -29C). Gardenia.net och Stone Post Gardens bekraftar. Den nuvarande siffran underskattade oreganos hardighet avsevart.
- Kallor: Gardenia.net, Stone Post Gardens

**18. "Glansig" i problems-text:** Ordet "glansig" (blank) i beskrivningen av vedartade grenar motsager "torr ved" i samma mening. Borttaget.

---

## Mindre korrigeringar (atgardade)

### Timjan
- Spacing 20-30 -> 15-25 cm (Runabergs anger 15-20 cm)
- Italiensk oregano: latinskt namn tillagt (Origanum x majoricum)

### Mynta
- Spacing 30-45 -> 25-40 cm (Runabergs anger 20-30 cm)

### Rosmarin
- Arp zoner [1-3] -> [1-2]
- Krypande rosmarin zoner [1-2] -> [1]
- Spacing 60-90 -> 40-60 cm (svenska plantor blir mindre)
- GoodToKnow-text: "zon 4+" -> "zon 3+" for intagning

### Oregano
- Spacing 25-30 -> 20-30 cm (Wexthuset anger 20 cm)
- Stavfel: "sasen" -> "saser"

---

## Bekraftade uppgifter (urval)

- Alla fyra tillhor Lamiaceae (Kransblommiga) - korrekt
- Alla fyra ar perenner - korrekt
- pH-varden for samtliga - rimliga och stods av kallor
- Oregano korsar sig med mejram (Origanum x majoricum existerar) - bekraftat
- Pepparmynta = M. aquatica x M. spicata - bekraftat (Kew POWO)
- Myntrost (Puccinia menthae) finns i Sverige - bekraftat (GBIF, specimen fran Skane 2023)
- Rosmarins frogronig 30-50% - bekraftat av manga kallor
- Timjans fro lagring 3-4 ar - bekraftat
- Oreganos fro lagring 3-4 ar - bekraftat

---

## Encoding-check

Alla 44 crop-filer i src/data/crops/ kontrollerade:
- **Unicode-escapes:** Inga hittade
- **Mojibake:** Inga hittade
- **ASCII-approximationer av aao:** Inga hittade
- **En-dash (U+2013):** Inga hittade
- **Replacement characters (U+FFFD):** Inga hittade

Kodbasen ar ren.

---

## Kallor anvanda i denna batch

### Svenska
- Wexthuset (wexthuset.com) - odlingsrad, zoninfo
- Runabergs Froer (runabergsfroer.se) - sorter, spacing
- Impecta Frohandel (impecta.se) - sorter (German Winter, backtimjan)
- perenner.se - hardighetsklassning (A/B/C-systemet)
- Odla Atbart (odlaatbart.se) - odlingsdata mynta
- Odlargladjen (odlargladjen.se) - sortinfo
- Grobar.se - hardighetsinfo timjan
- VegTech (vegtech.se) - vattenmynta
- Blomsterlexikonet (blomsterlexikon.se) - vattenmynta

### Internationella
- PFAF (pfaf.org) - temperaturdata timjan
- Kew POWO (powo.science.kew.org) - pepparmynta taxonomi
- Missouri Botanical Garden - Salem rosmarin
- GBIF (gbif.org) - myntrost i Sverige
- Gardens Illustrated/RHS - rosmarin omklassificering
- Gardenia.net - oregano hardighet
- Stone Post Gardens - oregano koldtolerans
- Seed Savers Exchange - isoleringsavstand

---

*Batch 8 ar den sista batchen. Alla 43 profiler ar nu faktacheckade.*
*Sammanfattande rapport for alla 8 batchar: planerad.*
