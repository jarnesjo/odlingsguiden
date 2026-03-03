import { colors } from '../../theme/tokens'

interface Props {
  size?: number
}

export function TayberryIllustration({ size = 200 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill={colors.category.berries.light} opacity="0.15" />

      {/* Main arching cane - tayberry has long trailing canes */}
      <path d="M40 170 Q50 150, 60 130 Q75 100, 95 80 Q110 65, 130 55" stroke="#5C4033" strokeWidth="2.5" strokeLinecap="round" />
      {/* Secondary cane */}
      <path d="M60 170 Q70 148, 82 125 Q95 105, 110 90" stroke="#5C4033" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

      {/* Short fruit-bearing spurs */}
      <path d="M80 108 Q75 100, 68 94" stroke="#6B8B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M95 80 Q88 74, 80 70" stroke="#6B8B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M110 68 Q105 60, 98 54" stroke="#6B8B4F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M120 60 Q118 52, 115 44" stroke="#6B8B4F" strokeWidth="1.5" strokeLinecap="round" />

      {/* Leaves - trifoliate like Rubus */}
      {/* Leaf cluster at branch tip */}
      <path d="M130 55 Q140 48, 150 46 Q144 42, 134 48" fill="#3D6B4F" opacity="0.12" />
      <path d="M130 55 Q140 48, 150 46" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M150 46 Q144 42, 134 48" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />

      <path d="M130 55 Q138 56, 148 54 Q142 50, 132 53" fill="#3D6B4F" opacity="0.10" />
      <path d="M130 55 Q138 56, 148 54" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Leaf at mid-cane */}
      <path d="M95 80 Q105 74, 116 72 Q110 68, 98 74" fill="#3D6B4F" opacity="0.12" />
      <path d="M95 80 Q105 74, 116 72" stroke="#3D6B4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M116 72 Q110 68, 98 74" stroke="#3D6B4F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M95 80 Q88 72, 78 68" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M78 68 Q82 65, 90 66" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35" />

      {/* Leaf at lower position */}
      <path d="M80 108 Q88 102, 98 100 Q92 97, 82 102" fill="#3D6B4F" opacity="0.10" />
      <path d="M80 108 Q88 102, 98 100" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M98 100 Q92 97, 82 102" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* --- Berry 1 - ripe, drupelet cluster, hanging from spur --- */}
      <g transform="rotate(-12 66 94)">
        {/* Calyx */}
        <path d="M60 92 L57 88 M64 91 L62 87 M68 91 L70 87 M72 92 L75 89" stroke="#3D6B4F" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        {/* Drupelets - row 1 (top, wide) */}
        <circle cx="62" cy="96" r="3.8" fill="#8B1A2A" opacity="0.2" />
        <circle cx="62" cy="96" r="3.8" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        <circle cx="70" cy="96" r="3.8" fill="#8B1A2A" opacity="0.2" />
        <circle cx="70" cy="96" r="3.8" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        {/* Row 2 */}
        <circle cx="59" cy="103" r="3.8" fill="#8B1A2A" opacity="0.2" />
        <circle cx="59" cy="103" r="3.8" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        <circle cx="66" cy="102" r="3.5" fill="#8B1A2A" opacity="0.2" />
        <circle cx="66" cy="102" r="3.5" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        <circle cx="73" cy="103" r="3.8" fill="#8B1A2A" opacity="0.2" />
        <circle cx="73" cy="103" r="3.8" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        {/* Row 3 */}
        <circle cx="61" cy="110" r="3.5" fill="#8B1A2A" opacity="0.2" />
        <circle cx="61" cy="110" r="3.5" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        <circle cx="69" cy="110" r="3.5" fill="#8B1A2A" opacity="0.2" />
        <circle cx="69" cy="110" r="3.5" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        {/* Row 4 (narrowing) */}
        <circle cx="63" cy="116" r="3" fill="#8B1A2A" opacity="0.2" />
        <circle cx="63" cy="116" r="3" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        <circle cx="70" cy="116" r="3" fill="#8B1A2A" opacity="0.2" />
        <circle cx="70" cy="116" r="3" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        {/* Row 5 (tip) */}
        <circle cx="66" cy="121" r="2.5" fill="#8B1A2A" opacity="0.2" />
        <circle cx="66" cy="121" r="2.5" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        {/* Highlight */}
        <circle cx="60" cy="96" r="1.8" fill="#D87080" opacity="0.3" />
        <circle cx="57" cy="103" r="1.5" fill="#D87080" opacity="0.25" />
      </g>

      {/* --- Berry 2 - ripe, slightly smaller --- */}
      <g transform="rotate(-8 80 70)">
        {/* Calyx */}
        <path d="M74 68 L72 64 M78 67 L77 63 M82 68 L84 64" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />
        {/* Drupelets - row 1 */}
        <circle cx="75" cy="72" r="3.5" fill="#8B1A2A" opacity="0.2" />
        <circle cx="75" cy="72" r="3.5" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        <circle cx="83" cy="72" r="3.5" fill="#8B1A2A" opacity="0.2" />
        <circle cx="83" cy="72" r="3.5" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        {/* Row 2 */}
        <circle cx="73" cy="79" r="3.5" fill="#8B1A2A" opacity="0.2" />
        <circle cx="73" cy="79" r="3.5" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        <circle cx="79" cy="78" r="3.2" fill="#8B1A2A" opacity="0.2" />
        <circle cx="79" cy="78" r="3.2" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        <circle cx="85" cy="79" r="3.5" fill="#8B1A2A" opacity="0.2" />
        <circle cx="85" cy="79" r="3.5" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        {/* Row 3 */}
        <circle cx="75" cy="85" r="3.2" fill="#8B1A2A" opacity="0.2" />
        <circle cx="75" cy="85" r="3.2" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        <circle cx="82" cy="85" r="3.2" fill="#8B1A2A" opacity="0.2" />
        <circle cx="82" cy="85" r="3.2" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        {/* Row 4 (tip) */}
        <circle cx="77" cy="90" r="2.8" fill="#8B1A2A" opacity="0.2" />
        <circle cx="77" cy="90" r="2.8" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        <circle cx="83" cy="90" r="2.8" fill="#8B1A2A" opacity="0.2" />
        <circle cx="83" cy="90" r="2.8" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        {/* Tip */}
        <circle cx="80" cy="95" r="2.2" fill="#8B1A2A" opacity="0.2" />
        <circle cx="80" cy="95" r="2.2" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
        {/* Highlight */}
        <circle cx="73" cy="72" r="1.5" fill="#D87080" opacity="0.3" />
      </g>

      {/* --- Berry 3 - semi-ripe, lighter --- */}
      <g transform="rotate(-3 98 54)">
        {/* Calyx */}
        <path d="M94 52 L92 49 M97 51 L96 48 M101 52 L103 49" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
        {/* Drupelets - row 1 */}
        <circle cx="95" cy="56" r="3.2" fill="#A83030" opacity="0.18" />
        <circle cx="95" cy="56" r="3.2" stroke="#8B2020" strokeWidth="1.8" fill="none" />
        <circle cx="101" cy="56" r="3.2" fill="#A83030" opacity="0.18" />
        <circle cx="101" cy="56" r="3.2" stroke="#8B2020" strokeWidth="1.8" fill="none" />
        {/* Row 2 */}
        <circle cx="93" cy="62" r="3.2" fill="#A83030" opacity="0.18" />
        <circle cx="93" cy="62" r="3.2" stroke="#8B2020" strokeWidth="1.8" fill="none" />
        <circle cx="99" cy="61" r="3" fill="#A83030" opacity="0.18" />
        <circle cx="99" cy="61" r="3" stroke="#8B2020" strokeWidth="1.8" fill="none" />
        <circle cx="105" cy="62" r="3.2" fill="#A83030" opacity="0.18" />
        <circle cx="105" cy="62" r="3.2" stroke="#8B2020" strokeWidth="1.8" fill="none" />
        {/* Row 3 */}
        <circle cx="95" cy="68" r="3" fill="#A83030" opacity="0.18" />
        <circle cx="95" cy="68" r="3" stroke="#8B2020" strokeWidth="1.8" fill="none" />
        <circle cx="101" cy="68" r="3" fill="#A83030" opacity="0.18" />
        <circle cx="101" cy="68" r="3" stroke="#8B2020" strokeWidth="1.8" fill="none" />
        {/* Tip */}
        <circle cx="98" cy="73" r="2.5" fill="#A83030" opacity="0.18" />
        <circle cx="98" cy="73" r="2.5" stroke="#8B2020" strokeWidth="1.8" fill="none" />
        {/* Highlight */}
        <circle cx="93" cy="56" r="1.5" fill="#D89080" opacity="0.25" />
      </g>

      {/* --- Berry 4 - unripe, green-tinged --- */}
      <g transform="rotate(5 115 44)">
        {/* Calyx */}
        <path d="M111 42 L109 39 M114 41 L113 38 M118 42 L120 39" stroke="#3D6B4F" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
        {/* Drupelets - row 1 */}
        <circle cx="112" cy="46" r="2.8" fill="#7A5030" opacity="0.15" />
        <circle cx="112" cy="46" r="2.8" stroke="#6B4020" strokeWidth="1.8" fill="none" />
        <circle cx="118" cy="46" r="2.8" fill="#7A5030" opacity="0.15" />
        <circle cx="118" cy="46" r="2.8" stroke="#6B4020" strokeWidth="1.8" fill="none" />
        {/* Row 2 */}
        <circle cx="111" cy="52" r="2.8" fill="#7A5030" opacity="0.15" />
        <circle cx="111" cy="52" r="2.8" stroke="#6B4020" strokeWidth="1.8" fill="none" />
        <circle cx="119" cy="52" r="2.8" fill="#7A5030" opacity="0.15" />
        <circle cx="119" cy="52" r="2.8" stroke="#6B4020" strokeWidth="1.8" fill="none" />
        {/* Tip */}
        <circle cx="115" cy="57" r="2.3" fill="#7A5030" opacity="0.15" />
        <circle cx="115" cy="57" r="2.3" stroke="#6B4020" strokeWidth="1.8" fill="none" />
      </g>

      {/* Small thorns on cane */}
      <path d="M72 118 L68 116" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M88 95 L84 93" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <path d="M105 72 L101 70" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

      {/* Ground dots */}
      <circle cx="45" cy="174" r="1.5" fill={colors.earth} opacity="0.2" />
      <circle cx="70" cy="176" r="1" fill={colors.earth} opacity="0.15" />
      <circle cx="95" cy="173" r="1.2" fill={colors.earth} opacity="0.18" />
      <circle cx="120" cy="175" r="1" fill={colors.earth} opacity="0.12" />
    </svg>
  )
}

