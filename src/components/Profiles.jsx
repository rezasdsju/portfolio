import React from 'react';

const Profiles = () => {
  const profiles = [
    { name: 'GitHub', url: 'https://github.com/rezasdsju', icon: '🐱' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/rezaul2002104', icon: '⚡' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/rezasdsju/', icon: '💻' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/rezaul-karim-rifat-229309296/', icon: '🔗' }
  ];

  return (
    <section id="profiles" style={{ padding: '80px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>My Profiles</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          {profiles.map((profile, index) => (
            <a 
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'white',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                minWidth: '120px'
              }}
            >
              <span style={{ fontSize: '2rem', marginBottom: '10px' }}>{profile.icon}</span>
              <span>{profile.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;