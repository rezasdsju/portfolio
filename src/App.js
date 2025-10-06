// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'; // Projects কম্পোনেন্ট ইম্পোর্ট করুন
import Profiles from './components/Profiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects /> {/* এখানে Projects কম্পোনেন্ট যোগ করুন */}
      <Profiles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;