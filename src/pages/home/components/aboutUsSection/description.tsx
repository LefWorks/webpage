import Text from "@components/text";
import React from "react";

const AboutUsDescription = () => {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-5">
      <Text variant="title">How are we different?</Text>
      <Text variant="paragraph" className="text-slate-500">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industrys standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book.
      </Text>
    </div>
  );
};

export default AboutUsDescription;
