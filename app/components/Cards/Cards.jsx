"use client"
import React from 'react'
import Image from 'next/image'
import { useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { cardData } from '@/app/utils/Data';

const Cards = () => {
  const ref1 = useRef(null);
  const [springProps1, setSpringProps1] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px)',
  }));

  useEffect(() => {
    const handleScroll = () => {
        if (ref1.current) {
          const top = ref1.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (top <= windowHeight / 2) {
            setSpringProps1({
              opacity: 1,
              transform: 'translateY(0px)',
              config: { duration: 500 },
            });
            window.removeEventListener('scroll', handleScroll);
          }
        }
      };
      
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref1}>
    <animated.div style={springProps1}>
    <div className='bg-sky-100 p-12'>
      <section className="lg:mx-20 ">
        <div className="container px-5 pt-2 pb-2">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-gray-900">Products on ZET</h1>
            <p className="lg:w-1/2 w-full text-gray-500">We are trusted by the best brands in the country</p>
          </div>
          <div className="flex flex-wrap">
            {cardData.map((item) => (
              <div key={item.id} className="lg:w-1/2 w-full p-4">
                <div className={`${item.color} p-6 rounded-lg transition-transform transform hover:scale-110 hover:shadow-lg hover:bg-white`}>
                  <div className="p-4 md:w-full flex md:flex-row flex-col">
                    <div className="md:w-1/2 pb-4  text-center">
                      <Image
                        src="/dummy.jpg"
                        alt="#"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="flex-grow lg:pl-6 md:w-1/2 md:text-left md:flex md:flex-col justify-center">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{item.title}</h2>
                      <p className="leading-relaxed text-base">{item.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </animated.div>
  </div>
    
  );
};

export default Cards;
