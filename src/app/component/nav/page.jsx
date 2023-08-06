"use client"

import React from 'react'
import { useState, useEffect } from 'react'

function OpenIcon(props) {
    return <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1.5em"
        width="1.5em"
        {...props}
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
        </g>
      </svg>
    ;
  }

function CloseIcon(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>;
}

function ResponsiveNav() {
    return (
        <div className='bg-[#46aaf6] fixed right-0 top-0 h-[100vh] w-[50vw] flex flex-col justify-between font-mono transition delay-150 pt-4 z-40 text-[#021422] dark:text-[#021422] dark:hover:text-slate-200'>
            <div className='ps-4'>
              <ul className="flex flex-col pt-6">
                <li className="font-semibold hover:text-slate-200 transition delay-75">
                    <a href="#Home">HOME</a>
                </li>
                <li className="font-semibold pt-4 hover:text-slate-200 transition delay-75">
                    <a href="#News">NEWS ROOM</a>
                </li>
                <li className="font-semibold pt-4 hover:text-slate-200 transition delay-75">
                    <a href="#Facilities">FACILITIES</a>
                </li>
                <li className="font-semibold pt-4 hover:text-slate-200 transition delay-75">
                    <a href="#Admission">ADMISSION</a>
                </li>
                <li className="font-semibold pt-4 hover:text-slate-200 transition delay-75">
                    <a href="#Contact">CONTACT</a>
                </li>
              </ul>
            </div>
            <div>
                <ul>
                    <li className="font-semibold ps-4 pt-2 border-t-2 border-blue-500 hover:text-slate-200 transition delay-75">
                        <a href="#">PORTAL</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div>
            <button onClick={toggleMenu} className="absolute">
            {isOpen ? (<CloseIcon className="fixed z-50 right-8 top-5" />) : (<OpenIcon className="absolute right-4" />)}
            </button>
            {isOpen && (<ResponsiveNav />)}
        </div>
    )
}

function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[]);

  return(
    <section>
      {windowWidth < 768 && (
        <HamburgerMenu />
      )}
    </section>
  )
}

const Nav = () => {
  return (
    <nav className="fixed w-full py-4 bg-[#46aaf6]/50 px-5 flex justify-between backdrop-blur-lg">
        <div className="container text-[#021422] dark:text-[#021422]">
            <a href="#Home" className="font-bold container">
              LIVINGSTONE ACADEMY
            </a>
        </div>
        <ul className="gap-4 font-mono min-w-fit hidden md:flex text-[#021422] dark:text-[#021422]">
            <li className="font-semibold hover:text-slate-200 transition delay-100">
                <a href="#Home">HOME</a>
            </li>
            <li className="font-semibold hover:text-slate-200 transition delay-100">
                <a href="#News">NEWS ROOM</a>
            </li>
            <li className="font-semibold hover:text-slate-200 transition delay-100">
                <a href="#Facilities">FACILITIES</a>
            </li>
            <li className="font-semibold hover:text-slate-200 transition delay-100">
                <a href="#">PORTAL</a>
            </li>
        </ul>
        <App />
    </nav>
  )
}

export default Nav