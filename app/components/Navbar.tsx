"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  
  return (
    
<nav className="bg-white px-5 md:px-10 lg:px-16 py-4 shadow-sm">

  {/* TOP ROW */}
  <div className="flex items-center justify-between">

    {/* Logo */}
    <Image
      src="/icons/logo.svg"
      alt="Tobams Group logo"
      width={124}
      height={50}
    />

    {/* Desktop CTAs */}
    <div className="hidden md:flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-[#571244]  text-white text-sm font-medium">
        <span className="w-8 h-8 rounded-full bg-[#eed4e7] flex items-center justify-center">
          <Image
      src="/icons/user-icon.svg"
      alt="user icon"
      width={24}
      height={24}
   
      
    />
        </span>
        Account <span className=""><Image
      src="/icons/arrow.svg"
      alt="arrow"
      width={20}
      height={20}
    /></span>
      </button>

      <button className="px-4 py-2 bg-[#E8294A] text-white text-sm font-medium">
        Take Assessment
      </button>

     
    </div>

    {/* Hamburger (mobile only) */}
    <button
  aria-label="Open menu"
  onClick={() => setOpen(!open)}
  className="w-10 h-10 flex items-center justify-center rounded-lg bg-black md:hidden"
>
      <div className="flex flex-col justify-between h-4 w-5">
        <span className="block h-0.5 w-full bg-white"></span>
        <span className="block h-0.5 w-full bg-white"></span>
        <span className="block h-0.5 w-full bg-white"></span>
      </div>
    </button>

  </div>

   {/* DIVIDER LINE (desktop only) */}
  <div className="hidden md:block mt-4 border-t border-gray-200" />

  {open && (
  <div className="md:hidden mt-4 border-t border-gray-200 pt-4">
    <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700">

      <li><a href="#" onClick={() => setOpen(false)} >About ▾</a></li>
      <li><a href="#" onClick={() => setOpen(false)}>What We Do ▾</a></li>
      <li><a href="#" onClick={() => setOpen(false)}>Jobs ▾</a></li>
      <li><a href="#" onClick={() => setOpen(false)}>Projects</a></li>
      <li><a href="#" onClick={() => setOpen(false)}>TG Academy</a></li>
      <li><a href="#" onClick={() => setOpen(false)}>Strategic Partnership</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Book a Consultation</a></li>

    </ul>
  </div>
)}

  {/* BOTTOM ROW (Desktop Nav) */}
  <div className="hidden md:flex justify-center mt-4">
  <ul className="flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-700">
<li>
  <a
    href="#"
    className="flex items-center gap-1 text-[#571244] border-b-2 border-[#571244]"
  >
    About

    <Image
      src="/icons/arrow.svg"
      alt="arrow"
      width={16}
      height={16}
        className="brightness-0"
    />
  </a>
</li>
<li>
  <a href="#" className="flex items-center gap-1">
    What We Do
    <Image
      src="/icons/arrow.svg"
      alt="arrow"
      width={14}
      height={14}
      className="brightness-0"
    />
  </a>
</li>

<li>
  <a href="#" className="flex items-center gap-1">
    Jobs
    <Image
      src="/icons/arrow.svg"
      alt="arrow"
      width={14}
      height={14}
      className="brightness-0"
    />
  </a>
</li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">TG Academy</a></li>
    <li className="hidden lg:block"><a href="#">Strategic Partnership</a></li>
    <li className="hidden lg:block"><a href="#">Pricing</a></li>
    <li className="hidden lg:block"><a href="#">Book a Consultation</a></li>
  </ul>
</div>

</nav>
  )
}

export default Navbar