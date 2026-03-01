import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function OreganoIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundsglöd */}
      <circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />

      {/* Huvudstam - vedartad bas som övergår till grön */}
      <path
        d="M100 185 C100 178, 99 170, 98 160 C97 148, 97 135, 97 125"
        stroke="#8B7355"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M97 125 C96 115, 95 105, 95 95 C95 85, 96 75, 97 65"
        stroke="#3D6B4F"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Vanster sidogren 1 (nedre) */}
      <path
        d="M98 155 C90 150, 78 145, 62 140"
        stroke="#7A6548"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Bladpar vänster nedre - ovala blad */}
      <ellipse cx="70" cy="142" rx="6" ry="4" fill="#6B7D3E" opacity="0.45" transform="rotate(-15 70 142)" />
      <ellipse cx="70" cy="142" rx="6" ry="4" fill="none" stroke="#4A6A2F" strokeWidth="0.8" opacity="0.3" transform="rotate(-15 70 142)" />
      <ellipse cx="62" cy="138" rx="5.5" ry="3.5" fill="#6B7D3E" opacity="0.4" transform="rotate(-10 62 138)" />
      <ellipse cx="80" cy="147" rx="5" ry="3.5" fill="#6B7D3E" opacity="0.45" transform="rotate(-20 80 147)" />
      <ellipse cx="88" cy="150" rx="4.5" ry="3" fill="#6B7D3E" opacity="0.4" transform="rotate(-25 88 150)" />

      {/* Hoger sidogren 1 (nedre) */}
      <path
        d="M100 150 C108 146, 122 142, 138 138"
        stroke="#7A6548"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <ellipse cx="130" cy="138" rx="6" ry="4" fill="#6B7D3E" opacity="0.45" transform="rotate(15 130 138)" />
      <ellipse cx="130" cy="138" rx="6" ry="4" fill="none" stroke="#4A6A2F" strokeWidth="0.8" opacity="0.3" transform="rotate(15 130 138)" />
      <ellipse cx="138" cy="136" rx="5.5" ry="3.5" fill="#6B7D3E" opacity="0.4" transform="rotate(10 138 136)" />
      <ellipse cx="120" cy="141" rx="5" ry="3.5" fill="#6B7D3E" opacity="0.45" transform="rotate(20 120 141)" />
      <ellipse cx="112" cy="144" rx="4.5" ry="3" fill="#6B7D3E" opacity="0.4" transform="rotate(25 112 144)" />

      {/* Vanster sidogren 2 (mitten) */}
      <path
        d="M97 125 C87 120, 70 114, 52 110"
        stroke="#3D6B4F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <ellipse cx="60" cy="110" rx="5.5" ry="3.5" fill="#7A9450" opacity="0.45" transform="rotate(-12 60 110)" />
      <ellipse cx="60" cy="110" rx="5.5" ry="3.5" fill="none" stroke="#4A6A2F" strokeWidth="0.8" opacity="0.25" transform="rotate(-12 60 110)" />
      <ellipse cx="52" cy="108" rx="5" ry="3" fill="#7A9450" opacity="0.4" transform="rotate(-8 52 108)" />
      <ellipse cx="70" cy="113" rx="5" ry="3.5" fill="#7A9450" opacity="0.45" transform="rotate(-18 70 113)" />
      <ellipse cx="80" cy="117" rx="4.5" ry="3" fill="#7A9450" opacity="0.4" transform="rotate(-22 80 117)" />

      {/* Hoger sidogren 2 (mitten) */}
      <path
        d="M98 120 C108 116, 124 112, 145 109"
        stroke="#3D6B4F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <ellipse cx="138" cy="108" rx="5.5" ry="3.5" fill="#7A9450" opacity="0.45" transform="rotate(12 138 108)" />
      <ellipse cx="138" cy="108" rx="5.5" ry="3.5" fill="none" stroke="#4A6A2F" strokeWidth="0.8" opacity="0.25" transform="rotate(12 138 108)" />
      <ellipse cx="145" cy="107" rx="5" ry="3" fill="#7A9450" opacity="0.4" transform="rotate(8 145 107)" />
      <ellipse cx="128" cy="111" rx="5" ry="3.5" fill="#7A9450" opacity="0.45" transform="rotate(18 128 111)" />
      <ellipse cx="118" cy="114" rx="4.5" ry="3" fill="#7A9450" opacity="0.4" transform="rotate(22 118 114)" />

      {/* Vanster sidogren 3 (övre) */}
      <path
        d="M96 100 C86 95, 68 90, 50 86"
        stroke="#3D6B4F"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <ellipse cx="56" cy="86" rx="5" ry="3.2" fill="#7A9450" opacity="0.45" transform="rotate(-10 56 86)" />
      <ellipse cx="50" cy="84" rx="4.5" ry="3" fill="#7A9450" opacity="0.4" transform="rotate(-6 50 84)" />
      <ellipse cx="66" cy="89" rx="5" ry="3" fill="#7A9450" opacity="0.45" transform="rotate(-15 66 89)" />
      <ellipse cx="76" cy="93" rx="4" ry="2.5" fill="#7A9450" opacity="0.4" transform="rotate(-20 76 93)" />

      {/* Hoger sidogren 3 (övre) */}
      <path
        d="M97 95 C107 91, 125 87, 148 85"
        stroke="#3D6B4F"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <ellipse cx="140" cy="84" rx="5" ry="3.2" fill="#7A9450" opacity="0.45" transform="rotate(10 140 84)" />
      <ellipse cx="148" cy="83" rx="4.5" ry="3" fill="#7A9450" opacity="0.4" transform="rotate(6 148 83)" />
      <ellipse cx="130" cy="86" rx="5" ry="3" fill="#7A9450" opacity="0.45" transform="rotate(15 130 86)" />
      <ellipse cx="120" cy="89" rx="4" ry="2.5" fill="#7A9450" opacity="0.4" transform="rotate(20 120 89)" />

      {/* Toppskott med blad */}
      <path
        d="M97 65 C96 58, 95 50, 96 42"
        stroke="#3D6B4F"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <ellipse cx="91" cy="58" rx="4.5" ry="3" fill="#8AA55E" opacity="0.45" transform="rotate(-15 91 58)" />
      <ellipse cx="101" cy="55" rx="4.5" ry="3" fill="#8AA55E" opacity="0.45" transform="rotate(15 101 55)" />
      <ellipse cx="90" cy="48" rx="3.5" ry="2.5" fill="#8AA55E" opacity="0.4" transform="rotate(-10 90 48)" />
      <ellipse cx="102" cy="45" rx="3.5" ry="2.5" fill="#8AA55E" opacity="0.4" transform="rotate(10 102 45)" />

      {/* Blomklasar - sma lila/rosa klasar i toppen */}
      {/* Blomklase topp */}
      <circle cx="96" cy="38" r="2.2" fill="#7B4B6A" opacity="0.5" />
      <circle cx="93" cy="35" r="1.8" fill="#9B6888" opacity="0.45" />
      <circle cx="99" cy="35" r="1.8" fill="#7B4B6A" opacity="0.5" />
      <circle cx="96" cy="32" r="2" fill="#9B6888" opacity="0.45" />
      <circle cx="94" cy="38" r="1.3" fill="#B08498" opacity="0.35" />
      <circle cx="98" cy="33" r="1.2" fill="#B08498" opacity="0.3" />

      {/* Blomklase vänster gren */}
      <circle cx="48" cy="83" r="1.8" fill="#7B4B6A" opacity="0.45" />
      <circle cx="46" cy="81" r="1.5" fill="#9B6888" opacity="0.4" />
      <circle cx="50" cy="81" r="1.3" fill="#7B4B6A" opacity="0.45" />
      <circle cx="48" cy="79" r="1.2" fill="#9B6888" opacity="0.35" />

      {/* Blomklase höger gren */}
      <circle cx="150" cy="83" r="1.8" fill="#7B4B6A" opacity="0.45" />
      <circle cx="152" cy="81" r="1.5" fill="#9B6888" opacity="0.4" />
      <circle cx="148" cy="81" r="1.3" fill="#7B4B6A" opacity="0.45" />
      <circle cx="150" cy="79" r="1.2" fill="#9B6888" opacity="0.35" />

      {/* Extra blomklase på mitten-grenar */}
      <circle cx="50" cy="107" r="1.5" fill="#7B4B6A" opacity="0.35" />
      <circle cx="48" cy="105" r="1.2" fill="#9B6888" opacity="0.3" />
      <circle cx="147" cy="106" r="1.5" fill="#7B4B6A" opacity="0.35" />
      <circle cx="149" cy="104" r="1.2" fill="#9B6888" opacity="0.3" />

      {/* Ljusreflexer */}
      <ellipse cx="66" cy="114" rx="5" ry="3" fill="#A8C87A" opacity="0.1" transform="rotate(-15 66 114)" />
      <ellipse cx="134" cy="112" rx="5" ry="3" fill="#A8C87A" opacity="0.08" transform="rotate(15 134 112)" />

      {/* Vedartad bas-detalj */}
      <path
        d="M97 165 C96 162, 95 158, 94 155"
        stroke="#6B5540"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M99 168 C100 165, 101 160, 101 155"
        stroke="#6B5540"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.2"
      />

      {/* Kruka */}
      <path
        d="M82 185 C82 178, 86 174, 100 174 C114 174, 118 178, 118 185"
        stroke={colors.warm}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M82 185 C82 178, 86 174, 100 174 C114 174, 118 178, 118 185"
        fill={colors.warm}
        opacity="0.1"
      />
      <line x1="80" y1="185" x2="120" y2="185" stroke={colors.warm} strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M86 174 C90 172, 96 171, 100 171 C104 171, 110 172, 114 174"
        stroke={colors.earth}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Grusdetaljer vid basen */}
      <circle cx="92" cy="173" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="108" cy="173" r="0.8" fill={colors.earth} opacity="0.12" />
      <circle cx="100" cy="172" r="0.6" fill={colors.earth} opacity="0.1" />
    </svg>
  )
}

