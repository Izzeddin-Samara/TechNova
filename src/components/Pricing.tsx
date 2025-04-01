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
        <h1 className="text-5xl font-bold text-center mt-30">Built for businesses ready to innovate</h1>
        <p className="text-center text-2xl text-gray-600 w-2/4 mx-auto mt-8">At Technova, we leverage technology to drive growth, efficiency, and security—helping businesses stay ahead in a digital world.</p>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingPlans.map((plan) => (
              <div className="bg-slate-200 p-6 space-y-8 mt-10 rounded-xl shodaw-2xl">
                <h1 className="text-5xl text-center font-bold">{plan.name}</h1>
                <p className="text-3xl text-center font-medium">
                  {plan.price} <span className="text-lg">/month</span>
                </p>

                <ul className="text-center">
                  {plan.features.map((feature, index) => (
                    <div className="flex space-x-2 text-md space-y-8">
                      <FaCheckCircle size={20} className="text-cyan-700"/>
                      <li key={index}> {feature}</li>
                    </div>
                  ))}
                </ul>
                <button className="bg-cyan-700 font-bold hover:bg-cyan-800 p-4 w-full text-2xl text-white rounded-lg focus:ring-4 focus:ring-cyan-500 cursor-pointer">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
