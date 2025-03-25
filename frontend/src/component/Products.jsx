import React from 'react'
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Col } from 'react-bootstrap';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, qtyincrease,addItem } from '../store/slice/quantitySlice';





const Products = () => {
    const [products, setProducts] = useState([]);
    const show_qty = useSelector((state) => state.count.products);
    const qty = useSelector((state) => state.count.quantity);
    const fetchProduct =useSelector((state)=>state.count.productdata)



    // console.log(show_qty);
    const dispatch = useDispatch()





    const handleClick = (item) => {
        dispatch(increment(item));
        // console.log(item.id);
        // dispatch(addItem(item));
    }


    // function handleClickMinus() {
    //     dispatch(decrement())
    // }

   
    return (


        <div className="container pb-5 mt-5">
            <div className="row justify-content-md-between justify-content-center">


                {


                    fetchProduct.map((item, index) => (

                        <Card style={{ width: '18rem' }} key={index} className='border-0 mt-3'>
                            <Card.Img variant="top" src={item.images[0]} className='card_img img-fluid' />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item >Price: ${Math.round(item.price)}</ListGroup.Item>
                                <ListGroup.Item >Category: {item.category}</ListGroup.Item>
                                <ListGroup.Item className=' text-danger'> {item.availabilityStatus}</ListGroup.Item>


                            </ListGroup>


                            {


                                (show_qty.find(prod => prod.id === item.id) ?
                                    (

                                        <div className='border_raidus d-flex'>
                                            <FaMinus onClick={() => dispatch(decrement(item))} />
                                            <p className='fs-5'>{(show_qty.find(prod => prod.id === item.id).qty)}</p>
                                            <FaPlus onClick={() => dispatch(qtyincrease(item))} />

                                        </div>

                                    ) :
                                    (

                                        <div>
                                            <div className="d-flex d-sm-block justify-content-center">
                                                <Button className='btn btn-secondary' onClick={() => handleClick(item)}>
                                                    Add to Cart
                                                </Button>
                                            </div>
                                        </div>
                                    )
                                )




                            }

                        </Card>

                    ))



                }

            </div>
        </div >
    )


}












export default Products




