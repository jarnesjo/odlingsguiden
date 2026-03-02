# Odlingszoner - Faktacheck

Datum: 2026-03-02

## Bakgrund

Zonkartan publiceras av Riksförbundet Svensk Trädgård och gäller **härdighet för vedartade växter** (träd, buskar, rosor, fruktträd). Det är inte en frostdagskarta eller vegetationsperiodkarta, men det är det mest använda referenssystemet för svenska odlare.

Appen använder zonerna som ramverk för grönsaksguidning och lägger till egna uppskattningar av frostdatum och frostfria dagar. Det är rimligt men bör kommuniceras som ungefärliga värden.

## Kritiska fel i befintlig data

### 1. Gotland och Öland tillhör zon 1, inte zon 2

Alla kontrollerade källor placerar Öland och Gotland i zon 1. Det milda havsklimatet och de långa vegetationsperioderna gör dem till Sveriges mildaste odlingsområden.

### 2. Mälardalen tillhör zon 2, inte zon 4

Stockholm och Mälardalen placeras konsekvent i zon 2 av alla källor. Zon 4 ligger längre norrut/inåt landet.

## Regionbeskrivningar - korrigeringar

| Zon | Tidigare | Korrigerad | Notering |
|-----|----------|-----------|----------|
| 1 | Skånes kust, Halland | Skåne, Blekinge, Hallandskusten, Öland, Gotland | Mycket bredare - hela Skåne, inte bara kusten. Östkusten till Oskarshamn. |
| 2 | Sydvästra Sverige, Öland, Gotland | Göteborg, Stockholm, Mälardalen, Östgöta-/Västgötaslätten | Öland/Gotland bort (zon 1). Stockholm och Göteborg är nyckelstäder. |
| 3 | Sydöstra Sverige, Västkusten | Örebro, Växjö, Karlstad, inre Småland | "Västkusten" var missvisande - kusterna tillhör zon 1-2. |
| 4 | Mellansverige, Mälardalen | Smålands höglänta, Dalsland, Gävle, Sundsvall | Mälardalen bort (zon 2). Mer inland/norrut. |
| 5 | Södra Norrland, Dalarna | Dalarna, Norrlandskusten, Umeå | Inkluderar även inre Smålands höglänta. |
| 6 | Mellersta Norrland | Östersund, Luleå, norra Värmland | Luleå ligger i Norrbotten, inte "mellersta" Norrland. |
| 7 | Övre Norrland | Inlands-Norrland, nedre fjälltrakterna | "Övre Norrland" för vagt - det är nedre fjällzonen. |
| 8 | Fjälltrakter | Fjälltrakterna, Kiruna | Liten justering - lägg till stadsreferens. |

## Frostdata - bedömning

Frostdatum och frostfria dagar är appens egna uppskattningar (inte del av officiella zonkartan).

| Zon | Sista vårfrost | Frostfria dagar | Bedömning |
|-----|---------------|-----------------|-----------|
| 1 | ~mitten av april | ~200 | Optimistiskt. 50%-sannolikhet i Malmö är v16 (mitten april), 70% närmare slutet april. |
| 2 | ~slutet av april | ~180 | Rimligt. Stockholm ~30 april (50%), Göteborg ~21-25 april. |
| 3 | ~början av maj | ~165 | Rimligt. |
| 4 | ~mitten av maj | ~150 | Rimligt. |
| 5 | ~slutet av maj | ~130 | Lite optimistiskt för Umeå (närmare början juni vid 70%). |
| 6 | ~början av juni | ~110 | Rimligt. |
| 7 | ~mitten av juni | ~90 | Rimligt. |
| 8 | ~slutet av juni | ~70 | Rimligt. Kiruna 70% ~11 juni, men högfjällen senare. |

## Begrepp att vara tydlig med

- **Frostfria dagar**: dagar utan frost (0°C). Relevant för grönsakodling.
- **Vegetationsperiod**: dagar med medeltemperatur över +5°C. Längre än frostfria dagar.
- **Härdighetszon**: den officiella zonkartan - gäller vedartade växter, inte grönsaker.

Appen använder "frostfria dagar" vilket är det mest relevanta för odlingsguiden.

## Otydligheter och öppna frågor

- Zonerna har stora variationer lokalt - en skyddad innergård i zon 4 kan odla som zon 3. Mikroklimat är svårt att fånga.
- Kustnära vs inland inom samma zon kan skilja 2-3 veckor i frostdatum.
- Klimatförändringarna flyttar zonerna norrut - kartan uppdateras sällan.
- Zon 5 är knepig: inkluderar både inre Smålands höglänta och Norrlandskusten till Piteå - väldigt olika karaktär.

## Källor

- [Riksförbundet Svensk Trädgård - Zonkartan](https://svensktradgard.se/tradgardsrad/zonkartan/)
- [Riksförbundet Svensk Trädgård - Digitala zonkartan](https://svensktradgard.se/tradgardsrad/zonkartan/digitala-zonkartan/)
- [Odlarsidor - De svenska växtzonerna](https://www.odlarsidor.se/de-svenska-vaxtzonerna/)
- [Trädgårdstipset - Vad är en växtzon/odlingszon](https://trädgårdstipset.se/vaxtzon/)
- [Sveriges kommuner - Alla växtzoner](https://sverigeskommuner.net/vaxtzon)
- [OdlaÄtbart - Sista frost](https://odlaatbart.se/sista-frost/)
