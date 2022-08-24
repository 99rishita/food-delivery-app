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
import FoodBar from "./Components/FoodBar";
import Serve from "./Components/Serve";
import Food from "./Components/Food";
import Image from "./Components/Image";
import Home from "./Pages/Home";
import Foods from "./Pages/Foods";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Foodcanvas from "./Components/Foodcanvas";

function App() {
  //const root = ReactDOM.createRoot(document.getElementById("root"));
  return (
    // <>
    //   <FoodNavbar />
    //   <FoodCarousel />
    //   <Header />
    //   <br />
    //   <br />
    //   {/* <AfterHeader /> */}
    //   <Serve />
    //   <br />
    //   <br />
    //   <FoodBar />
    //   <FoodCard />
    //   <Footer />
    //   <br />
    //   <Image />
    //   <Food />
    // </>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/food-items" element={<Foods />}></Route>
          {/* <Route path="/food-canvas" element={<Foodcanvas />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
