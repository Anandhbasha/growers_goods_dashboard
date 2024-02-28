import React, { useState } from "react";
import Orders_table from "../../Components/Orders Table/Orders_table";

const Orders = () => {
  const [orderdetails, setCarddetails] = useState([
    {
      first_name: "Anandh",
      last_name: "Kumar",
      mobile: 9942812405,
      product: "tomoto",
      kg: 10,
      address: "3,north street sulur",
      city: "Erode",
      email: "ak@gmail.com",
      pincode: 648100,
    },
  ]);
  return (
    <div className="veggies">
      <div className="table_Heading">Orders Table</div>
      <Orders_table data={orderdetails} />
    </div>
  );
};

export default Orders;
