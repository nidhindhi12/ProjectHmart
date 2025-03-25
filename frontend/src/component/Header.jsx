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



const Header = (props) => {
    //#region useeState declaration
    const [show, setShow] = useState(false);
    const [change, setChange] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passError, setPassError] = useState('');
    const [passType, setPassType] = useState(false);
    const location = useLocation();
    const showquantity = useSelector((state) => state.count.value);
    const auth = useSelector((state) => state.auth.auth);
    const userInfo = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    //#endregion

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);

    }
    const handleChange = () => {
        setChange(!change);

        console.log(change);
        console.log(userLoginDetail);
    }


    const navlist = props.data.data.data;




    //#region  check  emailID
    const handlevalue = (e) => {
        setEmail(e.target.value);



    }

    const invalidvalue = (e) => {
        if (email && email.endsWith(".com") && email.includes("@")) {

            setEmailErr('')

        }
        else {
            setEmailErr("This is invalid email id.")

        }
    }
    //#endregion
    //#region handlePassword error
    const handlePassInput = (e) => {
        setPassword(e.target.value);



    }
    const handlePassword = () => {



        if (password.length < 8) {
            setPassError('Please enter a 8-digit password');

        }
        else {



            setPassError('');
        }

    }
    //#endregion
    //#region togglepassword
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    }
    const handleType = () => {
        setPassType(!passType);
    }
    //#endregion

    //#region  send user credentials
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:5000/api/loginuser', {
                email,
                password,
            });
            console.log(response);
            if (response.data.status) {

                localStorage.setItem('token', response.data.data.token);
                alert(response.data.data.message);
                dispatch(loginStatus(response.data.data.data));
                setShow(false);
            }
            else {
                console.log('invalid credentials');
            }
        }
        catch (error) {

            // alert(error.response?.data?.data?.message);
            alert('catch')
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
                                                  <Dropdown.Item><Link to ='/userInfo'>User Info</Link></Dropdown.Item>
                                                 <Dropdown.Item> <Link to ='/'>My Wishlist</Link></Dropdown.Item>
                                                 <Dropdown.Item><Link to ='/'>Logout</Link></Dropdown.Item>
                                               
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
                                    <Form.Group className="mb-2 mt-2" controlId="formGroupName">
                                        <Form.Label className='cus-size'>Full Name</Form.Label>
                                        <Form.Control type="text" className=' p-1 w-90' />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formGroupEmail">
                                        <Form.Label className='cus-size'>Email address</Form.Label>
                                        <Form.Control type="email" className=' p-1 w-90' />
                                    </Form.Group>
                                    <Form.Label className='cus-size'>Password</Form.Label>
                                    <Form.Control type="password" className=' p-1 w-90' />
                                    <Form.Group className="mb-2" controlId="formGroupPassword">
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formGroupPassword1">
                                        <Form.Label className='cus-size'>Confirm Password</Form.Label>
                                        <Form.Control type="password" className=' p-1 w-90' />
                                    </Form.Group>
                                </Form>
                                <div className=' d-flex justify-content-center mb-2'>
                                    <button className=' btn btn-secondary'>Sign Up </button>

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
                                        <input type="text" placeholder='Email ID' value={email} className='  theme rounded-2' onChange={handlevalue} onBlur={invalidvalue} />
                                        {emailErr && <p className='text-danger'>{emailErr}</p>}
                                        {/* new passowrd input */}
                                        <div className=' position-relative' >
                                            <input placeholder='Password' className=' theme  rounded-2 w-100' onChange={handlePassInput} onBlur={handlePassword} type={passType ? 'text' : 'password'} />
                                            <p className=' position-absolute eye-icon' >
                                                {/* <LuEyeClosed  onClick={handleType}/> */}
                                                {
                                                    passType ? <FaEye onClick={handleType} /> : <LuEyeClosed onClick={handleType} />
                                                }
                                            </p>
                                            {passError && <p className='text-danger'>{passError}</p>}
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


                    {/* 2nd part */}


                </div>
            </Modal>




        </>
    )

}
export default Header























