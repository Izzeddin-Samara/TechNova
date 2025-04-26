import { useState } from "react";
import { IoMdRocket } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <nav className="w-full fixed bg-gray-100">
        <div className="max-w-7xl flex justify-between mx-auto h-16 items-center mt-4">
          <h1 className="text-3xl font-bold  lg:text-5xl">
            <IoMdRocket className="inline" />
            Tech<span className="text-cyan-700">Nova </span>
          </h1>
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl md:text-xl text-cyan-700 font-semibold"
                    : "text-2xl md:text-xl hover:text-cyan-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl md:text-xl text-cyan-700 font-semibold"
                    : "text-2xl md:text-xl hover:text-cyan-700"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl md:text-xl text-cyan-700 font-semibold"
                    : "text-2xl md:text-xl hover:text-cyan-700"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl md:text-xl text-cyan-700 font-semibold"
                    : "text-2xl md:text-xl hover:text-cyan-700"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl md:text-xl text-cyan-700 font-semibold"
                    : "text-2xl md:text-xl hover:text-cyan-700"
                }
              >
                Careers
              </NavLink>
            </li>
          </ul>
          {/* Hamburger Icon (only visible on mobile) */}
          <button onClick={toggle} className="md:hidden m-4">
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {/* Mobile Menu (Hidden by default, shown when `isOpen` is true) */}
        <ul
          className={`md:hidden bg-gray-300 p-4 space-y-4 text-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lg md:text-xl text-cyan-700 font-semibold"
                  : "text-lg md:text-xl hover:text-cyan-700"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-lg md:text-xl text-cyan-700 font-semibold"
                  : "text-lg md:text-xl hover:text-cyan-700"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-lg md:text-xl text-cyan-700 font-semibold"
                  : "text-lg md:text-xl hover:text-cyan-700"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-lg md:text-xl text-cyan-700 font-semibold"
                  : "text-lg md:text-xl hover:text-cyan-700"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                isActive
                  ? "text-lg md:text-xl text-cyan-700 font-semibold"
                  : "text-lg md:text-xl hover:text-cyan-700"
              }
            >
              Careers
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