export function TayberryIcon({ size = 48 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M24 4 Q24 8, 24 10" stroke="#5C4033" strokeWidth="1.8" strokeLinecap="round" />

      {/* Calyx leaves */}
      <path d="M20 8 L17 5 M24 7 L24 3 M28 8 L31 5" stroke="#3D6B4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Drupelet cluster - elongated cone, 5 rows */}
      {/* Row 1 */}
      <circle cx="21" cy="15" r="4" fill="#8B1A2A" opacity="0.2" />
      <circle cx="21" cy="15" r="4" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
      <circle cx="27" cy="15" r="4" fill="#8B1A2A" opacity="0.2" />
      <circle cx="27" cy="15" r="4" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
      {/* Row 2 */}
      <circle cx="19" cy="22" r="4" fill="#8B1A2A" opacity="0.2" />
      <circle cx="19" cy="22" r="4" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
      <circle cx="24" cy="21" r="3.5" fill="#8B1A2A" opacity="0.2" />
      <circle cx="24" cy="21" r="3.5" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
      <circle cx="29" cy="22" r="4" fill="#8B1A2A" opacity="0.2" />
      <circle cx="29" cy="22" r="4" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
      {/* Row 3 */}
      <circle cx="21" cy="29" r="3.5" fill="#8B1A2A" opacity="0.2" />
      <circle cx="21" cy="29" r="3.5" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
      <circle cx="27" cy="29" r="3.5" fill="#8B1A2A" opacity="0.2" />
      <circle cx="27" cy="29" r="3.5" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
      {/* Row 4 */}
      <circle cx="22" cy="35" r="3" fill="#8B1A2A" opacity="0.2" />
      <circle cx="22" cy="35" r="3" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
      <circle cx="27" cy="35" r="3" fill="#8B1A2A" opacity="0.2" />
      <circle cx="27" cy="35" r="3" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />
      {/* Row 5 (tip) */}
      <circle cx="24" cy="40" r="2.5" fill="#8B1A2A" opacity="0.2" />
      <circle cx="24" cy="40" r="2.5" stroke="#6B0F1A" strokeWidth="1.8" fill="none" />

      {/* Highlight */}
      <circle cx="19" cy="14" r="1.5" fill="#D87080" opacity="0.3" />
    </svg>
  )
}
