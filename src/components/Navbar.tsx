import { useState } from "react";
import { IoMdRocket } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <nav className="w-full fixed bg-gray-100">
        <div className="max-w-7xl flex justify-between mx-auto h-16 items-center mt-4">
          <h1 className="text-3xl font-bold sm:text-xl lg:text-5xl">
            <IoMdRocket className="inline" />
            Tech<span className="text-cyan-700">Nova </span>
          </h1>
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link to="/" className="text-2xl md:text-xl hover:text-cyan-700 ">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-2xl md:text-xl hover:text-cyan-700"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-2xl md:text-xl hover:text-cyan-700"
                to="/services"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-2xl md:text-xl hover:text-cyan-700 "
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="text-2xl md:text-xl hover:text-cyan-700"
                to="/careers"
              >
                Careers{" "}
              </Link>
            </li>
          </ul>
          {/* Hamburger Icon (only visible on mobile) */}
          <button onClick={toggle} className="md:hidden">
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {/* Mobile Menu (Hidden by default, shown when `isOpen` is true) */}
        <ul
          className={`md:hidden bg-gray-100 p-4 space-y-2 text-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link to="/" className="text-2xl md:text-xl hover:text-cyan-700 ">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-2xl md:text-xl hover:text-cyan-700"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-2xl md:text-xl hover:text-cyan-700"
              to="/services"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-2xl md:text-xl hover:text-cyan-700 "
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="text-2xl md:text-xl hover:text-cyan-700"
              to="/careers"
            >
              Careers{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
