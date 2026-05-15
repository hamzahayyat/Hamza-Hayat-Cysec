import React from 'react';
import { skills } from '../data';
import { ShieldCheck, Crosshair, Cpu } from 'lucide-react';
import './Stats.css';

const Stats = () => {

  return (
    <section className="section stats-section" id="skills">
      <div className="container">
        
        {/* Bento Box Layout */}
        <div className="bento-grid">
          
          <div className="bento-card bento-wide">
            <div className="bento-header">
              <ShieldCheck size={40} className="bento-icon" />
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem', fontSize: '2.5rem' }}>
                Defending at <br/> speed and scale.
              </h2>
            </div>
            <p style={{ color: 'var(--text-dark)', maxWidth: '600px', fontSize: '1.1rem' }}>
              Advanced capabilities across the full offensive-defensive spectrum, powered by rigorous research, real-world operations, and next-generation AI integrations.
            </p>
          </div>

          <div className="bento-card bento-stat">
            <div className="bento-stat-top">
              <Crosshair size={24} className="text-red" />
              <span className="badge">94% EFFICIENCY</span>
            </div>
            <div className="circle-wrapper">
              <svg viewBox="0 0 36 36" className="circular-chart red">
                <path className="circle-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle" strokeDasharray="94, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">94%</text>
              </svg>
            </div>
            <div className="stat-info">
              <h4>Offensive Mastery</h4>
              <p>Red team operations & penetration testing</p>
            </div>
          </div>

          <div className="bento-card bento-stat">
            <div className="bento-stat-top">
              <Cpu size={24} className="text-red" />
              <span className="badge">78% AUTOMATION</span>
            </div>
            <div className="circle-wrapper">
              <svg viewBox="0 0 36 36" className="circular-chart dark-red">
                <path className="circle-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle" strokeDasharray="78, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">78%</text>
              </svg>
            </div>
            <div className="stat-info">
              <h4>AI/ML Integration</h4>
              <p>Next-gen IDS and threat detection networks</p>
            </div>
          </div>

        </div>

        {/* Capabilities Matrix */}
        <div className="capabilities-matrix">
          {skills.map((skillGroup, index) => (
            <div className="matrix-column" key={index}>
              <h3 className="matrix-title">{skillGroup.category}</h3>
              <ul className="matrix-list">
                {skillGroup.items.split(', ').map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Stats;
