import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function FennelIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <circle cx="100" cy="100" r="90" fill="#C8DEC9" opacity="0.15" />

      {/* Markskugga */}
      <ellipse cx="100" cy="178" rx="35" ry="5" fill={colors.earth} opacity="0.08" />

      {/* Rotspets */}
      <path d="M100 176 Q99 184 98 190" stroke="#A0987A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M100 176 Q101 182 103 186" stroke="#A0987A" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

      {/* Knol - huvudform */}
      <path d="M68 148 Q60 132 64 116 Q68 102 100 98 Q132 102 136 116 Q140 132 132 148 Q124 168 100 172 Q76 168 68 148 Z" fill="#E8E0D0" opacity="0.18" />
      <path d="M68 148 Q60 132 64 116 Q68 102 100 98 Q132 102 136 116 Q140 132 132 148 Q124 168 100 172 Q76 168 68 148 Z" stroke="#A0987A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Knolens overlappande lager - vanster */}
      <path d="M76 156 Q68 140 72 120 Q76 108 92 104" stroke="#A0987A" strokeWidth="1.0" strokeLinecap="round" opacity="0.20" fill="none" />
      <path d="M82 160 Q74 142 78 124 Q80 112 96 106" stroke="#A0987A" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" fill="none" />

      {/* Knolens overlappande lager - hoger */}
      <path d="M124 156 Q132 140 128 120 Q124 108 108 104" stroke="#A0987A" strokeWidth="1.0" strokeLinecap="round" opacity="0.20" fill="none" />
      <path d="M118 160 Q126 142 122 124 Q120 112 104 106" stroke="#A0987A" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" fill="none" />

      {/* Mittlinje pa knolen */}
      <path d="M100 104 L100 168" stroke="#A0987A" strokeWidth="0.7" strokeLinecap="round" opacity="0.14" />

      {/* Ljusreflex pa knolen for volym */}
      <ellipse cx="88" cy="128" rx="12" ry="18" fill="#F0EBE0" opacity="0.20" />

      {/* Stjalkbas - dar stjalkarna mots */}
      <path d="M88 102 Q92 96 100 94 Q108 96 112 102" stroke="#A0987A" strokeWidth="1.4" strokeLinecap="round" fill="none" />

      {/* Vanster stjalk */}
      <path d="M82 98 Q78 78 76 58" stroke="#B8C8A0" strokeWidth="3" strokeLinecap="round" />
      <path d="M82 98 Q78 78 76 58" stroke="#C4D4B0" strokeWidth="1.8" strokeLinecap="round" opacity="0.14" />

      {/* Mittenstjalk */}
      <path d="M100 94 Q100 72 100 48" stroke="#B8C8A0" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M100 94 Q100 72 100 48" stroke="#C4D4B0" strokeWidth="1.8" strokeLinecap="round" opacity="0.14" />

      {/* Hoger stjalk */}
      <path d="M118 98 Q122 78 124 58" stroke="#B8C8A0" strokeWidth="3" strokeLinecap="round" />
      <path d="M118 98 Q122 78 124 58" stroke="#C4D4B0" strokeWidth="1.8" strokeLinecap="round" opacity="0.14" />

      {/* Fjaderblad vanster stjalk - fina vispiga linjer */}
      <path d="M76 58 Q62 48 52 38" stroke="#3D6B4F" strokeWidth="1.0" strokeLinecap="round" opacity="0.5" />
      <path d="M76 56 Q64 50 56 44" stroke="#4A7A5C" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M76 62 Q60 56 48 48" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M76 54 Q68 44 58 32" stroke="#4A7A5C" strokeWidth="1.0" strokeLinecap="round" opacity="0.45" />
      <path d="M76 66 Q64 62 54 56" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.30" />
      <path d="M76 52 Q72 40 66 28" stroke="#4A7A5C" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />

      {/* Fjaderblad mittenstjalk - toppen */}
      <path d="M100 48 Q92 34 82 22" stroke="#3D6B4F" strokeWidth="1.0" strokeLinecap="round" opacity="0.5" />
      <path d="M100 48 Q108 34 118 22" stroke="#3D6B4F" strokeWidth="1.0" strokeLinecap="round" opacity="0.5" />
      <path d="M100 46 Q90 36 78 28" stroke="#4A7A5C" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M100 46 Q110 36 122 28" stroke="#4A7A5C" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M100 44 Q96 30 90 18" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M100 44 Q104 30 110 18" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M100 50 Q94 40 86 32" stroke="#4A7A5C" strokeWidth="0.7" strokeLinecap="round" opacity="0.30" />
      <path d="M100 50 Q106 40 114 32" stroke="#4A7A5C" strokeWidth="0.7" strokeLinecap="round" opacity="0.30" />

      {/* Fjaderblad hoger stjalk - fina vispiga linjer */}
      <path d="M124 58 Q138 48 148 38" stroke="#3D6B4F" strokeWidth="1.0" strokeLinecap="round" opacity="0.5" />
      <path d="M124 56 Q136 50 144 44" stroke="#4A7A5C" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M124 62 Q140 56 152 48" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M124 54 Q132 44 142 32" stroke="#4A7A5C" strokeWidth="1.0" strokeLinecap="round" opacity="0.45" />
      <path d="M124 66 Q136 62 146 56" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.30" />
      <path d="M124 52 Q128 40 134 28" stroke="#4A7A5C" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />

      {/* Markprickar */}
      <circle cx="72" cy="182" r="1.5" fill={colors.earth} opacity="0.20" />
      <circle cx="128" cy="180" r="1.0" fill={colors.earth} opacity="0.15" />
      <circle cx="92" cy="185" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="110" cy="183" r="0.8" fill={colors.earth} opacity="0.15" />
    </svg>
  )
}

export function FennelIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Knol */}
      <path d="M14 36 Q12 30 13 24 Q15 19 24 18 Q33 19 35 24 Q36 30 34 36 Q30 42 24 43 Q18 42 14 36 Z" fill="#E8E0D0" opacity="0.18" />
      <path d="M14 36 Q12 30 13 24 Q15 19 24 18 Q33 19 35 24 Q36 30 34 36 Q30 42 24 43 Q18 42 14 36 Z" stroke="#A0987A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Knolens lagerlinjer */}
      <path d="M18 38 Q16 30 18 24 Q20 20 24 19" stroke="#A0987A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" fill="none" />
      <path d="M30 38 Q32 30 30 24 Q28 20 24 19" stroke="#A0987A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" fill="none" />

      {/* Vanster stjalk */}
      <path d="M20 20 Q18 14 17 8" stroke="#B8C8A0" strokeWidth="2.2" strokeLinecap="round" />

      {/* Mittenstjalk */}
      <path d="M24 18 Q24 12 24 6" stroke="#B8C8A0" strokeWidth="2.4" strokeLinecap="round" />

      {/* Fjaderblad - forenklad */}
      <path d="M17 8 Q12 4 8 2" stroke="#3D6B4F" strokeWidth="1.0" strokeLinecap="round" opacity="0.5" />
      <path d="M17 10 Q10 8 6 6" stroke="#4A7A5C" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M24 6 Q20 2 16 0" stroke="#3D6B4F" strokeWidth="1.0" strokeLinecap="round" opacity="0.5" />
      <path d="M24 6 Q28 2 32 0" stroke="#3D6B4F" strokeWidth="1.0" strokeLinecap="round" opacity="0.5" />

      {/* Ljusreflex */}
      <ellipse cx="20" cy="28" rx="4" ry="6" fill="#F0EBE0" opacity="0.20" />
    </svg>
  )
}
