import type { Variety, Zone } from '../../data/types'
import { Section } from '../ui'
import { TagIcon } from '../icons'
import styles from './VarietiesSection.module.css'

interface VarietiesSectionProps {
  varieties: Variety[]
  userZone: Zone
}

export function VarietiesSection({ varieties, userZone }: VarietiesSectionProps) {
  const goodVarieties = varieties.filter((v) => v.zones.includes(userZone))
  const otherVarieties = varieties.filter((v) => !v.zones.includes(userZone))

  return (
    <Section title={`Sorter för odlingszon ${userZone}`} icon={<TagIcon size={20} />} defaultOpen={false}>
      {goodVarieties.length > 0 && (
        <>
          <div className={`${styles.groupTitle} ${styles.goodGroupTitle}`}>
            Rekommenderade för din zon
          </div>
          {goodVarieties.map((v, i) => (
            <div key={i} className={styles.varietyRow}>
              <div>
                <div className={styles.varietyName}>{v.name}</div>
                <div className={styles.varietyNote}>{v.note}</div>
              </div>
              <span className={`${styles.zoneBadge} ${styles.zoneBadgeGood}`}>
                Zon {Math.min(...v.zones)}–{Math.max(...v.zones)}
              </span>
            </div>
          ))}
        </>
      )}
      {otherVarieties.length > 0 && (
        <>
          <div className={`${styles.groupTitle} ${styles.otherGroupTitle}`}>
            Övriga sorter (ej din zon)
          </div>
          {otherVarieties.map((v, i) => (
            <div key={i} className={`${styles.varietyRow} ${styles.otherVariety}`}>
              <div>
                <div className={styles.varietyName}>{v.name}</div>
                <div className={styles.varietyNote}>{v.note}</div>
              </div>
              <span className={`${styles.zoneBadge} ${styles.zoneBadgeOther}`}>
                Zon {Math.min(...v.zones)}–{Math.max(...v.zones)}
              </span>
            </div>
          ))}
        </>
      )}
    </Section>
  )
}
