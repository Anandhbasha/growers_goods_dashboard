import React, { useState } from "react";
import placeholder from "../../Assets/Image/product-placeholder.png";
import "./EditModelForm.css";

const EditModelForm = ({ handleClose }) => {
  const [imageUpload, setImageUpload] = useState(null);

  const handleImageUpload = (e) => {
    let file = e.target.files[0];

    setImageUpload(URL.createObjectURL(file));

    // setImageUpload(e.target.value);
  };
  const [productedit, setProductedit] = useState({
    Product_name: "",
    Market_Price: "",
    Our_Price: "",
    Ratings: "",
    slogan: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    setProductedit({ ...productedit, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productedit, imageUpload);
  };
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
          <div className="modalpop_content">
            <div className="popup_profie_section">
              <div className="profile_image_box">
                <div className="profile_Image">
                  {imageUpload ? (
                    <img src={imageUpload} alt="ProfilePicture" />
                  ) : (
                    <img src={placeholder} alt="placeholder" />
                  )}
                </div>
                <div className="profile_plus_icon">
                  <input
                    type="file"
                    accept="jpeg, jpg, png"
                    onChange={handleImageUpload}
                  />
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              id="form"
              className="form"
              autoComplete="off"
            >
              <div className="popup_input_section">
                <input
                  type="text"
                  placeholder="Product Name"
                  id="Product_name"
                  name="Product_name"
                  onChange={handleChange}
                  value={productedit.Product_name}
                />
                <input
                  type="number"
                  placeholder="Market Price"
                  id="Market_Price"
                  name="Market_Price"
                  onChange={handleChange}
                  value={productedit.Market_Price}
                />
                <input
                  type="text"
                  placeholder="Our Price"
                  id="Our_Price"
                  name="Our_Price"
                  onChange={handleChange}
                  value={productedit.Our_Price}
                />
                <input
                  type="text"
                  placeholder="Ratings"
                  id="Ratings"
                  name="Ratings"
                  onChange={handleChange}
                  value={productedit.Ratings}
                />
                <textarea
                  rows={7}
                  className="text-area"
                  placeholder="Enter a words about Product"
                  id="slogan"
                  name="slogan"
                  onChange={handleChange}
                  value={productedit.slogan}
                />
              </div>
              <div className="popup_submit_btn">
                <input
                  type="submit"
                  value={"Submit"}
                  className="popup_Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModelForm;
