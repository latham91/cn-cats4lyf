import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import "./NavBar.css";
import { BsBasket } from "react-icons/bs";

import PropTypes from "prop-types";

export default function NavBar({ toggleBasket, basketItems }) {
    return (
        <section id="navBar">
            <nav className="navbar-container">
                <Link to="/">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                        <h1>Cats4Lyf</h1>
                    </div>
                </Link>
                <div className="pages">
                    {/* <Link to="/Cats/:id">CatPage</Link> */}
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact Us</Link>
                    <div onClick={toggleBasket} className="cart-container_basket">
                        <BsBasket size={40} />
                        <p>{basketItems.length}</p>
                    </div>
                </div>
            </nav>
        </section>
    );
}

NavBar.propTypes = {
    toggleBasket: PropTypes.func,
    basketItems: PropTypes.array,
};
