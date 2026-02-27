import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function PumpkinIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Stem */}
      <path d="M100 62 C99 54, 97 46, 96 40" stroke="#6B5B3E" strokeWidth="3" strokeLinecap="round" />
      <path d="M96 40 C95 36, 94 32, 92 28" stroke="#6B5B3E" strokeWidth="2.5" strokeLinecap="round" />

      {/* Curly tendril left */}
      <path d="M92 28 C86 22, 78 20, 72 24 Q66 28, 70 34 Q74 38, 80 34" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Large leaf left */}
      <path d="M92 28 C82 22, 64 20, 52 26 C40 32, 42 46, 54 44 C66 42, 82 36, 92 28Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M92 28 C82 22, 64 20, 52 26 C40 32, 42 46, 54 44 C66 42, 82 36, 92 28" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Leaf veins */}
      <path d="M92 28 C80 30, 64 34, 52 36" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M84 26 C78 32, 70 38, 60 42" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Small leaf right */}
      <path d="M96 40 C108 34, 124 32, 134 36 C144 40, 142 50, 132 48 C122 46, 108 44, 96 40Z" fill="#3D6B4F" opacity="0.10" />
      <path d="M96 40 C108 34, 124 32, 134 36 C144 40, 142 50, 132 48 C122 46, 108 44, 96 40" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M96 40 C110 38, 124 38, 134 40" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Main pumpkin body - wide, ribbed, slightly flattened sphere */}
      {/* Back lobe left */}
      <path d="M46 110 C40 88, 48 68, 65 64 C72 62, 78 64, 82 68 C76 74, 40 92, 46 110 Q44 128, 52 142 C58 152, 70 160, 82 162 Q78 156, 46 110Z" fill="#C4793A" opacity="0.12" />
      <path d="M46 110 C40 88, 48 68, 65 64 C72 62, 78 64, 82 68 C76 74, 40 92, 46 110 Q44 128, 52 142 C58 152, 70 160, 82 162" stroke="#B86830" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Center-left lobe */}
      <path d="M82 68 C78 62, 84 56, 92 60 C86 66, 60 92, 58 120 Q56 140, 66 154 C72 162, 82 168, 92 170 Q80 162, 82 68Z" fill="#C4793A" opacity="0.10" />
      <path d="M82 68 C78 62, 84 56, 92 60 Q72 80, 58 120 Q56 140, 66 154 C72 162, 82 168, 92 170" stroke="#B86830" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.3" />

      {/* Center lobe (front, most visible) */}
      <path d="M92 60 C96 56, 104 56, 108 60 Q116 80, 118 110 Q118 142, 108 158 C104 164, 96 164, 92 158 Q82 142, 82 110 Q82 80, 92 60Z" fill="#D4884A" opacity="0.15" />
      <path d="M92 60 C96 56, 104 56, 108 60 Q116 80, 118 110 Q118 142, 108 158 C104 164, 96 164, 92 158 Q82 142, 82 110 Q82 80, 92 60" stroke="#B86830" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Center-right lobe */}
      <path d="M108 60 C116 56, 122 62, 118 68 Q140 92, 142 120 Q144 140, 134 154 C128 162, 118 168, 108 170 Q120 162, 108 60Z" fill="#C4793A" opacity="0.10" />
      <path d="M108 60 C116 56, 122 62, 118 68 Q140 92, 142 120 Q144 140, 134 154 C128 162, 118 168, 108 170" stroke="#B86830" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.3" />

      {/* Back lobe right */}
      <path d="M154 110 C160 88, 152 68, 135 64 C128 62, 122 64, 118 68 C124 74, 160 92, 154 110 Q156 128, 148 142 C142 152, 130 160, 118 162 Q122 156, 154 110Z" fill="#C4793A" opacity="0.12" />
      <path d="M154 110 C160 88, 152 68, 135 64 C128 62, 122 64, 118 68 C124 74, 160 92, 154 110 Q156 128, 148 142 C142 152, 130 160, 118 162" stroke="#B86830" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Ribbing lines on center lobe */}
      <path d="M96 62 Q88 90, 88 120 Q88 148, 96 162" stroke="#B86830" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <path d="M100 58 Q100 90, 100 120 Q100 148, 100 164" stroke="#B86830" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
      <path d="M104 62 Q112 90, 112 120 Q112 148, 104 162" stroke="#B86830" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

      {/* Highlight on center lobe */}
      <path d="M106 70 Q112 95, 112 118 Q112 140, 108 152" stroke="#E8A96A" strokeWidth="2" strokeLinecap="round" opacity="0.2" />

      {/* Small texture speckles */}
      <circle cx="90" cy="100" r="1" fill="#B86830" opacity="0.12" />
      <circle cx="110" cy="110" r="0.8" fill="#B86830" opacity="0.10" />
      <circle cx="95" cy="135" r="1" fill="#B86830" opacity="0.12" />
      <circle cx="105" cy="90" r="0.8" fill="#B86830" opacity="0.10" />
      <circle cx="75" cy="115" r="0.8" fill="#B86830" opacity="0.08" />
      <circle cx="125" cy="120" r="0.8" fill="#B86830" opacity="0.08" />

      {/* Ground shadow */}
      <ellipse cx="100" cy="172" rx="55" ry="4" fill={colors.earth} opacity="0.10" />

      {/* Ground dots */}
      <circle cx="55" cy="178" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="145" cy="180" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="100" cy="183" r="1.2" fill={colors.earth} opacity="0.18" />
    </svg>
  )
}

