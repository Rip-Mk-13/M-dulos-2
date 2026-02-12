import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ComponentesFilhos from './ComponentesFilhos'
// import PaginaPai from './SPA/PaginaPai.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PaginaPai /> */}
    <ComponentesFilhos />
  </StrictMode>,
)
