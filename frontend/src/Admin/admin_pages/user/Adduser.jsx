import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../admin_components/Adminheader";
import AdminSidebar from "../../admin_components/AdminSidebar";
const BASE_URL = "https://yash-it-mern-production.up.railway.app";

function AddUser() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        address: "",
        image: null
    });

    const handleChange = (e) => {

        if (e.target.name === "image") {

            setUser({
                ...user,
                image: e.target.files[0]
            });

        } else {

            setUser({
                ...user,
                [e.target.name]: e.target.value
            });

        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", user.name);
        formData.append("email", user.email);
        formData.append("password", user.password);
        formData.append("mobile", user.mobile);
        formData.append("address", user.address);
        formData.append("image", user.image);

        try {

            // const res = await axios.post(  "http://localhost:5000/adduser",formData );
        
            const res = await axios.post(
                `${BASE_URL}/addhomesetting`,
                formData
            );

            if (res.data.status) {

                navigate("/admin/users");

            }

        } catch (error) {

            console.log(error);

        }
    };

    return (
        <>
            <AdminHeader />
            <AdminSidebar />

            <div className="page-wrapper">

                <div className="container mt-5 adduser">

                    <h2 className="text-center">Add User</h2>

                    <form onSubmit={handleSubmit} encType="multipart/form-data">

                        <input
                            type="text"
                            name="name"
                            className="form-control mb-3"
                            placeholder="Enter Name"
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            className="form-control mb-3"
                            placeholder="Enter Email"
                            onChange={handleChange}
                        />

                        <input
                            type="password"
                            name="password"
                            className="form-control mb-3"
                            placeholder="Enter Password"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="mobile"
                            className="form-control mb-3"
                            placeholder="Enter Mobile"
                            onChange={handleChange}
                        />
                        {/* IMAGE UPLOAD */}
                        <input
                            type="file"
                            name="image"
                            className="form-control mb-3"
                            onChange={handleChange}
                        />
                        <textarea
                            name="address"
                            className="form-control mb-3"
                            placeholder="Enter Address"
                            onChange={handleChange}
                        />



                        <button className="btn btn-primary">
                            Add User
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
}

export default AddUser;