import React from "react";
import WaveTop from "./waveTop";

type FeatureContainerProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const FeatureContainer = ({ children, ...props }: FeatureContainerProps) => {
  return (
    <section
      {...props}
      className="relative flex flex-col items-center justify-center w-full px-16 bg-indigo-100"
    >
      <div className="flex flex-col items-center max-w-screen-xl w-full gap-2 p-4">
        {children}
      </div>
      <WaveTop />
    </section>
  );
};

export default FeatureContainer;
