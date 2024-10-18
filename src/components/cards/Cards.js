import React, { useState } from 'react';
import { TfiWrite } from "react-icons/tfi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdApps } from "react-icons/md";
import { LuSearchCheck } from "react-icons/lu";
import '../cards/Cards.css';

const Cards = () => {
  const [activeCard, setActiveCard] = useState(null); // Track active card

  const handleCardClick = (card) => {
    setActiveCard(activeCard === card ? null : card); // Toggle visibility
  };

  return (
    <div className="cards-container">
      {/* Main Cards */}<h1 className='heading1'>OUR SERVICES</h1>
      <div className="container">
        {/* Business Registration Card */}
        <div 
          className="logo-card" 
          onClick={() => handleCardClick('businessRegistration')} 
          style={{ cursor: 'pointer' }}
        >
          <TfiWrite />
          <h3>Business Registration</h3>
        </div>

        {/* Billing Software Card */}
        <div 
          className="logo-card" 
          onClick={() => handleCardClick('billingSoftware')} 
          style={{ cursor: 'pointer' }}
        >
          <FaIndianRupeeSign />
          <h3>Billing Software</h3>
        </div>

        {/* Websites & Applications Card */}
        <div 
          className="logo-card" 
          onClick={() => handleCardClick('websitesApps')} 
          style={{ cursor: 'pointer' }}
        >
          <MdApps />
          <h3>Websites & Applications</h3>
        </div>

        {/* Jobs Card */}
        <div 
          className="logo-card" 
          onClick={() => handleCardClick('jobs')} 
          style={{ cursor: 'pointer' }}
        >
          <LuSearchCheck />
          <h3>Jobs</h3>
        </div>
      </div>

      {/* Small Containers for the active card, displayed below */}
      <div className="small-containers-wrapper">
        {activeCard === 'businessRegistration' && (
          <div>
            <p className='heading'>DEMO WEBSITES :</p>
          <div className="small-containers">
            <div className="small-container">
            <a href="https://businesslicenceindia.com/" target="_blank" rel="noopener noreferrer" className="custom-link">DOMESTIC BUSINESS</a>
            </div>
            <div className="small-container1">
              <p>INTERNATIONAL BUSINESS</p>
            </div>
          </div>
          </div>
        )}

        {activeCard === 'billingSoftware' && (
          <div>
            <p className='heading'>DEMO WEBSITES :</p>
          <div className="small-containers">
            <div className="small-container">
              <p>HOTELS</p>
            </div>
            <div className="small-container1">
              <p>RESTAURANTS</p>
            </div>
            <div className="small-container">
              <p>GROCERY STORES</p>
            </div>
            <div className="small-container1">
              <p>MEDICAL STORES</p>
            </div>
          </div>
          </div>
        )}

        {activeCard === 'websitesApps' && (
          <div>
            <p className='heading'>DEMO WEBSITES :</p>
            <div className="small-containers">
              <div className="small-container">
                <p>PERSONAL WEBSITES</p>
              </div>
              <div className="small-container1">
                <p>BUSINESS<br></br>WEBSITES</p>
              </div>
              <div className="small-container">
                <p>E-COMMERCE PLATFORMS</p>
              </div>
              <div className="small-container1">
                <p>NEWS CHANNEL WEBSITES</p>
              </div>
              <div className="small-container">
                <p>COACHING INSTITUTE WEBSITES</p>
              </div>
            </div>
          </div>
        )}

        {activeCard === 'jobs' && (
          <div>
            <p className='heading'>DEMO WEBSITES :</p>
          <div className="small-containers">
            <div className="small-container">
              <p>FULL-TIME JOBS</p>
            </div>
            <div className="small-container1">
              <p>PART-TIME JOBS</p>
            </div>
            <div className="small-container">
              <p>FREELANCE</p>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
