import type { Zone, TimelineZone } from '../../data/types'
import { CROPS } from '../../data/crops'
import { ZONE_INFO } from '../../data/zones'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'
import {
  CropHeader,
  OptimalConditions,
  GoodToKnow,
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
  ProblemsSection,
  HarvestCalcSection,
  StorageSection,
  SeedSavingSection,
  PropagationSection,
} from '../crop'
import styles from './CropPage.module.css'

interface CropPageProps {
  cropId: string
  userZone: Zone
  onBack: () => void
  onZoneClick: () => void
  onNavigate?: (cropId: string) => void
}

export function CropPage({ cropId, userZone, onBack, onZoneClick, onNavigate }: CropPageProps) {
  const crop = CROPS[cropId]

  useDocumentMeta(
    crop ? `${crop.name} - Odlingsguiden` : 'Odlingsguiden',
    crop ? `Odla ${crop.name.toLowerCase()} i Sverige. Zonanpassad guide med sortval, tidslinje, samodling och skördetips.` : undefined,
  )

  if (!crop) return null

  const isBerry = crop.category === 'bär'
  const isHerb = crop.category === 'kryddor'

  // Get zone-appropriate timeline (find closest matching zone key)
  const timelineKeys = (Object.keys(crop.timeline).map(Number) as TimelineZone[]).sort((a, b) => a - b)
  const closestKey = timelineKeys.reduce((prev, curr) =>
    Math.abs(curr - userZone) < Math.abs(prev - userZone) ? curr : prev
  )
  const timeline = crop.timeline[closestKey] ?? []

  return (
    <div className={styles.container}>
      <CropHeader crop={crop} userZone={userZone} onBack={onBack} onZoneClick={onZoneClick} />

      <div className={styles.card}>
        <OptimalConditions conditions={crop.optimalConditions} watering={crop.watering} />
        <GoodToKnow items={crop.goodToKnow} onNavigate={onNavigate} />

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
        <TimelineSection timeline={timeline} userZone={userZone} zoneInfo={ZONE_INFO[userZone]} />
        <CompanionSection companions={crop.companions} onNavigate={onNavigate} />
        <RotationSection rotation={crop.rotation} onNavigate={onNavigate} />
        <VarietiesSection varieties={crop.varieties} userZone={userZone} />
        <ProblemsSection problems={crop.problems} />
        <HarvestCalcSection calc={crop.harvestCalc} cropName={crop.name} />
        <StorageSection storage={crop.storage} />

        {/* Propagation for berries OR Seed saving for vegetables/herbs */}
        {isBerry && crop.propagation ? (
          <PropagationSection propagation={crop.propagation} />
        ) : crop.seedSaving ? (
          <SeedSavingSection seedSaving={crop.seedSaving} />
        ) : null}
      </div>
    </div>
  )
}
