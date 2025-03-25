import React from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Contact = () => {
    return (
        <>
            <section className='contact_section m-30 pb-5 pt-5'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-6 p-3 col-12'>
                            <div className='contact_info'>
                                <h1 className="heading">Contact Us</h1>
                                <p className="para">We're happy to answer questions or help you with returns.
                                    Please fill out the form below if you need assistance.</p>
                                <p className="address">Addresses : Acme Widgets 123 Widget Street Acmeville, AC 12345 United States of America</p>
                                <p className="email">
                                    <span className="title">Email:</span>
                                    <Link className="name textcolor"> contact@ibigecommerce.com</Link>
                                </p>
                                <p className="hotline">
                                    <span className="title"> Hotline Free 24/24 : <br /></span>

                                    <Link className="name textcolor"> (1800)-000-6890</Link>

                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 p-3 col-12">
                            <form >
                                <Row className=' pb-3 flex-column d-sm-flex flex-md-row'>
                                    <Col >
                                        <label className="pb-2">Full Name</label><br></br>
                                        <input type="text" name="name" className=' w-100 p-2 opacity-25 radius' />

                                    </Col>
                                    <Col>
                                        <label className="pb-2">Phone Number</label><br></br>
                                        <input type="text" name="phonenumber" className=' w-100 p-2 opacity-25 raidus' />
                                    </Col>


                                </Row>
                                <Row className='pb-3  flex-column d-flex flex-md-row'>
                                    <Col>   <div className="required d-flex justify-content-between">
                                        <label className="pb-2">E-mail Address</label>
                                        <small style={{ fontSize: '12px' }}>REQUIRED</small>
                                    </div>
                                        <input type="e-mail" name="e-mail" className=' w-100 p-2 opacity-25 raidus' required />

                                    </Col>
                                    <Col className='mt-sm-0 mt-4'>
                                        <label className="pb-2">Order Number</label><br></br>
                                        <input type="text" name="name" className=' w-100 p-2  opacity-25 raidus' />
                                    </Col>
                                </Row>
                                <Row>
                                    <label className="pb-2">Comments</label>
                                    <textarea name="comments" rows={6} col={25}></textarea>
                                </Row>
                                <button className='btn btn-secondary'>SUBMIT</button>
                            </form>

                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}

export default Contact