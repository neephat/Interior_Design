// React
import { useEffect, useRef, useState } from "react";

// local imports
import cartIcon from "../assets/cart-icon.svg";
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import SearchIcon from "../assets/search-icon.svg"

import {heroTitle, heroSubtitle} from '../data';

import NavLink from "../components/NavLink";

// react icons
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import FadeIn from "../components/FadeIn";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuRef = useRef()
  useEffect(()=>{
    // Hide Mobile Menu After clicking a menu item or outside the menubar
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setShowMobileMenu(false)
      }
      
    }
    document.addEventListener('mousedown', handler)
    return()=>{
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative w-full max-w-[1490px] flex items-center justify-between px-10 mx-auto pt-10">
        {/* Navbar Logo */}
        <img src={logo} alt="" />
        {/* Menu Items */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <NavLink to="services">Services</NavLink>
          <NavLink to="products">Shop</NavLink>
          <NavLink to="reference">Reference</NavLink>
          <NavLink to="care">Care</NavLink>
        </ul>
        {/* Cart Icon */}
        <img src={cartIcon} className="hidden md:block cursor-pointer" alt="" />
        {/* MobileMenu Icon */}
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />
        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } right-0 bg-[#DDE0E5] h-[370px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-[30px] items-center flex flex-col gap-8">
            <NavLink to="services" mobileMenu>
              Services
            </NavLink>
            <NavLink to="products" mobileMenu>
              Shop
            </NavLink>
            <NavLink to="reference" mobileMenu>
              Reference
            </NavLink>
            <NavLink to="care" mobileMenu>
              Care
            </NavLink>
          </ul>

          <img src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="" />
        </div>
      </div>
      {/* Hero Section Titles */}
      <FadeIn delay={0.2} direction="down" padding fullWidth>
          <h1 className="mt-[60px] text-center text-5xl leading-tight xs:text-[64px] xs:mt-[90px] text-white max-w-[1050px]">
            {heroTitle}
          </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding fullWidth>
          <h1 className="mt-6 text-center text-xl xs:text-lg text-white max-w-[500px]">
            {heroSubtitle}
          </h1>
      </FadeIn>
      {/* Search Bar */}
      <FadeIn delay={0.2} direction="up" padding fullWidth>
          <div className="relative mt-11 w-full xs:w-[460px]">
            <input 
              type="text"
              placeholder="Search"
              className="rounded-full pl-6 w-full py-4 pr-[68px] bg-primary outline-none text-white text-base placeholder-white xs:text-lg"
            />
            <img 
              src={SearchIcon} 
              alt=""
              className="absolute top-2/4 right-3 -translate-y-2/4 h-11 w-11 cursor-pointer"
            />
          </div>
      </FadeIn>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#FFFFFF00_0%,_#FFF_100%)]" />

    </div>
  );
};

export default Hero;
