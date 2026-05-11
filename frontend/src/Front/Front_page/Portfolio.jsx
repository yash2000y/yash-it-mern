import React from 'react'
import "../Front_asstes/frontcss/style.css";

import { useEffect } from "react";
import { initPortfolioIsotope } from "../Front_asstes/js/script";

import img1 from "../Front_asstes/frontimage/masonry-portfolio-1.jpg"
import img2 from "../Front_asstes/frontimage/masonry-portfolio-2.jpg"
import img3 from "../Front_asstes/frontimage/masonry-portfolio-3.jpg"
import img4 from "../Front_asstes/frontimage/masonry-portfolio-4.jpg"
import img5 from "../Front_asstes/frontimage/masonry-portfolio-5.jpg"
import img6 from "../Front_asstes/frontimage/masonry-portfolio-6.jpg"
import img7 from "../Front_asstes/frontimage/masonry-portfolio-7.jpg"
import img8 from "../Front_asstes/frontimage/masonry-portfolio-8.jpg"
import img9 from "../Front_asstes/frontimage/masonry-portfolio-9.jpg"

const Portfolio = () => {
    useEffect(() => {
        initPortfolioIsotope();
    }, []);
    return (
        <>
            <main className="main">
                {/* Portfolio Section */}
                <section id="portfolio" className="portfolio section">
                    {/* Section Title */}
                    <div className="container section-title " data-aos="fade-up">
                        <h2 className="text-center">Portfolio</h2>
                        <p className="text-center">
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                            consectetur velit
                        </p>
                    </div>
                    {/* End Section Title */}
                    <div className="container">
                        <div
                            className="isotope-layout"
                            data-default-filter="*"
                            data-layout="masonry"
                            data-sort="original-order"
                        >
                            <ul
                                className="portfolio-filters isotope-filters"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <li data-filter="*" className="filter-active">
                                    All
                                </li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-product">Card</li>
                                <li data-filter=".filter-branding">Web</li>
                            </ul>
                            {/* End Portfolio Filters */}
                            <div
                                className="row gy-4 isotope-container"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                    <img
                                        src={img1}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>Lorem ipsum, dolor sit</p>
                                        <a
                                            href="./image/masonry-portfolio-1.jpg"
                                            title="App 1"
                                            data-gallery="portfolio-gallery-app"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-link-45deg" />
                                        </a>
                                    </div>
                                </div>
                                {/* End Portfolio Item */}
                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                    <img
                                        src={img2}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Product 1</h4>
                                        <p>Lorem ipsum, dolor sit</p>
                                        <a
                                            href="./image/masonry-portfolio-2.jpg"
                                            title="Product 1"
                                            data-gallery="portfolio-gallery-product"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-link-45deg" />
                                        </a>
                                    </div>
                                </div>
                                {/* End Portfolio Item */}
                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                    <img
                                        src={img3}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Branding 1</h4>
                                        <p>Lorem ipsum, dolor sit</p>
                                        <a
                                            href="./image/masonry-portfolio-3.jpg"
                                            title="Branding 1"
                                            data-gallery="portfolio-gallery-branding"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-link-45deg" />
                                        </a>
                                    </div>
                                </div>
                                {/* End Portfolio Item */}
                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                    <img
                                        src={img4}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>Lorem ipsum, dolor sit</p>
                                        <a
                                            href="./image/masonry-portfolio-4.jpg"
                                            title="App 2"
                                            data-gallery="portfolio-gallery-app"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-link-45deg" />
                                        </a>
                                    </div>
                                </div>
                                {/* End Portfolio Item */}
                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                    <img
                                        src={img5}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Product 2</h4>
                                        <p>Lorem ipsum, dolor sit</p>
                                        <a
                                            href="./image/masonry-portfolio-5.jpg"
                                            title="Product 2"
                                            data-gallery="portfolio-gallery-product"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-link-45deg" />
                                        </a>
                                    </div>
                                </div>
                                {/* End Portfolio Item */}
                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                    <img
                                        src={img6}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Branding 2</h4>
                                        <p>Lorem ipsum, dolor sit</p>
                                        <a
                                            href="./image/masonry-portfolio-6.jpg"
                                            title="Branding 2"
                                            data-gallery="portfolio-gallery-branding"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-link-45deg" />
                                        </a>
                                    </div>
                                </div>
                                {/* End Portfolio Item */}
                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                    <img
                                        src={img7}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>Lorem ipsum, dolor sit</p>
                                        <a
                                            href="./image/masonry-portfolio-7.jpg"
                                            title="App 3"
                                            data-gallery="portfolio-gallery-app"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-link-45deg" />
                                        </a>
                                    </div>
                                </div>
                                {/* End Portfolio Item */}
                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                    <img
                                        src={img8}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Product 3</h4>
                                        <p>Lorem ipsum, dolor sit</p>
                                        <a
                                            href="./image/masonry-portfolio-8.jpg"
                                            title="Product 3"
                                            data-gallery="portfolio-gallery-product"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-link-45deg" />
                                        </a>
                                    </div>
                                </div>
                                {/* End Portfolio Item */}
                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                    <img
                                        src={img9}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-info">
                                        <h4>Branding 3</h4>
                                        <p>Lorem ipsum, dolor sit</p>
                                        <a
                                            href="./image/masonry-portfolio-9.jpg"
                                            title="Branding 2"
                                            data-gallery="portfolio-gallery-branding"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-link-45deg" />
                                        </a>
                                    </div>
                                </div>
                                {/* End Portfolio Item */}
                            </div>
                            {/* End Portfolio Container */}
                        </div>
                    </div>
                </section>
                {/* /Portfolio Section */}
            </main>

        </>
    )
}

export default Portfolio
