import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

import img from "../../admin_assets/img/logo-small.png";
import img1 from "../../admin_assets/img/profiles/avatar-01.jpg";
const BASE_URL = "https://yash-it-mern-production.up.railway.app";

const UpdateAboutSetting = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [birthday, setBirthday] = useState("");
    const [age, setAge] = useState("");
    const [degree, setDegree] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [city, setCity] = useState("");
    const [freelance, setFreelance] = useState("");

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    // 👉 LOAD DATA (IMPORTANT)
    useEffect(() => {
        getSingleData();
    }, []);

    const getSingleData = async () => {
        try {
            // const res = await axios.get(`http://localhost:5000/editaboutsetting/${id}`);
            const res = await axios.get(`${BASE_URL}/editaboutsetting/${id}`);

            const data = res.data.data;

            setBirthday(data.birthday);
            setAge(data.age);
            setDegree(data.degree);
            setPhone(data.phone);
            setEmail(data.email);
            setWebsite(data.website);
            setCity(data.city);
            setFreelance(data.freelance);

            // setPreview(`http://localhost:5000/uploads/${data.image}`);
            setPreview(`${BASE_URL}/uploads/${data.image}`);

        } catch (error) {
            console.log(error);
        }
    };

    // IMAGE HANDLE
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    // 👉 UPDATE SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("birthday", birthday);
        formData.append("age", age);
        formData.append("degree", degree);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("website", website);
        formData.append("city", city);
        formData.append("freelance", freelance);

        if (image) {
            formData.append("image", image);
        }

        try {
            // const res = await axios.put(
            //     `http://localhost:5000/updateaboutsetting/${id}`,
            //     formData
            // );
             const res = await axios.put(
                `${BASE_URL}/updateaboutsetting/${id}`,
                formData
            );

            if (res.data.status) {
                alert("Updated Successfully ✅");
                navigate("/admin/aboutsetting");
            }

        } catch (error) {
            console.log(error);
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

            {/* PAGE */}
            <div className="page-wrapper">
                <div className="container mt-4">

                    <h2>About Settings</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label>Birthday</label>
                            <input
                                type="text"
                                className="form-control"
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Age</label>
                            <input
                                type="number"
                                className="form-control"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Degree</label>
                            <input
                                type="text"
                                className="form-control"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
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

                        <div className="mb-3">
                            <label>Website</label>
                            <input
                                type="text"
                                className="form-control"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>City</label>
                            <input
                                type="text"
                                className="form-control"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Freelance</label>
                            <input
                                type="text"
                                className="form-control"
                                value={freelance}
                                onChange={(e) => setFreelance(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Profile Image</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={handleImageChange}
                            />
                            {preview && (
                                <img src={preview} width="120" className="mt-2" />
                            )}
                        </div>

                        <button className="btn btn-primary">
                            Update setting
                        </button>

                    </form>

                </div>
            </div>

        </div>
    );
};

export default UpdateAboutSetting;