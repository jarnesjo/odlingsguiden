import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const ZONE_INFO = {
  1: { name: "Zon 1", region: "Skånes kust, Halland", frost: "Sista vårfrost: ~mitten av april", season: "~200 frostfria dagar" },
  2: { name: "Zon 2", region: "Sydvästra Sverige, Öland, Gotland", frost: "Sista vårfrost: ~slutet av april", season: "~180 frostfria dagar" },
  3: { name: "Zon 3", region: "Sydöstra Sverige, Västkusten", frost: "Sista vårfrost: ~början av maj", season: "~165 frostfria dagar" },
  4: { name: "Zon 4", region: "Mellansverige, Mälardalen", frost: "Sista vårfrost: ~mitten av maj", season: "~150 frostfria dagar" },
  5: { name: "Zon 5", region: "Södra Norrland, Dalarna", frost: "Sista vårfrost: ~slutet av maj", season: "~130 frostfria dagar" },
  6: { name: "Zon 6", region: "Mellersta Norrland", frost: "Sista vårfrost: ~början av juni", season: "~110 frostfria dagar" },
  7: { name: "Zon 7", region: "Övre Norrland", frost: "Sista vårfrost: ~mitten av juni", season: "~90 frostfria dagar" },
  8: { name: "Zon 8", region: "Fjälltrakter", frost: "Sista vårfrost: ~slutet av juni", season: "~70 frostfria dagar" },
};

const DIFFICULTY_INFO = {
  "Enkel": { color: "#B7E4C7", icon: "🟢", description: "Kräver lite förkunskap. Direktså och skörda. Tålig och förlåtande." },
  "Medel": { color: "#FFF3CD", icon: "🟡", description: "Kräver förodling, regelbunden skötsel eller är känslig för väder/sjukdomar." },
  "Avancerad": { color: "#FDE8E1", icon: "🔴", description: "Kräver erfarenhet, specifika förhållanden eller mycket skötsel." },
};

