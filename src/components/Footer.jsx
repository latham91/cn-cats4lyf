import React from 'react';
import '../Footer.scss'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>We're Here for You and Your Cats!</p>
          <p>
            Have a question, need assistance, or just want to talk about cats? We're all ears! Contact Cats for Life through the following channels:
          </p>
          <div>
            <strong>Customer Support:</strong>
            <ul>
              <li>Email: <a href="mailto:support@cats4lyf.com">support@cats4lyf.com</a></li>
              <li>Phone: [01612453651]</li>
            </ul>
            <strong>Visit Us:</strong>
            <p>Cats for Life Headquarters<br />[2 Dale Street, Manchester, M3 5RD]</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

