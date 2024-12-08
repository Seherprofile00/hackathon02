

import React from 'react'

import Image from 'next/image'
import card1 from "@/app/public/unsplash_v3OlBE6-fhU.png"
import cupcake from "@/app/public/unsplash_MJPr6nOdppw.png"


const Pract = () => {
  return (
<div><section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36  object-cover object-center"
            src={card1}
            width={432} height={152}
            alt="blog"

          />
          <div className="p-0">
            <a className=" font-bold   text-xl   hover:text-amber-500">
              MAKE HENRY</a>
        
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                owner
              </a>
              
              
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36  object-cover object-center"
            src={cupcake}width={432} height={152}
            alt="blog"
          />
          <div className="p-6">
            <a className=" font-bold   text-xl   hover:text-amber-500 ">
            Grand Italiano
            </a>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              28 items
            </h1>
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Pract