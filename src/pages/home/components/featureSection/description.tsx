import Text from "@components/text";
import React from "react";

const FeatureDescription = () => {
  return (
    <>
      <Text variant="subtitle" className="text-sky-800 tracking-wider">
        Services
      </Text>
      <Text variant="title">Some of our best services</Text>
      <Text variant="paragraph" className="text-center text-slate-500">
        We offer a wide variety of solutions adapted to the nature of the
        business that you carry out. We focus on simplifying and automating your
        complex processes.
      </Text>
    </>
  );
};

export default FeatureDescription;
