import { colors } from '@odlingsguiden/shared'

interface Props {
  size?: number
}

export function BrusselsSproutsIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <circle cx="100" cy="100" r="90" fill="#C8DEC9" opacity="0.15" />

      {/* Markskugga */}
      <ellipse cx="100" cy="182" rx="32" ry="5" fill={colors.earth} opacity="0.08" />

      {/* Huvudstam - tjock vertikal stjalk */}
      <path d="M100 180 L100 32" stroke="#8B7355" strokeWidth="3.5" strokeLinecap="round" />

      {/* Nedre vanster skott (sprout 1) */}
      <ellipse cx="88" cy="165" rx="9" ry="8" fill="#6B9B6B" opacity="0.16" />
      <ellipse cx="88" cy="165" rx="9" ry="8" stroke="#5A8A5F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M84 168 Q86 164 88 161" stroke="#5A8A5F" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <ellipse cx="85" cy="162" rx="4" ry="3" fill="#8ABB8A" opacity="0.18" />

      {/* Nedre hoger skott (sprout 2) */}
      <ellipse cx="112" cy="148" rx="9" ry="8" fill="#6B9B6B" opacity="0.16" />
      <ellipse cx="112" cy="148" rx="9" ry="8" stroke="#5A8A5F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M116 151 Q114 147 112 144" stroke="#5A8A5F" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <ellipse cx="115" cy="145" rx="4" ry="3" fill="#8ABB8A" opacity="0.18" />

      {/* Vanster skott (sprout 3) */}
      <ellipse cx="86" cy="130" rx="10" ry="9" fill="#6B9B6B" opacity="0.17" />
      <ellipse cx="86" cy="130" rx="10" ry="9" stroke="#5A8A5F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M82 133 Q84 129 86 126" stroke="#5A8A5F" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <path d="M90 133 Q88 129 87 126" stroke="#5A8A5F" strokeWidth="0.5" strokeLinecap="round" opacity="0.16" />
      <ellipse cx="83" cy="127" rx="4.5" ry="3.5" fill="#8ABB8A" opacity="0.18" />

      {/* Hoger skott (sprout 4) */}
      <ellipse cx="114" cy="112" rx="10" ry="9" fill="#6B9B6B" opacity="0.17" />
      <ellipse cx="114" cy="112" rx="10" ry="9" stroke="#5A8A5F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M118 115 Q116 111 114 108" stroke="#5A8A5F" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <path d="M110 115 Q112 111 113 108" stroke="#5A8A5F" strokeWidth="0.5" strokeLinecap="round" opacity="0.16" />
      <ellipse cx="117" cy="109" rx="4.5" ry="3.5" fill="#8ABB8A" opacity="0.18" />

      {/* Vanster skott (sprout 5) */}
      <ellipse cx="86" cy="95" rx="10" ry="9" fill="#6B9B6B" opacity="0.16" />
      <ellipse cx="86" cy="95" rx="10" ry="9" stroke="#5A8A5F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M82 98 Q84 94 86 91" stroke="#5A8A5F" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <ellipse cx="83" cy="92" rx="4" ry="3" fill="#8ABB8A" opacity="0.18" />

      {/* Hoger skott (sprout 6) */}
      <ellipse cx="113" cy="78" rx="9" ry="8" fill="#6B9B6B" opacity="0.15" />
      <ellipse cx="113" cy="78" rx="9" ry="8" stroke="#5A8A5F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M117 81 Q115 77 113 74" stroke="#5A8A5F" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <ellipse cx="116" cy="75" rx="4" ry="3" fill="#8ABB8A" opacity="0.18" />

      {/* Litet toppskott (sprout 7) */}
      <ellipse cx="90" cy="62" rx="8" ry="7" fill="#6B9B6B" opacity="0.15" />
      <ellipse cx="90" cy="62" rx="8" ry="7" stroke="#5A8A5F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <ellipse cx="87" cy="59" rx="3.5" ry="2.5" fill="#8ABB8A" opacity="0.16" />

      {/* Stort toppblad vanster */}
      <path d="M96 38 Q72 22 58 30 Q48 38 56 52 Q62 60 78 58 Q88 54 96 44" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M96 38 Q72 22 58 30 Q48 38 56 52 Q62 60 78 58 Q88 54 96 44 Z" fill="#3D6B4F" opacity="0.14" />
      {/* Bladnerv vanster toppblad */}
      <path d="M94 42 Q78 32 62 38" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />

      {/* Stort toppblad hoger */}
      <path d="M104 38 Q128 22 142 30 Q152 38 144 52 Q138 60 122 58 Q112 54 104 44" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M104 38 Q128 22 142 30 Q152 38 144 52 Q138 60 122 58 Q112 54 104 44 Z" fill="#3D6B4F" opacity="0.14" />
      {/* Bladnerv hoger toppblad */}
      <path d="M106 42 Q122 32 138 38" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />

      {/* Litet toppblad uppat */}
      <path d="M100 32 Q92 16 96 10 Q100 6 104 10 Q108 16 100 32" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M100 32 Q92 16 96 10 Q100 6 104 10 Q108 16 100 32 Z" fill="#3D6B4F" opacity="0.12" />

      {/* Markprickar */}
      <circle cx="78" cy="186" r="1.5" fill={colors.earth} opacity="0.20" />
      <circle cx="122" cy="184" r="1.0" fill={colors.earth} opacity="0.15" />
      <circle cx="94" cy="188" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="110" cy="186" r="0.8" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function BrusselsSproutsIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Huvudstam */}
      <path d="M24 44 L24 8" stroke="#8B7355" strokeWidth="2.5" strokeLinecap="round" />

      {/* Nedre vanster skott */}
      <ellipse cx="20" cy="38" rx="4" ry="3.5" fill="#6B9B6B" opacity="0.16" />
      <ellipse cx="20" cy="38" rx="4" ry="3.5" stroke="#5A8A5F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Hoger skott */}
      <ellipse cx="28" cy="32" rx="4" ry="3.5" fill="#6B9B6B" opacity="0.16" />
      <ellipse cx="28" cy="32" rx="4" ry="3.5" stroke="#5A8A5F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Vanster skott */}
      <ellipse cx="20" cy="26" rx="4" ry="3.5" fill="#6B9B6B" opacity="0.17" />
      <ellipse cx="20" cy="26" rx="4" ry="3.5" stroke="#5A8A5F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Hoger skott */}
      <ellipse cx="28" cy="20" rx="4" ry="3.5" fill="#6B9B6B" opacity="0.16" />
      <ellipse cx="28" cy="20" rx="4" ry="3.5" stroke="#5A8A5F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Toppskott */}
      <ellipse cx="21" cy="14" rx="3.5" ry="3" fill="#6B9B6B" opacity="0.15" />
      <ellipse cx="21" cy="14" rx="3.5" ry="3" stroke="#5A8A5F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Toppblad vanster */}
      <path d="M22 9 Q14 4 16 8 Q17 10 22 11" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M22 9 Q14 4 16 8 Q17 10 22 11 Z" fill="#3D6B4F" opacity="0.12" />

      {/* Toppblad hoger */}
      <path d="M26 9 Q34 4 32 8 Q31 10 26 11" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M26 9 Q34 4 32 8 Q31 10 26 11 Z" fill="#3D6B4F" opacity="0.12" />
    </svg>
  )
}
