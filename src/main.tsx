import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/fraunces/latin-400.css'
import '@fontsource/fraunces/latin-700.css'
import '@fontsource/fraunces/latin-800.css'
import '@fontsource/fraunces/latin-ext-400.css'
import '@fontsource/fraunces/latin-ext-700.css'
import '@fontsource/fraunces/latin-ext-800.css'
import '@fontsource/lora/latin-400.css'
import '@fontsource/lora/latin-700.css'
import '@fontsource/lora/latin-ext-400.css'
import '@fontsource/lora/latin-ext-700.css'
import './theme/global.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
