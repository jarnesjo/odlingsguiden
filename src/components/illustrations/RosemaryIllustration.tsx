import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function RosemaryIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundsglöd */}
      <circle cx="100" cy="100" r="90" fill={colors.category.herbs.light} opacity="0.15" />

      {/* Huvudstam - vedartad bas som övergår till grön */}
      <path
        d="M100 185 C100 178, 99 170, 98 160 C97 148, 96 135, 96 125"
        stroke="#8B7355"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M96 125 C95 115, 95 105, 95 95 C95 85, 96 72, 97 60"
        stroke="#6B7D3E"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M97 60 C97 52, 98 44, 99 36"
        stroke="#6B9E4A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Vänster gren 1 (nedre, vedartad) */}
      <path
        d="M98 155 C88 150, 72 146, 58 144"
        stroke="#7A6548"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Nålblad vänster nedre */}
      <line x1="68" y1="143" x2="60" y2="137" stroke="#3D6B4F" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      <line x1="72" y1="144" x2="65" y2="138" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <line x1="76" y1="146" x2="70" y2="140" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <line x1="64" y1="142" x2="56" y2="137" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="68" y1="146" x2="62" y2="150" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <line x1="73" y1="147" x2="67" y2="152" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />

      {/* Höger gren 1 (nedre, vedartad) */}
      <path
        d="M100 150 C110 146, 126 142, 142 140"
        stroke="#7A6548"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Nålblad höger nedre */}
      <line x1="132" y1="140" x2="140" y2="134" stroke="#3D6B4F" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      <line x1="128" y1="141" x2="135" y2="135" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <line x1="122" y1="142" x2="128" y2="136" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <line x1="136" y1="139" x2="144" y2="134" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="130" y1="143" x2="136" y2="148" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <line x1="125" y1="144" x2="131" y2="149" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />

      {/* Vänster gren 2 (mitten) */}
      <path
        d="M96 120 C84 115, 66 110, 48 108"
        stroke="#5A7A3F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Nålblad vänster mitten */}
      <line x1="58" y1="108" x2="50" y2="102" stroke="#3D6B4F" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      <line x1="64" y1="110" x2="56" y2="104" stroke="#6B7D3E" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <line x1="70" y1="112" x2="63" y2="106" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <line x1="54" y1="107" x2="46" y2="102" stroke="#6B7D3E" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="60" y1="111" x2="54" y2="116" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <line x1="66" y1="113" x2="60" y2="118" stroke="#6B7D3E" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      <line x1="76" y1="114" x2="70" y2="120" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

      {/* Höger gren 2 (mitten) */}
      <path
        d="M97 115 C109 111, 128 107, 148 106"
        stroke="#5A7A3F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Nålblad höger mitten */}
      <line x1="140" y1="105" x2="148" y2="99" stroke="#3D6B4F" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      <line x1="134" y1="106" x2="141" y2="100" stroke="#6B7D3E" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <line x1="128" y1="108" x2="134" y2="102" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <line x1="144" y1="104" x2="152" y2="100" stroke="#6B7D3E" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="138" y1="108" x2="144" y2="113" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <line x1="132" y1="109" x2="138" y2="114" stroke="#6B7D3E" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      <line x1="122" y1="110" x2="128" y2="115" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

      {/* Vänster gren 3 (övre) */}
      <path
        d="M96 90 C84 85, 65 80, 50 78"
        stroke="#5A7A3F"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Nålblad vänster övre */}
      <line x1="56" y1="77" x2="48" y2="72" stroke="#6B9E4A" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      <line x1="62" y1="79" x2="55" y2="73" stroke="#6B7D3E" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <line x1="70" y1="82" x2="64" y2="76" stroke="#6B9E4A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="58" y1="80" x2="52" y2="84" stroke="#6B7D3E" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="66" y1="83" x2="60" y2="88" stroke="#6B9E4A" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />

      {/* Höger gren 3 (övre) */}
      <path
        d="M97 85 C109 81, 130 77, 148 76"
        stroke="#5A7A3F"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Nålblad höger övre */}
      <line x1="140" y1="75" x2="148" y2="70" stroke="#6B9E4A" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      <line x1="134" y1="76" x2="141" y2="71" stroke="#6B7D3E" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <line x1="126" y1="78" x2="132" y2="72" stroke="#6B9E4A" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="138" y1="78" x2="144" y2="82" stroke="#6B7D3E" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="130" y1="79" x2="136" y2="84" stroke="#6B9E4A" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />

      {/* Toppskott med nålblad */}
      <line x1="93" y1="55" x2="86" y2="50" stroke="#8AB560" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      <line x1="101" y1="53" x2="108" y2="48" stroke="#8AB560" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      <line x1="94" y1="46" x2="87" y2="42" stroke="#8AB560" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <line x1="102" y1="44" x2="108" y2="40" stroke="#8AB560" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <line x1="96" y1="38" x2="90" y2="34" stroke="#8AB560" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="101" y1="36" x2="106" y2="33" stroke="#8AB560" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Blommor - små blålila blommor */}
      {/* Blomklase topp */}
      <circle cx="99" cy="30" r="3" fill="#4A7A8A" opacity="0.55" />
      <circle cx="96" cy="27" r="2.5" fill="#5A8A9A" opacity="0.5" />
      <circle cx="102" cy="27" r="2.2" fill="#4A7A8A" opacity="0.5" />
      <circle cx="99" cy="24" r="2.5" fill="#5A8A9A" opacity="0.45" />
      <circle cx="97" cy="30" r="1.8" fill="#6A9AAA" opacity="0.35" />

      {/* Blomklase vänster övre gren */}
      <circle cx="48" cy="76" r="2.2" fill="#4A7A8A" opacity="0.5" />
      <circle cx="46" cy="73" r="1.8" fill="#5A8A9A" opacity="0.45" />
      <circle cx="50" cy="74" r="1.5" fill="#4A7A8A" opacity="0.5" />

      {/* Blomklase höger övre gren */}
      <circle cx="150" cy="74" r="2.2" fill="#4A7A8A" opacity="0.5" />
      <circle cx="152" cy="71" r="1.8" fill="#5A8A9A" opacity="0.45" />
      <circle cx="148" cy="72" r="1.5" fill="#4A7A8A" opacity="0.5" />

      {/* Blomklase höger mitten gren */}
      <circle cx="150" cy="104" r="2" fill="#4A7A8A" opacity="0.45" />
      <circle cx="152" cy="101" r="1.5" fill="#5A8A9A" opacity="0.4" />

      {/* Ljusreflexer */}
      <ellipse cx="65" cy="110" rx="5" ry="3" fill="#A8D48A" opacity="0.08" transform="rotate(-15 65 110)" />
      <ellipse cx="135" cy="108" rx="5" ry="3" fill="#A8D48A" opacity="0.06" transform="rotate(15 135 108)" />

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

