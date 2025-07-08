import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';

const Projects = () => {
  const projects = [
    { src: project1, title: 'Project One', description: 'Short description of project one.' },
    { src: project2, title: 'Project Two', description: 'Short description of project two.' },
  ];

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <PhotoProvider>
          <div className="row">
            {projects.map((proj, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card">
                  <PhotoView src={proj.src}>
                    <img src={proj.src} alt={proj.title} className="card-img-top" style={{ cursor: 'zoom-in' }} />
                  </PhotoView>
                  <div className="card-body">
                    <h5 className="card-title">{proj.title}</h5>
                    <p className="card-text">{proj.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};

export default Projects;
