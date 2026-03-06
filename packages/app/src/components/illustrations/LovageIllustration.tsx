import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function LovageIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <Circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      {/* Kraftig huvudstam - libbsticka kan bli 2m! */}
      <Path d="M100 185 Q100 155, 100 120 Q100 85, 99 55 Q98 40, 97 28" stroke="#3D6B2F" strokeWidth="2.8" strokeLinecap="round" />
      {/* Sidostam vänster nedre */}
      <Path d="M100 130 Q80 110, 55 95" stroke="#3D6B2F" strokeWidth="2.0" strokeLinecap="round" />
      {/* Sidostam höger nedre */}
      <Path d="M100 120 Q120 100, 145 85" stroke="#3D6B2F" strokeWidth="2.0" strokeLinecap="round" />
      {/* Sidostam vänster övre */}
      <Path d="M99 80 Q85 65, 68 52" stroke="#3D6B2F" strokeWidth="1.6" strokeLinecap="round" />
      {/* Sidostam höger övre */}
      <Path d="M99 70 Q115 55, 132 42" stroke="#3D6B2F" strokeWidth="1.6" strokeLinecap="round" />
      {/* Flock-blomställning topp - gulgrön */}
      <Path d="M97 28 Q88 18, 78 14" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M97 28 Q92 16, 88 10" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M97 28 Q96 14, 96 8" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M97 28 Q100 14, 104 8" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M97 28 Q104 16, 110 10" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M97 28 Q108 18, 118 14" stroke="#6B8E4E" strokeWidth="1.2" strokeLinecap="round" />
      {/* Blombollar - gulgrön */}
      <Circle cx="78" cy="14" r="3" fill="#C4C84A" opacity="0.55" />
      <Circle cx="88" cy="10" r="2.5" fill="#C4C84A" opacity="0.5" />
      <Circle cx="96" cy="8" r="3" fill="#C4C84A" opacity="0.55" />
      <Circle cx="104" cy="8" r="3" fill="#C4C84A" opacity="0.55" />
      <Circle cx="110" cy="10" r="2.5" fill="#C4C84A" opacity="0.5" />
      <Circle cx="118" cy="14" r="3" fill="#C4C84A" opacity="0.55" />
      {/* Stora selleriliknande blad - vänster nedre (tredelade, tandade) */}
      <Path d="M55 95 Q42 88, 32 92 Q26 86, 30 78 Q34 72, 44 74 Q52 78, 54 90" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M55 95 Q42 88, 32 92 Q26 86, 30 78 Q34 72, 44 74 Q52 78, 54 90Z" fill="#4A8A3F" opacity="0.12" />
      <Path d="M55 95 Q48 82, 38 78 Q32 72, 28 64 Q32 58, 42 62 Q50 68, 54 84" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <Path d="M55 95 Q48 82, 38 78 Q32 72, 28 64 Q32 58, 42 62 Q50 68, 54 84Z" fill="#4A8A3F" opacity="0.10" />
      {/* Bladnerver vänster */}
      <Path d="M52 88 Q40 82, 32 84" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <Path d="M52 80 Q42 74, 34 68" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.15" />
      {/* Stora blad - höger nedre */}
      <Path d="M145 85 Q158 78, 168 82 Q174 76, 170 68 Q166 62, 156 64 Q148 68, 146 80" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M145 85 Q158 78, 168 82 Q174 76, 170 68 Q166 62, 156 64 Q148 68, 146 80Z" fill="#4A8A3F" opacity="0.10" />
      <Path d="M145 85 Q152 72, 162 68 Q168 62, 172 54 Q168 48, 158 52 Q150 58, 146 74" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <Path d="M145 85 Q152 72, 162 68 Q168 62, 172 54 Q168 48, 158 52 Q150 58, 146 74Z" fill="#4A8A3F" opacity="0.08" />
      {/* Bladnerver höger */}
      <Path d="M148 78 Q160 72, 166 74" stroke="#3D7A2F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      {/* Mellersta blad vänster */}
      <Path d="M68 52 Q56 44, 46 48 Q40 42, 44 36 Q50 34, 60 40 Q66 46, 67 50" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <Path d="M68 52 Q56 44, 46 48 Q40 42, 44 36 Q50 34, 60 40 Q66 46, 67 50Z" fill="#4A8A3F" opacity="0.12" />
      {/* Mellersta blad höger */}
      <Path d="M132 42 Q144 34, 154 38 Q160 32, 156 26 Q150 24, 140 30 Q134 36, 133 40" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <Path d="M132 42 Q144 34, 154 38 Q160 32, 156 26 Q150 24, 140 30 Q134 36, 133 40Z" fill="#4A8A3F" opacity="0.10" />
      {/* Nedre blad vid basen */}
      <Path d="M100 160 Q82 152, 64 156 Q56 150, 60 142 Q66 138, 78 142 Q90 148, 98 156" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M100 160 Q82 152, 64 156 Q56 150, 60 142 Q66 138, 78 142 Q90 148, 98 156Z" fill="#4A8A3F" opacity="0.10" />
      <Path d="M100 160 Q118 152, 136 156 Q144 150, 140 142 Q134 138, 122 142 Q110 148, 102 156" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M100 160 Q118 152, 136 156 Q144 150, 140 142 Q134 138, 122 142 Q110 148, 102 156Z" fill="#4A8A3F" opacity="0.08" />
      {/* Ljusreflexer */}
      <Ellipse cx="50" cy="80" rx="3" ry="5" fill={colors.accentLight} opacity="0.07" transform="rotate(-10 50 80)" />
      <Ellipse cx="150" cy="72" rx="3" ry="5" fill={colors.accentLight} opacity="0.06" transform="rotate(10 150 72)" />
      {/* Markprickar */}
      <Circle cx="88" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="100" cy="188" r="2" fill={colors.earth} opacity="0.15" />
      <Circle cx="112" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="82" cy="190" r="1" fill={colors.earth} opacity="0.12" />
      <Circle cx="118" cy="190" r="1" fill={colors.earth} opacity="0.12" />
    </Svg>
  )
}

