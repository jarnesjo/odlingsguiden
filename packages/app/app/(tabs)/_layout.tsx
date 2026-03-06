import { Tabs } from 'expo-router'
import { colors, fontFamily } from '../../src/theme/tokens'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: {
          fontFamily: fontFamily.body,
        },
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { fontFamily: fontFamily.headingBold },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Odlingsguiden',
          tabBarLabel: 'Grödor',
        }}
      />
      <Tabs.Screen
        name="sasong"
        options={{
          title: 'Säsong',
          tabBarLabel: 'Säsong',
        }}
      />
    </Tabs>
  )
}
