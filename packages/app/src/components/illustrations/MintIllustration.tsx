import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Line, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function MintIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel (kryddor) */}
      <Circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      {/* Huvudstjälk */}
      <Path d="M100 185 Q100 165, 100 140 Q100 115, 98 90 Q96 65, 94 45" stroke="#4A7A3F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Sidogrenar vänster */}
      <Path d="M98 130 Q88 124, 72 118" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      <Path d="M97 100 Q86 94, 68 90" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M96 72 Q88 68, 76 66" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" />
      {/* Sidogrenar höger */}
      <Path d="M102 130 Q112 124, 128 118" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      <Path d="M100 100 Q112 94, 130 90" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M97 72 Q108 68, 122 66" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" />
      {/* Bladpar 1 (nederst) - vänster */}
      <Path d="M72 118 Q58 112, 46 104 Q40 98, 44 92 Q50 88, 60 94 Q70 102, 72 118Z" fill="#5A8A3F" opacity="0.14" />
      <Path d="M72 118 Q58 112, 46 104 Q40 98, 44 92 Q50 88, 60 94 Q70 102, 72 118" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Bladnerv vänster 1 */}
      <Path d="M70 115 Q58 106, 48 98" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      {/* Tandad bladkant - vänster 1 */}
      <Path d="M56 108 Q54 106, 52 108" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      <Path d="M50 102 Q48 100, 46 102" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      {/* Bladpar 1 (nederst) - höger */}
      <Path d="M128 118 Q142 112, 154 104 Q160 98, 156 92 Q150 88, 140 94 Q130 102, 128 118Z" fill="#5A8A3F" opacity="0.12" />
      <Path d="M128 118 Q142 112, 154 104 Q160 98, 156 92 Q150 88, 140 94 Q130 102, 128 118" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Bladnerv höger 1 */}
      <Path d="M130 115 Q142 106, 152 98" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      {/* Tandad bladkant - höger 1 */}
      <Path d="M144 108 Q146 106, 148 108" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      <Path d="M150 102 Q152 100, 154 102" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      {/* Bladpar 2 (mitten) - vänster */}
      <Path d="M68 90 Q54 84, 44 76 Q38 72, 42 66 Q48 62, 56 68 Q64 76, 68 90Z" fill="#5A8A3F" opacity="0.16" />
      <Path d="M68 90 Q54 84, 44 76 Q38 72, 42 66 Q48 62, 56 68 Q64 76, 68 90" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M66 87 Q54 80, 46 72" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      {/* Bladpar 2 (mitten) - höger */}
      <Path d="M130 90 Q144 84, 154 76 Q160 72, 156 66 Q150 62, 142 68 Q134 76, 130 90Z" fill="#5A8A3F" opacity="0.14" />
      <Path d="M130 90 Q144 84, 154 76 Q160 72, 156 66 Q150 62, 142 68 Q134 76, 130 90" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M132 87 Q144 80, 152 72" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      {/* Bladpar 3 (övre) - vänster */}
      <Path d="M76 66 Q66 62, 58 56 Q54 52, 58 48 Q62 46, 68 52 Q74 58, 76 66Z" fill="#6B9E4A" opacity="0.15" />
      <Path d="M76 66 Q66 62, 58 56 Q54 52, 58 48 Q62 46, 68 52 Q74 58, 76 66" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Bladpar 3 (övre) - höger */}
      <Path d="M122 66 Q132 62, 140 56 Q144 52, 140 48 Q136 46, 130 52 Q124 58, 122 66Z" fill="#6B9E4A" opacity="0.13" />
      <Path d="M122 66 Q132 62, 140 56 Q144 52, 140 48 Q136 46, 130 52 Q124 58, 122 66" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Toppskott - små blad */}
      <Path d="M94 48 Q88 44, 84 38 Q82 34, 86 33 Q90 34, 92 40" stroke="#6B9E4A" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M84 38 Q82 34, 86 33 Q90 34, 92 40 Q88 36, 84 38" fill="#6B9E4A" opacity="0.1" />
      <Path d="M96 46 Q100 42, 106 38 Q108 34, 106 33 Q102 34, 98 40" stroke="#6B9E4A" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M106 38 Q108 34, 106 33 Q102 34, 98 40 Q102 36, 106 38" fill="#6B9E4A" opacity="0.1" />
      {/* Blomkransar (lila-rosa, typiska för mynta) */}
      <Circle cx="94" cy="52" r="4" fill="#B090C8" opacity="0.2" />
      <Circle cx="92" cy="50" r="1.2" fill="#C8A8D8" opacity="0.4" />
      <Circle cx="96" cy="50" r="1" fill="#C8A8D8" opacity="0.35" />
      <Circle cx="94" cy="54" r="1" fill="#C8A8D8" opacity="0.35" />
      {/* Underjordiska utlöpare (hint om spridning) */}
      <Path d="M90 185 Q80 190, 62 192 Q52 192, 46 188" stroke="#8B7355" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" strokeDasharray="4 3" />
      <Path d="M110 185 Q120 190, 138 192 Q148 192, 154 188" stroke="#8B7355" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" strokeDasharray="4 3" />
      {/* Små skott från utlöpare */}
      <Path d="M46 188 Q46 182, 48 178" stroke="#6B9E4A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <Path d="M47 180 Q44 178, 42 176" stroke="#6B9E4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M48 180 Q50 178, 52 176" stroke="#6B9E4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M154 188 Q154 182, 152 178" stroke="#6B9E4A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <Path d="M153 180 Q150 178, 148 176" stroke="#6B9E4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M153 180 Q156 178, 158 176" stroke="#6B9E4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Ljusreflexer */}
      <Ellipse cx="58" cy="100" rx="5" ry="10" fill="#A8D48A" opacity="0.12" transform="rotate(-20 58 100)" />
      <Ellipse cx="144" cy="100" rx="4" ry="8" fill="#A8D48A" opacity="0.1" transform="rotate(20 144 100)" />
      {/* Noddetaljer */}
      <Ellipse cx="99" cy="130" rx="3" ry="2" fill="#3D7A2F" opacity="0.12" />
      <Ellipse cx="99" cy="100" rx="2.5" ry="1.8" fill="#3D7A2F" opacity="0.12" />
      <Ellipse cx="97" cy="72" rx="2" ry="1.5" fill="#3D7A2F" opacity="0.1" />
      {/* Kruka */}
      <Path d="M78 185 Q78 176, 84 172 Q92 168, 100 168 Q108 168, 116 172 Q122 176, 122 185" stroke={colors.warm} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M78 185 Q78 176, 84 172 Q92 168, 100 168 Q108 168, 116 172 Q122 176, 122 185" fill={colors.warm} opacity="0.1" />
      <Line x1="76" y1="185" x2="124" y2="185" stroke={colors.warm} strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M84 172 Q92 170, 100 169 Q108 170, 116 172" stroke={colors.earth} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Markprickar */}
      <Circle cx="88" cy="170" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="112" cy="170" r="0.8" fill={colors.earth} opacity="0.12" />
    </Svg>
  )
}

