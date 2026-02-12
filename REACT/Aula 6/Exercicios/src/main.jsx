import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Paginas from './Paginas.jsx'
import SeletorCores from './seletorCores.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Paginas /> */}
    <SeletorCores />
  </StrictMode>,
)
