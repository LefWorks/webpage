import React from "react";
import AboutImg from "../../assets/about_img.svg";
import Text from "../text";

const AboutUsSection = () => {
  return (
    <div id="about" className="flex items-center justify-center w-full p-16">
      <div className="grid lg:grid-cols-2 justify-items-center items-center max-w-screen-2xl w-full gap-5">
        <div className="flex flex-col items-center lg:items-start space-y-5">
          <Text variant="title">How are we different?</Text>
          <Text variant="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </Text>
        </div>

        <img src={AboutImg} className="flex" />
      </div>
    </div>
  );
};

export default AboutUsSection;
