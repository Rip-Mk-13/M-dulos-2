import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListaFilmes from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaFilmes />
  </StrictMode>
)