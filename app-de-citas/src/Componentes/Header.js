// src/Header.js
import React from 'react';
import '../Styles/Header.css';

export const Header = () => {
  return (
  
        <header className="header">
          <div className="logo">
            <img src="/logo.png" alt="Logo" /> {/* Asegúrate de tener un logo en la carpeta public */}
          </div>
          <h1 className="title">    UMSA LOVE ☺</h1>
          <nav className="navigation">
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#search">Solteros/as</a></li>
              <li><a href="#messages">registrate</a></li>
              <li><a href="#profile">Contactenos</a></li>
              <li><a href="#profile">Quienes somos</a></li>
              <li><a href="#profile">Testimonios</a></li>
            </ul>
          </nav>
        </header>
      );
  
};

export default Header;
