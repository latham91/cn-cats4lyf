import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import "./NavBar.css";
import { BsBasket } from "react-icons/bs";


export default function NavBar() {
    return (
        <section id="navBar">
            <nav className="navbar-container">
            <Link to="/">
                <div className="logo">
                        <img src={Logo} alt="logo"/>
                    <h1>Cats4Lyf</h1>
                </div>
            </Link>
                <div className="pages">
                    <Link to="/Cats/:id">CatPage</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Checkout" className="cart-container">
                        <div className="cart-container_basket">
                                <BsBasket />
                            <p>2</p>
                        </div>
                    </Link>
                </div>
            </nav>
        </section>
    );
}
