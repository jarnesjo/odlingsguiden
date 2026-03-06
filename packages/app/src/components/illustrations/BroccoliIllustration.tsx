import { colors } from '@odlingsguiden/shared'
import { Circle, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function BroccoliIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <Circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* Main stem */}
      <Path d="M100 175 L100 95" stroke="#3D6B4F" strokeWidth="4" strokeLinecap="round" />
      {/* Stem highlight */}
      <Path d="M97 170 L97 100" stroke="#4A7A5E" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />

      {/* Left branch stems */}
      <Path d="M100 140 Q85 135 75 120" stroke="#3D6B4F" strokeWidth="2.5" strokeLinecap="round" />
      <Path d="M100 120 Q88 115 80 100" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />

      {/* Right branch stems */}
      <Path d="M100 140 Q115 135 125 120" stroke="#3D6B4F" strokeWidth="2.5" strokeLinecap="round" />
      <Path d="M100 120 Q112 115 120 100" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />

      {/* Left leaf */}
      <Path d="M92 155 Q70 150 55 160 Q50 155 58 145 Q66 135 85 142" stroke="#3D6B5A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M92 155 Q70 150 55 160 Q50 155 58 145 Q66 135 85 142 L92 155Z" fill="#3D6B5A" opacity="0.10" />
      {/* Leaf vein */}
      <Path d="M90 152 Q72 148 60 152" stroke="#3D6B5A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

      {/* Right leaf */}
      <Path d="M108 155 Q130 150 145 160 Q150 155 142 145 Q134 135 115 142" stroke="#3D6B5A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M108 155 Q130 150 145 160 Q150 155 142 145 Q134 135 115 142 L108 155Z" fill="#3D6B5A" opacity="0.10" />
      {/* Leaf vein */}
      <Path d="M110 152 Q128 148 140 152" stroke="#3D6B5A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

      {/* Broccoli crown - base layer (darker, behind) */}
      {/* Left cluster */}
      <Circle cx="72" cy="108" r="14" fill="#3D6B4F" opacity="0.35" />
      <Circle cx="65" cy="95" r="12" fill="#3D6B4F" opacity="0.30" />
      {/* Right cluster */}
      <Circle cx="128" cy="108" r="14" fill="#3D6B4F" opacity="0.35" />
      <Circle cx="135" cy="95" r="12" fill="#3D6B4F" opacity="0.30" />
      {/* Back center */}
      <Circle cx="100" cy="78" r="15" fill="#3D6B4F" opacity="0.30" />

      {/* Broccoli crown - middle layer */}
      <Circle cx="80" cy="100" r="16" fill="#4A7A5E" opacity="0.50" />
      <Circle cx="120" cy="100" r="16" fill="#4A7A5E" opacity="0.50" />
      <Circle cx="88" cy="82" r="14" fill="#4A7A5E" opacity="0.45" />
      <Circle cx="112" cy="82" r="14" fill="#4A7A5E" opacity="0.45" />

      {/* Broccoli crown - front layer (lighter, visible) */}
      <Circle cx="100" cy="90" r="18" fill="#4A7A5E" opacity="0.55" />
      <Circle cx="85" cy="92" r="14" fill="#4A7A5E" opacity="0.50" />
      <Circle cx="115" cy="92" r="14" fill="#4A7A5E" opacity="0.50" />
      <Circle cx="100" cy="75" r="13" fill="#5A8B6F" opacity="0.45" />
      <Circle cx="90" cy="78" r="11" fill="#5A8B6F" opacity="0.40" />
      <Circle cx="110" cy="78" r="11" fill="#5A8B6F" opacity="0.40" />

      {/* Broccoli crown - top highlights (lightest) */}
      <Circle cx="95" cy="85" r="8" fill="#6B9B7F" opacity="0.35" />
      <Circle cx="105" cy="82" r="7" fill="#6B9B7F" opacity="0.35" />
      <Circle cx="100" cy="72" r="6" fill="#6B9B7F" opacity="0.30" />

      {/* Crown outline strokes for definition */}
      <Path d="M68 110 Q65 90 78 75 Q90 62 100 60 Q110 62 122 75 Q135 90 132 110 Q130 118 120 115 Q112 108 100 105 Q88 108 80 115 Q70 118 68 110Z" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Tiny floret texture dots */}
      <Circle cx="92" cy="88" r="2" fill="#3D6B4F" opacity="0.20" />
      <Circle cx="108" cy="86" r="2" fill="#3D6B4F" opacity="0.20" />
      <Circle cx="100" cy="80" r="1.5" fill="#3D6B4F" opacity="0.18" />
      <Circle cx="85" cy="95" r="1.8" fill="#3D6B4F" opacity="0.18" />
      <Circle cx="115" cy="95" r="1.8" fill="#3D6B4F" opacity="0.18" />
      <Circle cx="95" cy="72" r="1.5" fill="#3D6B4F" opacity="0.15" />
      <Circle cx="105" cy="70" r="1.5" fill="#3D6B4F" opacity="0.15" />

      {/* Ground dots */}
      <Circle cx="75" cy="180" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="125" cy="178" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="90" cy="185" r="1.2" fill={colors.earth} opacity="0.2" />
      <Circle cx="112" cy="183" r="0.8" fill={colors.earth} opacity="0.15" />
    </Svg>
  )
}

