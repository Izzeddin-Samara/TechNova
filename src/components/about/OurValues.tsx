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
      <div>
        <div>
          <h1>
            Our Values
          </h1>
          <div>
            {Values.map((value, index) => (
                <div key={index}>
                {value.icon }
                <h1>{value.name}</h1>
                <p>
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
