import React, { useEffect, useState } from 'react'
import axios from "axios"
const BASE_URL = "https://yash-it-mern-production.up.railway.app";
const About = () => {

    const [about, setAbout] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getAbout();
    }, []);

    const getAbout = async () => {
        try {
            // const res = await axios.get("http://localhost:5000/showaboutsettings");
            const res = await axios.get(`${BASE_URL}/showaboutsettings`);

            // latest record
            setAbout(res.data.data[0]);

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <div className="about">
                <div className="container-fluid about-page">
                    <h1 className="text-center">
                        <u>About</u>
                    </h1>

                    <p className="text-center">
                        Passionate Full Stack Web Developer specializing in MERN Stack (MongoDB, Express.js, React.js, Node.js) with a focus on building responsive and user-friendly web applications.
                    </p>

                    <div className="row align-items-center g-4 about-main-row">

                        {/* IMAGE */}
                        <div className="col-12 col-lg-5 mt-4">
                            {!about ? (
                                <div className="about-image-placeholder"></div>
                            ) : (
                                <img
                                    // src={`http://localhost:5000/uploads/${about.image}`}
                                    src={`${BASE_URL}/uploads/${about.image}`}
                                    className="img-fluid profile-img"
                                    onLoad={() => setLoaded(true)}
                                    alt="Profile Image"
                                    style={{
                                        opacity: loaded ? 1 : 0,
                                        transition: "opacity 0.5s ease"
                                    }}
                                />
                            )}
                        </div>

                        <div className="col-12 col-lg-7 p-3 mt-4 about-content">

                            <h1>Full Stack Web Developer</h1>

                            <p className="mt-4">
                                I am a Full Stack Web Developer with skills in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. I enjoy building responsive, user-friendly, and dynamic web applications. I am passionate about learning new technologies and improving my development skills to create modern and efficient websites.
                            </p>

                            <div className="row mt-4 g-3 about-details">

                                {/* LEFT SIDE */}
                                <div className="col-12 col-md-6">

                                    <p>
                                        <i className="bi bi-chevron-right" />
                                        <b>Birthday:</b> {about?.birthday}
                                    </p>

                                    <p>
                                        <i className="bi bi-chevron-right" />
                                        <b>Website:</b> {about?.website}
                                    </p>

                                    <p>
                                        <i className="bi bi-chevron-right" />
                                        <b>Phone:</b> {about?.phone}
                                    </p>

                                    <p>
                                        <i className="bi bi-chevron-right" />
                                        <b>City:</b> {about?.city}
                                    </p>

                                </div>

                                {/* RIGHT SIDE */}
                                <div className="col-12 col-md-6">

                                    <p>
                                        <i className="bi bi-chevron-right" />
                                        <b>Age:</b> {about?.age}
                                    </p>

                                    <p>
                                        <i className="bi bi-chevron-right" />
                                        <b>Degree:</b> {about?.degree}
                                    </p>

                                    <p>
                                        <i className="bi bi-chevron-right" />
                                        <b>Email:</b> {about?.email}
                                    </p>

                                    <p>
                                        <i className="bi bi-chevron-right" />
                                        <b>Freelance:</b> {about?.freelance}
                                    </p>

                                </div>

                            </div>

                            <div className="about-note col-12">
                                I am dedicated to developing high-quality web applications.
                            </div>

                        </div>

                    </div>
                </div>

                {/* SKILLS */}
                <div className="container-fluid about-skills">
                    <h2 className="fw-bold mb-4 text-center">Skills</h2>

                    <div className="row g-4">
                        <div className="col-12 col-lg-6">

                            <div className="skill-name">
                                HTML <span className="float-end">100%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "100%" }} />
                            </div>

                            <div className="skill-name">
                                CSS <span className="float-end">90%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "90%" }} />
                            </div>

                            <div className="skill-name">
                                JavaScript <span className="float-end">75%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "75%" }} />
                            </div>

                        </div>

                        <div className="col-12 col-lg-6">

                            <div className="skill-name">
                                React Js. <span className="float-end">80%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "80%" }} />
                            </div>

                            <div className="skill-name">
                                Node Express <span className="float-end">90%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "90%" }} />
                            </div>

                            <div className="skill-name">
                                MongoDB <span className="float-end">55%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "55%" }} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;
