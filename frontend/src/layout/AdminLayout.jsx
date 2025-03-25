import React from 'react'
import AdminHeader from '../component/AdminHeader'
import { Outlet } from 'react-router-dom'
import AdminFooter from '../component/AdminFooter'
import SidebarMenu from '../component/Sidebar'
import { Row, Col, Container } from 'react-bootstrap'
import { Sidebar } from '../store/slice/quantitySlice'
import { useDispatch, useSelector } from 'react-redux';



const AdminLayout = () => {
  const show = useSelector((state) => state.count.showSidebar)

  console.log(show)
  return (
    <>

      <AdminHeader />
      <div className='d-lg-block d-none'>
        <Row className='mx-0  '>

          <Col xl={2} lg={3} className={!show ? 'd-block px-0' : 'd-none'}>

            <SidebarMenu />
          </Col>

          <Col className={!show ? 'position-relative px-0 col-xl-10 col-lg-9' : 'col-12'}>

            <div>
              <Outlet />
            </div>
            <div className='position-absolute bottom-0 w-100 start-0'>

              <AdminFooter />
            </div>

          </Col>
        </Row>
      </div>
      <div className='d-lg-none d-block'>

        <SidebarMenu />



        <Outlet />
        <div className='position-absolute bottom-0 w-100 start-0' >
          <AdminFooter />
        </div>
      </div >

    </>
  )
}









export default AdminLayout
