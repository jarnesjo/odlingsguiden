# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

---

## Roadmap-Driven Workflow

`docs/ROADMAP.md` is the source of truth for what to build. It uses thematic Epics (Innehåll, Funktioner, Performance, etc.) with numbered substeps and checkboxes. Epics are independent — we pick what gives most value right now, across any epic.

- **On session start:** Read `docs/ROADMAP.md` and the latest `docs/handoffs/*.yml` to understand current progress.
- **Before starting work:** Check which roadmap step is next. Suggest it if the user hasn't specified a task. The user may choose any step from any epic.
- **After completing work:** Update `docs/ROADMAP.md` — check off completed items and mark steps with ✅.
- **When proposing tasks:** Reference the relevant roadmap step (e.g., "4.2 LCP-optimering").
- **New ideas:** Add to the "Idéer" section in ROADMAP.md. No priority needed — they get picked up when the time is right.

### ROADMAP.md Format

The roadmap follows a structured format designed for AI-assisted development. This format is portable — use it in any project.

**Structure:**

```markdown
# Projektnamn – Roadmap

> Tagline

## Vision

Short vision statement.

## Epic: Namn

Description of what the epic covers.

### 1.1 Step name ✅ (when done)

> One-line summary of scope

- [x] Completed subtask
- [ ] Pending subtask

Plan: `docs/plans/1.1-slug.yml`

### 1.2 Step name

> One-line summary of scope

- [ ] Subtask 1
- [ ] Subtask 2

## Epic: Annat namn

...

## Idéer

No priority. Picked up when the time is right.

- Idea 1
- Idea 2

## Referens

Stable reference material: design principles, tech stack, competitor analysis, file table, known issues. Things that change rarely.
```

**Key rules:**

- **Thematic Epics** (Epic: Innehåll, Epic: Funktioner, etc.) with **numbered substeps** (1.1, 1.2, 2.1, 2.2...)
- **Checkboxes** on every actionable item — never just prose
- **✅ after step title** when all checkboxes are done
- **`> quote`** under each step title = one-line scope description
- **Epics are independent** — pick what gives most value now, from any epic
- **Idéer section** at the bottom — unordered, unprioritized ideas
- **Referens section** — stable info that rarely changes (design principles, tech stack, competitor analysis, file table)
- Steps can have **context blocks** (tables, explanations) below the checkboxes for complex steps
- **Plan file reference** under each step when a detailed plan exists

---

## Session Continuity

When context gets long or before ending a session, write a handoff file.

**Handoff file spec:**

- Path: `docs/handoffs/{YYYY-MM-DD-HHmmss}.yml`
- Timestamp: use `date +%Y-%m-%d-%H%M%S` (never estimate)
- Format:

```yaml
meta:
  date: YYYY-MM-DD
  author: claude
  phase: "current roadmap phase"
  status: aktiv | avslutad
  session_notes: |
    Brief summary of what happened this session.

tech_stack:
  current: [list of current tools/libs]
  planned:
    web: ...
    app: ...

structure:
  prototypes: [file list]
  docs: [file list]

database: null # or description when applicable
api_endpoints: null # or list when applicable
commands: null # or list of build/test/lint commands

next_steps:
  - "Specific actionable task 1"
  - "Specific actionable task 2"

context:
  decisions:
    - "Key decision and why"
  constraints:
    - "Important constraint"

known_issues:
  - "Issue description"
```

**Triggers** for writing a handoff:

- User says: "bye", "hejdå", "för idag", "stänger", "avslutar", "done for today"
- User says: "handoff", "/handoff", "spara läge"
- Context window is getting large — proactively suggest writing one

**On session start:** Check for the latest handoff and summarize it for the user.

---

## Plans, Guides & Documentation

### docs/ structure

