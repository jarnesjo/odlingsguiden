import { useState, type ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  title: string
  icon?: ReactNode
  children: ReactNode
  defaultOpen?: boolean
}

export function Section({ title, icon, children, defaultOpen = false }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={styles.section}>
      <button className={styles.trigger} onClick={() => setOpen(!open)}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {title}
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▾</span>
      </button>
      {open && <div className={styles.body}>{children}</div>}
    </div>
  )
}
