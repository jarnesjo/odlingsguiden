import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function BayLeafIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      {/* Huvudstam - vedartad buske */}
      <path d="M100 185 C100 170, 100 155, 100 140" stroke="#8B7355" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M100 140 C100 130, 100 120, 99 110" stroke="#7A6B4F" strokeWidth="2.8" strokeLinecap="round" />
      {/* Grenfördelning */}
      <path d="M99 120 Q85 105, 70 90" stroke="#7A6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 115 Q110 100, 130 88" stroke="#7A6B4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M99 110 Q96 95, 92 75" stroke="#7A6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Blad 1 - nedre vänster (lagerblad: smalt, elliptiskt, läderartad) */}
      <ellipse cx="55" cy="120" rx="24" ry="9" fill="#3D6B4F" opacity="0.18" transform="rotate(-30 55 120)" />
      <ellipse cx="55" cy="120" rx="24" ry="9" stroke="#2D5B3F" strokeWidth="1.8" strokeLinecap="round" fill="none" transform="rotate(-30 55 120)" />
      <path d="M36 130 Q55 120, 74 110" stroke="#2D5B3F" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      {/* Blad 2 - nedre höger */}
      <ellipse cx="145" cy="120" rx="24" ry="9" fill="#3D6B4F" opacity="0.15" transform="rotate(30 145 120)" />
      <ellipse cx="145" cy="120" rx="24" ry="9" stroke="#2D5B3F" strokeWidth="1.8" strokeLinecap="round" fill="none" transform="rotate(30 145 120)" />
      <path d="M126 110 Q145 120, 164 130" stroke="#2D5B3F" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      {/* Blad 3 - mellannivå vänster */}
      <ellipse cx="58" cy="88" rx="22" ry="8" fill="#3D6B4F" opacity="0.20" transform="rotate(-20 58 88)" />
      <ellipse cx="58" cy="88" rx="22" ry="8" stroke="#2D5B3F" strokeWidth="1.6" strokeLinecap="round" fill="none" transform="rotate(-20 58 88)" />
      <path d="M40 94 Q58 88, 76 82" stroke="#2D5B3F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      {/* Blad 4 - mellannivå höger */}
      <ellipse cx="145" cy="86" rx="22" ry="8" fill="#3D6B4F" opacity="0.16" transform="rotate(20 145 86)" />
      <ellipse cx="145" cy="86" rx="22" ry="8" stroke="#2D5B3F" strokeWidth="1.6" strokeLinecap="round" fill="none" transform="rotate(20 145 86)" />
      <path d="M127 80 Q145 86, 163 92" stroke="#2D5B3F" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      {/* Blad 5 - övre vänster */}
      <ellipse cx="72" cy="66" rx="20" ry="7" fill="#3D6B4F" opacity="0.18" transform="rotate(-15 72 66)" />
      <ellipse cx="72" cy="66" rx="20" ry="7" stroke="#2D5B3F" strokeWidth="1.4" strokeLinecap="round" fill="none" transform="rotate(-15 72 66)" />
      {/* Blad 6 - övre höger */}
      <ellipse cx="128" cy="66" rx="20" ry="7" fill="#3D6B4F" opacity="0.16" transform="rotate(15 128 66)" />
      <ellipse cx="128" cy="66" rx="20" ry="7" stroke="#2D5B3F" strokeWidth="1.4" strokeLinecap="round" fill="none" transform="rotate(15 128 66)" />
      {/* Blad 7 - topp vänster */}
      <ellipse cx="82" cy="52" rx="16" ry="6" fill="#4A7A5A" opacity="0.17" transform="rotate(-10 82 52)" />
      <ellipse cx="82" cy="52" rx="16" ry="6" stroke="#2D5B3F" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="rotate(-10 82 52)" />
      {/* Blad 8 - topp höger */}
      <ellipse cx="112" cy="48" rx="16" ry="6" fill="#4A7A5A" opacity="0.15" transform="rotate(10 112 48)" />
      <ellipse cx="112" cy="48" rx="16" ry="6" stroke="#2D5B3F" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="rotate(10 112 48)" />
      {/* Toppskott */}
      <path d="M92 75 Q90 62, 88 48 Q86 38, 84 30" stroke="#4A7A5A" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="86" cy="34" rx="10" ry="4.5" fill="#4A7A5A" opacity="0.16" transform="rotate(-5 86 34)" />
      <ellipse cx="86" cy="34" rx="10" ry="4.5" stroke="#2D5B3F" strokeWidth="1.0" strokeLinecap="round" fill="none" transform="rotate(-5 86 34)" />
      <ellipse cx="92" cy="26" rx="8" ry="3.5" fill="#5A8A6A" opacity="0.15" transform="rotate(5 92 26)" />
      <ellipse cx="92" cy="26" rx="8" ry="3.5" stroke="#2D5B3F" strokeWidth="1.0" strokeLinecap="round" fill="none" transform="rotate(5 92 26)" />
      {/* Glansig yta (lagerblad är läderartat och glansigt) */}
      <ellipse cx="60" cy="86" rx="5" ry="2.5" fill="white" opacity="0.08" transform="rotate(-20 60 86)" />
      <ellipse cx="142" cy="84" rx="5" ry="2.5" fill="white" opacity="0.06" transform="rotate(20 142 84)" />
      <ellipse cx="58" cy="118" rx="5" ry="2.5" fill="white" opacity="0.07" transform="rotate(-30 58 118)" />
      {/* Ljusreflexer */}
      <ellipse cx="70" cy="100" rx="3" ry="6" fill={colors.accentLight} opacity="0.06" transform="rotate(-10 70 100)" />
      {/* Markprickar */}
      <circle cx="88" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="100" cy="188" r="2" fill={colors.earth} opacity="0.15" />
      <circle cx="112" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="82" cy="190" r="1" fill={colors.earth} opacity="0.12" />
      <circle cx="118" cy="190" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function BayLeafIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Vedartad stam */}
      <path d="M24 44 C24 40, 24 36, 24 32" stroke="#8B7355" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 32 C24 28, 24 24, 23 20" stroke="#7A6B4F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Blad vänster nedre */}
      <ellipse cx="14" cy="30" rx="10" ry="4" stroke="#2D5B3F" strokeWidth="1.4" strokeLinecap="round" fill="none" transform="rotate(-25 14 30)" />
      <ellipse cx="14" cy="30" rx="10" ry="4" fill="#3D6B4F" opacity="0.18" transform="rotate(-25 14 30)" />
      {/* Blad höger nedre */}
      <ellipse cx="34" cy="30" rx="10" ry="4" stroke="#2D5B3F" strokeWidth="1.4" strokeLinecap="round" fill="none" transform="rotate(25 34 30)" />
      <ellipse cx="34" cy="30" rx="10" ry="4" fill="#3D6B4F" opacity="0.15" transform="rotate(25 34 30)" />
      {/* Blad vänster övre */}
      <ellipse cx="16" cy="18" rx="8" ry="3.5" stroke="#2D5B3F" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="rotate(-15 16 18)" />
      <ellipse cx="16" cy="18" rx="8" ry="3.5" fill="#3D6B4F" opacity="0.17" transform="rotate(-15 16 18)" />
      {/* Blad höger övre */}
      <ellipse cx="32" cy="18" rx="8" ry="3.5" stroke="#2D5B3F" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="rotate(15 32 18)" />
      <ellipse cx="32" cy="18" rx="8" ry="3.5" fill="#3D6B4F" opacity="0.15" transform="rotate(15 32 18)" />
      {/* Toppblad */}
      <ellipse cx="22" cy="10" rx="6" ry="2.8" stroke="#2D5B3F" strokeWidth="1.0" strokeLinecap="round" fill="none" transform="rotate(-5 22 10)" />
      <ellipse cx="22" cy="10" rx="6" ry="2.8" fill="#4A7A5A" opacity="0.16" transform="rotate(-5 22 10)" />
      <ellipse cx="28" cy="6" rx="5" ry="2.5" stroke="#2D5B3F" strokeWidth="1.0" strokeLinecap="round" fill="none" transform="rotate(5 28 6)" />
      <ellipse cx="28" cy="6" rx="5" ry="2.5" fill="#4A7A5A" opacity="0.14" transform="rotate(5 28 6)" />
      {/* Glans */}
      <ellipse cx="15" cy="17" rx="2" ry="1" fill="white" opacity="0.08" transform="rotate(-15 15 17)" />
    </svg>
  )
}
