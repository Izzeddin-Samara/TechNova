import { FaGlobe} from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";





export default function Whyjoinus() {
  const Reasons = [
    {
      name: "Work That Makes a Difference",
      description:
        "Right from the start, you’ll work on meaningful projects that drive value for businesses across the globe. From smart cloud solutions to secure platforms and user-friendly designs — your work will leave a lasting impact",
      icon: <FaRocket size={50} className="mb-2 text-cyan-700 mx-auto" />,
    },
    {
      name: "Grow With Us",
      description:
        "We’re all about growth — yours and ours. We support your journey with hands-on learning, mentoring, internal workshops, and space to explore new technologies. Your career path is yours to shape, and we’ll be there to help you move forward",
      icon: <GiBrain size={50} className="mb-2 text-cyan-700 mx-auto" />,
    },
    {
      name: "Team Spirit",
      description:
        "TechNova thrives on collaboration. We believe the best ideas come from diverse minds working together. You’ll be part of a friendly, respectful team where your voice matters, and where support and encouragement are part of our everyday",
      icon: <FaHandshakeSimple size={50} className="mb-2 text-cyan-700 mx-auto" />,
    },
    {
        name: " Embrace New Ideas",
        description:
          "We’re always looking ahead. Curiosity and innovation fuel our work — and we encourage you to bring fresh ideas to the table. At TechNova, you’ll never feel boxed in — you’ll be inspired to think creatively and contribute meaningfully",
        icon: <HiLightBulb size={50} className="mb-2 text-cyan-700 mx-auto" />,
      },
      {
        name: "Global Reach",
        description: "The work we do touches industries and businesses worldwide. Whether you’re working on a startup MVP or an enterprise system, your role will help others thrive in a tech-driven world.",
        icon: <FaGlobe size={50} className="mb-2 text-cyan-700 mx-auto"  />
      },
      {
        name: "More Than Just a Job",
        description: "We care about our people. From flexibility and wellness to celebrating wins together — we’re building a place where people enjoy what they do and who they do it with",
        icon: <FaHeart size={50} className="mb-2 text-cyan-700 mx-auto"  />
      }
  ];
  return (
    <>
      <div className="w-full">
        <div className="max-w-7xl mx-auto mt-40">
          <h1 className="text-center text-5xl text-cyan-700 font-bold">
            Why join us?
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-30 gap-8">
            {Reasons.map((reason, index) => (
                <div key={index} className="text-center">
                {reason.icon }
                <h1 className="font-bold text-cyan-700 text-2xl">{reason.name}</h1>
                <p className="text-sm mt-4 text-justify">
                  {reason.description}
                </p>
              </div>
                
            ))}
            
            

           

            
          </div>
        </div>
      </div>
    </>
  );
}
