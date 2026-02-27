/**
 * Custom SVG icons from docs/guides/designsystem.md
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

// ─── New icons for 1.3 Grafisk profil ─────────────────────

export function SearchIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="10.5" cy="10.5" r="6" stroke={color} strokeWidth="1.8" />
      <path d="M15 15L20 20" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function TemperatureIcon({ color = '#C4956A', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="9" y="3" width="6" height="13" rx="3" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="18" r="3" fill={color} opacity="0.15" />
      <circle cx="12" cy="18" r="3" stroke={color} strokeWidth="1.8" />
      <path d="M12 8v7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function WindIcon({ color = '#4A7A8A', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 8h12c2 0 3-1 3-2.5S16 3 14 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 12h16c1.5 0 2.5 1 2.5 2.5S20.5 17 19 16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 16h8c1.5 0 2.5 1 2.5 2.5S12.5 21 11 20" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IndoorIcon({ color = '#8B7355', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 11L12 4l9 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9a1 1 0 001 1h12a1 1 0 001-1v-9" stroke={color} strokeWidth="1.8" />
      <rect x="9" y="14" width="6" height="6" rx="0.5" stroke={color} strokeWidth="1.8" />
      <line x1="12" y1="14" x2="12" y2="20" stroke={color} strokeWidth="1.2" />
    </svg>
  )
}

export function HardeningIcon({ color = '#C4956A', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="10" cy="10" r="3.5" fill={color} opacity="0.15" />
      <circle cx="10" cy="10" r="3.5" stroke={color} strokeWidth="1.8" />
      <path d="M14 6l3-3M14 10h4M14 14l3 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 16v5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 19h6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function TransplantIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M8 12V8c0-2 1.5-4 4-4s4 2 4 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 4c-1 0-2 .5-2.5 1.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M5 16h14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 12v4M16 12v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 16v5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 19h6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function HarvestIcon({ color = '#C4956A', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12c0 5 3 8 7 9 4-1 7-4 7-9" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 12c0-1 .5-2 1.5-2h11c1 0 1.5 1 1.5 2" stroke={color} strokeWidth="1.8" />
      <path d="M5 12h14" stroke={color} strokeWidth="1.8" />
      <path d="M9 5c0 2 1.5 3.5 3 4 1.5-.5 3-2 3-4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 3v6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function TipIcon({ color = '#C4956A', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3C8.5 3 6 5.5 6 9c0 2.5 1.5 4 3 5.5V17h6v-2.5c1.5-1.5 3-3 3-5.5 0-3.5-2.5-6-6-6z" fill={color} opacity="0.12" />
      <path d="M12 3C8.5 3 6 5.5 6 9c0 2.5 1.5 4 3 5.5V17h6v-2.5c1.5-1.5 3-3 3-5.5 0-3.5-2.5-6-6-6z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 20h6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 22h4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 7v3" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export function WarningIcon({ color = '#B54A3F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3L2 20h20L12 3z" fill={color} opacity="0.12" />
      <path d="M12 3L2 20h20L12 3z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 10v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1" fill={color} />
    </svg>
  )
}

export function SnowflakeIcon({ color = '#4A7A8A', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2v20M2 12h20" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 5l-2 2M12 5l2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 19l-2-2M12 19l2-2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 12l2-2M5 12l2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 12l-2-2M19 12l-2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function CellarIcon({ color = '#8B7355', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 12h16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="6" y="12" width="12" height="8" rx="1" fill={color} opacity="0.12" />
      <rect x="6" y="12" width="12" height="8" rx="1" stroke={color} strokeWidth="1.8" />
      <path d="M6 16h12" stroke={color} strokeWidth="1.2" opacity="0.4" />
      <path d="M9 8v4M15 8v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 8c0-2 1.5-3 3-3s3 1 3 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function BloomIcon({ color = '#7B4B6A', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="10" r="3" fill={color} opacity="0.2" />
      <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="1.8" />
      <ellipse cx="12" cy="5" rx="2" ry="3" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="16.5" cy="8" rx="2" ry="3" transform="rotate(60 16.5 8)" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="16.5" cy="13" rx="2" ry="3" transform="rotate(120 16.5 13)" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="12" cy="15" rx="2" ry="3" transform="rotate(180 12 15)" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="7.5" cy="13" rx="2" ry="3" transform="rotate(240 7.5 13)" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="7.5" cy="8" rx="2" ry="3" transform="rotate(300 7.5 8)" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <path d="M12 16v6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function HillIcon({ color = '#8B7355', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 18c3-8 6-12 9-12s6 4 9 12" fill={color} opacity="0.12" />
      <path d="M3 18c3-8 6-12 9-12s6 4 9 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 18h18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 6v-3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 5l2-2 2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StakeIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <line x1="12" y1="3" x2="12" y2="21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 8c2 0 3 1 4 3 1-2 2-3 4-3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 13c1.5 0 2 .8 3 2 1-1.2 1.5-2 3-2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 18h8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function LeafIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M6 21C6 21 6 12 12 6c6-6 9-3 9-3s3 3-3 9c-6 6-12 6-12 6" fill={color} opacity="0.12" />
      <path d="M6 21C6 21 6 12 12 6c6-6 9-3 9-3s3 3-3 9c-6 6-12 6-12 6z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 21L15 9" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

export function RotationIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 12a8 8 0 0114-5.3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 12a8 8 0 01-14 5.3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 4l0 4-4 0" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 20l0-4 4 0" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function BugIcon({ color = '#B54A3F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="14" rx="5" ry="6" fill={color} opacity="0.12" />
      <ellipse cx="12" cy="14" rx="5" ry="6" stroke={color} strokeWidth="1.8" />
      <path d="M12 8v12" stroke={color} strokeWidth="1.2" opacity="0.4" />
      <circle cx="12" cy="7" r="2.5" stroke={color} strokeWidth="1.8" />
      <path d="M5 11L3 9M19 11l2-2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 17L3 19M19 17l2 2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 5L8 3M14 5l2-2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function TagIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 5v6.6a1 1 0 00.3.7l9 9a1 1 0 001.4 0l6.6-6.6a1 1 0 000-1.4l-9-9A1 1 0 0010.6 4H4a1 1 0 00-1 1z" fill={color} opacity="0.12" />
      <path d="M3 5v6.6a1 1 0 00.3.7l9 9a1 1 0 001.4 0l6.6-6.6a1 1 0 000-1.4l-9-9A1 1 0 0010.6 4H4a1 1 0 00-1 1z" stroke={color} strokeWidth="1.8" />
      <circle cx="7" cy="8" r="1.5" fill={color} />
    </svg>
  )
}

export function ChartIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 20V4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 20h16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 14l4-6 4 4 5-7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="14" r="1.5" fill={color} opacity="0.3" />
      <circle cx="11" cy="8" r="1.5" fill={color} opacity="0.3" />
      <circle cx="15" cy="12" r="1.5" fill={color} opacity="0.3" />
      <circle cx="20" cy="5" r="1.5" fill={color} opacity="0.3" />
    </svg>
  )
}

export function StorageIcon({ color = '#8B7355', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="8" width="16" height="12" rx="2" fill={color} opacity="0.12" />
      <rect x="4" y="8" width="16" height="12" rx="2" stroke={color} strokeWidth="1.8" />
      <path d="M4 8l2-4h12l2 4" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 13h4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function FlowerIcon({ color = '#C4956A', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="9" r="2.5" fill={color} opacity="0.2" />
      <circle cx="12" cy="9" r="2.5" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="5" r="2" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="15.5" cy="7.5" r="2" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="15.5" cy="11.5" r="2" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="12" cy="13" r="2" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="8.5" cy="11.5" r="2" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <circle cx="8.5" cy="7.5" r="2" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <path d="M12 14v8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 18c-2-1-3-3-3-3" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

export function BackArrowIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M15 4l-8 8 8 8" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CheckIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 13l4 4L19 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SeedlingIcon({ color = '#3D6B4F', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 22v-10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 12c0-4 3-7 7-8-1 4-4 7-7 8z" fill={color} opacity="0.15" />
      <path d="M12 12c0-4 3-7 7-8-1 4-4 7-7 8z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 16c0-3-2.5-5.5-6-6 .5 3 3 5 6 6z" fill={color} opacity="0.12" />
      <path d="M12 16c0-3-2.5-5.5-6-6 .5 3 3 5 6 6z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

export function DifficultyDot({ color, size = 10 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <circle cx="5" cy="5" r="4" fill={color} />
    </svg>
  )
}

export { SymbolSprout as LogoIcon } from '../brand'

export type { IconProps }
