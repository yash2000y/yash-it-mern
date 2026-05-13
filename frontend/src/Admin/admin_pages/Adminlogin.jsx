import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginpng from "../admin_assets/img/login.png";
import "../admin_assets/css/style.css";
const BASE_URL = "https://yash-it-mern-production.up.railway.app";

const Adminlogin = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // const res = await axios.post("http://localhost:5000/adminlogin",
      const res = await axios.post(`${BASE_URL}/adminlogin`,
         {
        username,
        password
      });

      alert(res.data.message);
      localStorage.setItem("token", res.data.token);

      //  NAVIGATION ADDED HERE
      navigate("/admin/dashboard");

    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={loginpng} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Welcome to Preskool</h1>
                  <p className="account-subtitle">
                    Need an account? <a href="register.html">Sign Up</a>
                  </p>
                  <h2>Sign in</h2>

                  {/* 👇 Form updated */}
                  <form onSubmit={handleLogin}>

                    {/*  Error Message */}
                    {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
                    
                    <div className="form-group">
                      <label>
                        Username <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <span className="profile-views">
                        <i className="fas fa-user-circle" />
                      </span>
                    </div>

                    <div className="form-group">
                      <label>
                        Password <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control pass-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="profile-views feather-eye toggle-password" />
                    </div>

                    <div className="forgotpass">
                      <div className="remember-me">
                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                          Remember me
                          <input type="checkbox" name="radio" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <a href="forgot-password.html">Forgot Password?</a>
                    </div>

                    <div className="form-group">
                      <button className="btn btn-primary btn-block" type="submit">
                        Login
                      </button>
                    </div>
                  </form>

                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>

                  <div className="social-login">
                    <a href="#"><i className="fab fa-google-plus-g" /></a>
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminlogin;