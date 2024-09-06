'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars2Icon, XMarkIcon, ChevronRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from '../Navbar/logo.png';
import App from '../DropDown/App';
import App2 from '../DropDown/App2';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const toggleMenu = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const menuIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  const xIconVariants = {
    closed: { rotate: -45 },
    open: { rotate: 0 },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`z-[4000] sticky top-0 transition-colors duration-300 ${navBackground ? 'bg-white' : 'bg-transparent'}`}>
      <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="../../">
              <Image src={Logo} alt="Logo" className="w-[120px] h-auto mx-2" />
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:hidden lg:flex sm:items-center">
            <App2 />
            <div className="flex items-center space-x-4">
              <a href="#" className="text-black hover:text-gray-400 transition px-3 py-2 rounded-md text-sm">
                Projects
              </a>
              <a href="/about-us" className="text-black hover:text-gray-400 transition whitespace-nowrap px-3 py-2 rounded-md text-sm">
                Careers
              </a>
              <a href="/contact-us" className="text-black hover:text-gray-400 transition px-3 py-2 whitespace-nowrap rounded-md text-sm">
                About Us
              </a>
            </div>
          </div>
          <div className="items-center gap-4 hidden sm:ml-6 sm:hidden lg:flex sm:items-center">
            <App />
            <button className="flex items-center gap-2 bg-blue-700 px-5 py-2 text-white text-[1rem] rounded-md hover:bg-yellow-400 whitespace-nowrap transition">
              <PhoneIcon className="text-white h-4 w-4 font-bold" />
              <p className="font-semibold">Contact</p>
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:flex md:flex lg:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <motion.span
                className="h-6 w-6 z-50"
                variants={isOpen ? xIconVariants : menuIconVariants}
                animate={isOpen ? 'open' : 'closed'}
              >
                {isOpen ? <XMarkIcon className="h-6 w-6" aria-hidden="true" /> : <Bars2Icon className="h-6 w-6" aria-hidden="true" />}
              </motion.span>
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? '100vh' : 0 }}
        transition={{ duration: 0.1 }}
        className={`${isOpen ? 'block' : 'hidden'} fixed sm:flex md:flex lg:flex top-0 left-0 w-full bg-[#161617] shadow-lg`}
      >
        {isOpen && (
          <div className="px-9 pt-[10rem] pb-3 space-y-1">
            <a href="./" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl">
              Нүүр
            </a>
            <a href="/about-us" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl">
              Бидний тухай
            </a>
            <div className="flex items-center" onClick={toggleSubmenu}>
              <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl">
                Хичээлүүд
              </a>
              <ChevronRightIcon className="w-8 h-8" />
            </div>
            {isSubmenuOpen && (
              <div className="pl-6">
                <a href="/cources/html/html-introduction" className="block px-4 py-2 text-2xl text-white hover:bg-yellow-500 rounded-md">
                  Html
                </a>
                <a href="/cources/css/css-syntax" className="block px-4 py-2 text-2xl text-white hover:bg-yellow-500 rounded-md">
                  Css
                </a>
                <a href="/cources/javascript/js-introduction" className="block px-4 py-2 text-2xl text-white hover:bg-yellow-500 rounded-md">
                  JavaScript
                </a>
                <a href="/cources/python/python-home" className="block px-4 py-2 text-2xl text-white hover:bg-yellow-500 rounded-md">
                  Python
                </a>
                <a href="/cources/cpp/cpp-home" className="block px-4 py-2 text-2xl text-white hover:bg-yellow-500 rounded-md">
                  C++
                </a>
                <a href="/cources/csharp/csharp-home" className="block px-4 py-2 text-2xl text-white hover:bg-yellow-500 rounded-md">
                  C#
                </a>
              </div>
            )}
            <a href="/contact-us" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl">
              Холбоо барих
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
