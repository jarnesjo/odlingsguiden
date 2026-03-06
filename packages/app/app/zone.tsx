import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { ZONE_INFO } from '@odlingsguiden/shared'
import type { Zone } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../src/theme/tokens'
import { useZone } from '../src/hooks/useZone'

const zones = (Object.keys(ZONE_INFO).map(Number) as Zone[]).sort((a, b) => a - b)

export default function ZoneModal() {
  const router = useRouter()
  const { zone: currentZone, setZone } = useZone()

  function handleSelect(z: Zone) {
    setZone(z)
    router.back()
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Välj din odlingszon</Text>
      <Text style={styles.subtitle}>
        Zonerna avgör vilka grödor som trivs hos dig och när du kan så och skörda.
      </Text>
      {zones.map(z => {
        const info = ZONE_INFO[z]
        const isSelected = z === currentZone
        return (
          <Pressable
            key={z}
            style={[styles.zoneRow, isSelected && styles.zoneRowSelected]}
            onPress={() => handleSelect(z)}
          >
            <View style={styles.zoneTop}>
              <View
                style={[
                  styles.zoneBadge,
                  isSelected && styles.zoneBadgeSelected,
                ]}
              >
                <Text
                  style={[
                    styles.zoneBadgeText,
                    isSelected && styles.zoneBadgeTextSelected,
                  ]}
                >
                  {z}
                </Text>
              </View>
              <View style={styles.zoneTextWrap}>
                <Text style={styles.zoneRegion}>{info.region}</Text>
              </View>
              {isSelected && <Text style={styles.checkmark}>{'\u2713'}</Text>}
            </View>
            <Text style={styles.zoneFrost}>
              {info.frost} · {info.season}
            </Text>
          </Pressable>
        )
      })}
    </ScrollView>
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
  title: {
    fontSize: fontSize.h1,
    fontFamily: fontFamily.headingBold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginBottom: spacing.xxl,
    lineHeight: 20,
  },
  zoneRow: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    padding: spacing.lg,
    marginBottom: spacing.sm,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  zoneRowSelected: {
    borderColor: colors.accent,
    backgroundColor: '#edf7f0',
  },
  zoneTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  zoneBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zoneBadgeSelected: {
    backgroundColor: colors.accent,
  },
  zoneBadgeText: {
    fontSize: fontSize.h2,
    fontFamily: fontFamily.headingBold,
    color: colors.textMuted,
  },
  zoneBadgeTextSelected: {
    color: '#fff',
  },
  zoneTextWrap: {
    flex: 1,
  },
  zoneRegion: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  checkmark: {
    fontSize: 18,
    color: colors.accent,
    fontWeight: '700',
  },
  zoneFrost: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginTop: spacing.xs,
    marginLeft: 44,
  },
})
