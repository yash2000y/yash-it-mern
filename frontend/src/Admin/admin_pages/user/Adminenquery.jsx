import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import logosmall from "../../admin_assets/img/logo-small.png";
import avatar01jpg from "../../admin_assets/img/profiles/avatar-01.jpg";

import AdminHeader from "../../admin_components/Adminheader";
import AdminSidebar from "../../admin_components/AdminSidebar";



const Adminenquery = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const [users, setUsers] = useState([]);

    // GET USERS
    const getUsers = async () => {
        try {

            const res = await axios.get("https://yash-it-mern.onrender.com/showenquiry");

            if (res.data.status) {
                setUsers(res.data.data);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    // DELETE USER
    const deleteUser = async (id) => {

        try {

            await axios.delete(`https://yash-it-mern.onrender.com/deleteenquiry/${id}`);

            alert("User Deleted");

            getUsers();

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <>
            <div className="main-wrapper">

                <AdminHeader toggleSidebar={toggleSidebar} />
                {/* sidebar */}
                <AdminSidebar sidebarOpen={sidebarOpen}
                    toggleSidebar={toggleSidebar} />
                {/* PAGE */}
                <div className="page-wrapper">

                    <div className="content container-fluid">

                        <div className="page-header">

                            <div className="row align-items-center">

                                <div className="col">
                                    <h3 className="page-title">All Enquery</h3>
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
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Password</th>
                                                <th>Mobile</th>
                                                <th>Address</th>
                                                <th>Message</th>
                                                <th>Action</th>
                                            </tr>

                                        </thead>

                                        <tbody>

                                            {users.map((user, index) => (

                                                <tr key={user._id}>

                                                    <td>{index + 1}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.password}</td>
                                                    <td>{user.mobile}</td>
                                                    <td>{user.address}</td>
                                                    <td>{user.message}</td>

                                                    <td>


                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => deleteUser(user._id)}
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

export default Adminenquery;