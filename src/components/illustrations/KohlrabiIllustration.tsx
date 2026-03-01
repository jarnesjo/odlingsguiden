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
      <ellipse cx="100" cy="168" rx="38" ry="6" fill={colors.earth} opacity="0.08" />

      {/* Knol - rund oval som sitter ovanfor marken */}
      {/* Fylld bakgrund */}
      <path
        d="M60 118 Q58 104 62 94 Q68 80 80 74 Q90 69 100 69 Q110 69 120 74 Q132 80 138 94 Q142 104 140 118 Q138 132 130 140 Q120 148 100 150 Q80 148 70 140 Q62 132 60 118Z"
        fill="#A8C898"
        opacity="0.17"
      />
      {/* Kontur */}
      <path
        d="M60 118 Q58 104 62 94 Q68 80 80 74 Q90 69 100 69 Q110 69 120 74 Q132 80 138 94 Q142 104 140 118 Q138 132 130 140 Q120 148 100 150 Q80 148 70 140 Q62 132 60 118Z"
        stroke="#8AAE7A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Subtila ränder pa knolen - ger volym */}
      <path d="M66 106 Q80 102 100 102 Q120 102 134 106" stroke="#8AAE7A" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />
      <path d="M63 120 Q78 116 100 116 Q122 116 137 120" stroke="#8AAE7A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M67 134 Q82 130 100 130 Q118 130 133 134" stroke="#8AAE7A" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />

      {/* Ljusreflex pa knolen - ger rundhet */}
      <path
        d="M72 88 Q70 100 70 114 Q70 126 74 136"
        stroke="#C8E0B8"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.22"
      />

      {/* Bladstjalkar - sticker ut runt om pa knolens ovansida (Sputnik-karaktär) */}
      {/* Vanster bladstjalke - ut och upp */}
      <path d="M76 84 L56 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Hoger bladstjalke - ut och upp */}
      <path d="M124 84 L144 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Mitt vänster bladstjalke */}
      <path d="M86 73 L72 40" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Mitt hoger bladstjalke */}
      <path d="M114 73 L128 40" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Topp-stjalke rakt upp */}
      <path d="M100 69 L100 34" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Extra stjalke latt vanster */}
      <path d="M93 71 L80 38" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Extra stjalke latt hoger */}
      <path d="M107 71 L120 38" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Blad - vanster */}
      <path
        d="M56 52 Q42 44 38 34 Q36 24 44 26 Q52 28 56 52Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M56 52 Q42 44 38 34 Q36 24 44 26 Q52 28 56 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Bladnerv vanster */}
      <path d="M55 50 Q46 40 40 30" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Blad - hoger */}
      <path
        d="M144 52 Q158 44 162 34 Q164 24 156 26 Q148 28 144 52Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M144 52 Q158 44 162 34 Q164 24 156 26 Q148 28 144 52" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Bladnerv hoger */}
      <path d="M145 50 Q154 40 160 30" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Blad - mitt vanster */}
      <path
        d="M72 40 Q62 30 58 20 Q64 16 72 22 Q76 28 72 40Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M72 40 Q62 30 58 20 Q64 16 72 22 Q76 28 72 40" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Bladnerv mitt vanster */}
      <path d="M71 38 Q65 28 60 21" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Blad - mitt hoger */}
      <path
        d="M128 40 Q138 30 142 20 Q136 16 128 22 Q124 28 128 40Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M128 40 Q138 30 142 20 Q136 16 128 22 Q124 28 128 40" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Bladnerv mitt hoger */}
      <path d="M129 38 Q135 28 140 21" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Blad - topp (rakt upp) */}
      <path
        d="M100 34 Q94 22 90 14 Q100 10 110 14 Q106 22 100 34Z"
        fill="#3D6B4F"
        opacity="0.13"
      />
      <path d="M100 34 Q94 22 90 14" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M90 14 Q100 10 110 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M110 14 Q106 22 100 34" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Tunna rotter undertill */}
      <path d="M92 150 Q90 158 88 166" stroke="#8AAE7A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M100 150 Q100 159 100 168" stroke="#8AAE7A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M108 150 Q110 158 112 166" stroke="#8AAE7A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Tunna rotgrenar */}
      <path d="M88 164 Q84 168 82 172" stroke="#8AAE7A" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <path d="M100 166 Q97 170 95 174" stroke="#8AAE7A" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <path d="M100 166 Q103 170 105 174" stroke="#8AAE7A" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <path d="M112 164 Q116 168 118 172" stroke="#8AAE7A" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />

      {/* Jordpartiklar */}
      <circle cx="62" cy="160" r="1.5" fill={colors.earth} opacity="0.18" />
      <circle cx="140" cy="158" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="78" cy="168" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="122" cy="166" r="0.8" fill={colors.earth} opacity="0.15" />
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

      {/* Bladstjalkar - Sputnik-monstret */}
      <path d="M17 15 L10 6" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 9 L24 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M31 15 L38 6" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 22 L6 16" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M34 22 L42 16" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Tunna rotter */}
      <path d="M20 40 Q19 43 18 46" stroke="#8AAE7A" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      <path d="M24 40 L24 46" stroke="#8AAE7A" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      <path d="M28 40 Q29 43 30 46" stroke="#8AAE7A" strokeWidth="1" strokeLinecap="round" opacity="0.45" />

      {/* Texturlinje pa knolen */}
      <path d="M13 24 Q20 22 28 22 Q34 24 36 24" stroke="#8AAE7A" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />
    </svg>
  )
}
