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
      <nav
        className={`before:rotate-y-180 fixed inset-0 z-50 mx-auto flex h-16 max-w-64 items-center justify-between bg-secondary px-5 py-3 transition-all duration-500 before:absolute before:-left-8 before:inline-block before:h-16 before:w-9 before:bg-[url('/img/navborder.webp')] before:bg-16 before:content-[''] after:absolute after:-right-8 after:inline-block after:h-16 after:w-9 after:bg-[url('/img/navborder.webp')] after:bg-16 after:content-[''] md:max-w-2xl md:translate-y-0 ${isOpen ? "translate-y-42" : ""}`}
      >
        <Link to="/">
        <img
          src="../../../public/img/logo.webp"
          alt="Logo"
          className="ml-4 h-8 cursor-pointer md:h-10"
        />
        </Link>

        <ul
  className={
    "absolute left-1/2 flex w-screen -translate-x-1/2 -translate-y-29 flex-col items-center gap-10 bg-secondary py-8 md:relative md:left-auto md:translate-x-0 md:translate-y-0 md:flex-row md:gap-6 md:space-x-4 md:w-auto md:bg-transparent md:py-0 " 
  }
        >
          <li>
            <Link
              to="/"
              className="text-white hover:text-main"
              onClick={toggleMenu}
            >
              Films
            </Link>
          </li>
          <li>
            <Link to="http://localhost:8080/login" onClick={toggleMenu}>
              <Button intent="primary" size="small">
                Se Connecter
              </Button>
            </Link>
          </li>
        </ul>

        <button className="group relative md:hidden" onClick={toggleMenu}>
          <div className="relative flex transform items-center justify-center overflow-hidden shadow-md transition-all duration-200 md:hidden">
            <div
              className={`flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 ${isOpen ? "cross" : ""}`}
            >
              <div
                className={`h-[2px] w-7 origin-left transform bg-white transition-all duration-300 ${isOpen ? "translate-x-10" : ""}`}
              ></div>
              <div
                className={`h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300 ${isOpen ? "translate-x-10" : ""}`}
              ></div>
              <div
                className={`h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 ${isOpen ? "translate-x-10" : ""}`}
              ></div>

              <div
                className={`absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ${isOpen ? "w-12 translate-x-0" : ""}`}
              >
                <div
                  className={`absolute h-[2px] w-5 rotate-0 transform bg-white transition-all delay-300 duration-500 ${isOpen ? "rotate-45" : ""}`}
                ></div>
                <div
                  className={`absolute h-[2px] w-5 -rotate-0 transform bg-white transition-all delay-300 duration-500 ${isOpen ? "-rotate-45" : ""}`}
                ></div>
              </div>
            </div>
          </div>
        </button>
      </nav>

      {/* <div
        className={`fixed left-0 right-0 top-0 z-50 mx-auto transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-16" : ""}`}
      >
        <nav className="before:rotate-y-180 h-16 max-w-64 items-center justify-between bg-secondary px-4 py-3 before:absolute before:-left-9 before:content-[url('../../../public/img/NavBorder.png')] after:absolute after:-right-9 after:content-[url('../../../public/img/NavBorder.png')] md:max-w-screen-md md:px-12">
          <img
            src="../../../public/img/logo.png"
            alt="Logo"
            className="ml-4 h-8 cursor-pointer md:h-10"
          />

          <button className="group relative" onClick={toggleMenu}>
            <div className="relative flex transform items-center justify-center overflow-hidden shadow-md transition-all duration-200">
              <div
                className={`flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 ${isOpen ? "cross" : ""}`}
              >
                <div
                  className={`h-[2px] w-7 origin-left transform bg-white transition-all duration-300 ${isOpen ? "translate-x-10" : ""}`}
                ></div>
                <div
                  className={`h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300 ${isOpen ? "translate-x-10" : ""}`}
                ></div>
                <div
                  className={`h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 ${isOpen ? "translate-x-10" : ""}`}
                ></div>

                <div
                  className={`absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ${isOpen ? "w-12 translate-x-0" : ""}`}
                >
                  <div
                    className={`absolute h-[2px] w-5 rotate-0 transform bg-white transition-all delay-300 duration-500 ${isOpen ? "rotate-45" : ""}`}
                  ></div>
                  <div
                    className={`absolute h-[2px] w-5 -rotate-0 transform bg-white transition-all delay-300 duration-500 ${isOpen ? "-rotate-45" : ""}`}
                  ></div>
                </div>
              </div>
            </div>
          </button>
        </nav>
      </div>

      <div
        className={`absolute inset-0 transform transition-transform duration-500 ease-in-out md:relative ${isOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"} ${isOpen ? "" : "hidden md:flex"}`}
      >
        <ul className="flex flex-col items-center gap-10 bg-secondary p-8 md:flex-row md:bg-none">
          <li>
            <Link to="/about" className="text-white hover:text-main">
              Films
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Button intent="primary" size="small">
                Se Connecter
              </Button>
            </Link>
          </li>
        </ul>
      </div> */}
    </>
  );
}
