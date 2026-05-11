import React from 'react'

const Service = () => {
    return (
        <>
            <div className="service">
                <div className="container pb-5 ">
                    <h1 className="text-center">Services</h1>
                    <p className="text-center mt-4 ">
                        I am a passionate Full Stack Web Developer who enjoys building modern, responsive, and user-friendly web applications using MERN Stack technologies.
                    </p>
                    <div className="row g-4 mt-3">
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card text-center">
                                <div className="icon blue">
                                    <i className="bi bi-activity" />
                                </div>
                                <h5>Web Development</h5>
                                <p>Passionate Web Developer creating responsive and modern
                                    websites using HTML, CSS, JavaScript, React, and Next.js.</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card text-center">
                                <div className="icon orange">
                                    <i className="bi bi-broadcast" />
                                </div>
                                <h5>App Development</h5>
                                <p>Passionate App Developer focused
                                    on building modern, user-friendly, and high-performance mobile applications.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card text-center">
                                <div className="icon green">
                                    <i className="bi bi-easel" />
                                </div>
                                <h5>Mongo Database</h5>
                                <p>Skilled in MongoDB database management,
                                    creating efficient data structures and handling scalable web application data.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card text-center">
                                <div className="icon red">
                                    <i className="bi bi-bounding-box" />
                                </div>
                                <h5>API Development</h5>
                                <p>Building secure and scalable RESTful APIs using Node.js and Express.
                                    Ensuring smooth communication between frontend and backend systems.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card text-center">
                                <div className="icon purple">
                                    <i className="bi bi-calendar-event" />
                                </div>
                                <h5>REST API Integration</h5>
                                <p>Integrating third-party APIs
                                    (payment gateways, maps, authentication services) into web applications.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-card text-center">
                                <div className="icon pink">
                                    <i className="bi bi-border-width" />
                                </div>
                                <h5>Responsive Design</h5>
                                <p>Creating fully responsive websites that work smoothly on mobile, tablet, and desktop devices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
