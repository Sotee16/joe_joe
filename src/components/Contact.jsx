import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      setShowToast(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000">

    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>

            {/* Toast Notification */}
            <div
              className={`toast-container position-fixed bottom-0 end-0 p-3 ${showToast ? 'show' : 'hide'}`}
              style={{ zIndex: 1055 }}
            >
              <div className="toast align-items-center text-bg-success border-0 show">
                {/* <div className="d-flex">
                  <div className="toast-body">✅ Message sent successfully!</div>
                  <button
                    type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    onClick={() => setShowToast(false)}
                  ></button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
 