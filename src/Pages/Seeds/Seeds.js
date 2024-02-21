import React, { useState } from "react";
import Table from "../../Components/Table/Individual/Table";

const Seeds = () => {
  const [seedscount, useSeedscount] = useState([
    {
      SNo: 1,
      image: "",
      Seeds_name: "Tomoto_seeds",
      Avalible_Kg: 140,
      our_price: 35,
      market_price: 42,
      ratings: 4,
    },
    {
      SNo: 2,
      image: "",
      Seeds_name: "Pumbkin_seeds",
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
      Seeds_name: "Onion_seeds",
      Avalible_Kg: 140,
      our_price: 35,
      market_price: 42,
      ratings: 4,
      test: "",
    },
    {
      SNo: 4,
      image: "",
      Seeds_name: "BottleGuard_seeds",
      Avalible_Kg: 70,
      our_price: 80,
      market_price: 102,
      ratings: 5,
    },
  ]);
  return (
    <div className="veggies">
      <div className="table_Heading">Seeds In Stock</div>
      <Table data={seedscount} />
    </div>
  );
};

export default Seeds;
