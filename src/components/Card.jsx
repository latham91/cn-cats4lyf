import PropTypes from "prop-types";
import "./Card.css";

export const Card = ({ imgSrc, imgAlt, title, description, buttonText, link }) => {
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img src={imgSrc} alt={title + "image"} />
                <span className="card-breed">British Shorthair</span>
            </div>
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

Card.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    link: PropTypes.string,
};
