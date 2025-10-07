import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4">What Clients Say</h2>
        <div className="row">
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p>
                “Joseph delivered exactly what I needed. He was fast, communicative, and brought my vision to life beautifully.”
              </p>
              <footer className="blockquote-footer">Sarah Doe, Sotee Fashion</footer>
            </blockquote>
          </div>
          <div className="col-md-6">
            <blockquote className="blockquote">
              <p>
                “The site Joseph built helped my business grow 3x. Clean code, modern design, and smooth animations — highly recommended!”
              </p>
              <footer className="blockquote-footer">Mike Johnson, CEO</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
