import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layoutroute from './routes/Layoutroute';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, qtyincrease,addItem } from './store/slice/quantitySlice';
import AdminRoutes from './routes/AdminRoutes';




function App() {
   const [products, setProducts] = useState([]);
   const dispatch = useDispatch()
   
 
  const data=[
    {
      name:'Home',
      path:"/"
    },
    {
      name:'About Us',
      path:"/about"

    },
    {
      name:'Contact',
      path:"/contact"
    },
    {
      name:'Products',
      path:'/products'
    }
  ]
  useEffect(() => {

    async function fetchData() {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        // console.log(data);   
        setProducts(data.products);
        dispatch(addItem(data.products));



    }

    fetchData();
}, [])

  return (
    <>
      <Layoutroute data={data} />
      <AdminRoutes/>

    </>
  )
}





export default App
