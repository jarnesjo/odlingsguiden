# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Global Standards

```yaml
yml:
  indentation: 2 spaces
  tabs: never
  validate_before_save: true
  multiline_strings: use_pipe_operator
```

---

## Session Continuity

```yaml
handoff_sections: &handoff_sections
  - meta # date, author, phase, status, session_notes
  - tech_stack
  - structure
  - database
  - api_endpoints
  - commands
  - next_steps # specific tasks in progress, be explicit and actionable
  - context # decisions made, constraints, reasoning
  - known_issues

on_session_start:
  - action: read
    path: docs/roadmap.md
    purpose: understand project plan and current phase
  - action: check
    path: docs/handoffs/*.yml
    select: latest_by_filename
    always: true
    then:
      if_found:
        action: notify_user
        message: |
          📋 Hittade handoff från {handoff_date}: "{handoff_next_step}"
          Skriv "resume" för att fortsätta där vi slutade, eller kör vidare utan.
      if_not_found:
        action: summarize_repo_state
        purpose: orient Claude in project without handoff

on_context_window_75_percent:
  action: write
  path: docs/handoffs/{YYYY-MM-DD-HHmmss}.yml
  format: yaml
  timestamp: use_system_time_exactly
  timestamp_format: YYYY-MM-DD-HHHmmss
  timestamp_command: "date +%Y-%m-%d-%H%M%S"
  timestamp_source: shell_command_not_estimated
  sections: *handoff_sections
  then: notify_user
  message: |
    Handoff sparad till docs/handoffs/{filename}.
    Kör /clear och säg "resume" för att fortsätta i ny session.

on_post_compact:
  action: read
  path: docs/handoffs/*.yml
  select: latest_by_filename
  purpose: restore context lost during compaction
  fallback: if_no_handoff_exists then summarize current repo state and notify user

on_clear_context:
  - action: write
    path: docs/handoffs/{YYYY-MM-DD-HHHmmss}.yml
    format: yaml
    timestamp: use_system_time_exactly
    timestamp_format: YYYY-MM-DD-HHmmss
    timestamp_command: "date +%Y-%m-%d-%H%M%S"
    timestamp_source: shell_command_not_estimated
    sections: *handoff_sections
    purpose: save full context before clearing
  - action: read
    path: docs/handoffs/*.yml
    select: latest_by_filename
    timing: after_clear
    purpose: immediately restore context in new session

on_end_of_session:
  trigger: if_user_says_any_of ["bye", "hejdå", "för idag", "stänger", "avslutar", "done for today"]
  actions:
    - action: write
      path: docs/handoffs/{YYYY-MM-DD-HHmmss}.yml
      format: yaml
      timestamp: use_system_time_exactly
      timestamp_format: YYYY-MM-DD-HHmmss
      timestamp_command: "date +%Y-%m-%d-%H%M%S"
      timestamp_source: shell_command_not_estimated
      sections: *handoff_sections
    - action: update
      path: docs/ASSET-LIST.md
      condition: if_assets_were_modified
      purpose: ensure asset list is up to date
    - action: notify_user
      message: |
        👋 Bra jobbat idag! Sparat handoff till docs/handoffs/{filename}.
        Imorgon: öppna projektet och Claude påminner dig automatiskt.

on_manual_handoff:
  trigger: if_user_says_any_of ["handoff", "/handoff", "spara läge"]
  actions:
    - action: write
      path: docs/handoffs/{YYYY-MM-DD-HHmmss}.yml
      format: yaml
      timestamp_command: "date +%Y-%m-%d-%H%M%S"
      timestamp_source: shell_command_not_estimated
      sections: *handoff_sections
    - action: notify_user
      message: |
        💾 Handoff sparad till docs/handoffs/{filename}.
```

---

## Plans & Documentation

All implementation plans MUST be saved as YAML files in `docs/plans/` (e.g., `docs/plans/fas3-visualisering.yml`). YAML is the required format because:

