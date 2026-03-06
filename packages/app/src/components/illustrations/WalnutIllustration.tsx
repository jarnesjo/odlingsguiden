import { Circle, Ellipse, Path, Svg } from 'react-native-svg'
// Valnöt - Detaljerad illustration + listikon
// Stil: mjuk blyertsskiss, handritad känsla, botaniskt korrekt

interface SizeProps {
  size?: number
}

export function WalnutIllustration({ size = 200 }: SizeProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel - frukt-kategori */}
      <Circle cx="100" cy="100" r="90" fill="#F0DDD0" opacity="0.15" />

      {/* Blad (sammansatt, parbladigt) */}
      <Path d="M100 30c0 15-2 25 0 35" stroke="#6B4E3D" strokeWidth="2" strokeLinecap="round" />
      {/* Bladpar vänster */}
      <Path d="M90 35c-8-3-15 0-18 5 4 4 12 5 18 0" fill="#3D6B4F" opacity="0.12" />
      <Path d="M90 35c-8-3-15 0-18 5 4 4 12 5 18 0" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bladpar höger */}
      <Path d="M110 35c8-3 15 0 18 5-4 4-12 5-18 0" fill="#3D6B4F" opacity="0.12" />
      <Path d="M110 35c8-3 15 0 18 5-4 4-12 5-18 0" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Valnöt - oval med textur */}
      <Ellipse cx="100" cy="115" rx="35" ry="40" fill="#8B7355" opacity="0.15" />
      <Ellipse cx="100" cy="115" rx="35" ry="40" stroke="#6B5535" strokeWidth="1.8" strokeLinecap="round" />

      {/* Nötens mittfåra (vertikal) */}
      <Path d="M100 75c-1 15 0 30 0 40 0 12 1 20 0 40" stroke="#6B5535" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />

      {/* Nötens horisontella fåra */}
      <Path d="M65 115c15-3 30-3 35 0 5 3 20 3 35 0" stroke="#6B5535" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

      {/* Texturlinjerna (valnötens karaktäristiska mönster) */}
      <Path d="M72 95c8 5 18 3 28 0" stroke="#6B5535" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
      <Path d="M72 135c8-5 18-3 28 0" stroke="#6B5535" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
      <Path d="M100 95c8 5 18 3 28 0" stroke="#6B5535" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
      <Path d="M100 135c8-5 18-3 28 0" stroke="#6B5535" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />

      {/* Ljusreflex */}
      <Ellipse cx="88" cy="105" rx="10" ry="15" fill="#B8A080" opacity="0.15" transform="rotate(-10 88 105)" />

      {/* Skugga */}
      <Ellipse cx="100" cy="185" rx="40" ry="5" fill="#8B7355" opacity="0.08" />
    </Svg>
  )
}

export function WalnutIcon({ size = 48 }: SizeProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Valnöt */}
      <Ellipse cx="24" cy="26" rx="10" ry="12" fill="#8B7355" opacity="0.15" />
      <Ellipse cx="24" cy="26" rx="10" ry="12" stroke="#6B5535" strokeWidth="1.8" />

      {/* Mittfåra */}
      <Path d="M24 14c0 8 0 16 0 24" stroke="#6B5535" strokeWidth="1" strokeLinecap="round" opacity="0.25" />

      {/* Blad */}
      <Path d="M22 10c-3-2-6 0-7 2 2 2 4 2 7 0" fill="#3D6B4F" opacity="0.15" />
      <Path d="M22 10c-3-2-6 0-7 2 2 2 4 2 7 0" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Ljusreflex */}
      <Ellipse cx="21" cy="23" rx="3" ry="4" fill="#B8A080" opacity="0.15" />
    </Svg>
  )
}
