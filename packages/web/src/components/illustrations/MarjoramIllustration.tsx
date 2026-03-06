import { colors } from '@odlingsguiden/shared'

interface Props {
  size?: number
}

export function MarjoramIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Bakgrundscirkel */}
      <circle cx="100" cy="100" r="90" fill="#DDE5C8" opacity="0.15" />
      {/* Huvudstam */}
      <path d="M100 185 Q100 160, 100 130 Q100 100, 100 70" stroke="#4A7A3F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Sidostam vänster */}
      <path d="M100 110 Q82 95, 62 82" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      {/* Sidostam höger */}
      <path d="M100 100 Q118 85, 138 72" stroke="#4A7A3F" strokeWidth="1.6" strokeLinecap="round" />
      {/* Sidostam vänster övre */}
      <path d="M100 85 Q86 72, 72 62" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      {/* Sidostam höger övre */}
      <path d="M100 78 Q114 66, 128 56" stroke="#4A7A3F" strokeWidth="1.4" strokeLinecap="round" />
      {/* Knoppkluster topp - mejrams karaktäristiska knutformade blomställningar */}
      <ellipse cx="100" cy="62" rx="6" ry="8" fill="#B8A0C0" opacity="0.4" />
      <ellipse cx="100" cy="62" rx="6" ry="8" stroke="#8A7094" strokeWidth="1.2" fill="none" />
      <ellipse cx="100" cy="54" rx="5" ry="6" fill="#C4AAD0" opacity="0.35" />
      <ellipse cx="100" cy="54" rx="5" ry="6" stroke="#8A7094" strokeWidth="1.0" fill="none" />
      {/* Blomkluster vänster gren */}
      <ellipse cx="62" cy="76" rx="5" ry="7" fill="#B8A0C0" opacity="0.35" />
      <ellipse cx="62" cy="76" rx="5" ry="7" stroke="#8A7094" strokeWidth="1.0" fill="none" />
      <ellipse cx="72" cy="56" rx="4" ry="6" fill="#C4AAD0" opacity="0.3" />
      <ellipse cx="72" cy="56" rx="4" ry="6" stroke="#8A7094" strokeWidth="0.9" fill="none" />
      {/* Blomkluster höger gren */}
      <ellipse cx="138" cy="66" rx="5" ry="7" fill="#B8A0C0" opacity="0.35" />
      <ellipse cx="138" cy="66" rx="5" ry="7" stroke="#8A7094" strokeWidth="1.0" fill="none" />
      <ellipse cx="128" cy="50" rx="4" ry="6" fill="#C4AAD0" opacity="0.3" />
      <ellipse cx="128" cy="50" rx="4" ry="6" stroke="#8A7094" strokeWidth="0.9" fill="none" />
      {/* Små vita blommor i klustren */}
      <circle cx="98" cy="58" r="1.5" fill="#F0E8F4" opacity="0.7" />
      <circle cx="102" cy="60" r="1.5" fill="#F0E8F4" opacity="0.7" />
      <circle cx="100" cy="56" r="1.2" fill="#F0E8F4" opacity="0.6" />
      <circle cx="61" cy="73" r="1.2" fill="#F0E8F4" opacity="0.6" />
      <circle cx="63" cy="75" r="1.2" fill="#F0E8F4" opacity="0.6" />
      <circle cx="137" cy="63" r="1.2" fill="#F0E8F4" opacity="0.6" />
      <circle cx="139" cy="65" r="1.2" fill="#F0E8F4" opacity="0.6" />
      {/* Blad - ovala, mjuka (mejram har runda, mjuka blad) */}
      {/* Nedre bladpar vänster */}
      <ellipse cx="82" cy="138" rx="14" ry="10" fill="#5A8A3F" opacity="0.12" transform="rotate(-15 82 138)" />
      <ellipse cx="82" cy="138" rx="14" ry="10" stroke="#3D7A2F" strokeWidth="1.6" fill="none" transform="rotate(-15 82 138)" />
      <path d="M82 138 Q74 134, 68 138" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      {/* Nedre bladpar höger */}
      <ellipse cx="118" cy="138" rx="14" ry="10" fill="#5A8A3F" opacity="0.10" transform="rotate(15 118 138)" />
      <ellipse cx="118" cy="138" rx="14" ry="10" stroke="#3D7A2F" strokeWidth="1.6" fill="none" transform="rotate(15 118 138)" />
      <path d="M118 138 Q126 134, 132 138" stroke="#3D7A2F" strokeWidth="0.5" strokeLinecap="round" opacity="0.2" />
      {/* Mellersta bladpar vänster */}
      <ellipse cx="78" cy="118" rx="12" ry="8" fill="#5A8A3F" opacity="0.14" transform="rotate(-20 78 118)" />
      <ellipse cx="78" cy="118" rx="12" ry="8" stroke="#3D7A2F" strokeWidth="1.4" fill="none" transform="rotate(-20 78 118)" />
      {/* Mellersta bladpar höger */}
      <ellipse cx="122" cy="118" rx="12" ry="8" fill="#5A8A3F" opacity="0.12" transform="rotate(20 122 118)" />
      <ellipse cx="122" cy="118" rx="12" ry="8" stroke="#3D7A2F" strokeWidth="1.4" fill="none" transform="rotate(20 122 118)" />
      {/* Övre bladpar vänster */}
      <ellipse cx="82" cy="96" rx="10" ry="7" fill="#5A8A3F" opacity="0.14" transform="rotate(-25 82 96)" />
      <ellipse cx="82" cy="96" rx="10" ry="7" stroke="#3D7A2F" strokeWidth="1.2" fill="none" transform="rotate(-25 82 96)" />
      {/* Övre bladpar höger */}
      <ellipse cx="118" cy="96" rx="10" ry="7" fill="#5A8A3F" opacity="0.12" transform="rotate(25 118 96)" />
      <ellipse cx="118" cy="96" rx="10" ry="7" stroke="#3D7A2F" strokeWidth="1.2" fill="none" transform="rotate(25 118 96)" />
      {/* Små blad vid grenarna */}
      <ellipse cx="70" cy="86" rx="8" ry="5.5" fill="#5A8A3F" opacity="0.12" transform="rotate(-30 70 86)" />
      <ellipse cx="70" cy="86" rx="8" ry="5.5" stroke="#3D7A2F" strokeWidth="1.0" fill="none" transform="rotate(-30 70 86)" />
      <ellipse cx="130" cy="78" rx="8" ry="5.5" fill="#5A8A3F" opacity="0.10" transform="rotate(30 130 78)" />
      <ellipse cx="130" cy="78" rx="8" ry="5.5" stroke="#3D7A2F" strokeWidth="1.0" fill="none" transform="rotate(30 130 78)" />
      {/* Bladnerver */}
      <path d="M82 138 Q82 134, 82 130" stroke="#3D7A2F" strokeWidth="0.4" strokeLinecap="round" opacity="0.15" />
      <path d="M118 138 Q118 134, 118 130" stroke="#3D7A2F" strokeWidth="0.4" strokeLinecap="round" opacity="0.15" />
      {/* Ljusreflexer */}
      <ellipse cx="78" cy="130" rx="3" ry="5" fill={colors.accentLight} opacity="0.08" transform="rotate(-10 78 130)" />
      <ellipse cx="122" cy="130" rx="3" ry="5" fill={colors.accentLight} opacity="0.06" transform="rotate(10 122 130)" />
      {/* Markprickar */}
      <circle cx="88" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="100" cy="188" r="2" fill={colors.earth} opacity="0.15" />
      <circle cx="112" cy="186" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="82" cy="190" r="1" fill={colors.earth} opacity="0.12" />
      <circle cx="118" cy="190" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function MarjoramIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stam */}
      <path d="M24 44 Q24 34, 24 22 Q24 16, 24 12" stroke="#4A7A3F" strokeWidth="1.8" strokeLinecap="round" />
      {/* Sidogrenar */}
      <path d="M24 28 Q18 22, 12 18" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M24 24 Q30 18, 36 14" stroke="#4A7A3F" strokeWidth="1.2" strokeLinecap="round" />
      {/* Blomkluster topp */}
      <ellipse cx="24" cy="8" rx="4" ry="5" fill="#B8A0C0" opacity="0.4" />
      <ellipse cx="24" cy="8" rx="4" ry="5" stroke="#8A7094" strokeWidth="0.8" fill="none" />
      {/* Blomkluster vänster */}
      <ellipse cx="12" cy="15" rx="3" ry="4" fill="#B8A0C0" opacity="0.35" />
      <ellipse cx="12" cy="15" rx="3" ry="4" stroke="#8A7094" strokeWidth="0.7" fill="none" />
      {/* Blomkluster höger */}
      <ellipse cx="36" cy="11" rx="3" ry="4" fill="#B8A0C0" opacity="0.35" />
      <ellipse cx="36" cy="11" rx="3" ry="4" stroke="#8A7094" strokeWidth="0.7" fill="none" />
      {/* Små vita blommor */}
      <circle cx="23" cy="6" r="1" fill="#F0E8F4" opacity="0.7" />
      <circle cx="25" cy="7" r="1" fill="#F0E8F4" opacity="0.7" />
      {/* Ovala blad vänster */}
      <ellipse cx="17" cy="34" rx="7" ry="5" fill="#5A8A3F" opacity="0.12" transform="rotate(-15 17 34)" />
      <ellipse cx="17" cy="34" rx="7" ry="5" stroke="#3D7A2F" strokeWidth="1.2" fill="none" transform="rotate(-15 17 34)" />
      {/* Ovala blad höger */}
      <ellipse cx="31" cy="34" rx="7" ry="5" fill="#5A8A3F" opacity="0.10" transform="rotate(15 31 34)" />
      <ellipse cx="31" cy="34" rx="7" ry="5" stroke="#3D7A2F" strokeWidth="1.2" fill="none" transform="rotate(15 31 34)" />
      {/* Övre bladpar */}
      <ellipse cx="18" cy="26" rx="5.5" ry="4" fill="#5A8A3F" opacity="0.12" transform="rotate(-20 18 26)" />
      <ellipse cx="18" cy="26" rx="5.5" ry="4" stroke="#3D7A2F" strokeWidth="1.0" fill="none" transform="rotate(-20 18 26)" />
      <ellipse cx="30" cy="26" rx="5.5" ry="4" fill="#5A8A3F" opacity="0.10" transform="rotate(20 30 26)" />
      <ellipse cx="30" cy="26" rx="5.5" ry="4" stroke="#3D7A2F" strokeWidth="1.0" fill="none" transform="rotate(20 30 26)" />
    </svg>
  )
}
