import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Startup",
      price: "$99",
      description:
        "Perfect for startups and small businesses looking for a strong digital foundation.",
      features: [
        "Custom Web & Mobile App Development",
        "UI/UX Design Consultation",
        "Cloud Hosting & Deployment",
        "Basic IT Consulting",
        "Essential Cybersecurity Measures",
        "Email Support & Maintenance",
        " Basic Digital Transformation",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Growth",
      price: "$199",
      description:
        "Designed for growing businesses that need scalable solutions and security.",
      features: [
        "Full-Scale Software Development",
        "Advanced UI/UX Prototyping",
        "Cloud Optimization & Migration",
        "IT Strategy & Consulting",
        "Enhanced Cybersecurity Protection",
        "24/7 Priority Support",
        "Digital Transformation Roadmap",
      ],
      buttonText: "Upgrade Now",
    },
    {
      name: "Enterprise",
      price: "$399",
      description:
        "Tailored for large enterprises with complex IT needs and digital transformation goals.",
      features: [
        "Enterprise-Level Software Development",
        "Full UI/UX Product Design",
        "Private & Hybrid Cloud Solutions",
        "Dedicated IT Consulting & Strategy",
        "Advanced Cybersecurity & Compliance",
        " AI-Powered Digital Transformation",
        "On-Demand Development & Support",
      ],
      buttonText: "Contact Us",
    },
  ];
  return (
    <>
      <div>
        <h1>Built for businesses ready to innovate</h1>
        <p>At Technova, we leverage technology to drive growth, efficiency, and security—helping businesses stay ahead in a digital world.</p>
        <div>
          <div>
            {pricingPlans.map((plan) => (
              <div>
                <h1>{plan.name}</h1>
                <p>
                  {plan.price} <span>/month</span>
                </p>

                <ul>
                  {plan.features.map((feature, index) => (
                    <div>
                      <FaCheckCircle/>
                      <li key={index}> {feature}</li>
                    </div>
                  ))}
                </ul>
                <button>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
