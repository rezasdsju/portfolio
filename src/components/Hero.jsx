import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={{ 
      padding: '10px 10px', 
      textAlign: 'center', 
      background: 'linear-gradient(135deg, #5568a3ff 0%, #c0b1cfff 50%, #0e055eff 100%)',

    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0px', color: 'black' }}>Welcome to My Portfolio</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: 'black' }}>
        I'm a passionate developer showcasing my projects and skills
      </p>
    </section>
  );
};

export default Hero;