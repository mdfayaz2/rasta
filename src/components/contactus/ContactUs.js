import React from "react";
import { MdEmail, MdPhone, MdLocationOn, MdPerson } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import "./ContactUs.css";
import logo from "../../assests/logo1.png"; // Ensure the path is correct

const ContactUs = ({ closeModal }) => {
  const vendor = {
    email: ": contact@businesslicenseindia.com",
    phone: ": 8008701210, 7893728936",
    address: ": Plot No. 94/P, Near Vijaya Model High School, Subash Nagar, Quthbullapur, Hyderabad - 500055.",
    mdName: ": G.POOJITHA",
    ceoName: ": G.NAGENDRA",
  };

  return (
    <AnimatePresence>
      <motion.div
        className="custom-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-content"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "100vh" }}
          transition={{ type: "spring", stiffness: 100 }}
        >
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
              <p>{vendor.ceoName}</p>
            </div>

            {/* Managing Director */}
            <div className="mail">
              <MdPerson className="contact-icon" />
              <strong>Managing Director </strong>
              <p>{vendor.mdName}</p>
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactUs;
