import React from "react";
import "./Home.css";
import ReportCrads from "../Cointainer/ReportCards/ReportCrads";

const Home = () => {
  return (
    <div className="home">
      <div className="section_top">
        <ReportCrads />
      </div>
      <div className="section_chart"></div>
      <div className="section_bottom"></div>
    </div>
  );
};

export default Home;
