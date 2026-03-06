import { FlatList, Text, View, StyleSheet, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { CROP_LIST, DIFFICULTY_INFO } from '@odlingsguiden/shared'
import type { CropListEntry } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../src/theme/tokens'
import { useZone } from '../../src/hooks/useZone'

const crops = CROP_LIST.filter(c => !c.locked)

function CropRow({ item }: { item: CropListEntry }) {
  const router = useRouter()
  const difficulty = DIFFICULTY_INFO[item.difficulty]

  return (
    <Pressable
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
      onPress={() => router.push(`/crop/${item.id}`)}
    >
      <View style={styles.rowContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.family}>{item.family}</Text>
      </View>
      <View style={[styles.badge, { backgroundColor: difficulty?.color + '20' }]}>
        <Text style={[styles.badgeText, { color: difficulty?.color }]}>
          {item.difficulty}
        </Text>
      </View>
    </Pressable>
  )
}

export default function CropListScreen() {
  const { zone } = useZone()

  return (
    <View style={styles.container}>
      <View style={styles.zoneBar}>
        <Text style={styles.zoneLabel}>Zon {zone}</Text>
        <Text style={styles.cropCount}>{crops.length} grödor</Text>
      </View>
      <FlatList
        data={crops}
        keyExtractor={c => c.id}
        renderItem={({ item }) => <CropRow item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  zoneBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.card,
  },
  zoneLabel: {
    fontSize: fontSize.label,
    color: colors.accent,
    fontFamily: fontFamily.headingBold,
  },
  cropCount: {
    fontSize: fontSize.small,
    color: colors.textMuted,
  },
  list: {
    paddingBottom: spacing.section,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.card,
  },
  rowPressed: {
    backgroundColor: colors.background,
  },
  rowContent: {
    flex: 1,
  },
  name: {
    fontSize: fontSize.body,
    color: colors.text,
    fontFamily: fontFamily.headingBold,
  },
  family: {
    fontSize: fontSize.small,
    color: colors.textMuted,
    fontFamily: fontFamily.body,
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radii.badge,
  },
  badgeText: {
    fontSize: fontSize.badge,
    fontFamily: fontFamily.body,
  },
})
