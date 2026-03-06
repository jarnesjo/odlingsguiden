import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function CorianderIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <Circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      {/* Huvudstam */}
      <Path d="M100 185 Q100 160, 100 130 Q100 100, 99 70 Q98 55, 97 42" stroke="#4A7A3F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Sidostam vänster */}
      <Path d="M99 100 Q85 82, 68 68" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      {/* Sidostam höger */}
      <Path d="M100 90 Q116 72, 135 60" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      {/* Flock-blomställning topp */}
      <Path d="M97 42 Q88 30, 78 24" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M97 42 Q92 28, 88 18" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M97 42 Q96 26, 96 16" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M97 42 Q100 26, 104 16" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M97 42 Q104 28, 110 18" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M97 42 Q108 30, 118 24" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      {/* Blombollar topp - vitrosa */}
      <Circle cx="78" cy="24" r="3.5" fill="#E8D4D8" opacity="0.7" />
      <Circle cx="88" cy="18" r="3" fill="#E8D4D8" opacity="0.65" />
      <Circle cx="96" cy="16" r="3.5" fill="#E8D4D8" opacity="0.7" />
      <Circle cx="104" cy="16" r="3.5" fill="#E8D4D8" opacity="0.7" />
      <Circle cx="110" cy="18" r="3" fill="#E8D4D8" opacity="0.65" />
      <Circle cx="118" cy="24" r="3.5" fill="#E8D4D8" opacity="0.7" />
      {/* Blomdetaljer - små rosa prickar */}
      <Circle cx="78" cy="23" r="1.2" fill="#D4A8B2" opacity="0.8" />
      <Circle cx="96" cy="15" r="1.2" fill="#D4A8B2" opacity="0.8" />
      <Circle cx="104" cy="15" r="1.2" fill="#D4A8B2" opacity="0.8" />
      <Circle cx="118" cy="23" r="1.2" fill="#D4A8B2" opacity="0.8" />
      {/* Vänster sidoflock */}
      <Path d="M68 68 Q58 56, 48 50" stroke="#6B8E4E" strokeWidth="1.0" strokeLinecap="round" />
      <Path d="M68 68 Q62 54, 56 46" stroke="#6B8E4E" strokeWidth="1.0" strokeLinecap="round" />
      <Path d="M68 68 Q66 54, 64 44" stroke="#6B8E4E" strokeWidth="1.0" strokeLinecap="round" />
      <Path d="M68 68 Q72 56, 78 48" stroke="#6B8E4E" strokeWidth="1.0" strokeLinecap="round" />
      <Circle cx="48" cy="50" r="2.5" fill="#E8D4D8" opacity="0.5" />
      <Circle cx="56" cy="46" r="2.5" fill="#E8D4D8" opacity="0.5" />
      <Circle cx="64" cy="44" r="2.5" fill="#E8D4D8" opacity="0.5" />
      <Circle cx="78" cy="48" r="2.5" fill="#E8D4D8" opacity="0.5" />
      {/* Höger sidoflock */}
      <Path d="M135 60 Q128 48, 124 40" stroke="#6B8E4E" strokeWidth="1.0" strokeLinecap="round" />
      <Path d="M135 60 Q132 48, 132 38" stroke="#6B8E4E" strokeWidth="1.0" strokeLinecap="round" />
      <Path d="M135 60 Q138 48, 142 38" stroke="#6B8E4E" strokeWidth="1.0" strokeLinecap="round" />
      <Path d="M135 60 Q142 50, 150 44" stroke="#6B8E4E" strokeWidth="1.0" strokeLinecap="round" />
      <Circle cx="124" cy="40" r="2.5" fill="#E8D4D8" opacity="0.5" />
      <Circle cx="132" cy="38" r="2.5" fill="#E8D4D8" opacity="0.5" />
      <Circle cx="142" cy="38" r="2.5" fill="#E8D4D8" opacity="0.5" />
      <Circle cx="150" cy="44" r="2.5" fill="#E8D4D8" opacity="0.5" />
      {/* Nedre breda blad (cilantro-typ, rundade flikar) - vänster */}
      <Path d="M98 150 Q82 142, 60 144 Q50 146, 44 140 Q40 134, 46 128 Q52 124, 62 126 Q76 130, 96 142Z" fill="#5A8A3F" opacity="0.12" />
      <Path d="M98 150 Q82 142, 60 144 Q50 146, 44 140 Q40 134, 46 128 Q52 124, 62 126 Q76 130, 96 142" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Bladnerver nedre vänster */}
      <Path d="M96 146 Q78 138, 56 136" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      <Path d="M88 144 Q72 134, 50 132" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
      {/* Nedre breda blad - höger */}
      <Path d="M102 150 Q118 142, 140 144 Q150 146, 156 140 Q160 134, 154 128 Q148 124, 138 126 Q124 130, 104 142Z" fill="#5A8A3F" opacity="0.10" />
      <Path d="M102 150 Q118 142, 140 144 Q150 146, 156 140 Q160 134, 154 128 Q148 124, 138 126 Q124 130, 104 142" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Bladnerver nedre höger */}
      <Path d="M104 146 Q122 138, 144 136" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      {/* Mellersta blad (mer flikiga) - vänster */}
      <Path d="M99 120 Q86 112, 68 114 Q60 116, 56 110 Q54 104, 60 100 Q66 98, 78 102 Q90 108, 98 116Z" fill="#5A8A3F" opacity="0.14" />
      <Path d="M99 120 Q86 112, 68 114 Q60 116, 56 110 Q54 104, 60 100 Q66 98, 78 102" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <Path d="M96 116 Q82 108, 64 106" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      {/* Mellersta blad - höger */}
      <Path d="M101 120 Q114 112, 132 114 Q140 116, 144 110 Q146 104, 140 100 Q134 98, 122 102 Q110 108, 102 116Z" fill="#5A8A3F" opacity="0.12" />
      <Path d="M101 120 Q114 112, 132 114 Q140 116, 144 110 Q146 104, 140 100 Q134 98, 122 102" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <Path d="M104 116 Q118 108, 136 106" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      {/* Övre blad (finflikiga, dillliknande) - trådlika */}
      <Path d="M98 80 Q86 74, 72 76" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M98 76 Q84 68, 66 68" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />
      <Path d="M98 72 Q82 62, 62 60" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <Path d="M100 80 Q114 74, 128 76" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M100 76 Q116 68, 134 68" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />
      <Path d="M100 72 Q118 62, 138 60" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      {/* Bladflikar övre */}
      <Path d="M80 72 Q74 64, 66 62" stroke="#6B8E4E" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
      <Path d="M120 72 Q126 64, 134 62" stroke="#6B8E4E" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
      {/* Ljusreflexer */}
      <Ellipse cx="75" cy="132" rx="4" ry="6" fill={colors.accentLight} opacity="0.08" transform="rotate(-10 75 132)" />
      <Ellipse cx="125" cy="132" rx="4" ry="6" fill={colors.accentLight} opacity="0.06" transform="rotate(10 125 132)" />
      {/* Markprickar */}
      <Circle cx="88" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="100" cy="188" r="2" fill={colors.earth} opacity="0.15" />
      <Circle cx="112" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="82" cy="190" r="1" fill={colors.earth} opacity="0.12" />
      <Circle cx="118" cy="190" r="1" fill={colors.earth} opacity="0.12" />
    </Svg>
  )
}

