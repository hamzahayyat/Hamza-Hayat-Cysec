import React, { useState } from 'react';
import { experience } from '../data';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              <div 
                className={`timeline-content card interactive-card ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleOpen(index)}
              >
                <div className="exp-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <h4 className="exp-company">{exp.company} | {exp.location}</h4>
                  </div>
                  <div className="exp-right">
                    <span className="exp-date">{exp.date}</span>
                    <button className="expand-btn">
                      {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                </div>
                
                <div className={`expandable-content ${openIndex === index ? 'open' : ''}`}>
                  <div className="expandable-inner">
                    <ul className="exp-highlights">
                      {exp.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
