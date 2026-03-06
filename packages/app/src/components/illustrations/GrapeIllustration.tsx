import { Circle, Ellipse, Path, Svg } from 'react-native-svg'
// Vindruva - Detaljerad illustration + listikon
// Stil: mjuk blyertsskiss, handritad känsla, botaniskt korrekt
// Druvklase med rankeblad

interface SizeProps {
  size?: number
}

export function GrapeIllustration({ size = 200 }: SizeProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel - frukt-kategori */}
      <Circle cx="100" cy="100" r="90" fill="#F0DDD0" opacity="0.15" />

      {/* Klängstjälk */}
      <Path d="M100 25c-2 10-3 20-2 30" stroke="#6B4E3D" strokeWidth="2" strokeLinecap="round" />
      {/* Klänge (spiralformat) */}
      <Path d="M108 30c4-3 8-2 10 2 2 4 0 8-4 8" stroke="#6B4E3D" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Vinblad (flikigt, femflikat) */}
      <Path d="M85 35c-12-8-22-5-28 2-3 8 2 15 15 15" fill="#3D6B4F" opacity="0.12" />
      <Path d="M85 35c-12-8-22-5-28 2-3 8 2 15 15 15" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bladnerver */}
      <Path d="M82 37c-5-2-10-1-15 2" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <Path d="M80 40c-3 2-8 5-12 5" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

      {/* Druvklase - pyramidform av cirklar */}
      {/* Rad 1 (topp) */}
      <Circle cx="100" cy="70" r="10" fill="#4A3070" opacity="0.15" />
      <Circle cx="100" cy="70" r="10" stroke="#3A2560" strokeWidth="1.5" />

      {/* Rad 2 */}
      <Circle cx="88" cy="88" r="11" fill="#4A3070" opacity="0.15" />
      <Circle cx="88" cy="88" r="11" stroke="#3A2560" strokeWidth="1.5" />
      <Circle cx="112" cy="88" r="11" fill="#4A3070" opacity="0.15" />
      <Circle cx="112" cy="88" r="11" stroke="#3A2560" strokeWidth="1.5" />

      {/* Rad 3 */}
      <Circle cx="78" cy="108" r="11" fill="#4A3070" opacity="0.15" />
      <Circle cx="78" cy="108" r="11" stroke="#3A2560" strokeWidth="1.5" />
      <Circle cx="100" cy="106" r="11" fill="#4A3070" opacity="0.15" />
      <Circle cx="100" cy="106" r="11" stroke="#3A2560" strokeWidth="1.5" />
      <Circle cx="122" cy="108" r="11" fill="#4A3070" opacity="0.15" />
      <Circle cx="122" cy="108" r="11" stroke="#3A2560" strokeWidth="1.5" />

      {/* Rad 4 */}
      <Circle cx="85" cy="126" r="11" fill="#4A3070" opacity="0.15" />
      <Circle cx="85" cy="126" r="11" stroke="#3A2560" strokeWidth="1.5" />
      <Circle cx="115" cy="126" r="11" fill="#4A3070" opacity="0.15" />
      <Circle cx="115" cy="126" r="11" stroke="#3A2560" strokeWidth="1.5" />

      {/* Rad 5 (botten) */}
      <Circle cx="100" cy="143" r="11" fill="#4A3070" opacity="0.15" />
      <Circle cx="100" cy="143" r="11" stroke="#3A2560" strokeWidth="1.5" />

      {/* Ljusreflexer på druvorna */}
      <Ellipse cx="96" cy="67" rx="3" ry="4" fill="#8070A0" opacity="0.25" />
      <Ellipse cx="84" cy="85" rx="3" ry="4" fill="#8070A0" opacity="0.2" />
      <Ellipse cx="108" cy="85" rx="3" ry="4" fill="#8070A0" opacity="0.2" />
      <Ellipse cx="74" cy="105" rx="3" ry="4" fill="#8070A0" opacity="0.2" />
      <Ellipse cx="96" cy="103" rx="3" ry="4" fill="#8070A0" opacity="0.2" />
      <Ellipse cx="81" cy="123" rx="3" ry="4" fill="#8070A0" opacity="0.2" />
      <Ellipse cx="96" cy="140" rx="3" ry="4" fill="#8070A0" opacity="0.2" />

      {/* Skugga */}
      <Ellipse cx="100" cy="185" rx="40" ry="5" fill="#8B7355" opacity="0.08" />
    </Svg>
  )
}

export function GrapeIcon({ size = 48 }: SizeProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stjälk */}
      <Path d="M24 4c0 4-1 6 0 8" stroke="#6B4E3D" strokeWidth="1.8" strokeLinecap="round" />

      {/* Blad */}
      <Path d="M22 6c-4-2-8-1-9 2 1 3 4 3 9 1" fill="#3D6B4F" opacity="0.15" />
      <Path d="M22 6c-4-2-8-1-9 2 1 3 4 3 9 1" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Druvklase (förenklad) */}
      <Circle cx="24" cy="16" r="4" fill="#4A3070" opacity="0.15" />
      <Circle cx="24" cy="16" r="4" stroke="#3A2560" strokeWidth="1.8" />
      <Circle cx="19" cy="23" r="4" fill="#4A3070" opacity="0.15" />
      <Circle cx="19" cy="23" r="4" stroke="#3A2560" strokeWidth="1.8" />
      <Circle cx="29" cy="23" r="4" fill="#4A3070" opacity="0.15" />
      <Circle cx="29" cy="23" r="4" stroke="#3A2560" strokeWidth="1.8" />
      <Circle cx="24" cy="30" r="4" fill="#4A3070" opacity="0.15" />
      <Circle cx="24" cy="30" r="4" stroke="#3A2560" strokeWidth="1.8" />
      <Circle cx="17" cy="30" r="4" fill="#4A3070" opacity="0.15" />
      <Circle cx="17" cy="30" r="4" stroke="#3A2560" strokeWidth="1.8" />
      <Circle cx="31" cy="30" r="4" fill="#4A3070" opacity="0.15" />
      <Circle cx="31" cy="30" r="4" stroke="#3A2560" strokeWidth="1.8" />
      <Circle cx="24" cy="37" r="4" fill="#4A3070" opacity="0.15" />
      <Circle cx="24" cy="37" r="4" stroke="#3A2560" strokeWidth="1.8" />

      {/* Ljusreflex */}
      <Ellipse cx="22" cy="14" rx="1" ry="2" fill="#8070A0" opacity="0.25" />
      <Ellipse cx="17" cy="21" rx="1" ry="2" fill="#8070A0" opacity="0.2" />
    </Svg>
  )
}
