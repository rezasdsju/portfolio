import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      style={{ 
        padding: '100px 20px',
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #5568a3ff 0%, #c0b1cfff 50%, #0e055eff 100%)',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Hi, I'm Rezaul Karim Rifat
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 30px' }}>
        I am an expert in <strong>Python, Django, React, JavaScript, HTML, CSS</strong>, 
        and specialize in <strong>Data Analysis with Python & Excel</strong>. 
        I love building web applications and creating data-driven solutions.
      </p>
      <a 
        href="#projects" 
        style={{ 
          padding: '15px 35px',
          backgroundColor: '#4493F8',
          color: 'white',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          transition: '0.3s',
        }}
        onMouseEnter={e => e.target.style.backgroundColor = '#3170d1'}
        onMouseLeave={e => e.target.style.backgroundColor = '#4493F8'}
      >
        View My Projects
      </a>
    </section>
  );
};

export default Hero;
