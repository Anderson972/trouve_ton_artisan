import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/scss/style.scss';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
