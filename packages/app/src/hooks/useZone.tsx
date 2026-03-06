import { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import type { Zone } from '@odlingsguiden/shared'

const ZONE_KEY = 'odlingsguiden:zone'
const DEFAULT_ZONE: Zone = 2

interface ZoneContextValue {
  zone: Zone
  setZone: (z: Zone) => void
}

const ZoneContext = createContext<ZoneContextValue>({
  zone: DEFAULT_ZONE,
  setZone: () => {},
})

export function ZoneProvider({ children }: { children: React.ReactNode }) {
  const [zone, setZoneState] = useState<Zone>(DEFAULT_ZONE)

  useEffect(() => {
    AsyncStorage.getItem(ZONE_KEY).then(v => {
      if (v) setZoneState(Number(v) as Zone)
    })
  }, [])

  function setZone(z: Zone) {
    setZoneState(z)
    AsyncStorage.setItem(ZONE_KEY, String(z))
  }

  return (
    <ZoneContext.Provider value={{ zone, setZone }}>
      {children}
    </ZoneContext.Provider>
  )
}

export function useZone() {
  return useContext(ZoneContext)
}
