import "./BasketItem.css";
import PropTypes from "prop-types";
import { FaRegTrashCan } from "react-icons/fa6";

export default function BasketItem({ id, name, breed, price, url }) {
    return (
        <div className="basketItem">
            <img src={url} alt="placeholder image" draggable={false} />
            <div className="basketItem_content">
                <div className="basketItem_product_name">
                    <h4>{name}</h4>
                    <FaRegTrashCan size={20} className="trashIcon" />
                </div>
                <span>BREED: {breed}</span>
                <div className="basketItem_details">
                    <span className="basketItems_details_price">{price}</span>
                    <div className="qty">
                        <span>Qty:</span>
                        <input type="number" min={1} defaultValue={1} />
                    </div>
                </div>
            </div>
        </div>
    );
}

BasketItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    breed: PropTypes.string,
    price: PropTypes.string,
    url: PropTypes.string,
};
