import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full p-16 mt-32">
      <div className="flex flex-col items-start justify-items-center max-w-screen-2xl w-full grid sm:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-sans font-semibold text-left">
            Great Logo
          </h3>
          <p className="pt-8 text-lg font-sans font-medium text-left max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-sans font-semibold text-left">
            Our Company
          </h3>
          <ul className="pt-8 list-disc list-inside">
            <li className="text-lg font-sans font-medium text-left">
              About us
            </li>
            <li className="text-lg font-sans font-medium text-left">
              Services
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
