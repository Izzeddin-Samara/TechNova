import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/about/About";
import ScrollToTop from "./components/ScrollToTop";
import Careers from "./components/careers/careers";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
