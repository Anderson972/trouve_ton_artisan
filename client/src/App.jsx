import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './components/Header.jsx';
import PageListe from './pages/PageListe.jsx';



function App() {

  return (
    <div className='App' >
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/artisans' element={<PageListe />} />
{/*         <Route path='/artisans/:id' element={<Artisan />} /> */}
      </Routes>
    </div>
  );
}

export default App;