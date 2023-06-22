"use client"
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';

const Header = () => {
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setSpringProps1]);

  return (
    <div ref={ref1}>
      <animated.div style={springProps1}>
        <div className='py-24 transition-transform duration-500 transform hover:-translate-y-1'>
          <section className="lg:mx-20 bg-sky-100 pl-8">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center bg-">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900 pt-12">Become a Financial Advisor and
                  <span className='text-blue'> Earn Rs.1 Lakh/Month</span>
                </h1>
                <h3 className="py-4 text-2xl">No investment required</h3>
                <div className="flex justify-center">
                  <Image
                    src="/google_play.png"
                    alt="#"
                    width={150}
                    height={80}
                    style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                  />
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:block hidden -mt-10">
                <Image
                  src="/Hero_Image.webp"
                  alt="#"
                  width={1800}
                  height={1800}
                  style={{ width: '80%', height: 'auto' }}
                />
              </div>
            </div>
          </section>
        </div>
      </animated.div>
    </div>
  );
};

export default Header;
