import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/fraunces/400.css'
import '@fontsource/fraunces/700.css'
import '@fontsource/fraunces/800.css'
import '@fontsource/lora/400.css'
import '@fontsource/lora/700.css'
import './theme/global.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
