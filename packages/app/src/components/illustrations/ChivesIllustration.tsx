import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function ChivesIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel (kryddor) */}
      <Circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      {/* Tuva-bas (den lilla löklika basen) */}
      <Ellipse cx="100" cy="178" rx="22" ry="8" fill="#E8E0D0" opacity="0.25" />
      <Path d="M78 178 Q78 172, 85 170 Q92 168, 100 168 Q108 168, 115 170 Q122 172, 122 178" stroke="#B8A88A" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.4" />
      {/* Stran grupp 1 - vänster bakre */}
      <Path d="M88 170 Q84 130, 76 80 Q72 55, 62 28" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M88 170 Q84 130, 76 80 Q72 55, 62 28" stroke="#5A8A3F" strokeWidth="3" strokeLinecap="round" opacity="0.06" />
      {/* Stran grupp 2 - vänster mitten */}
      <Path d="M92 170 Q90 125, 84 72 Q80 45, 70 18" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M92 170 Q90 125, 84 72 Q80 45, 70 18" stroke="#5A8A3F" strokeWidth="3" strokeLinecap="round" opacity="0.06" />
      {/* Stran grupp 3 - vänster fram */}
      <Path d="M95 170 Q94 128, 90 78 Q88 50, 82 22" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Stran grupp 4 - mitt vänster */}
      <Path d="M97 168 Q96 120, 96 70 Q96 42, 94 15" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Stran grupp 5 - centralt */}
      <Path d="M100 168 Q100 118, 100 68 Q100 38, 100 12" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Stran grupp 6 - mitt höger */}
      <Path d="M103 168 Q104 120, 105 70 Q106 42, 108 16" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Stran grupp 7 - höger fram */}
      <Path d="M106 170 Q107 128, 112 78 Q114 50, 120 24" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Stran grupp 8 - höger mitten */}
      <Path d="M110 170 Q112 125, 118 72 Q122 45, 132 20" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Stran grupp 9 - höger bakre */}
      <Path d="M114 170 Q118 130, 126 80 Q130 55, 140 30" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M114 170 Q118 130, 126 80 Q130 55, 140 30" stroke="#5A8A3F" strokeWidth="3" strokeLinecap="round" opacity="0.06" />
      {/* Blomma vänster - lila klotblomma */}
      <Circle cx="70" cy="18" r="9" fill="#9B7BB5" opacity="0.2" />
      <Circle cx="70" cy="18" r="9" stroke="#8B5FA0" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Blomdetaljer vänster - små kronblad */}
      <Circle cx="66" cy="14" r="2" fill="#B090C8" opacity="0.5" />
      <Circle cx="74" cy="14" r="1.8" fill="#B090C8" opacity="0.45" />
      <Circle cx="70" cy="12" r="1.5" fill="#B090C8" opacity="0.5" />
      <Circle cx="66" cy="18" r="1.5" fill="#B090C8" opacity="0.4" />
      <Circle cx="74" cy="18" r="1.5" fill="#B090C8" opacity="0.4" />
      <Circle cx="68" cy="22" r="1.8" fill="#B090C8" opacity="0.35" />
      <Circle cx="72" cy="22" r="1.5" fill="#B090C8" opacity="0.35" />
      <Circle cx="70" cy="16" r="1.2" fill="#C8A8D8" opacity="0.6" />
      {/* Blomma höger - lila klotblomma */}
      <Circle cx="132" cy="20" r="8" fill="#9B7BB5" opacity="0.18" />
      <Circle cx="132" cy="20" r="8" stroke="#8B5FA0" strokeWidth="1.5" fill="none" opacity="0.45" />
      {/* Blomdetaljer höger */}
      <Circle cx="128" cy="16" r="1.8" fill="#B090C8" opacity="0.45" />
      <Circle cx="136" cy="16" r="1.5" fill="#B090C8" opacity="0.4" />
      <Circle cx="132" cy="14" r="1.5" fill="#B090C8" opacity="0.45" />
      <Circle cx="129" cy="20" r="1.5" fill="#B090C8" opacity="0.35" />
      <Circle cx="135" cy="20" r="1.5" fill="#B090C8" opacity="0.35" />
      <Circle cx="130" cy="24" r="1.5" fill="#B090C8" opacity="0.3" />
      <Circle cx="134" cy="24" r="1.2" fill="#B090C8" opacity="0.3" />
      <Circle cx="132" cy="18" r="1" fill="#C8A8D8" opacity="0.55" />
      {/* Subtila bladlinjer (längsgaende nerver i stran) */}
      <Path d="M100 160 Q100 110, 100 60" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.12" />
      <Path d="M96 160 Q95 110, 94 55" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.1" />
      <Path d="M105 160 Q106 110, 108 55" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.1" />
      {/* Ljusreflexer */}
      <Ellipse cx="90" cy="100" rx="3" ry="20" fill="#A8D48A" opacity="0.1" transform="rotate(-5 90 100)" />
      <Ellipse cx="112" cy="95" rx="3" ry="18" fill="#A8D48A" opacity="0.08" transform="rotate(5 112 95)" />
      {/* Markprickar */}
      <Circle cx="82" cy="184" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="100" cy="186" r="2" fill={colors.earth} opacity="0.15" />
      <Circle cx="118" cy="184" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="76" cy="188" r="1" fill={colors.earth} opacity="0.12" />
      <Circle cx="124" cy="188" r="1" fill={colors.earth} opacity="0.12" />
      <Circle cx="92" cy="190" r="1.2" fill={colors.earth} opacity="0.1" />
      <Circle cx="108" cy="189" r="1" fill={colors.earth} opacity="0.1" />
    </Svg>
  )
}

export function ChivesIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Tuva-bas */}
      <Ellipse cx="24" cy="42" rx="8" ry="3" fill="#E8E0D0" opacity="0.25" />
      {/* Stran vänster */}
      <Path d="M20 42 Q18 28, 14 8" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Stran mitt-vänster */}
      <Path d="M22 42 Q21 26, 18 6" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Stran mitt */}
      <Path d="M24 42 Q24 24, 24 4" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Stran mitt-höger */}
      <Path d="M26 42 Q27 26, 30 6" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Stran höger */}
      <Path d="M28 42 Q30 28, 34 8" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Blomma (lila klot pä ett stran) */}
      <Circle cx="24" cy="4" r="3.5" fill="#9B7BB5" opacity="0.25" />
      <Circle cx="24" cy="4" r="3.5" stroke="#8B5FA0" strokeWidth="1.4" fill="none" opacity="0.5" />
      {/* Blomdetaljer */}
      <Circle cx="22.5" cy="3" r="1" fill="#B090C8" opacity="0.5" />
      <Circle cx="25.5" cy="3" r="0.8" fill="#B090C8" opacity="0.45" />
      <Circle cx="24" cy="2" r="0.8" fill="#C8A8D8" opacity="0.5" />
      <Circle cx="23" cy="5.5" r="0.8" fill="#B090C8" opacity="0.35" />
      <Circle cx="25" cy="5.5" r="0.8" fill="#B090C8" opacity="0.35" />
    </Svg>
  )
}
