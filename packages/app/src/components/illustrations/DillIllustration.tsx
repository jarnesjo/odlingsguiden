import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function DillIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <Circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      {/* Huvudstam */}
      <Path d="M100 185 Q100 160, 100 130 Q100 100, 98 70 Q97 55, 96 42" stroke="#4A7A3F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Sidostam vänster */}
      <Path d="M98 90 Q88 70, 72 55" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      {/* Sidostam höger */}
      <Path d="M99 80 Q112 62, 130 50" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      {/* Dillkrona - huvudflock (umbrella flower head) */}
      {/* Flock-strålar från toppen */}
      <Path d="M96 42 Q86 30, 72 22" stroke="#6B8E4E" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M96 42 Q90 28, 80 18" stroke="#6B8E4E" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M96 42 Q94 26, 92 14" stroke="#6B8E4E" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M96 42 Q98 26, 102 14" stroke="#6B8E4E" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M96 42 Q102 28, 112 18" stroke="#6B8E4E" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M96 42 Q106 30, 120 22" stroke="#6B8E4E" strokeWidth="1.4" strokeLinecap="round" />
      {/* Blombollar på varje stråle */}
      <Circle cx="72" cy="22" r="3.5" fill="#C4B64A" opacity="0.6" />
      <Circle cx="80" cy="18" r="3" fill="#C4B64A" opacity="0.55" />
      <Circle cx="92" cy="14" r="3.5" fill="#C4B64A" opacity="0.6" />
      <Circle cx="102" cy="14" r="3.5" fill="#C4B64A" opacity="0.6" />
      <Circle cx="112" cy="18" r="3" fill="#C4B64A" opacity="0.55" />
      <Circle cx="120" cy="22" r="3.5" fill="#C4B64A" opacity="0.6" />
      {/* Blomdetaljer - små prickar */}
      <Circle cx="72" cy="21" r="1.2" fill="#D4C654" opacity="0.8" />
      <Circle cx="92" cy="13" r="1.2" fill="#D4C654" opacity="0.8" />
      <Circle cx="102" cy="13" r="1.2" fill="#D4C654" opacity="0.8" />
      <Circle cx="120" cy="21" r="1.2" fill="#D4C654" opacity="0.8" />
      {/* Vänster sidoflock */}
      <Path d="M72 55 Q62 44, 50 38" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M72 55 Q66 42, 58 34" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M72 55 Q70 42, 68 32" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M72 55 Q76 42, 82 34" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Circle cx="50" cy="38" r="2.5" fill="#C4B64A" opacity="0.5" />
      <Circle cx="58" cy="34" r="2.5" fill="#C4B64A" opacity="0.5" />
      <Circle cx="68" cy="32" r="2.5" fill="#C4B64A" opacity="0.5" />
      <Circle cx="82" cy="34" r="2.5" fill="#C4B64A" opacity="0.5" />
      {/* Höger sidoflock */}
      <Path d="M130 50 Q122 38, 118 30" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M130 50 Q128 38, 128 28" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M130 50 Q134 38, 138 28" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M130 50 Q138 40, 146 34" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Circle cx="118" cy="30" r="2.5" fill="#C4B64A" opacity="0.5" />
      <Circle cx="128" cy="28" r="2.5" fill="#C4B64A" opacity="0.5" />
      <Circle cx="138" cy="28" r="2.5" fill="#C4B64A" opacity="0.5" />
      <Circle cx="146" cy="34" r="2.5" fill="#C4B64A" opacity="0.5" />
      {/* Fjäderlika blad - vänster sida */}
      {/* Blad vid stam, nedre */}
      <Path d="M98 130 Q84 124, 68 128" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M98 125 Q82 118, 62 120" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M98 120 Q80 112, 58 112" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      {/* Bladflikar - trådlika */}
      <Path d="M78 126 Q72 118, 64 114" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.35" />
      <Path d="M74 122 Q68 114, 56 110" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <Path d="M70 118 Q62 112, 52 108" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
      {/* Blad vid stam, övre */}
      <Path d="M98 105 Q86 98, 70 100" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M98 100 Q84 92, 66 92" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M97 95 Q82 86, 62 84" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      {/* Bladflikar övre vänster */}
      <Path d="M82 96 Q74 88, 66 86" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <Path d="M76 92 Q68 84, 58 80" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
      {/* Fjäderlika blad - höger sida */}
      {/* Blad vid stam, nedre */}
      <Path d="M102 130 Q116 124, 132 128" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M102 125 Q118 118, 138 120" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M102 120 Q120 112, 142 112" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      {/* Bladflikar höger */}
      <Path d="M122 126 Q128 118, 136 114" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.35" />
      <Path d="M126 122 Q132 114, 144 110" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <Path d="M130 118 Q138 112, 148 108" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
      {/* Blad vid stam, övre */}
      <Path d="M100 105 Q114 98, 130 100" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M100 100 Q116 92, 134 92" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M100 95 Q118 86, 138 84" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      {/* Bladflikar övre höger */}
      <Path d="M118 96 Q126 88, 134 86" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <Path d="M124 92 Q132 84, 142 80" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
      {/* Extra fjäderflikar längs sidostam vänster */}
      <Path d="M90 78 Q80 74, 68 76" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.35" />
      <Path d="M86 72 Q76 66, 62 66" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <Path d="M82 66 Q72 60, 58 58" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
      {/* Extra fjäderflikar längs sidostam höger */}
      <Path d="M106 74 Q118 68, 132 70" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.35" />
      <Path d="M112 68 Q124 60, 140 58" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <Path d="M118 62 Q130 54, 146 52" stroke="#6B8E4E" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
      {/* Ljusreflexer */}
      <Ellipse cx="80" cy="110" rx="4" ry="8" fill={colors.accentLight} opacity="0.1" transform="rotate(-15 80 110)" />
      <Ellipse cx="120" cy="110" rx="4" ry="8" fill={colors.accentLight} opacity="0.08" transform="rotate(15 120 110)" />
      {/* Markprickar */}
      <Circle cx="88" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="100" cy="188" r="2" fill={colors.earth} opacity="0.15" />
      <Circle cx="112" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="82" cy="190" r="1" fill={colors.earth} opacity="0.12" />
      <Circle cx="118" cy="190" r="1" fill={colors.earth} opacity="0.12" />
      <Circle cx="95" cy="192" r="1.2" fill={colors.earth} opacity="0.1" />
      <Circle cx="106" cy="191" r="1" fill={colors.earth} opacity="0.1" />
    </Svg>
  )
}