```
docs/
  ROADMAP.md                    — Faser, substeg, idéer, referens
  plans/                        — Detaljerade implementationsplaner (YAML)
    1.2-separera-data.yml
    1.3-grafisk-profil.yml
  guides/                       — Kvalitetsguider och specifikationer
    ny-groda.md                 — Hur man lägger till en grödprofil (16-punkts checklista)
    designsystem.md             — Färger, typografi, spacing, komponenter
    svg-illustrationer.md       — SVG-stil, storlekar, teknisk spec
    kallor.md                   — Källhantering, metod, fröfilosofi, AI-transparens
  research/                     — Djup research per ämne
    f1-frodebatten.md           — F1-hybrider vs kultursorter, svenska aktörer
  handoffs/                     — Sessionshandoffs (YAML)
    2026-02-26-234845.yml
```

### Plan files

**Naming:** `{fas}.{steg}-{slug}.yml` — matchar roadmap-steget exakt. Examples: `1.2-separera-data.yml`, `1.3-grafisk-profil.yml`, `2.2-sokfunktion.yml`

When starting a new feature or task:

1. Check `docs/plans/` for existing plan files
2. Write the implementation plan as YAML before coding
3. Use the plan as a checklist during implementation
4. Update `docs/ROADMAP.md` — check off items and mark step with ✅ when done

---

## Project Overview

Odlingsguiden (formerly Grödguiden) is a Swedish growing guide app — a deep, zone-adapted reference for vegetables, berries, herbs, and fruits grown in Sweden. Created by Lilla Bosgården (lillabosgarden.se). Currently in prototype stage with plans for a React Native mobile app (iOS/Android).

## Current State

**Vite + React 19 + TypeScript webbapp** med prerenderade routes (102 sidor). Serveras som statisk HTML under `lillabosgarden.se/odlingsguiden` via nginx alias.

- `src/` — Huvudkod (komponenter, data, hooks, theme, utils)
- `scripts/` — Prerender och sitemap-generering
- `server/` — Feedback API (PHP + SMTP)
- `prototypes/` — Äldre standalone JSX-prototyper (Codesandbox)

## Key Documentation

- `docs/ROADMAP.md` — 6-phase development plan (Phase 1 / Q1 2026 in progress)
- `docs/guides/ny-groda.md` — **Critical**: instructions and quality checklist for adding new crops (16-point checklist, tone guide, full data structure)
- `docs/guides/designsystem.md` — Design system specification (colors, typography, icons, components, spacing)
- `docs/guides/svg-illustrationer.md` — SVG illustration guidelines (200×200 detailed + 48×48 list icons)

## Architecture & Data Model

Gröddata finns som separata TypeScript-filer i `src/data/crops/` (en fil per gröda). Laddas lazy via `import()`. Varje gröda har 25+ fält: basic info, zoner, odlingsdata, optimala förhållanden, bevattning, jord, tidslinje (zonspecifik för zon 1/4/6), näringskurvor (N-P-K), samodling, växtföljd, sorter, problem, sådd, fröbesparing, lagring och skördeberäkningar.

Key data structures:

- **ZONE_INFO** — Sweden's 8 growing zones with frost dates and frost-free days
- **DIFFICULTY_INFO** — Enkel/Medel/Avancerad difficulty levels
- **CROP_LIST** — Registry i `src/data/cropList.ts` med id, name, family, difficulty, category
- **Crop files** — `src/data/crops/{id}.ts` (lazy-loaded per gröda)

## Tone & Voice (Critical Convention)

