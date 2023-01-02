import React from "react";

type AboutUsImageProps = {
  src: string;
};

const AboutUsImage = ({ src }: AboutUsImageProps) => {
  return <img src={src} className="flex" />;
};

export default AboutUsImage;
