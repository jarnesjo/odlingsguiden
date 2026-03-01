import { lazy, Suspense, useState } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import type { Zone } from './data/types'
import { SLUG_TO_ID, ID_TO_SLUG } from './data/cropSlugs'
import { CropList, ZoneSelector } from './components/pages'
import { useLocalStorage } from './hooks/useLocalStorage'

const CropPage = lazy(() =>
  import('./components/pages/CropPage').then(m => ({ default: m.CropPage }))
)

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
      }}
    />
  )
}

function App() {
  const [userZone, setUserZone] = useLocalStorage<Zone>('odlingsguiden-zone', 4)
  const [showZoneModal, setShowZoneModal] = useState(false)
  const navigate = useNavigate()

  return (
    <div style={{ padding: '0 16px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, paddingBottom: 40 }}>
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
              <Suspense fallback={null}>
                <CropRoute userZone={userZone} onZoneClick={() => setShowZoneModal(true)} />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <footer style={{
        textAlign: 'center',
        padding: '24px 0 32px',
        fontSize: '13px',
        color: '#7A7568',
        fontFamily: 'var(--font-body)',
      }}>
        Skapad med omtanke av{' '}
        <a
          href="https://lillabosgarden.se"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#3D6B4F', textDecoration: 'none' }}
        >
          Lilla Bosgarden
        </a>
      </footer>
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
