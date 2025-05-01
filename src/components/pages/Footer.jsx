import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-6 m-auto">
      <div className="border-t border-gray-600 mb-4"> </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-cnter m-auto">
        {/* Column 1: About */}
        <div>
          <h4 className="text-3xl font-bold mb-3"> &lt; Isiah Griffin /&gt;</h4>
          <p className="text-sm flex justify-start items-center gap-2">
            Passionate web/app developer crafting seamless digital experiences
            with a touch of design and creativity.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3 text-center">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm md:flex gap-4 text-center">
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-white transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-white transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-white transition-colors"
              >
                Education
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Let's Connect</h4>
          <div className="flex justify-center md:justify-center gap-4 text-lg ">
            <a href="#" className="hover:text-pink-400">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="md:-mt-20 flex items-center p-2 text-sm text-gray-400 hover:text-white font-bold transition border border-orange-500 rounded-md float-end cursor-pointer"
      >
        Back to Top
      </button>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>© 2025 Isiah Griffin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
