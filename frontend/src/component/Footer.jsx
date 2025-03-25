import React from 'react'

import { CiInstagram } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark pb-3" >
                <Container>
                    <Row className='sub_border pb-4 d-flex flex-column flex-sm-row justify-content-center align-items-center justify-content-sm-between' >
                        <Col  className='mt-5 col-md-3  col-6 '>
                        <div className="f-col">
                            <h5 className="text-white">Customer Service</h5>
                            <p className='text-white pt-2'>Help & Contact Us</p>
                            <p className='text-white pt-2'>Returns & Refunds</p>
                            <p className='text-white pt-2'>Online Stores</p>
                            <p className='text-white pt-2'>Terms & Conditions</p>

                        </div>
                        </Col>
                        <Col className='mt-5  col-md-3  col-6 '>
                        <div className="f-col">
                            <h5 className="text-white">Company</h5>
                            <p className='text-white pt-2'>What We Do</p>
                            <p className='text-white pt-2'>Available Services</p>
                            <p className='text-white pt-2'>Latest Posts</p>
                            <p className='text-white pt-2'>FAQs</p>

                        </div>
                        </Col>
                        <Col  className='mt-5  col-md-3  colj-6'>
                        <div className="f-col">
                            <h5 className="text-white">Social Media</h5>
                            <p className='text-white pt-2'>Twitter</p>
                            <p className='text-white pt-2'>Instagram</p>
                            <p className='text-white pt-2'>Facebook</p>
                            <p className='text-white pt-2'>Pinterest</p>

                        </div>
                        </Col>
                        <Col   className='mt-5  col-md-3  col-6'>
                        <div className="f-col">
                            <h5 className="text-white">Profile</h5>
                            <p className='text-white pt-2'>My Account</p>
                            <p className='text-white pt-2'>Ch eckout</p>
                            <p className='text-white pt-2'>Order Tracking</p>
                            <p className='text-white pt-2'>Help & Support</p>

                        </div>
                        </Col>
                    </Row>
                </Container>
                   <Container>
                    <Row className='d-flex flex-column flex-sm-row align-items-center justify-content-center'>
                        <Col md={6} xs={12} className='text-white mt-2 px-2 text-center text-sm-start '>
                        <p>© 2025 Electron - WordPress Theme by Avanam</p>
                        </Col>
                        <Col md={6} xs={12} className='text-white d-flex align-items-center justify-content-md-end gap-3 justify-content-center mt-2'>
                        <p >Follow Us</p>
                        <div className="logos d-flex gap-2">
                            <CiInstagram/>
                            <FaPinterestP/>
                            <CiTwitter/>
                        </div>
                        </Col>
                    </Row>
                   </Container>
                
            </footer>
        </>
    )
}

export default Footer