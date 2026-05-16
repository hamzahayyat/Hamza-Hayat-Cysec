import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data';
import { Lock, Server, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.png';
import './Hero.css';

const Hero = () => {
  const [history, setHistory] = useState([
    { type: 'output', text: 'System initialized. Type "whoami" or "help" to proceed.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const consoleEndRef = useRef(null);
  
  const fullText = personalInfo.summary;

  // Auto-scroll to bottom of console
  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, displayedText]);

  const handleCommand = (e) => {
    if (e.key === 'Enter' && !isTyping) {
      const cmd = inputValue.trim().toLowerCase();
      
      // Add user input to history
      setHistory(prev => [...prev, { type: 'input', text: `root@system:~$ ${inputValue}` }]);
      setInputValue('');

      if (cmd === 'whoami' || cmd === 'run script' || cmd === 'execute script') {
        setIsTyping(true);
        setDisplayedText('');
        
        let i = 0;
        const typingInterval = setInterval(() => {
          if (i < fullText.length) {
            setDisplayedText(fullText.substring(0, i + 1));
            i++;
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
            setHistory(prev => [...prev, { type: 'output', text: fullText }]);
            setDisplayedText('');
          }
        }, 10);
      } else if (cmd === 'help') {
        setHistory(prev => [...prev, { type: 'output', text: 'Available commands: whoami, help, clear' }]);
      } else if (cmd === 'clear') {
        setHistory([]);
      } else if (cmd !== '') {
        setHistory(prev => [...prev, { type: 'error', text: `bash: ${cmd}: command not found` }]);
      }
    }
  };

  return (
    <section className="hero" id="about">
      <div className="container hero-container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content">
          <div className="badge">
            <Lock size={14} /> SECURITY CLEARANCE: VERIFIED
          </div>
          
          <div className="profile-intro-wrapper">
            <img 
              src={profileImg} 
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
          
          <div className="hero-desc console-container" onClick={() => document.querySelector('.console-input')?.focus()}>
            {history.map((line, idx) => (
              <div key={idx} className={`console-line ${line.type}`}>
                {line.text}
              </div>
            ))}
            
            {isTyping && (
              <div className="console-line output">
                <span className="typing-text">{displayedText}</span>
                <span className="console-cursor">█</span>
              </div>
            )}

            {!isTyping && (
              <div className="console-input-line">
                <span className="console-prompt">root@system:~$</span>
                <input 
                  type="text" 
                  className="console-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleCommand}
                  autoFocus
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
            )}
            <div ref={consoleEndRef} />
          </div>
          <div className="hero-actions">
            <Link to="/contact" className="glow-btn">Engage Security</Link>
            <Link to="/projects" className="glow-btn-outline">View Operations</Link>
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
