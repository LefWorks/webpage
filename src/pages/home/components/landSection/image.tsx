import React from "react";

type LandImageProps = {
  src: string;
};

const LandImage = ({ src }: LandImageProps) => {
  return <img src={src} className="hidden lg:flex" />;
};

export default LandImage;
