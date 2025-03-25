import React from 'react'
import { MdOutlineRequestPage } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { Row, Col, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom'
import Gif from "../images/empty.gif"
import { FaRegTrashCan } from "react-icons/fa6";
import { removeItem } from '../store/slice/quantitySlice'
import { LuNotebookPen } from "react-icons/lu";
import Visa from "../images/Visa-Logo-2006.svg"
import MC from "../images/mc.svg"
import UPI from "../images/UPI.svg"
import Rupay from "../images/rupay.svg"
import { Button } from 'react-bootstrap';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import { increment, decrement, qtyincrease } from '../store/slice/quantitySlice';



const Shop = () => {
  const value1 = useSelector((state) => state.count.value)
  const items = useSelector((state) => state.count.products)
  // const qty = useSelector((state) => state.count.quantity);
  const dispatch = useDispatch();

  const totalQty = items.reduce((sum, item) => (sum += item.qty), 0);
  const totalPrice = items.reduce((sum, item) => (sum += item.price * item.qty), 0);
  const ItemsDiscount = items.reduce((sum, item) => ((sum += (Math.round(item.price) * Math.round(item.discountPercentage) / 100) * item.qty)), 0);

  const priceBeforeShipping = (Math.round(totalPrice) - ItemsDiscount);


  const shipping = priceBeforeShipping >= 50 ? 'free' : '$50';

  const finalPrice = shipping == 'free' ? priceBeforeShipping : (priceBeforeShipping + 50)










  const handleDelete = (itemID) => {
    dispatch(removeItem(itemID));

  }

  return (
    <>

      {
        (items.length == 0) ? (
          <div className="text-center">

            <img src={Gif} className='w-30'></img>
            <h4 className=' fw-bold'>Your Shopping Cart is empty</h4>
            <p className=' py-2'>Start filling up ur bag!!</p>
            <Link to="/products">
              <button className='btn btn-secondary mb-5  '>Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <section>
            <header>
              <p className='hd-color text-center text-white py-1'>Pay Online & Get Instant FLAT 5% OFF on your order | 100% Secure Payment Methods</p>
            </header>
            <Container>
              <div className=" d-flex align-items-center gap-3 fw-bold ps-5 mt-3 fs-3 display-2">
                <LuNotebookPen />
                <p>Card Details({value1})</p>

              </div>
              <Row className='pb-5 justify-content-between'>
                <Col xs={12} lg={8}>
                  <div className="spacer w-100">
                    <div className="cart_info d-flex justify-content-end mb-3 mt-3">
                      <div className="info font-size d-flex align-items-center gap-3">
                        <p>Total Items : <span className='fw-bold '>{totalQty}</span></p>
                        <p>To Pay : <span className='fw-bold'>${finalPrice}</span></p>
                      </div>
                    </div>
                    <div className="product_box">
                      {
                        items?.map((box, index) => {
                          return (
                            <div className={`product d-flex align-items-start pb-5 gap-4`} >
                              <div className="img w_50">
                                <img src={box.images[0]} className="img-fluid" alt="product" />
                              </div>
                              <div className="products_details">
                                <p className="prod_name text-uppercase fw-bold fs-6">
                                  {box.title}
                                </p>
                                <div>
                                  <p className="title d-sm-block d-none ">
                                    {box.description}
                                  </p>
                                </div>
                                <div className="price d-flex gap-5 py-2">
                                  <p className=' fw-bold'>${Math.round(box.price)}</p>
                                  <p className=' text-danger text-uppercase'>{Math.floor(box.discountPercentage)}% off</p>
                                </div>
                              </div>
                              <div className='border_raidus btn-add d-flex'>
                                <FaMinus onClick={() => dispatch(decrement(box))} />
                                <p className='fs-6'>{(items.find(prod => prod.id === box.id).qty)}</p>
                                <FaPlus onClick={() => dispatch(qtyincrease(box))} />

                              </div>


                            </div>
                          )

                        })
                      }
                    </div>
                  </div>

                </Col>
                <Col className='' xs={12} lg={4}>
                
                    <div className="heading hd-font d-flex align-items-center gap-2 fw-bold  mt-3 justify-content-center ">
                      <MdOutlineRequestPage className='fs-4' />
                      <p>Price Summary</p>
                    </div>
                    <div className="checkout pt-4 d-flex flex-column text-start">
                      <div className="info font-size d-flex align-items-center gap-3 justify-content-around">
                        <span className="">Order Total</span>
                        <span className=' fw-bold'>${Math.ceil(totalPrice)}.00</span>
                      </div>
                      <div className="info font-size d-flex align-items-center gap-3 justify-content-around my-2">
                        <span className="">Items Discount</span>
                        <span className=' fw-bold'>${ItemsDiscount}</span>
                      </div>
                      <div className="info font-size d-flex align-items-center gap-3 justify-content-around sub_border ">
                        <span className=" pb-2">Shipping</span>
                        <span className=' fw-bold pb-2 text-color'>{shipping}</span>
                      </div>
                      <div className="info font-size d-flex align-items-center gap-3 justify-content-around my-2">
                        <p className=" fw-bold fs-6">Final Amount</p>
                        <span className=' fw-bold fs-6 '>${finalPrice}</span>
                      </div>
                      
                      <div className=" d-flex justify-content-center mt-5">
                        <button className='btn btn-secondary fw-bold'> Add Address</button>
                      </div>
                    </div>

                  

                </Col>
              </Row>
            </Container>
          </section >
        )

      }
    </>
  )
}





export default Shop
{/* <div className="payment_options d-flex flex-column mt-5">
                        <p className='text-center'>Avaliable Payment options</p>
                        <div className=" ms-5 gap-4 d-none d-md-flex justify-content-center">
                          <div><img src={Visa} alt="" className="w-50" /></div>
                          <div><img src={MC} alt="" className="w-50" /></div>

                          <div><img src={Rupay} alt="" className="w-50" /></div>
                          {/* <img src={MC} alt="" className='w-75' />
                          <img src={UPI} alt="" className='w-75' />
                          <img src={Rupay} alt="" className='w-75' /> */}
                      //   </div>
                      // </div> */}