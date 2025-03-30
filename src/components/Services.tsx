import { GiLightBulb } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";


const Services = () => {
  const ServicesList = [
    {
      title: "Custom Software Development",
      description:
        "We provide custom software development tailored to your business needs. Whether it's a web or mobile app, our team builds solutions that are scalable, secure, and easy to maintain. We focus on delivering software that drives",
      icon: <FaComputer size={50} className="mx-auto mb-2 text-cyan-700" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Great design is at the heart of any successful product. Our UI/UX design services focus on creating intuitive and visually appealing designs that engage users and provide seamless experiences across platforms.",
      icon: <MdDesignServices size={50} className="mx-auto mb-2 text-cyan-700" />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Unlock the potential of cloud technology with our cloud solutions. We help businesses move to the cloud, optimize their cloud environments, and ensure high availability, scalability, and security.",
      icon: <FaCloud size={50} className="mx-auto mb-2 text-cyan-700" />,
    },
    {
      title: "IT Consulting",
      description:
        "Our IT consulting services help businesses transform their technology infrastructure to maximize productivity and efficiency. We assess your needs and provide actionable recommendations, from systems integration to cloud computing solutions.",
      icon: <GiLightBulb size={50} className="mx-auto mb-2 text-cyan-700" />,
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "We offer comprehensive cybersecurity services to protect your business from digital threats. From vulnerability assessments to data encryption, we provide end-to-end solutions that safeguard your sensitive information.",
      icon: <FaShieldAlt size={50} className="mx-auto mb-2 text-cyan-700" />,
    },
    {
      title: "Digital Transformation",
      description:
        "We assist businesses in navigating the digital transformation journey, enabling them to adopt the latest technologies to improve processes, enhance customer experiences, and drive innovation.",
      icon: <FaSync size={50} className="mx-auto mb-2 text-cyan-700" />,
    },
  ];
  return (
    <>
      <div>
        <div>
          <h1>Our Services</h1>
          <FaToolbox size={50} />
        </div>

        <div>
          <div>
            {ServicesList.map((service, index) => (
              <div key={index}>
                {service.icon}
                <h1>
                  {service.title}
                </h1>
                <p>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
