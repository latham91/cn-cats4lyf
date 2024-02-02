import React, { useState, useEffect } from "react";
import CatIntro from "../images/1.png";
import AdoptCats from "../images/2.png";
import "../components/HeroSlider.css";

function HeroSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero-section">
      <div className="hero-slider">
        <div className="slider">
          <img
            className={`slide ${imageIndex === 0 ? "sliderIn" : "sliderOut"}`}
            src={CatIntro}
            alt="slide 1"
          />
          <img
            className={`slide ${imageIndex === 1 ? "sliderIn" : "sliderOut"}`}
            src={AdoptCats}
            alt="slide 2"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
