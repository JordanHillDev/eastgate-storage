"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import eastgateLogo from "/public/eastgateLogo1.png";

const styles = {
  nav: `
  bg-white
  fixed 
  w-full
  px-4 
  z-20 
  top-0 
  left-0 
  border-b 
  border-gray-200`,
  navContainer: `
  max-w-screen-xl 
  flex 
  flex-wrap 
  items-center 
  justify-between 
  mx-auto 
  p-1`,
  button: `
  text-white 
  bg-primary 
  hover:bg-primary_dark
  focus:ring-4 
  focus:outline-none 
  focus:ring-primary_light 
  font-medium 
  rounded-lg 
  text-sm 
  px-4 
  py-2 
  text-center
  mr-3 
  md:mr-0`,
  navList: `
  flex 
  flex-col 
  p-4 
  md:p-0 
  mt-4 
  font-medium 
  border 
  border-gray-100 
  rounded-lg 
  md:flex-row 
  md:space-x-8 
  md:mt-0 
  md:border-0  
  dark:border-gray-700`,
  navLink: `
  block 
  py-2 
  px-4 
  rounded 
  md:p-0 
  text-primary
  hover:text-primary_light
  `,
  hamburger: `
  inline-flex 
  items-center 
  p-2 
  w-10 
  h-10 
  justify-center 
  text-sm 
  text-text_secondary 
  rounded-lg 
  md:hidden 
  hover:bg-gray-100 
  focus:outline-none 
  focus:ring-2 
  focus:ring-gray-200 
  `,
  dropdown: `
  items-center 
  justify-between 
  w-full md:flex 
  md:w-auto 
  md:order-1" 
  id="navbar-sticky`,
};

export default function NavBar() {
  const [dropdownShowing, setDropdownShowing] = useState(false);
  const navRef = useRef(null);

  const toggleShowNav = () => {
    setDropdownShowing((curr) => !curr);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (navRef.current && !(navRef.current as HTMLElement).contains(e.target as Node)) {
      setDropdownShowing(false);
    }
  };

  const handleScroll = () => {
    setDropdownShowing(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <a href="/">
          <Image alt="Eastgate Storage Logo" src={eastgateLogo} width={150} />
        </a>
        <div className="flex md:order-2">
          {/* <button type="button" className={styles.button}>
            Call Now
          </button> */}
          <button
            type="button"
            className={styles.hamburger}
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleShowNav}
          >
            <span className="sr-only">Call Eastgate Storage</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className={`${styles.dropdown} ${dropdownShowing ? "" : "hidden"}`} ref={navRef}>
          <ul className={styles.navList}>
            <li>
              <a href="#home" className={styles.navLink} aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navLink}>
                About
              </a>
            </li>
            <li>
              <a href="#location" className={styles.navLink}>
                Location
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
