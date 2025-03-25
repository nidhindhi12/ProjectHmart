import React from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

const AdminFooter = () => {
  return (
    <footer className=' mt-auto'>
      <Container fluid style={{ 'backgroundColor': 'var(--admin-header-color)' }} className=' text-white px-0  '>
        <div>

          <span className='text-center d-block py-2'>Copyright © 2017 Yourdomian. All rights reserved.</span>

        </div>




      </Container>
    </footer>
  )
}

export default AdminFooter
