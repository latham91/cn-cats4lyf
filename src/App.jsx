import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import CatPage from "./pages/CatPage";
import CheckOut from "./pages/CheckOut";
import NavBar from "./components/NavBar";

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Cats/:id" element={<CatPage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Checkout" element={<CheckOut />} />
            </Routes>
        </>
    );
}
