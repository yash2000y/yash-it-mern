import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../admin_components/Adminheader";
import AdminSidebar from "../../admin_components/AdminSidebar";

function Updateuser() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    image: ""
  });

  const [file, setFile] = useState(null);

  // GET SINGLE USER
  const getUser = async () => {

    // const res = await axios.get("http://localhost:5000/showuser");
    const res = await axios.get("https://yash-it-mern.onrender.com/showuser");

    const singleUser = res.data.data.find((u) => u._id === id);

    if (singleUser) {
      setUser(singleUser);
    }

  };

  useEffect(() => {
    getUser();
  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  // IMAGE CHANGE
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("mobile", user.mobile);
    formData.append("address", user.address);

    if (file) {
      formData.append("image", file);
    }

    try {

      const res = await axios.put(
        `https://yash-it-mern.onrender.com/updateuser/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      if (res.data.status) {

        alert(res.data.message);

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

          <h2 className="text-center">Update User</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              className="form-control mb-3"
              value={user.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="form-control mb-3"
              value={user.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="password"
              className="form-control mb-3"
              value={user.password}
              onChange={handleChange}
            />

            <input
              type="text"
              name="mobile"
              className="form-control mb-3"
              value={user.mobile}
              onChange={handleChange}
            />

            {/* OLD IMAGE */}
            {user.image && (
              <img
                src={`https://yash-it-mern.onrender.com/uploads/${user.image}`}
                width="80"
                className="mb-3"
              />
            )}

            {/* IMAGE UPLOAD */}
            <input
              type="file"
              name="image"
              className="form-control mb-3"
              onChange={handleFileChange}
            />

            <textarea
              name="address"
              className="form-control mb-3"
              value={user.address}
              onChange={handleChange}
            />

            <button className="btn btn-primary" type="submit">
              Update User
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Updateuser;