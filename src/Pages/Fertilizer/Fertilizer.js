import React, { useEffect, useState } from "react";
import "./Fertilizer.css";
import Table from "../../Components/Table/Individual/Table";
import axios from "axios";

const Fertilizer = () => {
  const [fertlizercount, setFertlizercount] = useState([{}]);
  useEffect(() => {
    const get_allfertlizer = async () => {
      const {
        data: { message },
      } = await axios.get(`http://localhost:8080/category/fertilizer`);
      setFertlizercount(message);
      console.log(message);
    };
    get_allfertlizer();
  }, []);

  return (
    <div className="veggies">
      <div className="table_Heading">Fertlizer In Stock</div>
      <Table data={fertlizercount} />
    </div>
  );
};

export default Fertilizer;
