import { View, Text, Pressable, StyleSheet } from 'react-native'
import { DIFFICULTY_INFO } from '@odlingsguiden/shared'
import type { CropListEntry } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../theme/tokens'
import { CropIcon } from './illustrations/CropIcon'

interface Props {
  crop: CropListEntry
  onPress: () => void
}

function getDotColor(bgColor: string): string {
  if (bgColor === '#B7E4C7') return '#3D6B4F'
  if (bgColor === '#FFF3CD') return '#7B6200'
  return '#B54A3F'
}

function getDiffLabel(difficulty: string): string {
  if (difficulty === 'Enkel') return 'Lättodlad'
  if (difficulty === 'Medel') return 'Kräver lite omsorg'
  return 'Kräver extra omsorg'
}

export function CropRow({ crop, onPress }: Props) {
  const difficulty = DIFFICULTY_INFO[crop.difficulty]
  const dotColor = getDotColor(difficulty?.color ?? '')
  const diffLabel = getDiffLabel(crop.difficulty)

  if (crop.locked) {
    return (
      <View style={styles.row}>
        <View style={styles.iconWrap}>
          <CropIcon id={crop.id} size={40} category={crop.category} />
        </View>
        <View style={styles.info}>
          <Text style={[styles.name, styles.nameLocked]}>{crop.name}</Text>
          <Text style={styles.meta}>
            {crop.familyLatin} ({crop.family})
          </Text>
        </View>
        <View style={styles.soonBadge}>
          <Text style={styles.soonText}>Snart</Text>
        </View>
      </View>
    )
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
      onPress={onPress}
    >
      <View style={styles.iconWrap}>
        <CropIcon id={crop.id} size={40} category={crop.category} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{crop.name}</Text>
        <Text style={styles.meta}>
          {crop.familyLatin} ({crop.family}) {'  '}
          <View style={[styles.dot, { backgroundColor: dotColor }]} />
          {'  '}{diffLabel}
        </Text>
      </View>
      <Text style={styles.arrow}>{'\u2192'}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    marginHorizontal: spacing.lg,
    backgroundColor: colors.card,
    borderRadius: radii.card,
    gap: 14,
  },
  rowPressed: {
    opacity: 0.7,
  },
  iconWrap: {
    width: 40,
    height: 40,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: fontFamily.headingBold,
    color: colors.text,
  },
  nameLocked: {
    color: colors.textMuted,
  },
  meta: {
    fontSize: fontSize.label,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginTop: 2,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginBottom: -1,
  },
  arrow: {
    fontSize: 18,
    color: colors.textMuted,
  },
  soonBadge: {
    backgroundColor: '#f0ede8',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  soonText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
})
