import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../config/api";
import "./DonateForm.css";

const DonateForm = () => {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState("one-time");
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    cvc: "",
    cardName: "",
    expiryDate: "",
  });

  const navigate = useNavigate();

  const handleAmountChange = (value) => setAmount(value);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e) => {
    const value = e.target.value; // yyyy-mm-dd
    if (value) {
      const [yyyy, mm, dd] = value.split("-");
      setFormData((prev) => ({ ...prev, expiryDate: `${dd}-${mm}-${yyyy}` }));
    }
  };

  // Razorpay Checkout launcher
  const launchRazorpay = (order) => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // from your .env
      amount: order.amount,
      currency: order.currency,
      name: "Your NGO Name",
      description: "Donation",
      order_id: order.id,
      handler: function (response) {
        // Verify payment on backend
        fetch(`${BACKEND_URL}/verify-payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            amount: amount,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            alert(data.message || "Payment successful!");
            setSubmitted(true);
          })
          .catch(() => alert("Payment verification failed."));
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    for (let key in formData) {
      if (!formData[key]) {
        alert(`Please fill out ${key}`);
        return;
      }
    }

    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    // Create order on backend
    fetch(`${BACKEND_URL}/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((order) => {
        launchRazorpay(order.data); // order data is inside data field
      })
      .catch(() => alert("Failed to create order. Please try again."));
  };

  return (
    <div className="donate-container">
      {submitted ? (
        <div className="success-message">
          <h2>Thank you for your donation of ₹{amount}!</h2>
          <p>Your support helps us continue our mission.</p>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>How Much Would You Like To Donate?</h2>

          <div className="amount-options">
            {[50, 100, 200, 300, 400].map((amt) => (
              <button
                type="button"
                key={amt}
                className={amount === amt ? "selected" : ""}
                onClick={() => handleAmountChange(amt)}
              >
                ₹{amt}
              </button>
            ))}
            <input
              type="number"
              min="1"
              placeholder="Other amount ₹"
              onFocus={() => handleAmountChange("")}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <div className="frequency">
            <h3>I would like to make a:</h3>
            {["one-time", "monthly", "yearly"].map((freq) => (
              <label key={freq}>
                <input
                  type="radio"
                  name="frequency"
                  checked={frequency === freq}
                  onChange={() => setFrequency(freq)}
                />
                {freq.charAt(0).toUpperCase() + freq.slice(1)}
              </label>
            ))}
          </div>

          <div className="personal-info">
            <h3>Personal Info</h3>
            <div className="input-row">
              <input
                type="text"
                name="firstName"
                placeholder="Your First Name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="payment-method">
            <h3>Select Payment Method</h3>
            <label>
              <input
                type="radio"
                name="payment"
                value="credit-card"
                checked={paymentMethod === "credit-card"}
                onChange={() => setPaymentMethod("credit-card")}
              />
              Credit Card
            </label>
          </div>

          <div className="credit-card-info">
            <h3>Credit Card Info</h3>
            <div className="input-row">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={formData.cvc}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-row">
              <input
                type="text"
                name="cardName"
                placeholder="Cardholder Name"
                value={formData.cardName}
                onChange={handleInputChange}
              />
              <input
                type="date"
                onChange={handleDateChange}
                value={
                  formData.expiryDate
                    ? formData.expiryDate.split("-").reverse().join("-")
                    : ""
                }
              />
            </div>
          </div>

          <div className="donation-footer">
            <p>Total Donation</p>
            <h2>₹{amount || 0}</h2>
            <button type="submit" className="donate-btn">
              DONATE NOW
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default DonateForm;
