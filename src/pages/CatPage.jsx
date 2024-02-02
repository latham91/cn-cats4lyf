import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import PropTypes from "prop-types";

export default function CatPage({ catData }) {
    const [singleCatData, setSingleCatData] = useState({});
    const [notFound, setNotFound] = useState(false);

    const { id } = useParams();
    const singleCat = catData.find((cat) => cat.id === id);

    useEffect(() => {
        setNotFound(true);

        if (singleCat) {
            setSingleCatData(singleCat);
            setNotFound(false);
        }
    }, [singleCat]);

    return (
        <div>
            {notFound ? (
                <h1>Cat not found.</h1>
            ) : (
                <div>
                    <h1>{singleCatData.name}</h1>
                    <img src={singleCatData.url} alt={singleCatData.name} />
                    <p>{singleCatData.description}</p>
                </div>
            )}
        </div>
    );
}

CatPage.propTypes = {
    catData: PropTypes.array,
};
