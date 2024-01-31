import BasketItem from "./BasketItem";
import "./BasketSlider.css";

import { FaXmark } from "react-icons/fa6";

export default function BasketSlider() {
    return (
        <div className="sliderBackground">
            <div className="sliderContent">
                <div className="sliderHeader">
                    <div className="sliderHeader_title">
                        <h3>Basket</h3>
                        <FaXmark size={28} className="sliderClose" />
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
