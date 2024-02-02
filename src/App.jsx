import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { descriptions } from "./utility/FakerData";
import { faker } from "@faker-js/faker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component Imports
import Homepage from "./pages/Homepage";
import CatPage from "./pages/CatPage";
import CheckOut from "./pages/CheckOut";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/About";
import BasketSlider from "./components/BasketSlider";

const apiKey = "live_WsdZaAcnisLiWqYkDONH329FCuNncM9Ghti7CBiUWgKGWW92FJN2rKOe4vFct8bw";

export default function App() {
    const notifyAdd = () => toast.success("Item added to basket");
    const notifyDelete = () => toast.error("Item removed from basket");

    const [basketItems, setBasketItems] = useState([]);
    const [toggleBasket, setToggleBasket] = useState(false);
    const [catData, setCatData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [basketTotal, setBasketTotal] = useState(0);

    // Fetch the cat data from the API.
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.thecatapi.com/v1/images/search?limit=21&has_breeds=1&api_key=${apiKey}`

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
                    price: Math.floor(faker.commerce.price({ min: 100, max: 1000 })),
                    description: descriptions[Math.floor(Math.random() * 20)],
                    breed: data[i].breeds[0].name,
                    sex: faker.person.sex(),
                    url: data[i].url,

                    breedDescription: data[i].breeds[0].description,
                    temperament: data[i].breeds[0].temperament,
                    origin: data[i].breeds[0].origin,
                    life_span: data[i].breeds[0].life_span,
                    wikipedia_url: data[i].breeds[0].wikipedia_url,
                    indoor: data[i].breeds[0].indoor,
                    weight: data[i].breeds[0].weight.metric,
                    rare: data[i].breeds[0].rare
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
        // If item is already in the basket
        const itemExists = basketItems.find((item) => item.id === id);

        // If the item is not in the basket, add it to the basket.
        if (!itemExists) {
            const newItem = {
                id,
                name,
                price,
                breed,
                url: imgSrc,
                quantity: 1,
            };

            setBasketItems([...basketItems, newItem]);
            notifyAdd();
        } else {
            // If the item is already in the basket, increase the quantity by 1.
            const newBasket = basketItems.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });

            setBasketItems(newBasket);
            notifyAdd();
        }
    };

    const handleDeleteFromBasket = (id) => {
        const newBasket = basketItems.filter((item) => item.id !== id);

        setBasketItems(newBasket);
        notifyDelete();
    };

    const calculateTotal = useCallback(() => {
        let total = 0;

        basketItems.forEach((item) => {
            total += item.price * item.quantity;

            setBasketTotal(total);
        });
    }, [basketItems]);

    useEffect(() => {
        calculateTotal();
    }, [basketItems, calculateTotal]);

    const changeQuantity = (id, quantity) => {
        const newBasket = basketItems.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: parseInt(quantity),
                };
            }
            return item;
        });

        setBasketItems(newBasket);
    };

    return (
        <>
            <ToastContainer position="top-center" autoClose={1500} />
            <NavBar toggleBasket={handleToggleBasket} basketItems={basketItems} />
            <Routes>
                <Route
                    path="/"
                    element={<Homepage cats={catData} loading={loading} addToBasket={handleAddToBasket} />}
                />
                <Route path="/Cats/:id" element={<CatPage cat={catData}/>} />
                <Route path="/About" element={<AboutUs />} />
                <Route path="/Checkout" element={<CheckOut />} />
            </Routes>
            {toggleBasket && (
                <BasketSlider
                    toggleBasket={handleToggleBasket}
                    basketItems={basketItems}
                    deleteFromBasket={handleDeleteFromBasket}
                    basketTotal={basketTotal}
                    changeQuantity={changeQuantity}
                />
            )}
        </>
    );
}
