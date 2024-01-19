
'use client'

import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'



export default function Header(props) {
  

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 hover:underline black border-x-lime-950">
         
          <span className="border-zinc-800 font-semibold text-[20px] "><span className='text-4xl text-lime-500 font-serif '>F</span>resh <span  className='text-3xl text-lime-500 font-serif '>F</span>ood</span>
        </div>
        
        <div>
          <ul className='flex space-x-2 mt-2 mb-3'>
            <Link  to="/SignUp"><FaUser className=' text-3xl'/> </Link>
            <span className=' text-lime-500 '>|</span>
            <Link><IoCartOutline className=' text-3xl ' onClick={() => props.handleShow((true))} /></Link>
            <sup className='mt-4 text-red-500 font-bold '>{props.count}</sup>
          </ul>
        
        </div>
        
        
               
              </div>
            </div>
        
        )}
    
  
  

