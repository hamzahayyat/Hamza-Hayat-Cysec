import React from 'react';
import { personalInfo } from '../data';
import { Lock, Server, ShieldAlert } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <Lock size={14} /> SECURITY CLEARANCE: VERIFIED
          </div>
          
          <div className="profile-intro-wrapper">
            {/* Fallback image using ui-avatars. Replace 'profile.jpg' locally when ready */}
            <img 
              src="https://ui-avatars.com/api/?name=Hamza+Hayat&background=ff1a1a&color=fff&size=200" 
              alt="Hamza Hayat" 
              className="profile-avatar"
            />
            <div>
              <h1 className="hero-title">
                Cyber Security <br />
                <span className="text-red">Leaders Unite</span>
              </h1>
            </div>
          </div>
          
          <h2 className="hero-subtitle">{personalInfo.title}</h2>
          <p className="hero-desc">{personalInfo.summary}</p>
          <div className="hero-actions">
            <a href="#contact" className="glow-btn">Engage Security</a>
            <a href="#projects" className="glow-btn-outline">View Operations</a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="shield-container">
            <div className="shield-pulse"></div>
            <ShieldAlert size={120} className="main-shield" />
            <div className="floating-icons">
              <Server size={30} className="float-icon i1" />
              <Lock size={30} className="float-icon i2" />
            </div>
            <div className="data-stream">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} className="stream-line" style={{ left: `${i * 10}%`, animationDelay: `${Math.random() * 2}s` }}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="trusted-by">
        <p>CORE COMPETENCIES</p>
        <div className="competency-logos">
           <span>Penetration Testing</span>
           <span>Threat Intelligence</span>
           <span>ML-based IDS</span>
           <span>Network Security</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
