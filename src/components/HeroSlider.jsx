import "./HeroSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import SlideOne from "../images/1.png";
import SlideTwo from "../images/2.png";
import SlideThree from "../images/3.gif";
import SlideFour from "../images/4.gif";


export default function HeroSlider() {
    return (
        <section id="heroSlider">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <img className="slider-image" src={SlideOne} alt="Hero Slide One" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="slider-image" src={SlideTwo} alt="Hero Slide Two" />
                </SwiperSlide>
                

                <SwiperSlide>
                    <img className="slider-image" src={SlideThree} alt="Hero Slide Three" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="slider-image" src={SlideFour} alt="Hero Slide Four " />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