export function DillIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stam */}
      <Path d="M24 44 Q24 34, 23 20 Q23 14, 22 10" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Dillkrona - strålar */}
      <Path d="M22 10 Q18 6, 14 4" stroke="#6B8E4E" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M22 10 Q20 4, 19 2" stroke="#6B8E4E" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M22 10 Q22 4, 24 2" stroke="#6B8E4E" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M22 10 Q26 4, 29 2" stroke="#6B8E4E" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M22 10 Q28 6, 34 4" stroke="#6B8E4E" strokeWidth="1.4" strokeLinecap="round" />
      {/* Blombollar */}
      <Circle cx="14" cy="4" r="2" fill="#C4B64A" opacity="0.6" />
      <Circle cx="19" cy="2" r="1.8" fill="#C4B64A" opacity="0.6" />
      <Circle cx="24" cy="2" r="2" fill="#C4B64A" opacity="0.6" />
      <Circle cx="29" cy="2" r="1.8" fill="#C4B64A" opacity="0.6" />
      <Circle cx="34" cy="4" r="2" fill="#C4B64A" opacity="0.6" />
      {/* Fjäderlika blad vänster */}
      <Path d="M23 30 Q16 28, 10 30" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M23 26 Q15 22, 8 22" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M23 22 Q16 18, 10 16" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      {/* Fjäderlika blad höger */}
      <Path d="M25 30 Q32 28, 38 30" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M24 26 Q32 22, 40 22" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M24 22 Q32 18, 38 16" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      {/* Bladflikar */}
      <Path d="M14 26 Q10 22, 6 20" stroke="#6B8E4E" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
      <Path d="M34 26 Q38 22, 42 20" stroke="#6B8E4E" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
    </Svg>
  )
}
