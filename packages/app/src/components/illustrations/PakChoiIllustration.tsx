import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function PakChoiIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <Circle cx="100" cy="100" r="90" fill="#C8DEC9" opacity="0.15" />

      {/* Markskugga */}
      <Ellipse cx="100" cy="178" rx="42" ry="6" fill={colors.earth} opacity="0.08" />

      {/* Rotsystem - synliga rotandar vid basen */}
      <Path d="M92 176 Q88 182 85 188" stroke="#C4A888" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />
      <Path d="M108 176 Q112 182 115 188" stroke="#C4A888" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />

      {/* Vanster yttre stjalk - bred, kottig, vit */}
      <Path d="M78 172 Q60 148 56 122 Q54 106 58 94 Q62 85 70 82" stroke="#C4A888" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M78 172 Q60 148 56 122 Q54 106 58 94 Q62 85 70 82 Q76 86 80 96 Q84 110 86 130 Q88 150 85 168 Z" fill="#E8DDD0" opacity="0.16" />
      {/* Ljusreflex vanster stjalk */}
      <Path d="M76 160 Q64 140 62 118 Q60 104 64 94" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.12" />

      {/* Hoger yttre stjalk - bred, kottig, vit */}
      <Path d="M122 172 Q140 148 144 122 Q146 106 142 94 Q138 85 130 82" stroke="#C4A888" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M122 172 Q140 148 144 122 Q146 106 142 94 Q138 85 130 82 Q124 86 120 96 Q116 110 114 130 Q112 150 115 168 Z" fill="#E8DDD0" opacity="0.16" />
      {/* Ljusreflex hoger stjalk */}
      <Path d="M124 160 Q136 140 138 118 Q140 104 136 94" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.12" />

      {/* Mitten vanster stjalk */}
      <Path d="M90 174 Q76 150 72 126 Q70 110 74 96 Q78 88 84 84" stroke="#C4A888" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M90 174 Q76 150 72 126 Q70 110 74 96 Q78 88 84 84 Q90 90 94 102 Q96 116 96 136 Q96 156 94 170 Z" fill="#E8DDD0" opacity="0.14" />

      {/* Mitten hoger stjalk */}
      <Path d="M110 174 Q124 150 128 126 Q130 110 126 96 Q122 88 116 84" stroke="#C4A888" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M110 174 Q124 150 128 126 Q130 110 126 96 Q122 88 116 84 Q110 90 106 102 Q104 116 104 136 Q104 156 106 170 Z" fill="#E8DDD0" opacity="0.14" />

      {/* Centrumstjalk - rak, bred */}
      <Path d="M100 176 Q100 148 100 120 Q100 102 100 88" stroke="#C4A888" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M96 176 Q94 148 94 120 Q94 102 96 88 Q100 84 104 88 Q106 102 106 120 Q106 148 104 176 Z" fill="#E8DDD0" opacity="0.15" />
      {/* Ljusreflex centrumstjalk */}
      <Path d="M98 168 Q98 145 98 118 Q98 102 99 92" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.10" />

      {/* Vanster yttre blad - morkt gront, rund skedform */}
      <Path d="M70 82 Q44 68 36 48 Q32 34 44 26 Q56 20 66 30 Q72 38 74 52 Q76 64 74 78" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M70 82 Q44 68 36 48 Q32 34 44 26 Q56 20 66 30 Q72 38 74 52 Q76 64 74 78 Z" fill="#3D6B4F" opacity="0.15" />
      {/* Bladnerv vanster yttre */}
      <Path d="M72 76 Q54 64 44 46" stroke="#2C5040" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <Path d="M70 68 Q58 58 50 46" stroke="#2C5040" strokeWidth="0.6" strokeLinecap="round" opacity="0.14" />

      {/* Hoger yttre blad - morkt gront, rund skedform */}
      <Path d="M130 82 Q156 68 164 48 Q168 34 156 26 Q144 20 134 30 Q128 38 126 52 Q124 64 126 78" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M130 82 Q156 68 164 48 Q168 34 156 26 Q144 20 134 30 Q128 38 126 52 Q124 64 126 78 Z" fill="#3D6B4F" opacity="0.15" />
      {/* Bladnerv hoger yttre */}
      <Path d="M128 76 Q146 64 156 46" stroke="#2C5040" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <Path d="M130 68 Q142 58 150 46" stroke="#2C5040" strokeWidth="0.6" strokeLinecap="round" opacity="0.14" />

      {/* Vanster inre blad - nagot ljusare gront */}
      <Path d="M84 84 Q64 66 58 48 Q54 34 64 28 Q72 24 80 32 Q86 40 86 54 Q86 68 86 80" stroke="#4A7A5C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M84 84 Q64 66 58 48 Q54 34 64 28 Q72 24 80 32 Q86 40 86 54 Q86 68 86 80 Z" fill="#4A7A5C" opacity="0.13" />
      {/* Bladnerv vanster inre */}
      <Path d="M85 76 Q72 60 64 44" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />

      {/* Hoger inre blad - nagot ljusare gront */}
      <Path d="M116 84 Q136 66 142 48 Q146 34 136 28 Q128 24 120 32 Q114 40 114 54 Q114 68 114 80" stroke="#4A7A5C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M116 84 Q136 66 142 48 Q146 34 136 28 Q128 24 120 32 Q114 40 114 54 Q114 68 114 80 Z" fill="#4A7A5C" opacity="0.13" />
      {/* Bladnerv hoger inre */}
      <Path d="M115 76 Q128 60 136 44" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />

      {/* Mittblad - uppat, rundad topp */}
      <Path d="M100 88 Q96 62 90 42 Q86 28 94 20 Q100 16 106 20 Q114 28 110 42 Q104 62 100 88" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M100 88 Q96 62 90 42 Q86 28 94 20 Q100 16 106 20 Q114 28 110 42 Q104 62 100 88 Z" fill="#3D6B4F" opacity="0.14" />
      {/* Mittbladnerv */}
      <Path d="M100 82 Q98 58 96 38" stroke="#2C5040" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />

      {/* Markprickar */}
      <Circle cx="72" cy="182" r="1.5" fill={colors.earth} opacity="0.20" />
      <Circle cx="128" cy="180" r="1.0" fill={colors.earth} opacity="0.15" />
      <Circle cx="90" cy="185" r="1.2" fill={colors.earth} opacity="0.18" />
      <Circle cx="112" cy="183" r="0.8" fill={colors.earth} opacity="0.15" />
    </Svg>
  )
}

