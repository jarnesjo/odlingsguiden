import { ScrollView, Text, Pressable, StyleSheet } from 'react-native'
import { spacing, fontSize, fontFamily, radii, colors } from '../theme/tokens'

interface Props {
  families: string[]
  active: string
  categoryColor: string
  onSelect: (family: string) => void
}

export function FamilyFilters({ families, active, categoryColor, onSelect }: Props) {
  if (families.length <= 2) return null

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {families.map(f => {
        const isActive = f === active
        return (
          <Pressable
            key={f}
            style={[
              styles.pill,
              isActive
                ? { backgroundColor: categoryColor }
                : styles.pillInactive,
            ]}
            onPress={() => onSelect(f)}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {f}
            </Text>
          </Pressable>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    paddingBottom: spacing.md,
  },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: radii.badge,
  },
  pillInactive: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: fontSize.label,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
  labelActive: {
    color: '#fff',
    fontFamily: fontFamily.bodyBold,
  },
})
