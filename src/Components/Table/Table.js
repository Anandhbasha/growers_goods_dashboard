import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div>
      <table class="table" id="products">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product-Name</th>
            <th scope="col">No.Of.KG</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button class="btn_edit">Edit</button>
            </td>
            <td>
              <button class="btn_delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <button class="btn_edit">Edit</button>
            </td>
            <td>
              <button class="btn_delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <button class="btn_edit">Edit</button>
            </td>
            <td>
              <button class="btn_delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <button class="btn_edit">Edit</button>
            </td>
            <td>
              <button class="btn_delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
