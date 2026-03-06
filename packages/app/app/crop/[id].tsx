import { useLocalSearchParams } from 'expo-router'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { getCachedCrop, ZONE_INFO } from '@odlingsguiden/shared'
import type { TimelineZone } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily } from '../../src/theme/tokens'
import { useZone } from '../../src/hooks/useZone'
import {
  CropHeader,
  OptimalConditionsSection,
  GoodToKnowSection,
  SowingSection,
  PruningSection,
  HerbHarvestSection,
  NutritionSection,
  SoilSection,
  WateringSection,
  TimelineSection,
  CompanionSection,
  RotationSection,
  VarietiesSection,
  PollinationSection,
  EstablishmentSection,
  RipeningSection,
  ProblemsSection,
  HarvestCalcSection,
  StorageSection,
  SeedSavingSection,
  PropagationSection,
} from '../../src/components/crop'

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

  const isBerry = crop.category === 'bär' || crop.category === 'frukt'
  const isFruit = crop.category === 'frukt'
  const isHerb = crop.category === 'kryddor'

  // Get zone-appropriate timeline (find closest matching zone key)
  const timelineKeys = (Object.keys(crop.timeline).map(Number) as TimelineZone[]).sort((a, b) => a - b)
  const closestKey = timelineKeys.reduce((prev, curr) =>
    Math.abs(curr - zone) < Math.abs(prev - zone) ? curr : prev
  )
  const timeline = crop.timeline[closestKey] ?? []

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <CropHeader cropId={id} crop={crop} userZone={zone} />

      <OptimalConditionsSection conditions={crop.optimalConditions} watering={crop.watering} />
      <GoodToKnowSection items={crop.goodToKnow} />

      {/* Sowing (vegetables & herbs) OR Pruning (berries) */}
      {isBerry && crop.pruning ? (
        <PruningSection pruning={crop.pruning} />
      ) : crop.sowing ? (
        <SowingSection sowing={crop.sowing} />
      ) : null}

      {/* Harvest & Usage for herbs */}
      {isHerb && crop.harvest && <HerbHarvestSection harvest={crop.harvest} />}

      <NutritionSection cropName={crop.name} data={crop.nutritionData} tips={crop.nutritionTips} />
      <SoilSection soil={crop.soil} ph={crop.ph} soilTips={crop.soilTips} />
      <WateringSection watering={crop.watering} />
      <TimelineSection timeline={timeline} userZone={zone} zoneInfo={ZONE_INFO[zone]} />
      <CompanionSection companions={crop.companions} />
      <RotationSection rotation={crop.rotation} />
      <VarietiesSection varieties={crop.varieties} userZone={zone} />

      {/* Fruit-specific sections */}
      {isFruit && crop.pollination && <PollinationSection pollination={crop.pollination} />}
      {isFruit && crop.establishment && <EstablishmentSection establishment={crop.establishment} />}
      {isFruit && crop.ripeningGuide && <RipeningSection guide={crop.ripeningGuide} />}

      <ProblemsSection problems={crop.problems} />
      <HarvestCalcSection calc={crop.harvestCalc} cropName={crop.name} />
      <StorageSection storage={crop.storage} />

      {/* Propagation for berries OR Seed saving for vegetables/herbs */}
      {isBerry && crop.propagation ? (
        <PropagationSection propagation={crop.propagation} />
      ) : crop.seedSaving ? (
        <SeedSavingSection seedSaving={crop.seedSaving} />
      ) : null}
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
  errorText: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.warning,
    textAlign: 'center',
    marginTop: spacing.section,
  },
})
