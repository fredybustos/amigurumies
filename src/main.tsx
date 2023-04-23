import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'
import '@fontsource/poppins'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/900.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