export function BroccoliIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Main stem */}
      <Path d="M24 43 L24 22" stroke="#3D6B4F" strokeWidth="2.5" strokeLinecap="round" />

      {/* Left branch */}
      <Path d="M24 34 Q19 32 16 27" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      {/* Right branch */}
      <Path d="M24 34 Q29 32 32 27" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />

      {/* Left leaf */}
      <Path d="M21 38 Q14 37 12 40 Q11 38 14 34 Q17 31 20 34" stroke="#3D6B5A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <Path d="M21 38 Q14 37 12 40 Q11 38 14 34 Q17 31 20 34 L21 38Z" fill="#3D6B5A" opacity="0.10" />

      {/* Right leaf */}
      <Path d="M27 38 Q34 37 36 40 Q37 38 34 34 Q31 31 28 34" stroke="#3D6B5A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <Path d="M27 38 Q34 37 36 40 Q37 38 34 34 Q31 31 28 34 L27 38Z" fill="#3D6B5A" opacity="0.10" />

      {/* Broccoli crown - base */}
      <Circle cx="17" cy="24" r="6" fill="#3D6B4F" opacity="0.35" />
      <Circle cx="31" cy="24" r="6" fill="#3D6B4F" opacity="0.35" />
      <Circle cx="24" cy="18" r="6" fill="#3D6B4F" opacity="0.30" />

      {/* Crown - middle */}
      <Circle cx="19" cy="22" r="6" fill="#4A7A5E" opacity="0.50" />
      <Circle cx="29" cy="22" r="6" fill="#4A7A5E" opacity="0.50" />
      <Circle cx="24" cy="20" r="7" fill="#4A7A5E" opacity="0.55" />

      {/* Crown - highlights */}
      <Circle cx="22" cy="19" r="3.5" fill="#5A8B6F" opacity="0.40" />
      <Circle cx="26" cy="18" r="3" fill="#5A8B6F" opacity="0.38" />
      <Circle cx="24" cy="15" r="2.5" fill="#6B9B7F" opacity="0.30" />

      {/* Crown outline */}
      <Path d="M14 26 Q13 20 18 15 Q22 11 24 10 Q26 11 30 15 Q35 20 34 26 Q32 28 28 26 Q26 24 24 23 Q22 24 20 26 Q16 28 14 26Z" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Texture dots */}
      <Circle cx="22" cy="21" r="1" fill="#3D6B4F" opacity="0.20" />
      <Circle cx="26" cy="20" r="1" fill="#3D6B4F" opacity="0.20" />
      <Circle cx="24" cy="16" r="0.8" fill="#3D6B4F" opacity="0.15" />
    </Svg>
  )
}
