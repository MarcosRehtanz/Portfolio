import React from 'react'
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ContextProvider from './context/allContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ContextProvider >
          <App />
        </ContextProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
