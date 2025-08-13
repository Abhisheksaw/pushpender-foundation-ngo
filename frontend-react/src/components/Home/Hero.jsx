import React from "react";
import Slider from "./HeroCarousel";
import { Link } from "react-router-dom";
import "./HeroCarousel";

function Hero() {
  const handlePayment = async () => {
    try {
      const orderUrl = "http://localhost:5000/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: book.price });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="hero" id="home">
      <Slider />

      <div className="hero-content">
        <h1>Fighting Hunger, One Meal at a Time.</h1>
        <p>
          Join Pushpedra Foundation in our mission to ensure no one goes to bed
          hungry.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn">
            Learn More
          </a>
          <button onClick={handlePayment} className="btn donate">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
