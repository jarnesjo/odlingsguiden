import type { ReactNode } from 'react'
import type { GoodToKnow as GoodToKnowType, CropRef } from '../../data/types'
import { hasProfile } from '../../data/cropUtils'
import { Section } from '../ui'
import { Icon } from '../icons/Icon'
import { TipIcon } from '../icons'
import styles from './GoodToKnow.module.css'

interface GoodToKnowProps {
  items: GoodToKnowType[]
  onNavigate?: (cropId: string) => void
}

function linkifyText(text: string, refs: CropRef[] | undefined, onNavigate?: (cropId: string) => void): ReactNode {
  if (!refs || refs.length === 0 || !onNavigate) return text

  const clickableRefs = refs.filter(ref => hasProfile(ref.id))
  if (clickableRefs.length === 0) return text

  const parts: ReactNode[] = []
  let remaining = text
  let keyIndex = 0

  for (const ref of clickableRefs) {
    const regex = new RegExp(`(${ref.name})`, 'gi')
    const match = regex.exec(remaining)
    if (!match) continue

    const before = remaining.slice(0, match.index)
    const matched = match[1] ?? match[0]
    remaining = remaining.slice(match.index + matched.length)

    if (before) parts.push(before)
    const cropId = ref.id
    parts.push(
      <button
        key={keyIndex++}
        className={styles.inlineLink}
        onClick={(e) => { e.stopPropagation(); onNavigate(cropId) }}
        type="button"
      >
        {matched}
      </button>
    )
  }

  if (remaining) parts.push(remaining)
  return parts.length > 0 ? parts : text
}

export function GoodToKnow({ items, onNavigate }: GoodToKnowProps) {
  return (
    <Section title="Bra att veta" icon={<TipIcon size={20} />}>
      <p className={styles.intro}>
        Saker som erfarna odlare vet - och nybörjare ofta lär sig the hard way.
      </p>
      {items.map((item, i) => (
        <div
          key={i}
          className={`${styles.card} ${item.severity === 'warning' ? styles.cardWarning : styles.cardTip}`}
        >
          <div className={styles.cardTitle}>
            <Icon name={item.icon} size={18} /> {item.title}
          </div>
          <div className={styles.cardText}>
            {linkifyText(item.text, item.refs, onNavigate)}
          </div>
        </div>
      ))}
    </Section>
  )
}
