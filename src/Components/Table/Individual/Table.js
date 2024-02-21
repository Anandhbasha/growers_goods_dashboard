import React, { useEffect, useState } from "react";
import "./Table.css";
import EditModelForm from "../../../Cointainer/EditModelForm/EditModelForm";

const Table = ({ data }) => {
  const [modelShow, setModelShow] = useState(false);

  useEffect(() => {
    modelShow
      ? (document.getElementById("body").style.overflowY = "hidden")
      : (document.getElementById("body").style.overflowY = "scroll");
  }, [modelShow]);
  

  var maxValue = 0;
  var maxValueIndex = 0;
  data?.forEach((item, idx) => {
    const lengths = Object.keys(item).length;
    if (lengths > maxValue) {
      maxValue = lengths;
      maxValueIndex = idx;
    }
  });
  const table_head = data?.find((_, index) => index === maxValueIndex);

  const handleClick = (data) => {
    console.log(data);
    setModelShow(true);
  };

  const handleClose = () => {
    setModelShow(false)
  }

  return (
    <div>
      <table class="table" id="products">
        <thead>
          <tr>
            {Object.keys(table_head).map((heading) => {
              return <th>{heading}</th>;
            })}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowdata) => {
            return (
              <tr>
                {Object.keys(table_head)?.map((head) => {
                  return <td>{!rowdata[head] ? "NIll" : rowdata[head]}</td>;
                })}

                <td>
                  <button
                    onClick={() => {
                      handleClick(rowdata.SNo);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleClick(rowdata.SNo);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {modelShow && <EditModelForm handleClose={handleClose} />}
    </div>
  );
};

export default Table;
