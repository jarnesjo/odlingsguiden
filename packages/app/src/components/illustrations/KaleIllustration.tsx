import { colors } from '@odlingsguiden/shared'
import { Circle, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function KaleIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <Circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Main stem */}
      <Path d="M100 170 L100 55" stroke="#3D6B4F" strokeWidth="3" strokeLinecap="round" />
      <Path d="M100 170 L98 175" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <Path d="M100 170 L102 176" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

      {/* Bottom left leaf - large, curly */}
      <Path d="M98 150 C80 145, 50 135, 38 120 Q32 112 40 105 Q48 98 55 108 Q52 95 60 88 Q68 81 72 92 Q70 82 80 78 Q88 76 88 88" stroke="#3D6B5A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M98 150 C80 145, 50 135, 38 120 Q32 112 40 105 Q48 98 55 108 Q52 95 60 88 Q68 81 72 92 Q70 82 80 78 Q88 76 88 88 L98 150Z" fill="#3D6B5A" opacity="0.10" />
      {/* Leaf vein */}
      <Path d="M96 148 C82 140, 62 128, 50 115" stroke="#3D6B5A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Bottom right leaf - large, curly */}
      <Path d="M102 150 C120 145, 150 135, 162 120 Q168 112 160 105 Q152 98 145 108 Q148 95 140 88 Q132 81 128 92 Q130 82 120 78 Q112 76 112 88" stroke="#3D6B5A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M102 150 C120 145, 150 135, 162 120 Q168 112 160 105 Q152 98 145 108 Q148 95 140 88 Q132 81 128 92 Q130 82 120 78 Q112 76 112 88 L102 150Z" fill="#3D6B5A" opacity="0.10" />
      {/* Leaf vein */}
      <Path d="M104 148 C118 140, 138 128, 150 115" stroke="#3D6B5A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Middle left leaf */}
      <Path d="M97 120 C78 115, 52 105, 42 90 Q36 82 44 76 Q52 70 56 82 Q55 70 64 64 Q72 60 74 72 Q74 62 82 60 Q90 58 89 70" stroke="#4A7A5E" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M97 120 C78 115, 52 105, 42 90 Q36 82 44 76 Q52 70 56 82 Q55 70 64 64 Q72 60 74 72 Q74 62 82 60 Q90 58 89 70 L97 120Z" fill="#4A7A5E" opacity="0.12" />
      {/* Leaf vein */}
      <Path d="M95 118 C80 110, 60 98, 52 85" stroke="#4A7A5E" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Middle right leaf */}
      <Path d="M103 120 C122 115, 148 105, 158 90 Q164 82 156 76 Q148 70 144 82 Q145 70 136 64 Q128 60 126 72 Q126 62 118 60 Q110 58 111 70" stroke="#4A7A5E" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M103 120 C122 115, 148 105, 158 90 Q164 82 156 76 Q148 70 144 82 Q145 70 136 64 Q128 60 126 72 Q126 62 118 60 Q110 58 111 70 L103 120Z" fill="#4A7A5E" opacity="0.12" />
      {/* Leaf vein */}
      <Path d="M105 118 C120 110, 140 98, 148 85" stroke="#4A7A5E" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Upper left leaf */}
      <Path d="M96 90 C80 85, 58 75, 50 62 Q46 55 52 50 Q58 45 60 56 Q60 46 68 42 Q76 40 76 52" stroke="#4A7A5E" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M96 90 C80 85, 58 75, 50 62 Q46 55 52 50 Q58 45 60 56 Q60 46 68 42 Q76 40 76 52 L96 90Z" fill="#4A7A5E" opacity="0.10" />

      {/* Upper right leaf */}
      <Path d="M104 90 C120 85, 142 75, 150 62 Q154 55 148 50 Q142 45 140 56 Q140 46 132 42 Q124 40 124 52" stroke="#4A7A5E" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M104 90 C120 85, 142 75, 150 62 Q154 55 148 50 Q142 45 140 56 Q140 46 132 42 Q124 40 124 52 L104 90Z" fill="#4A7A5E" opacity="0.10" />

      {/* Top center leaves - small, young */}
      <Path d="M100 55 C95 48, 85 42, 80 35 Q76 28 82 26 Q88 24 88 34" stroke="#4A7A5E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      <Path d="M100 55 C105 48, 115 42, 120 35 Q124 28 118 26 Q112 24 112 34" stroke="#4A7A5E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Highlight on stem */}
      <Path d="M98 80 L98 140" stroke="#4A7A5E" strokeWidth="1" strokeLinecap="round" opacity="0.2" />

      {/* Ground dots */}
      <Circle cx="75" cy="178" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="125" cy="175" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="90" cy="185" r="1.2" fill={colors.earth} opacity="0.2" />
      <Circle cx="112" cy="182" r="0.8" fill={colors.earth} opacity="0.15" />
    </Svg>
  )
}

export function KaleIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Main stem */}
      <Path d="M24 42 L24 12" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />

      {/* Bottom left leaf - curly */}
      <Path d="M23 36 C18 34, 10 30, 7 24 Q5 20 8 18 Q11 16 12 20 Q12 16 15 14 Q18 13 18 17" stroke="#3D6B5A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M23 36 C18 34, 10 30, 7 24 Q5 20 8 18 Q11 16 12 20 Q12 16 15 14 Q18 13 18 17 L23 36Z" fill="#3D6B5A" opacity="0.10" />

      {/* Bottom right leaf - curly */}
      <Path d="M25 36 C30 34, 38 30, 41 24 Q43 20 40 18 Q37 16 36 20 Q36 16 33 14 Q30 13 30 17" stroke="#3D6B5A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M25 36 C30 34, 38 30, 41 24 Q43 20 40 18 Q37 16 36 20 Q36 16 33 14 Q30 13 30 17 L25 36Z" fill="#3D6B5A" opacity="0.10" />

      {/* Middle left leaf */}
      <Path d="M23 26 C18 24, 12 20, 10 15 Q8 12 11 10 Q14 9 14 13" stroke="#4A7A5E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <Path d="M23 26 C18 24, 12 20, 10 15 Q8 12 11 10 Q14 9 14 13 L23 26Z" fill="#4A7A5E" opacity="0.12" />

      {/* Middle right leaf */}
      <Path d="M25 26 C30 24, 36 20, 38 15 Q40 12 37 10 Q34 9 34 13" stroke="#4A7A5E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <Path d="M25 26 C30 24, 36 20, 38 15 Q40 12 37 10 Q34 9 34 13 L25 26Z" fill="#4A7A5E" opacity="0.12" />

      {/* Top leaves - small */}
      <Path d="M24 12 C22 9, 18 7, 17 4 Q16 2 18 2 Q20 2 20 5" stroke="#4A7A5E" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
      <Path d="M24 12 C26 9, 30 7, 31 4 Q32 2 30 2 Q28 2 28 5" stroke="#4A7A5E" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Root hints */}
      <Path d="M23 42 C22 44, 21 46, 20 47" stroke={colors.earth} strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <Path d="M25 42 C26 44, 27 46, 28 47" stroke={colors.earth} strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    </Svg>
  )
}
