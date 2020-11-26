import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ faculty }) => {
  const imageurl = faculty
    ? `${API}/faculty/photo/${faculty._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <div className="">
      <img src={imageurl} alt="photo" className="card-img-top Avtar_image" />
    </div>
  );
};

export default ImageHelper;
