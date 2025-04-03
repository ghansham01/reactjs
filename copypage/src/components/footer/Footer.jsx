import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../utils/icons';

const Footer = () => {

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center">
              <img
                src='https://templates.hibootstrap.com/findo/default/assets/img/logo-two.png'
                alt="Logo"
                className="h-8"
              />
              <h2 className="text-2xl font-bold ml-2"></h2>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
            <div className="flex mt-4 space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-[#3C3A56] flex items-center justify-center">
                <Icons.Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#3C3A56] flex items-center justify-center">
                <Icons.Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#3C3A56] flex items-center justify-center">
                <Icons.Email className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#3C3A56] flex items-center justify-center">
                <Icons.Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Urgent causes */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6">Urgent causes</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="https://templates.hibootstrap.com/findo/default/assets/img/footer-thumb1.jpg"
                  alt="Donate for child"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-3">
                  <Link to="/donete" className="hover:text-orange-500 text-sm">
                    Donate for melina the little child
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://templates.hibootstrap.com/findo/default/assets/img/footer-thumb2.jpg"
                  alt="Relief for Australia"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-3">
                  <Link to="/donete" className="hover:text-orange-500 text-sm">
                    Relief for Australia cyclone affected
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6">Quick links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="flex items-center">
                  <span className="text-orange-500 mr-2">›</span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="flex items-center">
                  <span className="text-orange-500 mr-2">›</span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/events" className="flex items-center">
                  <span className="text-orange-500 mr-2">›</span>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/donations" className="flex items-center">
                  <span className="text-orange-500 mr-2">›</span>
                  Donation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6">Contact info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">
                  <i className="fa fa-map-marker"></i>
                </span>
                <span>68, Helvetica street, Jordan</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <i className="fa fa-phone"></i>
                </span>
                <span>+123-456-789</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">
                  <i className="fa fa-map-marker"></i>
                </span>
                <span>6A, New street, Spain</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <i className="fa fa-phone"></i>
                </span>
                <span>+548-658-956</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>Copyright © {new Date().getFullYear()} Findo. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;