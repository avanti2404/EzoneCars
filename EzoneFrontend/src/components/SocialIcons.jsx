import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SocialIcons = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-4 bg-white p-2 rounded-l-xl shadow-lg">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition-transform duration-200">
          <FaInstagram size={28} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform duration-200">
          <FaFacebook size={28} />
        </a>
        <a href="mailto:yourmail@example.com" className="text-red-500 hover:scale-110 transition-transform duration-200">
          <MdEmail size={28} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:scale-110 transition-transform duration-200">
          <FaYoutube size={28} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
