import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { IoMdRocket } from "react-icons/io";


export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <nav className="w-full fixed bg-gray-100">
        <div className="max-w-6xl flex justify-between mx-auto h-16 items-center mt-4">
          <h1 className="text-5xl font-bold">
            <IoMdRocket className="inline"/>Tech<span className="text-cyan-700">Nova </span>
          </h1>
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <a className="text-2xl hover:text-cyan-700 " href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-2xl hover:text-cyan-700" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-2xl hover:text-cyan-700" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="text-2xl hover:text-cyan-700" href="#">
                Contact
              </a>
            </li>
          </ul>
          {/* Hamburger Icon (only visible on mobile) */}
          <button onClick={toggle} className="md:hidden">
            {isOpen ? <IoMdClose size={30} /> : <SlMenu size={30} />}
          </button>
        </div>

        {/* Mobile Menu (Hidden by default, shown when `isOpen` is true) */}
        <ul
          className={`md:hidden bg-gray-100 p-4 space-y-2 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a className="text-2xl hover:text-cyan-700 " href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-2xl hover:text-cyan-700" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-2xl hover:text-cyan-700" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="text-2xl hover:text-cyan-700" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