const CROPS = {
  morot: {
    name: "Morot",
    emoji: "🥕",
    family: "Flockblommiga",
    familyLatin: "Apiaceae",
    difficulty: "Enkel",
    difficultyWhy: "Direktsås utomhus, tålig, kräver minimal skötsel efter gallring.",
    zones: { outdoor: [1, 2, 3, 4, 5, 6, 7], indoor: null, greenhouse: null },
    days: "70–80",
    spacing: "3–5 cm",
    rowSpacing: "25–30 cm",
    depth: "1 cm",
    ph: { min: 6.0, max: 6.8, ideal: 6.3 },
    optimalConditions: {
      sun: { level: "Sol–halvskugga", icon: "🌤️", detail: "Minst 6 timmar sol per dag för bäst resultat, men klarar halvskugga (4+ timmar). I halvskugga blir morötterna tunnare men sötare." },
      temperature: { min: 7, max: 24, ideal: "15–20°C", detail: "Gror redan vid 7°C men trivs bäst runt 15–20°C. Tål lätt frost – morötter blir faktiskt sötare efter frost!" },
      wind: { level: "Tålig", detail: "Låg profil – påverkas sällan av vind. Inga särskilda krav." },
    },
    watering: {
      need: "Medel",
      icon: "💧💧",
      summary: "Jämn fukt under hela säsongen – varken för blött eller för torrt. Ojämn bevattning ger spruckna eller håriga morötter.",
      phases: [
        { phase: "Groning (0–3 veckor)", need: "Hög", tip: "Håll jorden jämnt fuktig – fröna MÅSTE ha fukt för att gro. Torkar ytan ut dör groddarna. Vattna försiktigt med stril, gärna på morgonen." },
        { phase: "Tillväxt (3–8 veckor)", need: "Medel", tip: "Vattna 2–3 gånger i veckan om det inte regnar. Djupvattna hellre än att stänka lite ofta – det tvingar rötterna att söka sig nedåt." },
        { phase: "Rotutveckling (8+ veckor)", need: "Medel–Låg", tip: "Minska vattningen något. För mycket vatten nu ger vattniga morötter med sämre smak. Jämn fukt är viktigare än mycket fukt." },
      ],
      mistakes: [
        "Ojämn vattning (torrt→blött→torrt) ger spruckna morötter",
        "Överspolning vid sådd – fröna sköljs ihop i klumpar",
        "Vattna ovanifrån i full sol – dropparna kan bränna blasten",
      ],
      tip: "Mulcha med gräsklipp eller halm efter uppkomst – det håller fukten jämn och minskar behovet av vattning rejält.",
    },
    soil: "Lucker, sandblandad, stenfri jord. Undvik nygödslad jord – morötter blir krokiga och kluvna.",
    soilTips: [
      "Gräv djupt (30 cm) och ta bort stenar",
      "Blanda in sand om du har lerjord",
      "Använd väl brunnen kompost från förra året – aldrig färsk gödsel",
    ],
    timeline: {
      1: [ { phase: "Direktså", months: "Apr", icon: "🌱" }, { phase: "Gallra", months: "Maj", icon: "✂️" }, { phase: "Gödsla (lätt)", months: "Jun", icon: "💧" }, { phase: "Skörd tidig", months: "Jul", icon: "🥕" }, { phase: "Huvudskörd", months: "Aug–Sep", icon: "🎉" } ],
      4: [ { phase: "Direktså", months: "Maj", icon: "🌱" }, { phase: "Gallra", months: "Jun", icon: "✂️" }, { phase: "Gödsla (lätt)", months: "Jun–Jul", icon: "💧" }, { phase: "Skörd tidig", months: "Aug", icon: "🥕" }, { phase: "Huvudskörd", months: "Sep", icon: "🎉" } ],
      6: [ { phase: "Direktså", months: "Jun", icon: "🌱" }, { phase: "Gallra", months: "Jul", icon: "✂️" }, { phase: "Gödsla (lätt)", months: "Jul", icon: "💧" }, { phase: "Huvudskörd", months: "Sep", icon: "🎉" } ],
    },
    nutritionData: [
      { month: "Apr", N: 20, P: 10, K: 10, label: "Sådd" },
      { month: "Maj", N: 60, P: 20, K: 15, label: "Tillväxt" },
      { month: "Jun", N: 80, P: 40, K: 25, label: "Bladtillväxt" },
      { month: "Jul", N: 40, P: 70, K: 50, label: "Rotutveckling" },
      { month: "Aug", N: 15, P: 80, K: 75, label: "Mognad" },
      { month: "Sep", N: 5, P: 50, K: 85, label: "Skörd" },
    ],
    nutritionTips: [
      { timing: "Vid sådd", tip: "Grundgödsla med brunnen kompost. Inget extra kväve." },
      { timing: "Tidig tillväxt", tip: "Lätt giva flytande alggödsel varannan vecka." },
      { timing: "Rotutveckling", tip: "Sluta med kväve. Ge kaliumrik gödsel (t.ex. vedaska) för smak och lagring." },
      { timing: "Mognad", tip: "Ingen gödsling. Låt morötterna mogna och utveckla sötma." },
    ],
    companions: {
      good: [
        { name: "Lök", emoji: "🧅", why: "Löken avskräcker morotsflugan med sin starka doft" },
        { name: "Salvia", emoji: "🌿", why: "Salvia maskerar morotsdoften och håller skadedjur borta" },
        { name: "Tomat", emoji: "🍅", why: "Tomatens starka doft förvirrar morotsflugan" },
        { name: "Purjolök", emoji: "🧅", why: "Samma effekt som vanlig lök – doftbarriär" },
      ],
      bad: [
        { name: "Dill", emoji: "🌿", why: "Samma familj (flockblommiga) – delar sjukdomar och skadedjur" },
        { name: "Palsternacka", emoji: "🥕", why: "Samma familj – konkurrerar och delar morotsflugan" },
        { name: "Selleri", emoji: "🥬", why: "Samma familj – ökar risk för sjukdomar" },
      ],
    },
    rotation: {
      avoid: ["Palsternacka", "Persilja", "Selleri", "Dill", "Fänkål"],
      avoidWhy: "Alla tillhör flockblommiga – delar sjukdomar och skadedjur. Vänta minst 3 år.",
      goodBefore: ["Baljväxter (ärtor, bönor)", "Lök", "Vitlök"],
      goodBeforeWhy: "Baljväxter fixerar kväve i jorden. Lökväxter sanerar mot svampsjukdomar.",
      goodAfter: ["Kål", "Sallat", "Spenat"],
      goodAfterWhy: "Bladgrönsaker drar nytta av den djupt bearbetade jorden moroten lämnar efter sig.",
    },
    varieties: [
      { name: "Nantes 2", zones: [1,2,3,4,5,6,7], note: "Klassikern. Pålitlig överallt." },
      { name: "Autumn King", zones: [1,2,3,4,5,6,7], note: "Stor, bra för lagring." },
      { name: "Flyaway F1", zones: [1,2,3,4,5,6,7], note: "Morotsfluge-resistent!" },
      { name: "Purple Haze", zones: [1,2,3,4,5,6], note: "Lila utsida, orange insida. Nyttig." },
    ],
    problems: [
      { name: "Morotsflugan", symptom: "Rostbruna gångar i roten", fix: "Samodla med lök. Fiberduk. Så efter mitten av juni." },
      { name: "Krokiga morötter", symptom: "Delade, krokiga rötter", fix: "Stenig eller nygödslad jord. Rensa stenar, använd gammal kompost." },
      { name: "Gröna toppar", symptom: "Grön missfärgning vid toppen", fix: "Kupa jord runt topparna när de sticker upp." },
    ],
    goodToKnow: [
      { icon: "⚠️", title: "Så aldrig i nygödslad jord", text: "Färsk gödsel (eller för mycket kväve) ger krokiga, kluvna och håriga morötter. Använd bara väl brunnen kompost – helst från förra året.", severity: "warning" },
      { icon: "🪨", title: "Stenar = krokiga morötter", text: "Varje sten i jorden tvingar roten att växa runt den. Rensa ordentligt ner till 30 cm djup, eller odla i upphöjd bädd med stenfri jord.", severity: "warning" },
      { icon: "🔁", title: "Så i omgångar – inte allt på en gång", text: "Så med 3 veckors mellanrum från april till juni. Då får du färska morötter hela sommaren och hösten istället för 40 kg samtidigt i september.", severity: "tip" },
      { icon: "🧊", title: "Tål frost – en av de sista du skördar", text: "Morötter blir faktiskt sötare efter en lätt frost! Du kan lämna dem i jorden långt in på hösten. Täck med halm så klarar de sig ännu längre.", severity: "tip" },
      { icon: "🥕", title: "Gallra utan dåligt samvete", text: "Det känns slösigt att dra upp små plantor, men om du inte gallrar får du bara tunna, korta morötter. Var brutal – 3–5 cm avstånd.", severity: "tip" },
    ],
    sowing: {
      method: "direct", // "direct", "indoor", "both"
      label: "Direktsådd",
      description: "Moroten sås direkt på friland – den ogillar att bli omplacerad eftersom pålroten störs.",
      steps: [
        "Luckra jorden djupt (minst 30 cm) och kratta till fin struktur",
        "Dra ett grunt spår (ca 1 cm) med en pinne eller krattskaft",
        "Så fröna glest – blanda gärna med sand för jämnare fördelning",
        "Täck med ett tunt lager jord eller vermiculit",
        "Vattna försiktigt med stril – fröna får inte spolas bort",
        "Gallra till 3–5 cm avstånd när plantorna är 5 cm höga",
      ],
      tips: [
        "Så i omgångar med 3 veckors mellanrum för skörd hela säsongen",
        "Blötlägg fröna i ljummet vatten 12 timmar före sådd – snabbar på groningen",
        "Täck med fiberduk de första veckorna mot morotsflugan",
      ],
      indoorWeeks: null,
    },
    seedSaving: {
      difficulty: "Avancerad",
      type: "Korspollinerare",
      biennial: true,
      description: "Moroten är tvåårig – den bildar frö först andra året. Du måste överväntra roten och plantera ut den igen på våren.",
      steps: [
        "Välj de finaste morötterna vid skörd och spara dem",
        "Lagra rötterna i sand i en kall (men frostfri) källare över vintern",
        "Plantera ut rötterna tidigt på våren med toppen i marknivå",
        "Moroten skjuter blomstjälk under sommaren – vita flockar",
        "Låt fröna mogna tills flockarna börjar bli bruna",
        "Klipp av hela flocken och torka inomhus i en papperspåse",
        "Gnugga loss fröna och rensa bort skräp",
      ],
      isolation: "Korsar med vild morot och andra morotssorter. Odla bara en sort för frö, eller isolera med minst 500 m.",
      storageYears: "2–3 år",
      tip: "Märk alltid sort och år! Morotsfrö tappar grobarhet snabbt efter 3 år.",
    },
    storage: {
      shelfLife: "6–8 månader",
      methods: [
        { method: "I landet (med täckning)", icon: "🌿", duration: "Ända till december/januari", description: "Låt morötterna ligga kvar i jorden och täck med ett tjockt lager halm, löv eller fiberduk. Morötterna blir sötare av kylan och håller sig fräscha ända tills marken fryser på djupet.", best: true },
        { method: "Sandlåda i källare", icon: "📦", duration: "4–6 månader", description: "Lägg morötterna i lager med fuktig sand i en låda. Förvara svalt (1–4°C) och mörkt. Klassisk metod som fungerar utmärkt. Kolla med jämna mellanrum att ingen börjat mögla.", best: false },
        { method: "Kylskåp", icon: "❄️", duration: "3–4 veckor", description: "Klipp av blasten (den suger fukt ur roten). Lägg i plastpåse med några hål. Fungerar för kortare lagring.", best: false },
        { method: "Frysa", icon: "🧊", duration: "8–12 månader", description: "Skala, skär i bitar och blanchera 2–3 minuter. Kyl snabbt i isvatten, torka av och frys in. Perfekt för soppa och gryta.", best: false },
      ],
      tips: [
        "Ta alltid bort blasten direkt vid skörd – den suger fukt och näring ur roten",
        "Tvätta INTE morötter som ska lagras länge – jord skyddar faktiskt",
        "Skadade morötter lagras dåligt – ät dem först",
        "Morötter som börjar bli slappa kan räddas genom att ställa dem i kallt vatten några timmar",
      ],
    },
    harvestCalc: { minPerSqm: 1.5, maxPerSqm: 2.5, unit: "kg" },
  },
  tomat: {
    name: "Tomat",
    emoji: "🍅",
    family: "Nattskatta",
    familyLatin: "Solanaceae",
    difficulty: "Medel",
    difficultyWhy: "Kräver förodling inomhus (6–8 v), regelbunden gödsling, uppbindning och är känslig för bladmögel.",
    zones: { outdoor: [1, 2, 3, 4, 5, 6], indoor: null, greenhouse: [1, 2, 3, 4, 5, 6, 7, 8] },
    days: "60–85",
    spacing: "40–50 cm",
    rowSpacing: "60–80 cm",
    depth: "0,5 cm",
    ph: { min: 6.0, max: 7.0, ideal: 6.5 },
    optimalConditions: {
      sun: { level: "Full sol", icon: "☀️", detail: "Minst 8 timmar direkt sol per dag. Tomater ÄLSKAR sol – mer sol = sötare tomater. I halvskugga får du mest blad och lite frukt." },
      temperature: { min: 10, max: 35, ideal: "20–25°C", detail: "Värmekrävande. Under 10°C stannar tillväxten. Fruktsättning sker bäst mellan 18–25°C. Över 35°C slutar blommorna att sätta frukt." },
      wind: { level: "Skyddat", detail: "Vindkänslig – stjälkar och blad skadas lätt. Plantera gärna intill en södervägg eller i växthus. Lite vind hjälper dock pollineringen." },
    },
    watering: {
      need: "Hög",
      icon: "💧💧💧",
      summary: "Tomater är törstiga men kräsna – de vill ha JÄMN fukt, aldrig ojämnt. Vattna alltid vid basen, aldrig ovanifrån (bladmögel!).",
      phases: [
        { phase: "Plantor inomhus", need: "Låg–Medel", tip: "Håll jorden lätt fuktig men aldrig blöt. Övervatning är nybörjarmisstag #1 inomhus – rötterna ruttnar." },
        { phase: "Nyplanterade (vecka 1–2)", need: "Medel", tip: "Vattna vid plantering och sedan varannan dag tills plantan är etablerad. Inte för mycket – tvinga rötterna att söka sig nedåt." },
        { phase: "Tillväxt & blomning", need: "Hög", tip: "Vattna djupt 2–3 gånger i veckan. Tomater i växthus kan behöva vatten varje dag i högsommaren. Vattna alltid på morgonen." },
        { phase: "Fruktsättning & mognad", need: "Hög men jämn", tip: "Ojämn vattning nu = spruckna tomater och blomändsröta. Hellre lite vatten ofta än mycket sällan. Mulcha!" },
      ],
      mistakes: [
        "Vattna ovanifrån – våta blad = bladmögel, tomaternas största fiende",
        "Ojämn vattning – spruckna frukter och blomändsröta (svart botten)",
        "Övervattning av småplantor inomhus – stammen ruttnar vid basen",
        "Vattna mitt på dagen i full sol – vatnet avdunstar innan rötterna hinner ta upp det",
      ],
      tip: "Installera droppbevattning eller grävda PET-flaskor vid basen – det är det bästa du kan göra för dina tomater. Jämn fukt utan att blöta bladen.",
    },
    soil: "Näringsrik, väldränerad jord. Tomater är storätare – de vill ha mycket näring genom hela säsongen.",
    soilTips: [
      "Blanda in rikligt med kompost före plantering",
      "Mulcha med gräsklipp för jämn fukt",
      "Kalka om pH är under 6.0",
    ],
    timeline: {
      1: [ { phase: "Förodla inomhus", months: "Feb–Mar", icon: "🏠" }, { phase: "Härda av", months: "Apr", icon: "🌤️" }, { phase: "Plantera ut", months: "Maj", icon: "🌱" }, { phase: "Stödja & beskära", months: "Maj–Jul", icon: "🪴" }, { phase: "Gödsla regelbundet", months: "Maj–Aug", icon: "💧" }, { phase: "Skörd", months: "Jul–Sep", icon: "🍅" } ],
      4: [ { phase: "Förodla inomhus", months: "Mar", icon: "🏠" }, { phase: "Härda av", months: "Maj", icon: "🌤️" }, { phase: "Plantera ut", months: "Jun", icon: "🌱" }, { phase: "Stödja & beskära", months: "Jun–Jul", icon: "🪴" }, { phase: "Gödsla regelbundet", months: "Jun–Aug", icon: "💧" }, { phase: "Skörd", months: "Jul–Sep", icon: "🍅" } ],
      6: [ { phase: "Förodla inomhus", months: "Mar", icon: "🏠" }, { phase: "Härda av", months: "Jun", icon: "🌤️" }, { phase: "Plantera ut (växthus rekm.)", months: "Jun", icon: "🌱" }, { phase: "Stödja & beskära", months: "Jun–Jul", icon: "🪴" }, { phase: "Gödsla regelbundet", months: "Jun–Aug", icon: "💧" }, { phase: "Skörd", months: "Aug–Sep", icon: "🍅" } ],
    },
    nutritionData: [
      { month: "Mar", N: 15, P: 10, K: 5, label: "Förodling" },
      { month: "Apr", N: 30, P: 20, K: 10, label: "Tillväxt inomhus" },
      { month: "Maj", N: 50, P: 30, K: 20, label: "Avhärdning" },
      { month: "Jun", N: 70, P: 50, K: 35, label: "Etablering ute" },
      { month: "Jul", N: 60, P: 75, K: 65, label: "Blomning & frukt" },
      { month: "Aug", N: 40, P: 80, K: 85, label: "Mognad" },
      { month: "Sep", N: 15, P: 40, K: 60, label: "Sen skörd" },
    ],
    nutritionTips: [
      { timing: "Förodling (mars–april)", tip: "Svag näringslösning. Tomater som små klarar lite." },
      { timing: "Utplantering", tip: "Grundgödsla med kompost + benmjöl i planteringsgropen." },
      { timing: "Blomning", tip: "Byt till kaliumrik gödsel (tomatgödsel). Varannan vecka." },
      { timing: "Fruktsättning", tip: "Fortsätt med kalium. Minska kväve – annars får du blad istället för frukt." },
    ],
    companions: {
      good: [
        { name: "Basilika", emoji: "🌿", why: "Förbättrar smaken och håller bladlöss borta" },
        { name: "Morot", emoji: "🥕", why: "Luckrar jorden runt tomatrötterna" },
        { name: "Ringblomma", emoji: "🌼", why: "Lockar pollinerare och avskräcker vita flygare" },
        { name: "Persilja", emoji: "🌿", why: "Lockar nyttiga rovinsekter" },
      ],
      bad: [
        { name: "Potatis", emoji: "🥔", why: "Samma familj (nattskatta) – delar bladmögel och andra sjukdomar" },
        { name: "Fänkål", emoji: "🌿", why: "Hämmar tomatens tillväxt genom allelopati" },
        { name: "Kål", emoji: "🥬", why: "Konkurrerar om näring – båda är storätare" },
      ],
    },
    rotation: {
      avoid: ["Potatis", "Paprika", "Aubergine", "Chili"],
      avoidWhy: "Alla nattskatta – delar bladmögel, fusarium. Vänta minst 3–4 år.",
      goodBefore: ["Baljväxter", "Lök", "Gröngödsling"],
      goodBeforeWhy: "Kvävefixering från baljväxter + sanering från lökväxter.",
      goodAfter: ["Rotgrönsaker", "Baljväxter", "Sallat"],
      goodAfterWhy: "Jorden är fortfarande näringsrik – bra för måttliga ätare.",
    },
    varieties: [
      { name: "Sungold F1", zones: [1,2,3,4,5,6], note: "Söta cocktailtomater. Extremt populär." },
      { name: "Moneymaker", zones: [1,2,3,4,5,6], note: "Pålitlig klassiker. Bra för nybörjare." },
      { name: "Black Krim", zones: [1,2,3,4,5], note: "Mörk, komplex smak. Wow-faktor." },
      { name: "Polar Star", zones: [1,2,3,4,5,6,7], note: "Köldtålig! Bra för norra Sverige." },
    ],
    problems: [
      { name: "Bladmögel", symptom: "Bruna fläckar på bladen, sprider sig snabbt", fix: "Luftig plantering, vattna vid basen, ta bort angripna blad direkt." },
      { name: "Blomändsröta", symptom: "Svart, insjunken botten på frukten", fix: "Kalciumbrist p.g.a. ojämn bevattning. Vattna jämnt, mulcha." },
      { name: "Vita flygare", symptom: "Små vita insekter under bladen", fix: "Gula klisterfällor. Samodla med ringblomma och tagetes." },
    ],
    goodToKnow: [
      { icon: "✂️", title: "Tjuvskott – din viktigaste rutin", text: "Ta bort alla sidoskott (tjuvskott) som växer i bladbecken. Annars får du en stor buske med massor av blad men lite frukt. Kolla varannan dag under högsommaren.", severity: "warning" },
      { icon: "💧", title: "Vattna jämnt – aldrig ojämnt", text: "Ojämn bevattning (torrt → blött → torrt) ger blomändsröta (svarta bottnar) och spruckna frukter. Bättre med lite vatten ofta än mycket sällan. Mulcha!", severity: "warning" },
      { icon: "🍃", title: "Ta bort nedre bladen", text: "Klipp bort alla blad under den lägsta fruktklassen. Det förbättrar luftcirkulationen och minskar risken för bladmögel drastiskt.", severity: "tip" },
      { icon: "🏠", title: "Växthus gör enorm skillnad", text: "Även ett enkelt plasttunnelväxthus förlänger säsongen med 4–6 veckor och skyddar mot bladmögel. Tomater i växthus vs utomhus i Sverige är som natt och dag.", severity: "tip" },
      { icon: "🟢", title: "Gröna tomater? Ingen panik", text: "I slutet av säsongen: plocka gröna tomater och lägg dem i en papperspåse med ett äpple. Etylen från äpplet eftermognar dem inomhus på 1–2 veckor.", severity: "tip" },
      { icon: "⚠️", title: "Plantera ALDRIG bredvid potatis", text: "Tomat och potatis är samma familj och delar bladmögel. En sjuk potatisplanta kan smitta dina tomater på några dagar. Håll dem så långt ifrån varandra som möjligt.", severity: "warning" },
    ],
    sowing: {
      method: "indoor", // "direct", "indoor", "both"
      label: "Förodling inomhus",
      description: "Tomater måste förodlas inomhus eftersom de behöver lång, varm säsong. Direktsådd utomhus fungerar inte i Sverige.",
      steps: [
        "Fyll små krukor eller pluggbrätten med såjord",
        "Lägg 1–2 frön per kruka, 0,5 cm djupt",
        "Täck med plastfolie eller lock för att hålla fukt – ta bort när groddarna syns",
        "Placera ljust och varmt (20–25°C) – fönsterbräda söderut eller växtbelysning",
        "Omplantera till större kruka när plantan har 2–4 riktiga blad",
        "Härda av 1–2 veckor före utplantering: ställ ut dagtid, in på natten",
        "Plantera ut när risken för frost är över – plantera djupt (tomat bildar rötter på stjälken)",
      ],
      tips: [
        "Starta 6–8 veckor före planerad utplantering",
        "Så inte för tidigt – utdragna, bleka plantor klarar sig sämre",
        "Använd växtbelysning om du inte har tillräckligt med solljus",
      ],
      indoorWeeks: "6–8 veckor",
    },
    seedSaving: {
      difficulty: "Enkel",
      type: "Självpollinerare",
      biennial: false,
      description: "Tomaten är självpollinerare och ettårig – en av de enklaste grödorna att ta frö på. Perfekt att börja med!",
      steps: [
        "Välj en mogen, fin frukt från din bästa planta",
        "Skär tomaten på mitten och skrapa ut fröna med gelémassan",
        "Lägg fröna + gelé i ett glas med lite vatten",
        "Låt jäsa 2–3 dagar vid rumstemperatur – det bildas en hinna på ytan (det är normalt!)",
        "Skölj bort gelémassan under rinnande vatten i en sil",
        "Lägg fröna på hushållspapper och låt torka helt (3–5 dagar)",
        "Förvara i märkt papperspåse, torrt och svalt",
      ],
      isolation: "Självpollinerare – olika sorter kan odlas nära varandra utan korsning. Undantag: stora potatisbladiga sorter kan korsa lättare.",
      storageYears: "4–6 år",
      tip: "OBS! F1-hybrider (t.ex. Sungold F1) ger inte sortäkta frö – ta bara frö från fasta sorter som Moneymaker eller Black Krim.",
    },
    storage: {
      shelfLife: "1–2 veckor (färsk) / 12 mån (konserverad)",
      methods: [
        { method: "Rumstemperatur (bäst för smaken!)", icon: "🍅", duration: "5–7 dagar", description: "Tomater ska ALDRIG i kylen – kylan dödar smaken och gör dem mjöliga. Förvara i rumstemperatur, stjälksidan uppåt, borta från direkt solljus.", best: true },
        { method: "Eftermognad (gröna tomater)", icon: "🟢", duration: "1–3 veckor", description: "Plocka gröna tomater i slutet av säsongen. Lägg i papperspåse med ett äpple. Etylen från äpplet mognar dem. Kolla varannan dag.", best: false },
        { method: "Torka", icon: "☀️", duration: "6–12 månader", description: "Skär i skivor, salta lätt och torka i ugn på 70°C i 6–8 timmar (eller i mattork). Förvara i lufttät burk. Fantastiska i matlagning.", best: false },
        { method: "Frysa (hela)", icon: "🧊", duration: "8–12 månader", description: "Frys hela tomater rakt av – inget skalning behövs! Skalet lossnar av sig själv under rinnande vatten när du tinar dem. Perfekt för sås och soppa.", best: false },
        { method: "Passata / inkokning", icon: "🫙", duration: "12+ månader", description: "Koka ner till passata eller hela konserverade tomater. Tillsätt lite citronsyra för säker konservering. Mest tidskrävande men bästa långtidslagringen.", best: false },
      ],
      tips: [
        "Aldrig i kylen! Det förstör cellstrukturen och smaken – det är det vanligaste misstaget",
        "Förvara med stjälksidan uppåt – det mjuka partiet klarar sig bättre utan tryck",
        "Övermogna tomater? Gör sås, salsa eller gazpacho samma dag",
        "Cherry-tomater håller sig längre än stora sorter",
        "Skörda helst med en bit stjälk kvar – håller sig bättre",
      ],
    },
    harvestCalc: { minPerSqm: 2, maxPerSqm: 4, unit: "kg" },
  },
  potatis: {
    name: "Potatis",
    emoji: "🥔",
    family: "Nattskatta",
    familyLatin: "Solanaceae",
    difficulty: "Enkel",
    difficultyWhy: "Sätts direkt utomhus, tålig, kräver bara kupning och vattning. Svårt att misslyckas helt.",
    zones: { outdoor: [1, 2, 3, 4, 5, 6, 7], indoor: null, greenhouse: null },
    days: "60–120",
    spacing: "30–35 cm",
    rowSpacing: "60–70 cm",
    depth: "10–15 cm",
    ph: { min: 5.0, max: 6.5, ideal: 5.5 },
    optimalConditions: {
      sun: { level: "Full sol", icon: "☀️", detail: "Minst 6–8 timmar sol per dag. Blasten behöver sol för att producera energi till knölarna. I skugga: mycket blast, små knölar." },
      temperature: { min: 7, max: 30, ideal: "15–20°C", detail: "Jorden bör vara minst 8°C vid sättning. Knölbildning bäst vid 15–18°C. Över 25°C minskar knölbildningen – potatisen 'vilar'." },
      wind: { level: "Tålig", detail: "Blasten är relativt tålig. Inga särskilda vindkrav. Höga kupor ger extra stabilitet." },
    },
    watering: {
      need: "Medel–Hög",
      icon: "💧💧",
      summary: "Potatis behöver jämn fukt, speciellt under knölbildningen (blomning). Vattningsmomentet är det som avgör om du får en OK skörd eller en fantastisk skörd.",
      phases: [
        { phase: "Sättning till uppkomst", need: "Låg", tip: "Vattna vid sättning men sedan sparsamt. Jorden ska vara fuktig men inte blöt – för mycket vatten nu ger röta." },
        { phase: "Blasttillväxt", need: "Medel", tip: "Öka vattningen gradvis. Vattna vid basen, inte ovanifrån – det minskar risken för bladmögel." },
        { phase: "Blomning = knölbildning", need: "Hög", tip: "DEN viktigaste perioden! När potatisen blommar bildas knölarna. Jämn, riklig fukt nu ger fler och större knölar. Torka under blomningen kostar dig halva skörden." },
        { phase: "Mognad (efter blomning)", need: "Låg", tip: "Minska vattningen. Potatisen behöver 'härdas' med torrare jord. Sluta vattna helt 2 veckor före skörd." },
      ],
      mistakes: [
        "Vattna för mycket vid sättning – sättknölarna ruttnar innan de hinner gro",
        "Torka under blomningen – den enskilt största orsaken till dålig skörd",
        "Vattna ovanifrån sent på dagen – stående fukt på bladen = bladmögel",
        "Fortsätta vattna ända fram till skörd – ger vattnig potatis som lagras dåligt",
      ],
      tip: "Kolla jordfukten med fingret under blomningen. Stick ner 5 cm – känns det torrt, vattna direkt. Det här är veckan som avgör din skörd.",
    },
    soil: "Lös, väldränerad jord. Potatis trivs bäst i lätt sur jord – hög pH ger skorv. Undvik nyligen kalkad jord.",
    soilTips: [
      "Luckra djupt – kompakt jord ger små, missformade knölar",
      "Blanda in brunnen kompost eller lövmull före plantering",
      "Undvik kalk samma år – det ökar risken för skorv rejält",
    ],
    timeline: {
      1: [ { phase: "Förgro inomhus", months: "Mar", icon: "🌱" }, { phase: "Sätt potatis", months: "Apr", icon: "🥔" }, { phase: "Kupa (1:a gången)", months: "Maj", icon: "⛰️" }, { phase: "Kupa (2:a gången)", months: "Jun", icon: "⛰️" }, { phase: "Tidig skörd (färskpotatis)", months: "Jun–Jul", icon: "🎉" }, { phase: "Huvudskörd", months: "Aug–Sep", icon: "🥔" } ],
      4: [ { phase: "Förgro inomhus", months: "Apr", icon: "🌱" }, { phase: "Sätt potatis", months: "Maj", icon: "🥔" }, { phase: "Kupa (1:a gången)", months: "Jun", icon: "⛰️" }, { phase: "Kupa (2:a gången)", months: "Jul", icon: "⛰️" }, { phase: "Tidig skörd", months: "Jul", icon: "🎉" }, { phase: "Huvudskörd", months: "Aug–Sep", icon: "🥔" } ],
      6: [ { phase: "Förgro inomhus", months: "Apr–Maj", icon: "🌱" }, { phase: "Sätt potatis", months: "Jun", icon: "🥔" }, { phase: "Kupa", months: "Jun–Jul", icon: "⛰️" }, { phase: "Huvudskörd", months: "Sep", icon: "🥔" } ],
    },
    nutritionData: [
      { month: "Apr", N: 15, P: 15, K: 10, label: "Förgroning" },
      { month: "Maj", N: 60, P: 30, K: 20, label: "Uppkomst" },
      { month: "Jun", N: 80, P: 50, K: 40, label: "Blasttillväxt" },
      { month: "Jul", N: 40, P: 75, K: 70, label: "Knölbildning" },
      { month: "Aug", N: 15, P: 60, K: 85, label: "Mognad" },
      { month: "Sep", N: 5, P: 30, K: 60, label: "Skörd" },
    ],
    nutritionTips: [
      { timing: "Före plantering", tip: "Mylla ner brunnen stallgödsel (2–4 kg/m²). Aldrig färsk gödsel – potatisen tar smak." },
      { timing: "Vid uppkomst (maj–juni)", tip: "Lätt kvävegiva om blasten är blek. Men var försiktig – för mycket kväve ger jätteblast och pytteknölar." },
      { timing: "Knölbildning (juli)", tip: "Kalium är nyckeln nu. Vedaska eller kaliumrik gödsel förbättrar skalkvalitet och lagring." },
      { timing: "Mognad (aug)", tip: "Sluta gödsla. Klipp av blasten 2–3 veckor före skörd så skalet härdas." },
    ],
    companions: {
      good: [
        { name: "Bondböna", emoji: "🫘", why: "Fixerar kväve i jorden som potatisen drar nytta av" },
        { name: "Kål", emoji: "🥬", why: "Kompakt rotsystem som inte konkurrerar med potatisens djupa rötter" },
        { name: "Ringblomma", emoji: "🌼", why: "Avskräcker coloradobagge och nematoder" },
        { name: "Pepparrot", emoji: "🌿", why: "Traditionell samodling – pepparrot ska avskräcka potatisbagge" },
      ],
      bad: [
        { name: "Tomat", emoji: "🍅", why: "Samma familj (nattskatta) – delar bladmögel. En sjuk potatisplanta smittar tomaterna på dagar." },
        { name: "Squash", emoji: "🎃", why: "Konkurrerar hårt om näring och utrymme – båda är storätare" },
        { name: "Solros", emoji: "🌻", why: "Utsöndrar ämnen (allelopati) som hämmar potatisens tillväxt" },
      ],
    },
    rotation: {
      avoid: ["Tomat", "Paprika", "Aubergine", "Chili", "Potatis"],
      avoidWhy: "Alla nattskatta – delar bladmögel, brunröta och nematoder. Vänta minst 3–4 år. Odla ALDRIG potatis på samma plats två år i rad.",
      goodBefore: ["Baljväxter (ärtor, bönor)", "Gröngödsling", "Lök"],
      goodBeforeWhy: "Baljväxter fixerar kväve. Gröngödsling förbättrar jordstrukturen – perfekt före potatis.",
      goodAfter: ["Kål", "Sallat", "Morötter"],
      goodAfterWhy: "Potatisen lämnar efter sig en väl bearbetad, luckrad jord som rotgrönsaker och kål älskar.",
    },
    varieties: [
      { name: "Solist", zones: [1,2,3,4,5,6], note: "Sveriges populäraste färskpotatis. Tidig, krämig, fantastisk." },
      { name: "King Edward", zones: [1,2,3,4,5,6,7], note: "Klassikern. Mjölig, perfekt för mos och bakning. Bra lagring." },
      { name: "Mandel", zones: [1,2,3,4,5,6,7], note: "Norrlandsfavoriten. Fast, gul, otrolig smak. Lagrar utmärkt." },
      { name: "Asterix", zones: [1,2,3,4,5,6], note: "Rödskalig. Bra allround och fantastisk lagringspotatis." },
      { name: "Amandine", zones: [1,2,3,4,5], note: "Fransk gourmetpotatis. Fast, len, sjukt god. Motståndskraftig." },
    ],
    problems: [
      { name: "Bladmögel (brunröta)", symptom: "Bruna fläckar på blad och stjälk, vit beläggning under bladen vid fukt", fix: "Kupa högt. Välj resistenta sorter. Klipp av blasten direkt vid angrepp och bränn den. Skörda minst 2 veckor efter blastklippning." },
      { name: "Skorv", symptom: "Bruna, korkliknande fläckar på skalet", fix: "Håll pH lågt (under 6). Kalka inte samma år. Vattna jämnt under knölbildning." },
      { name: "Coloradobagge", symptom: "Gul-svartrandiga skalbaggar och röda larver äter bladen", fix: "Handplocka dagligen. Kolla undersidan av bladen efter äggklumpar (orange). Fiberduk tidigt." },
      { name: "Gröna knölar", symptom: "Grön missfärgning på potatisen", fix: "Kupa ordentligt! Grönt = solanin = giftigt. Ät aldrig grön potatis. Skala bort grönt eller kassera." },
    ],
    goodToKnow: [
      { icon: "☠️", title: "Grön potatis är giftig", text: "Gröna partier innehåller solanin – ett gift som inte försvinner vid kokning. Kupa ordentligt så att knölarna aldrig ser ljus. Ät aldrig potatis som är grön under skalet.", severity: "warning" },
      { icon: "⚠️", title: "Använd ALLTID sättpotatis", text: "Plantera aldrig matpotatis från affären. Sättpotatis är certifierad fri från sjukdomar. Matpotatis kan bära virus och bladmögel som sprids i din jord i åratal.", severity: "warning" },
      { icon: "⛰️", title: "Kupning är allt", text: "Kupa jord runt plantorna minst 2 gånger. Det skyddar mot ljus (gröna knölar), ökar skörden genom att ge mer utrymme för knölar, och förebygger bladmögel genom bättre dränering.", severity: "warning" },
      { icon: "🌿", title: "Klipp blasten – dubbel vinst", text: "Klipp av blasten 2–3 veckor före skörd. Det stoppar bladmögel från att sprida sig till knölarna OCH härdar skalet så potatisen lagras bättre.", severity: "tip" },
      { icon: "🕐", title: "Tidig vs sen – två helt olika grödor", text: "Färskpotatis (60 dagar, tunn skal, ät direkt) och lagringspotatis (100–120 dagar, tjockt skal) är nästan som att odla två olika saker. Bestäm i förväg vad du vill ha.", severity: "tip" },
      { icon: "🪣", title: "Fungerar i hink!", text: "Har du ingen trädgård? Potatis växer utmärkt i en stor hink, säck eller odlingslåda. 30 liter jord + 2 sättknölar = ca 2 kg potatis. Perfekt för balkong.", severity: "tip" },
    ],
    sowing: {
      method: "direct",
      label: "Sättning (lägga sättpotatis)",
      description: "Potatis sås inte från frö – du planterar sättknölar (certifierad sättpotatis). Förgro dem först för snabbare start och bättre skörd.",
      steps: [
        "Köp certifierad sättpotatis (ALDRIG matpotatis från butik)",
        "Förgro 3–4 veckor före plantering: lägg i äggkartong, ljust och svalt (8–15°C) tills groddarna är 1–2 cm",
        "Vänta tills jorden är minst 8°C – stick ner ett finger, det ska kännas behagligt",
        "Gräv en fåra eller enskilda hål, 10–15 cm djupt",
        "Lägg sättpotatisen med groddarna uppåt, 30–35 cm mellan varje",
        "Täck med jord och vattna lätt",
        "Kupa första gången när blasten är 15–20 cm hög – dra upp jord runt stjälkarna",
        "Kupa igen 2–3 veckor senare – ju högre kulle, desto fler knölar",
      ],
      tips: [
        "Förgrodda knölar ger 2–3 veckors försprång – stor skillnad i norr",
        "Sätt tidiga sorter (Solist, Rocket) först och sena sorter (King Edward) en vecka senare",
        "I norr (zon 5+): använd fiberduk de första veckorna för extra värme",
      ],
      indoorWeeks: "3–4 veckor förgroning",
    },
    seedSaving: {
      difficulty: "Enkel",
      type: "Knölförökning",
      biennial: false,
      description: "Potatis förökas vegetativt – du sparar helt enkelt de bästa knölarna från skörden och planterar dem nästa år. Inget frö behövs!",
      steps: [
        "Välj de friskaste plantorna under säsongen (markera med en pinne)",
        "Vid skörd: spara medelstora, felfria knölar från de bästa plantorna",
        "Låt knölarna torka i skugga en dag – aldrig i sol",
        "Lagra separat från matpotatis i papperspåse eller nätpåse",
        "Förvara mörkt, svalt (4–6°C) och frostfritt över vintern",
        "Kontrollera med jämna mellanrum – ta bort knölar som mjuknar eller möglar",
        "Förgro på våren precis som vanlig sättpotatis",
      ],
      isolation: "Vegetativ förökning – ingen korspollinering att oroa sig för. Varje knöl är en genetisk klon av moderplantan.",
      storageYears: "1 år (nytt utsäde varje säsong)",
      tip: "OBS: Efter 3–4 år med eget utsäde byggs sjukdomar upp. Köp ny certifierad sättpotatis vart tredje år för att bryta smittcykeln.",
    },
    storage: {
      shelfLife: "4–8 månader",
      methods: [
        { method: "Mörk källare / jordkällare", icon: "🏚️", duration: "6–8 månader", description: "Optimalt 4–6°C, mörkt och svalt med lite luftfuktighet. Förvara i trälåda, jutesäck eller papperskasse – aldrig i plast. Kolla med jämna mellanrum och ta bort knölar som börjar mjukna.", best: true },
        { method: "Kupa och lämna i jorden", icon: "🌿", duration: "2–4 veckor efter blasten dör", description: "Klipp blasten och låt potatisen ligga kvar i jorden. Skalet härdas och lagringskvaliteten ökar. Men gräv upp före ihållande regn eller frost.", best: false },
        { method: "Kylskåp (nödlösning)", icon: "❄️", duration: "2–3 veckor", description: "Fungerar i nödfall men kylan omvandlar stärkelse till socker – potatisen blir söt och brunfärgas vid stekning. Lägg i papperspåse, aldrig plast.", best: false },
        { method: "Frysa (tillagad)", icon: "🧊", duration: "8–12 månader", description: "Koka eller blanchera först – rå potatis fryser dåligt. Mos, gratäng och klyftpotatis fryser utmärkt. Vakuumförpacka för bäst resultat.", best: false },
      ],
      tips: [
        "ALDRIG i solljus – det ger gröna, giftiga knölar",
        "Förvara aldrig med äpplen – etylen får potatisen att gro snabbare",
        "Låt potatisen torka 1–2 timmar i skugga efter skörd innan du lagrar",
        "Skadade knölar lagras dåligt – ät dem först eller skär bort skadan",
        "Sen potatis (King Edward, Asterix) lagras MYCKET bättre än tidig (Solist)",
      ],
    },
    harvestCalc: { minPerSqm: 2, maxPerSqm: 4, unit: "kg" },
  },

  /* ═══════════════════════════════════════ */
  /* ══  BÄR                              ══ */
  /* ═══════════════════════════════════════ */
  hallon: {
    name: "Hallon",
    emoji: "🫐",
    category: "bär",
    family: "Rosväxter",
    familyLatin: "Rosaceae",
    perennial: true,
    lifespan: "10–15 år",
    difficulty: "Enkel",
    difficultyWhy: "Härdig buske som sprider sig villigt. Kräver årlig beskärning men är i övrigt tacksam och lättskött.",
    zones: { outdoor: [1, 2, 3, 4, 5, 6, 7], indoor: null, greenhouse: null },
    days: "Skörd år 2+",
    spacing: "40–50 cm",
    rowSpacing: "150–200 cm",
    depth: "Plantera i samma djup som i krukan",
    ph: { min: 5.5, max: 6.5, ideal: 6.0 },
    optimalConditions: {
      sun: { level: "Sol–halvskugga", icon: "☀️", detail: "Full sol ger sötast bär och rikligast skörd, men hallon klarar halvskugga bättre än de flesta bärbuskar. I södra Sverige kan lite eftermiddagsskugga vara bra för att undvika uttorkning." },
      temperature: { min: -30, max: 30, ideal: "18–24°C", detail: "Extremt härdig – tål ner till -30°C i vila. Trivs bäst runt 20°C under växtsäsongen. Blommar sent (juni) så frostskador på blommor är ovanliga." },
      wind: { level: "Måttligt känslig", detail: "Långa skott kan knäckas i stark vind. Plantera gärna intill ett staket eller sätt upp trådar att binda mot. Vindskydd förbättrar pollinering och skörd." },
    },
    watering: {
      need: "Medel–Hög",
      icon: "💧💧💧",
      summary: "Hallon har grunda rötter och torkar lätt ut. Jämn fukt under blomning och mognad är avgörande för stora, saftiga bär.",
      phases: [
        { phase: "Vår (utbrytning)", need: "Medel", tip: "Vattna vid torka – busken vaknar och börjar skjuta nya skott. Mulcha med bark eller gräsklipp för att hålla fukten." },
        { phase: "Blomning (juni)", need: "Hög", tip: "Kritisk period! Vattenstress nu ger små bär eller att blommorna faller av. Vattna djupt 2–3 ggr/vecka om det inte regnar." },
        { phase: "Mognad (juli–aug)", need: "Hög", tip: "Fortsätt vattna regelbundet. Undvik övervattning precis innan skörd – det kan ge vattniga bär och mer mögel." },
        { phase: "Höst (efter skörd)", need: "Låg", tip: "Minska vattningen gradvis. Busken förbereder sig för vintervilka." },
      ],
      mistakes: [
        "Vattnar för lite under mognad – ger torra, småbär",
        "Vattnar ovanifrån under skörd – bären möglar snabbt",
        "Glömmer att vattna nyplanterade buskar första sommaren",
      ],
      tip: "Dropp-bevattning eller vattenslang vid basen är idealiskt för hallon – det håller bladen torra och minskar mögel-risken dramatiskt.",
    },
    soil: "Hallon trivs i humusrik, väldränerad jord. De HATAR stående vatten och lerjord. Blanda in rikligt med kompost vid plantering.",
    soilTips: [
      "Blanda in 5–10 liter kompost per plantgrop",
      "På lerjord: plantera upphöjt (15–20 cm) eller blanda in grov sand",
      "Mulcha årligen med bark, halm eller löv – hallon älskar mulch",
      "Undvik mark där det stått potatis eller tomater senaste 3 åren (verticillium-risk)",
    ],
    timeline: {
      1: [
        { phase: "Plantering", months: "Maj", icon: "🌱" },
        { phase: "Blomning", months: "Juni–juli", icon: "🌸" },
        { phase: "Skörd (sommarhallon)", months: "Juli–aug", icon: "🫐" },
        { phase: "Beskärning", months: "Aug–sept (efter skörd)", icon: "✂️" },
        { phase: "Skörd (hösthallon)", months: "Aug–sept", icon: "🫐" },
        { phase: "Vintervila", months: "Nov–apr", icon: "❄️" },
      ],
      4: [
        { phase: "Plantering", months: "Maj", icon: "🌱" },
        { phase: "Blomning", months: "Juni", icon: "🌸" },
        { phase: "Skörd (sommarhallon)", months: "Juli", icon: "🫐" },
        { phase: "Beskärning", months: "Juli–aug (efter skörd)", icon: "✂️" },
        { phase: "Skörd (hösthallon)", months: "Aug–sept", icon: "🫐" },
        { phase: "Vintervila", months: "Okt–apr", icon: "❄️" },
      ],
      6: [
        { phase: "Plantering", months: "Maj–juni", icon: "🌱" },
        { phase: "Blomning", months: "Juni–juli", icon: "🌸" },
        { phase: "Skörd (sommarhallon)", months: "Juli–aug", icon: "🫐" },
        { phase: "Beskärning", months: "Aug (efter skörd)", icon: "✂️" },
        { phase: "Vintervila", months: "Sept–maj", icon: "❄️" },
      ],
    },
    nutritionData: [
      { month: "Apr", N: 3, P: 2, K: 2 },
      { month: "Maj", N: 7, P: 4, K: 3 },
      { month: "Jun", N: 6, P: 6, K: 5 },
      { month: "Jul", N: 4, P: 5, K: 8 },
      { month: "Aug", N: 3, P: 3, K: 6 },
      { month: "Sep", N: 1, P: 2, K: 4 },
    ],
    nutritionTips: [
      { timing: "Tidig vår (april)", tip: "Ge kompost eller brunnen hästgödsel runt basen. Hallon är näringshungriga och uppskattar en ordentlig vårstart." },
      { timing: "Blomning (juni)", tip: "En giva kaliumrik gödsel (tomatgödsel fungerar) främjar blomning och bärutveckling." },
      { timing: "Efter skörd", tip: "Ingen gödsel efter augusti – nya skott ska hinna mogna inför vintern, inte fortsätta växa." },
    ],
    companions: {
      good: [
        { name: "Vitlök", emoji: "🧄", why: "Avskräcker bladlöss och gallkvalster som kan angripa hallon." },
        { name: "Ringblomma", emoji: "🌼", why: "Lockar pollinatörer och nyttiga insekter. Plus att den ser fantastisk ut vid hallonraden!" },
        { name: "Rabarber", emoji: "🌿", why: "Skuggar marken, behåller fukt och samsas bra utan konkurrens om samma näring." },
      ],
      bad: [
        { name: "Potatis", emoji: "🥔", why: "Bägge är känsliga för verticillium-svamp. Plantera aldrig hallon där det stått potatis." },
        { name: "Tomater", emoji: "🍅", why: "Samma verticillium-risk. Håll minst 3 meters avstånd eller vänta 3 år." },
        { name: "Björnbär", emoji: "🫐", why: "Korspollinerar och kan sprida sjukdomar mellan sig. Håll 50+ meter avstånd." },
      ],
    },
    rotation: {
      avoid: ["Hallon", "Björnbär", "Jordgubbar", "Potatis", "Tomater"],
      avoidWhy: "Alla Rubus-arter samt Solanaceae delar sjukdomar (verticillium, rotröta). Vänta minst 4–5 år innan du planterar hallon på samma plats igen.",
      goodBefore: ["Gräsmatta", "Baljväxter", "Lök"],
      goodBeforeWhy: "Mark som legat som gräsmatta i flera år är idealisk – fri från de vanligaste hallonsjukdomarna. Baljväxter berikar jorden med kväve.",
      goodAfter: ["Grönkål", "Ärtor", "Gröngödsling"],
      goodAfterWhy: "Efter att hallonraden tagits bort (10+ år) är jorden utarmad. Baljväxter eller gröngödsling bygger upp den igen.",
    },
    varieties: [
      { name: "Glen Ample", note: "Sommarhallon. Stora bär, tagglös, kraftig tillväxt. Den mest populära sommarsorten.", zones: [1, 2, 3, 4, 5] },
      { name: "Tulameen", note: "Sommarhallon. Fantastisk smak, stora bär. Lite frostkänsligare.", zones: [1, 2, 3, 4] },
      { name: "Autumn Bliss", note: "Hösthallon. Bär på årets skott – enklaste beskärningen (klipp allt!). Pålitlig.", zones: [1, 2, 3, 4, 5, 6] },
      { name: "Polka", note: "Hösthallon. Stora, söta bär. Lång skördeperiod aug–okt i södra Sverige.", zones: [1, 2, 3, 4, 5] },
      { name: "Glen Coe", note: "Lila hallon! Tagglös, söt smak, bra i zon 1–5.", zones: [1, 2, 3, 4, 5] },
    ],
    problems: [
      { name: "Hallonänger (Byturus tomentosus)", symptom: "Larver i bären, maskhål. Vita larver ~5 mm syns när bäret öppnas.", fix: "Feromonfällor i maj. Plocka infekterade bär. Nät med fint maska under blomning. Hösthallon angrips sällan." },
      { name: "Gråmögel (Botrytis)", symptom: "Gråludet mögel på mogna bär, speciellt i fuktig väderlek.", fix: "God luftcirkulation (gallring). Plocka bär ofta – lämna inte övermogna bär. Vattna vid basen, ej ovanifrån." },
      { name: "Skottsjuka", symptom: "Purpurfärgade fläckar på skotten, skotten vissnar och dör.", fix: "Klipp bort och bränn angripna skott. Förebygg med god gallring och luftcirkulation." },
    ],
    goodToKnow: [
      { icon: "⚠️", title: "Hallon sprider sig – aktivt", text: "Hallonrötter skickar ut utlöpare och nya plantor dyker upp överallt. Använd rotspärr (nedgrävd plåt/plast 30 cm djupt) om du vill hålla dem på plats. Eller plantera i upphöjd bädd.", severity: "warning" },
      { icon: "⚠️", title: "Sommarhallon vs hösthallon – helt olika beskärning", text: "Sommarhallon bär frukt på fjolårets skott → klipp bara de som burit frukt. Hösthallon bär på årets skott → klipp ALLT på våren. Blandar du ihop detta förlorar du skörden!", severity: "warning" },
      { icon: "💡", title: "Fryser perfekt", text: "Hallon är ett av de bär som fryser bäst. Lägg ut dem i ett lager på en plåt, frys, flytta sedan till påse. Perfekt smak året runt.", severity: "tip" },
      { icon: "💡", title: "Plocka rätt", text: "Mogna hallon lossnar lätt från kärnan (tappar tappar). Om du behöver dra – vänta en dag till. Plocka gärna varannan dag under högsäsong.", severity: "tip" },
    ],
    pruning: {
      label: "Beskärning",
      types: {
        summer: {
          name: "Sommarhallon",
          when: "Direkt efter skörd (juli–aug)",
          description: "Sommarhallon bär frukt på fjolårets skott. Efter skörd klipper du bort alla skott som burit frukt (bruna, vedartade) vid marknivå. Spara 6–8 av de starkaste nya gröna skotten per löpmeter och bind upp dem.",
          steps: [
            "Klipp bort alla skott som burit frukt – nära marken",
            "Välj ut 6–8 starka nya skott per löpmeter",
            "Ta bort alla svaga, tunna eller skadade skott",
            "Bind upp de kvarvarande skotten mot tråd/staket",
            "Korta ev. topparna till ~170 cm höjd i feb",
          ],
        },
        autumn: {
          name: "Hösthallon",
          when: "Tidig vår (mars–april) innan tillväxt börjar",
          description: "Hösthallon bär frukt på årets skott – därför klipper du enkelt ner ALLA skott till marknivå på våren. Nya skott växer upp, blommar och ger frukt samma sommar/höst.",
          steps: [
            "Klipp ner ALLA skott till 5–10 cm ovan mark i mars–april",
            "Rensa bort avklippta grenar",
            "Mulcha med kompost eller bark",
            "Nya skott dyker upp – gallra till 8–10 per löpmeter",
          ],
        },
      },
    },
    propagation: {
      difficulty: "Enkel",
      methods: [
        { method: "Rotskott", description: "Det enklaste sättet. Hallon skickar naturligt upp nya skott via utlöpare. Gräv upp ett skott med rot på våren eller hösten och plantera om.", icon: "🌱" },
        { method: "Sticklingar", description: "Klipp 15–20 cm bitar av friska skott i november. Sätt i fukt-hållen jord utomhus. De rotar sig under vintern och kan planteras ut på våren.", icon: "✂️" },
      ],
      tip: "Ta alltid förökningsmaterial från friska, produktiva buskar. Undvik att sprida sjukdomar genom att välja plantor utan tecken på skottsjuka eller virusangrepp.",
    },
    storage: {
      shelfLife: "2–3 dagar (färska)",
      methods: [
        { icon: "❄️", method: "Frysning", duration: "10–12 månader", description: "Det absolut bästa sättet. Lägg bären i ett lager på bakplåtspapper, frys 2 timmar, flytta sedan till påse. Behåller form och smak perfekt.", best: true },
        { icon: "🍯", method: "Sylt & mos", duration: "1+ år", description: "Klassikern. Hallon och socker i lika delar. Mindre socker ger bättre hallonsmak men kortare hållbarhet.", best: false },
        { icon: "🥡", method: "Kylskåp", duration: "2–3 dagar", description: "Lägg bären i ett lager på hushållspapper i en skål. Tvätta INTE förrän precis innan du äter – fukt ger mögel.", best: false },
        { icon: "☀️", method: "Torkning", duration: "6+ månader", description: "Torka i ugn på 50°C i 8–12 timmar eller i torkmaskin. Blir intensivt söta. Perfekt i müsli eller bakning.", best: false },
      ],
      tips: [
        "Plocka alltid torra bär – vänta tills daggen torkat",
        "Sortera och ta bort skadade bär direkt – en möglig buske förstör hela skålen",
        "Frysta hallon kan gå direkt i smoothies utan att tina först",
      ],
    },
    harvestCalc: { minPerSqm: 0.5, maxPerSqm: 1.5, unit: "kg" },
  },

  /* ═══════════════════════════════════════ */
  /* ══  KRYDDOR                           ══ */
  /* ═══════════════════════════════════════ */
  basilika: {
    name: "Basilika",
    emoji: "🌿",
    category: "kryddor",
    family: "Kransblommiga",
    familyLatin: "Lamiaceae",
    perennial: false,
    difficulty: "Medel",
    difficultyWhy: "Kräver förodling inomhus i Sverige, är köldkänslig och vill ha värme. Inte svår – men kräver rätt tajming och omtanke.",
    zones: { outdoor: [1, 2, 3, 4], indoor: [1, 2, 3, 4, 5, 6, 7, 8], greenhouse: [1, 2, 3, 4, 5, 6] },
    days: "50–70",
    spacing: "20–25 cm",
    rowSpacing: "30 cm",
    depth: "0.5 cm (ytligt, fröna behöver ljus)",
    ph: { min: 6.0, max: 7.0, ideal: 6.5 },
    optimalConditions: {
      sun: { level: "Full sol", icon: "☀️", detail: "Basilika kräver minst 6–8 timmars sol per dag. I halvskugga blir smaken svagare och tillväxten långsam. Söderläge är perfekt." },
      temperature: { min: 10, max: 35, ideal: "20–25°C", detail: "Tropisk växt som HATAR kyla. Dör vid frost. Sätts ut först när nätterna stabilt håller 10°C+. I norra Sverige bäst i växthus eller fönsterkarmen." },
      wind: { level: "Känslig", detail: "Vindkänslig med tunna blad som torkar ut snabbt. Skyddat, varmt läge är a och o. Perfekt i en sydvänd mur- eller huslycka." },
    },
    watering: {
      need: "Medel",
      icon: "💧💧",
      summary: "Basilikan älskar fukt men HATAR att stå blöt – hon är lite bortskämd men värd varje droppe. Vattna alltid vid basen, aldrig ovanifrån.",
      phases: [
        { phase: "Plantor inomhus", need: "Låg–Medel", tip: "Vattna underifrån – ställ krukan i vatten 10 minuter och låt den dricka. Sen vill basilikan nästan torka ut innan nästa vattning. Hon gillar inte att ha blöta fötter hela tiden." },
        { phase: "Utplantering (juni)", need: "Medel", tip: "Ge en rejäl välkomstdricka vid utplantering! Håll jämnt fuktigt första veckan – plantan behöver tid att landa i sin nya jord." },
        { phase: "Tillväxt (juli–aug)", need: "Medel", tip: "Vattna 2–3 gånger i veckan vid torrt väder. Morgonvattning är bäst – bladen hinner torka under dagen." },
      ],
      mistakes: [
        "Vattnar ovanifrån – blöta blad ger svampsjukdomar och bruna fläckar",
        "Övervattning – basilika ruttnar lätt i för blöt jord, särskilt i kruka",
        "Vattnar med kallt vatten – chockar den tropiska plantan",
      ],
      tip: "Ställ ett glas vatten i solen på morgonen – vattna med det ljumma vattnet på kvällen. Basilikan älskar det!",
    },
    soil: "Basilika vill ha rik, lucker jord som andas – tänk trädgårdsjord blandad med kompost. I kruka behöver hon extra dränering, annars ruttnar rötterna snabbare än du hinner blinka.",
    soilTips: [
      "Blanda in kompost – basilika är hungrig och vill ha bra mat från start",
      "I kruka: blanda ungefär 7 delar planteringsjord med 3 delar perlit – hon måste kunna andas",
      "Undvik tung lerjord – basilikans rötter klarar inte att kämpa sig igenom kompakt jord",
      "Mulcha gärna med ett tunt lager gräsklipp – håller fukten och värmen precis som hon vill ha det",
    ],
    timeline: {
      1: [
        { phase: "Förodling inomhus", months: "April", icon: "🏠" },
        { phase: "Härdning", months: "Maj", icon: "🌤️" },
        { phase: "Utplantering", months: "Slutet av maj–juni", icon: "🌱" },
        { phase: "Skörd (plocka löpande)", months: "Juni–sept", icon: "🌿" },
        { phase: "Ta eget frö", months: "Sept", icon: "🌾" },
      ],
      4: [
        { phase: "Förodling inomhus", months: "April–maj", icon: "🏠" },
        { phase: "Härdning", months: "Slutet av maj", icon: "🌤️" },
        { phase: "Utplantering", months: "Juni", icon: "🌱" },
        { phase: "Skörd (plocka löpande)", months: "Juli–sept", icon: "🌿" },
        { phase: "Ta eget frö", months: "Sept", icon: "🌾" },
      ],
      6: [
        { phase: "Förodling inomhus", months: "Maj", icon: "🏠" },
        { phase: "Utplantering (växthus)", months: "Juni", icon: "🏠" },
        { phase: "Skörd", months: "Juli–aug", icon: "🌿" },
      ],
    },
    nutritionData: [
      { month: "Maj", N: 3, P: 2, K: 2 },
      { month: "Jun", N: 6, P: 4, K: 4 },
      { month: "Jul", N: 8, P: 5, K: 5 },
      { month: "Aug", N: 6, P: 4, K: 4 },
      { month: "Sep", N: 2, P: 2, K: 2 },
    ],
    nutritionTips: [
      { timing: "Vid utplantering", tip: "Blanda in kompost i jorden – basilika vill ha en rik start. Men överdriva inte, hon klarar sig fint med en normal giva." },
      { timing: "Varje 3:e vecka (juli–aug)", tip: "Ge lite flytande näring (nässelvatten är perfekt!) utspädd till halv styrka. Övergödsla inte – det ger stora blad men smaken blir helt platt." },
      { timing: "Obs!", tip: "Syntetisk gödsel med mycket kväve? Glöm det. Basilikan växer som tokig men tappar sin fantastiska smak – det är eteriska oljorna som lider." },
    ],
    companions: {
      good: [
        { name: "Tomat", emoji: "🍅", why: "Det klassiska drömpar! Basilika sägs förbättra tomatens smak, och avskräcker bladlöss och vitfjäril. Plus att de trivs under exakt samma förhållanden – sol och värme." },
        { name: "Paprika", emoji: "🌶️", why: "Samma värmebehov, och basilikan lockar pollinatörer som hjälper paprika sätta frukt. De samsas fint." },
        { name: "Sallat", emoji: "🥬", why: "Basilikan ger välbehövlig skugga åt sallat i högsommarvärmen, och sallaten håller marken sval och fuktig. Ett perfekt par!" },
      ],
      bad: [
        { name: "Salvia", emoji: "🌿", why: "Bägge producerar starka eteriska oljor som bråkar med varandra. Salvia vill dessutom ha det torrt – raka motsatsen till basilika." },
        { name: "Timjan", emoji: "🌿", why: "Timjan trivs i mager, torr jord. Basilika vill ha rik, fuktig jord. De pratar helt enkelt olika språk." },
      ],
    },
    rotation: {
      avoid: ["Basilika", "Mynta", "Salvia"],
      avoidWhy: "Kransblommiga (Lamiaceae) delar en del jordburna sjukdomar. Vänta 2–3 år innan du odlar basilika på samma plats.",
      goodBefore: ["Baljväxter", "Lök", "Rotsaker"],
      goodBeforeWhy: "Baljväxter berikar jorden med kväve som basilika uppskattar. Lök och rotsaker lämnar ren jord.",
      goodAfter: ["Lök", "Rotsaker", "Kål"],
      goodAfterWhy: "Basilikans aromatiska rester i jorden kan ha mild desinficerande effekt. Bra föregångare för grönsaker som är känsliga för jordburna sjukdomar.",
    },
    varieties: [
      { name: "Genovese", note: "Klassisk italiensk med stor, kupig blad. Bäst för pesto. DEN basilika de flesta tänker på.", zones: [1, 2, 3, 4] },
      { name: "Thai-basilika", note: "Anissmak, lila stjälkar. Mer köldhärdig än Genovese. Perfekt för asiatisk matlagning.", zones: [1, 2, 3, 4, 5] },
      { name: "Lemon basil", note: "Fräsch citronsmak. Kompakt växt, bra i kruka. Fin till fisk och sallader.", zones: [1, 2, 3, 4, 5] },
      { name: "Dark Opal", note: "Mörkt purpur blad. Vacker i trädgården. Något mildare smak. Fantastisk i vinäger.", zones: [1, 2, 3, 4] },
    ],
    problems: [
      { name: "Bladlöss", symptom: "Klibbiga blad, deformerad tillväxt, löss synliga på undersidan av blad.", fix: "Såpvatten räddar läget (1 msk flytande tvål per liter). Spruta var 3:e dag. Har du tur hittar nyckelpige-larver dem först – de älskar bladlöss." },
      { name: "Vishnesjuka (Fusarium)", symptom: "Plantan vissnar plötsligt trots vattning. Bruna strimmor i stjälken.", fix: "Tyvärr ingen bot. Dra upp och förstör plantan. Odla inte basilika på samma plats igen på 3 år. Tips: sorten 'Nufar' har viss resistens." },
      { name: "Kyla-skador", symptom: "Svarta fläckar på blad, slappe blad efter kall natt.", fix: "Förebygg! Ta in krukodlad basilika så fort nattemperaturen kryper under 10°C. Frilandsodlad? Fiberduk under kalla nätter kan rädda henne." },
    ],
    goodToKnow: [
      { icon: "⚠️", title: "Knip topparna – annars ger hon upp", text: "Basilika måste toppas regelbundet, det är nyckeln till en bubbig, produktiv planta. Klipp ovanför ett bladpar så växer två nya grenar ut. Låter du henne blomma tappar bladen smak och plantan ger snabbt upp – hon tycker att jobbet är klart.", severity: "warning" },
      { icon: "⚠️", title: "Köldkänslig – noll tolerans", text: "Basilika dör vid minsta frost och börjar må dåligt redan under 10°C. Sätt aldrig ut henne för tidigt – bättre att vänta en vecka extra än att börja om. I norra Sverige (zon 5+) är växthus eller fönsterkarmen enda alternativet.", severity: "warning" },
      { icon: "💡", title: "Bäst smak före blomning", text: "Skörda alltid innan blommorna dyker upp – det är då smaken är som allra starkast. Ser du blomknoppar? Knip av dem direkt, så fortsätter plantan producera blad istället.", severity: "tip" },
      { icon: "💡", title: "Perfekt i kruka på balkongen", text: "Har du ingen trädgård? Basilika är räddningen. En 5-liters kruka, bra jord och ett soligt läge – det är allt hon behöver. Många tycker faktiskt att krukodlad basilika ger bäst resultat.", severity: "tip" },
    ],
    sowing: {
      label: "Förodling & sådd",
      method: "indoor",
      indoorWeeks: "6–8 veckor före utplantering",
      description: "I Sverige måste basilika förodlas inomhus – hon är en tropisk själ som inte tål vår vår. Fröna vill ha värme (20–25°C) och ljus för att vakna. Så ytligt på ytan och håll fuktigt – de gror på 5–10 dagar.",
      steps: [
        "Fyll krukor/brätten med fuktig såjord",
        "Lägg fröna på ytan – tryck fast lätt men täck INTE (behöver ljus för groning)",
        "Täck med plastfolie eller lock för att hålla fukt – avlägsna dagligen för att vädra",
        "Ställ varmt (20–25°C) och ljust – fönsterbänk i söder eller växtbelysning",
        "Groning på 5–10 dagar. Ta bort plastfolie vid uppkomst",
        "Gallra till 1 planta per kruka vid 2 örtblad",
        "Härda av i 1 vecka innan utplantering (ställ ut dagtid, in på natten)",
        "Plantera ut när natttemp stabilt 10°C+ (juni i mellansverige)",
      ],
      tips: [
        "Dra flera omgångar med 2 veckors mellanrum för skörd hela sommaren",
        "Basilika HATAR kall jord – vänta hellre en vecka extra med utplanteringen",
        "Köp-basilika från mataffären kan planteras ut men är ofta svag – egna plantor ger 10x bättre resultat",
      ],
    },
    seedSaving: {
      difficulty: "Enkel",
      type: "Självpollinerare",
      biennial: false,
      storageYears: "3–5 år",
      description: "Låt några plantor blomma i slutet av säsongen. Fröna bildas i de torkade blommorna. Enkelt och ger massor av frö.",
      steps: [
        "Låt 2–3 plantor blomma ut helt (sluta knipa dem i aug)",
        "Vänta tills blommorna torkat och blivit bruna",
        "Klipp av blomstjälkarna och lägg i en papperspåse",
        "Skaka – de små svarta fröna faller ut",
        "Rensa bort skräp och låt fröna eftertorka några dagar",
        "Förvara svalt och torrt i märkt kuvert",
      ],
      isolation: "Basilika är mestadels självpollinerande men kan korspollera med andra basilikasorter via insekter. Håll 30+ meters avstånd mellan sorter om du vill ha sortrena frön.",
      tip: "En enda planta kan ge hundratals frön – mer än tillräckligt för flera år. Dela med odlarkompisar!",
    },
    harvest: {
      label: "Skörd & användning",
      method: "Plocka löpande, knip ovanför ett bladpar",
      description: "Skörda genom att knipa av toppskottet ovanför ett bladpar. Två nya grenar växer ut – plantan blir buskigare och ger mer. Börja plocka när plantan har 6+ bladpar.",
      uses: [
        { use: "Färsk", tip: "Tillsätt SIST i matlagningen – värme förstör smaken. Riv med händerna istället för att skära (minskar oxidering)." },
        { use: "Pesto", tip: "Klassisk Genovese-pesto: basilika, pinjenötter, parmesan, vitlök, olivolja. Frys i isbitsfack för portioner." },
        { use: "Infused olja", tip: "Blanchera blad 5 sek, isbad, mixa med olivolja. Silknätsila. Hållbar 1–2 veckor i kyl." },
        { use: "Torkad", tip: "Torka i ugn (50°C, 2–4 tim) eller hängtorka. OBS: torkad basilika tappar mycket smak. Frys hellre." },
      ],
    },
    storage: {
      shelfLife: "5–7 dagar (färsk)",
      methods: [
        { icon: "❄️", method: "Frysning (bäst!)", duration: "6+ månader", description: "Blanchera snabbt (2 sek), isbad, torka, frys i påse. Eller mixa med lite olivolja och frys i isbitsfack. Behåller smaken fantastiskt.", best: true },
        { icon: "🌊", method: "I glas med vatten", duration: "7–10 dagar", description: "Ställ stjälkarna i ett glas vatten som en bukett. Rumstemperatur – INTE i kylen (kyla ger svarta blad). Byt vatten varannan dag.", best: false },
        { icon: "🧂", method: "Saltkonservering", duration: "6+ månader", description: "Varva blad med havssalt i en burk. Saltet drar ut fukten och konserverar. Skölj av salt innan användning.", best: false },
      ],
      tips: [
        "Lägg ALDRIG basilika i kylen – hon blir svart och ledsen av kyla (tropisk själ, minns du?)",
        "Frys i isbitsfack med olivolja – perfekta portioner att slänga i grytan",
        "Skörda på morgonen efter att daggen torkat – då är eteriska oljorna starkast",
      ],
    },
    harvestCalc: { minPerSqm: 0.3, maxPerSqm: 0.8, unit: "kg" },
  },
};

