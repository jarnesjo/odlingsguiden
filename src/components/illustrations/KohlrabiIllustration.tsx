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
      <ellipse cx="100" cy="148" rx="38" ry="6" fill={colors.earth} opacity="0.08" />

      {/* Knol - rund oval som sitter ovanfor marken */}
      {/* Fylld bakgrund */}
      <path
        d="M60 102 Q58 88 62 78 Q68 64 80 58 Q90 53 100 53 Q110 53 120 58 Q132 64 138 78 Q142 88 140 102 Q138 116 130 124 Q120 132 100 134 Q80 132 70 124 Q62 116 60 102Z"
        fill="#A8C898"
        opacity="0.17"
      />
      {/* Kontur */}
      <path
        d="M60 102 Q58 88 62 78 Q68 64 80 58 Q90 53 100 53 Q110 53 120 58 Q132 64 138 78 Q142 88 140 102 Q138 116 130 124 Q120 132 100 134 Q80 132 70 124 Q62 116 60 102Z"
        stroke="#8AAE7A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Subtila ränder pa knolen - ger volym */}
      <path d="M66 90 Q80 86 100 86 Q120 86 134 90" stroke="#8AAE7A" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />
      <path d="M63 104 Q78 100 100 100 Q122 100 137 104" stroke="#8AAE7A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M67 118 Q82 114 100 114 Q118 114 133 118" stroke="#8AAE7A" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />

      {/* Ljusreflex pa knolen - ger rundhet */}
      <path
        d="M72 72 Q70 84 70 98 Q70 110 74 120"
        stroke="#C8E0B8"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.22"
      />

      {/* Bladstjalkar - sticker ut runt om pa knolens ovansida (Sputnik-karaktär) */}
      {/* Vanster bladstjalke - ut och upp */}
      <path d="M76 68 L56 36" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Hoger bladstjalke - ut och upp */}
      <path d="M124 68 L144 36" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Mitt vänster bladstjalke */}
      <path d="M86 57 L72 24" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Mitt hoger bladstjalke */}
      <path d="M114 57 L128 24" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Topp-stjalke rakt upp */}
      <path d="M100 53 L100 18" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Extra stjalke latt vanster */}
      <path d="M93 55 L80 22" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Extra stjalke latt hoger */}
      <path d="M107 55 L120 22" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Blad - vanster */}
      <path
        d="M56 36 Q42 28 38 18 Q36 8 44 10 Q52 12 56 36Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M56 36 Q42 28 38 18 Q36 8 44 10 Q52 12 56 36" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Bladnerv vanster */}
      <path d="M55 34 Q46 24 40 14" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Blad - hoger */}
      <path
        d="M144 36 Q158 28 162 18 Q164 8 156 10 Q148 12 144 36Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M144 36 Q158 28 162 18 Q164 8 156 10 Q148 12 144 36" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Bladnerv hoger */}
      <path d="M145 34 Q154 24 160 14" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Blad - mitt vanster */}
      <path
        d="M72 24 Q62 14 58 4 Q64 0 72 6 Q76 12 72 24Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M72 24 Q62 14 58 4 Q64 0 72 6 Q76 12 72 24" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Bladnerv mitt vanster */}
      <path d="M71 22 Q65 12 60 5" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Blad - mitt hoger */}
      <path
        d="M128 24 Q138 14 142 4 Q136 0 128 6 Q124 12 128 24Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M128 24 Q138 14 142 4 Q136 0 128 6 Q124 12 128 24" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Bladnerv mitt hoger */}
      <path d="M129 22 Q135 12 140 5" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Blad - topp (bredast, rakt upp) */}
      <path
        d="M100 18 Q94 6 90 -2 Q100 -6 110 -2 Q106 6 100 18Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M100 18 Q94 6 90 -2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M90 -2 Q100 -6 110 -2" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M110 -2 Q106 6 100 18" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Tunna rotter undertill */}
      <path d="M92 134 Q90 142 88 150" stroke="#8AAE7A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M100 134 Q100 143 100 152" stroke="#8AAE7A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M108 134 Q110 142 112 150" stroke="#8AAE7A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Tunna rotgrenar */}
      <path d="M88 148 Q84 152 82 156" stroke="#8AAE7A" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <path d="M100 150 Q97 154 95 158" stroke="#8AAE7A" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <path d="M100 150 Q103 154 105 158" stroke="#8AAE7A" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <path d="M112 148 Q116 152 118 156" stroke="#8AAE7A" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Jordpartiklar */}
      <circle cx="62" cy="144" r="1.5" fill={colors.earth} opacity="0.18" />
      <circle cx="140" cy="142" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="78" cy="152" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="122" cy="150" r="0.8" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function KohlrabiIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Knol */}
      <path
        d="M10 24 Q10 16 14 11 Q18 6 24 6 Q30 6 34 11 Q38 16 38 24 Q38 30 34 34 Q30 38 24 38 Q18 38 14 34 Q10 30 10 24Z"
        fill="#A8C898"
        opacity="0.18"
      />
      <path
        d="M10 24 Q10 16 14 11 Q18 6 24 6 Q30 6 34 11 Q38 16 38 24 Q38 30 34 34 Q30 38 24 38 Q18 38 14 34 Q10 30 10 24Z"
        stroke="#8AAE7A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bladstjalkar - Sputnik-monstret */}
      <path d="M17 13 L10 4" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 7 L24 0" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M31 13 L38 4" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 20 L6 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M34 20 L42 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Tunna rotter */}
      <path d="M20 38 Q19 42 18 46" stroke="#8AAE7A" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      <path d="M24 38 L24 46" stroke="#8AAE7A" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      <path d="M28 38 Q29 42 30 46" stroke="#8AAE7A" strokeWidth="1" strokeLinecap="round" opacity="0.45" />

      {/* Texturlinje pa knolen */}
      <path d="M13 22 Q20 20 28 20 Q34 22 36 22" stroke="#8AAE7A" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />
    </svg>
  )
}
