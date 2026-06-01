import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import AdminHeader from "../../admin_components/Adminheader";
import AdminSidebar from "../../admin_components/AdminSidebar";


const AddAboutSetting = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };


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

    // IMAGE HANDLE
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    // SUBMIT
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

        formData.append("image", image);

        try {
            const res = await axios.post(
                "https://yash-it-mern.onrender.com/addaboutsetting",
                formData
            );

            if (res.data.status) {
                alert("About Saved Successfully ✅");
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
                            Save About
                        </button>

                    </form>

                </div>
            </div>

        </div>
    );
};

export default AddAboutSetting;