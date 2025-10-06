import React from 'react';

// ছবির path ঠিক রাখুন
import profilePic from '../assets/profile.jpg';

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#333', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={profilePic}
            alt="Profile"
            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
          />
          <h2>Rezaul Karim Rifat</h2>
        </div>
        <div>
          <a href="#home" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>About</a>
          <a href="#projects" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;