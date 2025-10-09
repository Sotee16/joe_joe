import React, { useEffect, useState } from 'react';
import navbarImg from '../assets/navbar.JPG'; 

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved mode on page load
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Toggle dark mode and save it
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <> 
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} fixed-top shadow-sm`} style={{background:'purple',}}>
      <div className="container">
        <img  src={navbarImg} alt="Logo" className="navbar-brand-logo me-4 rounded-circle mb-2"
          style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        <a className="navbar-brand fw-bold" href="#">Joseph Gayflor</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-3">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#achievements">Achievements</a></li>
            <li className="nav-item"><a  className="nav-link" href="#autobiography" >Autobiography</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className='nav-item'><a className="nav-link" href="#about">About</a></li>
            {/* <button
  className="btn btn-outline-primary ms-2"
  data-bs-toggle="offcanvas"
  data-bs-target="#resumeDrawer"
>
  📄 View Resume
</button> */}

          </ul>

          {/* Dark mode toggle button */}
          <button onClick={toggleDarkMode} className="btn btn-outline-secondary">
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </nav>
 
    </>
  );
};

export default Navbar;
// This Navbar component includes a dark mode toggle feature.
// It uses localStorage to remember the user's preference across sessions.
