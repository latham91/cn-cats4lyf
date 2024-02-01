import "./Homepage.css";
import PropTypes from "prop-types";
import HeroSlider from "../components/HeroSlider";

import { Card } from "../components/Card";

export default function Homepage({ cats, loading, addToBasket }) {
    return (
        <section id="homepage">
            {/*Renders HeroSlider*/}
<HeroSlider />
            <div className="catsContainer">
                {!loading ? (
                    cats.map((cat) => (
                        <Card
                            key={cat.id}
                            id={cat.id}
                            name={cat.name}
                            price={cat.price}
                            description={cat.description}
                            breed={cat.breed}
                            imgSrc={cat.url}
                            link={`/Cats/${cat.id}`}
                            addToBasket={addToBasket}
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

Homepage.propTypes = {
    cats: PropTypes.array,
    loading: PropTypes.bool,
    addToBasket: PropTypes.func,
};