"use client"
import Image from 'next/image';
import React, { useState, useEffect} from 'react';
import { slideData } from '@/app/utils/Data';

const Swipper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slideData.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='bg-blue p-12' style={{ clipPath: 'polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)' }}>
      <div className='py-24 transition-transform duration-500 transform hover:-translate-y-1'>
        <section
          className='lg:mx-20 bg-[#0099FF] pl-8'
          style={{ clipPath: 'polygon(0px 30%, 100% 0%, 100% 70%, 0px 100%)' }}
        >
          <div className='container mx-auto flex px-5 md:flex-row flex-col items-center bg-'>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:block hidden py-24 -ml-24'>
              <Image src='/Swipper_Image.webp' alt='#' width={1800} height={0} style={{ objectFit:"cover" }} />
            </div>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative overflow-hidden'>
              <h1 className='title-font sm:text-2xl text-2xl mb-4 font-medium text-white pt-12'>
                THE ZET EFFECT
              </h1>
              <div className='w-full bg-indigo-900 rounded-full h-2.5 mt-6'>
                <div
                  className='bg-white h-2.5 rounded-full transition-width duration-1000'
                  style={{
                    width: `${((currentSlide + 1) / slideData.length) * 100}%`,
                  }}
                ></div>
              </div>
              <div
                className='absolute w-full flex transition-transform duration-1000'
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  top: '80px',
                }}
              >
                {slideData.map((item, index) => (
                  <div
                    key={index}
                    className='w-full flex-shrink-0'
                    style={{
                      flex: `0 0 100%`,
                    }}
                  >
                    <p className='text-white'>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Swipper;
