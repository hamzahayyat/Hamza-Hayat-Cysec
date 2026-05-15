import React from 'react';
import { projects, research } from '../data';
import { Terminal, Database, Network } from 'lucide-react';
import './Projects.css';

const getIcon = (category) => {
  if (category.includes('Network') || category.includes('Embedded')) return <Network size={24} />;
  if (category.includes('Database')) return <Database size={24} />;
  return <Terminal size={24} />;
};

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Key Projects & Research</h2>
        
        <div className="research-highlight mb-5">
          {research.map((res, index) => (
            <div className="card research-card" key={index}>
              <div className="research-badge">ACTIVE RESEARCH</div>
              <h3>{res.title}</h3>
              <p className="res-meta">{res.institution} | {res.date}</p>
              <ul>
                {res.highlights.map((hl, i) => (
                  <li key={i}>{hl}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid-2">
          {projects.map((project, index) => (
            <div className="card project-card" key={index}>
              <div className="project-icon">
                {getIcon(project.category)}
              </div>
              <h3>{project.title}</h3>
              <span className="project-category">{project.category} | {project.date}</span>
              <ul>
                {project.highlights.map((hl, i) => (
                  <li key={i}>{hl}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
