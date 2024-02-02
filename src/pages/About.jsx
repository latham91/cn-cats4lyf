import React from 'react';
import { Link } from 'react-router-dom';
import Cats4LyfImage from "../images/3.gif";
import AdoptUs from "../images/4.gif";
import '../pages/About.css'; 

const AboutUs = () => {
    return (
        <div className="aboutUs-container"> {}
            <h1>About Cats4Lyf</h1>
            <p>
                Welcome to  Cats4Lyf, your one-stop destination for all things feline! We are passionate about
                providing the finest cats and creating a purrfect environment for them.
            </p>
            <p>
                At Cats4Lyf, we believe in the magic of a cat&apos;s purr and the joy they bring to our lives.
                Our mission is to connect cat enthusiasts with their dream feline companions.
            </p>
           
            <Link to="/"> {/* Link to home page */}
                <img src={Cats4LyfImage} alt="Cats4LyfImage" />
            </Link>
            <h1>Click the Image to give a Cat a Home!</h1>
            <Link to="/"> {/* Link home currently could switch page */}
                <img src={AdoptUs} alt="AdoptUs" />
            </Link>
        </div>
    );
};

export default AboutUs;
