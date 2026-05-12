import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import AdminHeader from "../../admin_components/Adminheader";
import AdminSidebar from "../../admin_components/AdminSidebar";

const UpdateHomeSetting = () => {

    const { id } = useParams();

    const [websiteName, setWebsiteName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const [logo, setLogo] = useState(null);
    const [logoPreview, setLogoPreview] = useState("");

    const [banner, setBanner] = useState(null);
    const [bannerPreview, setBannerPreview] = useState("");

    // ✅ GET OLD DATA
    useEffect(() => {
        // axios.get(`http://localhost:5000/edithomesettings/${id}`)
        axios.get(`https://yash-it-mern.onrender.com/edithomesettings/${id}`)
            .then((res) => {
                const data = res.data.data;

                setWebsiteName(data.websiteName);
                setEmail(data.email);
                setAddress(data.address);

                // OLD IMAGE SHOW
                setLogoPreview(`https://yash-it-mern.onrender.com/uploads/${data.websiteLogo}`);
                setBannerPreview(`https://yash-it-mern.onrender.com/uploads/${data.homeBarImage}`);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    // ✅ LOGO CHANGE
    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        setLogo(file);

        if (file) {
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    // ✅ BANNER CHANGE
    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        setBanner(file);

        if (file) {
            setBannerPreview(URL.createObjectURL(file));
        }
    };

    // ✅ UPDATE API
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("websiteName", websiteName);
        formData.append("email", email);
        formData.append("address", address);

        if (logo) formData.append("websiteLogo", logo);
        if (banner) formData.append("homeBarImage", banner);

        try {
            // const res = await axios.put(`http://localhost:5000/updatehomesettings/${id}`, formData);
            const res = await axios.put(`https://yash-it-mern.onrender.com/updatehomesettings/${id}`, formData);

            if (res.data.status) {
                alert("Updated Successfully ✅");
            } else {
                alert(res.data.message);
            }

        } catch (error) {
            console.error(error);
            alert("Update Failed ❌");
        }
    };

    return (
        <>
            <div className="main-wrapper">
                <AdminHeader />
                <AdminSidebar />

                {/* PAGE CONTENT */}
                <div className="page-wrapper">
                    <div className="container mt-4">

                        <h2>Update Home Settings</h2>

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
                                Update Settings
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateHomeSetting;