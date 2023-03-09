import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // import Routes

import Home from './pages/Home/Home'
import FicheLogement  from './pages/FicheLogement/FicheLogement'
import APropos from './pages/APropos/APropos'
import Erreur from './pages/Erreur/Erreur'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import styles from './App.module.css'

function App() {
    return (
        <Router>
          <Header />
          <Routes> 
              <Route exact path="/" element={<Home />} />
              <Route path="/Fichelogement/:id" element={<FicheLogement />} /> 
              <Route path="/APropos" element={<APropos />} />
              <Route path="*" element={<Erreur />}/>
          </Routes> 
          <Footer />
      </Router>
    )
}

export default App