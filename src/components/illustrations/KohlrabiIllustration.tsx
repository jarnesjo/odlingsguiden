import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function KohlrabiIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel - grönsak */}
      <circle cx="100" cy="100" r="90" fill="#C8DEC9" opacity="0.15" />

      {/* Markskugga */}
      <ellipse cx="100" cy="172" rx="35" ry="5" fill={colors.earth} opacity="0.08" />

      {/* Knol - centrerad, rund */}
      <path
        d="M58 112 Q56 96 62 86 Q70 74 82 68 Q92 64 100 64 Q108 64 118 68 Q130 74 138 86 Q144 96 142 112 Q140 128 130 136 Q118 142 100 144 Q82 142 70 136 Q60 128 58 112Z"
        fill="#A8C898"
        opacity="0.17"
      />
      <path
        d="M58 112 Q56 96 62 86 Q70 74 82 68 Q92 64 100 64 Q108 64 118 68 Q130 74 138 86 Q144 96 142 112 Q140 128 130 136 Q118 142 100 144 Q82 142 70 136 Q60 128 58 112Z"
        stroke="#8AAE7A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Subtila ränder på knölen */}
      <path d="M64 100 Q80 96 100 96 Q120 96 136 100" stroke="#8AAE7A" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />
      <path d="M60 114 Q78 110 100 110 Q122 110 140 114" stroke="#8AAE7A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M64 128 Q80 124 100 124 Q120 124 136 128" stroke="#8AAE7A" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />

      {/* Ljusreflex på knölen */}
      <path
        d="M70 84 Q68 96 68 110 Q68 122 72 132"
        stroke="#C8E0B8"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.22"
      />

      {/* Bladstjälkar - kortare, ryms i viewBox */}
      <path d="M76 78 L60 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M124 78 L140 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M88 67 L76 42" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M112 67 L124 42" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 64 L100 36" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Blad - vänster */}
      <path
        d="M60 52 Q48 44 44 36 Q42 28 48 30 Q54 32 60 52Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M60 52 Q48 44 44 36 Q42 28 48 30 Q54 32 60 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M59 50 Q50 42 46 34" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Blad - höger */}
      <path
        d="M140 52 Q152 44 156 36 Q158 28 152 30 Q146 32 140 52Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M140 52 Q152 44 156 36 Q158 28 152 30 Q146 32 140 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M141 50 Q150 42 154 34" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Blad - mitt vänster */}
      <path
        d="M76 42 Q66 34 62 26 Q68 22 74 28 Q78 34 76 42Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M76 42 Q66 34 62 26 Q68 22 74 28 Q78 34 76 42" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />

      {/* Blad - mitt höger */}
      <path
        d="M124 42 Q134 34 138 26 Q132 22 126 28 Q122 34 124 42Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M124 42 Q134 34 138 26 Q132 22 126 28 Q122 34 124 42" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />

      {/* Blad - topp */}
      <path
        d="M100 36 Q94 26 92 20 Q100 16 108 20 Q106 26 100 36Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M100 36 Q94 26 92 20 Q100 16 108 20 Q106 26 100 36" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />

      {/* Tunna rotter undertill */}
      <path d="M94 144 Q92 152 90 160" stroke="#8AAE7A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M100 144 Q100 153 100 162" stroke="#8AAE7A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M106 144 Q108 152 110 160" stroke="#8AAE7A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M90 158 Q86 162 84 166" stroke="#8AAE7A" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <path d="M110 158 Q114 162 116 166" stroke="#8AAE7A" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Jordpartiklar */}
      <circle cx="72" cy="162" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="130" cy="160" r="1" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function KohlrabiIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Knol */}
      <path
        d="M10 26 Q10 18 14 13 Q18 8 24 8 Q30 8 34 13 Q38 18 38 26 Q38 32 34 36 Q30 40 24 40 Q18 40 14 36 Q10 32 10 26Z"
        fill="#A8C898"
        opacity="0.18"
      />
      <path
        d="M10 26 Q10 18 14 13 Q18 8 24 8 Q30 8 34 13 Q38 18 38 26 Q38 32 34 36 Q30 40 24 40 Q18 40 14 36 Q10 32 10 26Z"
        stroke="#8AAE7A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bladstjälkar */}
      <path d="M17 15 L11 7" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 9 L24 3" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M31 15 L37 7" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 22 L7 17" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M34 22 L41 17" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Tunna rotter */}
      <path d="M21 40 Q20 43 19 46" stroke="#8AAE7A" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      <path d="M24 40 L24 46" stroke="#8AAE7A" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      <path d="M27 40 Q28 43 29 46" stroke="#8AAE7A" strokeWidth="1" strokeLinecap="round" opacity="0.45" />

      {/* Texturlinje */}
      <path d="M13 24 Q20 22 28 22 Q34 24 36 24" stroke="#8AAE7A" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />
    </svg>
  )
}
