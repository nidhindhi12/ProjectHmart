import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaHome } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import pro from '../images/about-7.webp';

const UserInfo = () => {
  const userInfo = useSelector((state) => state.auth.user);
  console.log(userInfo);
  return (
    <section className='userInfoSection'>
      <div className='bgpic'>
        <div className="overlay"></div>
        <div className=" info">
          <p>WELCOME {userInfo.username}</p>
          <Breadcrumb className=' fs-6 '>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>My Account</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Container>
        <Row className='spc'>
          <Col md={4}>
            <div className=' sizebox pt-4'>
              <div className="pro-pic text-center">
                <img src={pro} alt="" />
              </div>
              <div className="info_box">
                <p>{userInfo.username}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default UserInfo
