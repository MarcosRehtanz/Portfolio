import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ContextProvider from './context/allContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider >
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
