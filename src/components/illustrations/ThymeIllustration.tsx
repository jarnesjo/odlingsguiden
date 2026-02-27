import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function ThymeIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundsglöd */}
      <circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />

      {/* Huvudstam - vedartad bas som övergår till grön */}
      <path
        d="M100 185 C100 178, 99 170, 98 160 C97 148, 96 135, 96 125"
        stroke="#8B7355"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M96 125 C95 115, 94 105, 94 95 C94 85, 95 75, 96 65"
        stroke="#6B8A4A"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Vänster sidogren 1 (nedre) */}
      <path
        d="M98 155 C90 150, 78 145, 65 142"
        stroke="#7A6548"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Småblad på vänster nedre gren */}
      <ellipse cx="72" cy="140" rx="4" ry="2.5" fill="#6B8A4A" opacity="0.5" transform="rotate(-15 72 140)" />
      <ellipse cx="72" cy="140" rx="4" ry="2.5" fill="none" stroke="#4A7A3F" strokeWidth="0.8" opacity="0.4" transform="rotate(-15 72 140)" />
      <ellipse cx="65" cy="139" rx="3.5" ry="2.2" fill="#6B8A4A" opacity="0.45" transform="rotate(-10 65 139)" />
      <ellipse cx="78" cy="143" rx="3.5" ry="2" fill="#6B8A4A" opacity="0.5" transform="rotate(-20 78 143)" />
      <ellipse cx="85" cy="147" rx="3" ry="2" fill="#6B8A4A" opacity="0.45" transform="rotate(-25 85 147)" />

      {/* Höger sidogren 1 (nedre) */}
      <path
        d="M100 150 C108 146, 120 142, 135 140"
        stroke="#7A6548"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <ellipse cx="128" cy="138" rx="4" ry="2.5" fill="#6B8A4A" opacity="0.5" transform="rotate(15 128 138)" />
      <ellipse cx="128" cy="138" rx="4" ry="2.5" fill="none" stroke="#4A7A3F" strokeWidth="0.8" opacity="0.4" transform="rotate(15 128 138)" />
      <ellipse cx="135" cy="137" rx="3.5" ry="2.2" fill="#6B8A4A" opacity="0.45" transform="rotate(10 135 137)" />
      <ellipse cx="120" cy="140" rx="3.5" ry="2" fill="#6B8A4A" opacity="0.5" transform="rotate(20 120 140)" />
      <ellipse cx="112" cy="143" rx="3" ry="2" fill="#6B8A4A" opacity="0.45" transform="rotate(25 112 143)" />

      {/* Vänster sidogren 2 (mitten) */}
      <path
        d="M96 125 C86 120, 70 115, 55 112"
        stroke="#5A7A3F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <ellipse cx="62" cy="110" rx="4" ry="2.5" fill="#7A9E5A" opacity="0.5" transform="rotate(-12 62 110)" />
      <ellipse cx="62" cy="110" rx="4" ry="2.5" fill="none" stroke="#4A7A3F" strokeWidth="0.8" opacity="0.35" transform="rotate(-12 62 110)" />
      <ellipse cx="55" cy="109" rx="3.5" ry="2" fill="#7A9E5A" opacity="0.45" transform="rotate(-8 55 109)" />
      <ellipse cx="70" cy="113" rx="3.5" ry="2.2" fill="#7A9E5A" opacity="0.5" transform="rotate(-18 70 113)" />
      <ellipse cx="78" cy="117" rx="3" ry="2" fill="#7A9E5A" opacity="0.45" transform="rotate(-22 78 117)" />

      {/* Höger sidogren 2 (mitten) */}
      <path
        d="M97 120 C107 116, 122 112, 140 110"
        stroke="#5A7A3F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <ellipse cx="133" cy="108" rx="4" ry="2.5" fill="#7A9E5A" opacity="0.5" transform="rotate(12 133 108)" />
      <ellipse cx="133" cy="108" rx="4" ry="2.5" fill="none" stroke="#4A7A3F" strokeWidth="0.8" opacity="0.35" transform="rotate(12 133 108)" />
      <ellipse cx="140" cy="107" rx="3.5" ry="2" fill="#7A9E5A" opacity="0.45" transform="rotate(8 140 107)" />
      <ellipse cx="125" cy="110" rx="3.5" ry="2.2" fill="#7A9E5A" opacity="0.5" transform="rotate(18 125 110)" />
      <ellipse cx="115" cy="114" rx="3" ry="2" fill="#7A9E5A" opacity="0.45" transform="rotate(22 115 114)" />

      {/* Vänster sidogren 3 (övre) */}
      <path
        d="M95 100 C85 95, 68 90, 52 88"
        stroke="#5A7A3F"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <ellipse cx="58" cy="86" rx="3.5" ry="2.2" fill="#7A9E5A" opacity="0.5" transform="rotate(-10 58 86)" />
      <ellipse cx="52" cy="85" rx="3" ry="2" fill="#7A9E5A" opacity="0.45" transform="rotate(-6 52 85)" />
      <ellipse cx="66" cy="88" rx="3.5" ry="2" fill="#7A9E5A" opacity="0.5" transform="rotate(-15 66 88)" />
      <ellipse cx="75" cy="92" rx="3" ry="1.8" fill="#7A9E5A" opacity="0.45" transform="rotate(-20 75 92)" />

      {/* Höger sidogren 3 (övre) */}
      <path
        d="M96 95 C106 91, 122 87, 142 86"
        stroke="#5A7A3F"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <ellipse cx="135" cy="84" rx="3.5" ry="2.2" fill="#7A9E5A" opacity="0.5" transform="rotate(10 135 84)" />
      <ellipse cx="142" cy="83" rx="3" ry="2" fill="#7A9E5A" opacity="0.45" transform="rotate(6 142 83)" />
      <ellipse cx="127" cy="85" rx="3.5" ry="2" fill="#7A9E5A" opacity="0.5" transform="rotate(15 127 85)" />
      <ellipse cx="118" cy="89" rx="3" ry="1.8" fill="#7A9E5A" opacity="0.45" transform="rotate(20 118 89)" />

      {/* Toppskott med blad */}
      <path
        d="M96 65 C95 58, 94 50, 95 42"
        stroke="#6B9E4A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <ellipse cx="90" cy="58" rx="3" ry="2" fill="#8AB560" opacity="0.5" transform="rotate(-15 90 58)" />
      <ellipse cx="100" cy="55" rx="3" ry="2" fill="#8AB560" opacity="0.5" transform="rotate(15 100 55)" />
      <ellipse cx="89" cy="48" rx="2.5" ry="1.8" fill="#8AB560" opacity="0.45" transform="rotate(-10 89 48)" />
      <ellipse cx="100" cy="45" rx="2.5" ry="1.8" fill="#8AB560" opacity="0.45" transform="rotate(10 100 45)" />

      {/* Blommor - små lila/rosa klasar */}
      {/* Blomklase topp */}
      <circle cx="95" cy="38" r="2.5" fill="#9B7AAE" opacity="0.6" />
      <circle cx="92" cy="35" r="2" fill="#B08FC2" opacity="0.5" />
      <circle cx="98" cy="35" r="2" fill="#9B7AAE" opacity="0.55" />
      <circle cx="95" cy="32" r="2.2" fill="#B08FC2" opacity="0.5" />
      <circle cx="93" cy="38" r="1.5" fill="#C4A8D4" opacity="0.4" />

      {/* Blomklase vänster gren */}
      <circle cx="50" cy="86" r="2" fill="#9B7AAE" opacity="0.5" />
      <circle cx="48" cy="83" r="1.8" fill="#B08FC2" opacity="0.45" />
      <circle cx="52" cy="84" r="1.5" fill="#9B7AAE" opacity="0.5" />

      {/* Blomklase höger gren */}
      <circle cx="144" cy="84" r="2" fill="#9B7AAE" opacity="0.5" />
      <circle cx="146" cy="81" r="1.8" fill="#B08FC2" opacity="0.45" />
      <circle cx="142" cy="82" r="1.5" fill="#9B7AAE" opacity="0.5" />

      {/* Ljusreflexer */}
      <ellipse cx="68" cy="114" rx="5" ry="3" fill="#A8D48A" opacity="0.1" transform="rotate(-15 68 114)" />
      <ellipse cx="130" cy="112" rx="5" ry="3" fill="#A8D48A" opacity="0.08" transform="rotate(15 130 112)" />

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

