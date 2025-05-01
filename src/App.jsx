import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Education from "./components/pages/Education";
import Services from "./components/pages/Services";
import Projects  from "./components/pages/Projects";
import Portfolio  from "./components/pages/Portfolio";
import Experience from "./components/pages/Experience";
import NotFound  from "./components/pages/NotFound";
import Blog from "./components/pages/Blog";
import Skills  from "./components/pages/Skills";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/skills" element={<skills/>} />
        <Route path="/ContactForm" element={<Contact />} />
      
       

        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
