import "./BasketSlider.css";
import PropTypes from "prop-types";
import { BsXLg } from "react-icons/bs";
import { useState, useRef } from "react";

// Component Imports
import BasketItem from "./BasketItem";
import { Link } from "react-router-dom";
import CheckOut from "../pages/CheckOut";

export default function BasketSlider({ toggleBasket, basketItems, deleteFromBasket, basketTotal, changeQuantity }) {
    const [slideIn, setSlideIn] = useState(false);
    const sliderBg = useRef();

    const handleCloseSlider = (e) => {
        // If user clicks outside the slider or the X icon, close the basket
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
                    <p className="sliderHeader_desc">
                        You have <strong>{basketItems.length} items</strong> in your basket.
                    </p>
                </div>
                <div className="sliderItems">
                    {basketItems.map((item) => (
                        <BasketItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            breed={item.breed}
                            price={item.price}
                            url={item.url}
                            quantity={item.quantity}
                            deleteFromBasket={deleteFromBasket}
                            changeQuantity={changeQuantity}
                        />
                    ))}
                </div>
                <div className="sliderFooter">
                    <p className="sliderFooter_total">
                        <strong>Total: </strong>
                        <span>{basketItems.length === 0 ? "£0.00" : `£${basketTotal}`}</span>
                    </p>
                    <Link to="/checkout">
                        <button className="sliderFooter_button" onClick={toggleBasket}>Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

BasketSlider.propTypes = {
    toggleBasket: PropTypes.func.isRequired,
    basketItems: PropTypes.array.isRequired,
    deleteFromBasket: PropTypes.func.isRequired,
    basketTotal: PropTypes.number,
    changeQuantity: PropTypes.func.isRequired,
};
