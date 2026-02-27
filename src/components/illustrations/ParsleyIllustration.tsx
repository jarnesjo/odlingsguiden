import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function ParsleyIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />

      {/* Main stems from base */}
      <path d="M100 180 Q100 160, 98 140 Q96 120, 94 105" stroke="#4A7A3D" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 180 Q102 158, 106 138 Q110 118, 115 100" stroke="#4A7A3D" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 180 Q96 162, 88 145 Q80 128, 72 112" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 180 Q106 155, 120 132 Q130 118, 138 108" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 180 Q100 165, 100 148 Q100 130, 100 115" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left outer leaf cluster (trifoliate) */}
      <path d="M72 112 Q62 106, 50 100 Q42 96, 38 88 Q36 82, 42 78 Q48 76, 56 80 Q64 86, 70 96 Q74 104, 72 112" fill="#5A8E4E" opacity="0.15" />
      <path d="M72 112 Q62 106, 50 100 Q42 96, 38 88 Q36 82, 42 78 Q48 76, 56 80 Q64 86, 70 96" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Leaf serrations */}
      <path d="M50 100 Q46 95, 44 92" stroke="#4A7A3D" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M56 104 Q50 98, 48 94" stroke="#4A7A3D" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      {/* Sub-leaflet left */}
      <path d="M68 108 Q56 110, 46 108 Q40 106, 38 100 Q38 94, 44 94 Q50 94, 58 100 Q64 104, 68 108" fill="#5A8E4E" opacity="0.12" />
      <path d="M68 108 Q56 110, 46 108 Q40 106, 38 100 Q38 94, 44 94 Q50 94, 58 100" stroke="#4A7A3D" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Vein lines */}
      <path d="M66 106 Q54 104, 44 100" stroke="#3D6B30" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Center-left leaf cluster */}
      <path d="M94 105 Q84 92, 76 80 Q72 72, 74 64 Q76 58, 82 58 Q88 60, 90 68 Q92 76, 94 88 Q94 96, 94 105" fill="#5A8E4E" opacity="0.16" />
      <path d="M94 105 Q84 92, 76 80 Q72 72, 74 64 Q76 58, 82 58 Q88 60, 90 68 Q92 76, 94 88" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M90 95 Q82 82, 78 72" stroke="#3D6B30" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      {/* Sub-leaflet */}
      <path d="M90 100 Q78 96, 68 86 Q64 80, 66 74 Q68 70, 74 72 Q80 76, 84 86 Q88 94, 90 100" fill="#4A7A3D" opacity="0.12" />
      <path d="M90 100 Q78 96, 68 86 Q64 80, 66 74 Q68 70, 74 72 Q80 76, 84 86" stroke="#4A7A3D" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Center top leaf */}
      <path d="M100 115 Q98 98, 96 82 Q94 70, 96 58 Q98 50, 102 50 Q106 50, 108 58 Q110 68, 106 82 Q104 98, 100 115" fill="#5A8E4E" opacity="0.14" />
      <path d="M100 115 Q98 98, 96 82 Q94 70, 96 58 Q98 50, 102 50 Q106 50, 108 58 Q110 68, 106 82 Q104 98, 100 115" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Center leaf veins */}
      <path d="M100 108 Q100 90, 100 70 Q100 60, 100 54" stroke="#3D6B30" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      {/* Sub-leaflets on center */}
      <path d="M98 80 Q88 74, 82 66 Q80 60, 84 58 Q88 58, 92 64 Q96 72, 98 80" fill="#6BA058" opacity="0.12" />
      <path d="M98 80 Q88 74, 82 66 Q80 60, 84 58 Q88 58, 92 64" stroke="#4A7A3D" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M102 80 Q112 74, 118 66 Q120 60, 116 58 Q112 58, 108 64 Q104 72, 102 80" fill="#6BA058" opacity="0.1" />
      <path d="M102 80 Q112 74, 118 66 Q120 60, 116 58 Q112 58, 108 64" stroke="#4A7A3D" strokeWidth="1.4" strokeLinecap="round" fill="none" />

      {/* Center-right leaf cluster */}
      <path d="M115 100 Q124 88, 132 76 Q136 68, 134 60 Q132 54, 126 56 Q120 58, 118 66 Q116 76, 115 88 Q115 94, 115 100" fill="#5A8E4E" opacity="0.14" />
      <path d="M115 100 Q124 88, 132 76 Q136 68, 134 60 Q132 54, 126 56 Q120 58, 118 66 Q116 76, 115 88" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M118 92 Q126 80, 130 70" stroke="#3D6B30" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      {/* Sub-leaflet */}
      <path d="M118 96 Q130 92, 140 82 Q144 76, 142 70 Q140 66, 134 68 Q128 72, 124 82 Q120 90, 118 96" fill="#4A7A3D" opacity="0.1" />
      <path d="M118 96 Q130 92, 140 82 Q144 76, 142 70 Q140 66, 134 68 Q128 72, 124 82" stroke="#4A7A3D" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Right outer leaf cluster */}
      <path d="M138 108 Q148 100, 156 94 Q162 88, 164 80 Q164 74, 158 72 Q152 72, 146 78 Q140 86, 136 96 Q134 102, 138 108" fill="#5A8E4E" opacity="0.13" />
      <path d="M138 108 Q148 100, 156 94 Q162 88, 164 80 Q164 74, 158 72 Q152 72, 146 78 Q140 86, 136 96" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M152 96 Q156 90, 160 84" stroke="#4A7A3D" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Sub-leaflet right */}
      <path d="M140 104 Q152 106, 160 102 Q166 98, 166 92 Q164 86, 158 88 Q150 92, 144 98 Q140 102, 140 104" fill="#5A8E4E" opacity="0.1" />
      <path d="M140 104 Q152 106, 160 102 Q166 98, 166 92 Q164 86, 158 88 Q150 92, 144 98" stroke="#4A7A3D" strokeWidth="1.6" strokeLinecap="round" fill="none" />

      {/* Light reflections */}
      <ellipse cx="80" cy="88" rx="5" ry="8" fill="#A8D48A" opacity="0.15" transform="rotate(-25 80 88)" />
      <ellipse cx="126" cy="82" rx="4" ry="7" fill="#A8D48A" opacity="0.12" transform="rotate(20 126 82)" />
      <ellipse cx="100" cy="68" rx="4" ry="6" fill="#A8D48A" opacity="0.1" />

      {/* Ground / soil dots */}
      <circle cx="88" cy="183" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="96" cy="185" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="105" cy="184" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="112" cy="182" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="82" cy="185" r="0.8" fill={colors.earth} opacity="0.12" />
      <circle cx="118" cy="185" r="0.8" fill={colors.earth} opacity="0.12" />

      {/* Ground line */}
      <line x1="75" y1="186" x2="125" y2="186" stroke={colors.earth} strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}

