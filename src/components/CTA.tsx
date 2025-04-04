import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <>
      <div className="mt-50 text-center w-full">
        <h1 className="text-4xl  font-bold w-full">
          Ready to Transform Your Business with Cutting-Edge Tech Solutions?
        </h1>
        <p className="text-2xl mt-8">
          Let’s discuss how TechNova can help you innovate and grow.
        </p>
        <Link to="/contact">
          <button className="bg-cyan-700 font-bold hover:bg-cyan-800 p-4 w-3/5 md:w-1/5 mt-8  text-2xl text-white rounded-lg focus:ring-4 focus:ring-cyan-500 cursor-pointer">
            Contact Us now!
          </button>
        </Link>
      </div>
    </>
  );
}
