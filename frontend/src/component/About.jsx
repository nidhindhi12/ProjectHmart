import React from 'react'

import about_image from '../images/banner.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import aboutImg from '../images/about.jpg'
import { Row, Col, Container } from 'react-bootstrap'
// import M1 from '../images/mem1.webp';
// import M2 from '../images/mem2.webp';
// import M3 from '../images/mem3.webp';



const About = () => {
    return (
        <>
            <section className='about_section'>

                <div className="about_img position-relative">

                    <img src={about_image} alt="" className=' img-fluid' />
                    <div className="overlay position-absolute"></div>
                    <div className="about_content_container position-absolute">
                        <div className="about_content">
                            <h2 className='about_title'>About Us</h2>
                        </div>
                    </div>
                </div>

                <Row>

                </Row>

                <Container>
                <Row className='bg-white gx-0 my-5'>
                    <Col xs={12} lg={7}>
                        <img src={aboutImg} alt="" className=' w-90 p-2' />
                    </Col>
                    <Col xs={12} lg={5} className="d-flex flex-column justify-content-center text-center text-md-start p-2">
                       
                        <h5 style={{color:"var( --highlight-color)"}}>EST 1988</h5>
                        <h3 className=' fw-bold fs-2' style={{fontFamily:"var(--secondary-family )"}}>Our story</h3>
                        <p className=' opacity-10'>
                        Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.
                        </p>
                        <p className=' opacity-10'>
                            Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem. Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur laudantium temporibus dicta minus dolor.
                        </p>
                        <p className=' opacity-10'>
                        Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.
                        </p>

                    </Col>
                </Row>
                </Container>

                <div className="team_member pb-5" style={{ backgroundColor: "var(--bg-color)" }}>
                    <h1 className=' fw-bold fs-2 text-center textcolor py-5 text-uppercase'>Team Members</h1>
                    <div className="container">
                        <Row className=' justify-content-md-around gy-5 justify-content-xs-center align-items-center m-auto'>
                            <Col lg={4} xs={12} md={5} >
                                <Card style={{ width: '95%' }} className=' border-0 card-color'>
                                    <Card.Img variant="top" src="https://template.hasthemes.com/hurst-v1/hurst/img/team/1.png" className=' w-50 mx-auto my-4' />
                                    <Card.Body>
                                        <Card.Title className="fw-bold text-center fs-41 pb-2">Nancy holland</Card.Title>
                                        <Card.Title className='text-uppercase fs-6 textcolor text-center'>Social manager</Card.Title>
                                        <Card.Text className='pb-4'>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} xs={12} md={5}>
                                <Card style={{ width: '95%' }} className=' border-0'>
                                    <Card.Img variant="top" src="https://template.hasthemes.com/hurst-v1/hurst/img/team/2.png" className=' w-50 mx-auto my-4' />
                                    <Card.Body>
                                        <Card.Title className="fw-bold text-center fs-4 pb-1">Sara Knight</Card.Title>
                                        <Card.Title className='text-uppercase fs-6 textcolor text-center'>chairman</Card.Title>
                                        <Card.Text className='pb-4'>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} xs={12} md={5}>
                                <Card style={{ width: '95%' }} className=' border-0'>
                                    <Card.Img variant="top" src="https://template.hasthemes.com/hurst-v1/hurst/img/team/3.png" className=' w-50 mx-auto my-4' />
                                    <Card.Body>
                                        <Card.Title className="fw-bold text-center fs-4 pb-1">Heather Estrada</Card.Title>
                                        <Card.Title className='text-uppercase fs-6 textcolor text-center'>Product Manager</Card.Title>
                                        <Card.Text className='pb-4'>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>



                        </Row>
                    </div>

                </div>








            </section>
        </>
    )
}

export default About