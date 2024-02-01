import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { descriptions } from "./utility/FakerData";
import { faker } from "@faker-js/faker";

// Component Imports
import Homepage from "./pages/Homepage";
import CatPage from "./pages/CatPage";
import CheckOut from "./pages/CheckOut";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/About";
import BasketSlider from "./components/BasketSlider";

const apiKey = "live_WsdZaAcnisLiWqYkDONH329FCuNncM9Ghti7CBiUWgKGWW92FJN2rKOe4vFct8bw";

export default function App() {
    const [basketItems, setBasketItems] = useState([]);
    const [toggleBasket, setToggleBasket] = useState(false);
    const [catData, setCatData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch the cat data from the API.
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=${apiKey}`
            );

            if (!response.ok) {
                throw new Error("Something went wrong fetching the data.");
            }

            const data = await response.json();

            let tempCatData = [];

            for (let i = 0; i < data.length; i++) {
                tempCatData.push({
                    id: data[i].id,
                    name: faker.person.firstName(),
                    price: "£" + Math.floor(faker.commerce.price({ min: 100, max: 1000 })),
                    description: descriptions[Math.floor(Math.random() * 20)],
                    breed: data[i].breeds[0].name,
                    url: data[i].url,
                });
            }

            setCatData(tempCatData);

            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Open and close the basket slider.
    const handleToggleBasket = () => {
        setToggleBasket(!toggleBasket);
    };

    const handleAddToBasket = (id, name, price, breed, imgSrc) => {
        setBasketItems([...basketItems, { id, name, price, breed, url: imgSrc }]);

        console.log(basketItems);
    };

    return (
        <>
            <NavBar toggleBasket={handleToggleBasket} basketItems={basketItems} />
            <Routes>
                <Route
                    path="/"
                    element={<Homepage cats={catData} loading={loading} addToBasket={handleAddToBasket} />}
                />
                <Route path="/Cats/:id" element={<CatPage />} />
                <Route path="/About" element={<AboutUs />} />
                <Route path="/Checkout" element={<CheckOut />} />
            </Routes>
            {toggleBasket && <BasketSlider toggleBasket={handleToggleBasket} basketItems={basketItems} />}
        </>
    );
}
