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
                    <Link to="/About">About Us</Link>
                    <Link to="/Contact">Contact Us</Link>
                    {/* When clicking the basket icon this triggers the toggleBasket function
                        that opens and closes the basket.
                    */}
                    <div onClick={toggleBasket} className="cart-container_basket">
                        <BsBasket size={40} />
                        <p>{basketItems.length}</p>
                    </div>
                </div>
            </nav>
        </section>
    );
}

// These are prop types to ensure that the correct data types are passed to the component.
NavBar.propTypes = {
    toggleBasket: PropTypes.func,
    basketItems: PropTypes.array,
};
