import React from "react";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import Shop from "./Shop";

const Home = () => {
  return (
    <>
    <Slider/>
      <Banner />
      <section className="bg0 p-t-30">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Product Overview</h3>
          </div>
        </div>
      </section>
      <Shop />  
      
    </>
  );
};

export default Home;
