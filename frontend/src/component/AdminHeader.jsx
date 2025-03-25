import React from 'react'
import { Row, Col, Container, Form, Button, InputGroup } from 'react-bootstrap'
import logo from '../images/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { PiEnvelopeSimple } from "react-icons/pi";
import { MdNotificationsNone } from "react-icons/md";
import user from '../images/img3.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch,useSelector } from 'react-redux'
import { Sidebar } from '../store/slice/quantitySlice';
import { MdLogout } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { ImProfile } from "react-icons/im";


import SidebarMenu from './Sidebar';

const AdminHeader = () => {
  const show = useSelector((state) => state.count.showSidebar)
  


  const dispatch = useDispatch()
  const handlebtn = () => {
    dispatch(Sidebar());

  }

  
  return (
    <>
      <nav>
        <Container fluid >
          <Row style={{ 'backgroundColor': 'var(--admin-header-color)' }} className='  align-items-center admin_row' >
            <Col className=' px-3 text-md-start   py-md-0 px-sm-5 py-2 ' xs={6} md={"auto"} >
              <img src={logo} alt="" />
            </Col>
            <Col className=' px-3 col-6 col-md-auto text-end'>
              <GiHamburgerMenu className=' text-white fs-5 ' onClick={handlebtn} />
            </Col>
            <Col>
              <InputGroup className="position-relative  d-none d-md-flex " style={{ width: '70%' }}>
                <Form.Control
                  type="search"
                  placeholder="Search.."
                  className="rounded-pill "
                  aria-label="Search"
                  id='admin_input'
                  name="search"
                  required
                />
                <InputGroup.Text className="bg-transparent border-0 position-absolute end-0 search_icon">
                  <ImSearch className=' text-white' />
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col className=' d-flex gap-5 text-white justify-content-end  d-none d-md-flex' >
              <div className=' d-flex'>
                <div className=' position-relative hover_class px-3 py-3'>
                  <div className='icon fs-5'>
                    <PiEnvelopeSimple />
                  </div>
                  <div className='notify'>
                    <span className=' heartbit'></span>
                    <span className='point'></span>

                  </div>
                </div>
                <div className=' position-relative hover_class  px-3 py-3 '>
                  <div className='icon fs-5'>
                    <MdNotificationsNone />
                  </div>
                  <div className='notify'>
                    <span className=' heartbit'></span>
                    <span className='point'></span>

                  </div>
                </div>
              </div>
              <div className=" d-flex gap-4 align-items-center justify-content-end px-3">
                <img src={user} alt="" className=' w-20' />
                <div className=' w-40'>
                  <Dropdown>
                    <Dropdown.Toggle >
                      Katy Perry
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" className=' opacity-10 d-flex gap-2 align-items-center'>
                        <ImProfile />
                        My Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2" className=' opacity-10 d-flex gap-2 align-items-center'>
                        <MdAccountBalanceWallet />
                        My Balance
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3" className=' opacity-10 d-flex gap-2 align-items-center'>
                        <MdLogout />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>

    </>
  )
}

export default AdminHeader
