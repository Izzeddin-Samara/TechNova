import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GiLightBulb } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

export default function Services() {
  const location = useLocation();

  // Scroll to the specific section when the hash in the URL changes
  useEffect(() => {
    const hash = location.hash?.substring(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const yOffset = -110; 
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100); // small delay to ensure content is rendered
    }
  }, [location]);

  const Services = [
    {
      title: "Custom Software Development",
      description:
        "At Technova, we specialize in providing tailored software development solutions that meet the unique needs of your business. We build highly scalable, secure, and high-performance web and mobile applications, tailored specifically to your requirements. Whether you’re looking to streamline internal processes, launch a new product, or expand your digital capabilities, we work closely with your team from ideation to delivery. Our expert developers use industry-best practices to ensure your software is robust and scalable for long-term growth. Throughout the development process, we prioritize the user experience, security, and performance. We also provide continuous post-launch support, ensuring that the software evolves as your business needs change. From small startups to large enterprises, we’ve successfully helped organizations of all sizes solve complex challenges and unlock new growth opportunities. Whether you're developing an internal tool, an e-commerce platform, or a complex SaaS application, Technova is your trusted partner in building innovative software solutions that empower your business.",
      icon: <FaComputer size={200} className="mx-auto mb-2 text-cyan-700" />,

      slug: "custom-software",
    },
    {
      title: "UI/UX Design",
      description:
        "At Technova, we understand that great design goes far beyond just aesthetics—it’s about creating seamless, intuitive user experiences that drive customer engagement and satisfaction. Our UI/UX design team takes a user-centric approach, beginning with in-depth research to understand your target audience, business goals, and the challenges your users face. We develop user personas, create wireframes, and test interactive prototypes to ensure that your product is easy to navigate, intuitive to use, and engaging at every touchpoint. We utilize the latest design principles and trends to craft visually stunning interfaces that reflect your brand identity. Through continuous iterations and user feedback, we refine designs to ensure they meet both business goals and user needs. Our UI/UX design process also incorporates accessibility best practices, ensuring that your product is inclusive and usable by a diverse range of users. Whether you are looking to redesign an existing product or build a new one, we provide end-to-end design services, from initial concept to final deployment, delivering digital experiences that leave a lasting impact.",
      icon: (
        <MdDesignServices size={200} className="mx-auto mb-2 text-cyan-700" />
      ),
      slug: "ui-ux-design",
    },
    {
      title: "Cloud Solutions",
      description:
        "In an increasingly competitive digital landscape, leveraging cloud technology has become essential for businesses that want to scale quickly, stay agile, and optimize costs. Technova offers a comprehensive suite of cloud services designed to transform your IT infrastructure. We partner with leading cloud providers, such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud, to help businesses seamlessly migrate to the cloud, optimize their cloud environment, and manage it for long-term success. Our cloud solutions include cloud architecture design, cloud migration, system integration, data management, and ongoing cloud infrastructure management. We ensure that your cloud environment is secure, reliable, and scalable, allowing your business to run efficiently and effectively. Our experts assess your current infrastructure, identify opportunities for optimization, and create a custom cloud strategy that aligns with your business goals. Additionally, we help you implement disaster recovery and backup solutions to ensure business continuity in case of unexpected disruptions. With our cloud expertise, you can innovate faster, reduce operational costs, and maintain high availability without the complexity of managing physical infrastructure.",
      icon: (
        <FaCloud size={200} className="mx-auto mb-2 text-cyan-700" />
      ),

      slug: "cloud-solutions",
    },
    {
      title: "IT Consulting",
      description:
        "Navigating the complex and ever-changing world of technology can be a daunting task, but with Technova’s IT consulting services, you’ll gain the strategic guidance needed to make informed, long-term technology decisions. Our team of experienced IT consultants works closely with your organization to understand your specific business needs, challenges, and goals. We conduct thorough assessments of your current IT infrastructure, evaluating everything from your software and hardware to your processes and cybersecurity measures. Based on this analysis, we provide actionable, customized recommendations to improve performance, reduce costs, and optimize efficiency. Whether you need help with system integration, cloud adoption, IT security, or digital strategy, our consultants offer expert advice and practical solutions. We help you stay ahead of emerging technologies and trends, ensuring your organization is well-positioned for future growth. Our IT consulting services are designed to help you streamline operations, enhance collaboration, and ensure that your technology investments deliver measurable value to your business.",
      icon: (
        <GiLightBulb size={200} className="mx-auto mb-2 text-cyan-700" />
      ),

      slug: "it-consulting",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "In today's digital world, the security of your business's sensitive information is paramount. Technova provides comprehensive cybersecurity solutions designed to protect your organization from a wide range of digital threats. Our team of cybersecurity experts works proactively to safeguard your systems, networks, and data from external and internal risks. We offer a full range of services, including vulnerability assessments, penetration testing, malware detection, encryption, threat intelligence, and incident response. We conduct thorough security audits to identify potential weaknesses in your systems and recommend best practices to mitigate those risks. With a focus on building multi-layered security strategies, we ensure that your organization remains secure against evolving threats. Additionally, we provide employee training to promote a security-aware culture, helping to reduce human error and improve overall security posture. Whether you're looking to comply with industry regulations or protect your business from data breaches, Technova's cybersecurity services provide the robust protection needed to keep your digital assets safe and secure.",
      icon: (
        <FaShieldAlt size={200} className="mx-auto mb-2 text-cyan-700" />
      ),
      slug: "cybersecurity-solutions",
    },
    {
      title: "Digital Transformation",
      description:
        "In today’s rapidly changing business environment, digital transformation is no longer just an option—it's a necessity. At Technova, we specialize in helping organizations embrace digital technologies to streamline operations, improve customer experiences, and enhance overall business performance. We work with you to develop a comprehensive digital transformation strategy that includes adopting the latest technologies, automating processes, and leveraging data insights to optimize business decisions. Whether you're looking to upgrade legacy systems, move to the cloud, or digitize your customer-facing services, we have the expertise to help you navigate each phase of transformation. Our approach focuses on modernizing your business processes, improving cross-team collaboration, and enhancing your digital presence to stay ahead of competitors. We also emphasize the importance of change management, ensuring that your employees are well-prepared for the transition and can adapt to new technologies with ease. With Technova’s digital transformation services, your business will be able to innovate faster, deliver better services, and position itself for long-term success in a digital-first world.",
      icon: (
        <FaSync size={200} className="mx-auto mb-2 text-cyan-700" />
      ),

      slug: "digital-transformation",
    },
  ];

  return (
    <>
      <div className="flex items-center h-[400px]">
        <div className="text-center max-w-7xl mx-auto mt-10">
          <h1 className="text-3xl md:text-5xl text-cyan-700 font-bold mb-4 mt-60 lg:text-5xl md:text-3xl sm:text-lg">
            Services
          </h1>
          <p className="text-lg mt-8 text-justify p-4">
          At TechNova, we provide tailored, high-performance technology solutions designed to fuel business innovation and long-term growth.
          From secure software development and cloud infrastructure to advanced cybersecurity and digital transformation strategies, we equip organizations with the tools they need to thrive in an ever-changing digital landscape. Our mission is to deliver reliable, scalable, and future-ready services that make a real impact.
          </p>
        </div>
      </div>
      <div className="w-full mt-40">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 space-y-32">
            {Services.map((service, index) => (
              <div id={service.slug} key={index} className="text-center mt-20">
                {service.icon}
                <h1 className="mt-10 text-2xl text-cyan-700 font-bold">
                  {service.title}
                </h1>
                <p className="mt-5 text-justify text-lg p-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
