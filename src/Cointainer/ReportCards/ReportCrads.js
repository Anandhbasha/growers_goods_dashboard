import React, { useState } from "react";
import "./ReportCards.css";
import image1 from "../../Assets/Image/Gheorghita_fruitVeg_adobe_hero_700x530px.jpg";
import image2 from "../../Assets/Image/822fe09b6fc030a16364934bf2ed06ec.webp";
import image3 from "../../Assets/Image/NEWS2FARMER.jpg";
import image4 from "../../Assets/Image/download.jpg";
import { Link } from "react-router-dom";

const ReportCrads = () => {
  const [carddetails, setCarddetails] = useState([
    {
      cardTitle: "Total Products",
      cardValue: 5100,
      cardview: "vegetables",
      Report: 10,
      image: image1,
      // color: "#2AA31F",
    },
    {
      cardTitle: "Total Seeds",
      cardValue: 2100,
      cardview: "View All",
      Report: 10,
      // color: "red",
      image: image2,
    },
    {
      cardTitle: "Total Fertilizer",
      cardValue: 1200,
      cardview: "View All",
      Report: 10,
      // color: "yellow",
      image: image3,
    },
    {
      cardTitle: "Total Vegtables",
      cardValue: 1100,
      cardview: "Veggies",
      Report: 10,
      // color: "white",
      image: image4,
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
                  <img src={item.image} alt="image" />
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
