const ApplicationForm: React.FC = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Your form submission logic (if any)
      };
  return (
    <>
      <div className="w-full mt-60 p-8">
        <div className="max-w-8xl mx-auto">
          <div className="mb-20 text-center">
            <h1 className="text-center text-2xl md:text-4xl text-cyan-700 font-bold mb-10">
              Application Form
            </h1>
            <p className="text-sm md:text-xl">
              We're excited that you're interested in joining our team!
            </p>
            <p className="text-sm md:text-xl">
              Please fill out the application form below, and we’ll be in touch
              soon
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <img src="join.png" alt="application-img" />
            </div>
            <div className="mt-20">
              <form onSubmit={handleSubmit} className="space-y-8 w-4/4 mx-auto md:w-3/4">
                <div>
                  <label className="text-sm md:text-xl ">Full Name</label>
                  <input
                    className="w-full p-3 bg-gray-100 outline-none border border-gray-300 rounded-lg mt-2 focus:ring-3 focus:ring-cyan-600"
                    type="text"
                  />
                </div>
                <div>
                  <label className="text-sm md:text-xl">Email Address</label>
                  <input
                    className="w-full p-3 bg-gray-100 outline-none border border-gray-300 rounded-lg mt-2 focus:ring-3 focus:ring-cyan-600"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <label className="text-sm md:text-xl">Mobile Number</label>
                  <input
                    className="w-full p-3 bg-gray-100 outline-none border border-gray-300 rounded-lg mt-2 focus:ring-3 focus:ring-cyan-600"
                    type="number"
                  />
                </div>
                <div>
                  <label className="text-sm md:text-xl">CV</label>
                  <input
                    className="w-full p-3 bg-gray-100 outline-none border border-gray-300 rounded-lg mt-2 focus:ring-3 focus:ring-cyan-600"
                    type="file"
                  />
                </div>
                <button type="submit" className=" w-full bg-cyan-700 hover:bg-cyan-800 text-white p-4 rounded-lg font-bold focus:ring-4 focus:ring-cyan-500 cursor-pointer text-xl">
                  Apply
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ApplicationForm;