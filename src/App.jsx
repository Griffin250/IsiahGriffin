import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactForm" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
