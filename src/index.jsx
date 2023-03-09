import React from 'react'
import { createRoot } from 'react-dom/client'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // import Routes
import App from './App'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
