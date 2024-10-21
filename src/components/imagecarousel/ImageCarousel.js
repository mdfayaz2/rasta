import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importing modern icons
import './ImageCarousel.css';
import slide1 from '../../assests/slide1.png';
import slide2 from '../../assests/slide2.png';
import slide3 from '../../assests/slide3.png';

const ImageCarousel = () => {
  const images = [
    slide1,
    slide2,
    slide3,
    'https://via.placeholder.com/600x400/FF33A1/FFFFFF?text=Slide+4'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next slide function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Autoplay effect
  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(autoPlay); // Clear interval on component unmount
  }, [currentIndex]); // Restart interval on currentIndex change

  return (
    <div className="carousel-container">
      <button className="arrow-button left" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <div className="carousel-slide">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      <button className="arrow-button right" onClick={nextSlide}>
        <FaArrowRight />
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
