# Faktacheck-rapport: Batch 2 - rödbeta, purjolök, vitlök, rädisa

> Datum: 2026-03-02
> Metod: AI-driven verifiering mot svenska källor (Runåbergs, Impecta, Lindbloms, NordFrö, Klostra, nelson Garden, odla.nu) och internationella källor (Seed Savers Exchange, RHS m.fl.)
> Profiler: rödbeta, purjolök, vitlök, rädisa

---

## Sammanfattning

| Profil | Kritiska fel | Viktiga | Mindre | Korrekta |
|--------|:-----------:|:-------:|:------:|:--------:|
| Rödbeta | 0 | 3 | 5 | 14 |
| Purjolök | 1 | 3 | 3 | 13 |
| Vitlök | 4 | 5 | 3 | 10 |
| Rädisa | 1 | 4 | 5 | 9 |
| **Totalt** | **6** | **15** | **16** | **46** |

---

## Kritiska fel (åtgärdade)

### 1. Vitlök: Thermidrome felaktigt märkt som hardneck - är softneck
- Fil: `src/data/crops/vitlok.ts`
- Thermidrome är en Artichoke-typ softneck (Allium sativum sativum). Klostra.se bekräftar softneck.
- Profilen angav hardneck vilket är fundamentalt fel - påverkar odlingsråd, skörd och förvaring.
- **Fix:** Ändrat Thermidrome till softneck med Artichoke-klass i note.
- Källor: Klostra.se, Runåbergs

### 2. Vitlök: Sprint felaktigt märkt som softneck - är hardneck
- Fil: `src/data/crops/vitlok.ts`
- Sprint är en Porcelain-typ hardneck. Klostra.se bekräftar hardneck.
- **Fix:** Ändrat Sprint till hardneck med Porcelain-klass i note.
- Källor: Klostra.se

### 3. Vitlök: Messidrome felaktigt märkt som hardneck - är softneck
- Fil: `src/data/crops/vitlok.ts`
- Messidrome är Artichoke-typ softneck. Klostra.se och Impecta bekräftar softneck.
- **Fix:** Ändrat Messidrome till softneck.
- Källor: Klostra.se, Impecta

### 4. Vitlök: Zon 6 planteringstid Sep är för tidigt - risk för skottskjutning
- Fil: `src/data/crops/vitlok.ts`
- September-plantering i zon 6 ger för lång tillväxtperiod före vintern - klyftorna hinner skjuta upp ovan jord och frysa.
- Svenska källor anger Okt-Nov som rätt tid för norra Sverige.
- **Fix:** Ändrat zon 6 planteringstid till Okt-Nov.
- Källor: Odlingsguide.se, Runåbergs

### 5. Purjolök: Jordloppar listad som skadedjur - är ett fel skadedjur
- Fil: `src/data/crops/purjolok.ts`
- Jordloppar angriper korsblommiga växter (kål, rädisa), inte purjolök. Att lista dem skapar förvirring.
- **Fix:** Tagit bort jordloppar från problemlistan.
- Källor: Jordbruksverket, SLU faktablad

### 6. Rädisa: Stavfel "svällcr" i profiltexten
- Fil: `src/data/crops/radisa.ts`
- Tekniskt ett kritiskt fel - stavfelet "svällcr" i en synlig textsträng.
- **Fix:** Rattat till "sväller".

---

## Viktiga korrigeringar (åtgärdade)

### Rödbeta

7. **rowSpacing 25-30 cm för snävt** - Runåbergs anger 30-50 cm radavstånd.
   - Fix: Ändrat till 30-40 cm.

8. **Sortnamn Detroit 2 bör vara Detroit Dark Red 2** - Det korrekta handelsnamnet hos svenska fröhandlare.
   - Fix: Ändrat till Detroit Dark Red 2.

9. **Isoleringsavstånd 800 m för kort** - Rödbeta vindpollineras och kan korsas med mangold och vilda betaformer. Seed Savers Exchange rekommenderar 1-5 miles.
   - Fix: Ändrat till 1-2 km.

