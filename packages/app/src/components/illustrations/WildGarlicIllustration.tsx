import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function WildGarlicIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <Circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      {/* Stjälkar - ramslök har breda blad direkt från marken */}
      <Path d="M90 185 Q90 140, 88 100 Q87 70, 86 45" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M100 185 Q100 140, 100 100 Q100 70, 100 40" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <Path d="M110 185 Q110 140, 112 100 Q113 70, 114 45" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      {/* Blomställning - sfärisk, vita stjärnformade blommor */}
      <Circle cx="86" cy="38" r="10" fill="#F0EDE4" opacity="0.2" />
      {/* Individuella vita blommor i klustret */}
      <Circle cx="82" cy="34" r="2" fill="white" opacity="0.6" />
      <Circle cx="86" cy="30" r="2" fill="white" opacity="0.65" />
      <Circle cx="90" cy="33" r="2" fill="white" opacity="0.6" />
      <Circle cx="84" cy="38" r="2" fill="white" opacity="0.55" />
      <Circle cx="88" cy="36" r="2" fill="white" opacity="0.6" />
      <Circle cx="80" cy="38" r="1.8" fill="white" opacity="0.5" />
      <Circle cx="92" cy="38" r="1.8" fill="white" opacity="0.5" />
      <Circle cx="86" cy="42" r="1.8" fill="white" opacity="0.5" />
      {/* Blomdetaljer - gula ståndare */}
      <Circle cx="82" cy="34" r="0.8" fill="#D4C654" opacity="0.7" />
      <Circle cx="86" cy="30" r="0.8" fill="#D4C654" opacity="0.7" />
      <Circle cx="90" cy="33" r="0.8" fill="#D4C654" opacity="0.7" />
      <Circle cx="88" cy="36" r="0.8" fill="#D4C654" opacity="0.7" />
      {/* Blomställning mitt */}
      <Circle cx="100" cy="33" r="10" fill="#F0EDE4" opacity="0.2" />
      <Circle cx="96" cy="30" r="2" fill="white" opacity="0.65" />
      <Circle cx="100" cy="27" r="2" fill="white" opacity="0.7" />
      <Circle cx="104" cy="30" r="2" fill="white" opacity="0.65" />
      <Circle cx="98" cy="34" r="2" fill="white" opacity="0.6" />
      <Circle cx="102" cy="33" r="2" fill="white" opacity="0.6" />
      <Circle cx="100" cy="37" r="1.8" fill="white" opacity="0.5" />
      <Circle cx="96" cy="36" r="1.8" fill="white" opacity="0.5" />
      <Circle cx="104" cy="36" r="1.8" fill="white" opacity="0.5" />
      <Circle cx="100" cy="27" r="0.8" fill="#D4C654" opacity="0.7" />
      <Circle cx="96" cy="30" r="0.8" fill="#D4C654" opacity="0.7" />
      <Circle cx="104" cy="30" r="0.8" fill="#D4C654" opacity="0.7" />
      {/* Blomställning höger */}
      <Circle cx="114" cy="38" r="9" fill="#F0EDE4" opacity="0.15" />
      <Circle cx="110" cy="35" r="1.8" fill="white" opacity="0.55" />
      <Circle cx="114" cy="32" r="2" fill="white" opacity="0.6" />
      <Circle cx="118" cy="35" r="1.8" fill="white" opacity="0.55" />
      <Circle cx="112" cy="39" r="1.8" fill="white" opacity="0.5" />
      <Circle cx="116" cy="38" r="1.8" fill="white" opacity="0.5" />
      <Circle cx="114" cy="42" r="1.5" fill="white" opacity="0.45" />
      <Circle cx="114" cy="32" r="0.8" fill="#D4C654" opacity="0.6" />
      {/* Breda, lansettlika blad - ramslöks karaktäristiska breda blad */}
      {/* Vänster blad */}
      <Path d="M90 180 Q78 150, 62 120 Q50 100, 40 80 Q36 70, 38 62 Q42 58, 48 62 Q56 72, 66 90 Q78 114, 88 160" fill="#4A8A3F" opacity="0.14" />
      <Path d="M90 180 Q78 150, 62 120 Q50 100, 40 80 Q36 70, 38 62" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M88 160 Q78 114, 66 90 Q56 72, 48 62" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Bladnerv vänster */}
      <Path d="M89 170 Q72 130, 55 95 Q44 75, 42 65" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      {/* Mittblad */}
      <Path d="M100 180 Q98 145, 94 110 Q90 85, 86 65 Q84 55, 86 48 Q90 46, 94 50 Q98 60, 102 80 Q106 105, 104 150" fill="#4A8A3F" opacity="0.12" />
      <Path d="M100 180 Q98 145, 94 110 Q90 85, 86 65 Q84 55, 86 48" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <Path d="M104 150 Q106 105, 102 80 Q98 60, 94 50" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      {/* Bladnerv mitt */}
      <Path d="M100 170 Q96 125, 90 80 Q87 60, 88 52" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.18" />
      {/* Höger blad */}
      <Path d="M110 180 Q122 150, 138 120 Q150 100, 160 80 Q164 70, 162 62 Q158 58, 152 62 Q144 72, 134 90 Q122 114, 112 160" fill="#4A8A3F" opacity="0.10" />
      <Path d="M110 180 Q122 150, 138 120 Q150 100, 160 80 Q164 70, 162 62" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M112 160 Q122 114, 134 90 Q144 72, 152 62" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Bladnerv höger */}
      <Path d="M111 170 Q128 130, 145 95 Q156 75, 158 65" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      {/* Ljusreflexer */}
      <Ellipse cx="70" cy="110" rx="4" ry="10" fill={colors.accentLight} opacity="0.06" transform="rotate(-20 70 110)" />
      <Ellipse cx="130" cy="110" rx="4" ry="10" fill={colors.accentLight} opacity="0.05" transform="rotate(20 130 110)" />
      {/* Markprickar */}
      <Circle cx="88" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="100" cy="188" r="2" fill={colors.earth} opacity="0.15" />
      <Circle cx="112" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="82" cy="190" r="1" fill={colors.earth} opacity="0.12" />
      <Circle cx="118" cy="190" r="1" fill={colors.earth} opacity="0.12" />
    </Svg>
  )
}

