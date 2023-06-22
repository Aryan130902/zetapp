import React from 'react';
import Image from 'next/image';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="pt-24">
      <div className="max-w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(/footerImage.webp)` }}>
        <div className="flex-shrink-0 p-12 pb-2 pl-24 border-b border-white">
          <Image src="/footer_image.svg" alt="logo" width={0} height={0} style={{ width: '10%', height: 'auto' }} />
        </div>
        <footer className="lg:ml-20 px-5 mx-auto">
          <div className="px-5 py-24 mx-auto">
            <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">COMPANY</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-white">About us</a>
                  </li>
                  <li>
                    <a className="text-white">Partner with us</a>
                  </li>
                  <li>
                    <a className="text-white">Blog</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">LEGAL</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-white">Privacy Policies</a>
                  </li>
                  <li>
                    <a className="text-white">Terms of Uses</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACT</h2>
                <nav className="list-none mb-10 flex flex-col justify-center items-center md:items-start">
                  <li className="flex flex-row p-2 pl-0 items-center text-white">
                    <AiOutlineMail />
                    <a className="text-white pl-2">hi@zeptapp.in</a>
                  </li>
                  <li className="flex flex-row p-2 pl-0 items-center text-white">
                    <AiOutlinePhone />
                    <a className="text-white pl-2">91-491834938</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SOCIAL</h2>
                <nav className="text-white list-none mb-10 flex flex-row justify-center md:justify-start">
                  <li className="text-3xl pr-2">
                    <AiFillLinkedin />
                  </li>
                  <li className="text-3xl pr-2">
                    <AiFillFacebook />
                  </li>
                  <li className="text-3xl pr-2">
                    <AiOutlineWhatsApp />
                  </li>
                  <li className="text-3xl pr-2">
                    <AiFillInstagram />
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
