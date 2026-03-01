# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

---

## Roadmap-Driven Workflow

`docs/ROADMAP.md` is the source of truth for what to build. It uses numbered phases (Fas 1, 2, 3...) with substeps (1.1, 1.2, 1.3...) and checkboxes. The order within a phase is flexible — we pick what gives most value right now.

- **On session start:** Read `docs/ROADMAP.md` and the latest `docs/handoffs/*.yml` to understand current progress.
- **Before starting work:** Check which roadmap step is next. Suggest it if the user hasn't specified a task. The user may choose any step — we don't follow the order slavishly.
- **After completing work:** Update `docs/ROADMAP.md` — check off completed items and mark steps with ✅.
- **When proposing tasks:** Reference the relevant roadmap step (e.g., "1.3 Grafisk profil").
- **New ideas:** Add to the "Idéer" section in ROADMAP.md. No priority needed — they get picked up when the time is right.

### ROADMAP.md Format

The roadmap follows a structured format designed for AI-assisted development. This format is portable — use it in any project.

**Structure:**

```markdown
# Projektnamn – Roadmap

> Tagline

## Vision

Short vision statement.

## Fas 1: Namn

Description of what the phase achieves.

### 1.1 Step name ✅ (when done)

> One-line summary of scope

- [x] Completed subtask
- [ ] Pending subtask

Plan: `docs/plans/1.1-slug.yml`

### 1.2 Step name

> One-line summary of scope

- [ ] Subtask 1
- [ ] Subtask 2

## Fas 2: Namn

...

## Idéer

No priority. Picked up when the time is right.

- Idea 1
- Idea 2

## Referens

Stable reference material: design principles, tech stack, competitor analysis, file table, known issues. Things that change rarely.
```

**Key rules:**

- **Numbered phases** (Fas 1, 2, 3...) with **numbered substeps** (1.1, 1.2, 1.3...)
- **Checkboxes** on every actionable item — never just prose
- **✅ after step title** when all checkboxes are done
- **`> quote`** under each step title = one-line scope description
- **Flexible order** within a phase — pick what gives most value now
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

**Prototype-only codebase** — no package.json, build system, tests, or linting configured yet. The prototypes are standalone JSX files designed for use in Codesandbox or similar environments.

- `prototypes/grodguiden-wireframe.jsx` — Main app prototype with all crop data and UI
- `prototypes/grodguiden-designguide.jsx` — Design system & color palettes
- `prototypes/grodguiden-illustrationer.jsx` — SVG crop illustrations
- `prototypes/grodguiden-logotyper.jsx` — Logo concepts & branding (migrerat till `src/components/brand/` + `public/brand/`)

## Key Documentation

- `docs/ROADMAP.md` — 6-phase development plan (Phase 1 / Q1 2026 in progress)
- `docs/guides/ny-groda.md` — **Critical**: instructions and quality checklist for adding new crops (16-point checklist, tone guide, full data structure)
- `docs/guides/designsystem.md` — Design system specification (colors, typography, icons, components, spacing)
- `docs/guides/svg-illustrationer.md` — SVG illustration guidelines (200×200 detailed + 48×48 list icons)

## Architecture & Data Model

All crop data lives in the `CROPS` object in `grodguiden-wireframe.jsx`. Each crop has 25+ required fields organized into sections: basic info, zones, growing data, optimal conditions, watering, soil, timeline (zone-specific for zones 1/4/6), nutrition data (N-P-K curves), companions, rotation, varieties, problems, sowing, seed saving, storage, and harvest calculations.

Key data structures:

- **ZONE_INFO** — Sweden's 8 growing zones with frost dates and frost-free days
- **DIFFICULTY_INFO** — Enkel/Medel/Avancerad difficulty levels
- **CROPS** — Full crop profiles (currently: morot, tomat, potatis, hallon, basilika)
- **CROP_LIST** — Registry with id, name, emoji, family, difficulty, category

Libraries: React (hooks), Recharts (nutrition graphs), pure SVG for icons/illustrations, CSS-in-JS (inline styles).

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

**Current focus: Free web app**

- Web: Statamic (Laravel CMS) on lillabosgarden.se
- Data: Shared JSON/TS files
- Charts: Recharts
- Prototypes: Standalone JSX (Codesandbox)

**Future (native app, paid):**

- React Native + Expo (iOS/Android)
- Same data files as web
- Charts: react-native-svg + victory-native

---

## Git & Commits

### Commit strategy

- **Never** bundle unrelated changes in one commit
- One commit per logical change — if in doubt, split it
- Always stage files explicitly, never `git add .`
- Never use heredoc or $() substitution in commit commands. Use `git commit -m "line 1" -m "line 2"` for multi-line messages.

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
- Commit automatically without asking, but always as separate commits per scope
- If multiple files changed, group by scope and propose separate commits
