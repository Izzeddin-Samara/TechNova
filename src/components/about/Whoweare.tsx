
export default function Whoweare() {
  return (
    <>
      <div className="w-full bg-gray-250 p-4">
        <div className="max-w-7xl mx-auto mt-8">
          <div className="">
            <div className="flex justify-center">
              <h1 className="text-3xl lg:text-5xl text-center text-cyan-700 font-bold">
                Who we are?
              </h1>
            </div>

            <p className="text-md mt-8 text-justify md:text-xl">
              At TechNova, we are a dedicated team of technology experts with a
              deep understanding of software development, cybersecurity, cloud
              solutions, and digital transformation. With a passion for
              innovation, we work tirelessly to provide businesses with the
              tools they need to succeed in the ever-changing digital landscape.
              Our team brings a wealth of experience in developing custom
              software solutions, designing intuitive and engaging user
              interfaces, and implementing robust cybersecurity measures that
              protect businesses from digital threats. From cloud migration to
              IT consulting, we help organizations of all sizes optimize their
              technology infrastructure for better performance and growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <img className="mt-8 rounded-lg" src="office.webp" alt="office-img" />
            </div>
            <div>
              <p className="text-md mt-8 md:ml-8 mt-8 text-justify md:text-xl">
                We pride ourselves on being solution-oriented, always focused on
                delivering secure, scalable, and high-performance systems that
                meet the unique needs of each client. Whether it’s creating web
                and mobile applications, enhancing user experiences, or guiding
                businesses through their digital transformation journey, we are
                committed to offering innovative and reliable solutions. Our
                team thrives on collaboration, working closely with clients to
                understand their challenges and deliver tailored solutions that
                make a real impact. We value transparency, integrity, and
                excellence, ensuring that every project we undertake is executed
                to the highest standards. At TechNova, we don’t just build
                software—we build long-lasting partnerships that help businesses
                grow, adapt, and thrive in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
