import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AdminProd = () => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(!show);
  }
  return (
    <>
      <h1 className=' text-center fs-3 fw-bold mt-2'> Add Products</h1>
      <div className=' position-absolute pos1'>

        <Button variant='warning' className=' text-white' onClick={handleModal}> Add Products</Button>
        {
          show &&
          (
            <Modal show={show} onHide={handleModal}>
              <Modal.Header closeButton onClick={handleModal} className=' cursor'>
                <Modal.Title style={{ 'color': 'var(--admin-header-color)' }}>Welcome</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>ProductName</Form.Label>
                      <Form.Control type="text" className=' text-black' />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>SerialNumber</Form.Label>
                      <Form.Control type="text" className=' text-black' />
                    </Form.Group>
                  </Row>
                  {/*  */}
                  <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Price</Form.Label>
                      <Form.Control type="text" className=' text-black' />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label> Quantity</Form.Label>
                      <Form.Control type="text" className=' text-black' />
                    </Form.Group>
                    
                  </Row>
                  <Row className="mb-3">


                  <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Long Description</Form.Label>
                      <Form.Control type="text" className=' text-black' />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Short Description</Form.Label>
                      <Form.Control type="text" className=' text-black' />
                    </Form.Group>

                  </Row>
                </Form>
              </Modal.Body>
              <Modal.Footer className=' d-flex justify-content-center'>
            <Button style={{ 'backgroundColor': 'var(--admin-header-color)' }} className=' px-4 py-2' type='submit' onClick={handleModal}>
              Submit
            </Button>

          </Modal.Footer>
            </Modal>
          )
        }
      </div >
    </>
  )
}

export default AdminProd
