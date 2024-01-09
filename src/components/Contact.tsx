// components/Footer.tsx

import React from "react";

const Contact: React.FC = () => {
  return (
    <div id="contact">
      <div className="my-10">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Book a class with us!
        </h1>
        <div className="flex justify-center items-center">
          <form className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="0400000000"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Select Option</span>
            </label>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Pick one
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Your message"
            ></textarea>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
