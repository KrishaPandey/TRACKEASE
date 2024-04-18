import React from "react";
import img1 from "../../assets/expense.png"
import { FiArrowRight } from "react-icons/fi";
import "./style.css"; 
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Track Your Expenses Effortlessly
          </h1>
          <p className="primary-text">
            Gain control of your finances with our intuitive online expense tracking platform.</p>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
        <button className="secondary-button">
        Get started <FiArrowRight />
        </button>
        </Link>

        </div>
        <div className="home-image-section">
        <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;