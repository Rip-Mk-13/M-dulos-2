import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './exemploPropsState/App.jsx'
// import SetObj from './SetObj.jsx'
import SetArray from './SetArray.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <SetObj /> */}
    <SetArray />
  </StrictMode>,
)
