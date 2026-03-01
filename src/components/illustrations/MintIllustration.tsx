import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function MintIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel (kryddor) */}
      <circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      {/* Huvudstjälk */}
      <path d="M100 185 Q100 165, 100 140 Q100 115, 98 90 Q96 65, 94 45" stroke="#4A7A3F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Sidogrenar vänster */}
      <path d="M98 130 Q88 124, 72 118" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M97 100 Q86 94, 68 90" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M96 72 Q88 68, 76 66" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" />
      {/* Sidogrenar höger */}
      <path d="M102 130 Q112 124, 128 118" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M100 100 Q112 94, 130 90" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M97 72 Q108 68, 122 66" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" />
      {/* Bladpar 1 (nederst) - vänster */}
      <path d="M72 118 Q58 112, 46 104 Q40 98, 44 92 Q50 88, 60 94 Q70 102, 72 118Z" fill="#5A8A3F" opacity="0.14" />
      <path d="M72 118 Q58 112, 46 104 Q40 98, 44 92 Q50 88, 60 94 Q70 102, 72 118" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Bladnerv vänster 1 */}
      <path d="M70 115 Q58 106, 48 98" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      {/* Tandad bladkant - vänster 1 */}
      <path d="M56 108 Q54 106, 52 108" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      <path d="M50 102 Q48 100, 46 102" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      {/* Bladpar 1 (nederst) - höger */}
      <path d="M128 118 Q142 112, 154 104 Q160 98, 156 92 Q150 88, 140 94 Q130 102, 128 118Z" fill="#5A8A3F" opacity="0.12" />
      <path d="M128 118 Q142 112, 154 104 Q160 98, 156 92 Q150 88, 140 94 Q130 102, 128 118" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Bladnerv höger 1 */}
      <path d="M130 115 Q142 106, 152 98" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      {/* Tandad bladkant - höger 1 */}
      <path d="M144 108 Q146 106, 148 108" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      <path d="M150 102 Q152 100, 154 102" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      {/* Bladpar 2 (mitten) - vänster */}
      <path d="M68 90 Q54 84, 44 76 Q38 72, 42 66 Q48 62, 56 68 Q64 76, 68 90Z" fill="#5A8A3F" opacity="0.16" />
      <path d="M68 90 Q54 84, 44 76 Q38 72, 42 66 Q48 62, 56 68 Q64 76, 68 90" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M66 87 Q54 80, 46 72" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      {/* Bladpar 2 (mitten) - höger */}
      <path d="M130 90 Q144 84, 154 76 Q160 72, 156 66 Q150 62, 142 68 Q134 76, 130 90Z" fill="#5A8A3F" opacity="0.14" />
      <path d="M130 90 Q144 84, 154 76 Q160 72, 156 66 Q150 62, 142 68 Q134 76, 130 90" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M132 87 Q144 80, 152 72" stroke="#3D7A2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      {/* Bladpar 3 (övre) - vänster */}
      <path d="M76 66 Q66 62, 58 56 Q54 52, 58 48 Q62 46, 68 52 Q74 58, 76 66Z" fill="#6B9E4A" opacity="0.15" />
      <path d="M76 66 Q66 62, 58 56 Q54 52, 58 48 Q62 46, 68 52 Q74 58, 76 66" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Bladpar 3 (övre) - höger */}
      <path d="M122 66 Q132 62, 140 56 Q144 52, 140 48 Q136 46, 130 52 Q124 58, 122 66Z" fill="#6B9E4A" opacity="0.13" />
      <path d="M122 66 Q132 62, 140 56 Q144 52, 140 48 Q136 46, 130 52 Q124 58, 122 66" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Toppskott - små blad */}
      <path d="M94 48 Q88 44, 84 38 Q82 34, 86 33 Q90 34, 92 40" stroke="#6B9E4A" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M84 38 Q82 34, 86 33 Q90 34, 92 40 Q88 36, 84 38" fill="#6B9E4A" opacity="0.1" />
      <path d="M96 46 Q100 42, 106 38 Q108 34, 106 33 Q102 34, 98 40" stroke="#6B9E4A" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M106 38 Q108 34, 106 33 Q102 34, 98 40 Q102 36, 106 38" fill="#6B9E4A" opacity="0.1" />
      {/* Blomkransar (lila-rosa, typiska för mynta) */}
      <circle cx="94" cy="52" r="4" fill="#B090C8" opacity="0.2" />
      <circle cx="92" cy="50" r="1.2" fill="#C8A8D8" opacity="0.4" />
      <circle cx="96" cy="50" r="1" fill="#C8A8D8" opacity="0.35" />
      <circle cx="94" cy="54" r="1" fill="#C8A8D8" opacity="0.35" />
      {/* Underjordiska utlöpare (hint om spridning) */}
      <path d="M90 185 Q80 190, 62 192 Q52 192, 46 188" stroke="#8B7355" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" strokeDasharray="4 3" />
      <path d="M110 185 Q120 190, 138 192 Q148 192, 154 188" stroke="#8B7355" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" strokeDasharray="4 3" />
      {/* Små skott från utlöpare */}
      <path d="M46 188 Q46 182, 48 178" stroke="#6B9E4A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M47 180 Q44 178, 42 176" stroke="#6B9E4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M48 180 Q50 178, 52 176" stroke="#6B9E4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M154 188 Q154 182, 152 178" stroke="#6B9E4A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M153 180 Q150 178, 148 176" stroke="#6B9E4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M153 180 Q156 178, 158 176" stroke="#6B9E4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      {/* Ljusreflexer */}
      <ellipse cx="58" cy="100" rx="5" ry="10" fill="#A8D48A" opacity="0.12" transform="rotate(-20 58 100)" />
      <ellipse cx="144" cy="100" rx="4" ry="8" fill="#A8D48A" opacity="0.1" transform="rotate(20 144 100)" />
      {/* Noddetaljer */}
      <ellipse cx="99" cy="130" rx="3" ry="2" fill="#3D7A2F" opacity="0.12" />
      <ellipse cx="99" cy="100" rx="2.5" ry="1.8" fill="#3D7A2F" opacity="0.12" />
      <ellipse cx="97" cy="72" rx="2" ry="1.5" fill="#3D7A2F" opacity="0.1" />
      {/* Kruka */}
      <path d="M78 185 Q78 176, 84 172 Q92 168, 100 168 Q108 168, 116 172 Q122 176, 122 185" stroke={colors.warm} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M78 185 Q78 176, 84 172 Q92 168, 100 168 Q108 168, 116 172 Q122 176, 122 185" fill={colors.warm} opacity="0.1" />
      <line x1="76" y1="185" x2="124" y2="185" stroke={colors.warm} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M84 172 Q92 170, 100 169 Q108 170, 116 172" stroke={colors.earth} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Markprickar */}
      <circle cx="88" cy="170" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="112" cy="170" r="0.8" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function MintIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Huvudstjälk */}
      <path d="M24 44 Q24 32, 24 20 Q24 14, 23 8" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Bladpar 1 - vänster */}
      <path d="M22 34 Q16 30, 10 26 Q8 24, 10 22 Q12 21, 16 25 Q20 30, 22 34Z" fill="#5A8A3F" opacity="0.14" />
      <path d="M22 34 Q16 30, 10 26 Q8 24, 10 22 Q12 21, 16 25 Q20 30, 22 34" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Bladpar 1 - höger */}
      <path d="M26 34 Q32 30, 38 26 Q40 24, 38 22 Q36 21, 32 25 Q28 30, 26 34Z" fill="#5A8A3F" opacity="0.12" />
      <path d="M26 34 Q32 30, 38 26 Q40 24, 38 22 Q36 21, 32 25 Q28 30, 26 34" stroke="#3D7A2F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Bladpar 2 - vänster */}
      <path d="M23 24 Q18 21, 13 18 Q11 16, 13 15 Q15 14, 18 17 Q22 21, 23 24Z" fill="#6B9E4A" opacity="0.14" />
      <path d="M23 24 Q18 21, 13 18 Q11 16, 13 15 Q15 14, 18 17 Q22 21, 23 24" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Bladpar 2 - höger */}
      <path d="M25 24 Q30 21, 35 18 Q37 16, 35 15 Q33 14, 30 17 Q26 21, 25 24Z" fill="#6B9E4A" opacity="0.12" />
      <path d="M25 24 Q30 21, 35 18 Q37 16, 35 15 Q33 14, 30 17 Q26 21, 25 24" stroke="#3D7A2F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Toppblad */}
      <path d="M23 12 Q20 10, 18 7 Q17 5, 19 5 Q21 6, 23 10" stroke="#6B9E4A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M24 12 Q27 10, 29 7 Q30 5, 28 5 Q26 6, 24 10" stroke="#6B9E4A" strokeWidth="1.2" strokeLinecap="round" />
      {/* Liten blomkrans */}
      <circle cx="23" cy="8" r="2.5" fill="#B090C8" opacity="0.25" />
      <circle cx="22" cy="7" r="0.7" fill="#C8A8D8" opacity="0.45" />
      <circle cx="24" cy="7" r="0.6" fill="#C8A8D8" opacity="0.4" />
    </svg>
  )
}
