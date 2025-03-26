// filepath: /react-webpage/react-webpage/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      <nav>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;