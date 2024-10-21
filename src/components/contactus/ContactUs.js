import React from "react";
import { MdEmail, MdPhone, MdLocationOn, MdPerson } from "react-icons/md"; // Import the icons
import "./ContactUs.css"; // Import your CSS file for modal styling
import logo from '../../assests/logo1.png' // Ensure the path is correct
import { GrUserManager } from "react-icons/gr";

const ContactUs = ({ closeModal }) => {
  const vendor = {
    email: ": contact@businesslicenseindia.com",
    phone: ": 8008701210, 7893728936",
    address: ": Plot No. 94/P, Near Vijaya Model High School, Subash Nagar, Quthbullapur, Hyderabad - 500055.",
    mdName: ": G.POOJITHA",
    ceoName: ": G.NAGENDRA",
  };

  return (
    <div className="custom-modal">
      <div className="modal-content">
        {/* Close "X" mark */}
        <span className="close-icon" onClick={closeModal}>
          &times;
        </span>

        <h1>
          <strong>Get In Touch :</strong>
        </h1>
        
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="company-logo" />
        </div>

        <div className="contact-info">
        <div className="mail">
            <GrUserManager className="contact-icon" />
            <strong>CEO </strong>
            <p>{vendor.mdName}</p>
          </div>

          {/* CEO */}
          <div className="mail">
            <MdPerson className="contact-icon" />
            <strong>Managing Director </strong>
            <p>{vendor.ceoName}</p>
          </div>

          <div className="mail">
            <MdPhone className="contact-icon" />
            <strong>Phone No </strong> 
            <p>{vendor.phone}</p>
          </div>

          <div className="mail">
            <MdEmail className="contact-icon" />
            <strong>Email Id </strong>
            <p>{vendor.email}</p>
          </div>

          <div className="mail">
            <MdLocationOn className="contact-icon" />
            <strong>Address </strong>
            <p>{vendor.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
