import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  const ServicesLinks = [
    {
      title: "Custom Software Development",

      slug: "custom-software",
    },
    {
      title: "UI/UX Design",

      slug: "ui-ux-design",
    },
    {
      title: "Cloud Solutions",

      slug: "cloud-solutions",
    },
    {
      title: "IT Consulting",
      slug: "it-consulting",
    },
    {
      title: "Cybersecurity Solutions",
      slug: "cybersecurity-solutions",
    },
    {
      title: "Digital Transformation",
      slug: "digital-transformation",
    },
  ];
  return (
    <>
      <footer className="mt-50 bg-gray-200 h-auto p-4 pt-8 pb-1">
        <div className="max-w-[95%] mx-auto text-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 space-y-8 space-x-2">
            <div>
              <h1 className="text-3xl font-bold text-left">
                Tech<span className="text-cyan-700">Nova</span>
              </h1>
              <p className=" text-sm text-justify mt-5 mb-4 mx-auto">
                At Technova, we are committed to empowering your business by
                delivering cutting-edge, future-ready technology solutions that
                are secure, scalable, and tailored to meet your unique goals.
                From cloud computing and cybersecurity to digital transformation
                and custom software development.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-xl">Company</h1>
              <ul className="space-y-6 mt-6">
                <li>
                  <Link
                    to="/about"
                    className="border-b-2 border-transparent hover:border-cyan-700 pb-1 transition-all text-sm"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="border-b-2 border-transparent hover:border-cyan-700 pb-1 transition-all text-sm"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="border-b-2 border-transparent hover:border-cyan-700 pb-1 transition-all text-sm"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border-b-2 border-transparent hover:border-cyan-700 pb-1 transition-all text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="border-b-2 border-transparent hover:border-cyan-700 pb-1 transition-all text-sm"
                  >
                    {" "}
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl">Support</h1>
              <ul className="space-y-6 mt-6 mb-6 ">
                <li>
                  <a
                    href="#"
                    className="border-b-2 border-transparent hover:border-cyan-700 pb-1 transition-all text-sm"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="border-b-2 border-transparent hover:border-cyan-700 pb-1 transition-all text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="border-b-2 border-transparent hover:border-cyan-700 pb-1 transition-all text-sm"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border-b-2 border-transparent hover:border-cyan-700 pb-1 transition-all text-sm"
                  >
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border-b-2 border-transparent hover:border-cyan-700 pb-1 transition-all text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl">Solutions</h1>
              <ul className="space-y-6 mt-6">
                {ServicesLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={`/services#${link.slug}`}
                      className="border-b-2 border-transparent hover:border-cyan-700 pb-1 transition-all text-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl ">Connect with Us</h1>
              <ul className="space-y-8 mt-7">
                <li className="flex items-center justify-center space-x-1">
                  <FaLocationDot size={20} />
                  <span className="text-sm">123 TechNova Street, City, Country</span>
                </li>
                <li className="flex items-center justify-center space-x-1">
                  <BsFillTelephoneFill size={20} />
                  <span className="text-sm">+123-456-7890</span>
                </li>
                <li className="flex items-center justify-center space-x-1">
                  <MdEmail size={20} className="mt-1" />
                  <span>
                    <a
                      href="#"
                      className="underline justify-center text-sm  hover:no-underline text-cyan-700"
                    >
                      support@technovasolutions.com
                    </a>
                  </span>
                </li>
              </ul>
              <ul className="flex justify-center gap-8 mt-10">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-500"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-500"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-500"
                  >
                    <FaFacebookSquare size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-500"
                  >
                    <AiFillInstagram size={20} />
                  </a>
                </li>
              </ul>
              <p className="mt-10 text-sm">
                Created by{" "}
                <a
                  className="hover:underline text-cyan-700"
                  href="https://github.com/Izzeddin-Samara"
                >
                  Izzeddin Samara
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-cyan-700 mx-auto"></div>
        <p className="text-center text-gray-950 text-xs mt-2">
          © 2025 TechNova Solutions. All rights reserved.
        </p>
      </footer>
    </>
  );
}