export function PakChoiIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Vanster stjalk - bred, vit */}
      <Path d="M18 42 Q10 32 8 22 Q7 16 10 12" stroke="#C4A888" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M18 42 Q10 32 8 22 Q7 16 10 12 Q14 14 16 20 Q18 28 19 38 Z" fill="#E8DDD0" opacity="0.16" />

      {/* Hoger stjalk - bred, vit */}
      <Path d="M30 42 Q38 32 40 22 Q41 16 38 12" stroke="#C4A888" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M30 42 Q38 32 40 22 Q41 16 38 12 Q34 14 32 20 Q30 28 29 38 Z" fill="#E8DDD0" opacity="0.16" />

      {/* Centrumstjalk */}
      <Path d="M24 42 Q24 30 24 16" stroke="#C4A888" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M22 42 Q22 30 22 16 Q24 14 26 16 Q26 30 26 42 Z" fill="#E8DDD0" opacity="0.14" />

      {/* Vanster blad - morkt gront */}
      <Path d="M10 12 Q2 6 6 2 Q12 0 16 6 Q18 10 16 14" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M10 12 Q2 6 6 2 Q12 0 16 6 Q18 10 16 14 Z" fill="#3D6B4F" opacity="0.15" />

      {/* Hoger blad - morkt gront */}
      <Path d="M38 12 Q46 6 42 2 Q36 0 32 6 Q30 10 32 14" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M38 12 Q46 6 42 2 Q36 0 32 6 Q30 10 32 14 Z" fill="#3D6B4F" opacity="0.15" />

      {/* Mittblad - uppat */}
      <Path d="M24 16 Q22 8 20 4 Q24 0 28 4 Q26 8 24 16" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M24 16 Q22 8 20 4 Q24 0 28 4 Q26 8 24 16 Z" fill="#4A7A5C" opacity="0.13" />
    </Svg>
  )
}
