import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const texts = [
    "Software Developer",
    "Data Analyst",
    "Full-Stack Developer",
    "Problem Solver"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Animated Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div
            className="profile-image-container"
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="profile-image">
              <div className="image-placeholder">
                <span>RKR</span>
              </div>
              <div className="image-glow"></div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hi, I'm <span className="name-highlight">Rezaul Karim Rifat</span>
          </motion.h1>

          {/* Animated Role Text */}
          <motion.div
            className="role-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="role-text">
              I am a{" "}
              <span className="animated-role">
                {texts[currentText]}
              </span>
            </h2>
          </motion.div>

          {/* Main Description */}
          <motion.div
            className="description-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="hero-description">
              Passionate software developer and data analyst with expertise in{" "}
              <span className="skill-highlight">Python, Django, React, JavaScript</span>. 
              Specializing in transforming raw data into actionable insights and building 
              scalable web applications.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="tech-stack"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="tech-item">Python</div>
            <div className="tech-item">Django</div>
            <div className="tech-item">React</div>
            <div className="tech-item">JavaScript</div>
            <div className="tech-item">Data Analysis</div>
            <div className="tech-item">CSS</div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <button 
              className="cta-btn primary-btn"
              onClick={scrollToProjects}
            >
              <span>View My Projects</span>
              <div className="btn-arrow">→</div>
            </button>
            
            <a 
              href="#contact" 
              className="cta-btn secondary-btn"
            >
              <span>Get In Touch</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Portfolio</a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <div className="scroll-arrow"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;