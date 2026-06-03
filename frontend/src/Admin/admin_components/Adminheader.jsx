import React, { useState } from "react";
import "../admin_assets/css/style.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import img from "../admin_assets/img/logo-small.png"
import img1 from "../admin_assets/img/profiles/avatar-01.jpg"

const Adminheader = ({ toggleSidebar }) => {

  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      await axios.post("https://yash-it-mern.onrender.com/logout");

      localStorage.removeItem("token"); //  main logout

      setShowDropdown(false);

      navigate("/adminlogin"); // redirect navigation

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="header">
        <div className="header-left">
          <Link to="/admin/dashboard" className="logo">
            {/* <img src="assets/img/logo.png" alt="Logo" /> */}
            <h1>Yash IT</h1>
          </Link>
          <Link to="/admin/dashboard" className="logo logo-small">
            <img src={img} alt="Logo" width={30} height={30} />
          </Link>
        </div>
        <div className="menu-toggle">
          <button
            type="button"
            id="toggle_btn"
            onClick={toggleSidebar}
            style={{
              border: "none",
              background: "transparent"
            }}
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        <div className="top-nav-search">
          <form>
            <input type="text" className="form-control" placeholder="Search here" />
            <button className="btn" type="submit">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>

        <button
          type="button"
          className="mobile_btn"
          onClick={toggleSidebar}
          style={{
            border: "none",
            background: "transparent"
          }}
        >
          <i className="fas fa-bars" />
        </button>
        <ul className="nav user-menu">
          <li className="nav-item dropdown has-arrow new-user-menus">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              onClick={(e) => {
                e.preventDefault();
                setShowDropdown(!showDropdown);
              }}
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src={img1}
                  width={31}
                  alt="Soeng Souy"
                />
                <div className="user-text">
                  <h6>Soeng Souy</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </span>
            </a>
            <div className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src={img1}
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>Soeng Souy</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              {/* <Link to="/adminprofile" className="dropdown-item" href="/adminprofile">My Profile</Link> */}
              {token ? (
                <span className="dropdown-item" onClick={handleLogout}>
                  Logout
                </span>
              ) : (
                <Link to="/adminlogin" className="dropdown-item">
                  Login
                </Link>
              )}
              {/* <span className="dropdown-item" onClick={handleLogout}>
                Logout
              </span> */}
            </div>
          </li>
        </ul>
      </div>

    </>
  );
};

export default Adminheader
