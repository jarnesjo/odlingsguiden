import { useLocalSearchParams } from 'expo-router'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { getCachedCrop, ZONE_INFO } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../src/theme/tokens'
import { useZone } from '../../src/hooks/useZone'
import { CropGraphic } from '../../src/components/illustrations/CropIcon'

export default function CropDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const crop = getCachedCrop(id)
  const { zone } = useZone()

  if (!crop) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Grödan hittades inte</Text>
      </View>
    )
  }

  const zoneInfo = ZONE_INFO[zone]

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.illustrationWrap}>
        <CropGraphic id={id} size={160} category={crop.category} />
      </View>
      <Text style={styles.name}>{crop.name}</Text>
      <Text style={styles.family}>{crop.family}</Text>

      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>Grundinfo</Text>
        <InfoRow label="Svårighetsgrad" value={crop.difficulty} />
        <InfoRow label="Kategori" value={crop.category} />
        <InfoRow label="Din zon" value={`Zon ${zone} - ${zoneInfo?.name ?? ''}`} />
      </View>

      {crop.difficultyWhy && (
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Varför {crop.difficulty.toLowerCase()}?</Text>
          <Text style={styles.bodyText}>{crop.difficultyWhy}</Text>
        </View>
      )}
    </ScrollView>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.section,
  },
  illustrationWrap: {
    alignItems: 'center',
    marginBottom: spacing.lg,
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
  cardTitle: {
    fontSize: fontSize.h2,
    fontFamily: fontFamily.headingBold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
  },
  infoLabel: {
    fontSize: fontSize.body,
    color: colors.textMuted,
    fontFamily: fontFamily.body,
  },
  infoValue: {
    fontSize: fontSize.body,
    color: colors.text,
    fontFamily: fontFamily.body,
  },
  bodyText: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
    lineHeight: 20,
  },
  errorText: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.warning,
    textAlign: 'center',
    marginTop: spacing.section,
  },
})
