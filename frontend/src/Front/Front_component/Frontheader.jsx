import React from 'react'
import "../Front_asstes/frontcss/style.css"
import { Link } from 'react-router-dom'
import { Offcanvas } from 'bootstrap'
import logo from "../Front_asstes/frontimage/logo.png"
import logo9 from "../Front_asstes/frontimage/logo9.png"

const Frontheader = () => {
    const closeOffcanvas = () => {
        const offcanvasElement =
            document.getElementById("offcanvasNavbar");

        const offcanvas =
            Offcanvas.getInstance(offcanvasElement);

        if (offcanvas) {
            offcanvas.hide();
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top ">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <Link className="navbar-brand ms-1 d-flex align-items-center" to="/">
                        <img
                            src={logo9}
                            alt="Yash IT"
                            className="front-logo"
                        />
                    </Link>
                    {/* Mobile Icons */}
                    <div className="d-flex align-items-center d-lg-none mobile-icons">

                        <a
                            href="#"
                            className="mx-2 text-dark fs-5"
                        >
                            <i className="bi bi-twitter-x"></i>
                        </a>

                        <a
                            href="#"
                            className="mx-2 text-dark fs-5"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>

                        <a
                            href="https://www.instagram.com/the_christmasboy?igsh=MTJ0ZnE0dHFvZjRkaA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-2 text-dark fs-5"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>

                        <a
                            href="#"
                            className="mx-2 text-dark fs-5"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>

                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="offcanvas offcanvas-end "
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <img
                                src={logo9}
                                alt="Yash IT"
                                className="front-logo"
                            />
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body ">
                            <ul className="navbar-nav justify-content-end fw-medium flex-grow-1 pe-3 ">
                                <li className="nav-item mx-2">
                                    <Link to="/"
                                        className="nav-link border-0 bg-transparent "
                                        aria-current="page"
                                        onClick={ closeOffcanvas}
                                    >Home
                                    </Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link to="/about"
                                        className="nav-link border-0 bg-transparent "
                                        onClick={closeOffcanvas}
                                    >About
                                    </Link>
                                </li>
                                {/* <li className="nav-item mx-2">
                                    <a className="nav-link " aria-current="page" href="resume.html">
                                        <Link to="/resume" style={{ textDecoration: "none", color: "inherit" }}
                                        >Resume
                                        </Link>
                                    </a>
                                </li> */}
                                <li className="nav-item mx-2">
                                    <Link to="/service"
                                        className="nav-link border-0 bg-transparent"
                                        aria-current="page"
                                        onClick={closeOffcanvas}
                                    >Service
                                    </Link>
                                </li>
                                {/* <li className="nav-item mx-2">
                                    <a className="nav-link " aria-current="page" href="#">
                                        <Link to="/portfolio" style={{ textDecoration: "none", color: "inherit" }}
                                        >Portfolio
                                        </Link>
                                    </a>
                                </li> */}
                                {/* <li className="nav-item dropdown mx-2">
                                    <a
                                        className="nav-link  dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li> */}
                                <li className="nav-item mx-2">
                                    <Link to="/contact"
                                        className="nav-link border-0 bg-transparent"
                                        aria-current="page"
                                        onClick={closeOffcanvas}
                                    >Contact
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 me-5 d-none d-lg-flex">
                                <li className="nav-icon mx-lg-2 fs-4 ">
                                    <a className="nav-icon text-light-emphasis  " href="#">
                                        {" "}
                                        <i className="bi bi-twitter-x" />
                                    </a>
                                </li>
                                <li className="nav-icon mx-lg-2 fs-4">
                                    <a className="nav-icon text-light-emphasis " href="#">
                                        {" "}
                                        <i className="bi bi-facebook" />
                                    </a>
                                </li>
                                <li className="nav-icon mx-lg-2 fs-4 fw-light">
                                    <a
                                        className="nav-icon text-light-emphasis"
                                        href="https://www.instagram.com/the_christmasboy?igsh=MTJ0ZnE0dHFvZjRkaA=="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                                <li className="nav-icon mx-lg-2 fs-4 fw-light">
                                    <a className="nav-icon text-light-emphasis  " href="#">
                                        {" "}
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Frontheader
