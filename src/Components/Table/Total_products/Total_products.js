import React, { useEffect, useState } from "react";
import "./Total_products.css";
import axios from "axios";

const Total_products = () => {
  const [total_products, setTotal_products] = useState([{}]);
  console.log(total_products);

  useEffect(() => {
    const get_total_products = async () => {
      const {
        data: { message },
      } = await axios.get(`http://localhost:8080/farmer/productList`);
      setTotal_products(message);
    };
    get_total_products();
  }, []);

  return (
    <div className="Total_products_table">
      <table class="table" id="products">
        <thead>
          {total_products.slice(0, 1).map((datas) => {
            return (
              <tr>
                {Object.keys(datas).map((heading) => {
                  console.log("1", heading);
                  return <th>{heading}</th>;
                })}
                ;
              </tr>
            );
          })}
        </thead>
        <tbody>
          {total_products.map((datas) => {
            return (
              <tr>
                {Object.keys(datas).map((items) => {
                  return <td>{datas[items]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Total_products;
//
