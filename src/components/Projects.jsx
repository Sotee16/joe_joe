import React from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="  row">
          <div className="col-md-6 mb-4">
            <img src={project1} alt="Sotee Fashion" className="img-fluid rounded shadow-sm zoom-out" />
            <h5 className="mt-3">Sotee Fashion</h5>
            <p>
              An e-commerce platform for a fashion brand built with React and Firebase. Features a gallery, cart, and admin dashboard for uploading collections.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <img src={project2} alt="Jessica Pageant" className="img-fluid rounded shadow-sm" />
            <h5 className="mt-3">Jessica Beauty Pageant</h5>
            <p>
              A modern portfolio and media site built for a pageant contestant. Includes gallery, live section, CMS-like admin upload panel, and smooth UI effects.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <img src={project3} alt="Winni" className="img-fluid rounded shadow-sm" />
            <h5 className="mt-3">Winni</h5>
            <p>
              An e-commerce platform for a selling brand 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
