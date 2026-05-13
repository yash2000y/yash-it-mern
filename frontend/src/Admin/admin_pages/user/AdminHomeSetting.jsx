import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import logosmall from "../../admin_assets/img/logo-small.png";
import avatar01jpg from "../../admin_assets/img/profiles/avatar-01.jpg";
const BASE_URL = "https://yash-it-mern-production.up.railway.app";

const AdminHomeSetting = () => {

    const [settings, setSettings] = useState([]);

    // GET SETTINGS
    const getSettings = async () => {

        try {

            // const res = await axios.get("http://localhost:5000/showhomesetting");
            const res = await axios.get(`${BASE_URL}/showhomesetting`);

            setSettings(res.data.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {
        getSettings();
    }, []);

    // DELETE SETTING
    const deleteSetting = async (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete this setting?");

        if (!confirmDelete) return;

        try {

            // const res = await axios.delete(`http://localhost:5000/deletehomesetting/${id}`);
            const res = await axios.delete(`${BASE_URL}/deletehomesetting/${id}`);

            if (res.data.status) {

                alert(res.data.message);

                getSettings();

            }

        } catch (error) {

            console.log(error);

        }

    };

    return (
        <>
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
                                src={logosmall}
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
                                        src={avatar01jpg}
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
                                            src={avatar01jpg}
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
                                        <i className="fas fa-holly-berry"></i> <span>Home Setting</span>
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

                {/* PAGE */}

                <div className="page-wrapper">

                    <div className="content container-fluid">

                        <div className="page-header">

                            <div className="row align-items-center">

                                <div className="col">

                                    <h3 className="page-title">Home Settings</h3>

                                </div>

                                <div className="col-auto text-end ms-auto">

                                    <Link to="/addhomesetting" className="btn btn-primary">

                                        <i className="fas fa-plus"></i> Add Setting

                                    </Link>

                                </div>

                            </div>

                        </div>

                        {/* TABLE */}

                        <div className="card card-table">

                            <div className="card-body">

                                <div className="table-responsive">

                                    <table className="table table-striped">

                                        <thead>

                                            <tr>

                                                <th>ID</th>
                                                <th>Website Name</th>
                                                <th>Email</th>
                                                <th>Address</th>
                                                <th>Website Logo</th>
                                                <th>Home Bar Image</th>
                                                <th>Action</th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {settings.map((setting, index) => (

                                                <tr key={setting._id}>

                                                    <td>{index + 1}</td>

                                                    <td>{setting.websiteName}</td>

                                                    <td>{setting.email}</td>

                                                    <td>{setting.address}</td>

                                                    <td>
                                                        <img
                                                            // src={`http://localhost:5000/uploads/${setting.websiteLogo}`}
                                                            src={`${BASE_URL}/uploads/${setting.websiteLogo}`}
                                                            width="50"
                                                            alt="logo"
                                                        />
                                                    </td>

                                                    <td>
                                                        <img src={`${BASE_URL}/uploads/${setting.homeBarImage}`}
                                                            width="80"
                                                            alt="banner"                                              
                                                        />
                                                    </td>

                                                    <td>

                                                        <Link
                                                            to={`/updatehomesetting/${setting._id}`}
                                                            className="btn btn-primary btn-sm me-2"
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </Link>

                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => deleteSetting(setting._id)}
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </button>

                                                    </td>

                                                </tr>

                                            ))}

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default AdminHomeSetting;