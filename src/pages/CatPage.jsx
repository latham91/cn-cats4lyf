import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./Catpage.css";

// id: data[i].id,
// name: faker.person.firstName(),
// price: Math.floor(faker.commerce.price({ min: 100, max: 1000 })),
// description: descriptions[Math.floor(Math.random() * 20)],
// breed: data[i].breeds[0].name,
// sex: faker.person.sex(),
// url: data[i].url,

// breedDescription: data[i].breeds[0].description,
// temperament: data[i].breeds[0].temperament,
// origin: data[i].breeds[0].origin,
// life_span: data[i].breeds[0].life_span,
// wikipedia_url: data[i].breeds[0].wikipedia_url,
// indoor: data[i].breeds[0].indoor,
// weight: data[i].breeds[0].weight.metric,
// rare: data[i].breeds[0].rare

export default function CatPage({ catData }) {
    const { id } = useParams();

    const cat = catData.find((cat) => cat.id === id);

    return (
        <section id="cat-page">
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

CatPage.propTypes = {
    catData: PropTypes.array,
};
