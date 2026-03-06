import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function PotatoIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <Circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />
      {/* Soil line */}
      <Path d="M30 95h140" stroke={colors.earth} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      {/* Roots below soil */}
      <Path d="M100 95v15" stroke={colors.earth} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <Path d="M90 105c-5 5-8 12-10 20" stroke={colors.earth} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <Path d="M110 105c5 5 8 12 10 20" stroke={colors.earth} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <Path d="M85 110c-3 8-3 15-2 22" stroke={colors.earth} strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <Path d="M115 110c3 8 3 15 2 22" stroke={colors.earth} strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      {/* Main potato tuber */}
      <Ellipse cx="100" cy="140" rx="30" ry="22" fill="#D4A843" opacity="0.25" />
      <Ellipse cx="100" cy="140" rx="30" ry="22" stroke="#B8922F" strokeWidth="1.8" />
      {/* Eyes on potato */}
      <Circle cx="88" cy="133" r="1.8" fill="#B8922F" opacity="0.4" />
      <Circle cx="108" cy="135" r="1.5" fill="#B8922F" opacity="0.35" />
      <Circle cx="95" cy="148" r="1.3" fill="#B8922F" opacity="0.3" />
      <Circle cx="115" cy="143" r="1.2" fill="#B8922F" opacity="0.3" />
      {/* Highlight on potato */}
      <Path d="M85 132c2-3 8-5 15-4" stroke="#E8C96A" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      {/* Small second tuber */}
      <Ellipse cx="60" cy="152" rx="18" ry="14" fill="#D4A843" opacity="0.2" />
      <Ellipse cx="60" cy="152" rx="18" ry="14" stroke="#B8922F" strokeWidth="1.5" />
      <Circle cx="54" cy="147" r="1.2" fill="#B8922F" opacity="0.3" />
      <Circle cx="66" cy="149" r="1" fill="#B8922F" opacity="0.25" />
      {/* Stem above soil */}
      <Path d="M100 95V55" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <Path d="M98 70V50" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      {/* Left branch */}
      <Path d="M100 72c-4-2-10-3-18-1" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Left leaf */}
      <Path d="M82 71c-8-2-14 2-16 8 6 4 14 2 18-2 2-2 2-4-2-6z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M82 71c-8-2-14 2-16 8 6 4 14 2 18-2 2-2 2-4-2-6z" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M80 73c-3 0-7 2-9 5" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Right branch */}
      <Path d="M100 65c4-2 10-4 18-2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Right leaf */}
      <Path d="M118 63c8-2 14 2 16 8-6 4-14 2-18-2-2-2-2-4 2-6z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M118 63c8-2 14 2 16 8-6 4-14 2-18-2-2-2-2-4 2-6z" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M120 65c3 0 7 2 9 5" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Upper left leaf */}
      <Path d="M98 58c-3-1-8-1-12 2" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <Path d="M86 60c-5 0-8 3-9 6 4 3 10 2 13-1 1.5-1.5 1-3-4-5z" fill="#3D6B4F" opacity="0.1" />
      <Path d="M86 60c-5 0-8 3-9 6 4 3 10 2 13-1 1.5-1.5 1-3-4-5z" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* Upper right leaf */}
      <Path d="M100 55c3-2 8-2 12 0" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <Path d="M112 55c5-1 9 2 10 5-4 3-10 3-13 0-1.5-1.5-1-3 3-5z" fill="#3D6B4F" opacity="0.1" />
      <Path d="M112 55c5-1 9 2 10 5-4 3-10 3-13 0-1.5-1.5-1-3 3-5z" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* Soil particles */}
      <Circle cx="55" cy="170" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="140" cy="165" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="75" cy="175" r="1.2" fill={colors.earth} opacity="0.2" />
      <Circle cx="125" cy="172" r="0.8" fill={colors.earth} opacity="0.15" />
    </Svg>
  )
}

export function PotatoIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Main tuber */}
      <Ellipse cx="24" cy="30" rx="12" ry="9" fill="#D4A843" opacity="0.25" />
      <Ellipse cx="24" cy="30" rx="12" ry="9" stroke="#B8922F" strokeWidth="1.8" />
      {/* Eyes */}
      <Circle cx="19" cy="27" r="1" fill="#B8922F" opacity="0.4" />
      <Circle cx="28" cy="28" r="0.8" fill="#B8922F" opacity="0.35" />
      <Circle cx="22" cy="34" r="0.7" fill="#B8922F" opacity="0.3" />
      {/* Highlight */}
      <Path d="M18 27c1-1.5 4-2 6-1.5" stroke="#E8C96A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      {/* Stem */}
      <Path d="M24 21V12" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Leaves */}
      <Path d="M24 15c-3-1-7 0-8 3 3 2 7 1 8-1z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M24 15c-3-1-7 0-8 3 3 2 7 1 8-1z" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M24 12c3-1 7 0 8 3-3 2-7 1-8-1z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M24 12c3-1 7 0 8 3-3 2-7 1-8-1z" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  )
}
