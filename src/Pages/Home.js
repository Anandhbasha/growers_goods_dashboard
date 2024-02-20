import React from "react";
import "./Home.css";
import ReportCrads from "../Cointainer/ReportCards/ReportCrads";
import Areachart from "../Components/Charts/Areachart/Areachart";
import Table from "../Components/Table/Table";

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
        <Table />
      </div>
    </div>
  );
};

export default Home;
