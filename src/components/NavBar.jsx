import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

export default function NavBar() {
    return (
        <section id="navBar">
            <nav>
                <div>
                    <Link></Link>
                </div>
                <div>
                    <Link to="/">Homepage</Link>
                    <Link to="/Cats/:id">CatPage</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Checkout">Checkout</Link>
                </div>
            </nav>
        </section>
    );
}
