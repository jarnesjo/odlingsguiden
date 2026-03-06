import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function TurnipIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <Circle cx="100" cy="100" r="90" fill="#C8DEC9" opacity="0.15" />

      {/* Markskugga */}
      <Ellipse cx="100" cy="178" rx="38" ry="6" fill={colors.earth} opacity="0.08" />

      {/* Marklinje - rovan sticker upp ur jorden */}
      <Path d="M48 128 Q74 126 100 126 Q126 126 152 128" stroke={colors.earth} strokeWidth="1.2" strokeLinecap="round" opacity="0.20" />

      {/* Blast - mittenstjalk */}
      <Path d="M100 96 L100 60" stroke="#3D6B4F" strokeWidth="2.0" strokeLinecap="round" />

      {/* Blast - vanster blad (brett, rundtandat) */}
      <Path d="M98 72 Q78 52 60 48 Q52 46 48 52 Q46 58 54 64 Q66 70 82 74" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M98 72 Q78 52 60 48 Q52 46 48 52 Q46 58 54 64 Q66 70 82 74 Z" fill="#3D6B4F" opacity="0.12" />
      {/* Vanster bladnerv */}
      <Path d="M94 70 Q72 56 56 52" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />

      {/* Blast - hoger blad (brett, rundtandat) */}
      <Path d="M102 72 Q122 52 140 48 Q148 46 152 52 Q154 58 146 64 Q134 70 118 74" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M102 72 Q122 52 140 48 Q148 46 152 52 Q154 58 146 64 Q134 70 118 74 Z" fill="#3D6B4F" opacity="0.12" />
      {/* Hoger bladnerv */}
      <Path d="M106 70 Q128 56 144 52" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />

      {/* Blast - litet mittblad */}
      <Path d="M100 62 Q92 42 88 34 Q86 28 92 28 Q96 30 100 40" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <Path d="M100 62 Q108 42 112 34 Q114 28 108 28 Q104 30 100 40" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Rova - ovandel (lila-vit gradient-effekt) */}
      {/* Lila topp */}
      <Path d="M62 112 Q64 88 100 82 Q136 88 138 112" fill="#8B5E7A" opacity="0.18" />
      <Path d="M62 112 Q64 88 100 82 Q136 88 138 112" stroke="#7A4D6A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Vit underdel */}
      <Path d="M62 112 Q60 132 70 148 Q80 160 100 164 Q120 160 130 148 Q140 132 138 112" fill="#E8DDD0" opacity="0.18" />
      <Path d="M62 112 Q60 132 70 148 Q80 160 100 164 Q120 160 130 148 Q140 132 138 112" stroke="#C4A888" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Rotspets */}
      <Path d="M100 164 Q100 172 102 180" stroke="#C4A888" strokeWidth="1.5" strokeLinecap="round" />

      {/* Texturrander pa lila toppen */}
      <Path d="M72 104 Q86 96 100 94 Q114 96 128 104" stroke="#7A4D6A" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />
      <Path d="M68 110 Q84 102 100 100 Q116 102 132 110" stroke="#7A4D6A" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" />

      {/* Overgangslinje lila-vit */}
      <Path d="M64 114 Q82 108 100 106 Q118 108 136 114" stroke="#9B7088" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />

      {/* Textur pa vit underdel */}
      <Path d="M68 124 Q84 120 100 118 Q116 120 132 124" stroke="#C4A888" strokeWidth="0.6" strokeLinecap="round" opacity="0.14" />
      <Path d="M74 138 Q86 134 100 132 Q114 134 126 138" stroke="#C4A888" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />

      {/* Ljusreflex for volym */}
      <Ellipse cx="84" cy="96" rx="14" ry="10" fill="#C890AA" opacity="0.18" />
      <Ellipse cx="86" cy="130" rx="12" ry="10" fill="#F0E8E0" opacity="0.20" />

      {/* Fina rothår */}
      <Path d="M88 155 Q84 158 82 162" stroke="#C4A888" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <Path d="M112 155 Q116 158 118 162" stroke="#C4A888" strokeWidth="0.6" strokeLinecap="round" opacity="0.20" />
      <Path d="M96 162 Q94 166 92 170" stroke="#C4A888" strokeWidth="0.5" strokeLinecap="round" opacity="0.16" />

      {/* Jordpartiklar */}
      <Circle cx="68" cy="130" r="1.2" fill={colors.earth} opacity="0.15" />
      <Circle cx="134" cy="126" r="1.0" fill={colors.earth} opacity="0.12" />
      <Circle cx="56" cy="132" r="0.8" fill={colors.earth} opacity="0.10" />
      <Circle cx="146" cy="130" r="0.8" fill={colors.earth} opacity="0.10" />
    </Svg>
  )
}

export function TurnipIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Blast - mittenstjalk */}
      <Path d="M24 18 L24 8" stroke="#3D6B4F" strokeWidth="2.0" strokeLinecap="round" />

      {/* Vanster blad */}
      <Path d="M23 12 Q14 6 10 6 Q8 8 12 12 Q16 14 20 14" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M23 12 Q14 6 10 6 Q8 8 12 12 Q16 14 20 14 Z" fill="#3D6B4F" opacity="0.12" />

      {/* Hoger blad */}
      <Path d="M25 12 Q34 6 38 6 Q40 8 36 12 Q32 14 28 14" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M25 12 Q34 6 38 6 Q40 8 36 12 Q32 14 28 14 Z" fill="#3D6B4F" opacity="0.12" />

      {/* Rova - lila topp */}
      <Path d="M12 26 Q13 18 24 16 Q35 18 36 26" fill="#8B5E7A" opacity="0.18" />
      <Path d="M12 26 Q13 18 24 16 Q35 18 36 26" stroke="#7A4D6A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Rova - vit underdel */}
      <Path d="M12 26 Q11 34 16 38 Q20 42 24 43 Q28 42 32 38 Q37 34 36 26" fill="#E8DDD0" opacity="0.18" />
      <Path d="M12 26 Q11 34 16 38 Q20 42 24 43 Q28 42 32 38 Q37 34 36 26" stroke="#C4A888" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Texturrander */}
      <Path d="M14 24 Q20 20 24 20 Q28 20 34 24" stroke="#7A4D6A" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      <Path d="M14 28 Q20 26 24 25 Q28 26 34 28" stroke="#9B7088" strokeWidth="0.6" strokeLinecap="round" opacity="0.16" />
    </Svg>
  )
}
