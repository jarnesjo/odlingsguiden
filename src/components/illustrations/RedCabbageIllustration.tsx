import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function RedCabbageIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <circle cx="100" cy="100" r="90" fill="#C8DEC9" opacity="0.15" />

      {/* Markskugga */}
      <ellipse cx="100" cy="178" rx="38" ry="6" fill={colors.earth} opacity="0.08" />

      {/* Kort stam */}
      <path d="M100 173 L100 158" stroke="#8B7355" strokeWidth="3.5" strokeLinecap="round" />

      {/* Yttre vanster blad - stort, omslutande */}
      <path d="M94 168 Q52 158 38 132 Q30 115 42 98 Q52 85 68 90 Q78 94 82 105 Q86 115 88 128" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M94 168 Q52 158 38 132 Q30 115 42 98 Q52 85 68 90 Q78 94 82 105 Q86 115 88 128 L93 150 Z" fill="#3D6B4F" opacity="0.13" />
      {/* Vanster bladnerv */}
      <path d="M91 158 Q58 148 44 122" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />
      <path d="M87 148 Q62 138 52 118" stroke="#3D6B4F" strokeWidth="0.6" strokeLinecap="round" opacity="0.16" />

      {/* Yttre hoger blad - stort, omslutande */}
      <path d="M106 168 Q148 158 162 132 Q170 115 158 98 Q148 85 132 90 Q122 94 118 105 Q114 115 112 128" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M106 168 Q148 158 162 132 Q170 115 158 98 Q148 85 132 90 Q122 94 118 105 Q114 115 112 128 L107 150 Z" fill="#3D6B4F" opacity="0.13" />
      {/* Hoger bladnerv */}
      <path d="M109 158 Q142 148 156 122" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.22" />

      {/* Mellanblad vanster */}
      <path d="M90 148 Q62 136 56 112 Q52 96 64 84 Q74 76 86 82 Q93 87 94 98" stroke="#4A7A5C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M90 148 Q62 136 56 112 Q52 96 64 84 Q74 76 86 82 Q93 87 94 98 L95 125 Z" fill="#4A7A5C" opacity="0.11" />

      {/* Mellanblad hoger */}
      <path d="M110 148 Q138 136 144 112 Q148 96 136 84 Q126 76 114 82 Q107 87 106 98" stroke="#4A7A5C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M110 148 Q138 136 144 112 Q148 96 136 84 Q126 76 114 82 Q107 87 106 98 L105 125 Z" fill="#4A7A5C" opacity="0.11" />

      {/* Kalhuvud - djup basfyllning (lila-rod) */}
      <ellipse cx="100" cy="108" rx="46" ry="42" fill="#7B4B6A" opacity="0.14" />

      {/* Kalhuvud - huvudform (lila-rod) */}
      <path d="M56 108 Q56 72 100 68 Q144 72 144 108 Q144 140 100 144 Q56 140 56 108 Z" fill="#9B5A7A" opacity="0.16" />
      <path d="M56 108 Q56 72 100 68 Q144 72 144 108 Q144 140 100 144 Q56 140 56 108 Z" stroke="#7B4B6A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Inre bladlager - halvbladkurvor */}
      <path d="M68 130 Q62 112 72 94 Q80 80 100 78" stroke="#7B4B6A" strokeWidth="1.2" strokeLinecap="round" opacity="0.22" fill="none" />
      <path d="M132 130 Q138 112 128 94 Q120 80 100 78" stroke="#7B4B6A" strokeWidth="1.2" strokeLinecap="round" opacity="0.22" fill="none" />

      {/* Bladnerver fran mitten */}
      <path d="M100 108 Q82 100 72 88" stroke="#7B4B6A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M100 108 Q118 100 128 88" stroke="#7B4B6A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M100 108 Q96 88 100 78" stroke="#7B4B6A" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />
      <path d="M100 108 Q85 112 76 122" stroke="#7B4B6A" strokeWidth="0.7" strokeLinecap="round" opacity="0.16" />
      <path d="M100 108 Q115 112 124 122" stroke="#7B4B6A" strokeWidth="0.7" strokeLinecap="round" opacity="0.16" />

      {/* Tatare inre huvudet */}
      <ellipse cx="100" cy="100" rx="28" ry="26" fill="#B87A9A" opacity="0.14" />
      <path d="M72 100 Q74 80 100 76 Q126 80 128 100 Q126 120 100 124 Q74 120 72 100 Z" stroke="#8A5A7A" strokeWidth="1.0" strokeLinecap="round" fill="none" opacity="0.25" />

      {/* Innersta tata centrum */}
      <ellipse cx="100" cy="96" rx="16" ry="14" fill="#C890AA" opacity="0.18" />

      {/* Ljusreflex for volym */}
      <ellipse cx="88" cy="88" rx="14" ry="10" fill="#D8A0BA" opacity="0.22" />

      {/* Subtila ytlinjer pa huvudet */}
      <path d="M80 95 Q84 90 90 88" stroke="#7B4B6A" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />
      <path d="M78 105 Q82 100 88 98" stroke="#7B4B6A" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
      <path d="M120 95 Q116 90 110 88" stroke="#7B4B6A" strokeWidth="0.6" strokeLinecap="round" opacity="0.18" />

      {/* Markprickar */}
      <circle cx="74" cy="182" r="1.5" fill={colors.earth} opacity="0.20" />
      <circle cx="126" cy="180" r="1.0" fill={colors.earth} opacity="0.15" />
      <circle cx="90" cy="186" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="112" cy="184" r="0.8" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function RedCabbageIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Kort stam */}
      <path d="M24 43 L24 36" stroke="#8B7355" strokeWidth="2.5" strokeLinecap="round" />

      {/* Vanster yttre blad */}
      <path d="M22 40 Q10 36 8 26 Q6 18 12 14 Q16 11 20 14 Q22 17 22 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M22 40 Q10 36 8 26 Q6 18 12 14 Q16 11 20 14 Q22 17 22 22 L22 32 Z" fill="#3D6B4F" opacity="0.12" />

      {/* Hoger yttre blad */}
      <path d="M26 40 Q38 36 40 26 Q42 18 36 14 Q32 11 28 14 Q26 17 26 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M26 40 Q38 36 40 26 Q42 18 36 14 Q32 11 28 14 Q26 17 26 22 L26 32 Z" fill="#3D6B4F" opacity="0.12" />

      {/* Kalhuvud - rund form (lila-rod) */}
      <path d="M10 24 Q10 10 24 8 Q38 10 38 24 Q38 36 24 38 Q10 36 10 24 Z" fill="#9B5A7A" opacity="0.16" />
      <path d="M10 24 Q10 10 24 8 Q38 10 38 24 Q38 36 24 38 Q10 36 10 24 Z" stroke="#7B4B6A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Inre bladkurva vanster */}
      <path d="M15 30 Q13 22 18 15 Q22 10 24 10" stroke="#7B4B6A" strokeWidth="1.0" strokeLinecap="round" opacity="0.22" fill="none" />
      {/* Inre bladkurva hoger */}
      <path d="M33 30 Q35 22 30 15 Q26 10 24 10" stroke="#7B4B6A" strokeWidth="1.0" strokeLinecap="round" opacity="0.22" fill="none" />

      {/* Centernerver */}
      <path d="M24 24 Q18 20 15 16" stroke="#7B4B6A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M24 24 Q30 20 33 16" stroke="#7B4B6A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
      <path d="M24 24 Q24 16 24 11" stroke="#7B4B6A" strokeWidth="0.7" strokeLinecap="round" opacity="0.18" />

      {/* Ljusreflex */}
      <ellipse cx="20" cy="17" rx="5" ry="4" fill="#D8A0BA" opacity="0.22" />
    </svg>
  )
}
