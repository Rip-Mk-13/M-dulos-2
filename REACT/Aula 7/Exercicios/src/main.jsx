import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Filme from './Filme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Filme />
  </StrictMode>
)
