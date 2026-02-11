import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. Import HashRouter instead of BrowserRouter
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap App in HashRouter and set the basename */}
    <HashRouter basename="/petrotek-site">
      <App />
    </HashRouter>
  </React.StrictMode>,
)