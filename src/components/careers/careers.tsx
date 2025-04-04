import Whyjoinus from "./Whyjoinus";
export default function Careers() {
  return (
    <>
      <div className="flex items-center h-[400px]">
        <div className="text-center max-w-7xl mx-auto mt-10">
          <h1 className="text-2xl text-cyan-700 font-bold mb-4 mt-20 lg:text-4xl md:text-3xl sm:text-lg">
            Join Our Team – Empower the Future with TechNova
          </h1>
          <p className="text-xl mt-8 text-justify">
            At TechNova, we’re more than just a tech company — we’re a team of
            innovators, designers, strategists, and engineers driven by a shared
            mission to shape the digital future. Whether you're passionate about
            software development, cloud solutions, cybersecurity, or user
            experience design, you'll find a place to grow, create meaningful
            impact, and collaborate with some of the brightest minds in the
            industry.
          </p>
          <p className="text-xl mt-8">
            Discover a career where your ideas matter, your skills grow, and
            your work drives change.
          </p>
        </div>
      </div>

      <Whyjoinus />
    </>
  );
}
