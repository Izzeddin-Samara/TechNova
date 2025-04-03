import Whoweare from "./whoweare";





export default function About() {
  return (
    <>
      <div className="flex items-center h-[400px]">
        <div className="text-center max-w-7xl mx-auto mt-10">
          <h1 className="text-2xl text-cyan-700 font-bold mb-4 mt-20 lg:text-5xl md:text-3xl sm:text-lg">
            About Us
          </h1>
          <p className="text-xl mt-8 text-justify">
            At TechNova, we specialize in delivering secure, mission-critical
            technology solutions that empower businesses to innovate and grow.
            With a passion for cutting-edge development, cybersecurity, and
            digital transformation, we help organizations stay ahead in a
            rapidly evolving digital world.
          </p>
        </div>
      </div>

      <Whoweare/>
    </>
  );
}
