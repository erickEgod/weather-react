import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppWeather } from './AppWeather.jsx'
import "./styles/weatherStyle.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWeather />
  </StrictMode>,
)
