/**
 * Design tokens from docs/guides/designsystem.md
 * This is the single source of truth for all design values.
 */

export const colors = {
  // Primary
  accent: '#3D6B4F',
  accentLight: '#C8DEC9',
  accentDark: '#2A4A36',
  warm: '#C4956A',
  warmLight: '#F0E4D5',
  warmDark: '#96694A',
  earth: '#8B7355',
  earthLight: '#D4C4AD',

  // Category
  category: {
    vegetables: { primary: '#3D6B4F', light: '#C8DEC9' },
    berries: { primary: '#7B4B6A', light: '#E8D1DF' },
    herbs: { primary: '#6B7D3E', light: '#DDE5C8' },
  },

  // Accent variants
  accentMuted: '#5A8B6F',

  // UI
  background: '#F5F2EB',
  card: '#FEFDFB',
  text: '#2C3028',
  textMuted: '#7A7568',
  border: '#E2DDD4',
  warning: '#B54A3F',
  warningLight: '#F5DDD9',
  water: '#4A7A8A',

  // Chart (N-P-K from project palette)
  chartN: '#3D6B4F',
  chartP: '#C4956A',
  chartK: '#7B4B6A',

  // Zone badge
  zoneOutdoor: '#E3F2FD',
  zoneGreenhouse: '#FFF3CD',
  zoneGreenhouseText: '#E6A200',
} as const

export const fonts = {
  heading: "'Fraunces', Georgia, serif",
  body: "'Lora', Georgia, serif",
  ui: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const

export const fontSizes = {
  h1: '28px',
  h2: '15px',
  body: '13px',
  label: '12px',
  badge: '12px',
  dataLarge: '22px',
  small: '11px',
} as const

export const fontWeights = {
  regular: 400,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const

export const radii = {
  cardLarge: '20px',
  card: '16px',
  cardSmall: '12px',
  button: '14px',
  badge: '20px',
} as const

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  xxl: '24px',
  section: '40px',
} as const

export const layout = {
  maxWidth: '480px',
  pagePadding: '16px',
  gridGapSmall: '8px',
  gridGapMedium: '12px',
} as const

export const transitions = {
  fast: '0.15s ease',
  normal: '0.2s ease',
} as const
