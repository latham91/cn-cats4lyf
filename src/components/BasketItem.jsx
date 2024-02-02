import "./BasketItem.css";
import PropTypes from "prop-types";
import { FaRegTrashCan } from "react-icons/fa6";

export default function BasketItem({ id, name, breed, price, url, deleteFromBasket, quantity, changeQuantity }) {
    return (
        <div className="basketItem">
            <img src={url} alt="placeholder image" draggable={false} />
            <div className="basketItem_content">
                <div className="basketItem_product_name">
                    <h4>{name}</h4>
                    <FaRegTrashCan
                        // When the trash icon is clicked call the deleteFromBasket function
                        // and pass the id of the item being deleted
                        onClick={() => deleteFromBasket(id)}
                        size={20}
                        className="trashIcon"
                    />
                </div>
                <span>BREED: {breed}</span>
                <div className="basketItem_details">
                    <span className="basketItems_details_price">£{price}</span>
                    <div className="qty">
                        <span>Qty:</span>
                        <input
                            // When the input value changes
                            // call the changeQuantity function and pass the items id and new quantity value
                            onChange={(e) => changeQuantity(id, e.target.value)}
                            type="number"
                            min={1}
                            defaultValue={quantity}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// These are prop types to ensure that the correct data types are passed to the component.
BasketItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    breed: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
    quantity: PropTypes.number,
    deleteFromBasket: PropTypes.func,
    changeQuantity: PropTypes.func,
};
