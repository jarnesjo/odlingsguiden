# Prompt: Skapa SVG-illustrationer för Grödguiden

## Instruktion till AI-agent

Du ska skapa SVG-illustrationer av grödor, bär, kryddor eller frukt för Grödguiden-appen. Varje gröda behöver **två versioner**: en detaljerad profilbild och en förenklad listikon.

Referensfil: `grodguiden-illustrationer.jsx` – innehåller Morot och Tomat som stilreferens.

---

## 1. Övergripande stil

Illustrationerna ska kännas som **mjuka blyertsskisser i en handgjord odlingsbok**. Inte fotorealistiska, inte barnboksaktiga – mittemellan. Tänk: en vacker plansch i ett trädgårdsmagasin, men i SVG.

### Känsla:
- Handritad, inte perfekt geometrisk
- Varm och jordnära
- Botaniskt korrekt i proportioner (rätt antal blad, rätt form)
- Levande – varje gröda ska ha karaktär

---

## 2. Tekniska regler

### Gemensamt för alla illustrationer:

```
Viewbox:      Profil: 0 0 200 200 | Lista: 0 0 48 48
StrokeWidth:  Huvudlinjer 1.8px | Detaljer 1.0–1.5px | Textur 0.6–1.0px
LineCap:      Alltid "round"
Fill:         Aldrig solid. Använd opacity 0.12–0.20 för bakgrundsfyllning
Färger:       Grödans naturliga färg men dämpad (aldrig mättad/grellm)
Format:       React JSX-komponent med `size`-prop
```

### Färger per typ:

| Typ | Kropp-färg | Blad/blast | Bakgrundscirkel |
|-----|-----------|------------|-----------------|
| Grönsaker | Grödans färg, dämpad | `#3D6B4F` (accent) | `#C8DEC9` opacity 0.15 |
| Bär | Bärets färg, dämpad | `#3D6B4F` (accent) | `#E8D1DF` opacity 0.15 |
| Kryddor | Örtens färg, dämpad | `#3D6B4F` (accent) | `#DDE5C8` opacity 0.15 |
| Frukt | Fruktens färg, dämpad | `#3D6B4F` (accent) | `#F0DDD0` opacity 0.15 |

### Färgexempel (dämpade toner):

| Gröda | Kropp-färg (stroke) | Fill-opacity |
|-------|-------------------|-------------|
| Morot | `#D4782A` | 0.20 med `#E8943A` |
| Tomat | `#C0392B` | 0.15 med `#D94F3B` |
| Hallon | `#9B3A5A` | 0.15 |
| Basilika | `#4A7A3F` | 0.12 |
| Äpple | `#C0392B` / `#5A8A3F` | 0.15 |

---

## 3. Profilbild (200×200)

Den stora illustrationen som visas överst på varje grödprofil.

### Struktur (lager uppifrån och ner):

