import "./Checkout.css";
import { useState } from "react";
import BasketItem from "../components/BasketItem";
import PropTypes from "prop-types";

const Checkout = ({
  basketItems,
  basketTotal,
  deleteFromBasket,
  changeQuantity,
}) => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    creditCard: "",
  });

  // State to hold whether the purchase is complete
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  // Function to handle the input changes and then set the form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // This prevents the page from refreshing when the form is submitted

    setPurchaseComplete(true); // This sets the purchase complete state to true
  };

  return (
    <div className="checkoutPage-container">
      <h2>Checkout Page</h2>
      {/* If the purchase is complete then show the purchase complete paragraph
                else map through the basketItems state that has been passed as a prop from the App.jsx
                and display the BasketItem component for each specified item in the basketItems state.
            */}
      {purchaseComplete ? (
        <p className="purchase-complete">
          Purchase Complete! Thank you for your order.
        </p>
      ) : (
        <>
          <div className="checkoutItems">
            {basketItems.map((item) => (
              <BasketItem
                key={item.id}
                id={item.id}
                name={item.name}
                breed={item.breed}
                price={item.price}
                url={item.url}
                quantity={item.quantity}
                deleteFromBasket={deleteFromBasket}
                changeQuantity={changeQuantity}
              />
            ))}
          </div>
          <div className="total">
            Total: £{basketItems.length === 0 ? "0.00" : basketTotal}
          </div>
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
        </>
      )}
    </div>
  );
};

export default Checkout;

// These are prop types to ensure that the correct data types are passed to the component.
Checkout.propTypes = {
  basketItems: PropTypes.array,
  basketTotal: PropTypes.number,
  deleteFromBasket: PropTypes.func,
  changeQuantity: PropTypes.func,
};
