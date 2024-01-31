import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </>
    );
}
