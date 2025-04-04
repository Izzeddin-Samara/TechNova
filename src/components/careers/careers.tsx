import Whyjoinus from "./Whyjoinus";
import ApplicationForm from "./ApplicationForm";
export default function Careers() {
  return (
    <>
      <div className="flex items-center h-[400px] mb-70">
        <div className="text-center max-w-7xl mx-auto mt-50">
          <h1 className="text-lg md:text-2xl text-cyan-700 font-bold mb-4 mt-40 lg:text-4xl md:text-3xl sm:text-lg">
            Join Our Team – Empower the Future with TechNova
          </h1>
          <p className="text-md md:text-xl p-4 mt-8 text-justify">
            At TechNova, we’re more than just a tech company — we’re a team of
            innovators, designers, strategists, and engineers driven by a shared
            mission to shape the digital future. Whether you're passionate about
            software development, cloud solutions, cybersecurity, or user
            experience design, you'll find a place to grow, create meaningful
            impact, and collaborate with some of the brightest minds in the
            industry.
          </p>
          <p className="text-md md:text-xl mt-8 p-4 ">
            Discover a career where your ideas matter, your skills grow, and
            your work drives change.
          </p>
        </div>
      </div>

      <Whyjoinus />
      <ApplicationForm/>
    </>
  );
}
