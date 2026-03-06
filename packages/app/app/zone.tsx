import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native'
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
    <View style={styles.container}>
      <Text style={styles.title}>Välj din odlingszon</Text>
      <FlatList
        data={zones}
        keyExtractor={z => String(z)}
        renderItem={({ item: z }) => {
          const info = ZONE_INFO[z]
          const isSelected = z === currentZone
          return (
            <Pressable
              style={[styles.zoneRow, isSelected && styles.zoneRowSelected]}
              onPress={() => handleSelect(z)}
            >
              <View style={styles.zoneHeader}>
                <Text style={[styles.zoneName, isSelected && styles.zoneNameSelected]}>
                  Zon {z}
                </Text>
                <Text style={styles.zoneRegion}>{info.name}</Text>
              </View>
              <Text style={styles.zoneFrost}>
                Frostfritt: {info.frostFreeDays} dagar
              </Text>
            </Pressable>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  title: {
    fontSize: fontSize.h1,
    fontFamily: fontFamily.headingBold,
    color: colors.text,
    marginBottom: spacing.lg,
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
  },
  zoneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  zoneName: {
    fontSize: fontSize.h2,
    fontFamily: fontFamily.headingBold,
    color: colors.text,
  },
  zoneNameSelected: {
    color: colors.accent,
  },
  zoneRegion: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
  zoneFrost: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
})
