import { colors } from '@odlingsguiden/shared'
import { Circle, Ellipse, Line, Path, Svg } from 'react-native-svg'

interface Props {
  size?: number
}

export function ThymeIllustration({ size = 200 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundsglöd */}
      <Circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />

      {/* Huvudstam - vedartad bas som övergår till grön */}
      <Path
        d="M100 185 C100 178, 99 170, 98 160 C97 148, 96 135, 96 125"
        stroke="#8B7355"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <Path
        d="M96 125 C95 115, 94 105, 94 95 C94 85, 95 75, 96 65"
        stroke="#6B8A4A"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Vänster sidogren 1 (nedre) */}
      <Path
        d="M98 155 C90 150, 78 145, 65 142"
        stroke="#7A6548"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Småblad på vänster nedre gren */}
      <Ellipse cx="72" cy="140" rx="4" ry="2.5" fill="#6B8A4A" opacity="0.5" transform="rotate(-15 72 140)" />
      <Ellipse cx="72" cy="140" rx="4" ry="2.5" fill="none" stroke="#4A7A3F" strokeWidth="0.8" opacity="0.4" transform="rotate(-15 72 140)" />
      <Ellipse cx="65" cy="139" rx="3.5" ry="2.2" fill="#6B8A4A" opacity="0.45" transform="rotate(-10 65 139)" />
      <Ellipse cx="78" cy="143" rx="3.5" ry="2" fill="#6B8A4A" opacity="0.5" transform="rotate(-20 78 143)" />
      <Ellipse cx="85" cy="147" rx="3" ry="2" fill="#6B8A4A" opacity="0.45" transform="rotate(-25 85 147)" />

      {/* Höger sidogren 1 (nedre) */}
      <Path
        d="M100 150 C108 146, 120 142, 135 140"
        stroke="#7A6548"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Ellipse cx="128" cy="138" rx="4" ry="2.5" fill="#6B8A4A" opacity="0.5" transform="rotate(15 128 138)" />
      <Ellipse cx="128" cy="138" rx="4" ry="2.5" fill="none" stroke="#4A7A3F" strokeWidth="0.8" opacity="0.4" transform="rotate(15 128 138)" />
      <Ellipse cx="135" cy="137" rx="3.5" ry="2.2" fill="#6B8A4A" opacity="0.45" transform="rotate(10 135 137)" />
      <Ellipse cx="120" cy="140" rx="3.5" ry="2" fill="#6B8A4A" opacity="0.5" transform="rotate(20 120 140)" />
      <Ellipse cx="112" cy="143" rx="3" ry="2" fill="#6B8A4A" opacity="0.45" transform="rotate(25 112 143)" />

      {/* Vänster sidogren 2 (mitten) */}
      <Path
        d="M96 125 C86 120, 70 115, 55 112"
        stroke="#5A7A3F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <Ellipse cx="62" cy="110" rx="4" ry="2.5" fill="#7A9E5A" opacity="0.5" transform="rotate(-12 62 110)" />
      <Ellipse cx="62" cy="110" rx="4" ry="2.5" fill="none" stroke="#4A7A3F" strokeWidth="0.8" opacity="0.35" transform="rotate(-12 62 110)" />
      <Ellipse cx="55" cy="109" rx="3.5" ry="2" fill="#7A9E5A" opacity="0.45" transform="rotate(-8 55 109)" />
      <Ellipse cx="70" cy="113" rx="3.5" ry="2.2" fill="#7A9E5A" opacity="0.5" transform="rotate(-18 70 113)" />
      <Ellipse cx="78" cy="117" rx="3" ry="2" fill="#7A9E5A" opacity="0.45" transform="rotate(-22 78 117)" />

      {/* Höger sidogren 2 (mitten) */}
      <Path
        d="M97 120 C107 116, 122 112, 140 110"
        stroke="#5A7A3F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <Ellipse cx="133" cy="108" rx="4" ry="2.5" fill="#7A9E5A" opacity="0.5" transform="rotate(12 133 108)" />
      <Ellipse cx="133" cy="108" rx="4" ry="2.5" fill="none" stroke="#4A7A3F" strokeWidth="0.8" opacity="0.35" transform="rotate(12 133 108)" />
      <Ellipse cx="140" cy="107" rx="3.5" ry="2" fill="#7A9E5A" opacity="0.45" transform="rotate(8 140 107)" />
      <Ellipse cx="125" cy="110" rx="3.5" ry="2.2" fill="#7A9E5A" opacity="0.5" transform="rotate(18 125 110)" />
      <Ellipse cx="115" cy="114" rx="3" ry="2" fill="#7A9E5A" opacity="0.45" transform="rotate(22 115 114)" />

      {/* Vänster sidogren 3 (övre) */}
      <Path
        d="M95 100 C85 95, 68 90, 52 88"
        stroke="#5A7A3F"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <Ellipse cx="58" cy="86" rx="3.5" ry="2.2" fill="#7A9E5A" opacity="0.5" transform="rotate(-10 58 86)" />
      <Ellipse cx="52" cy="85" rx="3" ry="2" fill="#7A9E5A" opacity="0.45" transform="rotate(-6 52 85)" />
      <Ellipse cx="66" cy="88" rx="3.5" ry="2" fill="#7A9E5A" opacity="0.5" transform="rotate(-15 66 88)" />
      <Ellipse cx="75" cy="92" rx="3" ry="1.8" fill="#7A9E5A" opacity="0.45" transform="rotate(-20 75 92)" />

      {/* Höger sidogren 3 (övre) */}
      <Path
        d="M96 95 C106 91, 122 87, 142 86"
        stroke="#5A7A3F"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <Ellipse cx="135" cy="84" rx="3.5" ry="2.2" fill="#7A9E5A" opacity="0.5" transform="rotate(10 135 84)" />
      <Ellipse cx="142" cy="83" rx="3" ry="2" fill="#7A9E5A" opacity="0.45" transform="rotate(6 142 83)" />
      <Ellipse cx="127" cy="85" rx="3.5" ry="2" fill="#7A9E5A" opacity="0.5" transform="rotate(15 127 85)" />
      <Ellipse cx="118" cy="89" rx="3" ry="1.8" fill="#7A9E5A" opacity="0.45" transform="rotate(20 118 89)" />

      {/* Toppskott med blad */}
      <Path
        d="M96 65 C95 58, 94 50, 95 42"
        stroke="#6B9E4A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <Ellipse cx="90" cy="58" rx="3" ry="2" fill="#8AB560" opacity="0.5" transform="rotate(-15 90 58)" />
      <Ellipse cx="100" cy="55" rx="3" ry="2" fill="#8AB560" opacity="0.5" transform="rotate(15 100 55)" />
      <Ellipse cx="89" cy="48" rx="2.5" ry="1.8" fill="#8AB560" opacity="0.45" transform="rotate(-10 89 48)" />
      <Ellipse cx="100" cy="45" rx="2.5" ry="1.8" fill="#8AB560" opacity="0.45" transform="rotate(10 100 45)" />

      {/* Blommor - små lila/rosa klasar */}
      {/* Blomklase topp */}
      <Circle cx="95" cy="38" r="2.5" fill="#9B7AAE" opacity="0.6" />
      <Circle cx="92" cy="35" r="2" fill="#B08FC2" opacity="0.5" />
      <Circle cx="98" cy="35" r="2" fill="#9B7AAE" opacity="0.55" />
      <Circle cx="95" cy="32" r="2.2" fill="#B08FC2" opacity="0.5" />
      <Circle cx="93" cy="38" r="1.5" fill="#C4A8D4" opacity="0.4" />

      {/* Blomklase vänster gren */}
      <Circle cx="50" cy="86" r="2" fill="#9B7AAE" opacity="0.5" />
      <Circle cx="48" cy="83" r="1.8" fill="#B08FC2" opacity="0.45" />
      <Circle cx="52" cy="84" r="1.5" fill="#9B7AAE" opacity="0.5" />

      {/* Blomklase höger gren */}
      <Circle cx="144" cy="84" r="2" fill="#9B7AAE" opacity="0.5" />
      <Circle cx="146" cy="81" r="1.8" fill="#B08FC2" opacity="0.45" />
      <Circle cx="142" cy="82" r="1.5" fill="#9B7AAE" opacity="0.5" />

      {/* Ljusreflexer */}
      <Ellipse cx="68" cy="114" rx="5" ry="3" fill="#A8D48A" opacity="0.1" transform="rotate(-15 68 114)" />
      <Ellipse cx="130" cy="112" rx="5" ry="3" fill="#A8D48A" opacity="0.08" transform="rotate(15 130 112)" />

      {/* Vedartad bas-detalj */}
      <Path
        d="M97 165 C96 162, 95 158, 94 155"
        stroke="#6B5540"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.3"
      />
      <Path
        d="M99 168 C100 165, 101 160, 101 155"
        stroke="#6B5540"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.2"
      />

      {/* Kruka */}
      <Path
        d="M82 185 C82 178, 86 174, 100 174 C114 174, 118 178, 118 185"
        stroke={colors.warm}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Path
        d="M82 185 C82 178, 86 174, 100 174 C114 174, 118 178, 118 185"
        fill={colors.warm}
        opacity="0.1"
      />
      <Line x1="80" y1="185" x2="120" y2="185" stroke={colors.warm} strokeWidth="1.8" strokeLinecap="round" />
      <Path
        d="M86 174 C90 172, 96 171, 100 171 C104 171, 110 172, 114 174"
        stroke={colors.earth}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Grusdetaljer vid basen */}
      <Circle cx="92" cy="173" r="1" fill={colors.earth} opacity="0.15" />
      <Circle cx="108" cy="173" r="0.8" fill={colors.earth} opacity="0.12" />
      <Circle cx="100" cy="172" r="0.6" fill={colors.earth} opacity="0.1" />
    </Svg>
  )
}