export function CorianderIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stam */}
      <Path d="M24 44 Q24 34, 23.5 22 Q23 16, 22.5 12" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Flock-blomställning */}
      <Path d="M22.5 12 Q18 8, 14 6" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M22.5 12 Q20 6, 19 3" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M22.5 12 Q23 6, 24 3" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M22.5 12 Q26 6, 29 3" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M22.5 12 Q28 8, 33 6" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      {/* Blombollar - vitrosa */}
      <Circle cx="14" cy="6" r="2" fill="#E8D4D8" opacity="0.7" />
      <Circle cx="19" cy="3" r="1.8" fill="#E8D4D8" opacity="0.7" />
      <Circle cx="24" cy="3" r="2" fill="#E8D4D8" opacity="0.7" />
      <Circle cx="29" cy="3" r="1.8" fill="#E8D4D8" opacity="0.7" />
      <Circle cx="33" cy="6" r="2" fill="#E8D4D8" opacity="0.7" />
      {/* Nedre breda blad - vänster */}
      <Path d="M23 36 Q16 32, 9 34 Q7 30, 10 28 Q14 27, 22 32" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <Path d="M23 36 Q16 32, 9 34 Q7 30, 10 28 Q14 27, 22 32Z" fill="#5A8A3F" opacity="0.12" />
      {/* Nedre breda blad - höger */}
      <Path d="M25 36 Q32 32, 39 34 Q41 30, 38 28 Q34 27, 26 32" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <Path d="M25 36 Q32 32, 39 34 Q41 30, 38 28 Q34 27, 26 32Z" fill="#5A8A3F" opacity="0.10" />
      {/* Övre finflikiga blad */}
      <Path d="M23 24 Q16 20, 10 20" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M23 20 Q16 16, 8 14" stroke="#6B8E4E" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <Path d="M24 24 Q32 20, 38 20" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M24 20 Q32 16, 40 14" stroke="#6B8E4E" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
    </Svg>
  )
}
