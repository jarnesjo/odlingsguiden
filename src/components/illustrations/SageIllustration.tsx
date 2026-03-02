import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function SageIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      {/* Huvudstam - vedartad nertill */}
      <path d="M100 185 C100 175, 100 165, 100 155" stroke="#8B7355" strokeWidth="3" strokeLinecap="round" />
      <path d="M100 155 C100 145, 100 130, 99 115 C98 100, 98 85, 97 70" stroke="#6B8E4E" strokeWidth="2.4" strokeLinecap="round" />
      {/* Vänster sidostam */}
      <path d="M100 140 Q85 125, 68 115" stroke="#6B8E4E" strokeWidth="1.8" strokeLinecap="round" />
      {/* Höger sidostam */}
      <path d="M99 125 Q115 108, 135 100" stroke="#6B8E4E" strokeWidth="1.8" strokeLinecap="round" />
      {/* Blad 1 nedre vänster - elliptiskt, grågrönt */}
      <ellipse cx="58" cy="138" rx="22" ry="10" fill="#7A8F6B" opacity="0.15" transform="rotate(-25 58 138)" />
      <ellipse cx="58" cy="138" rx="22" ry="10" stroke="#6B8060" strokeWidth="1.8" strokeLinecap="round" fill="none" transform="rotate(-25 58 138)" />
      {/* Bladnerver */}
      <path d="M42 146 Q58 138, 74 130" stroke="#6B8060" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M48 148 Q56 142, 68 136" stroke="#6B8060" strokeWidth="0.5" strokeLinecap="round" opacity="0.15" />
      {/* Blad 2 nedre höger */}
      <ellipse cx="142" cy="138" rx="22" ry="10" fill="#7A8F6B" opacity="0.12" transform="rotate(25 142 138)" />
      <ellipse cx="142" cy="138" rx="22" ry="10" stroke="#6B8060" strokeWidth="1.8" strokeLinecap="round" fill="none" transform="rotate(25 142 138)" />
      <path d="M126 130 Q142 138, 158 146" stroke="#6B8060" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      {/* Blad 3 mellannivå vänster */}
      <ellipse cx="52" cy="112" rx="20" ry="9" fill="#7A8F6B" opacity="0.16" transform="rotate(-20 52 112)" />
      <ellipse cx="52" cy="112" rx="20" ry="9" stroke="#6B8060" strokeWidth="1.6" strokeLinecap="round" fill="none" transform="rotate(-20 52 112)" />
      <path d="M36 118 Q52 112, 68 106" stroke="#6B8060" strokeWidth="0.5" strokeLinecap="round" opacity="0.18" />
      {/* Blad 4 mellannivå höger */}
      <ellipse cx="148" cy="100" rx="20" ry="9" fill="#7A8F6B" opacity="0.13" transform="rotate(18 148 100)" />
      <ellipse cx="148" cy="100" rx="20" ry="9" stroke="#6B8060" strokeWidth="1.6" strokeLinecap="round" fill="none" transform="rotate(18 148 100)" />
      <path d="M132 94 Q148 100, 164 106" stroke="#6B8060" strokeWidth="0.5" strokeLinecap="round" opacity="0.18" />
      {/* Blad 5 övre vänster */}
      <ellipse cx="68" cy="86" rx="18" ry="8" fill="#7A8F6B" opacity="0.14" transform="rotate(-15 68 86)" />
      <ellipse cx="68" cy="86" rx="18" ry="8" stroke="#6B8060" strokeWidth="1.4" strokeLinecap="round" fill="none" transform="rotate(-15 68 86)" />
      {/* Blad 6 övre höger */}
      <ellipse cx="128" cy="78" rx="18" ry="8" fill="#7A8F6B" opacity="0.12" transform="rotate(15 128 78)" />
      <ellipse cx="128" cy="78" rx="18" ry="8" stroke="#6B8060" strokeWidth="1.4" strokeLinecap="round" fill="none" transform="rotate(15 128 78)" />
      {/* Toppblad */}
      <ellipse cx="82" cy="64" rx="14" ry="6" fill="#839E6E" opacity="0.14" transform="rotate(-10 82 64)" />
      <ellipse cx="82" cy="64" rx="14" ry="6" stroke="#6B8060" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="rotate(-10 82 64)" />
      <ellipse cx="112" cy="60" rx="14" ry="6" fill="#839E6E" opacity="0.12" transform="rotate(10 112 60)" />
      <ellipse cx="112" cy="60" rx="14" ry="6" stroke="#6B8060" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="rotate(10 112 60)" />
      {/* Blomställning - violetta blommor */}
      <path d="M97 70 Q96 58, 95 45 Q94 35, 93 25" stroke="#6B8E4E" strokeWidth="1.6" strokeLinecap="round" />
      {/* Blomkransar längs blomstjälken */}
      <circle cx="88" cy="46" r="3" fill="#8B6B9E" opacity="0.5" />
      <circle cx="98" cy="44" r="3" fill="#8B6B9E" opacity="0.5" />
      <circle cx="86" cy="38" r="2.8" fill="#9B7BAE" opacity="0.55" />
      <circle cx="96" cy="36" r="2.8" fill="#9B7BAE" opacity="0.55" />
      <circle cx="88" cy="30" r="2.5" fill="#AB8BBE" opacity="0.5" />
      <circle cx="96" cy="28" r="2.5" fill="#AB8BBE" opacity="0.5" />
      <circle cx="90" cy="22" r="2.2" fill="#AB8BBE" opacity="0.45" />
      <circle cx="96" cy="20" r="2.2" fill="#AB8BBE" opacity="0.45" />
      {/* Grå-grönt "ludd" på bladen (salvias karaktäristiska textur) */}
      <circle cx="50" cy="110" r="0.8" fill="#A0B090" opacity="0.3" />
      <circle cx="55" cy="108" r="0.8" fill="#A0B090" opacity="0.25" />
      <circle cx="60" cy="112" r="0.8" fill="#A0B090" opacity="0.3" />
      <circle cx="145" cy="98" r="0.8" fill="#A0B090" opacity="0.25" />
      <circle cx="150" cy="102" r="0.8" fill="#A0B090" opacity="0.3" />
      <circle cx="55" cy="136" r="0.8" fill="#A0B090" opacity="0.25" />
      <circle cx="62" cy="140" r="0.8" fill="#A0B090" opacity="0.3" />
      {/* Ljusreflexer */}
      <ellipse cx="65" cy="108" rx="3" ry="5" fill={colors.accentLight} opacity="0.08" transform="rotate(-15 65 108)" />
      <ellipse cx="140" cy="98" rx="3" ry="5" fill={colors.accentLight} opacity="0.06" transform="rotate(15 140 98)" />
      {/* Markprickar */}
      <circle cx="88" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="100" cy="188" r="2" fill={colors.earth} opacity="0.15" />
      <circle cx="112" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="82" cy="190" r="1" fill={colors.earth} opacity="0.12" />
      <circle cx="118" cy="190" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function SageIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Vedartad stam */}
      <path d="M24 44 C24 40, 24 36, 24 34" stroke="#8B7355" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 34 C24 28, 23.5 22, 23 16" stroke="#6B8E4E" strokeWidth="1.8" strokeLinecap="round" />
      {/* Blad vänster nedre */}
      <ellipse cx="14" cy="32" rx="9" ry="4.5" stroke="#6B8060" strokeWidth="1.4" strokeLinecap="round" fill="none" transform="rotate(-20 14 32)" />
      <ellipse cx="14" cy="32" rx="9" ry="4.5" fill="#7A8F6B" opacity="0.15" transform="rotate(-20 14 32)" />
      {/* Blad höger nedre */}
      <ellipse cx="34" cy="32" rx="9" ry="4.5" stroke="#6B8060" strokeWidth="1.4" strokeLinecap="round" fill="none" transform="rotate(20 34 32)" />
      <ellipse cx="34" cy="32" rx="9" ry="4.5" fill="#7A8F6B" opacity="0.12" transform="rotate(20 34 32)" />
      {/* Blad vänster övre */}
      <ellipse cx="16" cy="22" rx="7" ry="3.5" stroke="#6B8060" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="rotate(-15 16 22)" />
      <ellipse cx="16" cy="22" rx="7" ry="3.5" fill="#7A8F6B" opacity="0.14" transform="rotate(-15 16 22)" />
      {/* Blad höger övre */}
      <ellipse cx="32" cy="22" rx="7" ry="3.5" stroke="#6B8060" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="rotate(15 32 22)" />
      <ellipse cx="32" cy="22" rx="7" ry="3.5" fill="#7A8F6B" opacity="0.12" transform="rotate(15 32 22)" />
      {/* Blomställning - violetta prickar */}
      <circle cx="22" cy="12" r="2" fill="#8B6B9E" opacity="0.5" />
      <circle cx="26" cy="10" r="2" fill="#9B7BAE" opacity="0.5" />
      <circle cx="22" cy="6" r="1.8" fill="#AB8BBE" opacity="0.45" />
      <circle cx="26" cy="4" r="1.8" fill="#AB8BBE" opacity="0.4" />
    </svg>
  )
}