// import React from 'react'
// import img from "../Front_asstes/frontimage/profile-img.jpg"
// import img1 from "../Front_asstes/frontimage/yash.jpeg"
// import img2 from "../Front_asstes/frontimage/yash1.jpeg"
// import img3 from "../Front_asstes/frontimage/yash2.png"
// const About = () => {
//     return (
//         <>
//             <div className="about">
//                 <div className="container-fluid about-page  " style={{ height: 700 }}>
//                     <h1 className="text-center">
//                         <u>About</u>{" "}
//                     </h1>
//                     <p className="text-center">
//                         Passionate Full Stack Web Developer specializing in
//                         MERN Stack (MongoDB, Express.js, React.js, Node.js)
//                         with a focus on building responsive and user-friendly web applications.
//                     </p>
//                     <div className="row ">
//                         <div className="col-sm-4  mt-4 " style={{ height: 500 }}>
//                             <img
//                                 src={img3}
//                                 className="img-fluid profile-img"
//                                 style={{ height: 400 }}
//                                 alt=""
//                             />
//                         </div>
//                         <div className="col-sm-8 p-3 mt-4 ">
//                             <h1>Full Stack Web Developer</h1>
//                             <p className="mt-4">
//                                 I am a Full Stack Web Developer with skills
//                                 in HTML, CSS, JavaScript, React.js, Node.js, Express.js,
//                                 and MongoDB. I enjoy building responsive, user-friendly,
//                                 and dynamic web applications. I am passionate about learning new technologies and
//                                 improving my development skills to create modern and efficient websites.
//                             </p>
//                             <div className="row mt-4">
//                                 <div className="col-sm-3 " style={{ height: 200 }}>
//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Birthday:</b>
//                                     </p>
//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Website:</b>
//                                         www.example.com
//                                     </p>
//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Phone:</b>
//                                         9887536059
//                                     </p>
//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>City:</b>
//                                         Jaipur, Rajasthan, India
//                                     </p>
//                                 </div>
//                                 <div className="col-sm-4  infomation">
//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Age:</b>
//                                         24
//                                     </p>
//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Degree:</b>
//                                         Master of Commerce
//                                     </p>
//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Email:</b>
//                                         yash.sain2512@gmail.com
//                                     </p>
//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Freelance:</b>
//                                         Available
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="col-sm-12 ">
//                                 I am dedicated to developing high-quality web applications
//                                 and continuously improving my skills in MERN Stack development.
//                                 I like solving problems, building creative projects,
//                                 and working on modern web technologies.
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 {/* Skills */}
//                 <div className="container-fluid   ">
//                     <h2 className="fw-bold mb-4 text-center ">Skills</h2>
//                     <p className="text-center">
//                         Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
//                         consectetur velit.
//                     </p>
//                     <div className="row">
//                         <div className="col-sm-6 ">
//                             {/* Skill 1 */}
//                             <div className="skill-name">
//                                 HTML <span className="float-end">100%</span>
//                             </div>
//                             <div className="progress">
//                                 <div className="progress-bar" style={{ width: "100%" }} />
//                             </div>
//                             {/* Skill 2 */}
//                             <div className="skill-name">
//                                 CSS <span className="float-end">90%</span>
//                             </div>
//                             <div className="progress">
//                                 <div className="progress-bar" style={{ width: "90%" }} />
//                             </div>
//                             {/* Skill 3 */}
//                             <div className="skill-name">
//                                 JavaScript <span className="float-end">75%</span>
//                             </div>
//                             <div className="progress">
//                                 <div className="progress-bar" style={{ width: "75%" }} />
//                             </div>
//                         </div>
//                         <div className="col-sm-6 ">
//                             {/* Skill 4 */}
//                             <div className="skill-name">
//                                 React Js. <span className="float-end">80%</span>
//                             </div>
//                             <div className="progress">
//                                 <div className="progress-bar" style={{ width: "80%" }} />
//                             </div>
//                             {/* Skill 5 */}
//                             <div className="skill-name">
//                                 Node Express <span className="float-end">90%</span>
//                             </div>
//                             <div className="progress">
//                                 <div className="progress-bar" style={{ width: "90%" }} />
//                             </div>
//                             {/* Skill 6 */}
//                             <div className="skill-name">
//                                 MongoDB <span className="float-end">55%</span>
//                             </div>
//                             <div className="progress">
//                                 <div className="progress-bar" style={{ width: "55%" }} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default About


// import React, { useEffect, useState } from 'react'
// import axios from "axios"

// const About = () => {

//     const [about, setAbout] = useState(null);
//     const [loaded, setLoaded] = useState(false);

//     useEffect(() => {
//         getAbout();
//     }, []);

