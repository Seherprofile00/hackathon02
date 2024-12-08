


import React from 'react'
import { FaPinterestP } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

import Image from 'next/image'
import myin from "..//src/app//public/unsplash_4ycv3Ky1ZZU (1).png"

const Home = () => {
  return (
    <>
    
    <div className="relative w-full h-0 pb-56 ">
  <Image src={myin} alt="fgh" className="absolute inset-0 w-full h-full object-cover" />

<div className='flex justify-center pl-[323px] item-center '>
    <h2 className='text-amber-500 absolute pl-9  font-bold text-4xl mt-[12px]'>Our shop</h2>
    <FaPinterestP  /> <RiFacebookCircleLine /></div >
</div>

 <div className='flex inline-block mr-[29px] gap-2'>
    <FaPinterestP className='text-white  text-xl hover:text-amber-500'/>
    <RiFacebookCircleLine className='text-white  text-xl hover:text-amber-500'/>
   
    </div> 



    
    
    
    </>
  )
}

export default Home