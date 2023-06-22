"use client"
import React from 'react'
import { sliderLogo } from '../../utils/Data'




const Slider = () => {
  return (
    <div  className="container px-5 py-2 lg:ml-12">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 ">Top Brands on ZET</h1>
            <p className="lg:w-1/2 w-full ">We are trusted by best brand in the country</p>
        </div>
         <div className='mb-2'>
            <div className="w-full pb-24">
                <div className="flex absolute left-0 animate-marquee-infinite">
                <div className="flex w-96 justify-around">
                {sliderLogo.map((item) => (
                       <img key={item.id} src={item.src} width={200} className='border mx-8 rounded-lg'/>
                      ))}
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Slider