import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Component Imports
import Homepage from "./pages/Homepage";
import CatPage from "./pages/CatPage";
import CheckOut from "./pages/CheckOut";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/About";
import BasketSlider from "./components/BasketSlider";
import { Card } from "./components/Card";

export default function App() {
    const [toggleBasket, setToggleBasket] = useState(true);

    // Open and close the basket slider.
    const handleToggleBasket = () => {
        setToggleBasket(!toggleBasket);
    };

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Cats/:id" element={<CatPage />} />
                <Route path="/About" element={<AboutUs />} />
                <Route path="/Checkout" element={<CheckOut />} />
            </Routes>
            {toggleBasket && <BasketSlider toggleBasket={handleToggleBasket} />}
            <Card
            imgSrc=""
            imgAlt="Card Image 1"
            title="Cat Bio"
            description="This is the card description section. Insert cat details"
            />
        </>
    );
}