const CROP_LIST = [
  // Grönsaker
  { id: "morot", name: "Morot", emoji: "🥕", family: "Flockblommiga", familyLatin: "Apiaceae", difficulty: "Enkel", category: "grönsaker" },
  { id: "tomat", name: "Tomat", emoji: "🍅", family: "Nattskatta", familyLatin: "Solanaceae", difficulty: "Medel", category: "grönsaker" },
  { id: "potatis", name: "Potatis", emoji: "🥔", family: "Nattskatta", familyLatin: "Solanaceae", difficulty: "Enkel", category: "grönsaker" },
  { id: "artor", name: "Ärtor", emoji: "🫛", family: "Baljväxter", familyLatin: "Fabaceae", difficulty: "Enkel", category: "grönsaker", locked: true },
  { id: "squash", name: "Squash", emoji: "🎃", family: "Gurkväxter", familyLatin: "Cucurbitaceae", difficulty: "Enkel", category: "grönsaker", locked: true },
  { id: "sallat", name: "Sallat", emoji: "🥬", family: "Korgblommiga", familyLatin: "Asteraceae", difficulty: "Enkel", category: "grönsaker", locked: true },
  { id: "lok", name: "Lök", emoji: "🧅", family: "Lökväxter", familyLatin: "Amaryllidaceae", difficulty: "Enkel", category: "grönsaker", locked: true },
  { id: "gronkal", name: "Grönkål", emoji: "🥬", family: "Korsblommiga", familyLatin: "Brassicaceae", difficulty: "Enkel", category: "grönsaker", locked: true },
  { id: "radisa", name: "Rädisa", emoji: "🔴", family: "Korsblommiga", familyLatin: "Brassicaceae", difficulty: "Enkel", category: "grönsaker", locked: true },
  { id: "bondbona", name: "Bondböna", emoji: "🫘", family: "Baljväxter", familyLatin: "Fabaceae", difficulty: "Enkel", category: "grönsaker", locked: true },
  // Bär
  { id: "hallon", name: "Hallon", emoji: "🫐", family: "Rosväxter", familyLatin: "Rosaceae", difficulty: "Enkel", category: "bär" },
  { id: "jordgubbar", name: "Jordgubbar", emoji: "🍓", family: "Rosväxter", familyLatin: "Rosaceae", difficulty: "Enkel", category: "bär", locked: true },
  { id: "svarta-vinbar", name: "Svarta vinbär", emoji: "🫐", family: "Krusväxter", familyLatin: "Grossulariaceae", difficulty: "Enkel", category: "bär", locked: true },
  { id: "krusbär", name: "Krusbär", emoji: "🟢", family: "Krusväxter", familyLatin: "Grossulariaceae", difficulty: "Enkel", category: "bär", locked: true },
  { id: "blåbär", name: "Blåbär (odlade)", emoji: "🫐", family: "Ljungväxter", familyLatin: "Ericaceae", difficulty: "Medel", category: "bär", locked: true },
  // Kryddor
  { id: "basilika", name: "Basilika", emoji: "🌿", family: "Kransblommiga", familyLatin: "Lamiaceae", difficulty: "Medel", category: "kryddor" },
  { id: "persilja", name: "Persilja", emoji: "🌿", family: "Flockblommiga", familyLatin: "Apiaceae", difficulty: "Enkel", category: "kryddor", locked: true },
  { id: "dill", name: "Dill", emoji: "🌿", family: "Flockblommiga", familyLatin: "Apiaceae", difficulty: "Enkel", category: "kryddor", locked: true },
  { id: "grasloek", name: "Gräslök", emoji: "🌿", family: "Lökväxter", familyLatin: "Amaryllidaceae", difficulty: "Enkel", category: "kryddor", locked: true },
  { id: "timjan", name: "Timjan", emoji: "🌿", family: "Kransblommiga", familyLatin: "Lamiaceae", difficulty: "Enkel", category: "kryddor", locked: true },
];

