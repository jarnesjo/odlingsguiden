# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

---

## Roadmap-Driven Workflow

`docs/ROADMAP.md` is the source of truth for what to build and in what order.

- **On session start:** Read `docs/ROADMAP.md` and the latest `docs/handoffs/*.yml` to understand current progress.
- **Before starting work:** Check which roadmap step is next. Suggest it if the user hasn't specified a task.
- **After completing work:** Update `docs/ROADMAP.md` — check off completed items and note progress.
- **When proposing tasks:** Always reference the relevant roadmap section.

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

## Plans & Documentation

Implementation plans are saved as YAML files in `docs/plans/` (e.g., `docs/plans/1-separera-data.yml`).

When starting a new phase or feature:

1. Check `docs/plans/` for existing plan files
2. Write the implementation plan as YAML before coding
3. Use the plan as a checklist during implementation

---

## Project Overview

Odlingsguiden (formerly Grödguiden) is a Swedish growing guide app — a deep, zone-adapted reference for vegetables, berries, herbs, and fruits grown in Sweden. Created by Lilla Bosgården (lillabosgarden.se). Currently in prototype stage with plans for a React Native mobile app (iOS/Android).

## Current State

**Prototype-only codebase** — no package.json, build system, tests, or linting configured yet. The prototypes are standalone JSX files designed for use in Codesandbox or similar environments.

- `prototypes/grodguiden-wireframe.jsx` — Main app prototype with all crop data and UI
- `prototypes/grodguiden-designguide.jsx` — Design system & color palettes
- `prototypes/grodguiden-illustrationer.jsx` — SVG crop illustrations
- `prototypes/grodguiden-logotyper.jsx` — Logo concepts & branding

## Key Documentation

- `docs/ROADMAP.md` — 6-phase development plan (Phase 1 / Q1 2026 in progress)
- `docs/PROMPT-lagg-till-groda.md` — **Critical**: instructions and quality checklist for adding new crops (16-point checklist, tone guide, full data structure)
- `docs/PROMPT-designsystem.md` — Design system specification (colors, typography, icons, components, spacing)
- `docs/PROMPT-svg-illustrationer.md` — SVG illustration guidelines (200×200 detailed + 48×48 list icons)

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

## Design System Essentials

- **Color palette "Jord & Grönska"**: Accent `#3D6B4F`, Warm `#C4956A`, Background `#F5F2EB` (never pure white), Text `#2C3028` (never pure black)
- **Category colors**: Earth `#8B7355`, Berry `#7B4B6A`, Herb `#6B7D3E`, Fruit `#B8653B`
- **Max width**: 480px (mobile-focused)
- **Border radius**: Cards 16px, Badges 20px (pill), Buttons 14px
- **Spacing scale**: 4, 8, 12, 16, 20, 24, 40px
- **Icons**: Custom SVG, 1.8px stroke, rounded line caps, 24×24 standard

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