### Purjolök

10. **Purjolöksminare bör heta Purjolöksmal** - Korrekt svenskt namn på skadedjuret (Acrolepiopsis assectella).
    - Fix: Ändrat till Purjolöksmal.

11. **Carentan 2 bör vara Carentan 3** - Carentan 3 är den vanligare sorten i svenska frökataloger.
    - Fix: Ändrat till Carentan 3.

12. **Zon 6 förodling Mar för sent** - Med kort säsong i norra Sverige behöver purjolök förodlas redan Feb-Mar för att hinna.
    - Fix: Ändrat till Feb-Mar.

### Vitlök

13. **Ljubasha bör bytas mot Ivan** - Ljubasha finns inte hos svenska fröhandlare. Ivan (hardneck) finns hos Runåbergs och Klostra.
    - Fix: Bytt Ljubasha mot Ivan (hardneck, Porcelain-typ).

14. **pH ideal 6.5 för lågt** - Vitlök trivs bäst i kalkrik, neutral jord. Odlingsguide.se och Runåbergs anger pH 7.0 som ideal.
    - Fix: Ändrat pH ideal från 6.5 till 7.0.

15. **Zon 1 plantering Okt bör vara Sep-Okt** - 4-6 veckor före tjäle är standard. I zon 1 kan tjälen komma redan i oktober.
    - Fix: Ändrat till Sep-Okt.

### Rädisa

16. **Runder Schwarzer och Daikon är rättikar, inte rädisor** - Dessa är Raphanus sativus var. longipinnatus/niger, helt andra grönsaker med annan odlingstid och användning.
    - Fix: Tagit bort Runder Schwarzer och Daikon från sortlistan.

17. **Dagar 20-30 för optimistiskt** - Runåbergs anger 4-6 veckor (28-42 dagar) för flertalet sorter.
    - Fix: Ändrat till 22-35 dagar.

18. **Nya OP-sorter behövdes** - Efter att rättikssorterna togs bort behövdes fler svenska OP-sorter.
    - Fix: Lagt till Saxa 2 och Plum Purple (båda finns hos svenska fröhandlare).

---

## Mindre noteringar (åtgärdade)

| # | Profil | Notering |
|---|--------|----------|
| 19 | Rödbeta | OP-markering saknades på alla 5 sorter - lagt till |
| 20 | Rödbeta | Chioggia och Burpees Golden zoner utökade till zon 6 (bekräftade av Impecta) |
| 21 | Rödbeta | Fröhållbarhet 4-5 år ändrat till 3-5 år (Runåbergs: 4 år, Cornell: 3-4 år) |
| 22 | Rödbeta | Växtföljd 3 år ändrat till 3-4 år för konsistens med mangold |
| 23 | Rödbeta | Spenat som dålig granne nyanserad - växtföljdsproblem, inte samodlingsproblem |
| 24 | Purjolök | Blauwgroene Winter - Bandit ändrat till Blauwgroene Winter (Bandit ej tillgänglig i SE) |
| 25 | Purjolök | OP-markering lagt till på alla 5 sorter |
| 26 | Purjolök | maxPerSqm 5 kg justerat till 4 kg (5 kg är ett optimistiskt maxvärde, inte normalt) |
| 27 | Vitlök | Planteringsdjup 5-8 cm ändrat till 4-6 cm (standard i svenska källor) |
| 28 | Vitlök | Frilandsodling utökad till zon 7 (Sara Backmo bekräftar vitlök i zon 7) |
| 29 | Vitlök | Sallat borttagen som dålig granne (ej belagt med källor) |
| 30 | Vitlök | Stavfel kalkstensmjöl rättat |
| 31 | Vitlök | OP-markering och zoner uppdaterade för alla 5 sorter |
| 32 | Rädisa | Cherry Belle och French Breakfast OP-markerade |
| 33 | Rädisa | Fröhållbarhet 4-5 år justerat till 3-5 år |
| 34 | Rädisa | Höstsådd tillagd för zon 6 (jul-aug med skörd aug-sep) |

