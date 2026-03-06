import { colors } from '@odlingsguiden/shared'
import { Circle, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function LeekIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <Circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />
      {/* Dark green outer leaves fanning out */}
      <Path d="M88 70 Q75 40 60 10" stroke="#2A4A36" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M60 10 Q56 4 50 2" stroke="#2A4A36" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <Path d="M112 70 Q125 40 140 10" stroke="#2A4A36" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M140 10 Q144 4 150 2" stroke="#2A4A36" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Outer leaf fills (subtle) */}
      <Path d="M88 70 Q75 40 60 10 Q64 8 68 12 Q80 42 92 70 Z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M112 70 Q125 40 140 10 Q136 8 132 12 Q120 42 108 70 Z" fill="#3D6B4F" opacity="0.12" />
      {/* Middle leaves */}
      <Path d="M92 65 Q82 35 72 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M72 8 Q69 3 65 2" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <Path d="M108 65 Q118 35 128 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M128 8 Q131 3 135 2" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Inner leaves (lighter, closer together) */}
      <Path d="M95 60 Q88 32 82 6" stroke="#5A8B6F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      <Path d="M105 60 Q112 32 118 6" stroke="#5A8B6F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* Central leaf (lightest, youngest) */}
      <Path d="M100 55 Q100 28 100 5" stroke="#5A8B6F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Leaf vein details */}
      <Path d="M80 45 Q76 30 72 18" stroke="#2A4A36" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
      <Path d="M120 45 Q124 30 128 18" stroke="#2A4A36" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
      {/* Transition zone - where green meets white */}
      <Path d="M86 85 Q92 72 100 68 Q108 72 114 85" stroke="#5A8B6F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* White stem (the prized part) - fill */}
      <Path d="M88 85 Q86 110 86 135 Q86 155 90 170 Q94 178 100 180 Q106 178 110 170 Q114 155 114 135 Q114 110 112 85 Q108 75 100 72 Q92 75 88 85 Z" fill="#F5F2EB" opacity="0.5" />
      {/* White stem outline */}
      <Path d="M88 85 Q86 110 86 135 Q86 155 90 170 Q94 178 100 180 Q106 178 110 170 Q114 155 114 135 Q114 110 112 85" stroke="#B8A88A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Stem layer lines (subtle concentric layers visible through skin) */}
      <Path d="M90 88 Q89 115 89 140 Q90 158 94 172" stroke="#D4C4AD" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M110 88 Q111 115 111 140 Q110 158 106 172" stroke="#D4C4AD" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M93 82 Q91 110 92 142 Q93 160 97 175" stroke="#D4C4AD" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <Path d="M107 82 Q109 110 108 142 Q107 160 103 175" stroke="#D4C4AD" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      {/* Horizontal ring lines on stem (leaf sheath wrapping) */}
      <Path d="M87 100 Q94 98 100 99 Q106 98 113 100" stroke="#D4C4AD" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      <Path d="M86 120 Q93 118 100 119 Q107 118 114 120" stroke="#D4C4AD" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      <Path d="M87 140 Q93 138 100 139 Q107 138 113 140" stroke="#D4C4AD" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" />
      <Path d="M88 158 Q94 156 100 157 Q106 156 112 158" stroke="#D4C4AD" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />
      {/* Light highlight on stem */}
      <Path d="M92 95 Q92 125 93 155" stroke="#FEFDFB" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      {/* Small roots at bottom */}
      <Path d="M100 180 L100 194" stroke="#B8A88A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <Path d="M96 179 Q92 185 88 192" stroke="#B8A88A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <Path d="M104 179 Q108 185 112 192" stroke="#B8A88A" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <Path d="M94 178 Q88 183 84 188" stroke="#B8A88A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <Path d="M106 178 Q112 183 116 188" stroke="#B8A88A" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
      <Path d="M98 180 Q96 186 94 192" stroke="#B8A88A" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      <Path d="M102 180 Q104 186 106 192" stroke="#B8A88A" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      {/* Soil dots */}
      <Circle cx="80" cy="190" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="120" cy="188" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="92" cy="196" r="1.2" fill={colors.earth} opacity="0.2" />
      <Circle cx="110" cy="194" r="0.8" fill={colors.earth} opacity="0.15" />
    </Svg>
  )
}

export function LeekIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Dark green outer leaves fanning out */}
      <Path d="M21 16 Q17 9 13 2" stroke="#2A4A36" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M27 16 Q31 9 35 2" stroke="#2A4A36" strokeWidth="1.8" strokeLinecap="round" />
      {/* Middle leaves */}
      <Path d="M22 14 Q19 8 16 2" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M26 14 Q29 8 32 2" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      {/* Inner leaf */}
      <Path d="M24 12 Q24 7 24 2" stroke="#5A8B6F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* White stem fill */}
      <Path d="M21 19 Q20 28 20.5 36 Q21.5 41 24 43 Q26.5 41 27.5 36 Q28 28 27 19 Q26 16 24 15 Q22 16 21 19 Z" fill="#F5F2EB" opacity="0.5" />
      {/* White stem outline */}
      <Path d="M21 19 Q20 28 20.5 36 Q21.5 41 24 43 Q26.5 41 27.5 36 Q28 28 27 19" stroke="#B8A88A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Stem layer lines */}
      <Path d="M22 20 Q21.5 28 22 36 Q22.5 40 24 42" stroke="#D4C4AD" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
      <Path d="M26 20 Q26.5 28 26 36 Q25.5 40 24 42" stroke="#D4C4AD" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
      {/* Highlight */}
      <Path d="M22.5 22 Q22.5 28 22.5 34" stroke="#FEFDFB" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      {/* Roots */}
      <Path d="M24 43 L24 46.5" stroke="#B8A88A" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <Path d="M22.5 42.5 Q21 44.5 19.5 46" stroke="#B8A88A" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      <Path d="M25.5 42.5 Q27 44.5 28.5 46" stroke="#B8A88A" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
    </Svg>
  )
}
