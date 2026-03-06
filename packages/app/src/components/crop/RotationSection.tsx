import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import type { Rotation, RotationItem } from '@odlingsguiden/shared'
import { hasProfile } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { RotationIcon } from '../icons'
import { Section } from './Section'

interface RotationSectionProps {
  rotation: Rotation
}

function RotationPills({ items, router }: { items: RotationItem[]; router: ReturnType<typeof useRouter> }) {
  return (
    <View style={styles.pills}>
      {items.map((item) => {
        const clickable = !!(item.id && hasProfile(item.id))
        if (clickable) {
          return (
            <Pressable
              key={item.name}
              style={({ pressed }) => [styles.pill, styles.pillClickable, { opacity: pressed ? 0.7 : 1 }]}
              onPress={() => router.push(`/crop/${item.id}`)}
            >
              <Text style={styles.pillTextClickable}>{item.name} ›</Text>
            </Pressable>
          )
        }
        return (
          <View key={item.name} style={styles.pill}>
            <Text style={styles.pillText}>{item.name}</Text>
          </View>
        )
      })}
    </View>
  )
}

export function RotationSection({ rotation }: RotationSectionProps) {
  const router = useRouter()

  return (
    <Section title="Växtföljd" icon={<RotationIcon size={20} />}>
      <View style={styles.card}>
        <Text style={[styles.cardTitle, styles.avoidTitle]}>Undvik efter</Text>
        <Text style={styles.whyText}>{rotation.avoidWhy}</Text>
        <RotationPills items={rotation.avoid} router={router} />
      </View>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, styles.goodTitle]}>Bra förfrukt</Text>
        <Text style={styles.whyText}>{rotation.goodBeforeWhy}</Text>
        <RotationPills items={rotation.goodBefore} router={router} />
      </View>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, styles.goodTitle]}>Bra efterfrukt</Text>
        <Text style={styles.whyText}>{rotation.goodAfterWhy}</Text>
        <RotationPills items={rotation.goodAfter} router={router} />
      </View>
    </Section>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  cardTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    marginBottom: spacing.xs,
  },
  avoidTitle: {
    color: '#B54A3F',
  },
  goodTitle: {
    color: colors.accent,
  },
  whyText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    lineHeight: 16,
    marginBottom: spacing.sm,
  },
  pills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  pill: {
    backgroundColor: colors.card,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.badge,
  },
  pillClickable: {
    backgroundColor: colors.accent + '15',
  },
  pillText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.text,
  },
  pillTextClickable: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyBold,
    color: colors.accent,
  },
})
