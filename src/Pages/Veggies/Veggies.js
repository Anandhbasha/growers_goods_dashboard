import React from "react";
import "./Veggies.css";
import Table from "../../Components/Table/Table";

const Veggies = () => {
  return (
    <div className="veggies">
      <div className="table_Heading">Veggies In Stock</div>
      <Table />
    </div>
  );
};

export default Veggies;
