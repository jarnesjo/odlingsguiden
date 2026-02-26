# Prompt: Grödguidens Designsystem

## Instruktion till AI-agent

Du ska skapa UI-komponenter, skärmar eller visuella element för Grödguiden-appen. Följ denna prompt exakt för att säkerställa att allt du bygger passar in i den befintliga designen.

Referensfil: `grodguiden-designguide.jsx` – innehåller paletter, ikoner och app-preview.

---

## 1. Känsla & Personlighet

Grödguiden ska kännas som att öppna en vacker, handgjord odlingsbok – inte en tech-app.

- **Jordnär.** Färger hämtade från naturen – mörk skog, varm lera, solbränd jord.
- **Varm & inbjudande.** Som att sätta sig i en trädgård med en kopp kaffe.
- **Handgjord.** Mjuka former, rundade hörn, subtila skuggor. Aldrig skarpt eller sterilt.
- **Tydlig utan att skrika.** Informationen ska synas – designen ska aldrig konkurrera med innehållet.

### Vad vi INTE är:
- ❌ Tech-grönt (neon, limegrönt, "startup-grönt")
- ❌ Sterilt vitt med tunna grå linjer (Apples designspråk)
- ❌ Mörkt tema / dashboard-känsla
- ❌ Platt och färglöst
- ❌ Överdrivet illustrerat / barnsligt

---

## 2. Färgpalett – "Jord & Grönska"

### Primära färger

| Namn | Hex | Användning |
|------|-----|-----------|
| Accent | `#3D6B4F` | Primärfärg, knappar, aktiva element, rubriker |
| Accent ljus | `#C8DEC9` | Badges, bakgrunder för positiva element |
| Accent mörk | `#2A4A36` | Hover-states, footers, mörka ytor |
| Varm | `#C4956A` | Sekundärfärg, tips-ikoner, varma accenter |
| Varm ljus | `#F0E4D5` | Bakgrund för tips/info-rutor |
| Varm mörk | `#96694A` | Text på varma bakgrunder |
| Jord | `#8B7355` | Jord/frö-relaterade element, tertiär accent |
| Jord ljus | `#D4C4AD` | Jord-badges, sekundära bakgrunder |

### Kategorifärger

| Kategori | Primär | Ljus | Användning |
|----------|--------|------|-----------|
| Grönsaker | `#3D6B4F` | `#C8DEC9` | Delar primärfärg med accent |
| Bär | `#7B4B6A` | `#E8D1DF` | Lila/rödbrunt – mogen frukt |
| Kryddor | `#6B7D3E` | `#DDE5C8` | Olivgrönt – torkade örter |

### UI-färger

| Namn | Hex | Användning |
|------|-----|-----------|
| Bakgrund | `#F5F2EB` | Appens bakgrund, aldrig rent vitt |
| Kort | `#FEFDFB` | Kort, modaler, content-ytor |
| Text | `#2C3028` | Primär text, rubriker |
| Text dämpad | `#7A7568` | Sekundär text, labels, muted content |
| Ram | `#E2DDD4` | Borders, separatorer |
| Varning | `#B54A3F` | Fel, varningar, "dåliga grannar" |
| Varning ljus | `#F5DDD9` | Bakgrund för varningselement |

