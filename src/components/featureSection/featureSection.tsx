import React from "react";
import Feature from "../feature";
import Text from "../text";

type FeatureSectionProps = {
  features: {
    img: string;
    title: string;
    description: string;
  }[];
};

const FeatureSection = ({ features }: FeatureSectionProps) => {
  return (
    <div
      id="services"
      className="flex items-center justify-center w-full py-16"
    >
      <div className="flex flex-col items-center max-w-screen-2xl w-full gap-2 p-16">
        <h4 className="text-lg md:text-xl lg:text-2xl text-sky-800 font-sans font-medium tracking-wider max-w-2xl text-center">
          Services
        </h4>
        <Text variant="title">Some of our best services</Text>
        <Text variant="paragraph" className="text-center">
          We offer a wide variety of solutions adapted to the nature of the
          business that you carry out. We focus on simplifying and automating
          your complex processes.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-16">
          {features.map(feature => (
            <Feature
              key={feature.title}
              img={feature.img}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
