import React, { useState } from 'react';
import { projects, research } from '../data';
import { Terminal, Database, Network, ChevronDown, ChevronUp } from 'lucide-react';
import './Projects.css';

const getIcon = (category) => {
  if (category.includes('Network') || category.includes('Embedded')) return <Network size={24} />;
  if (category.includes('Database')) return <Database size={24} />;
  return <Terminal size={24} />;
};

const Projects = () => {
  const [openResearch, setOpenResearch] = useState(null);
  const [openProject, setOpenProject] = useState(null);

  const toggleResearch = (index) => setOpenResearch(openResearch === index ? null : index);
  const toggleProject = (index) => setOpenProject(openProject === index ? null : index);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Key Projects & Research</h2>
        
        <div className="research-highlight mb-5">
          {research.map((res, index) => (
            <div 
              className={`card research-card interactive-card ${openResearch === index ? 'active' : ''}`} 
              key={index}
              onClick={() => toggleResearch(index)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div className="research-badge">ACTIVE RESEARCH</div>
                  <h3>{res.title}</h3>
                  <p className="res-meta">{res.institution} | {res.date}</p>
                </div>
                <button className="expand-btn-accent">
                  {openResearch === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>
              
              <div className={`expandable-content ${openResearch === index ? 'open' : ''}`}>
                <div className="expandable-inner">
                  <ul>
                    {res.highlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid-2">
          {projects.map((project, index) => (
            <div 
              className={`card project-card interactive-card ${openProject === index ? 'active' : ''}`} 
              key={index}
              onClick={() => toggleProject(index)}
            >
              <div className="project-top">
                <div className="project-icon">
                  {getIcon(project.category)}
                </div>
                <button className="expand-btn-accent small">
                  {openProject === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              <h3>{project.title}</h3>
              <span className="project-category">{project.category} | {project.date}</span>
              
              <div className={`expandable-content ${openProject === index ? 'open' : ''}`}>
                <div className="expandable-inner">
                  <ul>
                    {project.highlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
