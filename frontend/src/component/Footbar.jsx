import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { IoHomeSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { LuShoppingCart } from "react-icons/lu";


import Modal from 'react-bootstrap/Modal';




const Footbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const handleSaveChanges = () => {
    handleClose();
    navigate('/products');

  }





  const showquantity = useSelector((state) => state.count.value);

  return (
    <>

      <section className="footbar bg-dark py-2 sticky-bottom d-block d-lg-none">
        <Container >
          <Row>
            <ul className='d-flex justify-content-around align-items-center py-1 mb-0'>
              <li className=' px-2 py-1  rounded'>
                <Link to="/">
                  <IoHomeSharp className=' fs-3' />
                </Link>
              </li>
              <li className=' px-2 py-1  rounded'>
                <Link to="/products">
                  <AiFillProduct className=' fs-3' />
                </Link>
              </li>
              <li className=' px-2 py-1  rounded'>
                <Link to>
                  <BsFillSearchHeartFill className=' fs-3' onClick={handleShow} />

                </Link>
              </li>



              <li className=' position-relative px-2 py-1'>
                <Link to="/cart" className='d-flex align-items-center'>
                  <LuShoppingCart className='fs-2 position-relative' />
                  <span style={{ color: 'var(--highlight-color)', display: showquantity === 0 ? 'none' : 'inline-flex' }} className='flex-column position-absolute pos'>
                    {showquantity}
                  </span>
                </Link>
              </li>


            </ul>

          </Row>
        </Container >

      </section >
      <div className="modal">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className=' fw-bold flex-grow-1 text-center'>Search Products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="my-2">
              <input type="search" className="rounded-5 py-2 px-3 form-control" placeholder="Search for products" id='searchbar' />
            </div>
          </Modal.Body >
          <Modal.Footer className=' justify-content-center gap-4'>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveChanges} >
              Save Changes
            </Button>


          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Footbar