- Structured and unambiguous – reduces interpretation errors across agents and sessions
- Consistent with the handoff file format
- Easy to validate and follow step-by-step

When starting a new phase or feature, always:

1. Check `docs/plans/` for existing plan files related to the work
2. Write the implementation plan as YAML before coding
3. Use the plan as a checklist during implementation

---

## Context Management

När du känner att konversationen blivit lång eller komplex, skriv proaktivt en `docs/handoffs/*.yml` med:

- Vad vi jobbar med
- Vad som är klart
- Nästa steg
- Kritiska beslut och constraints

Meddela mig sedan så att jag kan köra /clear och du kan läsa handoff-filen.

---

## Project Overview

Odlingsguiden (formerly Grödguiden) is a Swedish growing guide app — a deep, zone-adapted reference for vegetables, berries, herbs, and fruits grown in Sweden. Created by Lilla Bosgården (lillabosgarden.se). Currently in prototype stage with plans for a React Native mobile app (iOS/Android).

## Current State

This is a **prototype-only codebase** — no package.json, build system, tests, or linting configured yet. The prototypes are standalone JSX files designed for use in Codesandbox or similar environments.

- `prototypes/grodguiden-wireframe.jsx` — Main app prototype with all crop data and UI components
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
- **CROPS** — Full crop profiles (currently: morot, tomat, hallon, basilika)
- **CROP_LIST** — Registry with id, name, emoji, family, difficulty, category

Libraries: React (hooks), Recharts (nutrition graphs), pure SVG for icons/illustrations, CSS-in-JS (inline styles).

## Tone & Voice (Critical Convention)

The app uses "kompis-tonen" (friend's tone) — warm, personal, sometimes humorous. **All content must be in Swedish.**

- Personify plants: "Basilikan älskar fukt men HATAR att stå blöt"
- Describe plant reactions: "Morötter blir faktiskt sötare efter frost!"
- Dramatize important moments: "Kritisk period!" for watering stress
- Use feelings, not percentages: "hon måste kunna andas"
- Never use English words — always Swedish equivalents
- Avoid marketing speak — "Enkel" not "Superenkelt"
- Include hard-won wisdom and real grower experience

## Design System Essentials

- **Color palette "Jord & Grönska"**: Accent `#3D6B4F`, Warm `#C4956A`, Background `#F5F2EB` (never pure white), Text `#2C3028` (never pure black)
- **Category colors**: Earth `#8B7355`, Berry `#7B4B6A`, Herb `#6B7D3E`, Fruit `#B8653B`
- **Max width**: 480px (mobile-focused)
- **Border radius**: Cards 16px, Badges 20px (pill), Buttons 14px
- **Spacing scale**: 4, 8, 12, 16, 20, 24, 40px
- **Icons**: Custom SVG, 1.8px stroke, rounded line caps, 24×24 standard

## Planned Tech Stack (Production)

- Web: Statamic (Laravel CMS)
- App: React Native + Expo
- Data: Shared JSON/TS files for both platforms
- Charts: react-native-svg + victory-native

## Git & Commits

### Commit strategy

- **Never** bundle unrelated changes in one commit
- One commit per logical change – if in doubt, split it
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
- `assets` – pixel art assets added or modified
- `docs` – documentation, CLAUDE.md, handoffs
- `style` – formatting, no logic change
- `chore` – deps, config, tooling

Scopes (examples): `horses`, `races`, `stables`, `auth`, `ui`, `db`, `assets`

### Examples

```text
feat(horses): add horse queue system for stables
feat(auth): add RequireAuth guard to protected routes
docs(claude): update CLAUDE.md with handoff system
assets(horses): add palomino and grey portrait variants
```

### Rules

- Never commit `CLAUDE.md` changes together with feature code
- Never commit assets together with logic changes
- Never commit multiple features in one commit
- Commit automatically without asking, but always as separate commits per scope
- If multiple files changed, group by scope and propose separate commits
