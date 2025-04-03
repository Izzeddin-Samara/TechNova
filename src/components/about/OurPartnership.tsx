import { FaAmazon } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { SiPaloaltonetworks } from "react-icons/si";
import { TbBrandAdobe } from "react-icons/tb";
import { FaShopify } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";

export default function OurPartnership() {
  const partnerCompanies = [
    {
      name: "Amazon",
      icon: <FaAmazon size={50} className="text-cyan-700" />,
      description:
        "Amazon is a global leader in e-commerce, cloud computing, and artificial intelligence, revolutionizing industries and businesses around the world.",
    },
    {
      name: "Microsoft",
      icon: <BsMicrosoft size={50} className="text-cyan-700" />,
      description:
        "Microsoft provides innovative software solutions, including operating systems, productivity software, cloud services, and AI tools, driving business transformation.",
    },
    {
      name: "Google",
      icon: <FaGoogle size={50} className="text-cyan-700" />,
      description:
        "Google is the global leader in search, advertising, and cloud services, providing businesses with the tools to enhance digital marketing and reach wider audiences.",
    },
    {
      name: "PayPal",
      icon: <FaPaypal size={50} className="text-cyan-700" />,
      description:
        "PayPal enables secure online payments, providing businesses and customers with an easy, fast, and trusted way to send and receive money digitally.",
    },
    {
      name: "Stripe",
      icon: <FaStripe size={50} className="text-cyan-700" />,
      description:
        "Stripe provides a powerful payment platform for businesses to accept online payments, offering customizable solutions for financial transactions.",
    },
    {
      name: "Palo Alto Networks",
      icon: <SiPaloaltonetworks size={50} className="text-cyan-700" />,
      description:
        "Palo Alto Networks is a global cybersecurity leader, offering advanced security solutions that protect organizations from digital threats and cyberattacks.",
    },
    {
      name: "Adobe",
      icon: <TbBrandAdobe size={50} className="text-cyan-700" />,
      description:
        "Adobe is a leader in creative software, providing solutions for design, video editing, and digital media management, helping businesses create stunning visuals.",
    },
    {
      name: "Shopify",
      icon: <FaShopify size={50} className="text-cyan-700" />,
      description:
        "Shopify is a leading e-commerce platform, empowering businesses to easily build, manage, and scale online stores with intuitive tools and features.",
    },
    {
      name: "BMC Software",
      icon: <SiBmcsoftware size={50} className="text-cyan-700" />,
      description:
        "BMC Software provides IT management solutions, helping businesses automate, optimize, and secure their IT environments to drive operational efficiency.",
    },
  ];
  return (
    <>
      <div className="w-full">
        <div className="max-w-6xl mx-auto mt-50">
          <h2 className="text-5xl font-bold text-cyan-700 text-center mb-20">
            Our Partnership
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCompanies.map((company, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-lg shadow-lg mb-8"
              >
                {company.icon}
                <h1 className="font-bold text-xl">{company.name}</h1>
                <p className="text-justify mt-4">{company.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
