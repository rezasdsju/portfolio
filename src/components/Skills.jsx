import React from 'react';

const Skills = () => {
  const skills = [
    'Python', 'Django', 'React', 'JavaScript', 
    'Data Analysis', 'Excel', 'SPSS', 'Git'
  ];

  return (
    <section id="skills" style={{ padding: '80px 20px', backgroundColor: '#043447ff'
}}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {skills.map((skill, index) => (
            <span 
              key={index}
              style={{
                backgroundColor: '#4493F8',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;