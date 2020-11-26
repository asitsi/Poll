import React from "react";
import { API } from "../../backend";
import "../../styles.css";

const ImageHelper = ({ view }) => {
  const VideoUrl = view
    ? `${API}/freecoursevideo/video/${view._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <div className="">
      <video className="videostyle" controls loop>
        <source src={VideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ImageHelper;
