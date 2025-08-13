import React from "react";
import "./AboutSection.css";
import aboutImage from "../../assets/images/about.avif";

const AboutSection = () => {
  return (
    <>
      {/* Header Section */}
      <header
        className="hero-section"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="hero-overlay">
          <h1>About Pushpedra Foundation</h1>
          <p>Fighting Hunger, One Meal at a Time</p>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          The Pushpedra Foundation is a food charity NGO founded by{" "}
          <strong>Pushplata Pandey</strong> and{" "}
          <strong>Upendra Nath Pandey</strong>. Our mission is to combat hunger
          and malnutrition through efficient food distribution, community
          engagement, and sustainable initiatives. We believe that access to
          nutritious food is a fundamental human right.
        </p>

        <h2>Our Vision</h2>
        <p>
          A world where every individual has reliable access to sufficient,
          nutritious food.
        </p>
      </section>

      {/* Key Initiatives */}
      <section className="initiatives">
        <h2>Key Initiatives</h2>
        <div className="initiative-list">
          <div className="card">
            <h3>Food Distribution Drives</h3>
            <p>
              Organizing large-scale events to deliver groceries and cooked
              meals to underserved communities.
            </p>
          </div>
          <div className="card">
            <h3>Community Kitchens</h3>
            <p>Providing daily warm, nutritious meals to people in need.</p>
          </div>
          <div className="card">
            <h3>Food Waste Reduction & Redistribution</h3>
            <p>
              Partnering with businesses to rescue surplus food and redistribute
              it to those in need.
            </p>
          </div>
          <div className="card">
            <h3>Nutritional Awareness Programs</h3>
            <p>
              Educating communities on healthy eating habits and balanced
              nutrition.
            </p>
          </div>
          <div className="card">
            <h3>Emergency Food Relief</h3>
            <p>
              Providing immediate food aid during crises or natural disasters.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
