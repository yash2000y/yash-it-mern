import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import AdminHeader from "../../admin_components/Adminheader";
import AdminSidebar from "../../admin_components/AdminSidebar";

const AddHomeSetting = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };


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
                "https://yash-it-mern.onrender.com/addhomesetting",
                formData
            );

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

            {/* header */}
            <AdminHeader toggleSidebar={toggleSidebar} />
            {/* sidebar */}
            <AdminSidebar sidebarOpen={sidebarOpen}
                toggleSidebar={toggleSidebar} />

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