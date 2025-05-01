import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import heroImage from "../../assets/images/backgroundImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../../../src/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  });
    
  const words = React.useMemo(
    () => [
      "Front-End Developer",
      "Back-End Developer",
      "Full-Stack Developer",
      "UI/UX Designer",
      "Content Creator",
    ],
    []
    
  );

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;

    if (!isDeleting && charIndex <= currentWord.length) {
      setCurrentText(currentWord.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      setCurrentText(currentWord.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
    } else if (!isDeleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 min-h-[90vh]"
    >
      <div className="md:w-1/2">
        <p className="md:text-3xl text-2xl font-bold">
          I am a &lt;
          <span className="font-bold md:text-2xl text-xl text-orange-600">
            {currentText}
          </span>
          /&gt;
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mt-4"  data-aos="fade-left" data-aos-delay="200">Hi, I'm Isiah</h1>
        <h2 className="text-3xl md:text-5xl font-bold mt-2"  data-aos="fade-left" data-aos-delay="500">
          <span className="text-red-600">G</span>riffin from Norway
        </h2>
        <div className="flex gap-4 mt-6">
          <NavLink
            className="bg-orange-600 px-2 py-2 rounded-md text-white font-bold"
            to="https://github.com/Griffin250"
            target="blank"
            data-aos="fade-up" data-aos-delay="200">
            <FontAwesomeIcon icon={faGithub} className="text-2xl" /> GitHub
            Profile
          </NavLink>
          <NavLink
            className="bg-orange-600 px-2 py-2 rounded-md text-white font-bold "
            to="https://www.linkedin.com/in/isiah-tuyisenge/"
            target="blank"
            data-aos="fade-up" data-aos-delay="500">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" /> LinkedIn
            Profile
          </NavLink>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={heroImage}
          alt="Isiah Griffin"
          className="w-[300px] md:w-[400px] rounded-2xl object-cover md:mt-12 "
        />
      </div>
    </section>
  );
}
