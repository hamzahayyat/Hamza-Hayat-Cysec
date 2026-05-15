import React from 'react';
import { skills } from '../data';
import './Stats.css';

const Stats = () => {
  return (
    <section className="section stats-section" id="skills">
      <div className="container">
        <div className="stats-grid">
          <div className="stats-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Defending at <br/> speed and scale.
            </h2>
            <p style={{ color: 'var(--text-dark)', marginBottom: '2rem', maxWidth: '400px' }}>
              Advanced capabilities across the full offensive-defensive spectrum, powered by rigorous research and real-world operations.
            </p>
            
            <div className="skill-bars">
              <div className="skill-bar">
                <div className="skill-info">
                  <span>Offensive Security</span>
                  <span>94%</span>
                </div>
                <div className="progress-bg">
                  <div className="progress-fill" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-info">
                  <span>Defensive Security / SIEM</span>
                  <span>90%</span>
                </div>
                <div className="progress-bg">
                  <div className="progress-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-info">
                  <span>ML/AI Security</span>
                  <span>85%</span>
                </div>
                <div className="progress-bg">
                  <div className="progress-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-visuals">
            <div className="circle-stat">
              <svg viewBox="0 0 36 36" className="circular-chart red">
                <path className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                  strokeDasharray="94, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">94%</text>
              </svg>
              <div className="stat-label">Offensive Mastery</div>
            </div>

            <div className="circle-stat">
              <svg viewBox="0 0 36 36" className="circular-chart dark-red">
                <path className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                  strokeDasharray="78, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">78%</text>
              </svg>
              <div className="stat-label">AI/ML Integration</div>
            </div>
          </div>
        </div>

        <div className="skills-categories">
          {skills.map((skillGroup, index) => (
            <div className="card skill-card" key={index}>
              <h3>{skillGroup.category}</h3>
              <p>{skillGroup.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
