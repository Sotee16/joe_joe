// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ title, image, description }) => (
  <div className="col-md-6 mb-4">
    <img src={image} alt={title} className="img-fluid rounded shadow-sm" />
    <h5 className="mt-3">{title}</h5>
    <p>{description}</p>
  </div>
);

export default ProjectCard;
