import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="py-md-5 py-3">
      <div className="container ">
        <Link to="/freeCourse" className="card-link">
          <div className="card mb-3 " className="card-style">
            <div className="card-header">Course</div>
            <div className="card-body">
              <h1 className="card-title">NTA UGC NET</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
