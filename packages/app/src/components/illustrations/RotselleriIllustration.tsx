import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function RotselleriIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* 1. Bakgrundscirkel - grönsak */}
      <Circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* 2. Blast - selleribladiga stjälkar som sticker upp */}
      {/* Central stjälk */}
      <Path d="M100 70 L100 25" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />

      {/* Vänster yttre stjälk */}
      <Path d="M95 72 C88 55, 72 35, 58 20" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Vänster blad */}
      <Path d="M58 20 C55 15, 50 14, 48 17 C46 20, 49 25, 53 24 C57 23, 58 21, 58 20Z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M58 20 C62 17, 63 13, 60 10" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />

      {/* Vänster inre stjälk */}
      <Path d="M97 70 C92 52, 80 38, 68 28" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Höger yttre stjälk */}
      <Path d="M105 72 C112 55, 128 35, 142 20" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Höger blad */}
      <Path d="M142 20 C145 15, 150 14, 152 17 C154 20, 151 25, 147 24 C143 23, 142 21, 142 20Z" fill="#3D6B4F" opacity="0.12" />
      <Path d="M142 20 C138 17, 137 13, 140 10" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />

      {/* Höger inre stjälk */}
      <Path d="M103 70 C108 52, 120 38, 132 28" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Toppblad */}
      <Path d="M100 25 C97 15, 90 8, 82 5" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M100 25 C103 15, 110 8, 118 5" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M82 5 C79 3, 77 5, 78 8" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <Path d="M118 5 C121 3, 123 5, 122 8" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

      {/* 3. Huvudkropp - knölig, rund rotselleri */}
      {/* Fill */}
      <Path
        d="M68 78 C62 82, 57 92, 55 105 C53 118, 55 134, 62 148 C67 158, 78 168, 90 172 C95 174, 105 174, 110 172 C122 168, 133 158, 138 148 C145 134, 147 118, 145 105 C143 92, 138 82, 132 78 C126 74, 118 72, 110 72 C102 72, 90 72, 82 72 C76 72, 72 74, 68 78Z"
        fill="#C9B07A"
        opacity="0.18"
      />
      {/* Kontur */}
      <Path
        d="M68 78 C62 82, 57 92, 55 105 C53 118, 55 134, 62 148 C67 158, 78 168, 90 172 C95 174, 105 174, 110 172 C122 168, 133 158, 138 148 C145 134, 147 118, 145 105 C143 92, 138 82, 132 78 C126 74, 118 72, 110 72 C102 72, 90 72, 82 72 C76 72, 72 74, 68 78Z"
        stroke="#A89060"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Knöliga utbuktningar - ger den typiska ojämna formen */}
      <Path d="M57 100 C54 98, 52 102, 54 106" stroke="#A89060" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
      <Path d="M143 110 C146 108, 148 112, 146 116" stroke="#A89060" strokeWidth="1.4" strokeLinecap="round" opacity="0.35" />
      <Path d="M62 135 C58 133, 56 138, 59 142" stroke="#A89060" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />

      {/* 4. Texturlinjer - oregelbundna horisontella linjer */}
      <Path d="M72 90 C82 87, 118 87, 128 90" stroke="#A89060" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <Path d="M64 105 C76 102, 124 102, 136 105" stroke="#A89060" strokeWidth="1" strokeLinecap="round" opacity="0.22" />
      <Path d="M60 120 C74 117, 126 117, 140 120" stroke="#A89060" strokeWidth="1" strokeLinecap="round" opacity="0.20" />
      <Path d="M62 135 C76 132, 124 132, 138 135" stroke="#A89060" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
      <Path d="M70 150 C80 147, 120 147, 130 150" stroke="#A89060" strokeWidth="1" strokeLinecap="round" opacity="0.15" />

      {/* 5. Ljusreflex - ger volym */}
      <Path d="M78 84 C74 100, 72 120, 75 145" stroke="#E8D8B0" strokeWidth="3.5" strokeLinecap="round" opacity="0.20" />

      {/* 6. Birötter - tunna rötter som hänger ner */}
      <Path d="M85 170 C82 178, 78 186, 76 192" stroke="#A89060" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <Path d="M95 173 C93 180, 90 187, 88 194" stroke="#A89060" strokeWidth="0.9" strokeLinecap="round" opacity="0.30" />
      <Path d="M105 173 C107 180, 110 187, 112 194" stroke="#A89060" strokeWidth="0.9" strokeLinecap="round" opacity="0.30" />
      <Path d="M115 170 C118 178, 122 186, 124 192" stroke="#A89060" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <Path d="M100 174 C100 182, 100 190, 100 197" stroke="#A89060" strokeWidth="1.2" strokeLinecap="round" opacity="0.38" />

      {/* Birötter från sidorna */}
      <Path d="M57 112 C50 114, 44 112, 40 114" stroke="#A89060" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <Path d="M145 125 C152 127, 156 125, 160 127" stroke="#A89060" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />

      {/* Jordpartiklar */}
      <Circle cx="72" cy="180" r="1.5" fill={colors.earth} opacity="0.2" />
      <Circle cx="130" cy="178" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="92" cy="190" r="1.2" fill={colors.earth} opacity="0.18" />
      <Circle cx="110" cy="188" r="0.8" fill={colors.earth} opacity="0.15" />

      {/* 7. Markskugga */}
      <Ellipse cx="100" cy="192" rx="35" ry="4" fill={colors.earth} opacity="0.08" />
    </Svg>
  )
}

export function RotselleriIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Blast - central stjälk */}
      <Path d="M24 17 L24 7" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Vänster blast */}
      <Path d="M23 12 C19 8, 14 5, 10 3" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

      {/* Höger blast */}
      <Path d="M25 12 C29 8, 34 5, 38 3" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

      {/* Toppgrenar */}
      <Path d="M24 7 C22 4, 19 2, 17 1" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M24 7 C26 4, 29 2, 31 1" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Kropp - fill (rund knöl) */}
      <Path
        d="M14 19 C12 21, 11 25, 11 29 C11 33, 13 38, 17 41 C19 43, 22 44, 24 44 C26 44, 29 43, 31 41 C35 38, 37 33, 37 29 C37 25, 36 21, 34 19 C32 17, 28 16, 24 16 C20 16, 16 17, 14 19Z"
        fill="#C9B07A"
        opacity="0.20"
      />
      {/* Kropp - kontur */}
      <Path
        d="M14 19 C12 21, 11 25, 11 29 C11 33, 13 38, 17 41 C19 43, 22 44, 24 44 C26 44, 29 43, 31 41 C35 38, 37 33, 37 29 C37 25, 36 21, 34 19 C32 17, 28 16, 24 16 C20 16, 16 17, 14 19Z"
        stroke="#A89060"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Texturlinjer */}
      <Path d="M13 26 C17 25, 31 25, 35 26" stroke="#A89060" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <Path d="M12 32 C16 31, 32 31, 36 32" stroke="#A89060" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />
      <Path d="M14 37 C18 36, 30 36, 34 37" stroke="#A89060" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />

      {/* Birötter */}
      <Path d="M20 43 C19 45, 18 47, 17 48" stroke="#A89060" strokeWidth="0.7" strokeLinecap="round" opacity="0.30" />
      <Path d="M24 44 C24 46, 24 47, 24 48" stroke="#A89060" strokeWidth="0.8" strokeLinecap="round" opacity="0.32" />
      <Path d="M28 43 C29 45, 30 47, 31 48" stroke="#A89060" strokeWidth="0.7" strokeLinecap="round" opacity="0.30" />
    </Svg>
  )
}
