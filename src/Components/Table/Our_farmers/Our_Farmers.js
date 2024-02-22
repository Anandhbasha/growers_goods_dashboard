import React, { useState } from "react";

const Our_Farmers = () => {
  const [farmer_deials, setFarmer_deials] = useState([
    {
      id: 1,
      farmer_name: "Anandh",
      farmer_contact: "974575856",
      farmer_address: "Salem",
    },
    {
      id: 2,
      farmer_name: "Anandh",
      farmer_contact: "974575856",
      farmer_address: "Salem",
    },
    {
      id: 3,
      farmer_name: "Anandh",
      farmer_contact: "974575856",
      farmer_address: "Salem",
    },
  ]);
  return (
    <div className="Total_products_table">
      <table class="table" id="products">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Farmer_Name</th>
            <th scope="col">Farmer_Contact</th>
            <th scope="col">Farmer_Address</th>
          </tr>
        </thead>
        <tbody>
          {farmer_deials.map((item) => {
            console.log(item);
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.farmer_name}</td>
                <td>{item.farmer_contact}</td>
                <td>{item.farmer_address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Our_Farmers;
