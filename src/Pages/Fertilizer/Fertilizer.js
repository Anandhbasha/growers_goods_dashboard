import React, { useState } from "react";
import "./Fertilizer.css";
import Table from "../../Components/Table/Individual/Table";

const Fertilizer = () => {
  const [fertlizercount, useFertlizercount] = useState([
    {
      SNo: 1,
      image: "",
      Seeds_name: "Nitrogen",
      Avalible_Kg: 140,
      our_price: 35,
      market_price: 42,
      ratings: 4,
    },
    {
      SNo: 2,
      image: "",
      Seeds_name: "Potassium fertilizers",
      Avalible_Kg: 140,
      our_price: 35,
      market_price: 42,
      ratings: 4,
      test: "",
      worst: "Gagg",
    },
    {
      SNo: 3,
      image: "",
      Seeds_name: "Manure",
      Avalible_Kg: 140,
      our_price: 35,
      market_price: 42,
      ratings: 4,
      test: "",
    },
    {
      SNo: 4,
      image: "",
      Seeds_name: "Urea",
      Avalible_Kg: 70,
      our_price: 80,
      market_price: 102,
      ratings: 5,
    },
  ]);
  return (
    <div className="veggies">
      <div className="table_Heading">Fertlizer In Stock</div>
      <Table data={fertlizercount} />
    </div>
  );
};

export default Fertilizer;
