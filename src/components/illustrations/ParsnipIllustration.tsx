import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function ParsnipIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* 1. Bakgrundscirkel - grönsak */}
      <circle cx="100" cy="100" r="90" fill={colors.accentLight} opacity="0.15" />

      {/* 2. Blast - central stjälk */}
      <path d="M100 72 L100 28" stroke="#3D6B4F" strokeWidth="2" strokeLinecap="round" />

      {/* Väster blast - stor fjäderbladgren */}
      <path d="M97 50 C90 40, 76 30, 60 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M97 50 C86 42, 72 38, 56 38" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />

      {/* Väster blast - bladskiva på stor gren */}
      <path d="M60 22 C65 24, 67 31, 63 37 C59 43, 53 39, 55 33 C57 27, 58 24, 60 22Z" fill="#3D6B4F" opacity="0.12" />

      {/* Väster blast - mindre gren */}
      <path d="M97 56 C88 44, 74 34, 62 26" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />

      {/* Östra blast - stor fjäderbladgren */}
      <path d="M103 50 C110 40, 124 30, 140 22" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M103 50 C114 42, 128 38, 144 38" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />

      {/* Östra blast - bladskiva på stor gren */}
      <path d="M140 22 C135 24, 133 31, 137 37 C141 43, 147 39, 145 33 C143 27, 142 24, 140 22Z" fill="#3D6B4F" opacity="0.12" />

      {/* Östra blast - mindre gren */}
      <path d="M103 56 C112 44, 126 34, 138 26" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />

      {/* Toppblast - liten centrumsgren */}
      <path d="M100 28 C98 18, 92 12, 85 7" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M100 28 C102 18, 108 12, 115 7" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M85 7 C82 5, 80 7, 81 10" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M115 7 C118 5, 120 7, 119 10" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

      {/* 3. Huvudkropp - palsternackan (bredare axlar än morot, trubbigare) */}
      {/* Fill - krämvit/ljusgul */}
      <path
        d="M82 76 C78 76, 74 80, 72 88 L67 116 C64 130, 67 148, 74 162 C79 172, 87 180, 96 185 C98 186, 102 186, 104 185 C113 180, 121 172, 126 162 C133 148, 136 130, 133 116 L128 88 C126 80, 122 76, 118 76 Z"
        fill="#DBC48A"
        opacity="0.18"
      />
      {/* Kontur - stroke */}
      <path
        d="M82 76 C78 76, 74 80, 72 88 L67 116 C64 130, 67 148, 74 162 C79 172, 87 180, 96 185 C98 186, 102 186, 104 185 C113 180, 121 172, 126 162 C133 148, 136 130, 133 116 L128 88 C126 80, 122 76, 118 76"
        stroke="#C4A86A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Rotspets med liten svans */}
      <path d="M96 185 C97 189, 99 193, 100 196" stroke="#C4A86A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M104 185 C103 189, 101 193, 100 196" stroke="#C4A86A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      {/* 4. Texturlinjer - horisontella ringar */}
      <path d="M83 90 C88 88, 112 88, 117 90" stroke="#C4A86A" strokeWidth="1" strokeLinecap="round" opacity="0.30" />
      <path d="M79 104 C85 102, 115 102, 121 104" stroke="#C4A86A" strokeWidth="1" strokeLinecap="round" opacity="0.28" />
      <path d="M73 120 C80 118, 120 118, 127 120" stroke="#C4A86A" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M72 136 C79 134, 121 134, 128 136" stroke="#C4A86A" strokeWidth="1" strokeLinecap="round" opacity="0.22" />
      <path d="M76 152 C82 150, 118 150, 124 152" stroke="#C4A86A" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
      <path d="M82 166 C87 164, 113 164, 118 166" stroke="#C4A86A" strokeWidth="1" strokeLinecap="round" opacity="0.14" />

      {/* 5. Ljusreflex - ger volym */}
      <path d="M87 82 C84 95, 82 118, 84 146" stroke="#F5E8C0" strokeWidth="3" strokeLinecap="round" opacity="0.22" />

      {/* 6. Birottar - tunna sidorottar */}
      <path d="M73 113 Q66 115 62 113" stroke="#C4A86A" strokeWidth="0.9" strokeLinecap="round" opacity="0.35" />
      <path d="M127 128 Q134 130 138 128" stroke="#C4A86A" strokeWidth="0.9" strokeLinecap="round" opacity="0.30" />
      <path d="M71 145 Q64 147 60 145" stroke="#C4A86A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Jordpartiklar */}
      <circle cx="75" cy="175" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="126" cy="172" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="90" cy="188" r="1.2" fill={colors.earth} opacity="0.2" />
      <circle cx="112" cy="185" r="0.8" fill={colors.earth} opacity="0.15" />

      {/* 7. Markskugga */}
      <ellipse cx="100" cy="188" rx="30" ry="4" fill={colors.earth} opacity="0.08" />
    </svg>
  )
}

export function ParsnipIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Blast - central stjälk */}
      <path d="M24 18 L24 8" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Väster blast */}
      <path d="M23 13 C20 9, 15 6, 11 4" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

      {/* Östra blast */}
      <path d="M25 13 C28 9, 33 6, 37 4" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

      {/* Toppgrenar */}
      <path d="M24 8 C22 5, 20 3, 18 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 8 C26 5, 28 3, 30 2" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" />

      {/* Kropp - fill */}
      <path
        d="M19 18 C17 18, 16 20, 15.5 23 L14 31 C13 36, 15 41, 18 44 C20 46, 24 47, 24 47 C24 47, 28 46, 30 44 C33 41, 35 36, 34 31 L32.5 23 C32 20, 31 18, 29 18 Z"
        fill="#DBC48A"
        opacity="0.20"
      />
      {/* Kropp - kontur */}
      <path
        d="M19 18 C17 18, 16 20, 15.5 23 L14 31 C13 36, 15 41, 18 44 C20 46, 24 47, 24 47 C24 47, 28 46, 30 44 C33 41, 35 36, 34 31 L32.5 23 C32 20, 31 18, 29 18"
        stroke="#C4A86A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Texturlinjer */}
      <path d="M15.5 26 C18 25, 30 25, 32.5 26" stroke="#C4A86A" strokeWidth="0.8" strokeLinecap="round" opacity="0.30" />
      <path d="M14.5 32 C17 31, 31 31, 33.5 32" stroke="#C4A86A" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <path d="M16 38 C18.5 37, 29.5 37, 32 38" stroke="#C4A86A" strokeWidth="0.8" strokeLinecap="round" opacity="0.20" />
    </svg>
  )
}
