import { GiLightBulb } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurServices = () => {
  const ServicesList = [
    {
      title: "Custom Software Development",
      description:
        "We provide custom software development tailored to your business needs. Whether it's a web or mobile app, our team builds solutions that are scalable, secure, and easy to maintain. We focus on delivering software that drives",
      icon: <FaComputer size={50} className="mx-auto mb-2 text-cyan-700" />,
      slug: "custom-software",
    },
    {
      title: "UI/UX Design",
      description:
        "Great design is at the heart of any successful product. Our UI/UX design services focus on creating intuitive and visually appealing designs that engage users and provide seamless experiences across platforms.",
      icon: (
        <MdDesignServices size={50} className="mx-auto mb-2 text-cyan-700" />
      ),
      slug: "ui-ux-design",
    },
    {
      title: "Cloud Solutions",
      description:
        "Unlock the potential of cloud technology with our cloud solutions. We help businesses move to the cloud, optimize their cloud environments, and ensure high availability, scalability, and security.",
      icon: <FaCloud size={50} className="mx-auto mb-2 text-cyan-700" />,
      slug: "cloud-solutions",
    },
    {
      title: "IT Consulting",
      description:
        "Our IT consulting services help businesses transform their technology infrastructure to maximize productivity and efficiency. We assess your needs and provide actionable recommendations, from systems integration to cloud computing solutions.",
      icon: <GiLightBulb size={50} className="mx-auto mb-2 text-cyan-700" />,
      slug: "it-consulting",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "We offer comprehensive cybersecurity services to protect your business from digital threats. From vulnerability assessments to data encryption, we provide end-to-end solutions that safeguard your sensitive information.",
      icon: <FaShieldAlt size={50} className="mx-auto mb-2 text-cyan-700" />,
      slug: "cybersecurity-solutions",
    },
    {
      title: "Digital Transformation",
      description:
        "We assist businesses in navigating the digital transformation journey, enabling them to adopt the latest technologies to improve processes, enhance customer experiences, and drive innovation.",
      icon: <FaSync size={50} className="mx-auto mb-2 text-cyan-700" />,
      slug: "digital-transformation",
    },
  ];
  return (
    <>
      <div className="w-full text-center mx-auto  p-6 mt-20 mb-50">
        <div className="flex justify-center">
          <h1 className="text-xl font-bold mb-4 mr-4 lg:text-6xl md:text-4xl">
            Our Services
          </h1>
          <FaToolbox className="w-12 h-12 sm:w-14 sm:h-14 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        </div>

        <div className="w-2/8 h-2 bg-cyan-700 mx-auto mb-12"></div>
        <div className="max-w-6xl mx-auto p-8 space-y-8 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {ServicesList.map((service, index) => (
              <div
                id={service.slug}
                key={index}
                className="flex flex-col items-center justify-between bg-gray-100 rounded-lg shadow-md p-6 text-center h-full"
              >
                {/* Icon */}
                <div className="mb-4 text-cyan-700 text-5xl">
                  {service.icon}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>

                {/* Description */}
                <p className="text-justify text-gray-700 mb-6">
                  {service.description}
                </p>

                {/* Button */}
                <Link
                  to={`/services#${service.slug}`}
                  className="mt-auto w-full"
                >
                  <button className="bg-cyan-700 cursor-pointer font-semibold hover:bg-cyan-800 p-3 w-full text-lg text-white rounded-lg focus:ring-4 focus:ring-cyan-500">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default OurServices;
