'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`bg-sky-800 p-4 ${isScrolled ? 'fixed top-0 left-0 right-0 z-20' : 'relative z-20'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
              <div className='flex items-center space-x-4'>
                <Image
                  src="/images/trappen.png"
                  width={80}
                  height={80}
                  alt="Logo"
                />
                <span className="text-white font-bold text-lg">Trappen Sprachschule</span>
              </div>
            </Link>
          </div>
          <div className={`hidden md:flex space-x-10 mr-40`}>
            <Link href="/about">
              <span className="text-white hover:text-slate-300" onClick={toggleMenu}>About Us</span>
            </Link>
            <Link href="/classes">
              <span className="text-white hover:text-slate-300" onClick={toggleMenu}>Classes</span>
            </Link>
            {/* <Link href="/teachers">
              <span className="text-white hover:text-slate-300" onClick={toggleMenu}>Teachers</span>
            </Link> */}
            <Link href="/faq">
              <span className="text-white hover:text-slate-300" onClick={toggleMenu}>FAQ</span>
            </Link>
            <Link href="/contact">
              <span className="text-white hover:text-slate-300" onClick={toggleMenu}>Contact Us</span>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              {/* Mobile menu button */}
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 p-4">
          <div className="flex flex-col space-y-4">
            <Link href="/about">
              <span className="text-white hover:text-slate-300" onClick={toggleMenu}>About Us</span>
            </Link>
            <Link href="/classes">
              <span className="text-white hover:text-slate-300" onClick={toggleMenu}>Classes</span>
            </Link>
            {/* <Link href="/teachers">
              <span className="text-white hover:text-slate-300" onClick={toggleMenu}>Teachers</span>
            </Link> */}
            <Link href="/faq">
              <span className="text-white hover:text-slate-300" onClick={toggleMenu}>FAQ</span>
            </Link>
            <Link href="/contact">
              <span className="text-white hover:text-slate-300" onClick={toggleMenu}>Contact Us</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
