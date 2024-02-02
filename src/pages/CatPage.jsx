import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./CatPage.css";

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
                <div>
                    <h1>{cat.name}</h1>
                    <img src={cat.url} alt={cat.name} />
                    <p>{cat.description}</p>
                    <p>{cat.breed}</p>
                    <p>{cat.price}</p>
                    <p>{cat.breedDescription}</p>
                    <p>{cat.temperament}</p>
                    <p>{cat.origin}</p>
                    <p>{cat.life_span}</p>
                    <p>{cat.wikipedia_url}</p>
                    <p>{cat.indoor}</p>
                    <p>{cat.weight}</p>
                    <p>{cat.rare}</p>
                </div>
            )}
        </section>
    );
}

CatPage.propTypes = {
    catData: PropTypes.array,
};
