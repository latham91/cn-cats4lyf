import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./CatPage.css";

export default function CatPage({ catData }) {
    const { id } = useParams(); // Get the id parameter from the url. eg: /Cats/1, 1 is the id.

    // Find the cat from the catData state that matches the id from the url
    const cat = catData.find((cat) => cat.id === id);

    return (
        <section id="cat-page">
            {/* If the cat data is empty display a 404, cat not found
                otherwise display the information from the cat data state.
            */}
            {!cat ? (
                <div className="errorPage">
                    <h2>404: Cat Not Found!</h2>
                    <div>
                        <Link to="/">BACK TO HOME PAGE</Link>
                    </div>
                </div>
            ) : (
                <div className="cat-page-container">
                    <div className="cat-page-left">
                        <img src={cat.url} alt="cat image" />
                    </div>
                    <div className="cat-page-right">
                        <div>
                            <h2>{cat.name}</h2>
                        </div>
                        <div></div>
                        <p>Breed: {cat.breed}</p>
                        <p>Price: ${cat.price}</p>
                        <p>
                            Breed Info: <br />
                            {cat.breedDescription}
                        </p>
                        <p>
                            Breed Traits: <br />
                            {cat.temperament}
                        </p>
                        <p>
                            Origin of breed: <br />
                            {cat.origin}
                        </p>
                        <p>
                            Life expectancy: <br />
                            {cat.life_span} years
                        </p>
                        <a href={cat.wikipedia_url}>Wiki Link</a>
                        <p>
                            Cat type: <br />
                            {cat.indoor === 0 ? "Outdoor Cat" : "Indoor Cat"}
                        </p>
                        <p>
                            Average weight: <br />
                            {cat.weight}
                        </p>
                        <p>Rare: {cat.rare === 1 ? "Yes" : "No"}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

// These are prop types to ensure that the correct data types are passed to the component.
CatPage.propTypes = {
    catData: PropTypes.array,
};
