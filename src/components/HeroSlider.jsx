import { useState, useEffect } from "react";
import "../components/HeroSlider.css";
import CatIntro from "../images/1.png";
import Testimonial from "../images/2.png";

function HeroSlider() {
    // Slider functionality
    const [imageBool, setImageBool] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageBool(!imageBool);
        }, 10000);
        return () => clearInterval(interval);
    }, [imageBool]);

    return (
        <section id="hero-section">
            <div className="hero-slider">
                <div className="slider">
                    <img className={`slide-one ${imageBool ? "sliderIn" : "sliderOut"}`} src={CatIntro} alt="slide 1" />
                    <img
                        className={`slide-two ${imageBool ? "sliderOut" : "sliderIn"}`}
                        src={Testimonial}
                        alt="slide 2"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSlider;

// //Homepage code

// {/*Renders HeroSlider*/}
// <HeroSlider />
// {/* Renders CatPage */}
// <CatPage />
