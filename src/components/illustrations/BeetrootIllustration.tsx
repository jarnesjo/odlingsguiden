import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function BeetrootIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Blast - tre huvudstjälkar */}
      <path d="M100 72 L100 30" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M88 75 L70 35" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M112 75 L130 35" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Blad - vänster */}
      <path d="M70 35 Q60 22 55 18 Q50 28 55 38 Q60 42 70 35Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M70 35 Q60 22 55 18" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M55 18 Q50 28 55 38 Q60 42 70 35" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* Bladnerv */}
      <path d="M68 35 Q60 25 56 20" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Blad - höger */}
      <path d="M130 35 Q140 22 145 18 Q150 28 145 38 Q140 42 130 35Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M130 35 Q140 22 145 18" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M145 18 Q150 28 145 38 Q140 42 130 35" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* Bladnerv */}
      <path d="M132 35 Q140 25 144 20" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Blad - mitt (lite bredare) */}
      <path d="M100 30 Q95 16 92 8 Q100 5 108 8 Q105 16 100 30Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M100 30 Q95 16 92 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M92 8 Q100 5 108 8" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M108 8 Q105 16 100 30" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Extra bladskaft */}
      <path d="M95 68 L78 42" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M105 68 L122 42" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      {/* Roten - rundad rödbeta-form (bredare än morot, nästan sfärisk) */}
      {/* Fylld bakgrund */}
      <path d="M78 80 Q72 82 68 92 Q64 108 66 124 Q68 140 76 152 Q84 164 96 170 Q100 172 104 170 Q116 164 124 152 Q132 140 134 124 Q136 108 132 92 Q128 82 122 80 Z" fill="#8B2252" opacity="0.2" />
      {/* Kontur */}
      <path d="M78 80 Q72 82 68 92 Q64 108 66 124 Q68 140 76 152 Q84 164 96 170 Q100 172 104 170 Q116 164 124 152 Q132 140 134 124 Q136 108 132 92 Q128 82 122 80" stroke="#7A1E48" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Liten rot i botten */}
      <path d="M98 170 Q99 178 100 186" stroke="#7A1E48" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M102 170 Q101 178 100 186" stroke="#7A1E48" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Tunna rotgrenar */}
      <path d="M100 182 Q96 185 94 188" stroke="#7A1E48" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M100 180 Q104 183 106 186" stroke="#7A1E48" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />

      {/* Horisontella linjer (betans karaktäristiska ringar) */}
      <path d="M74 95 Q80 93 120 93 Q126 95 130 95" stroke="#7A1E48" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M70 108 Q76 106 124 106 Q130 108 132 108" stroke="#7A1E48" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M68 122 Q74 120 126 120 Q132 122 134 122" stroke="#7A1E48" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M70 136 Q76 134 124 134 Q130 136 132 136" stroke="#7A1E48" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
      <path d="M76 148 Q82 146 118 146 Q124 148 126 148" stroke="#7A1E48" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
      <path d="M86 160 Q92 158 108 158 Q114 160 116 160" stroke="#7A1E48" strokeWidth="1" strokeLinecap="round" opacity="0.12" />

      {/* Ljusreflex */}
      <path d="M82 88 Q80 100 78 120 Q78 135 82 148" stroke="#D4A0B8" strokeWidth="2.5" strokeLinecap="round" opacity="0.2" />

      {/* Små rotdetaljer på sidan */}
      <path d="M70 115 Q66 117 64 115" stroke="#7A1E48" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M132 130 Q136 132 138 130" stroke="#7A1E48" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M72 142 Q68 144 66 142" stroke="#7A1E48" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Jordpartiklar */}
      <circle cx="60" cy="170" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="140" cy="168" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="80" cy="180" r="1.2" fill={colors.earth} opacity="0.2" />
      <circle cx="120" cy="178" r="0.8" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function BeetrootIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Blast */}
      <path d="M24 16 L24 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 8 Q22 4 19 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 8 Q26 4 29 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M22 12 Q18 7 14 4" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M26 12 Q30 7 34 4" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Rot - rundad form */}
      <path d="M19 17 Q17 18 15.5 22 Q14 28 14.5 32 Q15 37 19 41 Q22 44 24 44.5 Q26 44 29 41 Q33 37 33.5 32 Q34 28 32.5 22 Q31 18 29 17" fill="#8B2252" opacity="0.2" />
      <path d="M19 17 Q17 18 15.5 22 Q14 28 14.5 32 Q15 37 19 41 Q22 44 24 44.5 Q26 44 29 41 Q33 37 33.5 32 Q34 28 32.5 22 Q31 18 29 17" stroke="#7A1E48" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Ringar */}
      <path d="M17 24 Q20 23 28 23 Q31 24 32 24" stroke="#7A1E48" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M16 30 Q19 29 29 29 Q32 30 33 30" stroke="#7A1E48" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M17 36 Q20 35 28 35 Q31 36 32 36" stroke="#7A1E48" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
    </svg>
  )
}
