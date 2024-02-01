import PropTypes from "prop-types";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = ({ imgSrc, title, description, link }) => {
    return (
        <div className="card-container">
            <Link to={link}>
                <div className="card-image-container">
                    <img src={imgSrc} alt={title + "image"} />
                    <span className="card-breed">British Shorthair</span>
                </div>
            </Link>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>

                <div className="card-actions">
                    <button>Add to Basket</button>
                    <span>$99.00</span>
                </div>
            </div>
        </div>
    );
};

Math.random();

Card.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    link: PropTypes.string,
};
