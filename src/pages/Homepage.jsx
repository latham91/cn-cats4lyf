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
<<<<<<< HEAD
                            // title={}
=======
                            title="Cat Name"
                            link={`/Cats/${cat.id}`}
>>>>>>> 09c5ed2fe505d98de248ee7d51aa02a018e57c7f
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
