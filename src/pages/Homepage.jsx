import "./Homepage.css";
import PropTypes from "prop-types";

import { Card } from "../components/Card";

export default function Homepage({ cats, loading }) {
    return (
        <section id="homepage">
            <div className="catsContainer">
                {!loading ? (
                    cats.map((cat) => (
                        <Card
                            key={cat.id}
                            breed={cat.breeds[0].name}
                            imgSrc={cat.url}
                            link={`/Cats/${cat.id}`}
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

