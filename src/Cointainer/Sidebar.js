import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Fertilizer from "../Pages/Fertilizer/Fertilizer";
import Seeds from "../Pages/Seeds/Seeds";
import Veggies from "../Pages/Veggies/Veggies";

const Sidebar = () => {
  return (
    <div className="sidebar_nav">
      <div className="heading">
        <p>Growers Goods</p>
        <ul className="nav_links">
          <li className="nav_link">
            <Link to="/" className="link">
              <div className="sidebar_link">
                <i class="fa-solid fa-border-all"></i>
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="nav_link ">
            {/* <Link to="/Category"> */}
            <div className="sidebar_link">
              <i class="fa-solid fa-list"></i>
              <span className="nav_link_cat">
                <span>Category</span>
                <i class="fa-solid fa-caret-down"></i>
              </span>
            </div>
            {/*  */}

            {/* </Link> */}
          </li>
          <li className="category">
            <ul className="dropdown">
              <li className="cat">
                <Link to="/Veggies" className="link">
                  <div className="sidebar_link">
                    <i class="fa-solid"></i>
                    <span>Veggies</span>
                  </div>
                </Link>
              </li>
              <li className="cat">
                <Link to="/Seeds" className="link">
                  <div className="sidebar_link">
                    <i class="fa-solid"></i>
                    <span>Seeds</span>
                  </div>
                </Link>
              </li>
              <li className="cat">
                <Link to="/Fertilizer" className="link">
                  <div className="sidebar_link">
                    <i class="fa-solid"></i>
                    <span>Fertilizer</span>
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav_link">
            <Link to="/Statistics" className="link">
              <div className="sidebar_link">
                <i class="fa-solid fa-chart-line"></i>
                <span>Statistics</span>
              </div>
            </Link>
          </li>
          <li className="nav_link">
            <Link to="/Famers" className="link">
              <div className="sidebar_link">
                <i class="fa-solid fa-user-tie"></i>
                <span>Farmers</span>
              </div>
            </Link>
          </li>
          <li className="nav_link">
            <Link to="/Users" className="link">
              <div className="sidebar_link">
                <i class="fa-solid fa-user-tie"></i>
                <span>Users</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <i class="fa-solid fa-right-from-bracket"></i>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
