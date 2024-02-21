import React from "react";
import "./EditModelForm.css";

const EditModelForm = ({ handleClose }) => {
  return (
    <div className="model_container">
      <div className="modelPopupBG"></div>
      <div className="foom">
        <div className="modelFormCard">
          <button onClick={handleClose}>x</button>
        </div>
      </div>
    </div>
  );
};

export default EditModelForm;
