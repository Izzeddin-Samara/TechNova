import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="mt-50 bg-gray-200 p-8">
        <div className="max-w-8xl mx-auto text-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 space-y-8 space-x-4">
            <div>
              <h1 className="text-3xl font-bold">
                Tech<span className="text-cyan-700">Nova</span>
              </h1>
              <p className="w-3/4 text-sm text-justify mt-5 mb-4 mx-auto">
                At Technova, we are committed to empowering your business by
                delivering cutting-edge, future-ready technology solutions that
                are secure, scalable, and tailored to meet your unique goals.
                From cloud computing and cybersecurity to digital transformation
                and custom software development.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-xl">Company</h1>
              <ul className="space-y-4 mt-6">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl">Support</h1>
              <ul className="space-y-4 mt-6 mb-6 ">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl">Solutions</h1>
              <ul className="space-y-4 mt-6">
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    Software Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    Cybersecurity
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-cyan-700 text-lg hover:underline"
                  >
                    IT consulting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl ">Connect with Us</h1>
              <ul className="space-y-4 mt-6">
                <li className="flex items-center justify-center space-x-1">
                  <FaLocationDot />
                  <span>123 TechNova Street, City, Country</span>
                </li>
                <li className="flex items-center justify-center space-x-1">
                  <BsFillTelephoneFill />
                  <span>+123-456-7890</span>
                </li>
                <li className="flex items-center justify-center space-x-1">
                  <MdEmail />
                  <span className="">
                    <a
                      href="#"
                      className="underline justify-center  hover:no-underline text-cyan-700"
                    >
                      support@technovasolutions.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-1 bg-cyan-700 mx-auto mt-8"></div>
        <p className="text-center text-gray-500 mt-4 mb-2">
          © 2025 TechNova Solutions. All rights reserved.
        </p>
      </footer>
    </>
  );
}
