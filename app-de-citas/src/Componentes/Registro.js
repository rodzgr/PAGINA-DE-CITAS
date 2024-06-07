// src/components/RegisterForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Styles/Register.css';

const Registro = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a un servidor o guardarlos localmente
    console.log('Formulario enviado:', formData);
    // Reinicia el estado del formulario después de enviar
    setFormData({ name: '', email: '', password: '' });
  };

  const handleRedirect = () => {
    // Redirige al usuario a la página de registro
    history.push('/registro');
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Correo electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Registrarse</button>
      </form>
      <button className="redirect-button" onClick={handleRedirect}>Ir al registro</button>
    </div>
  );
};

export default Registro;
