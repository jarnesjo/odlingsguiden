import { lazy, Suspense, useState } from 'react'
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom'
import type { Category, Zone } from './data/types'
import { SLUG_TO_ID, ID_TO_SLUG } from './data/cropSlugs'
import { MONTH_SLUGS, monthSlugToNumber } from './utils/monthParser'
import { CropList, ZoneSelector } from './components/pages'
import { useLocalStorage } from './hooks/useLocalStorage'

const CropPage = lazy(() =>
  import('./components/pages/CropPage').then(m => ({ default: m.CropPage }))
)

/** Resolves which view the current route represents */
type View = 'sasong' | Category

function getViewPath(view: View): string {
  if (view === 'grönsaker') return '/'
  if (view === 'sasong') return '/säsong'
  return `/${view}`
}

function CropRoute({ userZone, onZoneClick }: { userZone: Zone; onZoneClick: () => void }) {
  const { cropSlug } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  if (!cropSlug) return null

  const cropId = SLUG_TO_ID[cropSlug] ?? cropSlug
  const backPath = (location.state as { from?: string })?.from ?? '/'

  return (
    <CropPage
      cropId={cropId}
      onBack={() => navigate(backPath)}
      userZone={userZone}
      onZoneClick={onZoneClick}
      onNavigate={(id) => {
        const slug = ID_TO_SLUG[id] ?? id
        navigate(`/${slug}`, { state: { from: backPath } })
      }}
    />
  )
}

function ListRoute({ userZone, onZoneClick, view, monthSlug }: {
  userZone: Zone
  onZoneClick: () => void
  view: View
  monthSlug?: string
}) {
  const navigate = useNavigate()

  const currentMonth = monthSlug
    ? (monthSlugToNumber(monthSlug) ?? new Date().getMonth() + 1)
    : new Date().getMonth() + 1

  return (
    <CropList
      userZone={userZone}
      view={view}
      currentMonth={currentMonth}
      onViewChange={(v) => navigate(getViewPath(v))}
      onMonthChange={(m) => navigate(`/säsong/${MONTH_SLUGS[m]}`)}
      onSelect={(id) => {
        const slug = ID_TO_SLUG[id] ?? id
        const from = view === 'sasong'
          ? `/säsong/${MONTH_SLUGS[currentMonth]}`
          : getViewPath(view)
        navigate(`/${slug}`, { state: { from } })
      }}
      onZoneClick={onZoneClick}
    />
  )
}

function App() {
  const [userZone, setUserZone] = useLocalStorage<Zone>('odlingsguiden-zone', 4)
  const [showZoneModal, setShowZoneModal] = useState(false)

  const zoneClick = () => setShowZoneModal(true)

  return (
    <div style={{ padding: '0 16px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, paddingBottom: 40 }}>
        <Routes>
          <Route path="/" element={<ListRoute userZone={userZone} onZoneClick={zoneClick} view="grönsaker" />} />
          <Route path="/kryddor" element={<ListRoute userZone={userZone} onZoneClick={zoneClick} view="kryddor" />} />
          <Route path="/bär" element={<ListRoute userZone={userZone} onZoneClick={zoneClick} view="bär" />} />
          <Route path="/frukt" element={<ListRoute userZone={userZone} onZoneClick={zoneClick} view="frukt" />} />
          <Route path="/säsong" element={<ListRoute userZone={userZone} onZoneClick={zoneClick} view="sasong" />} />
          <Route path="/säsong/:monthSlug" element={<SeasonRoute userZone={userZone} onZoneClick={zoneClick} />} />
          <Route
            path="/:cropSlug"
            element={
              <Suspense fallback={null}>
                <CropRoute userZone={userZone} onZoneClick={zoneClick} />
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
          Lilla Bosgården
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

function SeasonRoute({ userZone, onZoneClick }: { userZone: Zone; onZoneClick: () => void }) {
  const { monthSlug } = useParams()
  return <ListRoute userZone={userZone} onZoneClick={onZoneClick} view="sasong" monthSlug={monthSlug} />
}

export default App
