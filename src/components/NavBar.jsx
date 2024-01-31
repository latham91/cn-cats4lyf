import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <section id="navBar">
            <nav>
                <Link to="/">Homepage</Link>
                <Link to="//Cats/:id">CatPage</Link>
                <Link to="/About">About</Link>
                <Link to="/Checkout">Checkout</Link>
            </nav>
        </section>
    );
}
