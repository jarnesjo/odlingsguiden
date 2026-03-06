import { View, Text, StyleSheet } from 'react-native'
import type { Crop, Zone } from '@odlingsguiden/shared'
import { ZONE_INFO, DIFFICULTY_INFO } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { CropGraphic } from '../illustrations/CropIcon'

interface CropHeaderProps {
  cropId: string
  crop: Crop
  userZone: Zone
}

export function CropHeader({ cropId, crop, userZone }: CropHeaderProps) {
  const isBerry = crop.category === 'bär' || crop.category === 'frukt'
  const zoneInfo = ZONE_INFO[userZone]
  const diffInfo = DIFFICULTY_INFO[crop.difficulty]

  const outdoorZones = crop.zones.outdoor
  const inZone = outdoorZones ? outdoorZones.includes(userZone) : false
  const greenhouseZones = crop.zones.greenhouse
  const inGreenhouse = greenhouseZones ? greenhouseZones.includes(userZone) : false

  const stats = isBerry
    ? [
        { label: 'Plantavstånd', value: crop.spacing, note: crop.spacingNote },
        { label: 'Radavstånd', value: crop.rowSpacing },
        { label: 'Plantering', value: crop.depth, note: crop.depthNote },
      ]
    : [
        { label: 'Avstånd', value: crop.spacing, note: crop.spacingNote },
        { label: 'Radavstånd', value: crop.rowSpacing },
        { label: 'Sådjup', value: crop.depth, note: crop.depthNote },
      ]

  return (
    <>
      <View style={styles.hero}>
        <CropGraphic id={cropId} size={140} category={crop.category} />
      </View>
      <Text style={styles.name}>{crop.name}</Text>
      <Text style={styles.family}>
        {crop.familyLatin} ({crop.family})
      </Text>

      <View style={styles.infoCard}>
        <View style={styles.infoTop}>
          <View style={[styles.badge, { backgroundColor: diffInfo.color + '20' }]}>
            <View style={[styles.diffDot, { backgroundColor: diffInfo.color }]} />
            <Text style={[styles.badgeText, { color: diffInfo.color }]}>{crop.difficulty}</Text>
          </View>
          <Text style={styles.daysPill}>
            {crop.perennial
              ? crop.lifespan ? `Flerårig - ${crop.lifespan}` : 'Flerårig'
              : `${crop.days} dagar till skörd`}
          </Text>
        </View>

        <View style={styles.zoneRow}>
          {inZone && (
            <View style={[styles.zoneBadge, styles.zoneBadgeOk]}>
              <Text style={styles.zoneBadgeText}>Zon {userZone} - friland</Text>
            </View>
          )}
          {!inZone && inGreenhouse && (
            <View style={[styles.zoneBadge, styles.zoneBadgeGreenhouse]}>
              <Text style={styles.zoneBadgeText}>Zon {userZone} - kallväxthus</Text>
            </View>
          )}
          {!inZone && !inGreenhouse && (
            <View style={[styles.zoneBadge, styles.zoneBadgeNo]}>
              <Text style={styles.zoneBadgeText}>Ej i zon {userZone}</Text>
            </View>
          )}
        </View>

        <View style={styles.statsRow}>
          {stats.map((s, i) => (
            <View key={i} style={styles.statCell}>
              <Text style={styles.statLabel}>{s.label}</Text>
              <Text style={styles.statValue}>{s.value}</Text>
              {s.note && <Text style={styles.statNote}>{s.note}</Text>}
            </View>
          ))}
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  hero: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  name: {
    fontSize: fontSize.h1,
    fontFamily: fontFamily.headingExtraBold,
    color: colors.text,
  },
  family: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  infoCard: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    padding: spacing.lg,
    marginTop: spacing.lg,
  },
  infoTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.badge,
    gap: 4,
  },
  diffDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: fontSize.badge,
    fontFamily: fontFamily.bodyBold,
  },
  daysPill: {
    fontSize: fontSize.badge,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
  zoneRow: {
    marginBottom: spacing.md,
  },
  zoneBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.badge,
  },
  zoneBadgeOk: {
    backgroundColor: colors.accent + '15',
  },
  zoneBadgeGreenhouse: {
    backgroundColor: '#C4956A20',
  },
  zoneBadgeNo: {
    backgroundColor: '#B54A3F15',
  },
  zoneBadgeText: {
    fontSize: fontSize.badge,
    fontFamily: fontFamily.body,
    color: colors.text,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  statCell: {
    flex: 1,
  },
  statLabel: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginBottom: 2,
  },
  statValue: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  statNote: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginTop: 2,
  },
})