export function OreganoIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Huvudstam - vedartad bas till grön */}
      <path d="M24 44 L24 32" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 32 L24 12" stroke="#3D6B4F" strokeWidth="1.6" strokeLinecap="round" />

      {/* Nedre bladpar */}
      <ellipse cx="18" cy="34" rx="4.5" ry="3" fill="#6B7D3E" opacity="0.45" transform="rotate(-15 18 34)" />
      <ellipse cx="18" cy="34" rx="4.5" ry="3" fill="none" stroke="#4A6A2F" strokeWidth="0.8" opacity="0.3" transform="rotate(-15 18 34)" />
      <ellipse cx="30" cy="33" rx="4.5" ry="3" fill="#6B7D3E" opacity="0.45" transform="rotate(15 30 33)" />
      <ellipse cx="30" cy="33" rx="4.5" ry="3" fill="none" stroke="#4A6A2F" strokeWidth="0.8" opacity="0.3" transform="rotate(15 30 33)" />

      {/* Mellersta bladpar */}
      <path d="M23 26 C18 24, 12 22, 8 21" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="10" cy="20" rx="4" ry="2.5" fill="#7A9450" opacity="0.45" transform="rotate(-10 10 20)" />
      <ellipse cx="16" cy="22" rx="3.5" ry="2.2" fill="#7A9450" opacity="0.4" transform="rotate(-15 16 22)" />
      <path d="M25 26 C30 24, 36 22, 40 21" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="38" cy="20" rx="4" ry="2.5" fill="#7A9450" opacity="0.45" transform="rotate(10 38 20)" />
      <ellipse cx="32" cy="22" rx="3.5" ry="2.2" fill="#7A9450" opacity="0.4" transform="rotate(15 32 22)" />

      {/* Övre bladpar */}
      <ellipse cx="20" cy="16" rx="3.5" ry="2.2" fill="#8AA55E" opacity="0.45" transform="rotate(-12 20 16)" />
      <ellipse cx="28" cy="15" rx="3.5" ry="2.2" fill="#8AA55E" opacity="0.45" transform="rotate(12 28 15)" />

      {/* Lila-rosa blomklasar i toppen */}
      <circle cx="24" cy="9" r="2" fill="#7B4B6A" opacity="0.5" />
      <circle cx="22" cy="7" r="1.5" fill="#9B6888" opacity="0.45" />
      <circle cx="26" cy="7" r="1.5" fill="#7B4B6A" opacity="0.5" />
      <circle cx="24" cy="6" r="1" fill="#B08498" opacity="0.35" />
    </svg>
  )
}
