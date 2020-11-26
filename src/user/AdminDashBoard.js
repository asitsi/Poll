import React from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import "../styles.css";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const AdminDashBoard = ({ history }) => {
  const {
    user: { name, email, role },
  } = isAutheticated();

  const AdminHeading = () => {
    return (
      <div className="admin_heading py-md-5 py-3">
        <h1 className="text-center">Welcome to Admin DashBoard</h1>
        <p></p>
      </div>
    );
  };
  const AdminLeftSide = () => (
    <div className="AdminLeftSideNavigation_navbtn">
      <div className="fixed-down AdminLeftSideNavigation_navbtn">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark">
            <div className="card">
              <div className="card-header AdminLeftSideNavigation_header">
                Featured
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/dashboard"
                  >
                    <span></span>Dahsboard Home
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/CreateBlogPost"
                  >
                    <span>
                      <ArrowForwardSharpIcon />{" "}
                    </span>{" "}
                    Add New Post
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/ManageBlogPost"
                  >
                    <span>
                      <ArrowForwardSharpIcon />{" "}
                    </span>
                    Manage Blog Posts
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="/admin/ManageBlogPost"
                    className="AdminLeftSideNavigation"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Paid Courses
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/CreateAddfreecoursevideo"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Add Free Courses
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/Managefreecoursevideo"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Manage Free Courses
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="AdminLeftSideNavigation">
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Quiz Posts
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="AdminLeftSideNavigation">
                    <span>
                      <ArrowForwardSharpIcon />{" "}
                    </span>{" "}
                    Add new Quiz
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="AdminLeftSideNavigation">
                    <span>
                      <ArrowForwardSharpIcon />{" "}
                    </span>{" "}
                    Polls
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="AdminLeftSideNavigation">
                    <span>
                      <ArrowForwardSharpIcon />{" "}
                    </span>{" "}
                    Add new Poll
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="AdminLeftSideNavigation">
                    <span>
                      <ArrowForwardSharpIcon />{" "}
                    </span>{" "}
                    Current Affairs
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="AdminLeftSideNavigation">
                    <span>
                      <ArrowForwardSharpIcon />{" "}
                    </span>{" "}
                    Add new Current affairs
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/CreateFaculty"
                  >
                    <span>
                      <ArrowForwardSharpIcon />{" "}
                    </span>
                    Add Faculty
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/ManageFaculty"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Manage Faculty
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="AdminLeftSideNavigation" to="/admin/Users">
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    USER'S
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/feedback"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    User's Feedback
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/LocalCommet"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    USER'S Issue
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
  );
  const AdminRightSide = () => {
    return (
      <div className="AdminRightSide">
        <div>
          <h1>hello</h1>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container-fluid admin_background">
        {AdminHeading()}
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12">{AdminLeftSide()}</div>
          <div className="col-lg-10 col-md-6 col-12">{AdminRightSide()}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
