import React from 'react';
import heroImg from '../assets/hero.jpg'; 

const Hero = () => {
  return (
    <section id="home" className="py-5 text-center bg-light">
      <div className="container">
        <img
          src={heroImg}
          alt="Your Profile"
          className="rounded-circle mb-3"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <h1 className="fw-bold">Hi, I'm Joseph Gayflor</h1>
        <p className="lead">Frontend Developer | React Lover | SaaS Builder</p>
        <a href="/resume.pdf" download className="btn btn-primary mt-3">Download Resume</a>
      </div>
    </section>
  );
};

export default Hero;
