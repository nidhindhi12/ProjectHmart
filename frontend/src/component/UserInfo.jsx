import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import dp from '../images/dp.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { loginStatus } from '../store/slice/authSlice';
import { useNavigate } from "react-router-dom";
import { showtoast } from '../store/slice/toastSlice';



const UserInfo = () => {
  const userInfo = useSelector((state) => state.auth.user);
  
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState({
    id: userInfo?._id || '',
    username: userInfo?.username || "",
    email: userInfo?.email || '',
    address: userInfo?.address || '',
    phonenumber: userInfo?.phonenumber || '',
    city: userInfo?.city || '',
    area: userInfo?.area || '',
    landmark: userInfo?.landmark || '',
    pincode: userInfo.pincode || '',
  });

  useEffect(() => {
    setUpdateData({
      id: userInfo?._id || '',
      username: userInfo?.username || "",
      email: userInfo?.email || '',
      address: userInfo?.address || '',
      phonenumber: userInfo?.phonenumber || '',
      city: userInfo?.city || '',
      area: userInfo?.area || '',
      landmark: userInfo?.landmark || '',
      pincode: userInfo.pincode || '',
    })
  }, [userInfo]);

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  }
  const handleChanges = async (e) => {

    e.preventDefault();
    try {

      const response = await axios.put(`http://localhost:5000/api/updatedata/${updateData.id}`, updateData)
      dispatch(showtoast({ message: response.data.data.message, type: "success" }))
       
      navigate('/');
    } catch (error) {
      console.log(error);


    }
  }


  return (
    <section className='userInfoSection'>
      <div className='bgpic'>
        <div className="overlay"></div>
        <div className=" info">
          <p>WELCOME <span className=' text-uppercase' style={{ 'color': 'var(--highlight-color)' }}>{userInfo.username}</span></p>
          <Breadcrumb className=' fs-6 '>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>My Account</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Container>
        <Row className='spc'>
          <Col md={4}>
            <div className=' sizebox py-4 mb-5 rounded-3 mx-auto'>
              <div className="pro-pic text-center">
                <img src={dp} alt="" />
              </div>
              <div className="info_box text-white mt-2 text-center">
                <h5 className=' fs-5 fw-bold p-0'>{updateData.username}</h5>
                <p>{updateData.email},</p>
                <p>{updateData.phonenumber}</p>
                <p>{updateData.address}</p>
                <p>
                  <span >{updateData.area},</span>
                  <span className=' px-2'>{updateData.city},</span>
                  <span>{updateData.landmark}</span>
                </p>
                <p>{updateData.pincode}</p>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <h5 className=' text-center fw-bold pb-2' style={{ 'fontFamily': 'var(--primary-family)', 'color': 'var(--highlight-color)' }}>Update Information</h5>
            <div className="updateInfo mb-5">
              <div className="updateForm border border-1 p-3 ">
                <Row>
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" value={updateData.username} className='text-black' name='username' onChange={handleUpdate} />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control type="email" placeholder="Your E-mail" name='email' value={updateData.email} onChange={handleUpdate} />
                  </Form.Group>
                </Row>
                {/* 1st col */}

                <Row>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" value={updateData.phonenumber} name='phonenumber' onChange={handleUpdate} />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPincode">
                    <Form.Label>PinCode</Form.Label>
                    <Form.Control type="text" placeholder="Pincode" name='pincode' value={updateData.pincode} onChange={handleUpdate} />
                  </Form.Group>
                </Row>
                {/* 3rd col */}
                <Row className='py-3'>
                  <Form.Group as={Col} controlId="formGridArea">
                    <Form.Label>Area</Form.Label>
                    <Form.Control type="text" placeholder="Area" name='area' value={updateData.area} onChange={handleUpdate} />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" name='city' value={updateData.city} onChange={handleUpdate} />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridLandmark">
                    <Form.Label>Landmark</Form.Label>
                    <Form.Control type="text" placeholder="Landmark" name='landmark' value={updateData.landmark} onChange={handleUpdate} />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" name='address' onChange={handleUpdate} value={updateData.address} />
                </Form.Group>
                <div className=' text-center'>

                  <Button type="submit" className=' px-5 py-2 upbtn  w-40' onClick={handleChanges}>
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default UserInfo



