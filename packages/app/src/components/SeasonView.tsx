import { useState, useEffect, useCallback } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import {
  MONTH_NAMES,
  CROP_LIST,
  ALL_CROPS,
  getSeasonActivitiesSync,
} from '@odlingsguiden/shared'
import type { Zone, SeasonGroup } from '@odlingsguiden/shared'
import { colors, spacing, fontSize, fontFamily, radii } from '../theme/tokens'
import { CropIcon } from './illustrations/CropIcon'

const PREVIEW_COUNT = 3

interface Props {
  userZone: Zone
  currentMonth: number
  onMonthChange: (month: number) => void
  onSelect: (cropId: string) => void
}

export function SeasonView({ userZone, currentMonth, onMonthChange, onSelect }: Props) {
  const [groups, setGroups] = useState<SeasonGroup[]>([])
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  useEffect(() => {
    const data = getSeasonActivitiesSync(currentMonth, userZone, ALL_CROPS)
    setGroups(data)
    setExpanded(new Set())
  }, [currentMonth, userZone])

  const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1
  const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1
  const monthName = MONTH_NAMES[currentMonth - 1] ?? ''

  const toggleExpand = useCallback((groupLabel: string) => {
    setExpanded(prev => {
      const next = new Set(prev)
      next.add(groupLabel)
      return next
    })
  }, [])

  if (groups.length === 0) {
    return (
      <View>
        <MonthNav
          monthName={monthName}
          onPrev={() => onMonthChange(prevMonth)}
          onNext={() => onMonthChange(nextMonth)}
        />
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Lugnt i trädgården</Text>
          <Text style={styles.emptyText}>
            Inget särskilt att göra i {monthName.toLowerCase()} i zon {userZone}.
            Njut av att planera nästa säsong!
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      <MonthNav
        monthName={monthName}
        onPrev={() => onMonthChange(prevMonth)}
        onNext={() => onMonthChange(nextMonth)}
      />
      {groups.map(group => {
        const isExpanded = expanded.has(group.label)
        const activities = isExpanded
          ? group.activities
          : group.activities.slice(0, PREVIEW_COUNT)
        const remaining = group.activities.length - PREVIEW_COUNT

        return (
          <View key={group.label} style={styles.group}>
            <View style={styles.groupHeader}>
              <Text style={styles.groupLabel}>{group.label}</Text>
              <Text style={styles.groupCount}>{group.activities.length}</Text>
            </View>
            {activities.map(a => (
              <Pressable
                key={`${a.cropId}-${a.phase}`}
                style={({ pressed }) => [
                  styles.activityRow,
                  pressed && { opacity: 0.7 },
                ]}
                onPress={() => onSelect(a.cropId)}
              >
                <View style={styles.activityIcon}>
                  <CropIcon id={a.cropId} size={40} category={a.category} />
                </View>
                <View style={styles.activityInfo}>
                  <Text style={styles.activityName}>{a.cropName}</Text>
                  <Text style={styles.activityMeta}>
                    {a.phase} · {a.months}
                  </Text>
                </View>
                <Text style={styles.activityArrow}>{'\u2192'}</Text>
              </Pressable>
            ))}
            {!isExpanded && remaining > 0 && (
              <Pressable
                style={styles.showMore}
                onPress={() => toggleExpand(group.label)}
              >
                <Text style={styles.showMoreText}>
                  Visa {remaining} till
                </Text>
              </Pressable>
            )}
          </View>
        )
      })}
    </View>
  )
}

function MonthNav({
  monthName,
  onPrev,
  onNext,
}: {
  monthName: string
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <View style={styles.monthNav}>
      <Pressable style={styles.monthButton} onPress={onPrev}>
        <Text style={styles.monthArrow}>{'\u2190'}</Text>
      </Pressable>
      <Text style={styles.monthLabel}>{monthName}</Text>
      <Pressable style={styles.monthButton} onPress={onNext}>
        <Text style={styles.monthArrow}>{'\u2192'}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  monthNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.lg,
    gap: spacing.xl,
  },
  monthButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
  },
  monthArrow: {
    fontSize: 18,
    color: colors.text,
  },
  monthLabel: {
    fontSize: 22,
    fontFamily: fontFamily.headingBold,
    color: colors.text,
    minWidth: 140,
    textAlign: 'center',
  },
  group: {
    marginBottom: spacing.xxl,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  groupLabel: {
    fontSize: fontSize.h2,
    fontFamily: fontFamily.headingBold,
    color: colors.text,
  },
  groupCount: {
    fontSize: fontSize.label,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    marginHorizontal: spacing.lg,
    backgroundColor: colors.card,
    borderRadius: radii.card,
    gap: 14,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIconText: {
    fontSize: 18,
    fontFamily: fontFamily.headingBold,
    color: colors.textMuted,
  },
  activityInfo: {
    flex: 1,
  },
  activityName: {
    fontSize: 16,
    fontFamily: fontFamily.headingBold,
    color: colors.text,
  },
  activityMeta: {
    fontSize: fontSize.label,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    marginTop: 2,
  },
  activityArrow: {
    fontSize: 18,
    color: colors.textMuted,
  },
  showMore: {
    marginHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.accent,
    borderRadius: radii.card,
  },
  showMoreText: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.accent,
  },
  empty: {
    alignItems: 'center',
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.section,
  },
  emptyTitle: {
    fontSize: fontSize.h1,
    fontFamily: fontFamily.headingBold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  emptyText: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.body,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
})
