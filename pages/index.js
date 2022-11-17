import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {['p1', 'p2', 'p3'].map((product) => (
          product
        ))}
      </div>

      <FooterBanner/>
    </div>
  );
};

export default Home;
