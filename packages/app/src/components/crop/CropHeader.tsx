import { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import type { Crop, Zone } from '@odlingsguiden/shared'
import { ZONE_INFO, DIFFICULTY_INFO } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { CropGraphic } from '../illustrations/CropIcon'

interface CropHeaderProps {
  cropId: string
  crop: Crop
  userZone: Zone
}

// Map DIFFICULTY_INFO background colors to text/dot colors (matching web)
function getDifficultyDotColor(bgColor: string): string {
  if (bgColor === '#B7E4C7') return '#3D6B4F'
  if (bgColor === '#FFF3CD') return '#7B6200'
  return '#B54A3F'
}

function getDifficultyLabel(difficulty: string): string {
  if (difficulty === 'Enkel') return 'Lättodlad'
  if (difficulty === 'Medel') return 'Kräver lite omsorg'
  return 'Kräver extra omsorg'
}

export function CropHeader({ cropId, crop, userZone }: CropHeaderProps) {
  const [showDiffTip, setShowDiffTip] = useState(false)
  const [showZoneTip, setShowZoneTip] = useState(false)

  const isBerry = crop.category === 'bär' || crop.category === 'frukt'
  const diffInfo = DIFFICULTY_INFO[crop.difficulty]
  const dotColor = getDifficultyDotColor(diffInfo.color)
  const diffLabel = getDifficultyLabel(crop.difficulty)

  // Zone range strings (matching web ZoneBadge)
  const outdoorRange = crop.zones.outdoor
    ? `Zon ${Math.min(...crop.zones.outdoor)}-${Math.max(...crop.zones.outdoor)}`
    : null
  const greenhouseRange = crop.zones.greenhouse
    ? `Växthus ${Math.min(...crop.zones.greenhouse)}-${Math.max(...crop.zones.greenhouse)}`
    : null

  // Zone color for user's zone
  const canGrowOutdoor = crop.zones.outdoor?.includes(userZone)
  const canGrowGreenhouse = crop.zones.greenhouse?.includes(userZone)
  const zoneColor = canGrowOutdoor
    ? colors.accent
    : canGrowGreenhouse
      ? colors.zoneGreenhouseText
      : colors.warning

  const zoneTipText = canGrowOutdoor
    ? `Passar i zon ${userZone} utomhus.`
    : canGrowGreenhouse
      ? `Zon ${userZone} kräver växthus eller tunnel.`
      : `Svårt att odla i zon ${userZone} - även med växthus.`

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

  const anyTipOpen = showDiffTip || showZoneTip

  const dismissTips = () => {
    setShowDiffTip(false)
    setShowZoneTip(false)
  }

  const toggleDiffTip = () => {
    setShowDiffTip(!showDiffTip)
    setShowZoneTip(false)
  }

  const toggleZoneTip = () => {
    setShowZoneTip(!showZoneTip)
    setShowDiffTip(false)
  }

  return (
    <>
      <View style={styles.hero}>
        <CropGraphic id={cropId} size={120} category={crop.category} />
      </View>
      <Text style={styles.name}>{crop.name}</Text>
      <Text style={styles.family}>
        {crop.familyLatin} ({crop.family})
      </Text>

      {anyTipOpen && (
        <Pressable style={styles.dismissOverlay} onPress={dismissTips} />
      )}

      <View style={styles.infoCard}>
        {/* Row 1: Difficulty + days */}
        <View style={[styles.tooltipAnchor, showDiffTip && styles.tooltipAnchorActive]}>
          <View style={styles.infoTop}>
            <Pressable style={styles.diffBadge} onPress={toggleDiffTip}>
              <View style={[styles.diffDot, { backgroundColor: dotColor }]} />
              <Text style={[styles.diffLabel, { color: dotColor }]}>{diffLabel}</Text>
              <Text style={[styles.infoIcon, { color: dotColor }]}>i</Text>
            </Pressable>
            <Text style={styles.daysPill}>
              {crop.perennial
                ? crop.lifespan ? `Flerårig - ${crop.lifespan}` : 'Flerårig'
                : `${crop.days} dagar till skörd`}
            </Text>
          </View>

          {showDiffTip && (
            <>
              <View style={[styles.tooltipArrow, styles.tooltipArrowDiff]} />
              <View style={styles.tooltip}>
                <Text style={styles.tooltipText}>
                  <Text style={styles.tooltipBold}>{crop.difficulty}:</Text> {diffInfo.description}
                </Text>
                {crop.difficultyWhy ? (
                  <Text style={styles.tooltipWhy}>Denna gröda: {crop.difficultyWhy}</Text>
                ) : null}
              </View>
            </>
          )}
        </View>

        {/* Row 2: Zone range */}
        <View style={[styles.tooltipAnchor, showZoneTip && styles.tooltipAnchorActive]}>
          <Pressable onPress={toggleZoneTip} style={styles.zoneRow}>
            <Text style={[styles.zoneText, { color: zoneColor }]}>
              {outdoorRange}
              {outdoorRange && greenhouseRange ? ' - ' : ''}
              {greenhouseRange}
            </Text>
            <Text style={[styles.infoIcon, { color: zoneColor }]}>i</Text>
          </Pressable>

          {showZoneTip && (
            <>
              <View style={[styles.tooltipArrow, styles.tooltipArrowCenter]} />
              <View style={styles.tooltip}>
                <Text style={[styles.tooltipText, { textAlign: 'center' }]}>{zoneTipText}</Text>
              </View>
            </>
          )}
        </View>

        {/* Row 3: Stats with dividers */}
        <View style={styles.statsDivider} />
        <View style={styles.statsRow}>
          {stats.map((s, i) => (
            <View
              key={i}
              style={[
                styles.statCell,
                i < stats.length - 1 && styles.statCellBorder,
              ]}
            >
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
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  name: {
    fontSize: fontSize.h1,
    fontFamily: fontFamily.headingExtraBold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 2,
  },
  family: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.card,
    padding: spacing.lg,
    marginTop: spacing.xl,
    gap: spacing.md,
  },
  infoTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  diffBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  diffDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  diffLabel: {
    fontSize: fontSize.label,
    fontFamily: fontFamily.bodyBold,
  },
  infoIcon: {
    fontSize: 10,
    fontFamily: fontFamily.bodyBold,
    opacity: 0.6,
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'currentColor',
    textAlign: 'center',
    lineHeight: 13,
    overflow: 'hidden',
  },
  daysPill: {
    fontSize: fontSize.label,
    fontFamily: fontFamily.bodyBold,
    color: colors.textMuted,
  },
  dismissOverlay: {
    position: 'absolute',
    top: -1000,
    bottom: -1000,
    left: -1000,
    right: -1000,
    zIndex: 15,
  },
  tooltipAnchor: {
    zIndex: 1,
  },
  tooltipAnchorActive: {
    zIndex: 25,
  },
  zoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: spacing.xs,
  },
  zoneText: {
    fontSize: fontSize.label,
    fontFamily: fontFamily.bodyBold,
  },
  tooltipArrow: {
    position: 'absolute',
    top: '100%',
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.text,
    zIndex: 11,
  },
  tooltipArrowDiff: {
    left: 30,
  },
  tooltipArrowCenter: {
    left: '50%',
    marginLeft: -6,
  },
  tooltip: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: 6,
    backgroundColor: colors.text,
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    zIndex: 11,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  tooltipText: {
    fontSize: fontSize.label,
    fontFamily: fontFamily.body,
    color: '#fff',
    lineHeight: 18,
  },
  tooltipBold: {
    fontFamily: fontFamily.bodyBold,
  },
  tooltipWhy: {
    fontSize: fontSize.label,
    fontFamily: fontFamily.body,
    color: '#fff',
    opacity: 0.85,
    marginTop: spacing.sm,
    lineHeight: 18,
  },
  statsDivider: {
    height: 1,
    backgroundColor: colors.border,
  },
  statsRow: {
    flexDirection: 'row',
  },
  statCell: {
    flex: 1,
    alignItems: 'center',
  },
  statCellBorder: {
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },
  statLabel: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginBottom: 2,
  },
  statValue: {
    fontSize: 14,
    fontFamily: fontFamily.headingBold,
    color: colors.text,
  },
  statNote: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginTop: 2,
    lineHeight: 14,
    textAlign: 'center',
  },
})