The app uses "kompis-tonen" (friend's tone) — warm, personal, sometimes humorous. **All content must be in Swedish.**

- Personify plants: "Basilikan älskar fukt men HATAR att stå blöt"
- Describe plant reactions: "Morötter blir faktiskt sötare efter frost!"
- Dramatize important moments: "Kritisk period!" for watering stress
- Use feelings, not percentages: "hon måste kunna andas"
- Never use English words in app content — always Swedish equivalents
- Avoid marketing speak — "Enkel" not "Superenkelt"
- Include hard-won wisdom and real grower experience
- **Never use en-dash `–` (U+2013) in source code** — always use plain hyphen `-` (U+002D). En-dashes trigger IDE warnings and add no value in app text.
- **Alltid korrekt åäö i all källkod** — kommentarer, strängar, variabelnamn. Aldrig ASCII-approximationer som "hoger" (höger), "vanster" (vänster), "pa" (på), "ovre" (övre), "stjalke" (stjälke). Detta gäller hela kodbasen inklusive SVG-kommentarer.

## Growing Focus (Odlingsfokus)

All data ska utgå från **frilandsodling** som primär odlingsform - det är så de flesta svenska odlare faktiskt odlar. Kallväxthus (ouppvärmt) tas med som komplement där det gör verklig skillnad (tomat, gurka, paprika, chili), men ska aldrig vara default. Varmväxthus nämns aldrig - det är ovanligt bland målgruppen.

- **Tidslinjer**: utgå från friland. Kallväxthus som tillägg där relevant.
- **Zoner**: `outdoor` är primär. `greenhouse` utökar zonerna där det behövs.
- **Tips och råd**: skriv för frilandsodlaren. Kallväxthus-tips som bonus.

## Seed Philosophy (Fröfilosofi)

Odlingsguiden prioriterar öppenpollinerade sorter (OP) och kulturarvssorter. F1-hybrider nämns bara när de ger verkligt mervärde (sjukdomsresistens, härdighet i tuffa zoner).

- **OP-sorter först** — sortrekommendationer lyfter alltid öppenpollinerade och kulturarvssorter före F1-hybrider
- **Markera F1 tydligt** — om en F1-sort rekommenderas, markera det explicit: `"Bella F1"` + notera i `note` att det är F1
- **Uppmuntra fröbesparing** — seedSaving-sektionen ska alltid finnas och vara uppmuntrande
- **Stöd svenska fröföretag** — Runåbergs, NordFrö, Lindbloms, Eco Grow prioriteras som sortrekommendationskällor
- **Föreningen Sesam** — referera till för den som vill fördjupa sig i fröbevarande

Background: `docs/research/f1-frodebatten.md`

## Design System Essentials

- **Color palette "Jord & Grönska"**: Accent `#3D6B4F`, Warm `#C4956A`, Background `#F5F2EB` (never pure white), Text `#2C3028` (never pure black)
- **Category colors**: Earth `#8B7355`, Berry `#7B4B6A`, Herb `#6B7D3E`, Fruit `#B8653B`
- **Max width**: 480px (mobile-focused)
- **Border radius**: Cards 16px, Badges 20px (pill), Buttons 14px
- **Spacing scale**: 4, 8, 12, 16, 20, 24, 40px
- **Icons**: Custom SVG, 1.8px stroke, rounded line caps, 24×24 standard
- **Inga emojis i appen** — all grafik (ikoner, illustrationer, indikatorer) ska vara egengjorda custom SVG. Aldrig unicode-emojis i data eller UI.

## Tech Stack

**Webbapp (nuvarande fokus):**

- Vite 7 (build + SSR prerender)
- React 19 (hooks, prerender() API)
- TypeScript 5.9 (strict mode)
- React Router 7 (BrowserRouter, StaticRouter for SSR)
- Recharts 3 (lazy-loaded)
- CSS Modules + CSS custom properties
- Base path: `/odlingsguiden/` (serveras under lillabosgarden.se)

**Server:**

- Laravel Forge + Digital Ocean (zero downtime deploy)
- Huvudsajt: Statamic (Laravel CMS) på lillabosgarden.se
- Odlingsguiden: eget Forge-site (subdomän), serveras via symlink under huvudsajten
- Symlink: `public/odlingsguiden -> odlingsguiden.lillabosgarden.se/current/dist`
- Feedback API: standalone PHP med SMTP (`server/feedback.php`)
- `.env` i projektroten (symlinkad av Forge, delas med feedback.php)

**Framtid (native app):**

- React Native + Expo (iOS/Android)
- Delad data med webben
- Charts: react-native-svg + victory-native

## Deploy

**Hosting:** Laravel Forge + Digital Ocean med zero downtime deploy. Odlingsguiden är ett eget Forge-site (subdomän) men serveras under `lillabosgarden.se/odlingsguiden` via symlink i Statamics public-mapp.

**Deploy-flöde:**

1. Bygg lokalt: `npm run build && npm run prerender`
2. Committa `dist/` och pusha till main
3. Forge autodeploy kör `git pull` (inget bygge på servern)
4. Forges `current/`-symlink uppdateras -> Statamics `public/odlingsguiden`-symlink pekar rätt

**Serverstruktur:**

```text
/home/forge/lillabosgarden.se/public/
  odlingsguiden -> /home/forge/odlingsguiden.lillabosgarden.se/current/dist  (symlink)

/home/forge/odlingsguiden.lillabosgarden.se/
  current -> releases/YYYYMMDDHHMMSS  (Forge zero downtime)
  .env                                (symlinkad av Forge till current/.env)
```

**Nginx:** `location ^~ /odlingsguiden` i Statamics server-block, se `nginx.conf` i repot.

**Feedback API:**

- `server/feedback.php` - tar emot POST med `{ page, message }`, skickar mail via SMTP
- Konfiguration i `.env` i projektroten (symlinkad av Forge) - se `.env.example`
- Rate-limited: max 3 requests per IP per 5 min
- Endpoint: `/odlingsguiden/api/feedback`

**Kommandon:**

```bash
npm run dev          # Vite dev server (localhost:5173/odlingsguiden/)
npm run build        # Bygg till dist/ (inkl. sitemap)
npm run prerender    # Prerendera alla 102 routes
npm run preview      # Förhandsgranska bygget
```

---

## Git & Commits

### Branch-strategi

- **main** = produktion. Push till main triggar Forge autodeploy.
- **Feature branches** för allt utvecklingsarbete. Namngivning: `feature/kort-beskrivning`
- Mergea till main när användaren är nöjd och redo att deploya
- Tagga releaser: `v1.0.0`, `v1.1.0` etc. (triggar inte deploy)

### Commit strategy

- **Never** bundle unrelated changes in one commit
- One commit per logical change — if in doubt, split it
- Always stage files explicitly, never `git add .`
- **Fråga alltid användaren innan commit och push** — committa inte automatiskt
- Use multiple `-m` flags: title, body (optional), co-author
- Co-author line goes in its own `-m` flag last

```text
git commit -m "fix(crops): fact-check artor profile" \
  -m "Norli: mark as sockerart (mange tout)
Delikett: rename to Brytsockerart
Alderman: height 1.5-2m, heirloom 1891" \
  -m "Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

### Commit message format

```text
type(scope): short description in imperative form

Optional body if needed
```

Types:

- `feat` – new feature
- `fix` – bug fix
- `refactor` – restructure without behavior change
- `content` – crop profiles, text content
- `docs` – documentation, CLAUDE.md, handoffs
- `style` – formatting, no logic change
- `chore` – deps, config, tooling

Scopes (examples): `crops`, `ui`, `data`, `design`, `docs`, `config`

### Examples

```text
feat(crops): add pea crop profile
feat(ui): add cross-reference chips to companion section
refactor(data): separate crop data from UI components
content(crops): update basil tone to kompis-tonen
docs(claude): update CLAUDE.md for Claude Code workflow
```

### Rules

- Never commit `CLAUDE.md` changes together with feature code
- Never commit multiple features in one commit
- **Aldrig pusha direkt till main under utveckling** — jobba på feature branch
- **Fråga alltid innan commit och push** — användaren måste godkänna
- If multiple files changed, group by scope and propose separate commits
- Bygg `dist/` lokalt innan commit till main: `npm run build && npm run prerender`
