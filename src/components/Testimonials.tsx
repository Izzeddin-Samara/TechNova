import { FaQuoteLeft } from "react-icons/fa";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";

export default function Testimonials () {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO, Digital Solutions Inc.",
      feedback:
        "Technova’s cloud solutions have transformed our infrastructure. We now have a more scalable, secure, and efficient environment. Their expertise in IT consulting helped us navigate complex challenges.",
      icon: <FcBusinessman className="mx-auto" size={100} />,
    },
    {
      name: "Jane Smith",
      title: "Head of Product Development, InnovateTech",
      feedback:
        "The UI/UX design services from Technova completely elevated our product. Their team took the time to understand our users and delivered a seamless experience that increased customer engagement.",
      icon: <FcBusinesswoman className="mx-auto" size={100} />,
    },
    {
      name: "Emily Lee",
      title: "CTO, Future Enterprises",
      feedback:
        "The digital transformation journey we embarked on with Technova has been nothing short of incredible. Their expertise in IT consulting guided us through the complexities of modernizing our systems.",
      icon: <FcBusinesswoman className="mx-auto" size={100} />,
    },
    {
      name: "Samuel Brown",
      title: "Chief Information Security Officer, SecureCorp",
      feedback:
        "With Technova's cybersecurity services, we’ve been able to strengthen our defenses against cyber threats. Their proactive approach ensures our systems remain protected at all times, giving us peace of mind.",
      icon: <FcBusinessman className="mx-auto" size={100} />,
    },
    {
      name: "Michael Green",
      title: "Founder, GreenTech Innovations",
      feedback:
        " Technova helped us build a customized software solution that has significantly improved our operations. Their team not only delivered on time but also provided strategic advice that has propelled our business forward.",
      icon: <FcBusinessman className="mx-auto" size={100} />,
    },
    {
      name: "Olivia Martin",
      title: "Senior Manager, GlobalTech Consulting",
      feedback:
        "Working with Technova was a game-changer for our digital strategies. Their insights into cloud services and digital transformation have optimized our processes and boosted our ability to scale",
      icon: <FcBusinesswoman className="mx-auto" size={100} />,
    },
  ];

  return (
    <>
      <div>
        <div>
          <h1>Testimonials</h1>
          <FaQuoteLeft size={60} />
        </div>
        <div></div>

        <p>
          We Have Earned the trust of Our Most
          <span>
            Valuable Customers
          </span>
        </p>
        <div>
          <div>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                
              >
                {testimonial.icon}
                <h1>{testimonial.name}</h1>
                <p>{testimonial.title}</p>
                <p>{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


