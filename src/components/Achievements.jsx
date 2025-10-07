import React from "react";
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";

const Achievements = () => {
  return (
    <section id="achievements" className="py-5 bg-white " data-aos="fade-up">

        <div className="container">
        <h2 className="text-center mb-4">Achievements</h2>
       

        <nav className={`navbar navbar-expand-lg justify-content-center   `}>
           <ul className="navbar-nav me-3">
            <li className="nav-item"><a className="nav-links" href="Skill.js">Certificate</a></li>
            <li className="nav-item"><a className="nav-links" href="#">Diploma</a></li>
            <li className="nav-item"><a className="nav-links" href="#">Degree</a></li>
             
            </ul>
        </nav>
       

        <ul className="list-unstyled center">
          <li>📜 Diploma in Computer Studies – feline</li>
          <li>🏆 Web Development Certificate – FreeCodeCamp</li>
          <li>🧠 Cisco Network Fundamentals – Cisco Academy</li>
        </ul>
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <img src={cert1} alt="Certificate 1" className="img-fluid shadow" />
          </div>
          <div className="col-md-6 mb-3">
            <img src={cert2} alt="Certificate 2" className="img-fluid shadow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
// This component displays a section of achievements, including a list of certifications and images of the certificates.