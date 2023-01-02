import Text from "@components/text";
import React from "react";

type FeatureItemsProps = {
  features: {
    img: string;
    title: string;
    description: string;
  }[];
};

const FeatureItems = ({ features }: FeatureItemsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-16">
      {features.map(feature => (
        <div className="flex flex-col items-center gap-4" key={feature.title}>
          <img
            className="w-24 aspect-square object-contain"
            src={feature.img}
          />
          <Text variant="subtitle">{feature.title}</Text>
          <Text variant="paragraph" className="text-center text-slate-500">
            {feature.description}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default FeatureItems;
