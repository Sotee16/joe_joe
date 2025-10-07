import React from 'react';

const testimonials = [
  {
    name: 'Client A',
    title: 'CEO at Startup Inc.',
    quote: 'Joseph delivered excellent work. Very professional and creative!',
  },
  {
    name: 'Client B',
    title: 'Founder of TechWave',
    quote: 'Great attention to detail and quick turnaround. Highly recommended!',
  },
];

const Testimonials = () => (
    <div data-aos="fade-up" data-aos-duration="1000">

  <section id="testimonials" className="py-5 bg-white">
    <div className="container">
      <h2 className="text-center mb-4">Testimonials</h2>
      <div className="row">
        {testimonials.map((item, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <div className="card shadow p-3">
              <p className="fw-semibold">"{item.quote}"</p>
              <p className="mb-0 text-primary">{item.name}</p>
              <small className="text-muted">{item.title}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  </div>
);

export default Testimonials;
// This component displays a section of testimonials from clients, showcasing their feedback and names.