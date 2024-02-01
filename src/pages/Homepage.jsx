import "./Homepage.css";
import PropTypes from "prop-types";
import FakerData from "./utility/FakerData"

import { Card } from "../components/Card";

export default function Homepage({ cats, loading }) {
    return (
        <section id="homepage">
            <div className="catsContainer">
                {!loading ? (
                    cats.map((cat) => (
                        <Card
                            key={cat.id}
                            imgSrc={cat.url}
                            imgAlt="image name"
                            title="Cat Name"
                            link={`/Cats/${cat.id}`}
                            description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
