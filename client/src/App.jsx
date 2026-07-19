import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './components/Header.jsx';
import PageListe from './pages/PageListe.jsx';
import FicheArtisan from './pages/FicheArtisan.jsx';
import MentionsLegales from './pages/MentionsLegales.jsx';
import DonnesPersonnelles from './pages/DonneesPersonnelles.jsx';
import Accessibilite from './pages/Accessibilite.jsx';
import Cookies from './pages/Cookies.jsx';
import Footer from './components/Footer.jsx';
import SrcollToTop from './components/scrollToUp.jsx';


function App() {

  return (
    <div className='App' >
      <SrcollToTop />
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/artisans' element={<PageListe />} />
        <Route path='/artisans/:id' element={<FicheArtisan />} />
        <Route path='/mentions_legales' element={<MentionsLegales />} />
        <Route path='/donnees_personnelles' element={<DonnesPersonnelles />} />
        <Route path='/accessibilite' element={<Accessibilite />} />
        <Route path='/cookies' element={<Cookies />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;