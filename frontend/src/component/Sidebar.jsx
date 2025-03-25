import React, { useEffect, useState } from 'react'

import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from '../store/slice/quantitySlice';
import { useLocation, Link } from 'react-router-dom';
import user from '../images/img3.jpg'
import { IoIosSettings } from "react-icons/io";
import { PiEnvelopeSimple } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";
import { Row } from 'react-bootstrap';





const SidebarMenu = () => {

  const show = useSelector((state) => state.count.showSidebar)
  const dispatch = useDispatch();
  console.log(show)


  // creaction of active class
  const location = useLocation();
  console.log(location.pathname);
  // const [activeLink, setactiveLink] = useState(location.pathname);

 



  const handleClose = () => {
    dispatch(Sidebar())
  }
  const handleLink = (path) => {
    setactiveLink(path);
  }




 
  return (
    <>

      <Offcanvas  show={show} onHide={handleClose} responsive='lg' id='sidecanavs'>
        <Offcanvas.Header className='user-bg text-white justify-content-center'>
          <div className=' text-center'>
            <img src={user} alt="" className=' w-20' />
            <p className=' py-2'>Katy Perry</p>
            <div className=' icon_color d-flex gap-2' >
              <IoIosSettings />
              <PiEnvelopeSimple />
              <MdLogout />

            </div>

          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className=' d-block'>
          <ul className=' off px-0  pt-4'>

            <Link to='/admin' className={location.pathname === "/admin" ? 'activeItem' : ""} onClick={handleClose}>
              <li
                className="ps-5 py-2 d-flex gap-2 cursor text-white hvr-sweep-to-right">
                <span><MdDashboardCustomize /></span>
                <span > Dashboard</span>
              </li></Link>
            <Link to='/admin/adminUser' className={location.pathname === "/admin/adminUser" ? 'activeItem' : ""} onClick={handleClose} >

              <li className="ps-5 py-2 d-flex gap-2 cursor text-white hvr-sweep-to-right ">
                <span><FaUser /></span>
                <span>User</span>
              </li></Link>
            <Link to='/admin/adminEm' className={location.pathname === "/admin/adminEm" ? 'activeItem' : ""} onClick={handleClose}>
              <li className=' ps-5  py-2 d-flex gap-2 cursor text-white hvr-sweep-to-right'>
                <span><FaUserTie /></span>
                <span >Employee</span>
              </li></Link>
            <Link to='/admin/adminProd' className={location.pathname === "/admin/adminProd" ? 'activeItem' : ""} >

              <li className=' ps-5  py-2 d-flex gap-2 cursor text-white hvr-sweep-to-right'>
                <span><MdOutlineProductionQuantityLimits /></span>
                <span >Product</span>
              </li></Link>
            <Link to='/admin/adminSett' className={location.pathname === "/admin/adminSett" ? 'activeItem' : ""} onClick={handleClose} >

              <li className=' ps-5  py-2 d-flex gap-2 cursor text-white hvr-sweep-to-right'>
                <span>   <IoIosSettings /></span>
                <span >Settings</span>
              </li></Link>
            <Link to='/admin/adminSer' className={location.pathname === "/admin/adminSer" ? 'activeItem' : ""} onClick={handleClose} >
              <li className="ps-5  py-2 d-flex gap-2 cursor text-white hvr-sweep-to-right">
                <span><MdCleaningServices />
                </span>
                <span >Service</span>
              </li></Link>


          </ul>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default SidebarMenu