---

## OP/F1-status alla sorter

| Sort | Profil | Status | Korrekt i data? |
|------|--------|--------|:---:|
| Detroit Dark Red 2 | Rödbeta | OP | Korrekt (namn rättat) |
| Chioggia | Rödbeta | OP/heirloom | Korrekt |
| Burpees Golden | Rödbeta | OP | Korrekt |
| Moneta | Rödbeta | OP | Korrekt |
| Cylindra | Rödbeta | OP | Korrekt |
| Carentan 3 | Purjolök | OP | Korrekt (nummer rättat) |
| Musselburgh | Purjolök | OP/heirloom | Korrekt |
| Blauwgroene Winter | Purjolök | OP | Korrekt (Bandit borttagen) |
| Pandora | Purjolök | OP | Korrekt |
| Bulgarian Giant | Purjolök | OP | Korrekt |
| Thermidrome | Vitlök | OP softneck | Korrekt (typ rättat) |
| Sprint | Vitlök | OP hardneck | Korrekt (typ rättat) |
| Messidrome | Vitlök | OP softneck | Korrekt (typ rättat) |
| Ivan | Vitlök | OP hardneck | Korrekt (ny, ersätter Ljubasha) |
| Printanor | Vitlök | OP softneck | Korrekt |
| Cherry Belle | Rädisa | OP | Korrekt |
| French Breakfast | Rädisa | OP | Korrekt |
| Saxa 2 | Rädisa | OP | Korrekt (ny) |
| Plum Purple | Rädisa | OP | Korrekt (ny) |
| Zlata | Rädisa | OP | Korrekt |

---

## Bekräftade korrekta uppgifter

- **Rödbeta:** Familj Amarantväxter, pH 6.0-7.0, groningstemperatur 7-30C, sadjup 1-2 cm, skörd 55-70 dagar, frösparning vindpollinerad Betaform
- **Purjolök:** Familj Amaryllidaceae, pH 6.0-7.5, avstånd 10-15 cm, skörd 120-180 dagar, zoner 1-7
- **Vitlök:** Odlingstid höst-till-sommar korrekt, skörd när blast gulnar (6-7 löv), härdighet zon 1-6 (utökat till 7), torkningsprocess 3-4 veckor
- **Rädisa:** Familj Korsblommiga, pH 6.0-7.0, avstånd 5 cm, snabb gröda 22-35 dagar, fröhållbarhet 3-5 år

---

## Källhänvisningar

### Frökataloger
- Runåbergs Fröer - vitlök (Ivan, Sprint), purjolök (Carentan 3, Musselburgh), rödbeta (Detroit Dark Red 2, Cylindra), rädisa (Saxa 2, French Breakfast)
- Impecta - rödbeta (Chioggia, Burpees Golden, Moneta), vitlök (Messidrome, Thermidrome), purjolök
- Lindbloms Frö - rödbeta, purjolök (Carentan 3), rädisa (Cherry Belle, Plum Purple)
- NordFrö - rädisa (Saxa 2, Plum Purple)
- Nelson Garden - rädisa, purjolök

### Svenska odlingskällor
- Klostra.se - vitlök (hardneck/softneck, Sprint, Thermidrome, Messidrome)
- Odla.nu - purjolök, vitlök
- Sara Backmo (sarabackmo.se) - vitlök i zon 7

### Myndigheter & forskning
- Jordbruksverket - skadedjur lista (purjolöksmal, jordloppar)
- SLU faktablad - purjolöksmal (Acrolepiopsis assectella)

### Internationella källor
- Seed Savers Exchange - isoleringsavstånd Beta vulgaris (1-5 miles)
- Cornell Vegetable Varieties - rödbeta fröhållbarhet

---

*Femte faktacheck-rapporten (batch 2 av session 22). Föregående: faktacheck-2026-03-02.md (mangold, kalrabbi, palsternacka, brytbona). Nästa: faktacheck-2026-03-02-batch3.md (squash, gurka, paprika, pumpa).*
