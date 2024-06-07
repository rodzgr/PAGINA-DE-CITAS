import React, { useState } from 'react';
import '../Styles/Carrusel.css';

const Carrusel = () => {
  const images = [
    { src: 'https://media.glamour.mx/photos/6190a329f5ed039ceea877f4/master/w_1600,c_limit/176376.jpg', alt: 'Imagen 1', legend: 'Leyenda 1' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Imagen 2', legend: 'Leyenda 2' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Imagen 3', legend: 'Leyenda 3' },
  ];

  const [userData, setUserData] = useState({
    name: '',
    gender: '',
    email: '',
    password: ''
  });

  const [isRegistering, setIsRegistering] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del usuario:', userData);
    // Aquí podrías enviar los datos del usuario a un servidor
    // y luego realizar alguna acción, como registrar al usuario
    setIsRegistering(false);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del usuario:', userData);
    // Aquí podrías enviar los datos del usuario a un servidor
    // y luego realizar alguna acción, como iniciar sesión
    // Redireccionar a otra página después de iniciar sesión
    window.location.href = '/otra-pagina'; // Cambia '/otra-pagina' por la ruta de la página a la que deseas redirigir
  };

  return (
    <div className="carousel">
      <div className="carousel__slide">
        <img src={images[0].src} alt={images[0].alt} />
        <div className="carousel__form">
          {isRegistering ? (
            <form onSubmit={handleRegisterSubmit}>
              <h2>Regístrate</h2>
              <label>
                Nombre:
                <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
              </label>
              <label>
                Sexo:
                <input type="text" name="gender" value={userData.gender} onChange={handleInputChange} />
              </label>
              <label>
                Correo:
                <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
              </label>
              <label>
                Contraseña:
                <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
              </label>
              <button type="submit">Registrarme</button>
            </form>
          ) : (
            <form onSubmit={handleLoginSubmit}>
              <h2>Iniciar sesión</h2>
              <label>
                Correo:
                <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
              </label>
              <label>
                Contraseña:
                <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
              </label>
              <button type="submit">Ingresar</button>
            </form>
          )}
        </div>
        <p className="carousel__legend">{images[0].legend}</p>
      </div>
    </div>
  );
};

export default Carrusel;
