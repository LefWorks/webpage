import React from "react";
import Text from "../text/text";

type FeatureProps = {
  img: string;
  title: string;
  description: string;
};

const Feature = ({ img, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img className="w-24 aspect-square object-contain" src={img} />
      <Text variant="subtitle">{title}</Text>
      <Text variant="paragraph" className="text-center">
        {description}
      </Text>
    </div>
  );
};

export default Feature;
