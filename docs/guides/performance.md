# Performance - Lighthouse Benchmark

Baseline-mätningar att jämföra mot vid framtida optimeringar.

## Mätning 2026-03-01

Lighthouse 12.8.2, headless Chrome, simulerad throttled 4G, production build.

### Poäng

| Kategori | Poäng |
|----------|-------|
| Performance | 97 |
| Accessibility | 84 |
| Best Practices | 100 |
| SEO | 91 |

### Core Web Vitals

| Metrik | Värde |
|--------|-------|
| First Contentful Paint | 2.1s |
| Largest Contentful Paint | 2.1s |
| Total Blocking Time | 10ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 2.1s |
| Time to Interactive | 2.1s |

### Bundle-storlekar

| Chunk | Storlek | Gzip | Laddning |
|-------|---------|------|----------|
| index.js | 482 KB | 103 KB | Direkt |
| react-vendor.js | 47 KB | 17 KB | Direkt |
| CropPage.js | 518 KB | 155 KB | Lazy (vid klick) |
| NutritionChart.js | 323 KB | 97 KB | Lazy (vid expand) |
| Fonter (latin + latin-ext) | 20 filer | - | Vid render |

### Kända förbättringsmöjligheter

- Render-blocking CSS (fonter) - potentiell besparing 600ms
- Accessibility: kontrastproblem + länkfärger
- SEO: robots.txt saknas
- Unused JS (~71 KB) - delade illustrationsmoduler
- Dynamic import per grödprofil (när antal profiler växer)
