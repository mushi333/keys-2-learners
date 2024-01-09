import React from "react";

const About: React.FC = () => {
  return (
    <div id="about">
      <div className="container mx-auto my-10 px-6 py-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <img
              src="path_to_your_image.jpg"
              alt="About"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-2xl font-bold">About Us</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis. Quisque vitae nulla malesuada,
              auctor arcu vitae, luctus nunc. Phasellus sed lacus ut odio
              vehicula varius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
