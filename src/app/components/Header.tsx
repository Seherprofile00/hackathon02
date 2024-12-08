import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { PiCrownSimple } from "react-icons/pi";
import Link from 'next/link';

const Header = () => {
  return (
    <>
    <header className="text-gray-600 body-font bg-black">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 font-bold  font-bold ">
     
      <span className="ml-3 text-xl text-white font-bold">Food</span>
      <span className="text-xl text-amber-500 font-bold">tuck</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex font-medium  ml-20 pl-20  flex-wrap items-center px-4 text-white justify-center">
      <a className="mr-5   ml-[356px] px-2  pl-22  hover:text-amber-500 ">Home</a>
      <Link className="mr-5 px-2  hover:text-amber-500" href='/Menu'>Menu</Link>
      <a className="mr-5  px-2  hover:text-amber-500">Blog</a>
      <a className="mr-5  px-2  hover:text-amber-500">Pages</a>
      <a className="mr-5 px-2   hover:text-amber-500">About</a> 
       <a className="mr-5 px-2  hover:text-amber-500">Shop</a>  
       <a className="mr-5 px-2  hover:text-amber-500">Contact</a>
    </nav>
<div className='flex inline-block mr-[29px] gap-2'>
    <IoIosSearch className='text-white  text-xl hover:text-amber-500'/>
    <RiAccountPinCircleLine className='text-white  text-xl hover:text-amber-500'/>
    <PiCrownSimple  className='text-white  text-xl hover:text-amber-500' />
    </div> </div>
</header>

    
    
    </>
  )
}

export default Header