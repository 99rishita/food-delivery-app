import React from "react";
import UserFigure from "./Figure";
import OrderButton from "./OrderButton";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left-container">
        <img src="header-food.jpg" width={500} height={500} />
      </div>
      <div className="header-right-container">
        <h1>
          <span>Hungry?</span>&nbsp;Get the food delivered at your{" "}
          <span>door !</span>
        </h1>
        <p>Order the most popular Indian food from anywhere and anytime</p>
        <div className="order-button">
          <OrderButton />
        </div>
        <div className="inner-container">
          <div className="inner-left-container">
            <h2 style={{ fontSize: "28px", fontWeight: "600" }}>1.2M+</h2>
            <h4>Happy Customers</h4>
          </div>
          <div className="inner-right-container">
            <img
              src="social-user.png"
              style={{ borderRadius: "50rem", height: 50, width: 50 }}
              className="rounded"
            />
            <div style={{ marginLeft: "12px", lineHeight: "18px" }}>
              This is the best food delivery service that exists!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
