import React from 'react'

const Frontfooter = () => {
    return (
        <footer className="footer-section">
            <div className="container-fluid main-footer">
                <div className="footer-row">
                    <div className="footer footer-copy text-black">
                        Copyright Yash Sain. All Rights Reserved
                    </div>

                    <div className="footer footer-icon">
                        <div className="icon2">
                            <ul className="footer-social list-unstyled mb-0">
                                <li className="icon1">
                                    <a
                                        href="https://www.facebook.com/thekkgroups.in"
                                        className="btn-floating btn-sm text-black"
                                    >
                                        <i className="bi bi-twitter-x" />
                                    </a>
                                </li>

                                <li className="icon1">
                                    <a
                                        href="https://www.instagram.com/thekkgroups.in/"
                                        className="btn-floating btn-sm text-black"
                                    >
                                        <i className="bi bi-facebook" />
                                    </a>
                                </li>

                                <li className="icon1">
                                    <a
                                        href="https://www.youtube.com/@thekkgroups_in"
                                        className="btn-floating btn-sm text-black"
                                    >
                                        <i className="bi bi-instagram" />
                                    </a>
                                </li>

                                <li className="icon1">
                                    <a
                                        href="https://www.tumblr.com/kkgroups"
                                        className="btn-floating btn-sm text-black"
                                    >
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer">
                        <span className="last-footer">Yash Sain</span> | Full Stack Developer
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Frontfooter
