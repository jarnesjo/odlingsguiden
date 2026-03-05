# Odlingsguiden

Zonanpassad odlingsguide för svenska trädgårdar. Webbapp med djupa profiler för grönsaker, bär, kryddor och frukt.

Skapas av Lilla Bosgården (lillabosgarden.se).

## Tech stack

- Vite 7 + React 19 + TypeScript
- CSS Modules + custom properties
- Recharts (lazy-loaded)
- Prerender till statisk HTML (102 routes)

## Komma igång

```bash
npm install
npm run dev
```

Appen körs på `http://localhost:5173/odlingsguiden/`.

## Kommandon

| Kommando | Beskrivning |
|---|---|
| `npm run dev` | Starta Vite dev server |
| `npm run build` | Bygg till `dist/` (inkl. sitemap) |
| `npm run prerender` | Prerendera alla routes till statisk HTML |
| `npm run preview` | Förhandsgranska bygget lokalt |
| `npm run sitemap` | Generera `public/sitemap.xml` |

## Projektstruktur

```
src/
  components/       UI-komponenter (crop/, layout/, ui/)
  data/             Gröddata (JSON) + cropList
  hooks/            Custom React hooks
  theme/            CSS-variabler, global.css, tokens
  utils/            Slug, månadsparser, säsongsdata
  entry-server.tsx  SSR entry för prerender
scripts/
  prerender.ts      Prerender-script
  generate-sitemap.ts
server/
  feedback.php      Feedback API endpoint
docs/
  ROADMAP.md        Utvecklingsplan
  guides/           Kvalitetsguider (ny-gröda, designsystem, SVG)
  plans/            Implementationsplaner (YAML)
  handoffs/         Sessionshandoffs
nginx.conf          Nginx-snippet för Statamic-siten
```

## Deploy (Laravel Forge + Digital Ocean)

Forge zero downtime deploy. Inget bygge på servern - dist/ committas i git.

1. Bygg lokalt: `npm run build && npm run prerender`
2. Committa `dist/` och pusha till main
3. Forge autodeploy kör `git pull`
4. Symlink i Statamics `public/odlingsguiden` pekar på `current/dist`
5. SMTP-config i `.env` (projektroten) - se `.env.example`
6. Nginx-snippet: se `nginx.conf` i repot

## Dokumentation

- **[ROADMAP.md](docs/ROADMAP.md)** - Faser, substeg, idéer
- **[ny-groda.md](docs/guides/ny-groda.md)** - Checklista för nya grödprofiler
- **[designsystem.md](docs/guides/designsystem.md)** - Färger, typografi, spacing
- **[svg-illustrationer.md](docs/guides/svg-illustrationer.md)** - SVG-riktlinjer
- **[CLAUDE.md](CLAUDE.md)** - Instruktioner för AI-assisterad utveckling
