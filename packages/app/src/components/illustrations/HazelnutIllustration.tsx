import { Circle, Ellipse, Path, Svg } from 'react-native-svg'
// Hasselnöt - Detaljerad illustration + listikon
// Stil: mjuk blyertsskiss, handritad känsla, botaniskt korrekt
// Hasselnöt med hylsa (frill/involucre) och rundad nöt

interface SizeProps {
  size?: number
}

export function HazelnutIllustration({ size = 200 }: SizeProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel - frukt-kategori */}
      <Circle cx="100" cy="100" r="90" fill="#F0DDD0" opacity="0.15" />

      {/* Kvistbit */}
      <Path d="M100 25c-1 15-2 25 0 35" stroke="#6B4E3D" strokeWidth="2.5" strokeLinecap="round" />

      {/* Blad (stort, runt, dubbeltvågigt) */}
      <Path d="M95 35c-18-5-28 2-30 12 5 8 18 10 28 3" fill="#3D6B4F" opacity="0.12" />
      <Path d="M95 35c-18-5-28 2-30 12 5 8 18 10 28 3" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M105 35c18-5 28 2 30 12-5 8-18 10-28 3" fill="#3D6B4F" opacity="0.12" />
      <Path d="M105 35c18-5 28 2 30 12-5 8-18 10-28 3" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bladnerver */}
      <Path d="M90 38c-6 0-14 3-18 7" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M110 38c6 0 14 3 18 7" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Hylsa (involucre) - den flikiga gröna hylsan runt nöten */}
      <Path d="M62 90c-5 12-3 25 3 35 8 15 20 25 35 30" stroke="#5A7340" strokeWidth="1.5" strokeLinecap="round" fill="#6B8B4A" opacity="0.1" />
      <Path d="M138 90c5 12 3 25-3 35-8 15-20 25-35 30" stroke="#5A7340" strokeWidth="1.5" strokeLinecap="round" fill="#6B8B4A" opacity="0.1" />
      {/* Hylsans flikar (fransar) */}
      <Path d="M60 95c-8-2-12 3-10 8" stroke="#5A7340" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <Path d="M55 105c-6 2-8 8-5 12" stroke="#5A7340" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <Path d="M140 95c8-2 12 3 10 8" stroke="#5A7340" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <Path d="M145 105c6 2 8 8 5 12" stroke="#5A7340" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />

      {/* Nöten - rundad, brun */}
      <Ellipse cx="100" cy="120" rx="30" ry="35" fill="#A0845A" opacity="0.15" />
      <Ellipse cx="100" cy="120" rx="30" ry="35" stroke="#8B6B3D" strokeWidth="1.8" strokeLinecap="round" />

      {/* Nötens spets (liten prick i toppen) */}
      <Circle cx="100" cy="85" r="3" fill="#8B6B3D" opacity="0.2" />
      <Circle cx="100" cy="85" r="3" stroke="#8B6B3D" strokeWidth="1" opacity="0.3" />

      {/* Ljusreflex */}
      <Ellipse cx="88" cy="110" rx="8" ry="14" fill="#C4A870" opacity="0.15" transform="rotate(-5 88 110)" />

      {/* Subtila texturer */}
      <Path d="M80 105c10 2 20 2 40 0" stroke="#8B6B3D" strokeWidth="0.5" strokeLinecap="round" opacity="0.1" />
      <Path d="M78 130c12-2 22-2 44 0" stroke="#8B6B3D" strokeWidth="0.5" strokeLinecap="round" opacity="0.1" />

      {/* Skugga */}
      <Ellipse cx="100" cy="185" rx="35" ry="5" fill="#8B7355" opacity="0.08" />
    </Svg>
  )
}

export function HazelnutIcon({ size = 48 }: SizeProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Hylsa (förenklad) */}
      <Path d="M14 18c-2 5 0 10 3 14 4 5 6 6 7 6" stroke="#5A7340" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <Path d="M34 18c2 5 0 10-3 14-4 5-6 6-7 6" stroke="#5A7340" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

      {/* Nöten */}
      <Ellipse cx="24" cy="26" rx="9" ry="11" fill="#A0845A" opacity="0.15" />
      <Ellipse cx="24" cy="26" rx="9" ry="11" stroke="#8B6B3D" strokeWidth="1.8" />

      {/* Spets */}
      <Circle cx="24" cy="15" r="1.5" fill="#8B6B3D" opacity="0.3" />

      {/* Ljusreflex */}
      <Ellipse cx="21" cy="24" rx="2" ry="4" fill="#C4A870" opacity="0.15" />
    </Svg>
  )
}
