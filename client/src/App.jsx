import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './components/Header.jsx';

function App() {

  return (
    <div className='App' >
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;