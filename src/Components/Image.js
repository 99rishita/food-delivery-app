import React from "react";

const Image = () => {
  return (
    <div className="image-container">
      <img
        src="back-3.jpg"
        style={{
          height: "500px",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <div class="image-centered">
        <h1>Looking for what to eat?</h1>
        <h2>Order your food here</h2>
      </div>
    </div>
  );
};

export default Image;
