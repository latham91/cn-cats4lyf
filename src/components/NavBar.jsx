import { Link } from "react-router-dom";
import Logo from "./images/Logo.jpg"

export default function NavBar() {
    return (
        <section id="navBar">
            <nav className="logo">
                <div>
                    <Link to="/">
                    <img src={Logo} alt="logo"/>
                    </Link>
                </div>
                <div className="pages">
                    <Link to="/">Homepage</Link>
                    <Link to="/Cats/:id">CatPage</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Checkout">Checkout</Link>
                </div>
            </nav>
        </section>
    );
}