export function ThymeIcon({ size = 48 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Huvudstam - vedartad bas till grön */}
      <Path d="M24 44 L24 32" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" />
      <Path d="M24 32 L24 12" stroke="#5A7A3F" strokeWidth="1.6" strokeLinecap="round" />

      {/* Nedre bladpar */}
      <Ellipse cx="18" cy="34" rx="3.5" ry="2" fill="#6B8A4A" opacity="0.5" transform="rotate(-15 18 34)" />
      <Ellipse cx="18" cy="34" rx="3.5" ry="2" fill="none" stroke="#4A7A3F" strokeWidth="0.8" opacity="0.4" transform="rotate(-15 18 34)" />
      <Ellipse cx="30" cy="33" rx="3.5" ry="2" fill="#6B8A4A" opacity="0.5" transform="rotate(15 30 33)" />
      <Ellipse cx="30" cy="33" rx="3.5" ry="2" fill="none" stroke="#4A7A3F" strokeWidth="0.8" opacity="0.4" transform="rotate(15 30 33)" />

      {/* Mellersta bladpar */}
      <Path d="M23 26 C18 24, 12 22, 8 21" stroke="#5A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <Ellipse cx="10" cy="20" rx="3" ry="1.8" fill="#7A9E5A" opacity="0.5" transform="rotate(-10 10 20)" />
      <Ellipse cx="16" cy="22" rx="2.5" ry="1.5" fill="#7A9E5A" opacity="0.45" transform="rotate(-15 16 22)" />
      <Path d="M25 26 C30 24, 36 22, 40 21" stroke="#5A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      <Ellipse cx="38" cy="20" rx="3" ry="1.8" fill="#7A9E5A" opacity="0.5" transform="rotate(10 38 20)" />
      <Ellipse cx="32" cy="22" rx="2.5" ry="1.5" fill="#7A9E5A" opacity="0.45" transform="rotate(15 32 22)" />

      {/* Övre bladpar */}
      <Ellipse cx="20" cy="16" rx="2.5" ry="1.5" fill="#8AB560" opacity="0.5" transform="rotate(-12 20 16)" />
      <Ellipse cx="28" cy="15" rx="2.5" ry="1.5" fill="#8AB560" opacity="0.5" transform="rotate(12 28 15)" />

      {/* Lila blommor topp */}
      <Circle cx="24" cy="9" r="2" fill="#9B7AAE" opacity="0.6" />
      <Circle cx="22" cy="7" r="1.5" fill="#B08FC2" opacity="0.5" />
      <Circle cx="26" cy="7" r="1.5" fill="#9B7AAE" opacity="0.55" />
    </Svg>
  )
}
