import React, { useState, useEffect } from 'react';
import './Home.css';
import { MdContactMail } from "react-icons/md";
import logo from '../../assests/logo1.png';
import ContactUs from '../contactus/ContactUs';
import "@fontsource/poppins";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [textColor, setTextColor] = useState('#FF671F');
  const [animationKey, setAnimationKey] = useState(0); // Key for triggering animation
  const text = "A COMPLETE MULTIPLE BUSINESS PLATFORM";

  useEffect(() => {
    const interval = setInterval(() => {
      setTextColor((prevColor) => (prevColor === '#FF671F' ? '#046A38' : '#FF671F'));
      setAnimationKey((prevKey) => prevKey + 1); // Change key to trigger animation
    }, 10000); // Change color every 15 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li className="business-rasta" key={animationKey} style={{ color: textColor }}>
              {text.split('').map((char, index) => (
                <span key={index} style={{ '--i': index }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </li>
            <li>
              <a href="#contact" onClick={() => setModalIsOpen(true)}>
                <MdContactMail className='icon' /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {modalIsOpen && <ContactUs closeModal={() => setModalIsOpen(false)} />}
    </div>
  );
}

export default Home;
