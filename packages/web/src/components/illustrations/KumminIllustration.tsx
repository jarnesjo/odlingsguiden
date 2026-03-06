import { colors } from '@odlingsguiden/shared'

interface Props {
  size?: number
}

export function KumminIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      {/* Huvudstam */}
      <path d="M100 185 Q100 160, 100 130 Q100 100, 99 70 Q98 52, 97 38" stroke="#4A7A3F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Sidostam vänster */}
      <path d="M99 95 Q86 74, 68 58" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      {/* Sidostam höger */}
      <path d="M100 85 Q114 66, 134 52" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      {/* Flock-blomställning topp */}
      <path d="M97 38 Q87 26, 74 20" stroke="#6B8E4E" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M97 38 Q91 24, 84 16" stroke="#6B8E4E" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M97 38 Q95 22, 94 12" stroke="#6B8E4E" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M97 38 Q99 22, 102 12" stroke="#6B8E4E" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M97 38 Q103 24, 110 16" stroke="#6B8E4E" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M97 38 Q107 26, 120 20" stroke="#6B8E4E" strokeWidth="1.3" strokeLinecap="round" />
      {/* Blombollar topp - vitgula */}
      <circle cx="74" cy="20" r="3.5" fill="#E8DFC0" opacity="0.7" />
      <circle cx="84" cy="16" r="3" fill="#E8DFC0" opacity="0.65" />
      <circle cx="94" cy="12" r="3.5" fill="#E8DFC0" opacity="0.7" />
      <circle cx="102" cy="12" r="3.5" fill="#E8DFC0" opacity="0.7" />
      <circle cx="110" cy="16" r="3" fill="#E8DFC0" opacity="0.65" />
      <circle cx="120" cy="20" r="3.5" fill="#E8DFC0" opacity="0.7" />
      {/* Frö-detaljer - mörka kumminfröliknande prickar */}
      <ellipse cx="76" cy="19" rx="1.8" ry="1" fill="#8B7355" opacity="0.5" transform="rotate(-20 76 19)" />
      <ellipse cx="94" cy="11" rx="1.8" ry="1" fill="#8B7355" opacity="0.5" transform="rotate(5 94 11)" />
      <ellipse cx="102" cy="11" rx="1.8" ry="1" fill="#8B7355" opacity="0.5" transform="rotate(-5 102 11)" />
      <ellipse cx="118" cy="19" rx="1.8" ry="1" fill="#8B7355" opacity="0.5" transform="rotate(20 118 19)" />
      {/* Vänster sidoflock */}
      <path d="M68 58 Q58 46, 48 40" stroke="#6B8E4E" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M68 58 Q62 44, 56 36" stroke="#6B8E4E" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M68 58 Q66 44, 64 34" stroke="#6B8E4E" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M68 58 Q72 46, 78 38" stroke="#6B8E4E" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="48" cy="40" r="2.5" fill="#E8DFC0" opacity="0.5" />
      <circle cx="56" cy="36" r="2.5" fill="#E8DFC0" opacity="0.5" />
      <circle cx="64" cy="34" r="2.5" fill="#E8DFC0" opacity="0.5" />
      <circle cx="78" cy="38" r="2.5" fill="#E8DFC0" opacity="0.5" />
      {/* Höger sidoflock */}
      <path d="M134 52 Q126 40, 122 32" stroke="#6B8E4E" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M134 52 Q132 40, 132 30" stroke="#6B8E4E" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M134 52 Q138 40, 142 30" stroke="#6B8E4E" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M134 52 Q142 42, 150 36" stroke="#6B8E4E" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="122" cy="32" r="2.5" fill="#E8DFC0" opacity="0.5" />
      <circle cx="132" cy="30" r="2.5" fill="#E8DFC0" opacity="0.5" />
      <circle cx="142" cy="30" r="2.5" fill="#E8DFC0" opacity="0.5" />
      <circle cx="150" cy="36" r="2.5" fill="#E8DFC0" opacity="0.5" />
      {/* Morotslika blad - dubbelparet flikiga blad nedre vänster */}
      <path d="M98 150 Q84 142, 66 144 Q56 146, 50 140 Q46 134, 52 128 Q58 124, 70 128 Q84 134, 96 144Z" fill="#5A8A3F" opacity="0.10" />
      <path d="M98 150 Q84 142, 66 144 Q56 146, 50 140 Q46 134, 52 128 Q58 124, 70 128 Q84 134, 96 144" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M94 146 Q78 138, 58 136" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      {/* Nedre blad höger */}
      <path d="M102 150 Q116 142, 134 144 Q144 146, 150 140 Q154 134, 148 128 Q142 124, 130 128 Q116 134, 104 144Z" fill="#5A8A3F" opacity="0.08" />
      <path d="M102 150 Q116 142, 134 144 Q144 146, 150 140 Q154 134, 148 128 Q142 124, 130 128 Q116 134, 104 144" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M106 146 Q122 138, 142 136" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      {/* Mellersta blad vänster (mer flikiga) */}
      <path d="M99 120 Q86 112, 70 114 Q62 116, 58 110 Q56 104, 62 100 Q68 98, 80 102 Q92 108, 98 116Z" fill="#5A8A3F" opacity="0.12" />
      <path d="M99 120 Q86 112, 70 114 Q62 116, 58 110 Q56 104, 62 100 Q68 98, 80 102" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      {/* Bladflik-detaljer vänster */}
      <path d="M78 110 Q72 102, 62 98" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      <path d="M74 106 Q66 100, 56 96" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.15" />
      {/* Mellersta blad höger */}
      <path d="M101 120 Q114 112, 130 114 Q138 116, 142 110 Q144 104, 138 100 Q132 98, 120 102 Q108 108, 102 116Z" fill="#5A8A3F" opacity="0.10" />
      <path d="M101 120 Q114 112, 130 114 Q138 116, 142 110 Q144 104, 138 100 Q132 98, 120 102" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      {/* Övre fina blad */}
      <path d="M98 85 Q86 78, 72 80" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M98 80 Q84 72, 66 72" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />
      <path d="M100 85 Q114 78, 128 80" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M100 80 Q116 72, 134 72" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />
      {/* Bladflikar */}
      <path d="M80 76 Q74 68, 64 66" stroke="#6B8E4E" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
      <path d="M120 76 Q126 68, 136 66" stroke="#6B8E4E" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
      {/* Ljusreflexer */}
      <ellipse cx="78" cy="132" rx="4" ry="6" fill={colors.accentLight} opacity="0.08" transform="rotate(-10 78 132)" />
      <ellipse cx="122" cy="132" rx="4" ry="6" fill={colors.accentLight} opacity="0.06" transform="rotate(10 122 132)" />
      {/* Markprickar */}
      <circle cx="88" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="100" cy="188" r="2" fill={colors.earth} opacity="0.15" />
      <circle cx="112" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="82" cy="190" r="1" fill={colors.earth} opacity="0.12" />
      <circle cx="118" cy="190" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function KumminIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stam */}
      <path d="M24 44 Q24 34, 23.5 22 Q23 14, 22.5 10" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Flock-strålar */}
      <path d="M22.5 10 Q18 6, 14 4" stroke="#6B8E4E" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M22.5 10 Q20 4, 19 2" stroke="#6B8E4E" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M22.5 10 Q23 4, 24 2" stroke="#6B8E4E" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M22.5 10 Q26 4, 29 2" stroke="#6B8E4E" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M22.5 10 Q28 6, 34 4" stroke="#6B8E4E" strokeWidth="1.3" strokeLinecap="round" />
      {/* Blombollar - vitgula */}
      <circle cx="14" cy="4" r="2" fill="#E8DFC0" opacity="0.7" />
      <circle cx="19" cy="2" r="1.8" fill="#E8DFC0" opacity="0.7" />
      <circle cx="24" cy="2" r="2" fill="#E8DFC0" opacity="0.7" />
      <circle cx="29" cy="2" r="1.8" fill="#E8DFC0" opacity="0.7" />
      <circle cx="34" cy="4" r="2" fill="#E8DFC0" opacity="0.7" />
      {/* Frödetaljer */}
      <ellipse cx="14" cy="3.5" rx="1" ry="0.6" fill="#8B7355" opacity="0.5" />
      <ellipse cx="24" cy="1.5" rx="1" ry="0.6" fill="#8B7355" opacity="0.5" />
      <ellipse cx="34" cy="3.5" rx="1" ry="0.6" fill="#8B7355" opacity="0.5" />
      {/* Nedre flikiga blad vänster */}
      <path d="M23 36 Q16 32, 9 34 Q7 30, 10 28 Q14 27, 22 32" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M23 36 Q16 32, 9 34 Q7 30, 10 28 Q14 27, 22 32Z" fill="#5A8A3F" opacity="0.12" />
      {/* Nedre blad höger */}
      <path d="M25 36 Q32 32, 39 34 Q41 30, 38 28 Q34 27, 26 32" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M25 36 Q32 32, 39 34 Q41 30, 38 28 Q34 27, 26 32Z" fill="#5A8A3F" opacity="0.10" />
      {/* Övre fina blad */}
      <path d="M23 24 Q16 20, 10 20" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M23 20 Q16 16, 8 14" stroke="#6B8E4E" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <path d="M24 24 Q32 20, 38 20" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M24 20 Q32 16, 40 14" stroke="#6B8E4E" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}
