/** Growing zones in Sweden (1–8) */
export type Zone = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

/** Timeline reference zones used in crop data */
export type TimelineZone = 1 | 4 | 6

export type Difficulty = 'Enkel' | 'Medel' | 'Avancerad'

export type Category = 'grönsaker' | 'bär' | 'kryddor'

export type Severity = 'warning' | 'tip'

export type SowingMethod = 'direct' | 'indoor' | 'both'

// ─── Zone Info ───────────────────────────────────────────

export interface ZoneInfo {
  name: string
  region: string
  frost: string
  season: string
}

// ─── Difficulty Info ─────────────────────────────────────

export interface DifficultyInfo {
  color: string
  icon: string
  description: string
}

// ─── Category Info ───────────────────────────────────────

export interface CategoryInfo {
  id: Category
  label: string
  icon: string
  color: string
}

// ─── Crop Sub-types ──────────────────────────────────────

export interface PhRange {
  min: number
  max: number
  ideal: number
}

export interface SunCondition {
  level: string
  icon: string
  detail: string
}

export interface TemperatureCondition {
  min: number
  max: number
  ideal: string
  detail: string
}

export interface WindCondition {
  level: string
  detail: string
}

export interface OptimalConditions {
  sun: SunCondition
  temperature: TemperatureCondition
  wind: WindCondition
}

export interface ZoneAvailability {
  outdoor: Zone[] | null
  indoor: Zone[] | null
  greenhouse: Zone[] | null
}

export interface WateringPhase {
  phase: string
  need: string
  tip: string
}

export interface Watering {
  need: string
  icon: string
  summary: string
  phases: WateringPhase[]
  mistakes: string[]
  tip: string
}

export interface TimelineEntry {
  phase: string
  months: string
  icon: string
}

export interface NutritionDataPoint {
  month: string
  N: number
  P: number
  K: number
  label?: string
}

export interface NutritionTip {
  timing: string
  tip: string
}

export interface Companion {
  name: string
  icon: string
  why: string
}

export interface Companions {
  good: Companion[]
  bad: Companion[]
}

export interface Rotation {
  avoid: string[]
  avoidWhy: string
  goodBefore: string[]
  goodBeforeWhy: string
  goodAfter: string[]
  goodAfterWhy: string
}

export interface Variety {
  name: string
  zones: Zone[]
  note: string
}

export interface Problem {
  name: string
  symptom: string
  fix: string
}

export interface GoodToKnow {
  icon: string
  title: string
  text: string
  severity: Severity
}

export interface SowingInfo {
  method: SowingMethod
  label: string
  description: string
  steps: string[]
  tips: string[]
  indoorWeeks: string | null
}

export interface SeedSaving {
  difficulty: Difficulty
  type: string
  biennial: boolean
  description: string
  steps: string[]
  isolation: string
  storageYears: string
  tip: string
}

export interface StorageMethod {
  method: string
  icon: string
  duration: string
  description: string
  best: boolean
}

export interface Storage {
  shelfLife: string
  methods: StorageMethod[]
  tips: string[]
}

export interface HarvestCalc {
  minPerSqm: number
  maxPerSqm: number
  unit: string
}

// ─── Berry-specific types ────────────────────────────────

export interface PruningType {
  name: string
  when: string
  description: string
  steps: string[]
}

export interface Pruning {
  label: string
  types: Record<string, PruningType>
}

export interface PropagationMethod {
  method: string
  description: string
  icon: string
}

export interface Propagation {
  difficulty: Difficulty
  methods: PropagationMethod[]
  tip: string
}

// ─── Herb-specific types ─────────────────────────────────

export interface HarvestUse {
  use: string
  tip: string
}

export interface HarvestInfo {
  label: string
  method: string
  description: string
  uses: HarvestUse[]
}

// ─── Crop (main type) ───────────────────────────────────

export interface Crop {
  name: string
  icon: string
  category?: Category
  family: string
  familyLatin: string
  perennial?: boolean
  lifespan?: string
  difficulty: Difficulty
  difficultyWhy: string
  zones: ZoneAvailability
  days: string
  spacing: string
  rowSpacing: string
  depth: string
  ph: PhRange
  optimalConditions: OptimalConditions
  watering: Watering
  soil: string
  soilTips: string[]
  timeline: Partial<Record<TimelineZone, TimelineEntry[]>>
  nutritionData: NutritionDataPoint[]
  nutritionTips: NutritionTip[]
  companions: Companions
  rotation: Rotation
  varieties: Variety[]
  problems: Problem[]
  goodToKnow: GoodToKnow[]
  sowing: SowingInfo
  seedSaving: SeedSaving
  storage: Storage
  harvestCalc: HarvestCalc
  /** Berry-specific: pruning instructions */
  pruning?: Pruning
  /** Berry-specific: propagation methods */
  propagation?: Propagation
  /** Herb-specific: harvest & usage info */
  harvest?: HarvestInfo
}

// ─── Crop List Entry ─────────────────────────────────────

export interface CropListEntry {
  id: string
  name: string
  icon: string
  family: string
  familyLatin: string
  difficulty: Difficulty
  category: Category
  locked?: boolean
}
