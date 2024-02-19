import React, { useState } from "react";
import "./ReportCards.css";
import image1 from "../../Assets/Image/Gheorghita_fruitVeg_adobe_hero_700x530px.jpg";

const ReportCrads = () => {
  const [carddetails, setCarddetails] = useState([
    {
      cardTitle: "Total Products",
      cardValue: 5100,
    },
  ]);
  return (
    <>
      <div className="box">
        <div className="report_card">
          <div className="card_top">
            <div className="card_top_left">
              <img src={image1} alt="image" />
            </div>
            <div className="card_top_right">
              <span>Total Products</span>
              <span>5230</span>
            </div>
          </div>
          <div className="card_bottom">
            <div>View All</div>
            <div className="status_box"></div>
          </div>
        </div>
      </div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </>
  );
};

export default ReportCrads;
