"use client";
import { useState, useRef, useEffect } from "react";

const styles = {
  nav: `
  bg-white 
  dark:bg-gray-900 
  fixed 
  w-full 
  z-20 
  top-0 
  left-0 
  border-b 
  border-gray-200 
  dark:border-gray-600`,
  navContainer: `
  max-w-screen-xl 
  flex flex-wrap 
  items-center 
  justify-between 
  mx-auto 
  p-4`,
  button: `
  text-white 
   bg-blue-700 
  hover:bg-blue-800 
  focus:ring-4 
  focus:outline-none 
  focus:ring-blue-300 
  font-medium 
  rounded-lg 
  text-sm 
  px-4 
  py-2 
  text-center
  mr-3 
  md:mr-0 
  dark:bg-blue-600 
  dark:hover:bg-blue-700 
  dark:focus:ring-blue-800`,
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
  bg-gray-50 
  md:flex-row 
  md:space-x-8 
  md:mt-0 
  md:border-0 
  md:bg-white 
  dark:bg-gray-800 
  md:dark:bg-gray-900 
  dark:border-gray-700`,
  navLink: `
  block 
  py-2 pl-3 pr-4 
  text-gray-900 
  rounded 
  hover:bg-gray-100 
  md:hover:bg-transparent 
  md:hover:text-blue-700 
  md:p-0 md:dark:hover:text-blue-500 
  dark:text-white dark:hover:bg-gray-700 
  dark:hover:text-white 
  md:dark:hover:bg-transparent 
  dark:border-gray-700`,
  hamburger: `
  inline-flex 
  items-center 
  p-2 
  w-10 
  h-10 
  justify-center 
  text-sm 
  text-gray-500 
  rounded-lg 
  md:hidden 
  hover:bg-gray-100 
  focus:outline-none 
  focus:ring-2 
  focus:ring-gray-200 
  dark:text-gray-400 
  dark:hover:bg-gray-700 
  dark:focus:ring-gray-600`,
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
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Eastgate Storage</span>
        </a>
        <div className="flex md:order-2">
          <button type="button" className={styles.button}>
            Call Now
          </button>
          <button
            type="button"
            className={styles.hamburger}
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleShowNav}
          >
            <span className="sr-only">Open main menu</span>
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
              <a href="#" className={styles.navLink} aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
