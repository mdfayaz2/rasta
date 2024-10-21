import React from 'react';
import './Footer.css';
import { MdEmail, MdPhone } from 'react-icons/md'; // Import email and phone icons
import logo from '../../assests/logo1.png'; // Import your logo for About Us section

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branches Section */}
        <div className="footer-section">
          <h4>Branches</h4>
          <ul className="branch-list">
            <p><strong>HEAD OFFICE :</strong> HYDERABAD<br /> Plot No. 94/P, Near Vijaya Model High School, <br></br>Subash Nagar, Quthbullapur, Hyderabad - 500055.</p>
            <p><strong>BRANCH OFFICES :</strong></p>
            <p>VISAKHAPATNAM<br /></p>
            <p>BANGALORE<br /></p>
            <p>CHENNAI<br /></p>
          </ul>
        </div>

        {/* Contact Us Section with icons */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><MdEmail className="footer-icon" /> Email: contact@businesslicenseindia.com</p>
          <p><MdPhone className="footer-icon" /> Phone: 8008701210, 7893728936</p>
        </div>

        {/* About Us Section with logo */}
        <div className="footer-section about-us">
          <h4> About Us </h4>
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>We are a leading platform offering business, billing software, websites, applications and job <br></br>opportunities to help businesses thrive.</p>
        </div>
      </div>
      <p>© 2024 License Rasta. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
