            import React from 'react';
            import heroImg from '../assets/hero.jpg';

            const Hero = () => {
            return (
              <>
              
              <div className="containerr"> 
                <h2 className="SliderInLeft mt-5">
                   Welcome to my persional site let make business to together   </h2>
                  </div>
            <div data-aos="fade-up" data-aos-duration="1000">

            <section id="home" className="py-5 bg-l">
                <div className="container">
                
            <div className="  row mt-5"> 
            <div className="col-md-6 mb-4  ">
                <h1 className="display-4 fw-bold text-right">Hi, I'm Joseph Gayflor</h1>
              <p className="lead mt-5">
                A passionate web developer focused on building fast, user-friendly websites using modern 
                frameworks like React, Vite, and Django.
                I turn real-world ideas into scalable digital solutions. Let’s work together to build 
                something impactful.
              </p>
              
              <a href="#contact" className="btn btn-outline-dark me-4 mt-4">Contact Me</a> 
              <a href="/resume.pdf" download className="btn btn-primary mt-4">Download Resume</a>
            </div>

            <div className="col-md-6 mb-4">       
               <img
                src={heroImg}
                alt=" Joseph Gayflor"
                class="autoAnimation"
                className=" mb-3 "
                style={{ width: '600px', height: '600px', position:'relative', left:'270 ',}}
              />
            </div>
            </div>
            </div>
            </section>
            </div>
              </>
            );
            };

            export default Hero;
