import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About"


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/Cats/:id" element={<CatPage />}/>
                <Route path="/About" element={<About />}/>
                <Route path="/Checkout" element={<CheckOut />}/>
            </Routes>
        </>
    );
}

