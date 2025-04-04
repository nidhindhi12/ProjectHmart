import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import dp from '../images/dp.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { toggleChangePass, toggleShow } from '../store/slice/modalSlice';
import ChangePass from './ChangePass';
import SignUp_llogin from './SignUp_llogin';
import { clearLogout } from '../store/slice/authSlice';


const Header = (props) => {
    //#region useState declaration
    const navlist = props.data.data.data;

    const location = useLocation();
    const showquantity = useSelector((state) => state.count.value);
    const changePass = useSelector((state) => state.modalShow.changePass);
    const auth = useSelector((state) => state.auth.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //#endregion
    
    const  handleLogout=()=>{
        localStorage.removeItem('token');
        dispatch(clearLogout());
        navigate('/');
    }



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
                                                <Dropdown.Item onClick={() => { navigate('/userInfo') }}>User Info</Dropdown.Item>
                                                <Dropdown.Item onClick={() => dispatch(toggleChangePass())}>
                                                    Change Password
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>



                                            </Dropdown.Menu>
                                            {changePass && <ChangePass />}
                                        </Dropdown>
                                    </span>

                                </div>
                            ) : (
                                <span className=' fs-4'>
                                    <FaRegUser className=' fs-3 text-white me-3 ' onClick={() => dispatch(toggleShow())} />
                                    <SignUp_llogin />
                                </span>
                            )
                            }
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
export default Header



