export function ThymeIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Huvudstam - vedartad bas till grön */}
      <path d="M24 44 L24 32" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 32 L24 12" stroke="#5A7A3F" strokeWidth="1.6" strokeLinecap="round" />

      {/* Nedre bladpar */}
      <ellipse cx="18" cy="34" rx="3.5" ry="2" fill="#6B8A4A" opacity="0.5" transform="rotate(-15 18 34)" />
      <ellipse cx="18" cy="34" rx="3.5" ry="2" fill="none" stroke="#4A7A3F" strokeWidth="0.8" opacity="0.4" transform="rotate(-15 18 34)" />
      <ellipse cx="30" cy="33" rx="3.5" ry="2" fill="#6B8A4A" opacity="0.5" transform="rotate(15 30 33)" />
      <ellipse cx="30" cy="33" rx="3.5" ry="2" fill="none" stroke="#4A7A3F" strokeWidth="0.8" opacity="0.4" transform="rotate(15 30 33)" />

      {/* Mellersta bladpar */}
      <path d="M23 26 C18 24, 12 22, 8 21" stroke="#5A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="10" cy="20" rx="3" ry="1.8" fill="#7A9E5A" opacity="0.5" transform="rotate(-10 10 20)" />
      <ellipse cx="16" cy="22" rx="2.5" ry="1.5" fill="#7A9E5A" opacity="0.45" transform="rotate(-15 16 22)" />
      <path d="M25 26 C30 24, 36 22, 40 21" stroke="#5A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="38" cy="20" rx="3" ry="1.8" fill="#7A9E5A" opacity="0.5" transform="rotate(10 38 20)" />
      <ellipse cx="32" cy="22" rx="2.5" ry="1.5" fill="#7A9E5A" opacity="0.45" transform="rotate(15 32 22)" />

      {/* Övre bladpar */}
      <ellipse cx="20" cy="16" rx="2.5" ry="1.5" fill="#8AB560" opacity="0.5" transform="rotate(-12 20 16)" />
      <ellipse cx="28" cy="15" rx="2.5" ry="1.5" fill="#8AB560" opacity="0.5" transform="rotate(12 28 15)" />

      {/* Lila blommor topp */}
      <circle cx="24" cy="9" r="2" fill="#9B7AAE" opacity="0.6" />
      <circle cx="22" cy="7" r="1.5" fill="#B08FC2" opacity="0.5" />
      <circle cx="26" cy="7" r="1.5" fill="#9B7AAE" opacity="0.55" />
    </svg>
  )
}
