import React from "react";
import Utility from "../individual/Utility";
import Features from "../individual/Features";
import AboutUs from "./AboutUs";
import Banner from "../individual/Banner";
import Works from "../individual/Works";
import Floatt from "../individual/floatt";
import Pricing from "../pages/Pricing";


const Home = () => {
  return (
    <div className="min-w-full">
      <div className="sm:px-4 md:px-8 lg:px-16 xl:px-20">
      <Banner />
      </div>
      
      {/* <Utility /> */}
      {/* <Works /> */}
      <AboutUs />
      {/* <Features /> */}
      <Pricing/>
      <Floatt/>
    </div>
  );
};

export default Home;