export function MintIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Huvudstjälk */}
      <Path d="M24 44 Q24 32, 24 20 Q24 14, 23 8" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Bladpar 1 - vänster */}
      <Path d="M22 34 Q16 30, 10 26 Q8 24, 10 22 Q12 21, 16 25 Q20 30, 22 34Z" fill="#5A8A3F" opacity="0.14" />
      <Path d="M22 34 Q16 30, 10 26 Q8 24, 10 22 Q12 21, 16 25 Q20 30, 22 34" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Bladpar 1 - höger */}
      <Path d="M26 34 Q32 30, 38 26 Q40 24, 38 22 Q36 21, 32 25 Q28 30, 26 34Z" fill="#5A8A3F" opacity="0.12" />
      <Path d="M26 34 Q32 30, 38 26 Q40 24, 38 22 Q36 21, 32 25 Q28 30, 26 34" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Bladpar 2 - vänster */}
      <Path d="M23 24 Q18 21, 13 18 Q11 16, 13 15 Q15 14, 18 17 Q22 21, 23 24Z" fill="#6B9E4A" opacity="0.14" />
      <Path d="M23 24 Q18 21, 13 18 Q11 16, 13 15 Q15 14, 18 17 Q22 21, 23 24" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Bladpar 2 - höger */}
      <Path d="M25 24 Q30 21, 35 18 Q37 16, 35 15 Q33 14, 30 17 Q26 21, 25 24Z" fill="#6B9E4A" opacity="0.12" />
      <Path d="M25 24 Q30 21, 35 18 Q37 16, 35 15 Q33 14, 30 17 Q26 21, 25 24" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Toppblad */}
      <Path d="M23 12 Q20 10, 18 7 Q17 5, 19 5 Q21 6, 23 10" stroke="#6B9E4A" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M24 12 Q27 10, 29 7 Q30 5, 28 5 Q26 6, 24 10" stroke="#6B9E4A" strokeWidth="1.2" strokeLinecap="round" />
      {/* Liten blomkrans */}
      <Circle cx="23" cy="8" r="2.5" fill="#B090C8" opacity="0.25" />
      <Circle cx="22" cy="7" r="0.7" fill="#C8A8D8" opacity="0.45" />
      <Circle cx="24" cy="7" r="0.6" fill="#C8A8D8" opacity="0.4" />
    </Svg>
  )
}
