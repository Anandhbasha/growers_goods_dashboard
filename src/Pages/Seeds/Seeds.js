import React, { useEffect, useState } from "react";
import Table from "../../Components/Table/Individual/Table";
import axios from "axios";

const Seeds = () => {
  const [seedscount, setSeedscount] = useState([{}]);
  useEffect(() => {
    const get_allseeds = async () => {
      const {
        data: { message },
      } = await axios.get(`http://localhost:8080/category/seeds`);
      setSeedscount(message);
      console.log(message);
    };
    get_allseeds();
  }, []);

  return (
    <div className="veggies">
      <div className="table_Heading">Seeds In Stock</div>
      <Table data={seedscount} />
    </div>
  );
};

export default Seeds;
