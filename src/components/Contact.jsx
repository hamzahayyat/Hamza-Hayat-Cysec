import React from 'react';
import { personalInfo } from '../data';
import { Mail, Github, Linkedin, Shield } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section contact-section" style={{ paddingTop: '10rem', minHeight: '80vh', position: 'relative', zIndex: 5 }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <Shield size={60} style={{ color: 'var(--primary-red)', margin: '0 auto 2rem' }} />
        <h2 className="section-title">Initiate Contact</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.2rem' }}>Secure channels are open for collaboration and deployment.</p>
        
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`mailto:${personalInfo.altEmail}`} className="bento-card" style={{ textDecoration: 'none', minWidth: '250px', textAlign: 'center' }}>
            <Mail size={30} style={{ color: 'var(--primary-red)', margin: '0 auto 1rem' }} />
            <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Work Email</h3>
            <p style={{ color: 'var(--text-muted)' }}>{personalInfo.altEmail}</p>
          </a>
          
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="bento-card" style={{ textDecoration: 'none', minWidth: '250px', textAlign: 'center' }}>
            <Linkedin size={30} style={{ color: 'var(--primary-red)', margin: '0 auto 1rem' }} />
            <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>LinkedIn</h3>
            <p style={{ color: 'var(--text-muted)' }}>Professional Network</p>
          </a>
          
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="bento-card" style={{ textDecoration: 'none', minWidth: '250px', textAlign: 'center' }}>
            <Github size={30} style={{ color: 'var(--primary-red)', margin: '0 auto 1rem' }} />
            <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>GitHub</h3>
            <p style={{ color: 'var(--text-muted)' }}>Code Repositories</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
