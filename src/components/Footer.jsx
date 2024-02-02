import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="social-media-section">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    Facebook
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    Instagram
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                    Twitter
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
            </div>
            <p>&copy; 2023 Cats4Lyf. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
