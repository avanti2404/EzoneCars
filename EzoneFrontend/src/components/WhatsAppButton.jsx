import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // Replace with your WhatsApp number
  const whatsappNumber = '7900163708';
  const message = 'Hello! I need help!'; // Default message

  // bg-gradient-to-r from-primary-blue via-blue-800 to-blue-400

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-2 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center gap-2 md:w-48 justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className='w-8 h-8'/> 
      <p className='text-lg font-heading hidden md:flex'>Chat with us</p>
    </a>
  );
};

export default WhatsAppButton;
