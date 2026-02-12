import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LojaDoces from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LojaDoces />
  </StrictMode>
)