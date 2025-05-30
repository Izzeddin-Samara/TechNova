import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Ali Rahman",
      position: "CEO & Founder",
      bio: "A visionary leader with over 15 years in the tech industry, Ali founded TechNova to drive innovation and digital transformation. He oversees strategic growth, partnerships, and overall company direction.",
      icon: <FcBusinessman className="mx-auto" size={50} />,
    },
    {
      name: "Sarah Malik",
      position: "Chief Technology Officer (CTO)",
      bio: "Sarah is a technology expert with a strong background in software architecture and enterprise solutions. She leads the technical teams, ensuring the adoption of the latest technologies and best practices.",
      icon: <FcBusinesswoman className="mx-auto" size={50} />,
    },
    {
      name: "Hassan Omar",
      position: "Cloud Solutions Architect",
      bio: "With deep expertise in cloud computing, Hassan designs and manages scalable, high-availability cloud environments. He helps businesses transition to the cloud while optimizing performance and security.",
      icon: <FcBusinessman className="mx-auto" size={50} />,
    },
    {
      name: "Layla Ahmed",
      position: "Cybersecurity Director",
      bio: "Layla is a cybersecurity specialist with a decade of experience in risk management, network security, and compliance. She ensures that TechNova’s solutions are secure and meet global security standards.",
      icon: <FcBusinesswoman className="mx-auto" size={50} />,
    },
    {
      name: "Zain Abbas",
      position: "UI/UX Design Lead",
      bio: "Passionate about creating seamless digital experiences, Zain leads the design team to craft visually appealing and user-friendly interfaces that enhance customer engagement and satisfaction.",
      icon: <FcBusinessman className="mx-auto" size={50} />,
    },
    {
      name: "Farah Youssef",
      position: "IT Consultant",
      bio: "Farah advises businesses on IT infrastructure, digital strategy, and process automation. She helps companies integrate technology solutions that enhance efficiency and business growth.",
      icon: <FcBusinesswoman className="mx-auto" size={50} />,
    },
    {
      name: "Kareem Zayd",
      position: "Digital Transformation Strategist",
      bio: "Kareem specializes in guiding businesses through digital evolution, helping them adopt emerging technologies, streamline workflows, and improve overall efficiency.",
      icon: <FcBusinessman className="mx-auto" size={50} />,
    },
    {
      name: "Aisha Noor",
      position: "Customer Success Manager",
      bio: "Aisha ensures clients receive maximum value from TechNova’s services. She manages client relationships, support, and onboarding to guarantee seamless experiences and long-term success.",
      icon: <FcBusinesswoman className="mx-auto" size={50} />,
    },
    {
      name: "Omar Tariq",
      position: "Partnerships & Business Development",
      bio: "Omar is responsible for forging strategic partnerships and expanding TechNova’s network. He identifies new opportunities, collaborates with industry leaders, and drives business growth.",
      icon: <FcBusinessman className="mx-auto" size={50} />,
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="max-w-6xl mx-auto mt-50">
            <h2 className="text-3xl md:text-5xl font-bold text-cyan-700 text-center mb-20">Our Team</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-lg shadow-lg mb-8"
              >
                {member.icon}
                <h1 className="font-bold text-xl">{member.name}</h1>
                <p className="italic text-sm">{member.position}</p>
                <p className="text-justify mt-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
