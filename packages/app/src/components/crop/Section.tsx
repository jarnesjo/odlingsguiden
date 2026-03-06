import { useState, type ReactNode } from 'react'
import { View, Text, Pressable, LayoutAnimation, StyleSheet } from 'react-native'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'

interface SectionProps {
  title: string
  icon?: ReactNode
  children: ReactNode
  defaultOpen?: boolean
}

export function Section({ title, icon, children, defaultOpen = false }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setOpen(!open)
  }

  return (
    <View style={styles.section}>
      <Pressable style={styles.trigger} onPress={toggle}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.chevron, open && styles.chevronOpen]}>▾</Text>
      </Pressable>
      {open && <View style={styles.body}>{children}</View>}
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    marginTop: spacing.md,
    overflow: 'hidden',
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
  },
  icon: {
    marginRight: spacing.sm,
  },
  title: {
    flex: 1,
    fontSize: fontSize.h2,
    fontFamily: fontFamily.headingBold,
    color: colors.text,
  },
  chevron: {
    fontSize: 16,
    color: colors.textMuted,
  },
  chevronOpen: {
    transform: [{ rotate: '180deg' }],
  },
  body: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
})
