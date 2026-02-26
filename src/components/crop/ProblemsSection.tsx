import type { Problem } from '../../data/types'
import { Section } from '../ui'
import styles from './ProblemsSection.module.css'

interface ProblemsSectionProps {
  problems: Problem[]
}

export function ProblemsSection({ problems }: ProblemsSectionProps) {
  return (
    <Section title="🐛 Vanliga problem" defaultOpen={false}>
      {problems.map((p, i) => (
        <div key={i} className={styles.problem}>
          <div className={styles.problemName}>{p.name}</div>
          <div className={styles.symptom}>Symtom: {p.symptom}</div>
          <div className={styles.fix}>Åtgärd: {p.fix}</div>
        </div>
      ))}
    </Section>
  )
}
