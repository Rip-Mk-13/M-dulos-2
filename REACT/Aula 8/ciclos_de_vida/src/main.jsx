import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App';
import Email from './Email';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Email />
  </StrictMode>,
)