//     const getAbout = async () => {
//         try {
//             const res = await axios.get("http://localhost:5000/showaboutsettings");

//             // latest record
//             setAbout(res.data.data[0]);

//         } catch (error) {
//             console.log(error);
//         }
//     };


//     return (
//         <>
//             <div className="about">
//                 <div className="container-fluid about-page" style={{ height: 700 }}>
//                     <h1 className="text-center">
//                         <u>About</u>
//                     </h1>

//                     <p className="text-center">
//                         Passionate Full Stack Web Developer specializing in MERN Stack (MongoDB, Express.js, React.js, Node.js) with a focus on building responsive and user-friendly web applications.
//                     </p>

//                     <div className="row">

//                         {/* IMAGE */}
//                         <div className="col-sm-4 mt-4" style={{ height: 500 }}>
//                             {!about ? (
//                                 <div style={{
//                                     height: "400px",
//                                     background: "linear-gradient(135deg, #AFC36D, #2F9E8F)"
//                                 }}></div>
//                             ) : (
//                                 <img
//                                     src={`http://localhost:5000/uploads/${about.image}`}
//                                     className="img-fluid profile-img"
//                                     style={{ height: 400 }}
//                                     style={{
//                                         height: 400,
//                                         opacity: loaded ? 1 : 0,
//                                         transition: "opacity 0.5s ease"
//                                     }}
//                                     onLoad={() => setLoaded(true)}
//                                     alt="Profile Image"
//                                 />
//                             )}
//                         </div>

//                         <div className="col-sm-8 p-3 mt-4">

//                             <h1>Full Stack Web Developer</h1>

//                             <p className="mt-4">
//                                 I am a Full Stack Web Developer with skills in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. I enjoy building responsive, user-friendly, and dynamic web applications. I am passionate about learning new technologies and improving my development skills to create modern and efficient websites.
//                             </p>

//                             <div className="row mt-4">

//                                 {/* LEFT SIDE */}
//                                 <div className="col-sm-3">

//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Birthday:</b> {about?.birthday}
//                                     </p>

//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Website:</b> {about?.website}
//                                     </p>

//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Phone:</b> {about?.phone}
//                                     </p>

//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>City:</b> {about?.city}
//                                     </p>

//                                 </div>

//                                 {/* RIGHT SIDE */}
//                                 <div className="col-sm-4 infomation">

//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Age:</b> {about?.age}
//                                     </p>

//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Degree:</b> {about?.degree}
//                                     </p>

//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Email:</b> {about?.email}
//                                     </p>

//                                     <p>
//                                         <i className="bi bi-chevron-right" />
//                                         <b>Freelance:</b> {about?.freelance}
//                                     </p>

//                                 </div>

//                             </div>

//                             <div className="col-sm-12">
//                                 I am dedicated to developing high-quality web applications.
//                             </div>

//                         </div>

//                     </div>
//                 </div>

//                 {/* SKILLS (Same as before) */}
//                 <div className="container-fluid">
//                     <h2 className="fw-bold mb-4 text-center">Skills</h2>

//                     <div className="row">
//                         <div className="col-sm-6">

//                             <div className="skill-name">
//                                 HTML <span className="float-end">100%</span>
//                             </div>
//                             <div className="progress">
//                                 <div className="progress-bar" style={{ width: "100%" }} />
//                             </div>

//                             <div className="skill-name">
//                                 CSS <span className="float-end">90%</span>
//                             </div>
//                             <div className="progress">
//                                 <div className="progress-bar" style={{ width: "90%" }} />
//                             </div>

//                             <div className="skill-name">
//                                 JavaScript <span className="float-end">75%</span>
//                             </div>
//                             <div className="progress">
//                                 <div className="progress-bar" style={{ width: "75%" }} />
//                             </div>

//                         </div>

//                         <div className="col-sm-6">

//                             <div className="skill-name">
//                                 React Js. <span className="float-end">80%</span>
//                             </div>
//                             <div className="progress">
//                                 <div className="progress-bar" style={{ width: "80%" }} />
//                             </div>

//                             <div className="skill-name">
//                                 Node Express <span className="float-end">90%</span>
//                             </div>
//                             <div className="progress">
//                                 <div className="progress-bar" style={{ width: "90%" }} />
//                             </div>

//                             <div className="skill-name">
//                                 MongoDB <span className="float-end">55%</span>
//                             </div>
//                             <div className="progress">
//                                 <div className="progress-bar" style={{ width: "55%" }} />
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default About;
