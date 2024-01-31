import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import CatPage from "./pages/CatPage";
import CheckOut from "./pages/CheckOut";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/About";

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Cats/:id" element={<CatPage />} />
                <Route path="/About" element={<AboutUs />} />
                <Route path="/Checkout" element={<CheckOut />} />
            </Routes>
        </>
    );
}
