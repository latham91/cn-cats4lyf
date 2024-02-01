import "./Homepage.css";
import PropTypes from "prop-types";
import HeroSlider from "../components/HeroSlider"; 
import "../components/HeroSlider.css";

import { Card } from "../components/Card";
import CatPage from "./CatPage"; // Import the CatPage SW

export default function Homepage({ cats, loading }) {
    return (
        <section id="homepage">
            {/* Render HeroSlider  SW*/}
            <HeroSlider />

            {/* Render CatPage SW */}
            <CatPage />

            <div className="catsContainer">
                {!loading ? (
                    cats.map((cat) => (
                        <Card
                            key={cat.id}
                            imgSrc={cat.url}
                            imgAlt="image name"
                            title="Cat Name"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            buttonText="Add to Basket"
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
};
