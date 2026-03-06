import { useState, useMemo } from 'react'
import { FlatList, TextInput, View, Text, Pressable, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CROP_LIST, CATEGORIES, ZONE_INFO } from '@odlingsguiden/shared'
import type { Category, CropListEntry } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../src/theme/tokens'
import { useZone } from '../../src/hooks/useZone'
import { CategoryToggle } from '../../src/components/CategoryToggle'
import { CropRow } from '../../src/components/CropRow'
import { SeasonBanner } from '../../src/components/SeasonBanner'
import { FamilyFilters } from '../../src/components/FamilyFilters'
import { SeasonView } from '../../src/components/SeasonView'
import { LogoCombined } from '../../src/components/brand/LogoCombined'
import { SymbolSprout } from '../../src/components/brand/symbols/SymbolSprout'

type ViewMode = Category | 'säsong'

export default function CropListScreen() {
  const router = useRouter()
  const { zone } = useZone()
  const zoneInfo = ZONE_INFO[zone]

  const [view, setView] = useState<ViewMode>('grönsaker')
  const [search, setSearch] = useState('')
  const [familyFilter, setFamilyFilter] = useState('Alla')
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)

  const isSeason = view === 'säsong'
  const activeCategory = isSeason ? 'grönsaker' : view

  const activeCat = CATEGORIES.find(c => c.id === activeCategory)

  const catCrops = useMemo(
    () => CROP_LIST.filter(c => c.category === activeCategory),
    [activeCategory],
  )

  const families = useMemo(() => {
    const unique = [...new Set(catCrops.map(c => c.familyLatin))]
    return ['Alla', ...unique.sort((a, b) => a.localeCompare(b, 'sv'))]
  }, [catCrops])

  const filtered = useMemo(() => {
    return catCrops
      .filter(
        c =>
          (familyFilter === 'Alla' || c.familyLatin === familyFilter) &&
          c.name.toLowerCase().includes(search.toLowerCase()),
      )
      .sort((a, b) => {
        if (a.locked !== b.locked) return a.locked ? 1 : -1
        return a.name.localeCompare(b.name, 'sv')
      })
  }, [catCrops, familyFilter, search])

  function handleCategoryChange(cat: Category) {
    setView(cat)
    setSearch('')
    setFamilyFilter('Alla')
  }

  function handleSeasonToggle() {
    if (isSeason) {
      setView('grönsaker')
    } else {
      setView('säsong')
    }
  }

  function handleCropPress(crop: CropListEntry) {
    if (!crop.locked) {
      router.push(`/crop/${crop.id}`)
    }
  }

  const header = (
    <>
      {/* Header */}
      <View style={styles.header}>
        <LogoCombined
          name="Odlingsguiden"
          tagline="Allt du behöver veta - en gröda i taget"
          symbol={SymbolSprout}
        />
      </View>

      {/* Zone pill */}
      <Pressable style={styles.zonePill} onPress={() => router.push('/zone')}>
        <Text style={styles.zoneText}>
          Zon {zone} · {zoneInfo?.region ?? ''}
        </Text>
        <Text style={styles.zoneCaret}>{'\u25BE'}</Text>
      </Pressable>

      {/* Season banner */}
      <SeasonBanner
        active={isSeason}
        currentMonth={currentMonth}
        onPress={handleSeasonToggle}
      />

      {/* Category toggle (hidden when season active) */}
      {!isSeason && (
        <CategoryToggle active={activeCategory} onSelect={handleCategoryChange} />
      )}

      {/* Search + family filter (hidden when season active) */}
      {!isSeason && (
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder={`Sök ${activeCat?.label.toLowerCase() ?? ''}...`}
            placeholderTextColor={colors.textMuted}
            value={search}
            onChangeText={setSearch}
            clearButtonMode="while-editing"
            autoCorrect={false}
          />
        </View>
      )}

      {!isSeason && (
        <FamilyFilters
          families={families}
          active={familyFilter}
          categoryColor={activeCat?.color ?? colors.accent}
          onSelect={setFamilyFilter}
        />
      )}
    </>
  )

  if (isSeason) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <FlatList
          data={[]}
          renderItem={null}
          ListHeaderComponent={
            <>
              {header}
              <SeasonView
                userZone={zone}
                currentMonth={currentMonth}
                onMonthChange={setCurrentMonth}
                onSelect={cropId => router.push(`/crop/${cropId}`)}
              />
            </>
          }
        />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        data={filtered}
        keyExtractor={c => c.id}
        ListHeaderComponent={header}
        renderItem={({ item }) => (
          <CropRow crop={item} onPress={() => handleCropPress(item)} />
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    paddingBottom: spacing.section,
  },
  header: {
    alignItems: 'center',
    paddingTop: spacing.section,
    paddingBottom: spacing.xxl,
    gap: spacing.xs,
  },
  title: {
    fontSize: 26,
    fontFamily: fontFamily.headingExtraBold,
    color: colors.text,
  },
  tagline: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
  zonePill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.badge,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    marginBottom: spacing.xl,
    gap: spacing.sm,
  },
  zoneText: {
    fontSize: fontSize.label,
    fontFamily: fontFamily.body,
    color: colors.text,
  },
  zoneCaret: {
    fontSize: 12,
    color: colors.textMuted,
  },
  searchWrapper: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  searchInput: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.cardSmall,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.text,
  },
})