export function ParsleyIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stems */}
      <path d="M24 44 Q24 36, 22 28 Q21 22, 20 18" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 44 Q25 35, 28 26 Q30 20, 32 16" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 44 Q24 38, 24 30 Q24 24, 24 18" stroke="#4A7A3D" strokeWidth="1.6" strokeLinecap="round" />

      {/* Left trifoliate leaf */}
      <path d="M20 18 Q14 14, 10 10 Q8 6, 12 5 Q16 5, 18 10 Q20 14, 20 18" fill="#5A8E4E" opacity="0.15" />
      <path d="M20 18 Q14 14, 10 10 Q8 6, 12 5 Q16 5, 18 10" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M19 16 Q12 16, 8 14 Q6 12, 8 10 Q10 9, 14 12 Q17 14, 19 16" fill="#5A8E4E" opacity="0.12" />
      <path d="M19 16 Q12 16, 8 14 Q6 12, 8 10 Q10 9, 14 12" stroke="#4A7A3D" strokeWidth="1.6" strokeLinecap="round" fill="none" />

      {/* Center leaf */}
      <path d="M24 18 Q22 12, 22 8 Q22 4, 24 3 Q26 4, 26 8 Q26 12, 24 18" fill="#5A8E4E" opacity="0.14" />
      <path d="M24 18 Q22 12, 22 8 Q22 4, 24 3 Q26 4, 26 8 Q26 12, 24 18" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Center sub-leaflets */}
      <path d="M23 12 Q18 10, 16 7 Q16 5, 18 6 Q20 7, 23 12" stroke="#4A7A3D" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M25 12 Q30 10, 32 7 Q32 5, 30 6 Q28 7, 25 12" stroke="#4A7A3D" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* Right trifoliate leaf */}
      <path d="M32 16 Q36 12, 38 8 Q40 4, 38 4 Q34 4, 32 8 Q30 12, 32 16" fill="#5A8E4E" opacity="0.13" />
      <path d="M32 16 Q36 12, 38 8 Q40 4, 38 4 Q34 4, 32 8" stroke="#4A7A3D" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M32 14 Q38 14, 40 12 Q42 10, 40 8 Q38 8, 36 10 Q34 12, 32 14" fill="#5A8E4E" opacity="0.1" />
      <path d="M32 14 Q38 14, 40 12 Q42 10, 40 8 Q38 8, 36 10" stroke="#4A7A3D" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  )
}
