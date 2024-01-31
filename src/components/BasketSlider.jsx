import "./BasketSlider.css";
import PropTypes from "prop-types";
import { BsXLg } from "react-icons/bs";
import { useState, useRef } from "react";

// Component Imports
import BasketItem from "./BasketItem";

export default function BasketSlider({ toggleBasket }) {
    const [slideIn, setSlideIn] = useState(false);
    const sliderBg = useRef();

    const handleCloseSlider = (e) => {
        // If user clicks on the slider background or the X icon, close the basket
        if (e.target === sliderBg.current || e.target.classList.contains("sliderClose")) {
            setSlideIn(!slideIn);

            setTimeout(() => {
                toggleBasket();
            }, 250);
        }
        return;
    };
    return (
        <div ref={sliderBg} onClick={(e) => handleCloseSlider(e)} className="sliderBackground">
            <div className={`sliderContent ${slideIn ? "slideOut" : "slideIn"}`}>
                <div className="sliderHeader">
                    <div className="sliderHeader_title">
                        <h3>Basket</h3>

                        <BsXLg className="sliderClose" onClick={(e) => handleCloseSlider(e)} size={28} />
                    </div>
                    <p>
                        You have <strong>0 items</strong> in your basket.
                    </p>
                </div>
                <div className="sliderItems">
                    <BasketItem />
                </div>
                <div className="sliderFooter">
                    <p className="sliderFooter_total">
                        <strong>Total: </strong>
                        <span>£0.00</span>
                    </p>
                    <button className="sliderFooter_button">Checkout</button>
                </div>
            </div>
        </div>
    );
}

BasketSlider.propTypes = {
    toggleBasket: PropTypes.func.isRequired,
};
