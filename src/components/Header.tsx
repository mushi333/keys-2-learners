import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-semibold">
            <a className="" href="/">
              Keys 2 Learners
            </a>
          </h1>
          <ul className="flex space-x-4">
            <li>
              <a className="text-white hover:text-gray-300" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
