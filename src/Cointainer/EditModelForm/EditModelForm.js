import React from "react";
import "./EditModelForm.css";

const EditModelForm = ({ handleClose }) => {
  return (
    <div className="model_container">
      <div className="modelPopupBG"></div>
      <div className="foom">
        <div className="modelFormCard">
          <div className="modalpop_top">
            <div className="modalpop_top_heading">Edit Products</div>
            <button onClick={handleClose} className="close_btn">
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModelForm;
