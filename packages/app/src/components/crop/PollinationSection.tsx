import { View, Text, StyleSheet } from 'react-native'
import type { Pollination } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { BloomIcon, TipIcon } from '../icons'
import { Section } from './Section'

interface PollinationSectionProps {
  pollination: Pollination
}

export function PollinationSection({ pollination }: PollinationSectionProps) {
  return (
    <Section title="Pollinering" icon={<BloomIcon size={20} />}>
      <View style={[styles.statusBadge, pollination.selfFertile ? styles.selfBadge : styles.partnerBadge]}>
        <BloomIcon size={14} color={pollination.selfFertile ? colors.accent : '#C4956A'} />
        <Text style={[styles.statusText, { color: pollination.selfFertile ? colors.accent : '#C4956A' }]}>
          {pollination.selfFertile ? 'Självfertil' : 'Behöver pollinationspartner'}
        </Text>
      </View>

      <Text style={styles.description}>{pollination.description}</Text>

      {pollination.groups.length > 0 && (
        <View style={styles.groups}>
          <Text style={styles.groupsTitle}>Pollinationsgrupper</Text>
          {pollination.groups.map((group, i) => (
            <View key={i} style={styles.groupCard}>
              <Text style={styles.groupName}>{group.name}</Text>
              <View style={styles.pills}>
                {group.varieties.map((v, j) => (
                  <View key={j} style={styles.pill}>
                    <Text style={styles.pillText}>{v}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      )}

      {pollination.tip && (
        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <TipIcon size={14} />
            <Text style={styles.tipTitle}>Tips</Text>
          </View>
          <Text style={styles.tipText}>{pollination.tip}</Text>
        </View>
      )}
    </Section>
  )
}

const styles = StyleSheet.create({
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.badge,
    alignSelf: 'flex-start',
    marginBottom: spacing.md,
  },
  selfBadge: {
    backgroundColor: colors.accent + '15',
  },
  partnerBadge: {
    backgroundColor: '#C4956A20',
  },
  statusText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyBold,
  },
  description: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  groups: {
    marginBottom: spacing.md,
  },
  groupsTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  groupCard: {
    backgroundColor: colors.background,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  groupName: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
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
  pillText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.text,
  },
  tipCard: {
    backgroundColor: colors.accent + '08',
    borderRadius: radii.cardSmall,
    padding: spacing.md,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.xs,
  },
  tipTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.accent,
  },
  tipText: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
  },
})
