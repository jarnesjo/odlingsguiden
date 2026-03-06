import { useHref, useLocation } from 'react-router-dom'

export function TrackingPixel() {
  const { pathname } = useLocation()
  const href = useHref(pathname)

  return (
    <img
      src={`/stats.php?pixel&s=odlingsguiden&p=${encodeURIComponent(href)}`}
      alt=""
      width="1"
      height="1"
      style={{ position: 'absolute', opacity: 0 }}
    />
  )
}
