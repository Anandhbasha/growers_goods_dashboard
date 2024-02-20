import React from "react";
import "./Home.css";
import ReportCrads from "../Cointainer/ReportCards/ReportCrads";
import Areachart from "../Components/Charts/Areachart/Areachart";
import Veggies from "./Veggies/Veggies";
import Top_products from "../Components/Charts/Areachart/Top_Products/Top_products";

const Home = () => {
  return (
    <div className="home">
      <div className="section_top">
        <ReportCrads />
      </div>
      <div className="section_chart">
        <Areachart />
      </div>
      <div className="section_bottom">
        <Veggies />
      </div>
    </div>
  );
};

export default Home;
