import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // import Routes

import Home from './pages/Home/Home'
import FicheLogement  from './pages/FicheLogement/FicheLogement'
import APropos from './pages/APropos/APropos'
import Erreur from './pages/Erreur/Erreur'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
          <Header />
          <Routes> 
              <Route exact path="/" element={<Home />} />
              <Route path="/Fichelogement" element={<FicheLogement />} /> 
              <Route path="/APropos" element={<APropos />} />
              <Route path="*" element={<Erreur />}/>
          </Routes> 
          <Footer />
      </Router>
  </React.StrictMode>,
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

