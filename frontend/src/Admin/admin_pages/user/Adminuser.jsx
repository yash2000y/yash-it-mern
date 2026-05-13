import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import logosmall from "../../admin_assets/img/logo-small.png";
import avatar01jpg from "../../admin_assets/img/profiles/avatar-01.jpg";
const BASE_URL = "https://yash-it-mern-production.up.railway.app";

const Adminuser = () => {

  const [users, setUsers] = useState([]);

  // GET USERS
  const getUsers = async () => {
    try {

      // const res = await axios.get("http://localhost:5000/showuser");
      const res = await axios.get(`${BASE_URL}/showuser`);

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

      // const res = await axios.delete(`http://localhost:5000/deleteuser/${id}`);
      const res = await axios.delete(`${BASE_URL}/deleteuser/${id}`);

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
                    <i className="fas fa-holly-berry"></i>
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link to="/admin/users">
                    <i className="fas fa-holly-berry"></i>
                    <span>Users</span>
                  </Link>
                </li>

                <li>
                  <Link to="/admin/enquery">
                    <i className="fas fa-holly-berry"></i>
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
                            {/* <img src={`http://localhost:5000/uploads/${user.image}`} width="50" /> */}
                            <img src={`${BASE_URL}/uploads/${user.image}`} width="50" />
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