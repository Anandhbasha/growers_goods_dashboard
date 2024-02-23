import axios from "axios";
import "./Overall_Products.css";
import React, { useEffect, useState } from "react";

const Over_all_Products = () => {
  const [overall, setOverall] = useState([{}]);
  useEffect(() => {
    const get_farmer_entered = async () => {
      const {
        data: { message },
      } = await axios.get(`http://localhost:8080/farmer/productList`);
      setOverall(message);
    };
    get_farmer_entered();
  }, []);
  const [get_accepted, setGet_accepted] = useState([
    {
      accepted_qty: "",
    },
  ]);
  const handleChange = ({ target: { value, name } }) => {
    setGet_accepted({ ...get_accepted, [name]: value });
  };
  const handleClick = async (e, id) => {
    e.preventDefault();
    console.log(id);
    const new_value = get_accepted.accepted_qty;
    const accept_qty = await axios.post(
      `http://localhost:8080/farmer/acceptproduct/${id}`,
      { accept_qty: { new_value } }
    );
    console.log("aavdb", accept_qty);
  };

  return (
    <div className="Total_products_table">
      <table class="table" id="products">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Farmer </th>
            <th>Product Category</th>
            <th>Product Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
            <th>Received</th>
            <th>accepted</th>
            <th>Approve</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {overall.map((item) => {
            return (
              <tr>
                <td value="id" name="id">
                  {item.id}
                </td>
                <td>{item.farmerName}</td>
                <td>{item.category}</td>
                <td>{item.productName}</td>
                <td>{item.mobileNo}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.productQuantity}</td>
                <td className="accepted">
                  <input
                    type="text"
                    name="accepted_qty"
                    id="accepted_qty"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <button
                    className="btn_approve"
                    name="btn_approve"
                    onClick={(e) => handleClick(e, item.id)}
                  >
                    Accept
                  </button>
                </td>
                <td>
                  <button className="btn_reject">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Over_all_Products;