export function WildGarlicIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stjälkar */}
      <Path d="M22 44 Q22 30, 21 16 Q21 10, 21 6" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M26 44 Q26 30, 27 16 Q27 10, 27 6" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" />
      {/* Blomkluster */}
      <Circle cx="21" cy="4" r="3" fill="#F0EDE4" opacity="0.2" />
      <Circle cx="20" cy="3" r="1.2" fill="white" opacity="0.7" />
      <Circle cx="22" cy="2" r="1.2" fill="white" opacity="0.7" />
      <Circle cx="21" cy="5" r="1" fill="white" opacity="0.6" />
      <Circle cx="27" cy="4" r="3" fill="#F0EDE4" opacity="0.2" />
      <Circle cx="26" cy="3" r="1.2" fill="white" opacity="0.65" />
      <Circle cx="28" cy="2.5" r="1.2" fill="white" opacity="0.65" />
      <Circle cx="27" cy="5" r="1" fill="white" opacity="0.55" />
      {/* Gula ståndare */}
      <Circle cx="21" cy="3" r="0.5" fill="#D4C654" opacity="0.7" />
      <Circle cx="27" cy="3" r="0.5" fill="#D4C654" opacity="0.7" />
      {/* Breda blad vänster */}
      <Path d="M22 42 Q14 30, 8 18 Q6 12, 8 10 Q10 9, 12 12 Q16 20, 21 36" fill="#4A8A3F" opacity="0.14" />
      <Path d="M22 42 Q14 30, 8 18 Q6 12, 8 10" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <Path d="M21 36 Q16 20, 12 12" stroke="#3D7A2F" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Breda blad höger */}
      <Path d="M26 42 Q34 30, 40 18 Q42 12, 40 10 Q38 9, 36 12 Q32 20, 27 36" fill="#4A8A3F" opacity="0.10" />
      <Path d="M26 42 Q34 30, 40 18 Q42 12, 40 10" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <Path d="M27 36 Q32 20, 36 12" stroke="#3D7A2F" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </Svg>
  )
}
