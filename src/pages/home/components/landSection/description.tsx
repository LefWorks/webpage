import React from "react";
import Text from "@components/text";
import Button from "@components/button";

type LandDescriptionProps = {
  onContactPress: () => void;
};

const LandDescription = ({ onContactPress }: LandDescriptionProps) => {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-5">
      <Text variant="x-title" className="text-white">
        Transform your opportunities
      </Text>
      <Text variant="paragraph" className="text-center sm:text-left text-white">
        We deliver user-oriented design, top-level development, and
        scalabletechnology to bring your idea to life.
      </Text>
      <Button onPress={onContactPress} text="Contact us" />
    </div>
  );
};

export default LandDescription;
