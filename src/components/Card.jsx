import PropTypes from "prop-types";
import "./Card.css";
import { Link } from "react-router-dom";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

export const Card = ({ id, imgSrc, link, description, breed, name, price, addToBasket, sex }) => {
    return (
        <div className="card-container">
            <Link to={link}>
                <div className="card-image-container">
                    <img src={imgSrc} alt={name + "image"} />
                    <span className="card-breed">{breed}</span>
                </div>
            </Link>
            <div className="card-content">
                <div className="card-content-title">
                    <h3>{name}</h3>
                    {/* If the sex is male show the male gender icon
                        if the sex is female show the female gender icon
                    */}
                    {sex === "male" ? <BsGenderMale size={34} /> : <BsGenderFemale size={34} />}
                </div>
                <p>{description}</p>

                <div className="card-actions">
                    {/* This function uses the addToBasket function to send back the
                        id, name, price, breed and imageSrc to the parent component.
                    */}
                    <button onClick={() => addToBasket(id, name, price, breed, imgSrc)}>Add to Basket</button>
                    <span>£{price}</span>
                </div>
            </div>
        </div>
    );
};

// These are prop types to ensure that the correct data types are passed to the component.
Card.propTypes = {
    id: PropTypes.string,
    imgSrc: PropTypes.string,
    link: PropTypes.string,
    breed: PropTypes.string,
    addToBasket: PropTypes.func,
    name: PropTypes.string,
    sex: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
};
