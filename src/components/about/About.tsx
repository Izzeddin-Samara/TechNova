import Whoweare from "./Whoweare";
import MissionVision from "./MissionVision";
import OurValues from "./OurValues";
import OurTeam from "./OurTeam";
import OurPartnership from "./OurPartnership";





export default function About() {
  return (
    <>
      <div className="flex items-center h-[400px] mb-20">
        <div className="text-center max-w-7xl mx-auto mt-10">
          <h1 className="text-3xl text-cyan-700 font-bold mb-4 mt-40  lg:text-5xl md:text-5xl sm:text-5xl">
            About Us
          </h1>
          <p className="text-md mt-8 text-justify p-4 md:text-xl">
            At TechNova, we specialize in delivering secure, mission-critical
            technology solutions that empower businesses to innovate and grow.
            With a passion for cutting-edge development, cybersecurity, and
            digital transformation, we help organizations stay ahead in a
            rapidly evolving digital world.
          </p>
        </div>
      </div>

      <Whoweare/>
      <MissionVision/>
      <OurValues/>
      <OurTeam/>
      <OurPartnership/>
    </>
  );
}