const colors = {
  bg: "#F7F5F0",
  card: "#FFFFFF",
  accent: "#2D6A4F",
  accentLight: "#B7E4C7",
  accentMuted: "#52796F",
  warm: "#D4A373",
  warmLight: "#FEFAE0",
  danger: "#E76F51",
  dangerLight: "#FDE8E1",
  text: "#1B1B1B",
  textMuted: "#6B705C",
  border: "#E8E4DD",
  N: "#4CAF50",
  P: "#FF9800",
  K: "#7B1FA2",
};

/* ── Zone Selector Modal ── */
const ZoneSelector = ({ currentZone, onSelect, onClose }) => (
  <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 100, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
    <div style={{ background: colors.card, borderRadius: "24px 24px 0 0", width: "100%", maxWidth: 480, maxHeight: "85vh", overflow: "auto", padding: "24px 20px 40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>Välj din odlingszon</h2>
        <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: colors.textMuted }}>✕</button>
      </div>
      <p style={{ fontSize: 13, color: colors.textMuted, margin: "0 0 16px", lineHeight: 1.5 }}>
        Odlingszoner i Sverige (1–8) anger hur kallt klimatet är i ditt område. Zon 1 är mildast (Skåne), zon 8 kallast (fjällen). Appen anpassar tidslinjer och sortrekommendationer efter din zon.
      </p>
      {Object.entries(ZONE_INFO).map(([z, info]) => (
        <button
          key={z}
          onClick={() => { onSelect(Number(z)); onClose(); }}
          style={{
            width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "14px 16px",
            background: Number(z) === currentZone ? "#EDF7F0" : colors.card,
            border: Number(z) === currentZone ? `2px solid ${colors.accent}` : `1px solid ${colors.border}`,
            borderRadius: 14, marginBottom: 8, cursor: "pointer", textAlign: "left",
          }}
        >
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: Number(z) === currentZone ? colors.accent : colors.border,
            color: Number(z) === currentZone ? "#fff" : colors.text,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: 800,
          }}>
            {z}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{info.region}</div>
            <div style={{ fontSize: 12, color: colors.textMuted }}>{info.frost} · {info.season}</div>
          </div>
          {Number(z) === currentZone && <span style={{ color: colors.accent, fontSize: 18 }}>✓</span>}
        </button>
      ))}
    </div>
  </div>
);

