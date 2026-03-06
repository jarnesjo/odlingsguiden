/**
 * React Native token adapter
 * Re-exports colors and fontWeights from shared as-is.
 * Converts CSS string values (e.g. '4px') to raw numbers for StyleSheet.
 */
import { colors, fontWeights } from '@odlingsguiden/shared'

export { colors, fontWeights }

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  section: 40,
} as const

export const fontSize = {
  small: 11,
  badge: 12,
  label: 12,
  body: 13,
  h2: 15,
  dataLarge: 22,
  h1: 28,
} as const

export const radii = {
  cardSmall: 12,
  button: 14,
  card: 16,
  cardLarge: 20,
  badge: 20,
} as const

export const fontFamily = {
  heading: 'Fraunces',
  headingBold: 'Fraunces-Bold',
  headingExtraBold: 'Fraunces-ExtraBold',
  body: 'Lora',
  bodyBold: 'Lora-Bold',
} as const
