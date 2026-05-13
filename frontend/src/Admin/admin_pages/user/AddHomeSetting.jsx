import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import img from "../../admin_assets/img/logo-small.png";
import img1 from "../../admin_assets/img/profiles/avatar-01.jpg";
const BASE_URL = "https://yash-it-mern-production.up.railway.app";
const AddHomeSetting = () => {

    const [websiteName, setWebsiteName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState(""); // ✅ added

    const [logo, setLogo] = useState(null);
    const [logoPreview, setLogoPreview] = useState("");

    const [banner, setBanner] = useState(null);
    const [bannerPreview, setBannerPreview] = useState("");

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        setLogo(file);
        setLogoPreview(URL.createObjectURL(file));
    };

    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        setBanner(file);
        setBannerPreview(URL.createObjectURL(file));
    };

    //  AXIOS SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("websiteName", websiteName);
        formData.append("email", email);
        formData.append("address", address);

        formData.append("websiteLogo", logo);     // backend name
        formData.append("homeBarImage", banner);  // backend name

        try {
            const res = await axios.post(
                // "http://localhost:5000/addhomesetting",  formData );
                `${BASE_URL}/addhomesetting`,  formData );

            if (res.data.status) {
                alert("Setting Saved Successfully ✅");
            } else {
                alert(res.data.message);
            }

        } catch (error) {
            console.error(error);
            alert("Server Error ❌");
        }
    };

    return (
        <div className="main-wrapper">

            {/* HEADER */}
            <div className="header">
                <div className="header-left">
                    <Link to="/admin/dashboard" className="logo">
                        {/* <img src="assets/img/logo.png" alt="Logo" /> */}
                        <h1>Shiv</h1>
                    </Link>
                    <Link to="/admin/dashboard" className="logo logo-small">
                        <img
                            src={img}
                            alt="Logo"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
                <div className="menu-toggle">
                    <a href="#" id="toggle_btn" onClick={(e) => e.preventDefault()}>
                        <i className="fas fa-bars"></i>
                    </a>
                </div>
                <div className="top-nav-search ">
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
                            {/* <a className="dropdown-item" href="/adminprofile">
                                                                          My Profile
                                                                      </a> */}
                            <a className="dropdown-item" href="/adminlogin">
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            {/* SIDEBAR */}
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li>
                                <Link to="/admin/dashboard">
                                    <i className="fas fa-home"></i>
                                    <span>Dashboard</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/admin/users">
                                    <i className="fas fa-users"></i>
                                    <span>Users</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/admin/enquery">
                                    <i className="fas fa-envelope"></i>
                                    <span>Enquery</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/admin/homesetting">
                                    <i className="fas fa-cog"></i>
                                    <span>Home Settings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/aboutsetting">
                                    <i className="fas fa-holly-berry"></i> <span>About Setting</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* PAGE CONTENT */}
            <div className="page-wrapper">
                <div className="container mt-4">
                    <h2>Home Settings</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label>Website Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={websiteName}
                                onChange={(e) => setWebsiteName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* ✅ FIXED ADDRESS */}
                        <div className="mb-3">
                            <label>Address</label>
                            <input
                                type="text"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Website Logo</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={handleLogoChange}
                            />
                            {logoPreview && (
                                <img src={logoPreview} width="100" className="mt-2" />
                            )}
                        </div>

                        <div className="mb-3">
                            <label>Home Bar Image</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={handleBannerChange}
                            />
                            {bannerPreview && (
                                <img src={bannerPreview} width="200" className="mt-2" />
                            )}
                        </div>

                        <button className="btn btn-primary">
                            Save Settings
                        </button>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddHomeSetting;