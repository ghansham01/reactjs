import React from 'react';
// import './Navigation.css'; // Assuming you have a CSS file for navigation styles

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">MyWebpage</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;