/* ── Difficulty Tooltip ── */
const DifficultyBadge = ({ difficulty, why }) => {
  const [showTip, setShowTip] = useState(false);
  const info = DIFFICULTY_INFO[difficulty];
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setShowTip(!showTip)}
        style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: info.color, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
      >
        {info.icon} Svårighetsgrad: {difficulty}
        <span style={{ fontSize: 10, opacity: 0.6 }}>ⓘ</span>
      </button>
      {showTip && (
        <div style={{
          position: "absolute", top: "110%", left: "50%", transform: "translateX(-50%)",
          background: colors.text, color: "#fff", padding: "10px 14px", borderRadius: 12,
          fontSize: 12, lineHeight: 1.5, width: 260, zIndex: 10, boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}>
          <strong>{difficulty}:</strong> {info.description}
          {why && <div style={{ marginTop: 6, opacity: 0.85 }}>Denna gröda: {why}</div>}
          <div style={{ position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderBottom: `6px solid ${colors.text}` }} />
        </div>
      )}
    </div>
  );
};

/* ── Zone Badge ── */
const ZoneBadge = ({ zones, userZone }) => {
  const canGrowOutdoor = zones.outdoor?.includes(userZone);
  const canGrowGreenhouse = zones.greenhouse?.includes(userZone);
  const canGrow = canGrowOutdoor || canGrowGreenhouse;

  let label, bg, detail;
  if (canGrowOutdoor) {
    label = `Odlingszon ${Math.min(...zones.outdoor)}–${Math.max(...zones.outdoor)}`;
    bg = "#E3F2FD";
    detail = "✓ Passar din zon";
  } else if (canGrowGreenhouse) {
    label = `Växthus i din zon`;
    bg = "#FFF3CD";
    detail = "⚠ Kräver växthus/tunnel i din zon";
  } else {
    label = `Odlingszon ${Math.min(...(zones.outdoor || zones.greenhouse))}–${Math.max(...(zones.outdoor || zones.greenhouse))}`;
    bg = colors.dangerLight;
    detail = "✗ Svårt i din zon";
  }

  return (
    <div>
      <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: bg }}>{label}</span>
      {zones.greenhouse && (
        <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 6, textAlign: "center" }}>
          Utomhus: zon {Math.min(...zones.outdoor)}–{Math.max(...zones.outdoor)} · Växthus: zon {Math.min(...zones.greenhouse)}–{Math.max(...zones.greenhouse)}
        </div>
      )}
      <div style={{ fontSize: 12, fontWeight: 600, marginTop: 4, color: canGrowOutdoor ? colors.accent : canGrowGreenhouse ? "#E6A200" : colors.danger, textAlign: "center" }}>
        {detail}
      </div>
    </div>
  );
};

