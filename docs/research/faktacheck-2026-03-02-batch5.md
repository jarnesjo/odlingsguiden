# Faktacheck-rapport: Batch 5 - hallon, jordgubbar, svarta vinbar, roda vinbar

> Datum: 2026-03-02
> Metod: AI-driven verifiering mot svenska kallor (Blomsterlandet, Klostra, E-planta, Tradgardstrollet, Barframjandet, Granngarden, Artfakta/SLU, Sara Backmo, Odla.nu) och internationella kallor (RHS, Oregon State Extension, StrawberryPlants.org m.fl.)
> Profiler: hallon, jordgubbar, svarta vinbar, roda vinbar

---

## Sammanfattning

| Profil | Kritiska fel | Viktiga | Mindre | Korrekta |
|--------|:-----------:|:-------:|:------:|:--------:|
| Hallon | 1 | 4 | 2 | 10 |
| Jordgubbar | 0 | 0 | 1 | 16 |
| Svarta vinbar | 1 | 2 | 2 | 14 |
| Roda vinbar | 1 | 3 | 1 | 12 |
| **Totalt** | **3** | **9** | **6** | **52** |

---

## Kritiska fel (atgardade)

### 1. Hallon: Autumn Bliss zon 1-6 alldeles for generost
- Fil: `src/data/crops/hallon.ts`
- Hosthallon begransas inte av vinterhardighet utan av att de behover lang, varm host for att mogna. Svenska kallor (Tradgardstrollet, Barframjandet) anger zon 1-2, max 3-4 i gynnsamma lagen.
- **Fix:** Andrat till zon 1-3.
- Kallor: Tradgardstrollet sortguide hosthallon, Barframjandet

### 2. Svarta/roda vinbar + krusbar: Familjenamn "Krusvaxter" ar felaktigt
- Filer: `svarta-vinbar.ts`, `roda-vinbar.ts`, `krusbar.ts`, `cropList.ts`
- Grossulariaceae heter "Ripsvaxter" pa svenska enligt Artfakta/SLU (Dyntaxa). "Krusvaxter" ar inte ett etablerat svenskt familjenamn.
- **Fix:** Andrat till "Ripsvaxter" pa alla 8 stallen.
- Kallor: Artfakta/SLU (Dyntaxa), GBIF

### 3. Roda vinbar: Tatran inte tillganglig i Sverige
- Fil: `src/data/crops/roda-vinbar.ts`
- Slovakisk sort som inte saljs av nagon svensk plantskola (Blomsterlandet, Klostra, Tradgardstrollet - ingen har den).
- **Fix:** Ersatt med "Rondom" (sen sort, tillganglig hos Blomsterlandet).
- Kallor: Tradgardstrollet sortguide roda vinbar, Blomsterlandet

---

## Viktiga korrigeringar (atgardade)

### Hallon
4. **Glen Ample zon 1-5 -> 1-4** - E-planta listar officiellt zon I-IV.
   - Fix: Andrat till zon 1-4.
5. **Polka zon 1-5 -> 1-3** - Hosthallon begransas av sasongens langd, inte vinterhardighet. Tradgardstrollet sager zon 1-2.
   - Fix: Andrat till zon 1-3.
6. **Bjornbar companion "korspollinerar"** - Myt for barens kvalitet. Hallon och bjornbar kan tekniskt korspollinera, men det paverkar bara fron (irrelevant for klonfortokade plantor). Sjukdomsdelning ar det verkliga problemet.
   - Fix: Omformulerat till "Delar sjukdomar (virus, rotrata, rostsvamp)".
7. **Vitlok companion "gallkvalster"** - Svagt dokumenterat. Vitloks effekt mot bladloss ar battre dokumenterad.
   - Fix: Fokuserat pa bladloss istallet for gallkvalster.

### Svarta vinbar
8. **Ojebyn zon 1-8 -> 1-6** - E-planta listar officiellt zon 1-6. Arten kan finnas langre norrut men sorten ar testad till zon 6.
   - Fix: Andrat till zon 1-6.
9. **Titania zon 1-7 -> 1-6** - Kallor varierar: 1-5 till 1-6. Zon 7 saknar stod.
   - Fix: Andrat till zon 1-6.

### Roda vinbar
10. **Jonkheer van Tets zon 1-6 -> 1-5** - Tradgardstrollet och Blomsterlandet anger zon 1-5.
    - Fix: Andrat till zon 1-5.
