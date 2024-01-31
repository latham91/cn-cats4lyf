import { Link } from "react-router-dom";
import  Logo from "../images/Logo.png"
import "./NavBar.css";


export default function NavBar() {
    return (
        <section id="navBar">
            <nav className="navbar-container">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt="logo"/>
                    </Link>
                </div>
                <div className="pages">
                    <Link to="/Cats/:id">Cat Page</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Checkout">Checkout</Link>
                </div>
            </nav>
        </section>
    );
}


