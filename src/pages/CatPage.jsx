import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

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

export default function CatPage({ cat }) {
    const { id } = useParams();

    const singleCat = cat.filter((item) => {
        return item.id === id;
    });

    console.log(singleCat);

    if (!cat) {
        return <div>Loading...</div>;
    } else {
        return (
            <section id="cat-page">
                <p>{singleCat.name}</p>
            </section>
        );
    }
}

CatPage.propTypes = {
    cat: PropTypes.array,
};
