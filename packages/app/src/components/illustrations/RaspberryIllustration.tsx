import { Circle, Ellipse, Path, Svg } from 'react-native-svg'
interface Props {
  size?: number
}

export function RaspberryIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <Circle cx="100" cy="100" r="90" fill="#E8D1DF" opacity="0.15" />
      <Path d="M55 30 C65 40, 80 55, 90 75 C95 85, 100 100, 100 105" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />
      <Path d="M100 105 C100 115, 98 130, 95 140" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M68 42 L65 38" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <Path d="M78 55 L75 51" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <Path d="M88 72 L85 68" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <Path d="M96 92 L93 89" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <Path d="M72 48 C62 42, 48 38, 40 40 C44 34, 54 30, 64 36" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M72 48 C66 40, 52 32, 42 28 C48 26, 58 28, 66 36" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <Path d="M40 40 C44 34, 54 30, 64 36 C58 28, 48 26, 42 28" fill="#3D6B4F" opacity="0.08" />
      <Path d="M70 47 C60 40, 50 36, 42 34" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M95 82 C108 76, 122 74, 132 78 C126 72, 116 68, 104 74" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M95 82 C110 78, 126 80, 138 86 C130 78, 118 72, 106 76" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <Path d="M132 78 C126 72, 116 68, 104 74 C110 78, 126 80, 138 86 C130 78, 126 74, 132 78" fill="#3D6B4F" opacity="0.08" />
      <Path d="M98 82 C110 78, 122 76, 134 80" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M98 118 C108 122, 118 128, 120 136 C116 128, 108 120, 100 120" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <Path d="M88 100 C84 96, 80 98, 82 102" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M112 100 C116 96, 120 98, 118 102" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M96 98 C94 94, 96 90, 100 92" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <Path d="M104 98 C106 94, 104 90, 100 92" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      {/* Druper */}
      <Circle cx="92" cy="110" r="7" fill="#C4506A" opacity="0.18" />
      <Circle cx="92" cy="110" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="100" cy="107" r="7" fill="#C4506A" opacity="0.18" />
      <Circle cx="100" cy="107" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="108" cy="110" r="7" fill="#C4506A" opacity="0.18" />
      <Circle cx="108" cy="110" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="87" cy="122" r="7.5" fill="#C4506A" opacity="0.18" />
      <Circle cx="87" cy="122" r="7.5" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="96" cy="120" r="7" fill="#C4506A" opacity="0.18" />
      <Circle cx="96" cy="120" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="104" cy="120" r="7" fill="#C4506A" opacity="0.18" />
      <Circle cx="104" cy="120" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="113" cy="122" r="7.5" fill="#C4506A" opacity="0.18" />
      <Circle cx="113" cy="122" r="7.5" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="91" cy="133" r="7" fill="#C4506A" opacity="0.18" />
      <Circle cx="91" cy="133" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="100" cy="131" r="7" fill="#C4506A" opacity="0.18" />
      <Circle cx="100" cy="131" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="109" cy="133" r="7" fill="#C4506A" opacity="0.18" />
      <Circle cx="109" cy="133" r="7" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="95" cy="142" r="6" fill="#C4506A" opacity="0.18" />
      <Circle cx="95" cy="142" r="6" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="105" cy="142" r="6" fill="#C4506A" opacity="0.18" />
      <Circle cx="105" cy="142" r="6" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="89" cy="108" r="2.5" fill="#E8A0B8" opacity="0.3" />
      <Circle cx="97" cy="105" r="2" fill="#E8A0B8" opacity="0.25" />
      <Circle cx="84" cy="120" r="2" fill="#E8A0B8" opacity="0.25" />
      <Circle cx="106" cy="108" r="1" fill="#9B3A5A" opacity="0.15" />
      <Circle cx="100" cy="119" r="1" fill="#9B3A5A" opacity="0.15" />
      <Circle cx="92" cy="131" r="1" fill="#9B3A5A" opacity="0.15" />
      <Circle cx="108" cy="131" r="1" fill="#9B3A5A" opacity="0.12" />
      <Ellipse cx="100" cy="162" rx="28" ry="4" fill="#8B7355" opacity="0.08" />
    </Svg>
  )
}

export function RaspberryIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Path d="M14 6 C16 10, 20 16, 24 20" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M17 10 C13 8, 9 8, 8 10" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <Path d="M22 16 C26 14, 30 13, 33 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <Path d="M20 22 C18 20, 20 18, 22 20" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M28 22 C30 20, 28 18, 26 20" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" />
      <Circle cx="21" cy="27" r="4" fill="#C4506A" opacity="0.18" />
      <Circle cx="21" cy="27" r="4" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="27" cy="27" r="4" fill="#C4506A" opacity="0.18" />
      <Circle cx="27" cy="27" r="4" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="18" cy="34" r="4" fill="#C4506A" opacity="0.18" />
      <Circle cx="18" cy="34" r="4" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="24" cy="33" r="3.5" fill="#C4506A" opacity="0.18" />
      <Circle cx="24" cy="33" r="3.5" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="30" cy="34" r="4" fill="#C4506A" opacity="0.18" />
      <Circle cx="30" cy="34" r="4" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="21" cy="40" r="3.5" fill="#C4506A" opacity="0.18" />
      <Circle cx="21" cy="40" r="3.5" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="27" cy="40" r="3.5" fill="#C4506A" opacity="0.18" />
      <Circle cx="27" cy="40" r="3.5" stroke="#9B3A5A" strokeWidth="1.8" fill="none" />
      <Circle cx="19" cy="26" r="1.5" fill="#E8A0B8" opacity="0.3" />
    </Svg>
  )
}
