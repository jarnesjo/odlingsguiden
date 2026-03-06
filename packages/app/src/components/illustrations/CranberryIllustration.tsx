import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function CranberryIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <Circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Ground/bog line */}
      <Path d="M20 148 Q50 146, 80 147 Q110 148, 140 146 Q170 145, 180 147" stroke="#5C4033" strokeWidth="1" strokeLinecap="round" opacity="0.15" />

      {/* Main trailing vine - cranberry creeps along ground */}
      <Path d="M25 130 Q50 128, 80 126 Q110 124, 140 126 Q165 128, 180 130" stroke="#6B4033" strokeWidth="2" strokeLinecap="round" />

      {/* Upright fruiting stems */}
      <Path d="M55 127 Q54 114, 52 100 Q51 90, 50 78" stroke="#6B4033" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M100 125 Q99 112, 98 98 Q97 88, 96 76" stroke="#6B4033" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M145 127 Q144 114, 142 100 Q141 90, 140 78" stroke="#6B4033" strokeWidth="1.5" strokeLinecap="round" />

      {/* Small evergreen leaves - alternating on stems */}
      {/* Left stem leaves */}
      <Path d="M52 112 Q45 108, 38 108 Q43 106, 50 108" stroke="#2D5A3F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <Path d="M53 104 Q58 100, 66 100 Q60 98, 53 100" stroke="#2D5A3F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <Path d="M52 94 Q44 90, 38 90 Q44 88, 50 90" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />
      <Path d="M51 86 Q56 82, 62 82 Q58 80, 51 82" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Center stem leaves */}
      <Path d="M99 108 Q92 104, 86 104 Q91 102, 98 104" stroke="#2D5A3F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <Path d="M98 100 Q104 96, 112 96 Q106 94, 98 96" stroke="#2D5A3F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <Path d="M97 92 Q90 88, 84 88 Q90 86, 96 88" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />
      <Path d="M97 84 Q102 80, 108 80 Q104 78, 97 80" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Right stem leaves */}
      <Path d="M142 110 Q136 106, 130 106 Q135 104, 141 106" stroke="#2D5A3F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <Path d="M142 102 Q148 98, 154 98 Q150 96, 142 98" stroke="#2D5A3F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <Path d="M141 92 Q134 88, 128 88 Q134 86, 140 88" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Berry stems (short, from fruiting stems) */}
      <Path d="M50 78 Q46 74, 42 72" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />
      <Path d="M50 78 Q54 74, 58 72" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />

      <Path d="M96 76 Q92 72, 86 70" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />
      <Path d="M96 76 Q100 72, 106 70" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />
      <Path d="M96 76 Q96 70, 96 64" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />

      <Path d="M140 78 Q136 74, 132 72" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />
      <Path d="M140 78 Q144 74, 148 72" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />

      {/* --- Cranberries - deep red, round --- */}

      {/* Left cluster */}
      <Circle cx="40" cy="70" r="9" fill="#B01020" opacity="0.3" />
      <Circle cx="40" cy="70" r="9" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <Ellipse cx="36" cy="66" rx="3" ry="3.5" fill="#D85050" opacity="0.25" />
      {/* Calyx */}
      <Path d="M37 62 L35 60 M40 61 L40 59 M43 62 L45 60" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      <Circle cx="60" cy="68" r="8.5" fill="#B01020" opacity="0.3" />
      <Circle cx="60" cy="68" r="8.5" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <Ellipse cx="56" cy="64" rx="2.5" ry="3" fill="#D85050" opacity="0.25" />

      {/* Center cluster */}
      <Circle cx="84" cy="66" r="9" fill="#B01020" opacity="0.3" />
      <Circle cx="84" cy="66" r="9" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <Ellipse cx="80" cy="62" rx="3" ry="3.5" fill="#D85050" opacity="0.25" />
      {/* Calyx */}
      <Path d="M81 58 L79 56 M84 57 L84 55 M87 58 L89 56" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      <Circle cx="108" cy="66" r="8.5" fill="#B01020" opacity="0.3" />
      <Circle cx="108" cy="66" r="8.5" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <Ellipse cx="104" cy="62" rx="2.5" ry="3" fill="#D85050" opacity="0.25" />

      <Circle cx="96" cy="58" r="8" fill="#C01828" opacity="0.28" />
      <Circle cx="96" cy="58" r="8" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <Ellipse cx="92" cy="54" rx="2.5" ry="3" fill="#D85050" opacity="0.2" />

      {/* Right cluster */}
      <Circle cx="130" cy="68" r="8.5" fill="#B01020" opacity="0.3" />
      <Circle cx="130" cy="68" r="8.5" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <Ellipse cx="126" cy="64" rx="2.5" ry="3" fill="#D85050" opacity="0.25" />
      {/* Calyx */}
      <Path d="M127 60 L125 58 M130 59 L130 57 M133 60 L135 58" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      <Circle cx="150" cy="68" r="8" fill="#B01020" opacity="0.28" />
      <Circle cx="150" cy="68" r="8" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <Ellipse cx="146" cy="64" rx="2.5" ry="3" fill="#D85050" opacity="0.22" />

      {/* Ground/bog texture dots */}
      <Circle cx="35" cy="142" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="60" cy="144" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="85" cy="142" r="1.2" fill={colors.earth} opacity="0.18" />
      <Circle cx="110" cy="143" r="1" fill={colors.earth} opacity="0.12" />
      <Circle cx="140" cy="142" r="1.3" fill={colors.earth} opacity="0.16" />
      <Circle cx="165" cy="143" r="1" fill={colors.earth} opacity="0.14" />
    </Svg>
  )
}

export function CranberryIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Trailing vine */}
      <Path d="M6 30 Q16 28, 24 28 Q32 28, 42 30" stroke="#6B4033" strokeWidth="1.5" strokeLinecap="round" />

      {/* Short upright stem */}
      <Path d="M24 28 Q23 20, 22 14" stroke="#6B4033" strokeWidth="1.3" strokeLinecap="round" />

      {/* Tiny leaves */}
      <Path d="M23 22 Q18 20, 14 20 Q18 18, 22 20" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      <Path d="M23 18 Q28 16, 32 16 Q28 14, 23 16" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Berry stems */}
      <Path d="M22 14 Q18 10, 14 10" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <Path d="M22 14 Q26 10, 32 10" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />

      {/* Berry left */}
      <Circle cx="12" cy="10" r="6" fill="#B01020" opacity="0.3" />
      <Circle cx="12" cy="10" r="6" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <Ellipse cx="10" cy="8" rx="2" ry="2.5" fill="#D85050" opacity="0.25" />

      {/* Berry right */}
      <Circle cx="34" cy="10" r="6" fill="#B01020" opacity="0.3" />
      <Circle cx="34" cy="10" r="6" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <Ellipse cx="32" cy="8" rx="2" ry="2.5" fill="#D85050" opacity="0.25" />

      {/* Calyx hints */}
      <Path d="M10 4 L9 2 M12 4 L12 2 M14 4 L15 2" stroke="#5C4033" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <Path d="M32 4 L31 2 M34 4 L34 2 M36 4 L37 2" stroke="#5C4033" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
    </Svg>
  )
}
