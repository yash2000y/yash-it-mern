import React from 'react'
import { Link } from 'react-router-dom'
import "../admin_assets/css/style.css"


const AdminSidebar = ({ sidebarOpen, toggleSidebar }) => {

  
  return (
    <>
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
        />
      )}
      <div className=
        {`sidebar ${sidebarOpen ? "sidebar-show" : ""}`}
        id="sidebar"
        
        >
        <button
          className="sidebar-close-btn"
          onClick={toggleSidebar}
        >
          ✕
        </button>
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li>
                <Link to="/admin/dashboard"><i className="fas fa-holly-berry"></i> <span>Dashboard</span></Link>
              </li>
              <li>
                <Link to="/admin/users"><i className="fas fa-holly-berry" /> <span>Users</span></Link>
              </li>
              <li>
                <Link to="/admin/enquery">
                  <i className="fas fa-holly-berry"></i> <span>Enquery</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/homesetting">
                  <i className="fas fa-holly-berry"></i> <span>Home Setting</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/aboutsetting">
                  <i className="fas fa-holly-berry"></i> <span>About Setting</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </>
  )
}

export default AdminSidebar
