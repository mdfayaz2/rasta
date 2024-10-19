import React from 'react';
import './Whatsapp.css';

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/7893728936" // Replace with your WhatsApp number
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default Whatsapp;
