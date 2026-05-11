import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Admincss from './Admincss'
import Adminheader from './Adminheader'
import AdminSidebar from './AdminSidebar'

const Adminmaster = () => {
  return (
    <>
    <Admincss></Admincss>
    <Adminheader></Adminheader>
    <AdminSidebar></AdminSidebar>
      <Outlet></Outlet>
      
      
    </>
  )
}

export default Adminmaster
