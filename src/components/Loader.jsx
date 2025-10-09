import React from 'react';
import './Loader.css';
import logo from '../assets/logo.png';

const Loader = ({ progress }) => (
  <div className="loader-wrapper fade-out-start">
    <img src={logo} alt="Logo" className="loader-logo mb-3" />
    <div className="loader"></div>
    <p className="text-white mt-3">{progress}%</p>
  </div>
);

export default Loader;
