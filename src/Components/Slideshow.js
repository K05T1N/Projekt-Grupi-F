import React, { useState, useEffect } from 'react';
import HerSlide from "../Images/HerSlide.jpg"
import HisSlide from "../Images/HisSlide.jpg"
import OccasionSlide from "../Images/OccasionSlide.jpg"
import { Link } from "react-router-dom"
const images = [HerSlide, HisSlide, OccasionSlide];
const imagetexts = ['Her', 'Him', 'Occasions'];

const Slideshow = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [links, setLinks] = useState("Forher");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  useEffect(() => {
    if(currentIndex === 0){
      setLinks("Forher");
    }else if(currentIndex === 1){
      setLinks("Forhim");
    }else{
      setLinks("Occasions")
    }
  },[currentIndex])

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <Link to={`/${links}`}
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        >
        </Link>
      ))}
      {imagetexts.map((text, index) => (
        <Link to={`/${links}`}
          key={index}
          className={`slidetext ${index === currentIndex ? 'active' : ''}`}
        >
          Gifts For {text}
        </Link>
      ))}
      <div className="controls">
        <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>←</button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>→</button>
      </div>
    </div>
  );
};

export default Slideshow;