export function PumpkinIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M24 12 C23 9, 23 7, 22 5" stroke="#6B5B3E" strokeWidth="1.8" strokeLinecap="round" />

      {/* Small leaf */}
      <path d="M22 5 C18 3, 14 4, 13 6 Q12 9, 15 10 Q18 11, 22 5Z" fill="#3D6B4F" opacity="0.12" />
      <path d="M22 5 C18 3, 14 4, 13 6 Q12 9, 15 10 Q18 11, 22 5" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Main pumpkin body - back lobes */}
      <path d="M10 26 C8 20, 10 14, 16 13 C18 12, 20 13, 21 14 Q12 20, 10 26 Q9 32, 12 36 C14 40, 18 42, 21 42 Q16 40, 10 26Z" fill="#C4793A" opacity="0.12" />
      <path d="M10 26 C8 20, 10 14, 16 13 C18 12, 20 13, 21 14 Q12 20, 10 26 Q9 32, 12 36 C14 40, 18 42, 21 42" stroke="#B86830" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Center lobe */}
      <path d="M21 14 C22 12, 26 12, 27 14 Q30 20, 30 27 Q30 34, 27 38 C26 40, 22 40, 21 38 Q18 34, 18 27 Q18 20, 21 14Z" fill="#D4884A" opacity="0.15" />
      <path d="M21 14 C22 12, 26 12, 27 14 Q30 20, 30 27 Q30 34, 27 38 C26 40, 22 40, 21 38 Q18 34, 18 27 Q18 20, 21 14" stroke="#B86830" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Back lobe right */}
      <path d="M38 26 C40 20, 38 14, 32 13 C30 12, 28 13, 27 14 Q36 20, 38 26 Q39 32, 36 36 C34 40, 30 42, 27 42 Q32 40, 38 26Z" fill="#C4793A" opacity="0.12" />
      <path d="M38 26 C40 20, 38 14, 32 13 C30 12, 28 13, 27 14 Q36 20, 38 26 Q39 32, 36 36 C34 40, 30 42, 27 42" stroke="#B86830" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Center rib */}
      <path d="M24 13 Q24 22, 24 28 Q24 34, 24 40" stroke="#B86830" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />

      {/* Highlight */}
      <path d="M26 16 Q28 22, 28 28 Q28 34, 26 38" stroke="#E8A96A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    </svg>
  )
}