export function RosemaryIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Huvudstam - vedartad bas till grön */}
      <path d="M24 44 L24 32" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 32 L24 10" stroke="#5A7A3F" strokeWidth="1.6" strokeLinecap="round" />

      {/* Nedre nålblad (vid vedartad del) */}
      <line x1="22" y1="34" x2="16" y2="30" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      <line x1="26" y1="33" x2="32" y2="29" stroke="#3D6B4F" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      <line x1="22" y1="36" x2="17" y2="39" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="26" y1="35" x2="31" y2="38" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

      {/* Mellersta nålblad */}
      <path d="M23 26 C18 24, 12 22, 7 21" stroke="#5A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="10" y1="20" x2="5" y2="16" stroke="#6B7D3E" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <line x1="15" y1="22" x2="10" y2="18" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="12" y1="23" x2="8" y2="26" stroke="#6B7D3E" strokeWidth="1" strokeLinecap="round" opacity="0.45" />

      <path d="M25 26 C30 24, 36 22, 41 21" stroke="#5A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="38" y1="20" x2="43" y2="16" stroke="#6B7D3E" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <line x1="33" y1="22" x2="38" y2="18" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="36" y1="23" x2="40" y2="26" stroke="#6B7D3E" strokeWidth="1" strokeLinecap="round" opacity="0.45" />

      {/* Övre nålblad */}
      <line x1="22" y1="18" x2="16" y2="14" stroke="#8AB560" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="26" y1="17" x2="32" y2="13" stroke="#8AB560" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="23" y1="14" x2="18" y2="11" stroke="#8AB560" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="25" y1="13" x2="30" y2="10" stroke="#8AB560" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Blålila blommor topp */}
      <circle cx="24" cy="7" r="2.2" fill="#4A7A8A" opacity="0.55" />
      <circle cx="21" cy="5" r="1.8" fill="#5A8A9A" opacity="0.5" />
      <circle cx="27" cy="5" r="1.5" fill="#4A7A8A" opacity="0.5" />
    </svg>
  )
}
