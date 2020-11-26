import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import "../../styles.css";
import { isAutheticated } from "../../auth/helper/index";
import { getFacultys } from "../helper/coreapicalls";
import FacultyCard from "./FacultyCard";

const Faculty = () => {
  const [facultys, setFaculty] = useState([]);
  const [error, seterror] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = isAutheticated() && isAutheticated().token;
  const userId = isAutheticated() && isAutheticated().user.email;
  console.log(token);
  console.log(userId);

  useEffect(() => {
    loadFaculty();
  }, []);

  const loadFaculty = () => {
    getFacultys().then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setFaculty(data);
      }
    });
    setLoading(true);
  };

  return (
    <div>
      <div className="Faculty">
        <div className="container">
          <div className="row py-md-5 py-3 gy-5">
            <h1>All Faculty</h1>
            <div className="row">
              {facultys.map((faculty, index) => {
                return (
                  <div className="col-sm-6 mb-4" key={index}>
                    {loading ? (
                      <FacultyCard faculty={faculty} />
                    ) : (
                      <div
                        class="spinner-border text-danger"
                        role="status"
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faculty;