export function LovageIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Kraftig stam */}
      <Path d="M24 44 Q24 32, 24 20 Q24 14, 23.5 10" stroke="#3D6B2F" strokeWidth="2.0" strokeLinecap="round" />
      {/* Sidostam vänster */}
      <Path d="M24 30 Q16 22, 8 18" stroke="#3D6B2F" strokeWidth="1.4" strokeLinecap="round" />
      {/* Sidostam höger */}
      <Path d="M24 26 Q32 18, 40 14" stroke="#3D6B2F" strokeWidth="1.4" strokeLinecap="round" />
      {/* Flock topp */}
      <Path d="M23.5 10 Q19 6, 14 4" stroke="#6B8E4E" strokeWidth="1.0" strokeLinecap="round" />
      <Path d="M23.5 10 Q22 4, 21 2" stroke="#6B8E4E" strokeWidth="1.0" strokeLinecap="round" />
      <Path d="M23.5 10 Q24 4, 26 2" stroke="#6B8E4E" strokeWidth="1.0" strokeLinecap="round" />
      <Path d="M23.5 10 Q27 6, 34 4" stroke="#6B8E4E" strokeWidth="1.0" strokeLinecap="round" />
      {/* Blombollar */}
      <Circle cx="14" cy="4" r="1.8" fill="#C4C84A" opacity="0.6" />
      <Circle cx="21" cy="2" r="1.6" fill="#C4C84A" opacity="0.6" />
      <Circle cx="26" cy="2" r="1.6" fill="#C4C84A" opacity="0.6" />
      <Circle cx="34" cy="4" r="1.8" fill="#C4C84A" opacity="0.6" />
      {/* Stora blad vänster */}
      <Path d="M8 18 Q4 14, 3 10 Q5 8, 9 10 Q12 14, 9 17" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <Path d="M8 18 Q4 14, 3 10 Q5 8, 9 10 Q12 14, 9 17Z" fill="#4A8A3F" opacity="0.12" />
      {/* Stora blad höger */}
      <Path d="M40 14 Q44 10, 45 6 Q43 4, 39 6 Q36 10, 39 13" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <Path d="M40 14 Q44 10, 45 6 Q43 4, 39 6 Q36 10, 39 13Z" fill="#4A8A3F" opacity="0.10" />
      {/* Nedre blad */}
      <Path d="M23 38 Q14 34, 7 36 Q5 32, 8 30 Q12 29, 21 34" stroke="#3D7A2F" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <Path d="M23 38 Q14 34, 7 36 Q5 32, 8 30 Q12 29, 21 34Z" fill="#4A8A3F" opacity="0.10" />
      <Path d="M25 38 Q34 34, 41 36 Q43 32, 40 30 Q36 29, 27 34" stroke="#3D7A2F" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <Path d="M25 38 Q34 34, 41 36 Q43 32, 40 30 Q36 29, 27 34Z" fill="#4A8A3F" opacity="0.08" />
    </Svg>
  )
}
