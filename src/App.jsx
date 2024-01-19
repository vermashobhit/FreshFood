import React from 'react'
import  Navbar from './Components/Navbar'
import Header from './Components/Header'
import Items from './Pages/Items'
import Fruits from './Pages/Fruits'
import { Routes,BrowserRouter,Route } from 'react-router-dom'
import Cartlist from './Components/Cartlist'
import  SignUp  from './Pages/SignUp'
import Footer from './Components/Footer'
import { useState } from 'react'
import Home from './Components/Home'

const App = () => {
  const  [product  ,setProduct] = useState([
    {
      id:1,
      url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2020/08/Apna-Sabji-Potato-1.jpg?resize=600%2C750&ssl=1",
      name:"Potato (1 KG)",
      price:20.00,
    },
    {
      id:2,
       url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2021/10/Tomato-Desi-ApnaSabji.jpg?resize=600%2C750&ssl=1",
       name:"Desi Tomato (1Kg)",
       price: 45.00 ,
    },
    {
      id:3,
      url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2021/08/Cherry-Tomato-ApnaSabji.jpg?resize=600%2C750&ssl=1",
      name:"Tomato Cherry (200gm)",
      price: 60.00 ,
   },
   {
    id:4,
    url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2017/09/Apna-Sabji-Onion.jpg?resize=600%2C750&ssl=1",
    name:"Onion (1kg)",
    price: 47.00 ,
 },
 {
  id:5,
  url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2020/08/Apna-Sabji-Cauliflower.jpg?resize=600%2C750&ssl=1",
  name:"CauiFlower (500gm-700gm)",
  price: 30.00 ,
},
 {
  id:6,
  url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2020/08/Apna-Sabji-Jackfruit-Kathal.jpg?resize=600%2C750&ssl=1",
  name:"KathalRaw Cut (500gm)",
  price: 70.00 ,
},
{
  id:7,
  url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2020/08/Apna-Sabji-Lauki.jpg?resize=600%2C750&ssl=1",
  name:"Lauki (500gm)",
  price: 20.00 ,
},
{
  id:8,
  url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2021/08/Cabbage-ApnaSabji.jpg?resize=600%2C750&ssl=1",
  name:"Cabbage (400-500gm)",
  price: 15.00 ,
},
{
  id:9,
  url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2021/11/Grapes-Green-ApnaSabji.jpg?resize=600%2C750&ssl=1",
  name:"Green Grapes(500gm)",
  price: 130.00 ,
},
{
  id:10,
  url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2020/08/Apna-Sabji-Pears.jpg?resize=600%2C750&ssl=1",
  name:"Imported Pears(500gm)",
  price: 120.00 ,
},
{
  id:11,
  url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2022/03/Chikoo-Sapota-Apnasabji.jpg?resize=600%2C750&ssl=1",
  name:"Apple (500gm)",
  price: 80.00 ,
},
{
  id:12,
  url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2021/06/Litchi-Apnasabji-1.jpg?resize=600%2C750&ssl=1",
  name:"Lichi(1kg)",
  price:310.00  ,
},
{
  id:13,
  url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2022/03/Cape-Goosberry-Apnasabji.jpg?resize=600%2C750&ssl=1",
  name:"Cape Gooberry(500gm)",
  price: 45.00 ,
},
{
  id:14,
  url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2017/09/Apna-Sabji-Apple.jpg?resize=600%2C750&ssl=1",
  name:"Chikoo_Sapota(400gm)",
  price: 60.00 ,
},
{
  id:15,
  url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2021/12/Strawberry-ApnaSabji.jpg?resize=600%2C750&ssl=1",
  name:"Straberry",
  price:90.00  ,
},
{
  id:16,
  url:"https://i0.wp.com/apnasabji.com/wp-content/uploads/2021/05/Mango-dasheri.jpg?resize=600%2C750&ssl=1",
  name:"Mango-Dasheri(1kg)",
  price: 400.00 ,
},

  ])


  const  [cart ,setCart] =useState([])
  const [showcart , setShowCart] = useState(false)
  console.log(cart);
   const addToCart =(data)=>{
    // console.log(data);
    setCart([...cart  , {...data ,quantity: 1}])
   }


  const handleShow = (value) => {
     setShowCart(value)
   }

   
   const  RemoveTocart = (index)=>{
    const updatetask=[...cart]
    updatetask.splice(index , 1)
    setCart(updatetask)
   }
  return (
    <div>
      <BrowserRouter>
      <Header count={cart.length} handleShow={handleShow}/>
      <Navbar/>
      <Home/>
      <h1 className='text-center text-3xl  font-serif hover:underline mt-4'>Featured Items</h1>
      <Routes>
        {/* <Route path="/Cartlist" element={<Cartlist/>}/> */}
        <Route path="/" element={<Items/>}/>
        <Route path="/Fruits" element={<Fruits/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
      {
        showcart ?
        <Cartlist cart={cart} RemoveTocart={RemoveTocart} />:
        
        <Items product={product} addToCart={addToCart}/>
       }
           
       <Footer/>
      </BrowserRouter>
      


     
    </div>
  )
}

export default App