const NutritionChart = ({ data }) => (
  <div style={{ width: "100%", height: 220, marginTop: 8 }}>
    <ResponsiveContainer>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="nGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.N} stopOpacity={0.3} />
            <stop offset="95%" stopColor={colors.N} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="pGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.P} stopOpacity={0.3} />
            <stop offset="95%" stopColor={colors.P} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="kGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.K} stopOpacity={0.3} />
            <stop offset="95%" stopColor={colors.K} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: colors.textMuted }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10, fill: colors.textMuted }} axisLine={false} tickLine={false} domain={[0, 100]} />
        <Tooltip
          contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 13 }}
          formatter={(value, name) => {
            const labels = { N: "Kväve (N)", P: "Fosfor (P)", K: "Kalium (K)" };
            return [`${value}%`, labels[name]];
          }}
          labelFormatter={(label, payload) => {
            const item = payload?.[0]?.payload;
            return item ? `${label} – ${item.label}` : label;
          }}
        />
        <Area type="monotone" dataKey="N" stroke={colors.N} fill="url(#nGrad)" strokeWidth={2.5} dot={{ r: 3 }} />
        <Area type="monotone" dataKey="P" stroke={colors.P} fill="url(#pGrad)" strokeWidth={2.5} dot={{ r: 3 }} />
        <Area type="monotone" dataKey="K" stroke={colors.K} fill="url(#kGrad)" strokeWidth={2.5} dot={{ r: 3 }} />
      </AreaChart>
    </ResponsiveContainer>
    <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 4 }}>
      {[
        { key: "N", label: "Kväve (N)", color: colors.N },
        { key: "P", label: "Fosfor (P)", color: colors.P },
        { key: "K", label: "Kalium (K)", color: colors.K },
      ].map((n) => (
        <div key={n.key} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: colors.textMuted }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: n.color }} />
          {n.label}
        </div>
      ))}
    </div>
  </div>
);

const PhBar = ({ min, max, ideal }) => {
  const range = 14;
  const leftPct = (min / range) * 100;
  const widthPct = ((max - min) / range) * 100;
  const idealPct = (ideal / range) * 100;
  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ position: "relative", height: 28, borderRadius: 14, background: `linear-gradient(90deg, #E53935 0%, #FF9800 20%, #FFEB3B 35%, #4CAF50 43%, #4CAF50 57%, #2196F3 70%, #7B1FA2 85%, #4A148C 100%)`, overflow: "visible" }}>
        <div style={{ position: "absolute", left: `${leftPct}%`, width: `${widthPct}%`, top: -2, height: 32, border: `3px solid ${colors.text}`, borderRadius: 16, background: "rgba(255,255,255,0.3)" }} />
        <div style={{ position: "absolute", left: `${idealPct}%`, top: -6, transform: "translateX(-50%)", fontSize: 16 }}>▼</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: colors.textMuted, marginTop: 4, padding: "0 4px" }}>
        <span>0 (surt)</span>
        <span>7 (neutralt)</span>
        <span>14 (basiskt)</span>
      </div>
      <div style={{ textAlign: "center", fontSize: 13, marginTop: 4, color: colors.text }}>
        Idealiskt: <strong>pH {ideal}</strong> (intervall: {min}–{max})
      </div>
    </div>
  );
};

