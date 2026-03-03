import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function CranberryIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Ground/bog line */}
      <path d="M20 148 Q50 146, 80 147 Q110 148, 140 146 Q170 145, 180 147" stroke="#5C4033" strokeWidth="1" strokeLinecap="round" opacity="0.15" />

      {/* Main trailing vine - cranberry creeps along ground */}
      <path d="M25 130 Q50 128, 80 126 Q110 124, 140 126 Q165 128, 180 130" stroke="#6B4033" strokeWidth="2" strokeLinecap="round" />

      {/* Upright fruiting stems */}
      <path d="M55 127 Q54 114, 52 100 Q51 90, 50 78" stroke="#6B4033" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M100 125 Q99 112, 98 98 Q97 88, 96 76" stroke="#6B4033" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M145 127 Q144 114, 142 100 Q141 90, 140 78" stroke="#6B4033" strokeWidth="1.5" strokeLinecap="round" />

      {/* Small evergreen leaves - alternating on stems */}
      {/* Left stem leaves */}
      <path d="M52 112 Q45 108, 38 108 Q43 106, 50 108" stroke="#2D5A3F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M53 104 Q58 100, 66 100 Q60 98, 53 100" stroke="#2D5A3F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M52 94 Q44 90, 38 90 Q44 88, 50 90" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M51 86 Q56 82, 62 82 Q58 80, 51 82" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Center stem leaves */}
      <path d="M99 108 Q92 104, 86 104 Q91 102, 98 104" stroke="#2D5A3F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M98 100 Q104 96, 112 96 Q106 94, 98 96" stroke="#2D5A3F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M97 92 Q90 88, 84 88 Q90 86, 96 88" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M97 84 Q102 80, 108 80 Q104 78, 97 80" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Right stem leaves */}
      <path d="M142 110 Q136 106, 130 106 Q135 104, 141 106" stroke="#2D5A3F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M142 102 Q148 98, 154 98 Q150 96, 142 98" stroke="#2D5A3F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M141 92 Q134 88, 128 88 Q134 86, 140 88" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* Berry stems (short, from fruiting stems) */}
      <path d="M50 78 Q46 74, 42 72" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />
      <path d="M50 78 Q54 74, 58 72" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />

      <path d="M96 76 Q92 72, 86 70" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />
      <path d="M96 76 Q100 72, 106 70" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />
      <path d="M96 76 Q96 70, 96 64" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />

      <path d="M140 78 Q136 74, 132 72" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />
      <path d="M140 78 Q144 74, 148 72" stroke="#6B8B4F" strokeWidth="1" strokeLinecap="round" />

      {/* --- Cranberries - deep red, round --- */}

      {/* Left cluster */}
      <circle cx="40" cy="70" r="9" fill="#B01020" opacity="0.3" />
      <circle cx="40" cy="70" r="9" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <ellipse cx="36" cy="66" rx="3" ry="3.5" fill="#D85050" opacity="0.25" />
      {/* Calyx */}
      <path d="M37 62 L35 60 M40 61 L40 59 M43 62 L45 60" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      <circle cx="60" cy="68" r="8.5" fill="#B01020" opacity="0.3" />
      <circle cx="60" cy="68" r="8.5" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <ellipse cx="56" cy="64" rx="2.5" ry="3" fill="#D85050" opacity="0.25" />

      {/* Center cluster */}
      <circle cx="84" cy="66" r="9" fill="#B01020" opacity="0.3" />
      <circle cx="84" cy="66" r="9" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <ellipse cx="80" cy="62" rx="3" ry="3.5" fill="#D85050" opacity="0.25" />
      {/* Calyx */}
      <path d="M81 58 L79 56 M84 57 L84 55 M87 58 L89 56" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      <circle cx="108" cy="66" r="8.5" fill="#B01020" opacity="0.3" />
      <circle cx="108" cy="66" r="8.5" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <ellipse cx="104" cy="62" rx="2.5" ry="3" fill="#D85050" opacity="0.25" />

      <circle cx="96" cy="58" r="8" fill="#C01828" opacity="0.28" />
      <circle cx="96" cy="58" r="8" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <ellipse cx="92" cy="54" rx="2.5" ry="3" fill="#D85050" opacity="0.2" />

      {/* Right cluster */}
      <circle cx="130" cy="68" r="8.5" fill="#B01020" opacity="0.3" />
      <circle cx="130" cy="68" r="8.5" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <ellipse cx="126" cy="64" rx="2.5" ry="3" fill="#D85050" opacity="0.25" />
      {/* Calyx */}
      <path d="M127 60 L125 58 M130 59 L130 57 M133 60 L135 58" stroke="#5C4033" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      <circle cx="150" cy="68" r="8" fill="#B01020" opacity="0.28" />
      <circle cx="150" cy="68" r="8" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <ellipse cx="146" cy="64" rx="2.5" ry="3" fill="#D85050" opacity="0.22" />

      {/* Ground/bog texture dots */}
      <circle cx="35" cy="142" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="60" cy="144" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="85" cy="142" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="110" cy="143" r="1" fill={colors.earth} opacity="0.12" />
      <circle cx="140" cy="142" r="1.3" fill={colors.earth} opacity="0.16" />
      <circle cx="165" cy="143" r="1" fill={colors.earth} opacity="0.14" />
    </svg>
  )
}

export function CranberryIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Trailing vine */}
      <path d="M6 30 Q16 28, 24 28 Q32 28, 42 30" stroke="#6B4033" strokeWidth="1.5" strokeLinecap="round" />

      {/* Short upright stem */}
      <path d="M24 28 Q23 20, 22 14" stroke="#6B4033" strokeWidth="1.3" strokeLinecap="round" />

      {/* Tiny leaves */}
      <path d="M23 22 Q18 20, 14 20 Q18 18, 22 20" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M23 18 Q28 16, 32 16 Q28 14, 23 16" stroke="#2D5A3F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Berry stems */}
      <path d="M22 14 Q18 10, 14 10" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <path d="M22 14 Q26 10, 32 10" stroke="#6B8B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />

      {/* Berry left */}
      <circle cx="12" cy="10" r="6" fill="#B01020" opacity="0.3" />
      <circle cx="12" cy="10" r="6" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <ellipse cx="10" cy="8" rx="2" ry="2.5" fill="#D85050" opacity="0.25" />

      {/* Berry right */}
      <circle cx="34" cy="10" r="6" fill="#B01020" opacity="0.3" />
      <circle cx="34" cy="10" r="6" stroke="#8B0C18" strokeWidth="1.8" fill="none" />
      <ellipse cx="32" cy="8" rx="2" ry="2.5" fill="#D85050" opacity="0.25" />

      {/* Calyx hints */}
      <path d="M10 4 L9 2 M12 4 L12 2 M14 4 L15 2" stroke="#5C4033" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <path d="M32 4 L31 2 M34 4 L34 2 M36 4 L37 2" stroke="#5C4033" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}
