import { useState } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import type { Zone } from './data/types'
import { SLUG_TO_ID, ID_TO_SLUG } from './data/cropSlugs'
import { CropList, CropPage, ZoneSelector } from './components/pages'
import { useLocalStorage } from './hooks/useLocalStorage'

function CropRoute({ userZone, onZoneClick }: { userZone: Zone; onZoneClick: () => void }) {
  const { cropSlug } = useParams()
  const navigate = useNavigate()

  if (!cropSlug) return null

  const cropId = SLUG_TO_ID[cropSlug] ?? cropSlug

  return (
    <CropPage
      cropId={cropId}
      onBack={() => navigate('/')}
      userZone={userZone}
      onZoneClick={onZoneClick}
      onNavigate={(id) => {
        const slug = ID_TO_SLUG[id] ?? id
        navigate(`/${slug}`)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    />
  )
}

function App() {
  const [userZone, setUserZone] = useLocalStorage<Zone>('odlingsguiden-zone', 4)
  const [showZoneModal, setShowZoneModal] = useState(false)
  const navigate = useNavigate()

  return (
    <div style={{ padding: '0 16px 40px' }}>
      <Routes>
        <Route
          path="/"
          element={
            <CropList
              onSelect={(id) => {
                const slug = ID_TO_SLUG[id] ?? id
                navigate(`/${slug}`)
              }}
              userZone={userZone}
              onZoneClick={() => setShowZoneModal(true)}
            />
          }
        />
        <Route
          path="/:cropSlug"
          element={
            <CropRoute userZone={userZone} onZoneClick={() => setShowZoneModal(true)} />
          }
        />
      </Routes>
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
