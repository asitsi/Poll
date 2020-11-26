import React from "react";
import { API } from "../../backend";
import "../../styles.css";

const ImageHelper = ({ blog }) => {
  const imageurl = blog
    ? `${API}/blog/photo/${blog._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <div className="p-2">
      <img
        src={imageurl}
        alt="photo"
        className="FullblogImg img-fluid rounded"
      />
    </div>
  );
};

export default ImageHelper;
