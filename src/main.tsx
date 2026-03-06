import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/fraunces/latin-400.css'
import '@fontsource/fraunces/latin-700.css'
import '@fontsource/fraunces/latin-800.css'
import '@fontsource/lora/latin-400.css'
import '@fontsource/lora/latin-700.css'
import '@fontsource/lora/latin-ext-400.css'
import '@fontsource/lora/latin-ext-700.css'
import './theme/global.css'
import App from './App'

const root = document.getElementById('root')!

// Hydrera om prerenderad HTML finns, annars skapa ny root (dev)
const app = (
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

if (root.children.length > 0) {
  ReactDOM.hydrateRoot(root, app)
} else {
  ReactDOM.createRoot(root).render(app)
}
