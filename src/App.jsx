import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className="app-container" style={{ position: 'relative' }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        {/* Global Ambient Animations - Moved from Hero so they persist across pages */}
        <div className="cyber-sidebar">
          <div className="cyber-line line-1"></div>
          <div className="cyber-line line-2"></div>
          <div className="cyber-line line-3"></div>
        </div>
        <div className="hero-bg-glow"></div>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Stats />} />
          <Route path="/experience" element={
            <div style={{ paddingTop: '8rem' }}>
              <Experience />
            </div>
          } />
          <Route path="/projects" element={
            <div style={{ paddingTop: '8rem' }}>
              <Projects />
            </div>
          } />
          <Route path="/education" element={
            <div style={{ paddingTop: '8rem' }}>
              <Education />
            </div>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid var(--border-subtle)', marginTop: 'auto', color: 'var(--text-dark)', fontSize: '0.9rem', position: 'relative', zIndex: 10 }}>
          &copy; {new Date().getFullYear()} HamzaHayat.Cysec. All operations secured.
        </footer>
      </div>
    </Router>
  );
}

export default App;
