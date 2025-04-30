import { useState, useEffect } from "react";
import logo from "../../assets/Isiahgriffin_logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behaiour: "smooth",
    })
  }
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-black text-black dark:text-white shadow-md">
      <div className="text-2xl font-bold flex items-center gap-2">
        <img src={logo} className="w-14 h-14" />
      </div>
      <ul className="hidden md:flex gap-6 font-bold">
        <li>
          <NavLink to="/" className="hover:text-orange-500 cursor-pointer">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-orange-500 cursor-pointer">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="hover:text-orange-500 cursor-pointer">
            PORTFOLIO
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="hover:text-orange-500 cursor-pointer">
            SERVICES
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="hover:text-orange-500 cursor-pointer">
            PROJECTS
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <NavLink className=" cursor-pointer " to="/contactForm" onClick={scrollToTop()}>
          {" "}
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold cursor-pointer">
            CONTACT ME
          </button>
        </NavLink>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={toggleDarkMode}
            checked={darkMode}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
        </label>
      </div>
    </nav>
  );
}
