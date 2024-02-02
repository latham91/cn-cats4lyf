import "./Homepage.css";
import PropTypes from "prop-types";

import HeroSlider from "../components/HeroSlider";

import { Card } from "../components/Card";

export default function Homepage({ cats, loading, addToBasket }) {
    return (
        <section id="homepage">
            <HeroSlider />
            <h2>Check out our amazing cats</h2>
            <div className="catsContainer">
                {/* If loading state is false then map through the cats data and display the Card component
                    for each cat. If the loading state is true, display a loading text.
                    cats is the state that holds the data in App.jsx
                */}
                {!loading ? (
                    cats.map((cat) => (
                        <Card
                            key={cat.id}
                            id={cat.id}
                            name={cat.name}
                            price={cat.price}
                            description={cat.description}
                            breed={cat.breed}
                            sex={cat.sex}
                            imgSrc={cat.url}
                            link={`/Cats/${cat.id}`}
                            addToBasket={addToBasket} // This is the function to add an item to the basket
                        />
                    ))
                ) : (
                    <div className="loading">
                        <h2>Loading...</h2>
                    </div>
                )}
            </div>
        </section>
    );
}

// These are prop types to ensure that the correct data types are passed to the component.
Homepage.propTypes = {
    cats: PropTypes.array,
    loading: PropTypes.bool,
    addToBasket: PropTypes.func,
};
