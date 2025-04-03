import React, { useState, useEffect } from 'react';
import { Link,NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900/95'
      }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src="https://templates.hibootstrap.com/findo/default/assets/img/logo-two.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </NavLink>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'
            } md:flex md:items-center absolute md:relative top-20 md:top-0 left-0 right-0 bg-gray-900 md:bg-transparent`}>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 md:py-0 ${isActive ? 'text-orange-500 font-semibold' : 'text-white hover:text-orange-500'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 md:py-0 ${isActive ? 'text-orange-500 font-semibold' : 'text-white hover:text-orange-500'}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/donations"
                className={({ isActive }) =>
                  `block py-2 md:py-0 ${isActive ? 'text-orange-500 font-semibold' : 'text-white hover:text-orange-500'}`
                }
              >
                Donations
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block py-2 md:py-0 ${isActive ? 'text-orange-500 font-semibold' : 'text-white hover:text-orange-500'}`
                }
              >
                Events
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block py-2 md:py-0 ${isActive ? 'text-orange-500 font-semibold' : 'text-white hover:text-orange-500'}`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 md:py-0 ${isActive ? 'text-orange-500 font-semibold' : 'text-white hover:text-orange-500'}`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Link
              to="/donete"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors inline-block"
            >
              Donate 
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;