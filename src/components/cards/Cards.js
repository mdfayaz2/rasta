import React, { useState } from 'react';
import { TfiWrite } from "react-icons/tfi";
import { MdApps } from "react-icons/md";
import { LuSearchCheck } from "react-icons/lu";
import '../cards/Cards.css';
import calculate from './calculate-cost.png'
import calccost from './calccost.gif'
import register from './register.gif'
import notes from './notes.png'
import menu from './menu.gif'
import apps from './apps.png'
import target from './target.png'
import job from './job.gif'

const Cards = () => {
  const [activeCard, setActiveCard] = useState(null); // Track active card
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card

  const handleCardClick = (card) => {
    setActiveCard(activeCard === card ? null : card); // Toggle visibility
  };

  return (
    <div className="cards-container">
      <h1 className='heading1'>OUR SERVICES</h1>
      <div className="container">
        {/* Business Registration Card */}
        <div 
          className="logo-card" 
          onClick={() => handleCardClick('businessRegistration')} 
          onMouseEnter={() => setHoveredCard('businessRegistration')} // Set hovered card
          onMouseLeave={() => setHoveredCard(null)} // Reset hovered card
          style={{ cursor: 'pointer' }}
        >
          {hoveredCard === 'businessRegistration' ? (
            <img src={register} alt="register GIF" width={80} /> // Show GIF on hover
          ) : (
            <img src={notes} width={50} height={50} alt="Registration Icon" />
          )}
          <h3>Business Registration</h3>
        </div>

        {/* Billing Software Card */}
        <div 
          className="logo-card" 
          onClick={() => handleCardClick('billingSoftware')} 
          onMouseEnter={() => setHoveredCard('billingSoftware')} // Set hovered card
          onMouseLeave={() => setHoveredCard(null)} // Reset hovered card
          style={{ cursor: 'pointer' }}
        >
          {hoveredCard === 'billingSoftware' ? (
            <img src={calccost} alt="Billing GIF" width={80} /> // Show GIF on hover
          ) : (
            <img src={calculate} width={50} height={50} alt="Billing Icon" />
          )}
          <h3>Billing Software</h3>
        </div>

        {/* Websites & Applications Card */}
        <div 
          className="logo-card" 
          onClick={() => handleCardClick('websitesApps')} 
          onMouseEnter={() => setHoveredCard('websitesApps')} // Set hovered card
          onMouseLeave={() => setHoveredCard(null)} // Reset hovered card
          style={{ cursor: 'pointer' }}
        >
          {hoveredCard === 'websitesApps' ? (
            <img src={menu} alt="apps GIF" width={80} /> // Show GIF on hover
          ) : (
            <img src={apps} alt="Websites & Apps GIF" width={60} /> // Show GIF on hover
          )}
          <h3>Websites & Applications</h3>
        </div>

        {/* Jobs Card */}
        <div 
          className="logo-card" 
          onClick={() => handleCardClick('jobs')} 
          onMouseEnter={() => setHoveredCard('jobs')} // Set hovered card
          onMouseLeave={() => setHoveredCard(null)} // Reset hovered card
          style={{ cursor: 'pointer' }}
        >
          {hoveredCard === 'jobs' ? (
            <img src={job} alt="Job GIF" width={80} /> // Show GIF on hover
          ) : (
            <img src={target} alt="Job Picture" width={60} /> // Show GIF on hover
          )}
          <h3>Jobs</h3>
        </div>
      </div>

      {/* Small Containers for the active card */}
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
                <p>BUSINESS<br />WEBSITES</p>
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
