import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout"
import Home from "../component/Home"
import Products from "../component/Products"
import Contact from "../component/Contact"
import About from '../component/About';
import  Shop from '../component/Shop'
import UserInfo from '../component/UserInfo';








const Layoutroute = (data) => {
    return (
        <Routes>
            <Route path='/' element={<Layout data={data}/>}>
                <Route index element={<Home/>} />
                <Route path="/contact" element={< Contact />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/userinfo' element={<UserInfo/>}/>
               
                
            </Route>
        </Routes>
    )
}

export default Layoutroute





