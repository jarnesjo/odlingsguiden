import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function GooseberryIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <Circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main branch */}
      <Path d="M75 170 Q78 155, 82 140 Q86 125, 90 110 Q93 100, 95 88" stroke="#5C4033" strokeWidth="2.2" strokeLinecap="round" />
      {/* Upper branch fork left */}
      <Path d="M95 88 Q90 78, 82 68 Q78 62, 72 55" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />
      {/* Upper branch fork right */}
      <Path d="M95 88 Q100 78, 108 68 Q112 62, 118 55" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Thorns on main branch */}
      <Path d="M80 145 L76 141" stroke="#5C4033" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <Path d="M84 130 L80 126" stroke="#5C4033" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <Path d="M88 115 L92 111" stroke="#5C4033" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <Path d="M93 95 L89 92" stroke="#5C4033" strokeWidth="1.0" strokeLinecap="round" opacity="0.4" />

      {/* Left palmate leaf (krusbär have small, lobed leaves) */}
      <Path d="M72 55 Q62 48, 50 46 Q42 45, 36 50 Q40 44, 48 42 Q58 40, 68 46 Q74 50, 72 55Z" fill="#3D6B4F" opacity="0.10" />
      <Path d="M72 55 Q62 48, 50 46 Q42 45, 36 50" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M36 50 Q40 44, 48 42 Q58 40, 68 46" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Left leaf lobes */}
      <Path d="M55 47 Q48 40, 40 36" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <Path d="M62 46 Q58 38, 55 32" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Left leaf veins */}
      <Path d="M72 55 Q58 49, 44 47" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />

      {/* Right palmate leaf */}
      <Path d="M118 55 Q128 48, 140 46 Q148 45, 154 50 Q150 44, 142 42 Q132 40, 122 46 Q116 50, 118 55Z" fill="#3D6B4F" opacity="0.10" />
      <Path d="M118 55 Q128 48, 140 46 Q148 45, 154 50" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <Path d="M154 50 Q150 44, 142 42 Q132 40, 122 46" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Right leaf lobes */}
      <Path d="M138 46 Q144 38, 150 34" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Right leaf veins */}
      <Path d="M118 55 Q132 49, 146 47" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />

      {/* Small side leaf on branch */}
      <Path d="M86 125 Q76 120, 64 120 Q56 120, 50 124" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <Path d="M86 125 Q72 121, 56 122" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />

      {/* Berry stems from branch */}
      <Path d="M90 110 Q88 114, 84 118" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M90 110 Q92 114, 95 118" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />
      <Path d="M92 105 Q96 110, 102 116" stroke="#6B8B4F" strokeWidth="1.2" strokeLinecap="round" />

      {/* Berry 1 - large, left (green gooseberry with stripes) */}
      <Ellipse cx="78" cy="130" rx="11" ry="12" fill="#A8C77B" opacity="0.3" />
      <Ellipse cx="78" cy="130" rx="11" ry="12" stroke="#7B9B55" strokeWidth="1.8" fill="none" />
      {/* Berry 1 stripes (characteristic gooseberry veining) */}
      <Path d="M72 122 Q75 130, 72 138" stroke="#8BAB62" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <Path d="M78 120 Q78 130, 78 140" stroke="#8BAB62" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <Path d="M84 122 Q81 130, 84 138" stroke="#8BAB62" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Berry 1 shine */}
      <Ellipse cx="74" cy="126" rx="3" ry="4" fill="#C8E0A8" opacity="0.35" />
      {/* Berry 1 calyx (dried flower at bottom) */}
      <Path d="M75 141 L73 144 M78 142 L78 145 M81 141 L83 144" stroke="#7B9B55" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Berry 2 - medium, center (slightly riper, yellowish-green) */}
      <Ellipse cx="95" cy="128" rx="10" ry="11" fill="#BCD48A" opacity="0.3" />
      <Ellipse cx="95" cy="128" rx="10" ry="11" stroke="#8BAB62" strokeWidth="1.8" fill="none" />
      {/* Berry 2 stripes */}
      <Path d="M90 119 Q92 128, 90 137" stroke="#9BBF6E" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <Path d="M95 118 Q95 128, 95 138" stroke="#9BBF6E" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M100 119 Q98 128, 100 137" stroke="#9BBF6E" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Berry 2 shine */}
      <Ellipse cx="91" cy="124" rx="3" ry="3.5" fill="#D4E8B5" opacity="0.35" />
      {/* Berry 2 calyx */}
      <Path d="M92 138 L90 141 M95 139 L95 142 M98 138 L100 141" stroke="#8BAB62" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Berry 3 - large, right (fully ripe, golden-green) */}
      <Ellipse cx="112" cy="128" rx="11" ry="12" fill="#C8D48A" opacity="0.3" />
      <Ellipse cx="112" cy="128" rx="11" ry="12" stroke="#96AA5F" strokeWidth="1.8" fill="none" />
      {/* Berry 3 stripes */}
      <Path d="M106 118 Q109 128, 106 138" stroke="#A8BF6E" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <Path d="M112 117 Q112 128, 112 139" stroke="#A8BF6E" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M118 118 Q115 128, 118 138" stroke="#A8BF6E" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Berry 3 shine */}
      <Ellipse cx="108" cy="124" rx="3" ry="4" fill="#DAE8B5" opacity="0.35" />
      {/* Berry 3 calyx */}
      <Path d="M109 139 L107 142 M112 140 L112 143 M115 139 L117 142" stroke="#96AA5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Berry 4 - small, below left (young, bright green) */}
      <Ellipse cx="85" cy="148" rx="9" ry="10" fill="#A0C070" opacity="0.25" />
      <Ellipse cx="85" cy="148" rx="9" ry="10" stroke="#7B9B55" strokeWidth="1.8" fill="none" />
      {/* Berry 4 stripes */}
      <Path d="M80 140 Q82 148, 80 156" stroke="#8BAB62" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <Path d="M85 139 Q85 148, 85 157" stroke="#8BAB62" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <Path d="M90 140 Q88 148, 90 156" stroke="#8BAB62" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      {/* Berry 4 shine */}
      <Ellipse cx="82" cy="145" rx="2.5" ry="3" fill="#C8E0A8" opacity="0.3" />
      {/* Berry 4 calyx */}
      <Path d="M83 157 L82 160 M85 158 L85 161 M87 157 L88 160" stroke="#7B9B55" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />

      {/* Berry 5 - small, below right */}
      <Ellipse cx="105" cy="150" rx="8.5" ry="9.5" fill="#B0D080" opacity="0.25" />
      <Ellipse cx="105" cy="150" rx="8.5" ry="9.5" stroke="#8BAB62" strokeWidth="1.8" fill="none" />
      {/* Berry 5 stripes */}
      <Path d="M100 142 Q102 150, 100 158" stroke="#96B568" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <Path d="M105 141 Q105 150, 105 159" stroke="#96B568" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <Path d="M110 142 Q108 150, 110 158" stroke="#96B568" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      {/* Berry 5 shine */}
      <Ellipse cx="102" cy="147" rx="2.5" ry="3" fill="#D4E8B5" opacity="0.3" />
      {/* Berry 5 calyx */}
      <Path d="M103 159 L102 162 M105 160 L105 163 M107 159 L108 162" stroke="#8BAB62" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />

      {/* Connecting berry stems */}
      <Path d="M84 118 Q82 122, 78 124" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <Path d="M95 118 Q95 122, 95 124" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <Path d="M102 116 Q106 120, 112 122" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <Path d="M84 118 Q84 130, 85 140" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <Path d="M102 116 Q103 130, 105 142" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

      {/* Ground dots */}
      <Circle cx="65" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="85" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="108" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <Circle cx="125" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </Svg>
  )
}

