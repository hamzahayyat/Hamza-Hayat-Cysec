import React from 'react';
import { experience } from '../data';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Professional Operations</h2>
        
        <div className="timeline">
          {experience.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              <div className="timeline-content card">
                <div className="exp-header">
                  <h3>{exp.role}</h3>
                  <span className="exp-date">{exp.date}</span>
                </div>
                <h4 className="exp-company">{exp.company} | {exp.location}</h4>
                <ul className="exp-highlights">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
