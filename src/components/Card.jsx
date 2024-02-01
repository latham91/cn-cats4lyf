import PropTypes from "prop-types";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = ({ id, imgSrc, link, description, breed, name, price, addToBasket }) => {
    return (
        <div className="card-container">
            <Link to={link}>
                <div className="card-image-container">
                    <img src={imgSrc} alt={name + "image"} />
                    <span className="card-breed">{breed}</span>
                </div>
            </Link>
            <div className="card-content">
                <h3>{name}</h3>
                <p>{description}</p>

                <div className="card-actions">
                    <button onClick={() => addToBasket(id, name, price)}>Add to Basket</button>
                    <span>{price}</span>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.string,
    imgSrc: PropTypes.string,
    link: PropTypes.string,
    breed: PropTypes.string,
    addToBasket: PropTypes.func,
    name: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
};