export function GooseberryIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Branch */}
      <Path d="M18 4 Q20 10, 22 16 Q23 19, 24 22" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Thorn */}
      <Path d="M20 10 L17 8" stroke="#5C4033" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Left leaf */}
      <Path d="M20 12 Q15 9, 10 9 Q13 7, 18 9" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Right leaf */}
      <Path d="M22 16 Q27 14, 33 14 Q30 12, 25 14" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Berry stems */}
      <Path d="M24 22 Q22 24, 19 26" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <Path d="M24 22 Q26 24, 29 26" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />

      {/* Berry left (green gooseberry) */}
      <Ellipse cx="17" cy="32" rx="6" ry="6.5" fill="#A8C77B" opacity="0.3" />
      <Ellipse cx="17" cy="32" rx="6" ry="6.5" stroke="#7B9B55" strokeWidth="1.8" fill="none" />
      {/* Stripes */}
      <Path d="M14 27 Q16 32, 14 37" stroke="#8BAB62" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />
      <Path d="M17 26 Q17 32, 17 38" stroke="#8BAB62" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <Path d="M20 27 Q18 32, 20 37" stroke="#8BAB62" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      {/* Shine */}
      <Ellipse cx="15" cy="30" rx="2" ry="2.5" fill="#C8E0A8" opacity="0.35" />

      {/* Berry right (slightly riper) */}
      <Ellipse cx="30" cy="32" rx="6" ry="6.5" fill="#BCD48A" opacity="0.3" />
      <Ellipse cx="30" cy="32" rx="6" ry="6.5" stroke="#8BAB62" strokeWidth="1.8" fill="none" />
      {/* Stripes */}
      <Path d="M27 27 Q29 32, 27 37" stroke="#96B568" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <Path d="M30 26 Q30 32, 30 38" stroke="#96B568" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <Path d="M33 27 Q31 32, 33 37" stroke="#96B568" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      {/* Shine */}
      <Ellipse cx="28" cy="30" rx="2" ry="2.5" fill="#D4E8B5" opacity="0.35" />

      {/* Bottom berry (center) */}
      <Ellipse cx="24" cy="41" rx="5" ry="5.5" fill="#B0D080" opacity="0.25" />
      <Ellipse cx="24" cy="41" rx="5" ry="5.5" stroke="#7B9B55" strokeWidth="1.8" fill="none" />
      {/* Stripes */}
      <Path d="M22 37 Q23 41, 22 45" stroke="#8BAB62" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <Path d="M24 36 Q24 41, 24 46" stroke="#8BAB62" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      {/* Shine */}
      <Ellipse cx="22" cy="39" rx="1.5" ry="2" fill="#C8E0A8" opacity="0.3" />

      {/* Calyx hints */}
      <Path d="M16 38 L15 40 M18 38 L19 40" stroke="#7B9B55" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <Path d="M29 38 L28 40 M31 38 L32 40" stroke="#8BAB62" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
    </Svg>
  )
}
