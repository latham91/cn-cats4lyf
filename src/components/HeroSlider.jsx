import React, { useState, useEffect } from 'react';
import "../components/HeroSlider.css";
import { Link } from 'react-router-dom';

function HeroSlider() {
  const [cats, setCats] = useState([
    { name: "Cat Intro", image: "./src/images/1.png"},
    { name: "Testimonial1", image: "./src/images/2.png" },
    // Add more images here Oana
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % cats.length);
    }, 3000); // Changes image every 3 seconds 

    return () => clearInterval(interval);
  }, [cats.length]);

  return (
    <div className="hero-slider">
      <h2>ADOPT A CAT 4 LYF</h2>
      <div className="slider">
        {cats.map((cat, index) => (
          <div
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={cat.image} alt={cat.name} />
            <Link to="/CatPage">
              <button>Adopt Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
