import { View, Text, StyleSheet } from 'react-native'
import type { Variety, Zone } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { TagIcon } from '../icons'
import { Section } from './Section'

interface VarietiesSectionProps {
  varieties: Variety[]
  userZone: Zone
}

function ZoneBadge({ zones }: { zones: Zone[] }) {
  if (zones.length === 0) return null
  const sorted = [...zones].sort((a, b) => a - b)
  const label = sorted.length === 1
    ? `Zon ${sorted[0]}`
    : `Zon ${sorted[0]}-${sorted[sorted.length - 1]}`
  return (
    <View style={styles.zoneBadge}>
      <Text style={styles.zoneBadgeText}>{label}</Text>
    </View>
  )
}

export function VarietiesSection({ varieties, userZone }: VarietiesSectionProps) {
  const recommended = varieties.filter(v => v.zones.includes(userZone))
  const others = varieties.filter(v => !v.zones.includes(userZone))

  return (
    <Section title="Sorter" icon={<TagIcon size={20} />}>
      {recommended.length > 0 && (
        <>
          <Text style={styles.groupTitle}>Rekommenderade för zon {userZone}</Text>
          {recommended.map((v, i) => (
            <View key={i} style={styles.varietyCard}>
              <View style={styles.varietyHeader}>
                <Text style={styles.varietyName}>{v.name}</Text>
                <ZoneBadge zones={v.zones} />
              </View>
              <Text style={styles.varietyNote}>{v.note}</Text>
            </View>
          ))}
        </>
      )}

      {others.length > 0 && (
        <>
          <Text style={[styles.groupTitle, recommended.length > 0 && styles.groupTitleSpaced]}>
            {recommended.length > 0 ? 'Övriga sorter' : 'Sorter'}
          </Text>
          {others.map((v, i) => (
            <View key={i} style={styles.varietyCard}>
              <View style={styles.varietyHeader}>
                <Text style={styles.varietyName}>{v.name}</Text>
                <ZoneBadge zones={v.zones} />
              </View>
              <Text style={styles.varietyNote}>{v.note}</Text>
            </View>
          ))}
        </>
      )}
    </Section>
  )
}

const styles = StyleSheet.create({
  groupTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.accent,
    marginBottom: spacing.sm,
  },
  groupTitleSpaced: {
    marginTop: spacing.md,
  },
  varietyCard: {
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  varietyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  varietyName: {
    flex: 1,
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  zoneBadge: {
    backgroundColor: colors.accent + '15',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radii.badge,
  },
  zoneBadgeText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyBold,
    color: colors.accent,
  },
  varietyNote: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    lineHeight: 16,
  },
})
