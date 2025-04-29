import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 text-black dark:text-white shadow">
      <h1 className="text-xl font-bold">GriffinTechs</h1>
      <div className="flex items-center gap-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Projects</a>
        <a href="#" className="hover:underline">Contact</a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border px-2 py-1 rounded text-sm"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
