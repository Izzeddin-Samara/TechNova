import { FaWpforms } from "react-icons/fa6";


export default function ApplicationForm() {
  return (
    <>
      <div>
        <div>
          <div>
            <h1>
              Application Form
            </h1>
            <p>
              We're excited that you're interested in joining our team!
            </p>
            <p>
              Please fill out the application form below, and we’ll be in touch
              soon
            </p>
          </div>
          <div>
            <div>
              <img src="join.png" alt="" />
            </div>
            <div>
              <form>
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                  />
                </div>
                <div>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <label>Mobile Number</label>
                  <input
                    type="number"
                  />
                </div>
                <div>
                  <label>CV</label>
                  <input
                    type="file"
                  />
                </div>
                <button >
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
