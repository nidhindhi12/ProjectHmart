import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';


const AdminUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h1 className=' text-center fs-3 fw-bolder'> Add User</h1>
      <div className=' position-absolute pos1'>
        <Button variant="warning" className=' text-white' onClick={handleShow}>Add User</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton onClick={handleClose} className=' cursor'>
            <Modal.Title style={{ 'color': 'var(--admin-header-color)' }}>Welcome</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" className=' text-black' />
                </Form.Group>

                {/* <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group> */}
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" className=' text-black' />
                </Form.Group>
              </Row>
              {/*  */}
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" className=' text-black' />
              </Form.Group>
              <Row className="mb-3">


                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" className=' text-black' />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label> Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder=" Confirm Password" className=' text-black' />
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

export default AdminUser
