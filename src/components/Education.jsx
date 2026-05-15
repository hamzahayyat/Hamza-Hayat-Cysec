import React, { useState } from 'react';
import { education, certifications } from '../data';
import { Award, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import './Education.css';

const Education = () => {
  const [openEdu, setOpenEdu] = useState(null);

  const toggleEdu = (index) => setOpenEdu(openEdu === index ? null : index);

  return (
    <section className="section edu-section" id="education">
      <div className="container">
        <div className="grid-2">
          
          <div className="education-column">
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem' }}>
              <BookOpen className="inline-icon" /> Education
            </h2>
            
            <div className="edu-list">
              {education.map((edu, index) => (
                <div 
                  className={`edu-item card interactive-card ${openEdu === index ? 'active' : ''}`} 
                  key={index}
                  onClick={() => toggleEdu(index)}
                >
                  <div className="edu-header">
                    <div>
                      <h3>{edu.degree}</h3>
                      <div className="edu-meta">{edu.institution} | {edu.date}</div>
                    </div>
                    <button className="expand-btn-accent small">
                      {openEdu === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                  
                  <div className={`expandable-content ${openEdu === index ? 'open' : ''}`}>
                    <div className="expandable-inner">
                      <p>{edu.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cert-column">
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem' }}>
              <Award className="inline-icon" /> Certifications
            </h2>
            
            <div className="cert-list">
              {certifications.map((cert, index) => (
                <div className="cert-item interactive-card-hover" key={index}>
                  <Award size={18} className="cert-icon" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;
