import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 text-center">
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} Joseph Gayflor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
