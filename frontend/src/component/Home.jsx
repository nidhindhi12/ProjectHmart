

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useSelector } from 'react-redux';
import Products from './Products';
import { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Button, Col } from 'react-bootstrap';

import banner from '../images/banner.webp'

const Home = () => {
  const fetchProduct = useSelector((state) => state.count.productdata);
 

  const options = {
    loop: true,
    margin: 20,
    dots: false,
    items: 4,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1, // 1 item for mobile
      },
     
      600: {
        items: 2, // 2 items for tablets
      },
      800:{
        items:3,
      },
      1000: {
        items: 4, // 3 items for desktops
      },
    }

  }

  return (
    <>
      <Products />
      <h1 className=' text-center new_arrivals fw-bolder text-uppercase'>Latest arrivals....</h1>
      <div className=' my-5 '>
        <OwlCarousel className='owl-theme' {...options}
        >
          {
            fetchProduct.map((currProduct) => (

              <div className='item size' key={currProduct.id}>


                <img src={currProduct.images[0]} alt="" className='card_img1 ' />
                <h1 className=' fs-6 text-center text-black'>{currProduct.title}</h1>
                <div className=' justify-content-center d-flex'>
                  <Button className=' brn btn-secondary mb-2' >
                    Add To cart
                  </Button>

                </div>

              </div>
            ))
          }


        </OwlCarousel>

      </div>


    </>
  )
}

export default Home
