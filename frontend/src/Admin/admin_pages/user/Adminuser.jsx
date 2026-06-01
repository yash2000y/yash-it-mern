import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


import AdminHeader from "../../admin_components/Adminheader";
import AdminSidebar from "../../admin_components/AdminSidebar";
const Adminuser = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [users, setUsers] = useState([]);

  // GET USERS
  const getUsers = async () => {
    try {

      const res = await axios.get("https://yash-it-mern.onrender.com/showuser");

      setUsers(res.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // DELETE USER
  const deleteUser = async (id) => {

    const confirmDelete = window.confirm("Are you sure you want to delete this user?");

    if (!confirmDelete) return;

    try {

      const res = await axios.delete(`https://yash-it-mern.onrender.com/deleteuser/${id}`);

      if (res.data.status) {

        alert(res.data.message);

        // refresh users list
        getUsers();

      }

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <>
      <div className="main-wrapper">
        
        {/* header */}
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
                  <h3 className="page-title">All Users</h3>
                </div>

                <div className="col-auto text-end ms-auto">

                  <Link to="/adduser" className="btn btn-primary">
                    <i className="fas fa-plus"></i> Add User
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Mobile</th>
                        <th>Image</th>
                        <th>Address</th>
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
                          <td>
                            <img src={user.image} width="50" alt="" />
                          </td>
                          <td>{user.address}</td>

                          <td>

                            <Link
                              to={`/updateuser/${user._id}`}
                              className="btn btn-primary btn-sm me-2"
                            >
                              <i className="fas fa-edit"></i>
                            </Link>

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

export default Adminuser;