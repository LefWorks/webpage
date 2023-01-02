import React from "react";
import Wave from "./wave";

type LandContainerProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const LandContainer = ({ children, ...props }: LandContainerProps) => {
  return (
    <section
      {...props}
      className="flex flex-col relative items-center justify-center h-screen w-full px-16 bg-gradient-to-r from-indigo-600 to-indigo-500"
    >
      <div className="absolute opacity-5 bg-[url('/background/scatter.svg')] bg-cover bg-no-repeat w-full h-full" />

      <div className="relative grid lg:grid-cols-2 justify-items-center items-center max-w-screen-xl w-full gap-5">
        {children}
      </div>
      <Wave />
    </section>
  );
};

export default LandContainer;
