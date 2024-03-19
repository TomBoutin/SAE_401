import { Link } from "react-router-dom";
import Button from "../../ui/components/Button.jsx";
import React, { useState } from "react";

export default function NavBar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="before:rotate-y-180 fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-screen-md items-center justify-between bg-secondary px-12 py-3 before:absolute before:-left-9 before:hidden before:content-[url('../../../public/img/NavBorder.png')] after:absolute after:-right-9 after:hidden after:content-[url('../../../public/img/NavBorder.png')] before:md:block after:md:block ">
        <img
          src="../../../public/img/logo.png"
          alt="Logo"
          className="ml-4 h-8 cursor-pointer md:h-10"
        />

        <button className="group relative">
          <div className="relative flex transform items-center justify-center overflow-hidden shadow-md transition-all duration-200">
            <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
              <div className="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:translate-x-10"></div>
              <div className="h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300 group-focus:translate-x-10"></div>
              <div className="h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 group-focus:translate-x-10"></div>

              <div className="absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-focus:w-12 group-focus:translate-x-0">
                <div className="absolute h-[2px] w-5 rotate-0 transform bg-white transition-all delay-300 duration-500 group-focus:rotate-45"></div>
                <div className="absolute h-[2px] w-5 -rotate-0 transform bg-white transition-all delay-300 duration-500 group-focus:-rotate-45"></div>
              </div>
            </div>
          </div>
        </button>

<div className="absolute inset-0">

        <ul className="flex flex-col md:flex-row items-center gap-10 bg-secondary md:bg-none p-8 -translate-y-full">
          <li>
            <Link to="/about" className="text-white hover:text-main">
              Films
            </Link>
          </li>
          <li>
            <Link to="/contact" className="">
              <Button intent="primary" size="small">
                Se Connecter
              </Button>
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
}
