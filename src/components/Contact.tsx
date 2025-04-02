import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div>
        <div>
          <h1>Contact Us</h1>
          <h3>
            Let's Build Something Great Together!
          </h3>
          <p>
            We’d love to hear from you. Reach out for a consultation,
            collaboration, or support.
          </p>
        </div>
      </div>
      
      <div></div>
      <div>
        <div>
          

          <div>
            <div>
              <form>
                <div>
                  <label>Name</label>
                  <input
                    
                    type="text"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="text"
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    
                    name="Message"
                    id=""
                  ></textarea>
                </div>
                <button>Send Message</button>
              </form>
            </div>
            <div >
              <div>
                <MdEmail size={60} />
                <h1>Email us:</h1>
                <p>
                  <a href="mailto:support@technovasolutions.com">
                  support@technovasolutions.com

                  </a>
                
                  
                </p>
              </div>
              <div>
                <FaLocationDot size={60} />
                <h1>Address:</h1>
                <p>
                123 TechNova Street, City, Country
                  
                </p>
              </div>
              <div>
                <FaPhoneAlt size={60} />
                <h1>Call us:</h1>
                <p>
                  Call us to speak to a member of our team. We are
                  <span>always happy to help.</span>
                </p>
                <p>+123-456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
