import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li>
                <Link to="/admin/dashboard"><i class="fas fa-holly-berry"></i> <span>Dashboard</span></Link>
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
