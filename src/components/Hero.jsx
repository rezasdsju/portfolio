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
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
        Hi, I'm Rezaul Karim Rifat
      </h1>

      <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 20px', lineHeight: '1.8' }}>
        I am a passionate and results-driven software developer with expertise in <strong>Python, Django, React, JavaScript, HTML, and CSS</strong>. 
        I specialize in <strong>Data Analysis using Python and Excel</strong>, transforming raw data into actionable insights that drive informed decision-making. 
        Currently, I am advancing my knowledge in <strong>Statistics and Data Science</strong> at <strong>Jahangirnagar University</strong>.
      </p>

      <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 30px', lineHeight: '1.8' }}>
        I have a strong track record of building scalable web applications and delivering data-driven solutions that efficiently solve real-world problems. 
        My experience spans full-stack development, data visualization, and automation, combining technical expertise with strategic thinking to achieve high-quality results.
      </p>

      <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.8' }}>
        I thrive in dynamic environments that challenge me to innovate and constantly improve. I enjoy transforming complex problems into elegant, user-friendly solutions. 
        My goal is to leverage technology to create a meaningful impact, whether it is developing interactive web platforms or uncovering valuable insights from data.
      </p>

      <a 
        href="#projects" 
        style={{ 
          padding: '15px 40px',
          backgroundColor: '#4493F8',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1.15rem',
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
