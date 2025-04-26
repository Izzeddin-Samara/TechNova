import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your form submission logic (if any)
  };
  return (
    <>
      <div className=" max-w-7xl mx-auto h-auto p-8 mt-30 m-30">
        <div className="flex items-center h-[200px]">
          <div className="text-center w-full">
            <h1 className="text-3xl font-bold mb-4 text-cyan-700 lg:text-5xl md:text-3xl sm:text-lg">
              Contact Us
            </h1>
            <p className="text-md sm:text-lg lg:text-lg text-gray-600 mt-8 mx-auto">
              Let's Build Something Great Together! We’d love to hear from you.
              Reach out for a consultation, collaboration, or support.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="max-w-6xl bg-gray-100 mx-auto p-12 h-auto rounded-xl shadow-2xl bg-gray-200">
            <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-2 gap-16">
              <div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-xl">Name</label>
                    <input
                      className="w-full p-3 bg-gray-100 outline-none border border-gray-300 rounded-lg mt-2 focus:ring-3 focus:ring-cyan-600"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-xl">Email</label>
                    <input
                      className="w-full p-3 bg-gray-100  border rounded-lg outline-none border border-gray-300 mt-2 focus:ring-3 focus:ring-cyan-600"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-xl">Message</label>
                    <textarea
                      className="w-full h-48 p-3 bg-gray-100 border outline-none rounded-lg border-gray-300 mt-2 resize-none focus:ring-3 focus:ring-cyan-600"
                      name="Message"
                      id=""
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className=" w-full bg-cyan-700 hover:bg-cyan-800 text-white p-4 rounded-lg font-bold focus:ring-4 focus:ring-cyan-500 cursor-pointer text-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="space-y-8 mt-10">
                <div className="text-center">
                  <MdEmail
                    className="mx-auto text-cyan-700 rounded-lg"
                    size={60}
                  />
                  <h1 className="font-bold">Email us:</h1>
                  <p className="font-bold text-cyan-700 mt-4">
                    support@technovasolutions.com
                  </p>
                </div>
                <div className="text-center">
                  <FaLocationDot
                    className="mx-auto text-cyan-700 p-2 rounded-lg"
                    size={60}
                  />
                  <h1 className="font-bold">Address:</h1>
                  <p className="text-cyan-700 font-bold mt-4">
                    123 TechNova Street, City, Country
                  </p>
                </div>
                <div className="text-center">
                  <FaPhoneAlt
                    className="mx-auto text-cyan-700 p-2 rounded-lg"
                    size={60}
                  />
                  <h1 className="font-bold">Call us:</h1>
                  <p className="mt-4">
                    Call us to speak to a member of our team. We are
                    <span className="block">always happy to help.</span>
                  </p>
                  <p className="text-cyan-700 font-bold">+123-456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
