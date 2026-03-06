import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import type { GoodToKnow as GoodToKnowType } from '@odlingsguiden/shared'
import { hasProfile } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { Icon } from '../icons/Icon'
import { TipIcon } from '../icons'
import { Section } from './Section'

interface GoodToKnowProps {
  items: GoodToKnowType[]
}

export function GoodToKnowSection({ items }: GoodToKnowProps) {
  const router = useRouter()

  if (items.length === 0) return null

  return (
    <Section title="Bra att veta" icon={<TipIcon size={20} />} defaultOpen>
      {items.map((item, i) => (
        <View
          key={i}
          style={[
            styles.card,
            item.severity === 'warning' ? styles.warningCard : styles.tipCard,
          ]}
        >
          <View style={styles.cardHeader}>
            <Icon name={item.icon} size={18} />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
          <Text style={styles.cardText}>{item.text}</Text>
          {item.refs && item.refs.length > 0 && (
            <View style={styles.refs}>
              {item.refs.map((ref) => {
                const navigable = hasProfile(ref.id)
                return navigable ? (
                  <Pressable
                    key={ref.id}
                    style={styles.refPill}
                    onPress={() => router.push(`/crop/${ref.id}`)}
                  >
                    <Text style={styles.refText}>{ref.name} ›</Text>
                  </Pressable>
                ) : (
                  <View key={ref.id} style={styles.refPillInactive}>
                    <Text style={styles.refTextInactive}>{ref.name}</Text>
                  </View>
                )
              })}
            </View>
          )}
        </View>
      ))}
    </Section>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderLeftWidth: 3,
  },
  warningCard: {
    backgroundColor: '#B54A3F10',
    borderLeftColor: '#B54A3F',
  },
  tipCard: {
    backgroundColor: colors.accent + '10',
    borderLeftColor: colors.accent,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.xs,
  },
  cardTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  cardText: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
  },
  refs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginTop: spacing.sm,
  },
  refPill: {
    backgroundColor: colors.accent + '15',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.badge,
  },
  refText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyBold,
    color: colors.accent,
  },
  refPillInactive: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.badge,
  },
  refTextInactive: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
})
