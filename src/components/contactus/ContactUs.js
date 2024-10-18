import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"; // Import the icons
import "./ContactUs.css"; // Import your CSS file for modal styling

const ContactUs = ({ closeModal }) => {
  const vendor = {
    email: "contact@businesslicenseindia.com",
    phone: "8008701210, 7893728936",
    address: "Plot No. 94/P, Near Vijaya Model High School, Subash Nagar, Quthbullapur, Hyderabad - 500055.",
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
        {/* <h1><strong>NAGENDRA</strong></h1> */}

        <div className="contact-info">
          <div className="mail">
            <MdEmail className="contact-icon" />
            <strong>Email Id : </strong>
            <p>{vendor.email}</p>
          </div>

          <div className="mail">
            <MdPhone className="contact-icon" />
            <strong>Phone No :</strong> 
            <p>{vendor.phone}</p>
          </div>

          <div className="mail">
            <MdLocationOn className="contact-icon" />
            <strong>Address :</strong>
            <p>{vendor.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
