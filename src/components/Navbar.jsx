import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <Shield className="logo-icon" size={28} />
          <span>HamzaHayat.Cysec</span>
        </Link>
        
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
