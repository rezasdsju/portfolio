import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '30px 20px', 
      backgroundColor: '#333', 
      color: 'white',
      textAlign: 'center'
    }}>
      <p>&copy; Rezaul Karim Rifat. All rights reserved.</p>
      <p>Connect with me on 
        <a 
          href="https://github.com/rezasdsju" 
          style={{ color: '#4493F8', marginLeft: '5px' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;