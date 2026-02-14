import React from 'react';
import MyNavbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import bg from '../assets/bg.jpg'; 

const HeaderWrapper = () => {
  return (
    <div 
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <MyNavbar />
      <Hero />
    </div>
  );
};

export default HeaderWrapper;