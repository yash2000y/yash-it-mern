import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminAboutSetting = () => {

    const [abouts, setAbouts] = useState([]);

    // GET DATA
    const getAbout = async () => {
        try {
          const res = await axios.get("https://yash-it-mern.onrender.com/showaboutsettings");
            setAbouts(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAbout();
    }, []);

    // DELETE
    const deleteAbout = async (id) => {

        const confirmDelete = window.confirm("Delete this record?");
        if (!confirmDelete) return;

        try {
            const res = await axios.delete(`https://yash-it-mern.onrender.com/deleteaboutsetting/${id}`);
            if (res.data.status) {
                alert("Deleted Successfully");
                getAbout();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row align-items-center">

                        <div className="col">
                            <h3 className="page-title">About Settings</h3>
                        </div>

                        <div className="col-auto text-end ms-auto">
                            <Link to="/addaboutsetting" className="btn btn-primary">
                                <i className="fas fa-plus"></i> Add About
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
                                        <th>Image</th>
                                        <th>Birthday</th>
                                        <th>Age</th>
                                        <th>Degree</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>City</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {abouts.map((item, index) => (
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>

                                            <td>
                                                <img
                                                    src={`https://yash-it-mern.onrender.com/uploads/${item.image}`}
                                                    width="50"
                                                    alt=""
                                                />
                                            </td>

                                            <td>{item.birthday}</td>
                                            <td>{item.age}</td>
                                            <td>{item.degree}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.email}</td>
                                            <td>{item.city}</td>

                                            <td>
                                                <Link
                                                    to={`/updateaboutsetting/${item._id}`}
                                                    className="btn btn-primary btn-sm me-2"
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => deleteAbout(item._id)}
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
    );
};

export default AdminAboutSetting;