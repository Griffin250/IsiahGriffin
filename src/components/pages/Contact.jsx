import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faXTwitter, } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <section className="py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold">Hire Me</h2>
          <p className="text-lg italic">
            "Let's collaborate on Web and App Development, Photography, or UI/UX
            Design."
          </p>
          <p className="text-md font-semibold">
            Contact me to bring your ideas to life!
          </p>

          <div className="space-y-2">
            <p className="flex items-center gap-2">
              📧{" "}
              <a
                href="mailto:contact@isiahgriffin.no"
                className="hover:underline"
              >
                contact@isiahgriffin.no
              </a>
            </p>
            <p className="flex items-center gap-2">
              📞{" "}
              <a href="tel:+4740569093" className="hover:underline">
                +47 40569093
              </a>
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-8 mt-4 text-2xl">
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


          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded shadow-lg transition">
            ⬇ Download CV
          </button>
        </div>

        {/* Right Section - Contact Form */}
        <form className="bg-white rounded-lg p-6 shadow-xl space-y-4 text-gray-800">
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            placeholder="Write your message here... Please provide details so I can assist you better.!"
            className="w-full p-3 h-32 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition flex justify-center items-center gap-2"
          >
            Submit ➔
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
