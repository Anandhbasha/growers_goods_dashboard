import React, { useState } from "react";
import "./ReportCards.css";
import image1 from "../../Assets/Image/Gheorghita_fruitVeg_adobe_hero_700x530px.jpg";
import { Link } from "react-router-dom";

const ReportCrads = () => {
  const [carddetails, setCarddetails] = useState([
    {
      cardTitle: "Total Products",
      cardValue: 5100,
      cardview: "vegetables",
      Report: 10,
      // color: "#2AA31F",
    },
    {
      cardTitle: "Total Seeds",
      cardValue: 2100,
      cardview: "View All",
      Report: 10,
      // color: "red",
    },
    {
      cardTitle: "Total Fertilizer",
      cardValue: 1200,
      cardview: "View All",
      Report: 10,
      // color: "yellow",
    },
    {
      cardTitle: "Total Vegtables",
      cardValue: 1100,
      cardview: "Veggies",
      Report: 10,
      // color: "white",
    },
  ]);

  return (
    <>
      {carddetails.map((item) => {
        return (
          <div className="box">
            <div className="report_card">
              <div className="card_top">
                <div className="card_top_left">
                  <img src={image1} alt="image" />
                </div>
                <div className="card_top_right">
                  <span className="cardTitle">{item.cardTitle}</span>
                  <span className="quantity">{item.cardValue}</span>
                </div>
              </div>
              <div className="card_bottom">
                <Link to={`/${item.cardview}`} id="card_bottom">
                  View All<i class="fa-solid fa-chevron-right"></i>
                </Link>
                <div
                  className="status_box"
                  style={{ backgroundColor: "rgb(44 166 32 / 42%)" }}
                >
                  <i class="fa-solid fa-arrow-trend-up"></i>
                  <div className="report">{item.Report}%</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReportCrads;
