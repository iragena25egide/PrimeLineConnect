import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/+17059883055', '_blank'); 
  };

  return (
    <div
      onClick={openWhatsApp}
      title='Chat With Us'
      style={{zIndex:1400}}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg cursor-pointer transition-transform transform "
    >
      <FaWhatsapp size={30} />
    </div>
  );
};

export default WhatsAppIcon;
