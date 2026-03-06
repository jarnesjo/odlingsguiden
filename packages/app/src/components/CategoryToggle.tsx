import { View, Text, Pressable, StyleSheet } from 'react-native'
import { CATEGORIES } from '@odlingsguiden/shared'
import type { Category } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../theme/tokens'

const visibleCategories = CATEGORIES.filter(c => !c.hidden)

interface Props {
  active: Category
  onSelect: (cat: Category) => void
}

export function CategoryToggle({ active, onSelect }: Props) {
  return (
    <View style={styles.container}>
      {visibleCategories.map((cat, i) => {
        const isActive = cat.id === active
        const isLast = i === visibleCategories.length - 1
        return (
          <Pressable
            key={cat.id}
            style={[
              styles.button,
              !isLast && styles.buttonBorder,
              isActive && { backgroundColor: cat.color },
            ]}
            onPress={() => onSelect(cat.id)}
          >
            <Text
              style={[
                styles.label,
                isActive ? styles.labelActive : { color: colors.textMuted },
              ]}
            >
              {cat.label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    marginHorizontal: spacing.lg,
  },
  button: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },
  buttonBorder: {
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },
  label: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
  },
  labelActive: {
    color: '#fff',
    fontFamily: fontFamily.bodyBold,
  },
})
