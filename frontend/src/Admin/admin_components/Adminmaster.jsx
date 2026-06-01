import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import Admincss from './Admincss'
import Adminheader from './Adminheader'
import AdminSidebar from './AdminSidebar'
import "../admin_assets/css/style.css"


const Adminmaster = () => {
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Admincss></Admincss>
      <Adminheader
        toggleSidebar={toggleSidebar}>
      </Adminheader>
      <AdminSidebar 
      sidebarOpen={sidebarOpen}
      toggleSidebar={toggleSidebar}
       />
      <Outlet></Outlet>


    </>
  )
}

export default Adminmaster
