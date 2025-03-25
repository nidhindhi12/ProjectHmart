
import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Footbar  from '../component/Footbar'

const Layout = (data) => {
  return (
    <>
    <Header data={data}/>
    <Outlet/>
    <Footer/>
    <Footbar/>
    
    
    
    </>
  )
}

export default Layout



