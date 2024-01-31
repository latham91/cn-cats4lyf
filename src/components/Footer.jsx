export default function Footer() {
    return (
        <section id="navBar">
            <div></div>
        </section>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Create this stylesheet for additional styling

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Purradise Meowland</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Products</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/cats">Cats</Link>
              </li>
              <li>
                <Link to="/dogs">Dogs</Link>
              </li>
              {/* Add more product categories as needed */}
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};