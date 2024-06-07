// src/Componentes/Perfiles.js
import React, { useState } from 'react';
import '../Styles/Perfil.css';

const Perfiles = () => {
  const initialProfiles = [
    { id: 1, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMng8PNWKk9VPaeW9rkegkiBNvDDU0m8V43A&s://media.glamour.mx/photos/6190a329f5ed039ceea877f4/master/w_1600,c_limit/176376.jpg' },
    { id: 2, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR036zPE0VoEiZMQNJt9euZ0VjSN4_eai_AWQ&s' },
    { id: 3, photo: 'https://example.com/photo3.jpg' },
    { id: 4, photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.guayu.com%2Fmujeres%2Fsolteras%2Fbolivia&psig=AOvVaw1dgJXQeX6F1pc3oSiil10_&ust=1717821992342000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCCkd_XyIYDFQAAAAAdAAAAABAE' },
    { id: 5, photo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F834995587147206027%2F&psig=AOvVaw1dgJXQeX6F1pc3oSiil10_&ust=1717821992342000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCCkd_XyIYDFQAAAAAdAAAAABAJ' },
    { id: 6, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMng8PNWKk9VPaeW9rkegkiBNvDDU0m8V43A&s://media.glamour.mx/photos/6190a329f5ed039ceea877f4/master/w_1600,c_limit/176376.jpg' },
    // Agrega más perfiles aquí
  ];

  const [profiles] = useState(initialProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    console.log('Liked profile id:', profiles[currentIndex].id);
    showNextProfile();
  };

  const handleDislike = () => {
    console.log('Disliked profile id:', profiles[currentIndex].id);
    showNextProfile();
  };

  const showNextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  return (
    <div className="profile-container">
      {profiles.length > 0 && (
        <div className="perfiles-card">
          <img src={profiles[currentIndex].photo} alt="Profile" className="profile-photo" />
          <div className="profile-actions">
            <button className="like-button" onClick={handleLike}>❤️</button>
            <button className="dislike-button" onClick={handleDislike}>❌</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Perfiles;
