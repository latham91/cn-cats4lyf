import "./Checkout.css";
import { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    creditCard: '',
  });

  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted with data:', formData);
    setPurchaseComplete(true);
  };

  return (
    <div>
      <h2>Checkout Page</h2>
      {purchaseComplete ? (
        <p>Purchase Complete! Thank you for your order.</p>
      ) : (
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Credit Card Number:
          <input
            type="text"
            name="creditCard"
            value={formData.creditCard}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      )}
      </div>
    );
  };

export default Checkout;