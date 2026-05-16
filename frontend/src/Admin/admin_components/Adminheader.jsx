import React from 'react'

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import img from "../admin_assets/img/logo-small.png"
import img1 from "../admin_assets/img/profiles/avatar-01.jpg"

const Adminheader = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      await axios.post("https://yash-it-mern.onrender.com/logout");

      localStorage.removeItem("token"); //  main logout

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
            <h1>Shiv</h1>
          </Link>
          <Link to="/admin/dashboard" className="logo logo-small">
            <img src={img} alt="Logo" width={30} height={30} />
          </Link>
        </div>
        <div className="menu-toggle">
          <a href="javascript:void(0);" id="toggle_btn">
            <i className="fas fa-bars" />
          </a>
        </div>
        <div className="top-nav-search">
          <form>
            <input type="text" className="form-control" placeholder="Search here" />
            <button className="btn" type="submit">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>

        <a className="mobile_btn" id="mobile_btn">
          <i className="fas fa-bars" />
        </a>
        <ul className="nav user-menu">
          <li className="nav-item dropdown has-arrow new-user-menus">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
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
            <div className="dropdown-menu">
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
