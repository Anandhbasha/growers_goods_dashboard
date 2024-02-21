import React, { useState } from "react";
import "./Total_products.css";

const Total_products = () => {
  const [total_products, setTotal_products] = useState([
    {
      id: 1,
      farmer_name: "Anandh",
      category_name: "Vegtables",
      product_name: "Carrot",
      customer_location: "Tiruppur",
      customer_Contact_number: "9878945632",
      Number_of_kg_received: 45,
    },
    {
      id: 2,
      farmer_name: "Bala",
      category_name: "Vegtables",
      product_name: "Onion",
      customer_location: "Salem",
      customer_Contact_number: "9877231444",
      Number_of_kg_received: 25,
    },
    {
      id: 3,
      farmer_name: "Nandha",
      category_name: "Vegtables",
      product_name: "Tomoto",
      customer_location: "Coimbatore",
      customer_Contact_number: "9715467235",
      Number_of_kg_received: 105,
    },
    {
      id: 4,
      farmer_name: "Manoj",
      category_name: "Seeds",
      product_name: "Beans",
      customer_location: "Dharapuram",
      customer_Contact_number: "9878945632",
      Number_of_kg_received: 32,
    },
    {
      id: 5,
      farmer_name: "Anandh",
      category_name: "Fertilizer",
      product_name: "Tomoto",
      customer_location: "Bhavani",
      customer_Contact_number: "9878945632",
      Number_of_kg_received: 10,
    },
  ]);
  return (
    <div className="Total_products_table">
      <table class="table" id="products">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Farmer_Name</th>
            <th scope="col">Category_name-Name</th>
            <th scope="col">Product_Name</th>
            <th scope="col">Customer_location</th>
            <th scope="col">Contact_number</th>
            <th scope="col">No.Of.KG</th>
            <th scope="col">Accept</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {total_products.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.farmer_name}</td>
                <td>{item.category_name}</td>
                <td>{item.product_name}</td>
                <td>{item.customer_location}</td>
                <td>{item.customer_Contact_number}</td>
                <td>{item.Number_of_kg_received}</td>
                <td>
                  <button class="btn_approve">Approve</button>
                </td>
                <td>
                  <button class="btn_reject">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Total_products;
