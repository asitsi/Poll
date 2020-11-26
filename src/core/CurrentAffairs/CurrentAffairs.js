import React from "react";
import "./style.css";

const CurrentAffairs = () => {
  return (
    <div className="py-md-5 py-3">
      <div className="blog_heading ">Current Affairs</div>
      <div className="polloftheday_background">
        <div>
          <h5>
            Who among the following was the Prime Minister of India when Mandal
            Commission was constituted?
          </h5>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">Indira Gandhi</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color "> Morarji Desai</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">Rajiv Gandhi</p>
          </div>
          <div className="d-flex">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            <p className="color">V P Singh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentAffairs;
