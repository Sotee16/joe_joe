import React from 'react';

const Footer = () => {
  return (
     

    <footer className="bg-dark text-white py-3 text-center">
      <div className="container">
        <div class="row g-4">
         
        
          <h5 class="fw-bold text-white">Joseph Gayflor</h5>
          <p className="small">
            Celebrating beauty, culture, and confidence. Join us in empowering the next generation of global
            ambassadors.
          </p>
       </div>

       <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <h5 className="fw-bold text-white">Contact Us</h5>
         <nav className={`navbar navbar-expand-lg justify-content-center   `}>

          <ul className="navbar-nav me-3">
            <li className='footers'><i className="bi bi-geo-alt-fill me-2 text-green"></i>Monrovia, Liberia</li>
            <li className='footers'><i className="bi bi-telephone-fill me-2 text-green"></i>+231776103720</li>
            <li className='footers'><i className="bi bi-telephone-fill me-2 text-green"></i>+231886334033</li>
            <li className='footers'><i className="bi bi-envelope-fill me-2 text-green"></i>josephgayflor73@gmail.com</li>
          </ul>
          </nav>
        </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <h5 className="fw-bold text-white">Follow Us</h5>
          <div className="d-flex gap-3">
            <a href="https://www.facebook.com/share/19PwP7iAzW/?mibextid=wwXIfr" target="_blank">
              <img src="https://img.icons8.com/color/32/facebook-new.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img src="https://img.icons8.com/color/32/instagram-new.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img src="https://img.icons8.com/color/32/twitter--v1.png" alt="Twitter" />
            </a>

            <a href="https://wa.me/0886334033" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />

            </a>
          </div>
        </div>
      </div>

      <hr class="border-light mt-4" />

        <p className="mb-0">© {new Date().getFullYear()} Joseph Gayflor. All rights reserved.</p>
      
    </footer>
    
  );
};

export default Footer;
