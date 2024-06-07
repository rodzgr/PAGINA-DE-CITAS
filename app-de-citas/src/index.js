import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./Componentes/Header"
import Carrusel from './Componentes/Carrusel';
import QuienesSomos from './Componentes/QuienesSomos.js';
import Cuerpo from './Componentes/Cuerpo.js';
import Perfiles from './Componentes/Perfiles.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Carrusel />
    <QuienesSomos/>
    <Cuerpo/>
    <Perfiles/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
