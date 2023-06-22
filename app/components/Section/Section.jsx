"use client"
import React from 'react';
import Image from 'next/image';
import { sectionData } from '@/app/utils/Data';
import { useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';


const Section = () => {
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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-1/4 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden lg:ml-24 lg:block hidden" style={{ backgroundImage: `url(/bg_hero.webp)` }}>
          <Image
            src="/whyUsHero.webp"
            alt="logo"
            width={1800}
            height={1800}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="flex flex-wrap flex-wrap lg:py-6 -mb-10 lg:w-2/3 lg:pl-12 lg:text-left text-center">
          <div className="grid grid-cols-2 gap-10">
            {sectionData.map((item) => (
              <div className="flex flex-wrap mb-10 lg:items-start items-center" key={item.id}>
                <div className="pb-4 justify-center mx-auto lg:mx-0">
                  <Image src="/dummy.jpg" alt="#" width={100} height={100} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{item.title}</h2>
                  <p className="leading-relaxed text-base">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
    </animated.div>
        </div>
  );
};

export default Section;
