import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      style={{ 
        padding: '80px 20px', 
        backgroundColor: '#f7f7f7', 
        color: '#1a1a1a' 
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>About Me</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.15rem', marginBottom: '20px' }}>
          Hello! I am <strong>Rezaul Karim Rifat</strong>, a passionate developer and data analyst. 
          I am an expert in <strong>Python, Django, React, JavaScript, HTML, CSS</strong> and skilled 
          in <strong>Data Analysis with Python & Excel</strong>. 
        </p>
        <p style={{ lineHeight: '1.8', fontSize: '1.15rem' }}>
          Currently, I am pursuing my studies in <strong>Statistics and Data Science</strong> at 
          <strong> Jahangirnagar University, Savar, Dhaka, Bangladesh</strong>. 
          I enjoy building innovative web applications and analyzing data to provide meaningful insights.
        </p>
      </div>
    </section>
  );
};

export default About;
