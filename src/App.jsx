import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// Component Imports
import Homepage from "./pages/Homepage";
import CatPage from "./pages/CatPage";
import CheckOut from "./pages/CheckOut";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/About";
import BasketSlider from "./components/BasketSlider";

const apiKey = "live_WsdZaAcnisLiWqYkDONH329FCuNncM9Ghti7CBiUWgKGWW92FJN2rKOe4vFct8bw";

export default function App() {
    const [toggleBasket, setToggleBasket] = useState(true);
    const [catData, setCatData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch the cat data from the API.
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${apiKey}`
            );

            if (!response.ok) {
                throw new Error("Something went wrong fetching the data.");
            }

            const data = await response.json();

            console.log(data);

            setCatData(data);

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

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Homepage cats={catData} loading={loading} />} />
                <Route path="/Cats/:id" element={<CatPage />} />
                <Route path="/About" element={<AboutUs />} />
                <Route path="/Checkout" element={<CheckOut />} />
            </Routes>
            {toggleBasket && <BasketSlider toggleBasket={handleToggleBasket} />}
        </>
    );
}
