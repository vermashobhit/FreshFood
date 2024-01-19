import React, { useEffect, useState } from 'react'


export default function Cartlist({cart ,RemoveTocart}) {
  const [CART ,setCART] = useState([])
  useEffect(()=>{
    setCART(cart)
  },[cart])
  return (
    <div className='ml-5'>
       <h3 className='text-2xl '>Your Shopping cart</h3>
       {/* <header>
       <h3 className='text-2xl '>Your Shopping cart</h3>
        <div className='text-2xl space-x-2'>
          <Link to="/Items" className='hover:text-lime-500 hover:underline'  onClick={() => props.handleShow((ture))}>Home</Link>
          <span className=' text-lime-700  font-bold text-2xl'>/</span>
          <Link className='hover:text-lime-500 hover:underline' onClick={() => props.handleShow((false))}>Cart</Link>
        </div>
       </header> */}
      <div className='grid grid-cols-2'>
        <section>
        {
       CART?.map((cartItem ,cartindex) => {
        return(
          <div className='flex '>
            <img src={cartItem.url}  className='w-20 '/> 
            
            <div className='mt-6 ml-2 '>
            <span className='text-[15px]'>{cartItem.name}</span>
           
           <button className='bg-black text-white w-6 font-bold ml-4 ' 
            onClick={()=>{
              const _CART = CART.map(( item, index)=> {
                return cartindex === index ? {...item , quantity: item.quantity > 0 ?  item.quantity -1 :0} : item
              })
              setCART( _CART)
             }}
           >-</button>
            <span className='text-[18px] '>{cartItem.quantity}</span>
            <button className='bg-black text-white w-6 font-bold  '
            onClick={()=>{
              const _CART = CART.map(( item, index)=>{
                return cartindex === index ? {...item , quantity: item.quantity+1} : item
              })
              setCART( _CART)
             }}
            >+</button>
          
            <span className='ml-10'>Rs.{cartItem.price * cartItem.quantity} /-</span>
            </div>
            <button className='w-10 ring-offset-neutral-900 h-10 mt-5 hover:bg-red-600 hover:text-white font-bold'  onClick={(index) => RemoveTocart(index)}>X</button>
          </div>
        )
       }) 
      }
        </section>
        <section className='ml-32'>
        <div className=' text-[20px] '>Total Amount:  <span> <br /> Rs. <span></span></span>
       
        { 
          CART.map(item => item.price * item.quantity).reduce((total ,value) => total + value, 0)
        }
      </div>
      <button className=' bg-lime-700 "rounded-border h-[35px]  justify-center text-white hover:bg-black w-32'> Payment Now</button>
        </section>
      </div>
    </div>
  )
}




















  
