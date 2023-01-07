import React from "react";
import Logo from "../../assets/logo.svg";
import WaveBottom from "./waveBottom";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center w-full p-4 mt-32 bg-indigo-700">
      <WaveBottom />

      <section className="items-start justify-items-center max-w-screen-xl w-full grid sm:grid-cols-2 gap-10">
        <div>
          <img src={Logo} className="w-48" />
          <p className="pt-8 text-lg font-sans font-medium text-left max-w-xl text-slate-200">
            Creating great applications, for great businesses.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-sans font-semibold text-left text-slate-200">
            Our Company
          </h3>
          <ul className="pt-8 list-disc list-inside">
            <li className="text-lg font-sans font-medium text-left text-slate-200">
              About us
            </li>
            <li className="text-lg font-sans font-medium text-left text-slate-200">
              Services
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
