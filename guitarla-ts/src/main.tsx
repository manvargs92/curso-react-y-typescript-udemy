import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // componente principal
import './index.css' // hoja CSS principal

createRoot(document.getElementById('root')!).render( // inyecta el código tsx y el CSS en el index.html en el div con el id "root"; ! Assertion Not  - le dice a TS que no va a ser null
  <StrictMode>
    <App />
  </StrictMode>,
)
