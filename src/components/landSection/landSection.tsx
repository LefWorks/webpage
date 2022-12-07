import React from "react";
import { scroller } from "react-scroll";
import Button from "../button";
import Text from "../text";

type LandSectionProps = {
  backgroundImage: string;
};

const LandSection = ({ backgroundImage }: LandSectionProps) => {
  return (
    <div
      id="content"
      className="flex items-center justify-center h-screen w-full p-16"
    >
      <div className="grid lg:grid-cols-2 justify-items-center items-center max-w-screen-2xl w-full gap-5">
        <div className="flex flex-col items-center lg:items-start space-y-5">
          <Text variant="x-title">Transform your opportunities</Text>
          <Text variant="paragraph" className="text-center sm:text-left">
            We deliver user-oriented design, top-level development, and scalable
            technology to bring your idea to life.
          </Text>
          <Button
            onPress={() =>
              scroller.scrollTo("contact", {
                duration: 1500,
                delay: 100,
                smooth: true,
              })
            }
            text={"Contact us"}
          />
        </div>
        <img src={backgroundImage} className="flex" />
      </div>
    </div>
  );
};

export default LandSection;
