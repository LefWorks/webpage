import classNames from "classnames";
import React from "react";

type ButtonProps = {
  text: string;
  onPress: () => void;
  className?: string;
};

const Button = ({ text, onPress, className }: ButtonProps) => {
  return (
    <button
      onClick={onPress}
      className={classNames(
        "text-sm md:text-lg lg:text-xl p-4 bg-sky-500 hover:bg-sky-600 font-medium rounded-md font-sans text-white",
        className,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
