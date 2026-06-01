import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AdminHeader from "../../admin_components/Adminheader";
import AdminSidebar from "../../admin_components/AdminSidebar";

const AdminHomeSetting = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const [settings, setSettings] = useState([]);

    // GET SETTINGS
    const getSettings = async () => {

        try {

            const res = await axios.get("https://yash-it-mern.onrender.com/showhomesetting");

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

            const res = await axios.delete(`https://yash-it-mern.onrender.com/deletehomesetting/${id}`);

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

                
                {/* header */}
                <AdminHeader
                    toggleSidebar={toggleSidebar}
                />
                {/* sidebar */}
                <AdminSidebar
                    sidebarOpen={sidebarOpen}
                    toggleSidebar={toggleSidebar}
                />

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
                                                            src={setting.websiteLogo}
                                                            width="50"
                                                            alt="logo"
                                                        />
                                                    </td>

                                                    <td>
                                                        <img src={setting.homeBarImage}
                                                            width="80"
                                                            alt="banner" />
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