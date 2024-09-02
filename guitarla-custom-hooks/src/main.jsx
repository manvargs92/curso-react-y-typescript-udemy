import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // componente principal
import './index.css' // hoja CSS principal

createRoot(document.getElementById('root')).render( // inyecta el código jsx y el CSS en el index.html en el div con el id "root"
  <StrictMode>
    <App />
  </StrictMode>,
)
