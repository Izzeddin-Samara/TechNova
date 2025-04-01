import { FaHandshake } from "react-icons/fa";

export default function Whychooseus() {
  const points = [
    {
      status: "500+",
      title: "Projects Completed",
      description:
        "We have successfully completed over 500 projects across various industries, ensuring quality and satisfaction",
    },
    {
      status: "98%",
      title: "Client Satisfaction",
      description:
        " Our clients consistently rate us highly, demonstrating our commitment to excellent service.",
    },
    {
      status: "+10",
      title: "Years of Industry Experience",
      description:
        "With over a decade of experience, we understand the intricacies of delivering top-notch solutions.",
      
    },
    {
      status: "100+",
      title: "Happy Clients",
      description:
        "We have built long-term relationships with over 100+ satisfied clients who trust us with their projects.",
    },
  ];
  return (
    <>
      <div className="w-full mt-8">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold mb-8 mr-4">Why Choose us</h1>
          <FaHandshake size={50} />
        </div>

        <div className="w-2/4 h-2 bg-cyan-700 mx-auto mb-20"></div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ml-8">
            {points.map((point) => (
                <div className="text-center mx-auto">
                <h1 className="text-6xl font-semibold text-cyan-700">{point.status}</h1>
                <h3 className="text-md font-bold">{point.title}</h3>
                <p className="text-gray-700 mt-4 text-justify text-sm">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
