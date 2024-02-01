import PropTypes from "prop-types";
import "./Card.css";
import { Link } from "react-router-dom";
import { fakerData, descriptions } from "../utility/FakerData"

export const Card = ({ imgSrc, link, breed }) => {

    const catCardData = fakerData()

    const description = descriptions[Math.floor(Math.random()*20)]
    console.log(description)

    return (
        <div className="card-container">
            <Link to={link}>
                <div className="card-image-container">
                    <img src={imgSrc} alt={catCardData.name + "image"} />
                    <span className="card-breed">{breed}</span>
                </div>
            </Link>
            <div className="card-content">
                <h3>{catCardData.name}</h3>
                <p>{description}</p>

                <div className="card-actions">
                    <button>Add to Basket</button>
                    <span>{catCardData.price}</span>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    imgSrc: PropTypes.string,
    link: PropTypes.string,
    breed: PropTypes.string,
};
