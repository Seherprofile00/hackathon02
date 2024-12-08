

"use client";




import React from 'react'
import Image from 'next/image'
import card1 from "../src/app/public/unsplash_v3OlBE6-fhU.png"
import juice from "../src/app/public/juice.png"
import card2 from "../src/app/public/unsplash_lRAWcT7uwhY.png"
import Logo from "../src/app/public/Component 17.png"

const Cards = () => {
  return (<>
  

    
{/* carddd */}
<div className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto pt-[12px]">
    <div className="flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
            className="lg:h-48 md:h-36  object-cover object-center mt-[129px] "
            src={card1}
            width={432} height={152}
            alt="blog"
          />
          <div className="p-6">
            <a className=" font-bold text-black-400 mb-1 text-xl  hover:text-amber-400">
            Bulbul HASSAN CHEF
            </a>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-[19px]">
              OWNER
            </h1>
              
              
            </div>
          </div>
        </div>
      </div>
{/* card */}
      <div className="p-4 md:w-1/3">
        <div className=" border-2  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36  object-cover object-center mt-[19px]"
            src={juice}
            alt="blog"
          />
          
            
            
          </div>
        </div>


        
      </div>
    </div>
  

   
    
    <div className="flex-wrap -m-4 text-gray-600 body-font container pt-3 px-5 py-24 mx-auto">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
            className="lg:h-48 md:h-36  object-cover object-center"
            src={card2}
            width={432} height={152}
            alt="blog"
          />
          <div className="p-6">
            <a className=" font-bold text-black-400 mb-1 text-xl hover:text-amber-400 ">
            Bulbul HASSAN CHEF
            </a>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              OWNER
            </h1>
              
              
            </div>
          </div>
        </div>
      </div>

     
        
          <Image
            className="lg:h-48 md:h-36  object-cover  object-center"
            src={Logo}
            width={413}
            height={177}
            alt="blog"
          />
          
            
            
          
        








</>



  )
}

export default Cards