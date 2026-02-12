import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FilmesEmCartaz from './FilmesEmCartaz.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <FilmesEmCartaz />
    </StrictMode>,
)
