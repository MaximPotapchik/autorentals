
import '/icons/fortawesome';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
      <footer className="bg-red-600 text-white py-6 px-4 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h3 className="font-bold text-lg mb-2">Company Name</h3>
              <p className="text-sm">123 Address St, City, State, 12345</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
            </div>
            <div className="flex justify-center lg:justify-end space-x-4">
              <a href="https://www.facebook.com" className="text-white hover:text-red-700 transition duration-200 ease-in-out">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a href="https://www.instagram.com" className="text-white hover:text-red-700 transition duration-200 ease-in-out">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.twitter.com" className="text-white hover:text-red-700 transition duration-200 ease-in-out">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="mailto:info@example.com" className="text-white hover:text-red-700 transition duration-200 ease-in-out">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;