const HarvestCalc = ({ calc, name }) => {
  const [sqm, setSqm] = useState(4);
  const minYield = (sqm * calc.minPerSqm).toFixed(1);
  const maxYield = (sqm * calc.maxPerSqm).toFixed(1);
  return (
    <div style={{ background: colors.warmLight, borderRadius: 16, padding: 20, marginTop: 12 }}>
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Skördekalkylator</div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <span style={{ fontSize: 13 }}>Jag odlar på</span>
        <input type="range" min={1} max={20} value={sqm} onChange={(e) => setSqm(Number(e.target.value))} style={{ flex: 1, minWidth: 100, accentColor: colors.accent }} />
        <span style={{ fontSize: 15, fontWeight: 700, minWidth: 50 }}>{sqm} m²</span>
      </div>
      <div style={{ marginTop: 12, fontSize: 22, fontWeight: 700, color: colors.accent, textAlign: "center" }}>
        {minYield}–{maxYield} {calc.unit} {name.toLowerCase()}
      </div>
      <div style={{ fontSize: 12, color: colors.textMuted, textAlign: "center", marginTop: 4 }}>Uppskattad skörd under normala förhållanden</div>
    </div>
  );
};

const Section = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: `1px solid ${colors.border}`, paddingBottom: 4 }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", background: "none", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 700, color: colors.text }}>
        {title}
        <span style={{ fontSize: 18, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>▾</span>
      </button>
      {open && <div style={{ paddingBottom: 16 }}>{children}</div>}
    </div>
  );
};

/* ── Crop Detail Page ── */
const CropPage = ({ crop, onBack, userZone }) => {
  const c = CROPS[crop];
  const isBerry = c.category === "bär";
  const isHerb = c.category === "kryddor";

  // Get zone-appropriate timeline (find closest matching zone key)
  const timelineKeys = Object.keys(c.timeline).map(Number).sort((a, b) => a - b);
  const closestKey = timelineKeys.reduce((prev, curr) => Math.abs(curr - userZone) < Math.abs(prev - userZone) ? curr : prev);
  const timeline = c.timeline[closestKey];

  // Filter varieties for user zone
  const goodVarieties = c.varieties.filter(v => v.zones.includes(userZone));
  const otherVarieties = c.varieties.filter(v => !v.zones.includes(userZone));

  return (
    <div style={{ maxWidth: 480, margin: "0 auto" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: colors.accentMuted, padding: "16px 0", display: "flex", alignItems: "center", gap: 6 }}>
        ← Tillbaka
      </button>

      <div style={{ textAlign: "center", padding: "0 0 20px" }}>
        <div style={{ fontSize: 56 }}>{c.emoji}</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: "8px 0 2px", color: colors.text }}>{c.name}</h1>
        <div style={{ fontSize: 13, color: colors.textMuted }}>
          {c.familyLatin} <span style={{ opacity: 0.5 }}>({c.family})</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginTop: 14 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            <DifficultyBadge difficulty={c.difficulty} why={c.difficultyWhy} />
            <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "#F3E5F5" }}>
              {isBerry ? c.days : `${c.days} dagar till skörd`}
            </span>
            {c.perennial && (
              <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "#E8F5E9", color: colors.accent }}>
                Flerårig · {c.lifespan}
              </span>
            )}
          </div>
          <ZoneBadge zones={c.zones} userZone={userZone} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
        {(isBerry
          ? [{ label: "Plantavstånd", value: c.spacing }, { label: "Radavstånd", value: c.rowSpacing }, { label: "Plantering", value: c.depth }]
          : [{ label: "Avstånd", value: c.spacing }, { label: "Radavstånd", value: c.rowSpacing }, { label: "Sådjup", value: c.depth }]
        ).map((s, i) => (
          <div key={i} style={{ background: colors.card, borderRadius: 12, padding: "12px 8px", textAlign: "center", border: `1px solid ${colors.border}` }}>
            <div style={{ fontSize: 11, color: colors.textMuted, marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ background: colors.card, borderRadius: 20, padding: 24, border: `1px solid ${colors.border}` }}>

        <Section title="☀️ Trivs bäst">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
            {[
              { label: "Solbehov", icon: c.optimalConditions.sun.icon, value: c.optimalConditions.sun.level, detail: c.optimalConditions.sun.detail },
              { label: "Temperatur", icon: "🌡️", value: c.optimalConditions.temperature.ideal, detail: c.optimalConditions.temperature.detail },
              { label: "Vind", icon: "💨", value: c.optimalConditions.wind.level, detail: c.optimalConditions.wind.detail },
              { label: "Vattenbehov", icon: c.watering.icon, value: c.watering.need, detail: c.watering.summary },
            ].map((item, i) => (
              <div key={i} style={{ background: colors.bg, borderRadius: 12, padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                  <span style={{ fontSize: 12, color: colors.textMuted }}>{item.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, marginLeft: "auto" }}>{item.value}</span>
                </div>
                <div style={{ fontSize: 12, color: colors.textMuted, lineHeight: 1.5, paddingLeft: 26 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="💡 Bra att veta">
          <p style={{ fontSize: 13, color: colors.textMuted, margin: "0 0 12px", lineHeight: 1.5 }}>
            Saker som erfarna odlare vet – och nybörjare ofta lär sig the hard way.
          </p>
          {c.goodToKnow.map((item, i) => (
            <div key={i} style={{
              background: item.severity === "warning" ? "#FFF8E7" : "#F0FAF4",
              borderLeft: `4px solid ${item.severity === "warning" ? "#E6A200" : colors.accent}`,
              borderRadius: "0 12px 12px 0", padding: "12px 14px", marginBottom: 8,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                <span>{item.icon}</span> {item.title}
              </div>
              <div style={{ fontSize: 13, color: colors.textMuted, lineHeight: 1.5, marginTop: 4 }}>{item.text}</div>
            </div>
          ))}
        </Section>

        {/* Sowing (vegetables & herbs) OR Pruning (berries) */}
        {isBerry && c.pruning ? (
          <Section title={`✂️ ${c.pruning.label}`}>
            {Object.values(c.pruning.types).map((type, idx) => (
              <div key={idx} style={{ marginBottom: idx < Object.values(c.pruning.types).length - 1 ? 20 : 0 }}>
                <div style={{ background: idx === 0 ? "#EDF7F0" : "#FFF8E7", borderRadius: 12, padding: "10px 14px", marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 22 }}>✂️</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{type.name}</div>
                    <div style={{ fontSize: 12, color: colors.textMuted }}>{type.when}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: colors.text, margin: "0 0 12px" }}>{type.description}</p>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Steg för steg</div>
                {type.steps.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 13, lineHeight: 1.5 }}>
                    <div style={{ minWidth: 22, height: 22, borderRadius: "50%", background: colors.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, marginTop: 1 }}>{i + 1}</div>
                    <div>{step}</div>
                  </div>
                ))}
              </div>
            ))}
          </Section>
        ) : c.sowing ? (
          <Section title={`🌱 ${c.sowing.label}`}>
            <div style={{ background: c.sowing.method === "direct" ? "#EDF7F0" : c.sowing.method === "indoor" ? "#FFF8E7" : "#E3F2FD", borderRadius: 12, padding: "10px 14px", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 22 }}>{c.sowing.method === "direct" ? "🌾" : c.sowing.method === "indoor" ? "🏠" : "🌾🏠"}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{c.sowing.method === "direct" ? "Direktsådd" : c.sowing.method === "indoor" ? "Förodling inomhus" : "Direktsådd eller förodling"}</div>
                {c.sowing.indoorWeeks && <div style={{ fontSize: 12, color: colors.textMuted }}>Förodla {c.sowing.indoorWeeks} före utplantering</div>}
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: colors.text, margin: "0 0 12px" }}>{c.sowing.description}</p>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Steg för steg</div>
            {c.sowing.steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 13, lineHeight: 1.5 }}>
                <div style={{ minWidth: 22, height: 22, borderRadius: "50%", background: colors.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, marginTop: 1 }}>{i + 1}</div>
                <div>{step}</div>
              </div>
            ))}
            {c.sowing.tips && c.sowing.tips.length > 0 && (
              <>
                <div style={{ fontSize: 13, fontWeight: 600, marginTop: 14, marginBottom: 8 }}>Tips</div>
                {c.sowing.tips.map((tip, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 13, lineHeight: 1.5 }}>
                    <span style={{ color: colors.warm }}>💡</span> {tip}
                  </div>
                ))}
              </>
            )}
          </Section>
        ) : null}

        {/* Harvest & Usage for herbs */}
        {isHerb && c.harvest && (
          <Section title={`🌿 ${c.harvest.label}`}>
            <div style={{ background: "#EDF7F0", borderRadius: 12, padding: "10px 14px", marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 22 }}>✂️</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{c.harvest.method}</div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: colors.text, margin: "0 0 12px" }}>{c.harvest.description}</p>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Användning</div>
            {c.harvest.uses.map((u, i) => (
              <div key={i} style={{ background: colors.bg, borderRadius: 12, padding: "10px 14px", marginBottom: 6 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{u.use}</div>
                <div style={{ fontSize: 13, color: colors.textMuted, lineHeight: 1.5, marginTop: 2 }}>{u.tip}</div>
              </div>
            ))}
          </Section>
        )}

        <Section title="📈 Näringskurva">
          <p style={{ fontSize: 13, color: colors.textMuted, margin: "0 0 8px", lineHeight: 1.5 }}>
            Visar hur {c.name.toLowerCase()}ens behov av kväve, fosfor och kalium förändras genom säsongen.
          </p>
          <NutritionChart data={c.nutritionData} />
          <div style={{ marginTop: 16 }}>
            {c.nutritionTips.map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, fontSize: 13, lineHeight: 1.5 }}>
                <div style={{ minWidth: 6, borderRadius: 3, background: colors.accent, marginTop: 4, height: 20 }} />
                <div><strong>{tip.timing}:</strong> {tip.tip}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="🌡️ Jord & pH-krav" defaultOpen={false}>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: colors.text, margin: "0 0 12px" }}>{c.soil}</p>
          <PhBar min={c.ph.min} max={c.ph.max} ideal={c.ph.ideal} />
          <div style={{ marginTop: 16 }}>
            {c.soilTips.map((tip, i) => (
              <div key={i} style={{ fontSize: 13, lineHeight: 1.5, padding: "6px 0", display: "flex", gap: 8 }}>
                <span style={{ color: colors.accent }}>•</span> {tip}
              </div>
            ))}
          </div>
        </Section>

        <Section title="💧 Vattning" defaultOpen={false}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <span style={{ fontSize: 22 }}>{c.watering.icon}</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Vattenbehov: {c.watering.need}</div>
              <div style={{ fontSize: 12, color: colors.textMuted }}>{c.watering.summary}</div>
            </div>
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Per tillväxtfas</div>
          {c.watering.phases.map((phase, i) => {
            const needColor = phase.need.includes("Hög") ? "#1565C0" : phase.need.includes("Medel") ? "#4A90D9" : "#90CAF9";
            return (
              <div key={i} style={{ background: "#F0F7FF", borderRadius: 12, padding: "12px 14px", marginBottom: 8, borderLeft: `4px solid ${needColor}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>{phase.phase}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: needColor, padding: "2px 8px", background: "#E3F2FD", borderRadius: 10 }}>{phase.need}</span>
                </div>
                <div style={{ fontSize: 13, color: colors.textMuted, lineHeight: 1.5 }}>{phase.tip}</div>
              </div>
            );
          })}
          <div style={{ fontSize: 13, fontWeight: 600, marginTop: 14, marginBottom: 8, color: colors.danger }}>Vanliga vattenmisstag</div>
          {c.watering.mistakes.map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 13, lineHeight: 1.5 }}>
              <span style={{ color: colors.danger }}>✗</span> {m}
            </div>
          ))}
          <div style={{ background: "#EDF7F0", borderRadius: 12, padding: 14, marginTop: 12, fontSize: 13 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>💡 Bästa tipset</div>
            <div style={{ color: colors.textMuted, lineHeight: 1.5 }}>{c.watering.tip}</div>
          </div>
        </Section>

        <Section title={`📅 Tidslinje för din zon (${userZone})`} defaultOpen={false}>
          <div style={{ background: "#EDF7F0", borderRadius: 10, padding: "8px 12px", marginBottom: 12, fontSize: 12, color: colors.accentMuted }}>
            Anpassad för odlingszon {userZone} · {ZONE_INFO[userZone].region}
          </div>
          <div style={{ position: "relative", paddingLeft: 24 }}>
            <div style={{ position: "absolute", left: 8, top: 4, bottom: 4, width: 2, background: colors.accentLight }} />
            {timeline.map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", position: "relative" }}>
                <div style={{ position: "absolute", left: -20, width: 20, height: 20, borderRadius: "50%", background: colors.card, border: `2px solid ${colors.accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>
                  {t.icon}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.phase}</div>
                  <div style={{ fontSize: 12, color: colors.textMuted }}>{t.months}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="🌱 Companion planting" defaultOpen={false}>
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.accent, marginBottom: 8 }}>Bra grannar</div>
          {c.companions.good.map((comp, i) => (
            <div key={i} style={{ background: "#F0FAF4", borderRadius: 12, padding: "10px 14px", marginBottom: 6, fontSize: 13 }}>
              <div style={{ fontWeight: 600 }}>{comp.emoji} {comp.name}</div>
              <div style={{ color: colors.textMuted, marginTop: 2, lineHeight: 1.4 }}>{comp.why}</div>
            </div>
          ))}
          <div style={{ fontSize: 13, fontWeight: 600, color: colors.danger, marginTop: 16, marginBottom: 8 }}>Dåliga grannar</div>
          {c.companions.bad.map((comp, i) => (
            <div key={i} style={{ background: colors.dangerLight, borderRadius: 12, padding: "10px 14px", marginBottom: 6, fontSize: 13 }}>
              <div style={{ fontWeight: 600 }}>{comp.emoji} {comp.name}</div>
              <div style={{ color: colors.textMuted, marginTop: 2, lineHeight: 1.4 }}>{comp.why}</div>
            </div>
          ))}
        </Section>

        <Section title="🔄 Växtföljd" defaultOpen={false}>
          <div style={{ background: colors.dangerLight, borderRadius: 12, padding: 14, marginBottom: 12, fontSize: 13 }}>
            <div style={{ fontWeight: 600, color: colors.danger, marginBottom: 4 }}>Undvik efter: {c.rotation.avoid.join(", ")}</div>
            <div style={{ color: colors.textMuted, lineHeight: 1.4 }}>{c.rotation.avoidWhy}</div>
          </div>
          <div style={{ background: "#F0FAF4", borderRadius: 12, padding: 14, marginBottom: 8, fontSize: 13 }}>
            <div style={{ fontWeight: 600, color: colors.accent, marginBottom: 4 }}>Bra föregångare: {c.rotation.goodBefore.join(", ")}</div>
            <div style={{ color: colors.textMuted, lineHeight: 1.4 }}>{c.rotation.goodBeforeWhy}</div>
          </div>
          <div style={{ background: "#E3F2FD", borderRadius: 12, padding: 14, fontSize: 13 }}>
            <div style={{ fontWeight: 600, color: "#1565C0", marginBottom: 4 }}>Bra efterföljare: {c.rotation.goodAfter.join(", ")}</div>
            <div style={{ color: colors.textMuted, lineHeight: 1.4 }}>{c.rotation.goodAfterWhy}</div>
          </div>
        </Section>

        <Section title={`🏷️ Sorter för odlingszon ${userZone}`} defaultOpen={false}>
          {goodVarieties.length > 0 && (
            <>
              <div style={{ fontSize: 12, color: colors.accent, fontWeight: 600, marginBottom: 8 }}>Rekommenderade för din zon</div>
              {goodVarieties.map((v, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "start", padding: "10px 0", borderBottom: `1px solid ${colors.border}`, fontSize: 13 }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>{v.name}</div>
                    <div style={{ color: colors.textMuted, marginTop: 2 }}>{v.note}</div>
                  </div>
                  <span style={{ padding: "2px 10px", borderRadius: 12, fontSize: 11, background: "#E3F2FD", whiteSpace: "nowrap", marginLeft: 8 }}>Zon {Math.min(...v.zones)}–{Math.max(...v.zones)}</span>
                </div>
              ))}
            </>
          )}
          {otherVarieties.length > 0 && (
            <>
              <div style={{ fontSize: 12, color: colors.textMuted, fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Övriga sorter (ej din zon)</div>
              {otherVarieties.map((v, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "start", padding: "10px 0", borderBottom: `1px solid ${colors.border}`, fontSize: 13, opacity: 0.5 }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>{v.name}</div>
                    <div style={{ color: colors.textMuted, marginTop: 2 }}>{v.note}</div>
                  </div>
                  <span style={{ padding: "2px 10px", borderRadius: 12, fontSize: 11, background: "#F0EDE8", whiteSpace: "nowrap", marginLeft: 8 }}>Zon {Math.min(...v.zones)}–{Math.max(...v.zones)}</span>
                </div>
              ))}
            </>
          )}
        </Section>

        <Section title="🐛 Vanliga problem" defaultOpen={false}>
          {c.problems.map((p, i) => (
            <div key={i} style={{ marginBottom: 12, fontSize: 13 }}>
              <div style={{ fontWeight: 700 }}>{p.name}</div>
              <div style={{ color: colors.textMuted, marginTop: 2 }}>Symtom: {p.symptom}</div>
              <div style={{ color: colors.accent, marginTop: 2 }}>Åtgärd: {p.fix}</div>
            </div>
          ))}
        </Section>

        <Section title="📊 Skördekalkylator" defaultOpen={false}>
          <HarvestCalc calc={c.harvestCalc} name={c.name} />
        </Section>

        <Section title="🏺 Lagring" defaultOpen={false}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "#E3F2FD" }}>
              Håller: {c.storage.shelfLife}
            </span>
          </div>
          {c.storage.methods.map((m, i) => (
            <div key={i} style={{
              background: m.best ? "#EDF7F0" : colors.card,
              border: m.best ? `2px solid ${colors.accent}` : `1px solid ${colors.border}`,
              borderRadius: 14, padding: "12px 14px", marginBottom: 8,
              position: "relative",
            }}>
              {m.best && (
                <span style={{ position: "absolute", top: -8, right: 12, background: colors.accent, color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>
                  Rekommenderat
                </span>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 18 }}>{m.icon}</span>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{m.method}</div>
              </div>
              <div style={{ fontSize: 12, color: colors.accent, fontWeight: 600, marginBottom: 4 }}>{m.duration}</div>
              <div style={{ fontSize: 13, color: colors.textMuted, lineHeight: 1.5 }}>{m.description}</div>
            </div>
          ))}
          {c.storage.tips.length > 0 && (
            <>
              <div style={{ fontSize: 13, fontWeight: 600, marginTop: 14, marginBottom: 8 }}>Lagringstips</div>
              {c.storage.tips.map((tip, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 13, lineHeight: 1.5 }}>
                  <span style={{ color: colors.warm }}>💡</span> {tip}
                </div>
              ))}
            </>
          )}
        </Section>

        {/* Propagation for berries OR Seed saving for vegetables/herbs */}
        {isBerry && c.propagation ? (
          <Section title="🌱 Förökning" defaultOpen={false}>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: DIFFICULTY_INFO[c.propagation.difficulty].color }}>
                {DIFFICULTY_INFO[c.propagation.difficulty].icon} {c.propagation.difficulty}
              </span>
            </div>
            {c.propagation.methods.map((m, i) => (
              <div key={i} style={{ background: colors.bg, borderRadius: 12, padding: "12px 14px", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 18 }}>{m.icon}</span>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{m.method}</div>
                </div>
                <div style={{ fontSize: 13, color: colors.textMuted, lineHeight: 1.5 }}>{m.description}</div>
              </div>
            ))}
            <div style={{ background: "#EDF7F0", borderRadius: 12, padding: 14, marginTop: 8, fontSize: 13 }}>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>💡 Tips</div>
              <div style={{ color: colors.textMuted, lineHeight: 1.5 }}>{c.propagation.tip}</div>
            </div>
          </Section>
        ) : c.seedSaving ? (
          <Section title="🌾 Ta eget frö" defaultOpen={false}>
            <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
              <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: DIFFICULTY_INFO[c.seedSaving.difficulty].color }}>
                {DIFFICULTY_INFO[c.seedSaving.difficulty].icon} {c.seedSaving.difficulty}
              </span>
              <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: c.seedSaving.type === "Självpollinerare" ? "#E3F2FD" : "#FFF3CD" }}>
                {c.seedSaving.type === "Självpollinerare" ? "✓" : "⚠"} {c.seedSaving.type}
              </span>
              {c.seedSaving.biennial && (
                <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "#F3E5F5" }}>
                  Tvåårig
                </span>
              )}
              <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: colors.warmLight }}>
                Håller {c.seedSaving.storageYears}
              </span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: colors.text, margin: "0 0 12px" }}>{c.seedSaving.description}</p>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Steg för steg</div>
            {c.seedSaving.steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 13, lineHeight: 1.5 }}>
                <div style={{ minWidth: 22, height: 22, borderRadius: "50%", background: colors.warm, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, marginTop: 1 }}>{i + 1}</div>
                <div>{step}</div>
              </div>
            ))}
            <div style={{ background: "#FFF8E7", borderRadius: 12, padding: 14, marginTop: 12, fontSize: 13 }}>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>⚠ Korspollinering</div>
              <div style={{ color: colors.textMuted, lineHeight: 1.5 }}>{c.seedSaving.isolation}</div>
            </div>
            <div style={{ background: "#EDF7F0", borderRadius: 12, padding: 14, marginTop: 8, fontSize: 13 }}>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>💡 Tips</div>
              <div style={{ color: colors.textMuted, lineHeight: 1.5 }}>{c.seedSaving.tip}</div>
            </div>
          </Section>
        ) : null}
      </div>
    </div>
  );
};

