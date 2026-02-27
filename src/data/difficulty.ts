import type { Difficulty, DifficultyInfo } from './types'

export const DIFFICULTY_INFO: Record<Difficulty, DifficultyInfo> = {
  'Enkel': { color: '#B7E4C7', icon: 'easy', description: 'Kräver lite förkunskap. Direktså och skörda. Tålig och förlåtande.' },
  'Medel': { color: '#FFF3CD', icon: 'medium', description: 'Kräver förodling, regelbunden skötsel eller är känslig för väder/sjukdomar.' },
  'Avancerad': { color: '#FDE8E1', icon: 'hard', description: 'Kräver erfarenhet, specifika förhållanden eller mycket skötsel.' },
}
