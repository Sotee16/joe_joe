import React from 'react';
import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';

const Achievements = () => {
  return (
    <section id="achievements" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4">My Achievements</h2>
        <div className="row">
          {[cert1, cert2].map((cert, index) => (
            <div className="col-md-6 mb-4" key={index} data-aos="fade-up">
              <div className="card shadow-sm">
                <img src={cert} alt={`Certificate ${index + 1}`} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Certificate {index + 1}</h5>
                  <p className="card-text">Placeholder description for this certificate or award.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
