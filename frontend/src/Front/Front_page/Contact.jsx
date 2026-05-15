import React, { useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  mobile: "",
  address: "",
  password: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://yash-it-mern.onrender.com/addenquery",
        formData
      );

      if (res.data?.status) {
        alert("Message Sent Successfully ✅");
        setFormData(initialState);
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error ❌");
    }
  };

  return (
    <section className="contact-section contact">
      <div className="container contact-container">
        <h1 className="text-center contact-title">Contact</h1>

        <div className="row g-4 align-items-start">
          {/* LEFT SIDE */}
          <div className="col-12 col-lg-6">
            <div className="contact-box">
              <div className="contact-item">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h5>Address</h5>
                  <p>
                    244-A Shiv Nagar 1st Murlipura Scheme, Jaipur
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-telephone"></i>
                <div>
                  <h5>Call Us</h5>
                  <p>9887536059</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-envelope"></i>
                <div>
                  <h5>Email Us</h5>
                  <p>yash.sain2512@gmail.com</p>
                </div>
              </div>

              {/* Google Map */}
              <div className="map mt-3">
                <iframe
                  src="https://www.google.com/maps?q=244-A+Shiv+Nagar+1st+Murlipura+Scheme+Jaipur+Rajasthan+302039&z=17&output=embed"
                  height="250"
                  width="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-12 col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="form-control mt-3"
                placeholder="Mobile Number"
                required
              />

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control mt-3"
                placeholder="Address"
                required
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control mt-3"
                placeholder="Password"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control mt-3"
                rows="5"
                placeholder="Message"
              ></textarea>

              <div className="text-center">
                <button type="submit" className="btn send-btn mt-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
