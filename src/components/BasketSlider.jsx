import "./BasketSlider.css";
import PropTypes from "prop-types";
import { BsXLg } from "react-icons/bs";
import { useState, useRef } from "react";

// Component Imports
import BasketItem from "./BasketItem";
import { Link } from "react-router-dom";

export default function BasketSlider({ toggleBasket, basketItems, deleteFromBasket, basketTotal, changeQuantity }) {
    const [slideIn, setSlideIn] = useState(false); // State to control the animation of the basket slider
    const sliderBg = useRef(); // This ref is used to access the slider background element.

    // This is the function that closes the basket slider
    const handleCloseSlider = (e) => {
        // If user clicks outside the slider or the X icon, close the basket
        if (e.target === sliderBg.current || e.target.classList.contains("sliderClose")) {
            // If the background is clicked or the X icon is clicked set the slideIn state to false
            setSlideIn(!slideIn);

            setTimeout(() => {
                // After 250ms close the basket
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
                    <p className="sliderHeader_desc">
                        You have <strong>{basketItems.length} items</strong> in your basket.
                    </p>
                </div>
                <div className="sliderItems">
                    {/* This maps through the basketItems state coming from the App.js
                    and renders a basketItem card for each item in the basket */}
                    {basketItems.map((item) => (
                        <BasketItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            breed={item.breed}
                            price={item.price}
                            url={item.url}
                            quantity={item.quantity}
                            deleteFromBasket={deleteFromBasket} // Function to delete an item from the basket
                            changeQuantity={changeQuantity} // Function to change the quantity of an item in the basket
                        />
                    ))}
                </div>
                <div className="sliderFooter">
                    <p className="sliderFooter_total">
                        <strong>Total: </strong>
                        <span>{basketItems.length === 0 ? "£0.00" : `£${basketTotal}`}</span>
                    </p>
                    <Link to="/checkout">
                        <button className="sliderFooter_button" onClick={toggleBasket}>
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

// These are prop types to ensure that the correct data types are passed to the component.
BasketSlider.propTypes = {
    toggleBasket: PropTypes.func.isRequired,
    basketItems: PropTypes.array.isRequired,
    deleteFromBasket: PropTypes.func.isRequired,
    basketTotal: PropTypes.number,
    changeQuantity: PropTypes.func.isRequired,
};