11. **Rovada zon 1-7 -> 1-5** - Tradgardstrollet sager zon 1-4, Blomsterlandet zon 1-5.
    - Fix: Andrat till zon 1-5.
12. **Roda Hollandska zon 1-8 -> 1-7** - Tradgardstrollet sager zon 1-6(7). Zon 8 saknar stod.
    - Fix: Andrat till zon 1-7.

---

## Mindre noteringar

| # | Profil | Notering |
|---|--------|----------|
| 13 | Hallon | "tappar tappar" dubblering pa rad 122 - rattat till "tappen (den vita karnan)" |
| 14 | Hallon | Glen Coe har begransad tillganglighet i Sverige - noterat i sortbeskrivningen |
| 15 | Hallon | Autumn Bliss och Polka - lagt till forklaring om hosthallons begransning |
| 16 | Jordgubbar | Stavfel "arkefiendenr" rattat till "arkefiende nr" |
| 17 | Svarta vinbar | Ojebyn markerad som E-planta, ursprung Norrbotten 1940-talet |
| 18 | Svarta vinbar | Titania markerad som svenskodlad |

---

## OP/F1-status

Bar forokas klonalt (vegetativt via sticklingar, rotskott eller revor), sa OP/F1-distinktionen fran frofilosofin ar inte relevant. Alla sorter ar konventionellt foradlade kultivarer som vidmaktholls som kloner.

| Sort | Profil | Typ | Korrekt? |
|------|--------|-----|:---:|
| Glen Ample | Hallon | PBR-sort (SCRI) | Korrekt |
| Tulameen | Hallon | Konventionellt foradlad | Korrekt |
| Autumn Bliss | Hallon | Konventionellt foradlad, E-planta | Korrekt |
| Polka | Hallon | Konventionellt foradlad (Polen) | Korrekt |
| Glen Coe | Hallon | PBR-sort (SCRI), lila korsning | Korrekt |
| Honeoye | Jordgubbar | Konventionellt foradlad (Cornell) | Korrekt |
| Polka | Jordgubbar | Konventionellt foradlad | Korrekt |
| Florence | Jordgubbar | Konventionellt foradlad (UK) | Korrekt |
| Ostara | Jordgubbar | Remonterande, konventionellt foradlad | Korrekt |
| Ojebyn | Svarta vinbar | Urval/fynd (Norrbotten), E-planta | Korrekt |
| Ben Lomond | Svarta vinbar | Konventionellt foradlad (SCRI) | Korrekt |
| Titania | Svarta vinbar | Svenskodlad (Pal Tamas) | Korrekt |
| Ben Sarek | Svarta vinbar | Konventionellt foradlad (SCRI) | Korrekt |
| Jonkheer van Tets | Roda vinbar | Konventionellt foradlad (NL) | Korrekt |
| Rovada | Roda vinbar | Konventionellt foradlad (NL) | Korrekt |
| Roda Hollandska | Roda vinbar | Historisk sort (300+ ar) | Korrekt |
| Rondom | Roda vinbar | Konventionellt foradlad | Korrekt (ny) |

---

## Kallor

### Svenska
- E-planta - Glen Ample (zon I-IV), Ojebyn (zon 1-6)
- Blomsterlandet - alla sorter (zoner, tillganglighet)
- Klostra - hallon, jordgubbar, vinbar (sortiment, E-plantor)
- Tradgardstrollet - sortguider (sommarhallon, hosthallon, svarta vinbar, roda vinbar)
- Barframjandet - hallon (Tulameen varning)
- Artfakta/SLU (Dyntaxa) - Grossulariaceae = Ripsvaxter
- Sara Backmo - jordgubbar (samodling lok)
- Granngarden - beskara vinbarsbuskar
- Odla.nu - vinbar, jordgubbar
- Jordbruksverket - skord av tradgardsvaxter

### Internationella
- RHS - Glen Ample
- Oregon State Extension - hallon pH, odling
- StrawberryPlants.org - Honeoye, kalltolerans
- Penn State Extension - jordgubbars kalltalerans
- ISHS - Polka och Pokusa (ursprung)

---

*Fjarde faktacheck-rapporten. 35 av 43 profiler nu faktacheckade (8 aterstar i 2 batchar).*
