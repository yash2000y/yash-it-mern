import React from 'react'
import img01 from "../../admin_assets/img/icons/dash-icon-01.png"
import img02 from "../../admin_assets/img/icons/dash-icon-02.webp"
import img03 from "../../admin_assets/img/icons/dash-icon-03.png"
import img04 from "../../admin_assets/img/icons/dash-icon-04.png"
import img05 from "../../admin_assets/img/icons/social-icon-01.svg"
import img06 from "../../admin_assets/img/icons/social-icon-02.svg"
import img07 from "../../admin_assets/img/icons/social-icon-03.svg"
import img08 from "../../admin_assets/img/icons/social-icon-04.svg"

const Dashboard = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-sub-header">
                  <h3 className="page-title">Welcome Admin!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Admin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card bg-comman w-100">
                <div className="card-body">
                  <div className="db-widgets d-flex justify-content-between align-items-center">
                    <div className="db-info">
                      <h6>Total Clients</h6>
                      <h3>50055</h3>
                    </div>
                    <div className="db-icon">
                      <img
                        src={img01}
                        alt="Dashboard Icon"
               
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card bg-comman w-100">
                <div className="card-body">
                  <div className="db-widgets d-flex justify-content-between align-items-center">
                    <div className="db-info">
                      <h6>Web Design Projects</h6>
                      <h3>50+</h3>
                    </div>
                    <div className="db-icon">
                      <img
                        src={img02}
                        alt="Dashboard Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card bg-comman w-100">
                <div className="card-body">
                  <div className="db-widgets d-flex justify-content-between align-items-center">
                    <div className="db-info">
                      <h6>Full Stack Projects</h6>
                      <h3>30+</h3>
                    </div>
                    <div className="db-icon">
                      <img
                        src={img03}
                        alt="Dashboard Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card bg-comman w-100">
                <div className="card-body">
                  <div className="db-widgets d-flex justify-content-between align-items-center">
                    <div className="db-info">
                      <h6>Ongoing Websites</h6>
                      <h3>$505</h3>
                    </div>
                    <div className="db-icon">
                      <img
                        src={img04}
                        alt="Dashboard Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card bg-comman w-100">
                <div className="card-body">
                  <div className="db-widgets d-flex justify-content-between align-items-center">
                    <div className="db-info">
                      <h6>Web Applications</h6>
                      <h3>50055</h3>
                    </div>
                    <div className="db-icon">
                      <img
                        src={img01}
                        alt="Dashboard Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card bg-comman w-100">
                <div className="card-body">
                  <div className="db-widgets d-flex justify-content-between align-items-center">
                    <div className="db-info">
                      <h6>React Projects</h6>
                      <h3>50+</h3>
                    </div>
                    <div className="db-icon">
                      <img
                        src={img02}
                        alt="Dashboard Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card bg-comman w-100">
                <div className="card-body">
                  <div className="db-widgets d-flex justify-content-between align-items-center">
                    <div className="db-info">
                      <h6>MongoDB Collections</h6>
                      <h3>30+</h3>
                    </div>
                    <div className="db-icon">
                      <img
                        src={img03}
                        alt="Dashboard Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card bg-comman w-100">
                <div className="card-body">
                  <div className="db-widgets d-flex justify-content-between align-items-center">
                    <div className="db-info">
                      <h6>Live Websites</h6>
                      <h3>$505</h3>
                    </div>
                    <div className="db-icon">
                      <img
                        src={img04}
                        alt="Dashboard Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card flex-fill fb sm-box">
                <div className="social-likes">
                  <p>Like us on facebook</p>
                  <h6>50,095</h6>
                </div>
                <div className="social-boxs">
                  <img src={img05} alt="Social Icon" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card flex-fill twitter sm-box">
                <div className="social-likes">
                  <p>Follow us on twitter</p>
                  <h6>48,596</h6>
                </div>
                <div className="social-boxs">
                  <img src={img06} alt="Social Icon" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card flex-fill insta sm-box">
                <div className="social-likes">
                  <p>Follow us on instagram</p>
                  <h6>52,085</h6>
                </div>
                <div className="social-boxs">
                  <img src={img07} alt="Social Icon" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card flex-fill linkedin sm-box">
                <div className="social-likes">
                  <p>Follow us on linkedin</p>
                  <h6>69,050</h6>
                </div>
                <div className="social-boxs">
                  <img src={img08} alt="Social Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>Copyright © 2026 Shivwebit.com.</p>
        </footer>
      </div>

    </>
  )
}

export default Dashboard
