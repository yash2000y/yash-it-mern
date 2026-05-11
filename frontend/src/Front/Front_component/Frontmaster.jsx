import React from 'react'
import { Outlet } from 'react-router-dom'
import Frontheader from './Frontheader'
import Frontfooter from './Frontfooter'

const Frontmaster = () => {
  return (
    <>
    <Frontheader/>
    <Outlet/>
    <Frontfooter/>
    </>
  )
}

export default Frontmaster
