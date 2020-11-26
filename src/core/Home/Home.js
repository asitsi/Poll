import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import web1 from "../../image/edu_1.png";
import Mainblog from "../Blog/Mainblog";
import Polls from "../Polls/polls";
import Footer from "../Footer/Footer";
import CurrentAffairs from "../CurrentAffairs/CurrentAffairs";
import Test from "../../user/Chatbot/Test";

const Home = () => {
  return (
    <div>
      <div className="Top_header d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 header_tittle order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Your New </h1>
              <p>
                Study any topic, anytime. Choose from thousands of expert-led
                courses now.
              </p>
              <NavLink
                className="header_tittle_enrollbtn"
                to="/SignupstudentMain"
              >
                Enroll now
                <ArrowForwardIcon className="header_tittle_ArrowForwardIcon" />
              </NavLink>
            </div>

            <div className="col-lg-6 col-md-6 col-12 header_img order-1 order-lg-2 ">
              <img src={web1} alt="" className="img-fluid animated" />
            </div>
          </div>
        </div>
      </div>
      <Mainblog />
      <Polls />
      <CurrentAffairs />
      <Footer />
      <Test />
    </div>
  );
};
export default Home;
