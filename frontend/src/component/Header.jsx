import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import username from '../images/username.jpg'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import axios from 'axios';
import { loginStatus } from '../store/slice/authSlice';
import dp from '../images/dp.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { showtoast } from '../store/slice/toastSlice'





const Header = (props) => {
    //#region useeState declaration
    const navlist = props.data.data.data;
    const [show, setShow] = useState(false);
    const [change, setChange] = useState(false);
    const [passType, setPassType] = useState(false);
    const location = useLocation();
    const showquantity = useSelector((state) => state.count.value);
    const auth = useSelector((state) => state.auth.auth);
    const [addUser, setAddUser] = useState({})
    const dispatch = useDispatch();
    //#endregion


    const handleChange = () => {
        setChange(!change);
        console.log(change);
    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleType = () => setPassType(!passType);

    //#region  send user credentials
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:5000/api/loginuser', addUser);
            console.log(response);
            if (response.data.status) {

                localStorage.setItem('token', response.data.data.token);
                // alert(response.data.data.message);
                dispatch(loginStatus(response.data.data.data));
                dispatch(showtoast({ message: response.data.data.message, type: "success" }))
                setShow(false);
            }
            else {
                console.log('invalid credentials');
            }
        }
        catch (error) {
            console.log(error);
            // alert(error.response?.data?.data?.message);
            dispatch(showtoast({ message: error.response?.data?.data?.message, type: "error" }))

        }
    }
    //#endregion

    //#region add user
    const handleadduser = async (e) => {
        setAddUser({ ...addUser, [e.target.name]: e.target.value });
    }
    const handleSendUser = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api', addUser);
            console.log(response);
            // alert(await response.data.data.message);
            dispatch(showtoast({message:response.data.data.message,type:"success"}));
        } catch (error) {
            dispatch(showtoast({ message: error.response?.data?.data?.message, type: "error" }))

        }
    }
    //#endregion


    return (

        <>
            <Navbar expand="lg" className="bg-dark text-white">
                <Container>
                    <Navbar.Brand href="#home">
                        <h3 className='ff'>H Mart</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                        <Nav className="me-auto text-color">
                            {
                                navlist.map((item) => {
                                    return (
                                        <Link className={`ps-5 ${location.pathname === item.path ? "active" : ""} mb-lg-0 mb-3`} to={item.path} key={item.path}

                                        >{item.name}</Link>
                                    )
                                })
                            }
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success ">Search</Button>
                        </Form>

                        <div className=" d-flex flex-column justify-content-center align-items-center ms-3 position-relative">
                            <span className=' quantity position-absolute' style={{ color: 'var(--highlight-color)', display: showquantity === 0 ? 'none' : 'block' }}>

                                {showquantity}
                            </span>

                            <Link to="/shop"><LuShoppingCart className=' fs-2 text-white me-3 ' /></Link>
                        </div>
                        <div>
                            {auth ? (

                                <div>

                                    <span className=' fs-4'>

                                        <Dropdown>
                                            <Dropdown.Toggle variant=' transparent' id="dropdown-basic" className='def'>
                                                <img src={dp} width={35} height={32} className=' rounded-5' alt="" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item ><Link to='/userinfo'>User Info</Link></Dropdown.Item>
                                                <Dropdown.Item> <Link to='/'>My Wishlist</Link></Dropdown.Item>
                                                <Dropdown.Item><Link to='/'>Logout</Link></Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </span>

                                </div>
                            ) : (
                                <span className=' fs-4'>

                                    <FaRegUser className=' fs-3 text-white me-3 ' onClick={handleShow} />
                                </span>
                            )

                            }
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Modal show={show} onHide={handleClose} >
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
                                            <input placeholder='Password' className=' theme  rounded-2 w-100' onChange={handleadduser} type={passType ? 'text' : 'password'} name='password' />
                                            <p className=' position-absolute eye-icon' >

                                                {
                                                    passType ? <FaEye onClick={handleType} /> : <LuEyeClosed onClick={handleType} />
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
export default Header























