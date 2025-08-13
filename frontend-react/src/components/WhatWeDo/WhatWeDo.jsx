import React from "react";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <section className="initiatives-section">
      <h2>What We Do</h2>
      <p className="subtitle">
        Our Initiatives: Bridging the Gap Between Food and Families
      </p>

      <div className="initiative-cards">
        <div className="initiative-card">
          {/* <img src="/images/1.jpg" alt="Food Distribution Drives" /> */}
          <h3>Food Distribution Drives</h3>
          <p>
            We organize large-scale food distribution events to deliver
            essential groceries and cooked meals directly to underserved
            communities and shelters.
          </p>
        </div>

        <div className="initiative-card">
          {/* <img src="/images/community_kitchen.jpg" alt="Community Kitchens" /> */}
          <h3>Community Kitchens</h3>
          <p>
            We support community kitchens that provide warm, nutritious meals
            daily to those in need.
          </p>
        </div>

        <div className="initiative-card">
          {/* <img src="/images/food_waste.jpg" alt="Food Waste Reduction" /> */}
          <h3>Food Waste Reduction</h3>
          <p>
            We partner with restaurants to rescue surplus food and redistribute
            it safely to those who need it most.
          </p>
        </div>

        <div className="initiative-card">
          {/* <img src="/images/nutrition.jpg" alt="Nutritional Awareness" /> */}
          <h3>Nutritional Awareness</h3>
          <p>
            We conduct workshops to educate communities on healthy eating, food
            prep, and balanced nutrition.
          </p>
        </div>

        <div className="initiative-card">
          {/* <img src="/images/emergency_relief.jpg" alt="Emergency Food Relief" /> */}
          <h3>Emergency Food Relief</h3>
          <p>
            In times of disaster or crisis, we provide rapid food aid to
            affected individuals and families.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
