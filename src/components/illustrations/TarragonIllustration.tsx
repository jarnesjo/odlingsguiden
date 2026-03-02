import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function TarragonIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      {/* Huvudstam */}
      <path d="M100 185 Q100 155, 100 125 Q100 95, 100 65 Q100 50, 100 38" stroke="#4A7A3F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Sidostammar - dragon har buskartat växtsätt */}
      <path d="M100 140 Q80 125, 58 115" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M100 130 Q120 115, 142 105" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M100 105 Q84 90, 65 80" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M100 95 Q116 80, 135 70" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M100 75 Q88 62, 74 52" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M100 65 Q112 52, 126 42" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" />
      {/* Diskreta blomklasar topp - dragon har små, oansenliga blommor */}
      <circle cx="100" cy="34" r="2" fill="#D4D88A" opacity="0.4" />
      <circle cx="97" cy="30" r="1.5" fill="#D4D88A" opacity="0.35" />
      <circle cx="103" cy="30" r="1.5" fill="#D4D88A" opacity="0.35" />
      <circle cx="100" cy="26" r="1.5" fill="#D4D88A" opacity="0.3" />
      {/* Smala, lansettlika blad - dragons karaktäristiska smala blad */}
      {/* Nedre bladpar vänster */}
      <path d="M58 115 Q46 112, 36 116 Q34 110, 38 106 Q44 104, 56 110" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M58 115 Q46 112, 36 116 Q34 110, 38 106 Q44 104, 56 110Z" fill="#5A8A3F" opacity="0.10" />
      <path d="M58 115 Q48 108, 40 100" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      {/* Nedre bladpar höger */}
      <path d="M142 105 Q154 102, 164 106 Q166 100, 162 96 Q156 94, 144 100" stroke="#3D7A2F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M142 105 Q154 102, 164 106 Q166 100, 162 96 Q156 94, 144 100Z" fill="#5A8A3F" opacity="0.08" />
      <path d="M142 105 Q152 98, 160 90" stroke="#6B8E4E" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      {/* Smala blad längs stammen - vänster */}
      <path d="M98 155 Q86 150, 72 152" stroke="#5A8A3F" strokeWidth="1.0" strokeLinecap="round" opacity="0.5" />
      <path d="M98 145 Q84 138, 68 140" stroke="#5A8A3F" strokeWidth="1.0" strokeLinecap="round" opacity="0.45" />
      <path d="M99 125 Q86 118, 70 118" stroke="#5A8A3F" strokeWidth="0.9" strokeLinecap="round" opacity="0.45" />
      <path d="M99 115 Q88 108, 72 106" stroke="#5A8A3F" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />
      {/* Smala blad längs stammen - höger */}
      <path d="M102 155 Q114 150, 128 152" stroke="#5A8A3F" strokeWidth="1.0" strokeLinecap="round" opacity="0.45" />
      <path d="M102 145 Q116 138, 132 140" stroke="#5A8A3F" strokeWidth="1.0" strokeLinecap="round" opacity="0.4" />
      <path d="M101 125 Q114 118, 130 118" stroke="#5A8A3F" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />
      <path d="M101 115 Q112 108, 128 106" stroke="#5A8A3F" strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
      {/* Övre smala blad */}
      <path d="M99 90 Q88 84, 72 84" stroke="#5A8A3F" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M99 82 Q86 76, 68 74" stroke="#5A8A3F" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M101 90 Q112 84, 128 84" stroke="#5A8A3F" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M101 82 Q114 76, 132 74" stroke="#5A8A3F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Mellersta grenar - blad */}
      <path d="M65 80 Q54 76, 42 78" stroke="#5A8A3F" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M65 80 Q56 72, 46 66" stroke="#5A8A3F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      <path d="M135 70 Q146 66, 158 68" stroke="#5A8A3F" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M135 70 Q144 62, 154 56" stroke="#5A8A3F" strokeWidth="0.7" strokeLinecap="round" opacity="0.28" />
      {/* Övre grenar - blad */}
      <path d="M74 52 Q64 48, 52 50" stroke="#5A8A3F" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />
      <path d="M126 42 Q136 38, 148 40" stroke="#5A8A3F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      {/* Toppblad */}
      <path d="M100 50 Q92 44, 82 42" stroke="#5A8A3F" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <path d="M100 50 Q108 44, 118 42" stroke="#5A8A3F" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />
      <path d="M100 42 Q94 36, 86 34" stroke="#5A8A3F" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <path d="M100 42 Q106 36, 114 34" stroke="#5A8A3F" strokeWidth="0.6" strokeLinecap="round" opacity="0.28" />
      {/* Ljusreflexer */}
      <ellipse cx="78" cy="120" rx="3" ry="8" fill={colors.accentLight} opacity="0.06" transform="rotate(-10 78 120)" />
      <ellipse cx="122" cy="110" rx="3" ry="8" fill={colors.accentLight} opacity="0.05" transform="rotate(10 122 110)" />
      {/* Markprickar */}
      <circle cx="88" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="100" cy="188" r="2" fill={colors.earth} opacity="0.15" />
      <circle cx="112" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="82" cy="190" r="1" fill={colors.earth} opacity="0.12" />
      <circle cx="118" cy="190" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function TarragonIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stam */}
      <path d="M24 44 Q24 32, 24 20 Q24 14, 24 8" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Sidogrenar */}
      <path d="M24 34 Q16 28, 8 24" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M24 28 Q32 22, 40 18" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M24 20 Q18 14, 12 10" stroke="#4A7A3F" strokeWidth="1.0" strokeLinecap="round" />
      <path d="M24 16 Q30 10, 36 6" stroke="#4A7A3F" strokeWidth="1.0" strokeLinecap="round" />
      {/* Diskreta blomnoppor */}
      <circle cx="24" cy="5" r="1.5" fill="#D4D88A" opacity="0.4" />
      <circle cx="23" cy="3" r="1" fill="#D4D88A" opacity="0.3" />
      <circle cx="25" cy="3" r="1" fill="#D4D88A" opacity="0.3" />
      {/* Smala blad vänster */}
      <path d="M23 38 Q16 36, 8 38" stroke="#5A8A3F" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M23 34 Q14 30, 6 30" stroke="#5A8A3F" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />
      <path d="M23 28 Q16 24, 8 22" stroke="#5A8A3F" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <path d="M23 24 Q16 20, 8 18" stroke="#5A8A3F" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />
      {/* Smala blad höger */}
      <path d="M25 38 Q32 36, 40 38" stroke="#5A8A3F" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />
      <path d="M25 34 Q34 30, 42 30" stroke="#5A8A3F" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M25 28 Q32 24, 40 22" stroke="#5A8A3F" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />
      <path d="M25 24 Q32 20, 40 18" stroke="#5A8A3F" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
      {/* Blad på grenar */}
      <path d="M8 24 Q4 20, 2 16" stroke="#5A8A3F" strokeWidth="0.6" strokeLinecap="round" opacity="0.35" />
      <path d="M40 18 Q44 14, 46 10" stroke="#5A8A3F" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <path d="M12 10 Q8 6, 4 4" stroke="#5A8A3F" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
      <path d="M36 6 Q40 2, 44 0" stroke="#5A8A3F" strokeWidth="0.5" strokeLinecap="round" opacity="0.25" />
    </svg>
  )
}
