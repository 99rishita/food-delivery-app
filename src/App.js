import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodNavbar from "./Components/FoodNavbar";
import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FoodCarousel from "./Components/Carousel";
import FoodCard from "./Components/Cards";
import AfterHeader from "./Components/AfterHeader";

function App() {
  //const root = ReactDOM.createRoot(document.getElementById("root"));
  return (
    <>
      <FoodNavbar />
      <FoodCarousel />
      <Header />
      <br />
      <AfterHeader />
      <FoodCard />
      <Footer />
    </>
  );
}

export default App;
