/**
 * Custom SVG icons from docs/PROMPT-designsystem.md
 * All icons: 1.8px stroke, rounded line caps, subtle fills
 */

interface IconProps {
  color?: string
  size?: number
}

export function VegetableIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C9 2 7 4 7 7c0 1 .3 2 .8 2.8C6 10.5 5 12 5 14c0 3.3 3.1 6 7 6s7-2.7 7-6c0-2-.8-3.5-2.8-4.2.5-.8.8-1.8.8-2.8 0-3-2-5-5-5z" fill={color} opacity="0.15" />
      <path d="M12 3c-2.5 0-4 1.8-4 4 0 1.2.5 2.3 1.3 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 3c2.5 0 4 1.8 4 4 0 1.2-.5 2.3-1.3 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 14c0 3 2.7 5 6 5s6-2 6-5c0-2.5-2-4-4-4.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 9.5C8 10 6 11.5 6 14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="12" y1="2" x2="12" y2="5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function BerryIcon({ color = '#7B4B6A', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="14" r="4" fill={color} opacity="0.15" />
      <circle cx="15" cy="13" r="3.5" fill={color} opacity="0.15" />
      <circle cx="12" cy="17" r="3" fill={color} opacity="0.15" />
      <circle cx="9" cy="14" r="4" stroke={color} strokeWidth="1.8" />
      <circle cx="15" cy="13" r="3.5" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="17" r="3" stroke={color} strokeWidth="1.8" />
      <path d="M11 6C9 4 10 2 12 2s3 2 1 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 6v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function HerbIcon({ color = '#6B7D3E', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 22V8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 8C12 8 8 6 6 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 8C12 8 16 6 18 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 12C12 12 8 10 5 8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 12C12 12 16 10 19 8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 16C12 16 9 14 7 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 16C12 16 15 14 17 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 3c0 2 2 4 6 5" fill={color} opacity="0.12" />
      <path d="M18 3c0 2-2 4-6 5" fill={color} opacity="0.12" />
    </svg>
  )
}

export function SunIcon({ color = '#C4956A', size = 24 }: IconProps) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" fill={color} opacity="0.2" />
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.8" />
      {rays.map((angle) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 12 + Math.cos(rad) * 6.5
        const y1 = 12 + Math.sin(rad) * 6.5
        const x2 = 12 + Math.cos(rad) * 8.5
        const y2 = 12 + Math.sin(rad) * 8.5
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      })}
    </svg>
  )
}

export function WaterIcon({ color = '#4A7A8A', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3L7 12c0 3 2.2 5.5 5 5.5s5-2.5 5-5.5L12 3z" fill={color} opacity="0.15" />
      <path d="M12 3L7 12c0 3 2.2 5.5 5 5.5s5-2.5 5-5.5L12 3z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.5 13c.5 1.5 2 2.5 3.5 2.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export function SoilIcon({ color = '#8B7355', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="14" width="18" height="7" rx="2" fill={color} opacity="0.15" />
      <rect x="3" y="14" width="18" height="7" rx="2" stroke={color} strokeWidth="1.8" />
      <path d="M7 14v-2c0-1 1-2 2-2s2 1 2 2v2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 14v-4c0-1 1-2 2-2s2 1 2 2v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="17" r="1" fill={color} opacity="0.3" />
      <circle cx="14" cy="16.5" r="0.8" fill={color} opacity="0.3" />
      <circle cx="18" cy="17.5" r="0.6" fill={color} opacity="0.3" />
    </svg>
  )
}

export function ScissorsIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="7" cy="17" r="3" stroke={color} strokeWidth="1.8" />
      <circle cx="17" cy="17" r="3" stroke={color} strokeWidth="1.8" />
      <path d="M9.5 15L17 5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14.5 15L7 5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function SeedIcon({ color = '#8B7355', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="14" rx="5" ry="7" fill={color} opacity="0.12" transform="rotate(-15 12 14)" />
      <ellipse cx="12" cy="14" rx="5" ry="7" stroke={color} strokeWidth="1.8" transform="rotate(-15 12 14)" />
      <path d="M12 7c0-3 2-5 4-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 10c2-1 4-1 5 1" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

export function CalendarIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2.5" stroke={color} strokeWidth="1.8" />
      <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="1.8" />
      <line x1="8" y1="3" x2="8" y2="7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="16" y1="3" x2="16" y2="7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="14" r="1.2" fill={color} />
      <circle cx="12" cy="14" r="1.2" fill={color} />
      <circle cx="16" cy="14" r="1.2" fill={color} opacity="0.3" />
      <circle cx="8" cy="17.5" r="1.2" fill={color} opacity="0.3" />
    </svg>
  )
}

export function ZoneIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8 2 5 5.5 5 10c0 5 7 12 7 12s7-7 7-12c0-4.5-3-8-7-8z" fill={color} opacity="0.12" />
      <path d="M12 2C8 2 5 5.5 5 10c0 5 7 12 7 12s7-7 7-12c0-4.5-3-8-7-8z" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="1.8" />
    </svg>
  )
}

interface LogoIconProps {
  accent?: string
  warm?: string
  size?: number
}

export function LogoIcon({ accent = '#3D6B4F', warm = '#C4956A', size = 48 }: LogoIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="28" r="16" fill={accent} opacity="0.08" />
      <path d="M24 8c-3 0-6 3-6 7 0 2 .8 3.5 2 4.5C16 21 13 24 13 28c0 5 4.9 9 11 9s11-4 11-9c0-4-3-7-7-8.5 1.2-1 2-2.5 2-4.5 0-4-3-7-6-7z" fill={accent} opacity="0.15" />
      <path d="M24 8c-3 0-5 2.5-5 6 0 1.8.8 3.2 2 4" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 8c3 0 5 2.5 5 6 0 1.8-.8 3.2-2 4" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14 28c0 4.5 4.5 8 10 8s10-3.5 10-8c0-3.5-3-6.5-6.5-7" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M17.5 21c-2 1.5-3.5 4-3.5 7" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="24" y1="5" x2="24" y2="10" stroke={warm} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M21 6c1-1 2-1.5 3-1.5s2 .5 3 1.5" stroke={warm} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
