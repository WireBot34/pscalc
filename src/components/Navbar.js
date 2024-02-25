import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#D2DE32]"><Link to="/">PSC Calculator</Link></h1>

      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-4">
          <Link to="/projects">Tools</Link>
        </li>
        <li className="p-4">
          <Link to="/business">Business</Link>
        </li>
      </ul>
      <button
        className="bg-green-200 p-4 rounded-3xl"
        onClick={handleThemeSwitch}
      >
        {/* {dark ? "light" : "dark"} */}
        Theme
      </button>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-darkFG dark:bg-darkBG ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-100"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#D2DE32]"><Link to="/">PSC Calculator</Link></h1>

        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/projects">Tools</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/business">Business</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
