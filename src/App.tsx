import { useState } from 'react'
import type { Zone } from './data/types'
import { CropList, CropPage, ZoneSelector } from './components/pages'
import { useLocalStorage } from './hooks/useLocalStorage'

type View = 'list' | 'crop'

function App() {
  const [view, setView] = useState<View>('list')
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null)
  const [userZone, setUserZone] = useLocalStorage<Zone>('odlingsguiden-zone', 4)
  const [showZoneModal, setShowZoneModal] = useState(false)

  return (
    <div style={{ padding: '0 16px 40px' }}>
      {view === 'list' ? (
        <CropList
          onSelect={(id) => {
            setSelectedCrop(id)
            setView('crop')
          }}
          userZone={userZone}
          onZoneClick={() => setShowZoneModal(true)}
        />
      ) : selectedCrop ? (
        <CropPage
          cropId={selectedCrop}
          onBack={() => setView('list')}
          userZone={userZone}
          onZoneClick={() => setShowZoneModal(true)}
          onNavigate={(id) => {
            setSelectedCrop(id)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
      ) : null}
      {showZoneModal && (
        <ZoneSelector
          currentZone={userZone}
          onSelect={setUserZone}
          onClose={() => setShowZoneModal(false)}
        />
      )}
    </div>
  )
}

export default App