/* ── Crop List ── */
const CATEGORIES = [
  { id: "grönsaker", label: "Grönsaker", emoji: "🥬", color: colors.accent },
  { id: "bär", label: "Bär", emoji: "🫐", color: "#8B45A6" },
  { id: "kryddor", label: "Kryddor", emoji: "🌿", color: "#B8860B" },
];

const CropList = ({ onSelect, userZone, onZoneClick }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Alla");
  const [category, setCategory] = useState("grönsaker");

  const catCrops = CROP_LIST.filter((c) => c.category === category);
  const families = ["Alla", ...new Set(catCrops.map((c) => c.familyLatin))];
  const filtered = catCrops.filter(
    (c) => (filter === "Alla" || c.familyLatin === filter) && c.name.toLowerCase().includes(search.toLowerCase())
  );

  const activeCat = CATEGORIES.find((c) => c.id === category);
  const unlockedCount = filtered.filter((c) => !c.locked).length;
  const lockedCount = filtered.filter((c) => c.locked).length;

  return (
    <div style={{ maxWidth: 480, margin: "0 auto" }}>
      <div style={{ textAlign: "center", padding: "24px 0 8px" }}>
        <div style={{ fontSize: 36, marginBottom: 4 }}>🌱</div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: colors.text, margin: 0 }}>Grödguiden</h1>
        <p style={{ color: colors.textMuted, fontSize: 14, margin: "4px 0 0" }}>Allt du behöver veta – en gröda i taget</p>
      </div>

      {/* Category Toggle */}
      <div style={{
        display: "flex", gap: 0, marginBottom: 16, background: colors.card,
        borderRadius: 16, border: `1px solid ${colors.border}`, overflow: "hidden",
      }}>
        {CATEGORIES.map((cat) => {
          const isActive = category === cat.id;
          const count = CROP_LIST.filter((c) => c.category === cat.id).length;
          return (
            <button key={cat.id} onClick={() => { setCategory(cat.id); setFilter("Alla"); }}
              style={{
                flex: 1, padding: "12px 8px", border: "none", cursor: "pointer",
                background: isActive ? cat.color : "transparent",
                color: isActive ? "#fff" : colors.textMuted,
                fontSize: 13, fontWeight: 700, transition: "all 0.2s",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
              }}
            >
              <span style={{ fontSize: 20 }}>{cat.emoji}</span>
              <span>{cat.label}</span>
              <span style={{ fontSize: 10, opacity: 0.7 }}>{count} st</span>
            </button>
          );
        })}
      </div>

      <button
        onClick={onZoneClick}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px", borderRadius: 14, border: `2px solid ${colors.accent}`,
          background: "#EDF7F0", cursor: "pointer", marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: colors.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800 }}>
            {userZone}
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: colors.text }}>Odlingszon {userZone}</div>
            <div style={{ fontSize: 11, color: colors.textMuted }}>{ZONE_INFO[userZone].region} · Tryck för att byta</div>
          </div>
        </div>
        <span style={{ fontSize: 14, color: colors.accentMuted }}>Byt ›</span>
      </button>

      <div style={{ position: "relative", marginBottom: 12 }}>
        <input type="text" placeholder={`Sök ${activeCat.label.toLowerCase()}...`} value={search} onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: "12px 16px 12px 40px", borderRadius: 14, border: `1px solid ${colors.border}`, fontSize: 15, background: colors.card, outline: "none", boxSizing: "border-box" }}
        />
        <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: colors.textMuted }}>🔍</span>
      </div>

      {families.length > 2 && (
        <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto", paddingBottom: 4 }}>
          {families.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              style={{
                padding: "6px 14px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap",
                background: filter === f ? activeCat.color : colors.card,
                color: filter === f ? "#fff" : colors.textMuted,
                boxShadow: filter === f ? "none" : `0 0 0 1px ${colors.border}`,
              }}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {filtered.map((crop) => {
        const d = DIFFICULTY_INFO[crop.difficulty];
        return (
          <button key={crop.id} onClick={() => !crop.locked && onSelect(crop.id)}
            style={{
              width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "14px 16px",
              background: crop.locked ? "#FAFAF8" : colors.card, border: `1px solid ${colors.border}`,
              borderRadius: 16, marginBottom: 8, cursor: crop.locked ? "default" : "pointer",
              opacity: crop.locked ? 0.6 : 1, textAlign: "left", transition: "box-shadow 0.15s",
            }}
            onMouseEnter={(e) => { if (!crop.locked) e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          >
            <div style={{ fontSize: 32 }}>{crop.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: colors.text }}>{crop.name}</div>
              <div style={{ fontSize: 12, color: colors.textMuted }}>
                {crop.familyLatin} ({crop.family}) · <span style={{ color: d.color === "#B7E4C7" ? colors.accent : d.color === "#FFF3CD" ? "#B8860B" : colors.danger }}>{d.icon} {crop.difficulty}</span>
              </div>
            </div>
            {crop.locked ? (
              <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 10, background: "#F0EDE8", color: colors.textMuted }}>Snart</span>
            ) : (
              <span style={{ fontSize: 18, color: colors.accentMuted }}>→</span>
            )}
          </button>
        );
      })}

      <div style={{ textAlign: "center", padding: "24px 0", color: colors.textMuted, fontSize: 13 }}>
        {unlockedCount} {activeCat.label.toLowerCase()} tillgängliga · {lockedCount} kommer snart
        <br />
        <span style={{ fontSize: 12 }}>Klicka på en olåst {category === "grönsaker" ? "gröda" : category === "bär" ? "bärbuske" : "krydda"} för att se demo</span>
      </div>
    </div>
  );
};

/* ── App Root ── */
export default function App() {
  const [view, setView] = useState("list");
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [userZone, setUserZone] = useState(4);
  const [showZoneModal, setShowZoneModal] = useState(false);

  return (
    <div style={{ background: colors.bg, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", padding: "0 16px 40px" }}>
      {view === "list" ? (
        <CropList
          onSelect={(id) => { setSelectedCrop(id); setView("crop"); }}
          userZone={userZone}
          onZoneClick={() => setShowZoneModal(true)}
        />
      ) : (
        <CropPage crop={selectedCrop} onBack={() => setView("list")} userZone={userZone} />
      )}
      {showZoneModal && (
        <ZoneSelector currentZone={userZone} onSelect={setUserZone} onClose={() => setShowZoneModal(false)} />
      )}
    </div>
  );
}
