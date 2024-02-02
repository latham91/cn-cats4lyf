import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUsStyles.css'; // Import your custom styles

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>

      <div className="contact-section">
        <h3 className="contact-heading-2">Cats for Life</h3>
        <p className="contact-details">
          We are here for you and your cats!<br />
          Have a question, need assistance, or just want to talk about cats? We're all ears!
        </p>
      </div>

      <div className="contact-section">
        <h3 className="contact-heading-2">Customer Support</h3>
        <p className="contact-details">
          Email: <a href="mailto:support@cats4lyf.com" className="contact-link">support@cats4lyf.com</a><br />
          Phone: 01612453651
        </p>
      </div>

      <div className="contact-section">
        <h3 className="contact-heading-2">Visit Us</h3>
        <p className="contact-details">
          Cats for Life Headquarters<br />
          2 Dale Street, Manchester, M3 5RD
        </p>
      </div>

      <div className="contact-section">
        <h3 className="contact-heading-2">Connect With Us Online</h3>
        <p className="contact-details">
          Stay updated on the latest cat news, promotions, and community events by following us on social media:<br />
          Facebook: <a href="https://facebook.com/cats4lyf" target="_blank" rel="noopener noreferrer" className="contact-link">facebook.com/cats4lyf</a><br />
          Instagram: <a href="https://instagram.com/cats4lyf" target="_blank" rel="noopener noreferrer" className="contact-link">instagram.com/cats4lyf</a><br />
          Twitter: <a href="https://twitter.com/cats4lyf" target="_blank" rel="noopener noreferrer" className="contact-link">twitter.com/cats4lyf</a>
        </p>
      </div>

      <div className="contact-section">
        <h3 className="contact-heading-2">Got Feedback?</h3>
        <p className="contact-details">
          We value your feedback! Share your thoughts, suggestions, or experiences to help us improve and better serve you.<br />
          Email us at <a href="mailto:feedback@cats4lyf.com" className="contact-link">feedback@cats4lyf.com</a>
        </p>
      </div>

      <div className="contact-section">
        <h3 className="contact-heading-2">Business Inquiries</h3>
        <p className="contact-details">
          For business partnerships, collaborations, or wholesale inquiries, please reach out to our team at <a href="mailto:partnerships@cats4lyfe.com" className="contact-link">partnerships@cats4lyfe.com</a>.
        </p>
      </div>

      <div className="contact-section">
        <h3 className="contact-heading-2">Join Our Community</h3>
        <p className="contact-details">
          Become a part of the Cats for Life community by joining our forums, participating in events, and sharing your cat stories. We love hearing from fellow cat enthusiasts!
        </p>
      </div>

      <div className="contact-section">
        <h3 className="contact-heading-2">Operating Hours</h3>
        <p className="contact-details">
          Our customer support team is available to assist you during the following hours:<br />
          Monday - Friday: 9:00 AM - 6:00 PM (Your Time Zone)<br />
          Saturday - Sunday: Closed<br />
          We strive to respond to all inquiries within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;