1. **Bakgrundscirkel** – `cx="100" cy="100" r="90"` med kategorifärg, opacity 0.15
2. **Blast/blad/stjälk** – accent-grönt (#3D6B4F), flera lager med avtagande opacity
3. **Huvudkropp** – grödans form med dämpad fill (opacity 0.15–0.20) + stroke (1.8px)
4. **Textur** – subtila linjer/ränder (opacity 0.15–0.30) för handritad känsla
5. **Ljusreflex** – en ellips med ljusare nyans (opacity 0.2–0.25) ger volym
6. **Detaljer** – rothår, jordpartiklar, fröprickar etc. (opacity 0.15–0.3)
7. **Skugga** – valfri ellips under grödan (earth-färg, opacity 0.08)

### Botaniska krav:

- **Rätt proportioner.** En morot är lång och smal, en tomat är rund med lober.
- **Rätt blast.** Morot har fjäderbladigt blast, tomat har sepaler, basilika har ovala blad.
- **Karaktär.** Varje gröda ska vara omedelbart igenkännbar utan text.

### Detaljnivå:

Tänk 15–30 path-element per illustration. Tillräckligt för att se handritad ut, inte så mycket att det blir plottrigt. Referens: Morot i `grodguiden-illustrationer.jsx` har ~25 element.

---

## 4. Listikon (48×48)

Förenklad version för crop-listan. Ersätter emoji.

### Regler:

- **Samma grundform** som profilbilden men drastiskt förenklad
- **5–12 path-element** – bara silhuett + nyckeldetaljer
- **Inget bakgrundscirkel** (listan har egen bakgrund)
- **Samma färger** som profilversionen
- **Strokewidth 1.8px** fortfarande (skala inte ner)

### Förenkling:

| Element | Profil (200px) | Lista (48px) |
|---------|---------------|-------------|
| Blast | 8–10 paths, flerbladigt | 3–4 paths, stiliserat |
| Kropp | Full form med textur | Enkel kontur |
| Textur | 5–6 ränder/linjer | 2–3 antydningar |
| Ljusreflex | Ja | Nej |
| Jordpartiklar | Ja | Nej |
| Skugga | Valfritt | Nej |

---

## 5. Steg-för-steg: Skapa en ny illustration

### Steg 1: Research
Studera grödans utseende. Notera: form (rund/lång/buskig), bladtyp (fjäderblad/ovala/nålformade), färg, unika kännetecken (lober på tomat, ränder på squash, taggar på hallon).

### Steg 2: Profilbild (200×200)

```jsx
const [Gröda]Illustration = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* 1. Bakgrundscirkel */}
    <circle cx="100" cy="100" r="90" fill="[KATEGORIFÄRG]" opacity="0.15" />

    {/* 2. Blast/blad – accent-grönt, flera lager */}
    <path d="..." stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
    <path d="..." stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

    {/* 3. Huvudkropp – dämpad fill + stroke */}
    <path d="[GRÖDANS KONTUR]" fill="[FÄRG]" opacity="0.18" />
    <path d="[GRÖDANS KONTUR]" stroke="[FÄRG_MÖRKARE]" strokeWidth="1.8" fill="none" />

    {/* 4. Textur – subtila linjer */}
    <path d="..." stroke="[FÄRG_MÖRKARE]" strokeWidth="1" opacity="0.25" />

    {/* 5. Ljusreflex */}
    <ellipse cx="..." cy="..." rx="..." ry="..." fill="[FÄRG_LJUSARE]" opacity="0.2" />

    {/* 6. Detaljer */}
    {/* ... rothår, prickar, etc */}

    {/* 7. Skugga */}
    <ellipse cx="100" cy="185" rx="35" ry="5" fill="#8B7355" opacity="0.08" />
  </svg>
);
```

### Steg 3: Listikon (48×48)

```jsx
const [Gröda]Icon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Förenklat blast */}
    <path d="..." stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

    {/* Enkel kroppskontur */}
    <path d="..." fill="[FÄRG]" opacity="0.2" />
    <path d="..." stroke="[FÄRG_MÖRKARE]" strokeWidth="1.8" fill="none" />

    {/* 2-3 texturlinjer */}
    <path d="..." stroke="[FÄRG_MÖRKARE]" strokeWidth="0.8" opacity="0.25" />
  </svg>
);
```

### Steg 4: Kvalitetskontroll

- [ ] Omedelbart igenkännbar utan text?
- [ ] Samma strokeWidth (1.8px) som alla andra illustrationer?
- [ ] Dämpade färger, aldrig mättade/grella?
- [ ] Blast/blad i accent-grönt (#3D6B4F)?
- [ ] Fill med opacity (aldrig solid)?
- [ ] Ljusreflex ger volym (profilversion)?
- [ ] Bakgrundscirkel i rätt kategorifärg?
- [ ] Botaniskt rimligt (rätt bladform, rätt proportioner)?
- [ ] Listikon funkar i 48×48 utan att bli grötigt?
- [ ] React JSX-format med size-prop?

---

## 6. Exportera

Placera båda versionerna i `grodguiden-illustrationer.jsx` efter befintliga illustrationer. Följ samma mönster:

```jsx
// ── [Gröda] – Detaljerad illustration ──
const [Gröda]Illustration = ({ size = 200 }) => ( ... );

// Listikon
const [Gröda]Icon = ({ size = 48 }) => ( ... );
```

Lägg sedan till grödan i preview-sektionerna längre ner i filen (stora visningen, listvisningen, profilsidan).

---

## 7. Exempel på beställning

> "Skapa SVG-illustrationer för **Ärtor** (grönsak). Referens: morot och tomat i grodguiden-illustrationer.jsx. Ärtor har rundade baljor med 4–6 ärtor synliga genom ett halvöppet skal, klänga rankor, och fjärilsblommor. Färg: dämpad grön (#6B8E3A, fill opacity 0.18). Skapa profilbild (200×200) och listikon (48×48)."

---

## 8. Referensfiler

| Fil | Innehåll |
|-----|----------|
| `grodguiden-illustrationer.jsx` | Befintliga illustrationer (Morot, Tomat) + preview |
| `grodguiden-designguide.jsx` | Paletter, ikoner, typografi |
| `docs/guides/designsystem.md` | Fullständigt designsystem |
| `docs/guides/ny-groda.md` | Tonguide och gröddata-struktur |

---

*Senast uppdaterad: 2026-02-26*
