import React from 'react';
import { education, certifications } from '../data';
import { Award, BookOpen } from 'lucide-react';
import './Education.css';

const Education = () => {
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
                <div className="edu-item card" key={index}>
                  <h3>{edu.degree}</h3>
                  <div className="edu-meta">{edu.institution} | {edu.date}</div>
                  <p>{edu.details}</p>
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
                <div className="cert-item" key={index}>
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
