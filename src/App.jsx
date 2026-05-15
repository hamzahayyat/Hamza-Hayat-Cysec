import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import { personalInfo } from './data';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Projects />
        <Education />
      </main>
      
      <footer id="contact" style={{ textAlign: 'center', padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Initiate Contact</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Secure channels are open for collaboration and deployment.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <a href={`mailto:${personalInfo.altEmail}`} className="glow-btn">Work Email: {personalInfo.altEmail}</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="glow-btn-outline">LinkedIn Profile</a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="glow-btn-outline">GitHub Profile</a>
        </div>
        <p style={{ color: 'var(--text-dark)', fontSize: '0.8rem' }}>© 2026 {personalInfo.name}. All rights reserved. Zero Trust Architecture.</p>
      </footer>
    </div>
  );
}

export default App;
