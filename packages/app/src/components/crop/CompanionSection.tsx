import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import type { Companion, Companions } from '@odlingsguiden/shared'
import { hasProfile, CROP_LIST } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../../theme/tokens'
import { Icon } from '../icons/Icon'
import { SeedlingIcon, ChevronRightIcon } from '../icons'
import { CropGraphic } from '../illustrations/CropIcon'
import { Section } from './Section'

interface CompanionSectionProps {
  companions: Companions
}

function CompanionIcon({ comp }: { comp: Companion }) {
  if (comp.id) {
    const entry = CROP_LIST.find(c => c.id === comp.id)
    if (entry) return <CropGraphic id={entry.icon} size={18} category={entry.category} />
  }
  return <Icon name={comp.icon} size={18} />
}

export function CompanionSection({ companions }: CompanionSectionProps) {
  const router = useRouter()

  const renderCompanion = (comp: Companion, isGood: boolean) => {
    const clickable = !!(comp.id && hasProfile(comp.id))
    const cardStyle = isGood ? styles.goodCard : styles.badCard

    const content = (
      <View style={[styles.card, cardStyle]}>
        <View style={styles.companionName}>
          <CompanionIcon comp={comp} />
          <Text style={styles.nameText}>{comp.name}</Text>
          {clickable && <ChevronRightIcon size={14} color={colors.textMuted} />}
        </View>
        <Text style={styles.whyText}>{comp.why}</Text>
      </View>
    )

    if (clickable) {
      return (
        <Pressable
          key={comp.name}
          onPress={() => router.push(`/crop/${comp.id}`)}
          style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
        >
          {content}
        </Pressable>
      )
    }
    return <View key={comp.name}>{content}</View>
  }

  return (
    <Section title="Samodling" icon={<SeedlingIcon size={20} />}>
      <Text style={[styles.groupTitle, styles.goodTitle]}>Bra grannar</Text>
      {companions.good.map((comp) => renderCompanion(comp, true))}

      <Text style={[styles.groupTitle, styles.badTitle]}>Dåliga grannar</Text>
      {companions.bad.map((comp) => renderCompanion(comp, false))}
    </Section>
  )
}

const styles = StyleSheet.create({
  groupTitle: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    marginBottom: spacing.sm,
  },
  goodTitle: {
    color: colors.accent,
  },
  badTitle: {
    color: '#B54A3F',
    marginTop: spacing.md,
  },
  card: {
    borderRadius: radii.cardSmall,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderLeftWidth: 3,
  },
  goodCard: {
    backgroundColor: colors.accent + '08',
    borderLeftColor: colors.accent,
  },
  badCard: {
    backgroundColor: '#B54A3F08',
    borderLeftColor: '#B54A3F',
  },
  companionName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  nameText: {
    flex: 1,
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyBold,
    color: colors.text,
  },
  whyText: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    lineHeight: 16,
  },
})
