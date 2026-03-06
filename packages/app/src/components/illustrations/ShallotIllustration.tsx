import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function ShallotIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <Circle cx="100" cy="100" r="90" fill="#C8DEC9" opacity="0.15" />

      {/* Markskugga */}
      <Ellipse cx="100" cy="178" rx="42" ry="6" fill={colors.earth} opacity="0.08" />

      {/* Klyngan av lokar - 3 synliga i klunga */}

      {/* Vanster lok - avlang, lutande */}
      {/* Skal */}
      <Path d="M58 170 Q50 152 50 130 Q50 112 58 100 Q64 90 72 90 Q80 90 84 100 Q90 112 88 130 Q88 152 80 170" fill="#B8845A" opacity="0.16" />
      <Path d="M58 170 Q50 152 50 130 Q50 112 58 100 Q64 90 72 90 Q80 90 84 100 Q90 112 88 130 Q88 152 80 170" stroke="#A0724A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Skalrander */}
      <Path d="M60 160 Q54 142 54 124 Q54 110 62 100" stroke="#A0724A" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      <Path d="M78 160 Q84 142 84 124 Q84 110 78 100" stroke="#A0724A" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      {/* Ljusreflex */}
      <Ellipse cx="64" cy="120" rx="6" ry="14" fill="#D4A87A" opacity="0.20" />
      {/* Rot */}
      <Path d="M66 172 Q64 178 62 184" stroke="#A0724A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <Path d="M70 174 Q70 180 72 186" stroke="#A0724A" strokeWidth="0.6" strokeLinecap="round" opacity="0.16" />

      {/* Mittlok - hogst, rak */}
      {/* Skal */}
      <Path d="M82 168 Q76 148 76 124 Q76 104 84 92 Q90 82 100 82 Q110 82 116 92 Q124 104 124 124 Q124 148 118 168" fill="#C4956A" opacity="0.16" />
      <Path d="M82 168 Q76 148 76 124 Q76 104 84 92 Q90 82 100 82 Q110 82 116 92 Q124 104 124 124 Q124 148 118 168" stroke="#A0724A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Skalrander */}
      <Path d="M86 158 Q80 138 80 118 Q80 102 88 92" stroke="#A0724A" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />
      <Path d="M114 158 Q120 138 120 118 Q120 102 112 92" stroke="#A0724A" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />
      <Path d="M100 160 Q100 138 100 118 Q100 100 100 88" stroke="#A0724A" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />
      {/* Ljusreflex */}
      <Ellipse cx="92" cy="114" rx="8" ry="18" fill="#D8B88A" opacity="0.22" />
      {/* Rot */}
      <Path d="M96 170 Q94 178 92 186" stroke="#A0724A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <Path d="M104 170 Q106 178 108 186" stroke="#A0724A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />

      {/* Hoger lok - avlang, lutande */}
      {/* Skal */}
      <Path d="M120 170 Q112 152 112 132 Q112 114 118 104 Q124 94 130 94 Q136 94 142 104 Q148 114 148 132 Q148 152 140 170" fill="#B8845A" opacity="0.16" />
      <Path d="M120 170 Q112 152 112 132 Q112 114 118 104 Q124 94 130 94 Q136 94 142 104 Q148 114 148 132 Q148 152 140 170" stroke="#A0724A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Skalrander */}
      <Path d="M122 160 Q116 142 116 126 Q116 112 122 104" stroke="#A0724A" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      <Path d="M138 160 Q144 142 144 126 Q144 112 138 104" stroke="#A0724A" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      {/* Ljusreflex */}
      <Ellipse cx="126" cy="124" rx="6" ry="14" fill="#D4A87A" opacity="0.20" />
      {/* Rot */}
      <Path d="M128 172 Q126 178 124 184" stroke="#A0724A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <Path d="M134 174 Q136 180 138 186" stroke="#A0724A" strokeWidth="0.6" strokeLinecap="round" opacity="0.16" />

      {/* Blast fran mittlok */}
      <Path d="M96 86 Q90 64 86 44 Q84 32 88 28" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M100 84 Q100 60 100 40 Q100 28 102 22" stroke="#3D6B4F" strokeWidth="2.0" strokeLinecap="round" fill="none" />
      <Path d="M104 86 Q110 64 114 44 Q116 32 112 28" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Blast fran vanster lok */}
      <Path d="M68 92 Q62 70 58 54 Q56 42 60 36" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <Path d="M72 90 Q68 68 66 50 Q66 38 70 32" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Blast fran hoger lok */}
      <Path d="M132 96 Q138 74 142 58 Q144 46 140 40" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <Path d="M128 94 Q132 72 134 54 Q134 42 130 36" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Torra skalflagor vid basen */}
      <Path d="M76 168 Q72 164 70 168" stroke="#C4A87A" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />
      <Path d="M122 168 Q126 164 128 168" stroke="#C4A87A" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />

      {/* Markprickar */}
      <Circle cx="60" cy="182" r="1.2" fill={colors.earth} opacity="0.18" />
      <Circle cx="140" cy="182" r="1.0" fill={colors.earth} opacity="0.15" />
      <Circle cx="100" cy="186" r="1.5" fill={colors.earth} opacity="0.20" />
    </Svg>
  )
}

export function ShallotIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Vanster lok */}
      <Path d="M10 40 Q6 32 6 24 Q6 18 10 14 Q14 10 18 14 Q22 18 22 24 Q22 32 18 40" fill="#B8845A" opacity="0.16" />
      <Path d="M10 40 Q6 32 6 24 Q6 18 10 14 Q14 10 18 14 Q22 18 22 24 Q22 32 18 40" stroke="#A0724A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Mittlok */}
      <Path d="M18 38 Q14 28 14 20 Q14 12 18 8 Q22 4 26 8 Q30 12 30 20 Q30 28 26 38" fill="#C4956A" opacity="0.16" />
      <Path d="M18 38 Q14 28 14 20 Q14 12 18 8 Q22 4 26 8 Q30 12 30 20 Q30 28 26 38" stroke="#A0724A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Hoger lok */}
      <Path d="M28 40 Q24 32 24 26 Q24 20 28 16 Q32 12 36 16 Q40 20 40 26 Q40 32 36 40" fill="#B8845A" opacity="0.16" />
      <Path d="M28 40 Q24 32 24 26 Q24 20 28 16 Q32 12 36 16 Q40 20 40 26 Q40 32 36 40" stroke="#A0724A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Blast */}
      <Path d="M14 12 Q12 6 14 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M22 6 Q22 3 23 1" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M32 14 Q34 8 32 4" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Skalrander */}
      <Path d="M8 30 Q7 24 10 18" stroke="#A0724A" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      <Path d="M16 30 Q15 22 18 12" stroke="#A0724A" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      <Path d="M34 30 Q36 24 34 18" stroke="#A0724A" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
    </Svg>
  )
}
