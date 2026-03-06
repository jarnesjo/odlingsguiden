import { View, Text, StyleSheet } from 'react-native'
import type { Storage } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { Icon } from '../icons/Icon'
import { StorageIcon, TipIcon } from '../icons'
import { Section } from './Section'

interface StorageSectionProps {
  storage: Storage
}

export function StorageSection({ storage }: StorageSectionProps) {
  return (
    <Section title="Lagring" icon={<StorageIcon size={20} />}>
      <View style={styles.shelfBadge}>
        <Text style={styles.shelfText}>Hållbarhet: {storage.shelfLife}</Text>
      </View>

      {storage.methods.map((m, i) => (
        <View key={i} style={styles.methodCard}>
          <View style={styles.methodHeader}>
            <Icon name={m.icon} size={18} />
            <Text style={styles.methodName}>{m.method}</Text>
            {m.best && (
              <View style={styles.bestBadge}>
                <Text style={styles.bestText}>Rekommenderat</Text>
              </View>
            )}
          </View>
          <Text style={styles.duration}>{m.duration}</Text>
          <Text style={styles.methodDesc}>{m.description}</Text>
        </View>
      ))}

      {storage.tips.length > 0 && (
        <View style={styles.tips}>
          {storage.tips.map((tip, i) => (
            <View key={i} style={styles.tipRow}>
              <TipIcon size={14} />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      )}
    </Section>
  )
}

const styles = StyleSheet.create({
  shelfBadge: {
    backgroundColor: colors.background,
    borderRadius: radii.badge,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    alignSelf: 'flex-start',
    marginBottom: spacing.md,
  },
  shelfText: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  methodCard: {
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  methodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  methodName: {
    flex: 1,
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  bestBadge: {
    backgroundColor: colors.accent + '15',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radii.badge,
  },
  bestText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyBold,
    color: colors.accent,
  },
  duration: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  methodDesc: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
  },
  tips: {
    marginTop: spacing.sm,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  tipText: {
    flex: 1,
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    lineHeight: 16,
  },
})
