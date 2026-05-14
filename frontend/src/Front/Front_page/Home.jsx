import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const BASE_URL = "https://yash-it-mern-production.up.railway.app";

const Home = () => {

    const [setting, setSetting] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getSetting();
    }, []);

    const getSetting = async () => {
        try {
            // const res = await axios.get("http://localhost:5000/showhomesetting");
            const res = await axios.get(`${BASE_URL}/showhomesetting`);
            console.log("FULL API RESPONSE:", res.data); // 👈 add this

            setSetting(res.data.data[0]);

            console.log("IMAGE NAME:", res.data.data[0]?.homeBarImage);  // 👈 add this

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section className="container-fluid hero">

                {/* Loader + Image Fix */}
                {setting?.homeBarImage ? (
                    <img
                        src={`${BASE_URL}/uploads/${setting.homeBarImage}`}
                        className="hero-image"
                        alt="banner"
                    />
                ) : (
                    <div className="hero-placeholder"></div>
                    // 1 <img
                    //     // src={`http://localhost:5000/uploads/${setting.homeBarImage}`}
                    //     src={`${BASE_URL}/uploads/${setting.homeBarImage}`}
                    //     className="hero-image"
                    //     alt="banner"
                    //     onLoad={() => setLoaded(true)}
                    //     style={{
                    //         opacity: loaded ? 1 : 0,
                    //         transition: "opacity 0.5s ease"
                    //     }}
                    // />
                )}

                <div className="hero-content text-center">
                    <div className="kelly">
                        <h1 className="kelly-1">Full Stack Web Developer</h1>

                        <p className="hero-copy fw-medium">
                            I am a Full Stack Web Developer with knowledge of modern web
                            technologies such as HTML, CSS, JavaScript, React.js,
                            Node.js, Express.js, and MongoDB.
                        </p>

                        <Link to="/about" className="btn btn button border border-white">
                            ABOUT ME
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;

// import React from 'react'
// import img from "../Front_asstes/frontimage/Full-stack-web-developer.png"
// import { Link } from 'react-router-dom'
// const Home = () => {
//     return (
//         <>
//             {/* image section */}
//             <div className="container-fluid  " style={{ height: 810 }}>
//                 <div className="hero">
//                     <img src={img} className="img-fluid" alt="images" style={{}} />
//                     <div className="row text-center  ">
//                         <div className="col-sm-12 kelly ">
//                             <h1 className="kelly-1 "> Full Stack Web Developer</h1>
//                             <p className=" fs-4 fw-medium ">
//                                 {" "}
//                                 I am a Full Stack Web Developer with knowledge of modern web <br/>
//                                 technologies such as HTML, CSS,JavaScript, React.js, <br/>
//                                  Node.js, Express.js,
//                                 and MongoDB.
//                             </p>
//                             <Link to="/about" className="btn btn button border border-white">
//                                 ABOUT ME
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* image section end */}
//         </>
//     )
// }

// export default Home
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// const Home = () => {

//     const [setting, setSetting] = useState(null);
//     const [loaded, setLoaded] = useState(false);

//     useEffect(() => {
//         getSetting();
//     }, []);

//     const getSetting = async () => {
//         try {
//             const res = await axios.get("http://localhost:5000/showhomesetting");


//             setSetting(res.data.data[0]);

//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <>
//             <div className="container-fluid" style={{ height: 810 }}>
//                 <div className="hero">

//                     {/* Loader + Image Fix */}
//                     {!setting ? (
//                         <div style={{
//                             height: "810px",
//                             background: "transparent"
//                         }}></div>
//                     ) : (
//                         <img
//                             src={`http://localhost:5000/uploads/${setting.homeBarImage}`}
//                             className="img-fluid"
//                             alt="banner"
//                             onLoad={() => setLoaded(true)}
//                             style={{
//                                 opacity: loaded ? 1 : 0,
//                                 transition: "opacity 0.5s ease"
//                             }}
//                         />
//                     )}

//                     <div className="row text-center">
//                         <div className="col-sm-12 kelly">
//                             <h1 className="kelly-1">Full Stack Web Developer</h1>

//                             <p className="fs-4 fw-medium">
//                                 I am a Full Stack Web Developer with knowledge of modern web
//                                 technologies such as HTML, CSS, JavaScript, React.js,
//                                 Node.js, Express.js, and MongoDB.
//                             </p>

//                             <Link to="/about" className="btn btn button border border-white">
//                                 ABOUT ME
//                             </Link>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home;
