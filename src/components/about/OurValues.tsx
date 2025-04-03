import { FaShieldAlt } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { FaBalanceScale } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";


export default function OurValues() {
  const Values = [
    {
      name: "Innovation",
      description:
        "We are committed to staying ahead of the curve, constantly adapting to new technologies to provide the best solutions forour clients.",
      icon: <HiLightBulb size={50} className="mb-2 text-cyan-700 mx-auto" />,
    },
    {
      name: "Integrity",
      description:
        "We believe in transparency, honesty, and doing what’s right, even when no one is watching.",
      icon: <FaBalanceScale size={50} className="mb-2 text-cyan-700 mx-auto" />,
    },
    {
      name: "Excellence",
      description:
        "We strive for the highest standards of quality and craftsmanship in everything we do, ensuring that we exceed our clients expectations",
      icon: <FaStar size={50} className="mb-2 text-cyan-700 mx-auto" />,
    },
    {
        name: "Collaboration",
        description:
          "We value partnerships and teamwork, working closely with clientsm and stakeholders to deliver the best possible outcomes",
        icon: <FaHandshakeSimple size={50} className="mb-2 text-cyan-700 mx-auto" />,
      },
      {
        name: "Security",
        description: "We prioritize the safety of our clients' data, using robust security practices to protect sensitive information",
        icon: <FaShieldAlt size={50} className="mb-2 text-cyan-700 mx-auto"  />
      }
  ];
  return (
    <>
      <div className="w-full">
        <div className="max-w-7xl mx-auto mt-40">
          <h1 className="text-center text-5xl text-cyan-700 font-bold">
            Our Values
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 mt-30 gap-8">
            {Values.map((value, index) => (
                <div key={index} className="text-center">
                {value.icon }
                <h1 className="font-bold text-cyan-700 text-2xl">{value.name}</h1>
                <p className="text-sm mt-4 text-justify">
                  {value.description}
                </p>
              </div>
                
            ))}
            
            

           

            
          </div>
        </div>
      </div>
    </>
  );
}
