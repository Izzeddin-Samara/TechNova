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
      <div>
        <div>
          <h1>Why Choose us</h1>
          <FaHandshake size={50} />
        </div>

        <div></div>
        <div>
          <div>
            {points.map((point) => (
                <div>
                <h1>{point.status}</h1>
                <h3>{point.title}</h3>
                <p>
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
