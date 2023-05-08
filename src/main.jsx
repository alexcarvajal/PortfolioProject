import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChangeProvider } from './context/useChange.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ChangeProvider>
      <App />
    </ChangeProvider>
   
  </React.StrictMode>,
)
