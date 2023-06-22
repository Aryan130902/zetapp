"use client"
import { useState } from 'react';
import styles from './navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import { navData } from '../../utils/Data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b border-gray-300 lg:px-5 lg:mr-5 lg:ml-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image
              src="/zet_logo.svg"
              alt="logo"
              width={0}
              height={0}
              style={{ width: '30%', height: 'auto' }}
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navData.map((item) => (
                <button key={item.id} className={styles.butt_nav}>
                  {item.title}
                </button>
              ))}
              <button className={styles.butt_download}>
                Download ZET
              </button>
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="border p-2 rounded-2"
            >
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center">
          {navData.map((item) => (
            <button key={item.id} className={styles.butt_nav}>
              {item.title}
            </button>
          ))}
          <button className={styles.butt_download}>
            Download ZET
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

