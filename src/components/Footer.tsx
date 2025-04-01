import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <div>
            <div>
              <h1>TechNova</h1>
              <p>
                Empowering Your Business with Cutting-Edge Technology Solutions
              </p>
            </div>
            <div>
              <h1>Company</h1>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Prcing</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Support</h1>
              <ul>
                <li>
                  <a href="#" >FAQ</a>
                </li>
                <li>
                  <a href="#" >Contact Us</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Terms and conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Solutions</h1>
              <ul>
                <li>
                  <a href="#" >Cloud Solutions</a>
                </li>
                <li>
                  <a href="#" >UI/UX Design</a>
                </li>
                <li>
                  <a href="#" >Software Development</a>
                </li>
                <li>
                  <a href="#">Cybersecurity</a>
                </li>
                <li>
                  <a href="#">IT consulting</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Connect with Us</h1>
              <ul>
                <li>
                  <FaLocationDot />
                  <span>123 TechNova Street, City, Country</span>
                </li>
                <li>
                  <BsFillTelephoneFill />
                  <span>+123-456-7890</span>
                </li>
                <li>
                  <MdEmail />
                  <span>
                    <a
                      href="#"
                    >
                      support@technovasolutions.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
        <p>
          © 2025 TechNova Solutions. All rights reserved.
        </p>
      </footer>
    </>
  );
}
