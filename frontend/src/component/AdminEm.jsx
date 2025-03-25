import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import { IoCloseSharp } from "react-icons/io5";
import Row from 'react-bootstrap/Row'

const AdminEm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h1 className=' text-center fs-3 fw-bolder ' > Add Employee</h1>
      <div className='position-absolute pos1'>
        <Button variant="warning" className=' text-white' onClick={handleShow}>Add Employee</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={{ 'background-color': 'var(--admin-header-color)' }} className=' d-flex justify-content-between fs-3 text-white'>
            <Modal.Title className=' text-white'>Welcome</Modal.Title>
            <IoCloseSharp onClick={handleClose} className=' cursor' />
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label style={{ 'color': 'var(--admin-header-color)' }}>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" className=' text-black' />
                </Form.Group>


                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label style={{ 'color': 'var(--admin-header-color)' }}>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" className=' text-black' />
                </Form.Group>
              </Row>
              {/*  */}

              <Row className="mb-3">


                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label style={{ 'color': 'var(--admin-header-color)' }}>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" className=' text-black' />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label style={{ 'color': 'var(--admin-header-color)' }}> Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder=" Confirm Password" className=' text-black' />
                </Form.Group>

              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPhoneNumber">
                  <Form.Label style={{ 'color': 'var(--admin-header-color)' }}> PhoneNumber</Form.Label>
                  <Form.Control type="text" placeholder="Enter PhoneNumber" className=' text-black' />
                </Form.Group>

                {/* <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group> */}
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label style={{ 'color': 'var(--admin-header-color)' }}>DOB</Form.Label>
                  <Form.Control type="date" placeholder='MM-DD-YY' className=' text-black' />
                </Form.Group>
              </Row>


            </Form>
          </Modal.Body>
          <Modal.Footer className=' d-flex justify-content-center'>
            <Button style={{ 'backgroundColor': 'var(--admin-header-color)' }} className=' px-4 py-2' type='submit' onClick={handleClose}>
              Submit
            </Button>

          </Modal.Footer>

        </Modal>
      </div>
    </>
  )
}

export default AdminEm
