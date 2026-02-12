import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Encomendas from './SPA/Encomendas.jsx'
import "./style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Encomendas />
  </StrictMode>
)
