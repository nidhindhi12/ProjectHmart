import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import username from '../images/username.jpg'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import axios from 'axios';
import { loginStatus } from '../store/slice/authSlice';
import { Link, useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { togglePassType, toggleShow } from '../store/slice/modalSlice';
import { showtoast } from '../store/slice/toastSlice'

const SignUp_llogin = () => {
  const show = useSelector((state) => state.modalShow.show);
  const passtype = useSelector((state) => state.modalShow.passtype);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [change, setChange] = useState(false);
  const [addUser, setAddUser] = useState({})

  const handleChange = () => {
    setChange(!change);

  }




  //#region add user
  const handleadduser = async (e) => {
    setAddUser({ ...addUser, [e.target.name]: e.target.value });
  }
  const handleSendUser = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/', addUser);
      console.log(response);

      dispatch(showtoast({ message: response.data.data.message, type: "success" }));
    } catch (error) {
      dispatch(showtoast({ message: error.response?.data?.data?.message, type: "error" }))

    }
  }
  //#endregion

  //#region  send user credentials
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post('http://localhost:5000/api/loginuser', addUser);

      if (response.data.status) {

        localStorage.setItem('token', response.data.data.token);

        dispatch(loginStatus(response.data.data.data));
        if (response.data.data.data.usertype === 'admin') {
          navigate('/admin');
        }


        dispatch(showtoast({ message: response.data.data.message, type: "success" }))
      }
      else {
        console.log('invalid credentials');
      }
    }
    catch (error) {
      console.log(error);
      dispatch(showtoast({ message: error.response?.data?.data?.message, type: "error" }))

    }
  }

  //#endregion

  return (
    <>
      <Modal show={show} onHide={() => dispatch(toggleShow())} >
        <div className=' w-100 '>
          <div className="img">
            <img src={username} alt="" className=' username_img  ' />

          </div>
          {
            // sign up
            change ? (
              <div className=' w-100 px-5'>
                <h1 className=' color fw-bolder text-capialize fs-2 mt-2'> Sign Up</h1>
                <span className=' opacity-10'>
                  Already have an account?
                </span>
                <Link className=' text-danger opacity-100  fw-bolder' onClick={handleChange}> login in</Link>


                <Form>
                  <Row className=' mt-2'>
                    <Form.Group as={Col} controlId="formGridUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Username" className='text-black' name='username' onChange={handleadduser} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email Id</Form.Label>
                      <Form.Control type="email" placeholder="Your E-mail" className='text-black' name='email' onChange={handleadduser} />
                    </Form.Group>
                  </Row>
                  {/* 1st col */}

                  <Row className=' mt-2'>
                    <Form.Group as={Col} controlId="formGridPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="Phone Number" name='phonenumber' className='text-black' onChange={handleadduser} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="text" placeholder="strong password" name='password' onChange={handleadduser} className='text-black' />
                    </Form.Group>
                  </Row>
                  {/* 3rd col */}
                  <Row className='py-3'>
                    <Form.Group as={Col} controlId="formGridArea">
                      <Form.Label>Area</Form.Label>
                      <Form.Control type="text" placeholder="Area" name='area' onChange={handleadduser} className='text-black' />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="City" name='city' onChange={handleadduser} className='text-black' />
                    </Form.Group>

                  </Row>
                  {/* 3rd col */}
                  <Row className='py-3'>
                    <Form.Group as={Col} controlId="formGridPincode">
                      <Form.Label>PinCode</Form.Label>
                      <Form.Control type="text" placeholder="Pincode" name='pincode' onChange={handleadduser} className='text-black' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLandmark">
                      <Form.Label>Landmark</Form.Label>
                      <Form.Control type="text" placeholder="Landmark" name='landmark' onChange={handleadduser} className='text-black' />
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" name='address' onChange={handleadduser} className='text-black' />
                  </Form.Group>
                </Form>
                <div className=' d-flex justify-content-center mb-2'>
                  <button className=' btn btn-secondary' onClick={handleSendUser}>Sign Up </button>

                </div>
                <p className='  opacity-10  fs-size mx-3 mb-3'> By signing up to create an account , you are  accepting our terms of service
                  and privacy policy.
                </p>
              </div>
            )
              :
              (
                // login page

                <div className='content px-5'>
                  <h1 className=' text-capitalize text-center mt-2 fs-3 text-gradient'>User Login</h1>
                  <form action="" className=' d-flex flex-column py-3  gap-2 signup'>
                    <input type="text" name='email' placeholder='Email ID' className='  theme rounded-2' onChange={handleadduser} />

                    {/* new passowrd input */}
                    <div className=' position-relative' >
                      <input placeholder='Password' className=' theme  rounded-2 w-100' onChange={handleadduser} type={passtype ? 'text' : 'password'} name='password' />
                      <p className=' position-absolute eye-icon' >

                        {
                          passtype ? <FaEye onClick={() => dispatch(togglePassType())} /> : <LuEyeClosed onClick={() => dispatch(togglePassType())} />
                        }
                      </p>

                    </div>

                  </form>
                  <div className=' d-flex align-items-center justify-content-between flex-column flex-sm-row'>
                    <p className=' d-flex align-items-center'>
                      <span><IoCheckmarkCircleSharp className=' fs-5 me-2 color' /></span>
                      <span className=' fs-6 color'>Remember Me</span>
                    </p>
                    <p className=' color'> Forgot Password ?</p>
                  </div>
                  <div className=' d-flex justify-content-center py-3'>
                    <button className='btn-secondary btn text-white' type=" submit"
                      onClick={handleSubmit}> LOGIN</button>

                  </div>
                  <p className=' text-end color text-capitalize pb-2 fs-6'> dont have an account yet?
                    <Link className=' border-bottom  text-danger' onClick={handleChange}> sign up</Link> </p>
                </div>

              )
          }
        </div>
      </Modal>
    </>
  )
}

export default SignUp_llogin

