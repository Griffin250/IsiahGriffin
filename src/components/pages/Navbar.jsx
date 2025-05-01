import { useState, useEffect } from "react";
import logo from "../../assets/Isiahgriffin_logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaiour: "smooth",
    });
  };

  const [darkMode, setDarkMode] = useState(() => {
    // check localStorage or default to false
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };
  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark-mode");
    } else {
      html.classList.remove("dark-mode");
    }
  }, [darkMode]);

  //check for scroll positions and hide or show navbar
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed md:top-2 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center w-full md:w-5/6 px-2 md:px-4 py-2 bg-white text-black md:rounded-2xl  shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <div className="text-2xl font-bold flex items-center gap-2">
        <NavLink to="/" className="cursor-pointer">
          <img src={logo} className="w-14 h-14 bg-gray-900 rounded-lg" />{" "}
        </NavLink>
      </div>
      <ul className="hidden md:flex gap-8 font-bold ">
        <li>
          <NavLink to="/" className="hover:text-orange-500 cursor-pointer">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-orange-500 cursor-pointer">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className="hover:text-orange-500 cursor-pointer"
          >
            Education{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className="hover:text-orange-500 cursor-pointer"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Services"
            className="hover:text-orange-500 cursor-pointer"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className="hover:text-orange-500 cursor-pointer"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className="hover:text-orange-500 cursor-pointer"
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <NavLink
          className=" cursor-pointer "
          to="/contactForm"
          onClick={scrollToTop}
        >
          {" "}
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold cursor-pointer">
            CONTACT ME
          </button>
        </NavLink>
        <NavLink to="github.com/IsiahGriffin" target="_blank">
          <FontAwesomeIcon
            icon={faSquareGithub}
            className="text-3xl cursor-pointer"
          />{" "}
        </NavLink>
        <NavLink to="linkedin.com/in/isiah-griffin" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-3xl cursor-pointer"
          />
        </NavLink>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={toggleDarkMode}
            checked={darkMode}
          />

          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:bg-gray-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
        </label>
      </div>
    </nav>
  );
}
