import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { ZoneProvider } from '../src/hooks/useZone'
import { colors } from '../src/theme/tokens'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Fraunces': require('../assets/fonts/Fraunces-Regular.ttf'),
    'Fraunces-Bold': require('../assets/fonts/Fraunces-Bold.ttf'),
    'Fraunces-ExtraBold': require('../assets/fonts/Fraunces-ExtraBold.ttf'),
    'Lora': require('../assets/fonts/Lora-Regular.ttf'),
    'Lora-Bold': require('../assets/fonts/Lora-Bold.ttf'),
  })

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync()
  }, [loaded, error])

  if (!loaded && !error) return null

  return (
    <ZoneProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="crop/[id]"
          options={{ title: '', headerBackTitle: 'Tillbaka' }}
        />
        <Stack.Screen
          name="zone"
          options={{ presentation: 'modal', title: 'Välj zon' }}
        />
      </Stack>
    </ZoneProvider>
  )
}