### Regler:
- **Aldrig rent vitt (#FFFFFF) som bakgrund.** Använd `#FEFDFB` för kort och `#F5F2EB` för sidor.
- **Aldrig rent svart (#000000) för text.** Använd `#2C3028` (mörkgrön-brun).
- **Kategorifärger ska BARA användas för kategori-specifika element** – inte som generell accent.
- **Varma toner (`warm`, `earth`) för tips, positiva element, personliga råd.**
- **Accent (`#3D6B4F`) för navigation, knappar, primära actions.**

---

## 3. Ikonstil

### Principer:
- **Tunna linjer (1.8px strokeWidth)**
- **Rundade linjeändar (strokeLinecap="round")**
- **Subtila fyllningar (opacity 0.12–0.15)** bakom linjerna
- **Handritad känsla** – inte perfekt geometriska, mjuka kurvor
- **Monokroma** – varje ikon använder EN färg (med opacity-variation)
- **24×24 standardstorlek**, skalbar till 16–48

### Befintliga ikoner (se `grodguiden-designguide.jsx`):

| Ikon | Fil-referens | Färg | Används för |
|------|-------------|------|------------|
| Vegetable | `Icons.vegetable` | Accent | Grönsaker-kategori |
| Berry | `Icons.berry` | Berry | Bär-kategori |
| Herb | `Icons.herb` | Herb | Kryddor-kategori |
| Sun | `Icons.sun` | Warm | Trivs bäst, solbehov |
| Water | `Icons.water` | `#4A7A8A` | Vattning |
| Soil | `Icons.soil` | Earth | Jord & pH |
| Scissors | `Icons.scissors` | Accent | Beskärning |
| Seed | `Icons.seed` | Earth | Frö & sådd |
| Calendar | `Icons.calendar` | Accent | Tidslinje |
| Zone | `Icons.zone` | Accent | Zonväljare |
| Logo | `Icons.logo` | Accent + Warm | Appens logotyp |

### Skapa nya ikoner:
```jsx
// Mall för ny ikon
const newIcon = (color = "#3D6B4F", size = 24) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Subtil bakgrundsfyllning */}
    <path d="..." fill={color} opacity="0.15"/>
    {/* Huvudlinjer */}
    <path d="..." stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
```

### Regler:
- **Aldrig emoji i produktionskod.** Emoji används bara i prototypen. I produktionen → SVG-ikoner.
- **Aldrig filled/solid ikoner.** Alltid outlined med subtil fill bakom.
- **Aldrig Font Awesome, Material Icons eller liknande.** Egna ikoner genom hela appen.
- **Samma strokeWidth (1.8) överallt.** Konsistens är viktigare än variation.

---

## 4. Typografi

### Font
System-font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

Inget Google Fonts-beroende. System-fonter är snabba, fungerar offline, och ser bra ut på alla plattformar.

### Storlekar & vikter

| Element | Storlek | Vikt | Färg |
|---------|---------|------|------|
| Sidtitel (H1) | 28px | 800 | text |
| Sektionstitel (H2) | 15px | 700 | text |
| Brödtext | 13px | 400 | text |
| Undertitel/label | 12px | 400 | textMuted |
| Badge/etikett | 12px | 600 | accent/kategori |
| Stor siffra (data) | 22px | 700 | accent |
| Liten text | 11px | 400 | textMuted |

### Regler:
- **Hierarki genom vikt, inte storlek.** 13px bold syns tydligare än 16px regular.
- **Max 2 storlekar per komponent.** T.ex. 13px brödtext + 12px label.
- **Aldrig VERSALER för rubriker.** Versaler bara för korta labels (max 2 ord).
- **line-height: 1.5 för brödtext**, 1.2 för rubriker.

---

## 5. Komponenter

### Kort (Card)
```
background: #FEFDFB
border: 1px solid #E2DDD4
borderRadius: 16px (stora kort), 12px (små kort), 20px (huvudkort)
padding: 14–24px
box-shadow: ingen (eller "0 2px 8px rgba(0,0,0,0.04)" vid hover)
```

### Badges
```
padding: 4px 12px
borderRadius: 20px (pill-shape)
fontSize: 12px
fontWeight: 600
```
- Gröna badges (enkel): `bg: #C8DEC9, color: #3D6B4F`
- Gula badges (medel): `bg: #F0E4D5, color: #96694A`
- Röda badges (avancerad): `bg: #F5DDD9, color: #B54A3F`

### Knappar
```
Primär: bg: #3D6B4F, color: #fff, borderRadius: 14px
Sekundär: bg: #FEFDFB, border: 1px solid #E2DDD4, color: #2C3028
Hover: box-shadow: 0 2px 12px rgba(0,0,0,0.08)
```

### Info-rutor
```
Tips: bg: #F0E4D5, borderLeft: 4px solid #C4956A
Varning: bg: #F5DDD9, borderLeft: 4px solid #B54A3F
Success: bg: #C8DEC9, borderLeft: 4px solid #3D6B4F
Info: bg: #E3F2FD, borderLeft: 4px solid #4A7A8A
```

### Sektioner (collapsible)
```
borderBottom: 1px solid #E2DDD4
padding: 16px 0
Titel: 15px, 700 weight
Chevron: ▾ med rotation 0→180°
```

---

## 6. Spacing & Layout

### Spacing-skala
```
4px  – Minimalt (mellan ikon och text)
8px  – Litet (mellan badges, mellan listobjekt)
12px – Normalt (padding i kort, gap mellan element)
16px – Mellanstort (marginaler, gap i grid)
20px – Stort (padding i huvudkort)
24px – Extra stort (sektionsavstånd)
40px – Sektionsbrytning
```

### Layout
- **Max bredd: 480px** – appen är mobilfokuserad
- **Horisontellt: 16px padding** på sidorna
- **Grid: 8px gap** för små element, 12px för kort

---

## 7. Animationer & Interaktion

### Principer:
- **Subtila, aldrig flashiga.** Appen ska kännas stabil och pålitlig.
- **transition: 0.15–0.2s** för hover-effekter
- **Inga bouncing, elastiska eller dramatiska animationer.**

### Specifika:
- Hover på kort: `box-shadow: 0 2px 12px rgba(0,0,0,0.08)` med 0.15s transition
- Sektions-chevron: `transform: rotate(180deg)` med 0.2s transition
- Kategoritoggle: `background` med 0.2s transition

---

## 8. Kvalitetschecklista för nya komponenter

- [ ] **Färger från paletten** – inga nya hex-koder utanför systemet
- [ ] **Ikoner i rätt stil** – tunn linje (1.8px), rundade ändar, subtil fill
- [ ] **Typografi konsekvent** – storlekar och vikter enligt skalan
- [ ] **Inga emojis** – SVG-ikoner istället (emoji OK bara i prototypfasen)
- [ ] **borderRadius konsekvent** – 12/14/16/20px, aldrig 5px eller 30px
- [ ] **Aldrig rent vitt eller svart** – använd palettnyanser
- [ ] **Hover-states** – subtil shadow, inte färgbyte
- [ ] **Responsiv** – fungerar i 320–480px bredd
- [ ] **Tillgänglig** – textkontrast minst 4.5:1 mot bakgrund

---

## 9. Tonalitet i mikrokopia

UI-text (knappar, labels, felmeddelanden) ska följa samma ton som grödtexterna:

### Bra:
- ✅ "Byt zon" (kort, direkt)
- ✅ "Sök bland grönsaker..." (vänligt, med ...)
- ✅ "2 grödor tillgängliga · 8 kommer snart" (informativ, positiv)
- ✅ "Tryck för att byta" (hjälpsam)

### Dåligt:
- ❌ "Ändra odlingszon" (för formellt)
- ❌ "Filtrera resultat" (tech-språk)
- ❌ "Inget hittades" (kallt)
- ❌ "Error: No data" (aldrig engelska, aldrig tech)

### Tomt state (inga resultat):
"Hmm, vi hittade inga grödor som matchar. Prova ett annat sökord?"

### Laddning:
"Laddar..." eller en subtil spinner. Aldrig "Please wait."

---

## 10. Filreferenser

| Fil | Beskrivning |
|-----|------------|
| `grodguiden-designguide.jsx` | Interaktiv designguide med paletter, ikoner, app-preview |
| `grodguiden-wireframe.jsx` | Huvudprototyp – se befintliga komponenter som referens |
| `PROMPT-designsystem.md` | Denna fil |
| `PROMPT-lagg-till-groda.md` | Tonguide för grödtexter (se steg 5 i den prompten) |

---

*Senast uppdaterad: 2026-02-26*
