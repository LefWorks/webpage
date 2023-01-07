import Text from "@components/text";
import React from "react";

const AboutUsDescription = () => {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-5">
      <Text variant="title">How are we different?</Text>
      <Text variant="paragraph" className="text-slate-500">
        We like to think of ourselves as problem solvers first, and software
        developers second. We offer a highly personalized experience to approach
        any domain, and deliver a solution that will work now, and in the
        future. Through our proven, battle tested development process we can
        guarantee the projects we embark on will never have technical issues and
        will be 99.9% bug free. Contact us now.
      </Text>
    </div>
  );
};

export default AboutUsDescription;
