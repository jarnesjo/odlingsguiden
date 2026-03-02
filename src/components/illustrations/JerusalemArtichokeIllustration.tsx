import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function JerusalemArtichokeIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <circle cx="100" cy="100" r="90" fill="#C8DEC9" opacity="0.15" />

      {/* Markskugga */}
      <ellipse cx="100" cy="176" rx="42" ry="6" fill={colors.earth} opacity="0.08" />

      {/* Liten solrosblomma pa stjalk */}
      <path d="M72 42 Q74 58 78 68" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Blomblad */}
      <path d="M72 42 Q68 34 72 28 Q76 34 72 42 Z" fill="#D4A830" opacity="0.15" stroke="#D4A830" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M72 42 Q64 38 60 34 Q66 32 72 42 Z" fill="#D4A830" opacity="0.15" stroke="#D4A830" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M72 42 Q80 38 84 34 Q78 32 72 42 Z" fill="#D4A830" opacity="0.15" stroke="#D4A830" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M72 42 Q66 46 60 44 Q64 40 72 42 Z" fill="#D4A830" opacity="0.12" stroke="#D4A830" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M72 42 Q78 46 84 44 Q80 40 72 42 Z" fill="#D4A830" opacity="0.12" stroke="#D4A830" strokeWidth="0.8" strokeLinecap="round" />
      {/* Blomkorg */}
      <circle cx="72" cy="42" r="4" fill="#C4956A" opacity="0.18" stroke="#9B7A4A" strokeWidth="0.8" />

      {/* Blad pa stjalk */}
      <path d="M75 60 Q86 52 92 56" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M75 60 Q86 52 92 56 Q84 58 75 60 Z" fill="#3D6B4F" opacity="0.14" />

      {/* Kort skott fran knolen uppat */}
      <path d="M90 84 Q84 76 78 68" stroke="#3D6B4F" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Huvudknol - oregelbunden knolig form */}
      <path d="M68 108 Q58 104 54 114 Q50 126 58 134 Q64 140 76 142 Q88 144 100 142 Q114 140 124 136 Q134 130 136 118 Q136 106 128 100 Q120 94 108 96 Q96 94 86 96 Q76 98 68 108 Z" fill="#C4A070" opacity="0.18" />
      <path d="M68 108 Q58 104 54 114 Q50 126 58 134 Q64 140 76 142 Q88 144 100 142 Q114 140 124 136 Q134 130 136 118 Q136 106 128 100 Q120 94 108 96 Q96 94 86 96 Q76 98 68 108 Z" stroke="#9B7A4A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Vanster knol - utskjutande knopp */}
      <path d="M58 116 Q48 110 44 118 Q42 128 50 132 Q56 134 58 128" fill="#C4A070" opacity="0.16" />
      <path d="M58 116 Q48 110 44 118 Q42 128 50 132 Q56 134 58 128" stroke="#9B7A4A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Hoger knol - utskjutande knopp */}
      <path d="M130 112 Q140 106 146 114 Q148 124 142 128 Q136 130 132 124" fill="#C4A070" opacity="0.16" />
      <path d="M130 112 Q140 106 146 114 Q148 124 142 128 Q136 130 132 124" stroke="#9B7A4A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Nedre knol - liten knopp nedat */}
      <path d="M92 142 Q88 150 92 156 Q98 160 104 154 Q106 148 102 142" fill="#C4A070" opacity="0.14" />
      <path d="M92 142 Q88 150 92 156 Q98 160 104 154 Q106 148 102 142" stroke="#9B7A4A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Ytlinjer for knolig textur */}
      <path d="M72 108 Q78 114 84 110" stroke="#9B7A4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M100 100 Q108 106 116 102" stroke="#9B7A4A" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />
      <path d="M66 124 Q74 130 82 126" stroke="#9B7A4A" strokeWidth="0.7" strokeLinecap="round" opacity="0.16" />
      <path d="M106 130 Q114 136 122 132" stroke="#9B7A4A" strokeWidth="0.7" strokeLinecap="round" opacity="0.16" />

      {/* Ljusreflex for volym */}
      <ellipse cx="82" cy="108" rx="14" ry="8" fill="#D4B88C" opacity="0.20" />
      <ellipse cx="116" cy="112" rx="10" ry="6" fill="#D4B88C" opacity="0.14" />

      {/* Sma rotharsstreck nerifran */}
      <path d="M76 156 Q74 164 72 168" stroke="#9B7A4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />
      <path d="M98 158 Q100 166 98 170" stroke="#9B7A4A" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" />
      <path d="M108 152 Q112 160 110 164" stroke="#9B7A4A" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" />

      {/* Markprickar */}
      <circle cx="68" cy="180" r="1.5" fill={colors.earth} opacity="0.20" />
      <circle cx="130" cy="178" r="1.0" fill={colors.earth} opacity="0.15" />
      <circle cx="94" cy="182" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="116" cy="182" r="0.8" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function JerusalemArtichokeIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Kort skott uppat */}
      <path d="M22 14 Q20 10 18 7" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Huvudknol - knolig form */}
      <path d="M14 24 Q10 20 10 26 Q10 34 16 37 Q22 40 28 38 Q34 36 38 30 Q40 24 36 20 Q32 16 26 18 Q20 17 14 24 Z" fill="#C4A070" opacity="0.18" />
      <path d="M14 24 Q10 20 10 26 Q10 34 16 37 Q22 40 28 38 Q34 36 38 30 Q40 24 36 20 Q32 16 26 18 Q20 17 14 24 Z" stroke="#9B7A4A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Vanster knopp */}
      <path d="M12 26 Q6 24 6 28 Q6 32 10 32" fill="#C4A070" opacity="0.14" />
      <path d="M12 26 Q6 24 6 28 Q6 32 10 32" stroke="#9B7A4A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Hoger knopp */}
      <path d="M36 24 Q42 22 42 28 Q42 30 38 30" fill="#C4A070" opacity="0.14" />
      <path d="M36 24 Q42 22 42 28 Q42 30 38 30" stroke="#9B7A4A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Texturlinje */}
      <path d="M18 26 Q22 30 26 26" stroke="#9B7A4A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />

      {/* Ljusreflex */}
      <ellipse cx="20" cy="24" rx="5" ry="3" fill="#D4B88C" opacity="0.20" />
    </svg>
  )
}
