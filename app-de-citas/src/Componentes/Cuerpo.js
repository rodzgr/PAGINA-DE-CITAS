// src/Cuerpo.js
import React from 'react';
import '../Styles/Cuerpo.css';

const Cuerpo = () => {
  return (
    <div className="cuerpo">
      <div className="imagen">
        <img src="https://iliusstu-a.akamaihd.net/www.meetic.es/hpv-default/profile.responsive-9ff4b58d4b8.png" alt="Large Image 1" />
      </div>
      
      <div className="contenido">
        <div className="imagen">
          <img src="https://iliusstu-a.akamaihd.net/www.meetic.es/hpv-default/events-10d2ab43f65.png" alt="Large Image 2" />
        </div>
        <div className="texto">
          <h2>ten citas gratis</h2>
          <p>Este es el contenido del párrafo. Puedes agregar aquí cualquier texto que desees mostrar junto a la segunda imagen
            kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Cuerpo;
