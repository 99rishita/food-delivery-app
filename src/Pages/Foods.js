import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FoodCarousel from "../Components/Carousel";
import FoodCard from "../Components/Cards";
import AfterHeader from "../Components/AfterHeader";
import FoodBar from "../Components/FoodBar";
import Serve from "../Components/Serve";
import Food from "../Components/Food";
import Image from "../Components/Image";
import FoodNavbar from "../Components/FoodNavbar";
import Category from "../Components/Category";

const Foods = () => {
  return (
    <>
      <FoodNavbar />
      <Image />
      <AfterHeader />
      {/* <Category /> */}
      <Food />
      <Category />
      {/* <FoodBar /> */}
      <FoodCard />
      <Footer />
    </>
  );
};

export default Foods;
