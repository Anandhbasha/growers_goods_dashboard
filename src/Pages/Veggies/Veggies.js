import React, { useEffect, useState } from "react";
import "./Veggies.css";
import Table from "../../Components/Table/Individual/Table";
import axios from "axios";

const Veggies = () => {
  const [veggiescount, setVeggiescount] = useState([{}]);
  useEffect(() => {
    const get_allvegetables = async () => {
      const {
        data: { message },
      } = await axios.get(`http://localhost:8080/category/vegetables`);
      setVeggiescount(message);
      console.log(message);
    };
    get_allvegetables();
  }, []);
  return (
    <div className="veggies">
      <div className="table_Heading">Veggies In Stock</div>
      <Table data={veggiescount} />
    </div>
  );
};

export default Veggies;
