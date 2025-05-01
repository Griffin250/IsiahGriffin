import React from "react";
import "../../../src/index.css";
const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      data-aos="fade-up "
      data-aos-duration="1000"
    >
      <div className="w-full max-w-2xl p-8 rounded-lg shadow-lg bg-gray-900">
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
          Contact Me
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-200">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-200">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-200">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-orange-600 hover:bg-orange-700 rounded text-white font-bold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
