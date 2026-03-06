import { Circle, Ellipse, Path, Svg } from 'react-native-svg'
interface Props {
  size?: number
}

export function RhubarbIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel - grönsak */}
      <Circle cx="100" cy="100" r="90" fill="#C8DEC9" opacity="0.15" />

      {/* Jordlinje/bas */}
      <Ellipse cx="100" cy="170" rx="40" ry="5" fill="#8B7355" opacity="0.08" />

      {/* Vänster stjälk - bakre */}
      <Path d="M72 168 Q68 130 62 90" stroke="#A64253" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M72 168 Q68 130 62 90" stroke="#C45568" strokeWidth="6" strokeLinecap="round" opacity="0.15" />

      {/* Höger stjälk - bakre */}
      <Path d="M128 168 Q132 125 136 85" stroke="#A64253" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M128 168 Q132 125 136 85" stroke="#C45568" strokeWidth="6" strokeLinecap="round" opacity="0.15" />

      {/* Mittstjälk - bakom */}
      <Path d="M100 168 Q100 120 98 75" stroke="#8B3545" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M100 168 Q100 120 98 75" stroke="#C45568" strokeWidth="7" strokeLinecap="round" opacity="0.15" />

      {/* Vänster stjälk - främre */}
      <Path d="M85 168 Q78 125 70 95" stroke="#A64253" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M85 168 Q78 125 70 95" stroke="#C45568" strokeWidth="6.5" strokeLinecap="round" opacity="0.18" />
      {/* Ljusreflex vänster stjälk */}
      <Path d="M83 160 Q77 130 71 100" stroke="#E8A0B0" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />

      {/* Höger stjälk - främre */}
      <Path d="M115 168 Q122 130 126 92" stroke="#A64253" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M115 168 Q122 130 126 92" stroke="#C45568" strokeWidth="6.5" strokeLinecap="round" opacity="0.18" />
      {/* Ljusreflex höger stjälk */}
      <Path d="M114 160 Q120 130 124 98" stroke="#E8A0B0" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />

      {/* Stort blad vänster - bakfyll */}
      <Path d="M62 90 Q42 70 38 50 Q50 42 68 48 Q62 55 62 70 Q58 80 62 90" fill="#3D6B4F" opacity="0.08" />
      {/* Stort blad vänster - kontur */}
      <Path d="M62 90 Q42 70 38 50" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M38 50 Q50 42 68 48" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M68 48 Q62 60 62 90" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Nervatur vänster blad */}
      <Path d="M62 90 Q50 72 42 55" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M55 78 Q48 68 45 58" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Stort blad höger - bakfyll */}
      <Path d="M136 85 Q158 65 162 45 Q148 38 132 46 Q138 58 136 85" fill="#3D6B4F" opacity="0.08" />
      {/* Stort blad höger - kontur */}
      <Path d="M136 85 Q158 65 162 45" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M162 45 Q148 38 132 46" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M132 46 Q138 60 136 85" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Nervatur höger blad */}
      <Path d="M136 85 Q150 68 158 50" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M142 72 Q152 60 156 50" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Mittblad - bakfyll */}
      <Path d="M98 75 Q82 48 78 28 Q90 22 100 28 Q110 22 122 28 Q118 48 98 75" fill="#3D6B4F" opacity="0.1" />
      {/* Mittblad - kontur */}
      <Path d="M98 75 Q82 48 78 28" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M78 28 Q90 22 100 28" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M100 28 Q110 22 122 28" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M122 28 Q118 48 98 75" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Nervatur mittblad */}
      <Path d="M98 75 Q92 52 82 32" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M98 75 Q108 52 118 32" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M98 75 Q100 50 100 30" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Vänster främre blad - bakfyll */}
      <Path d="M70 95 Q48 82 35 68 Q42 60 55 62 Q56 72 70 95" fill="#3D6B4F" opacity="0.06" />
      {/* Vänster främre blad - kontur */}
      <Path d="M70 95 Q48 82 35 68" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <Path d="M35 68 Q42 60 55 62" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <Path d="M55 62 Q58 75 70 95" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

      {/* Höger främre blad - bakfyll */}
      <Path d="M126 92 Q148 78 162 65 Q156 57 142 60 Q140 72 126 92" fill="#3D6B4F" opacity="0.06" />
      {/* Höger främre blad - kontur */}
      <Path d="M126 92 Q148 78 162 65" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <Path d="M162 65 Q156 57 142 60" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <Path d="M142 60 Q138 72 126 92" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

      {/* Kronbas - liten markering vid basen */}
      <Ellipse cx="100" cy="170" rx="22" ry="4" fill="#8B3545" opacity="0.1" />
    </Svg>
  )
}

export function RhubarbIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Vänster stjälk */}
      <Path d="M18 42 Q16 30 14 20" stroke="#A64253" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M18 42 Q16 30 14 20" stroke="#C45568" strokeWidth="4" strokeLinecap="round" opacity="0.18" />

      {/* Höger stjälk */}
      <Path d="M30 42 Q32 30 34 20" stroke="#A64253" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M30 42 Q32 30 34 20" stroke="#C45568" strokeWidth="4" strokeLinecap="round" opacity="0.18" />

      {/* Mittstjälk */}
      <Path d="M24 42 Q24 28 24 16" stroke="#8B3545" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M24 42 Q24 28 24 16" stroke="#C45568" strokeWidth="4.5" strokeLinecap="round" opacity="0.15" />

      {/* Vänster blad */}
      <Path d="M14 20 Q6 14 5 8 Q10 6 16 10" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M14 20 Q10 14 8 10" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Höger blad */}
      <Path d="M34 20 Q42 14 43 8 Q38 6 32 10" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M34 20 Q38 14 40 10" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Mittblad */}
      <Path d="M24 16 Q18 8 16 4 Q20 2 24 5 Q28 2 32 4 Q30 8 24 16" fill="#3D6B4F" opacity="0.08" />
      <Path d="M24 16 Q18 8 16 4" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M16 4 Q20 2 24 5 Q28 2 32 4" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M32 4 Q30 8 24 16" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  )
}
