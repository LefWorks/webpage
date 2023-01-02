import classNames from "classnames";
import React from "react";

type ButtonProps = {
  text: string;
  onPress: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};

const Button = ({ text, onPress, className }: ButtonProps) => {
  return (
    <button
      onClick={onPress}
      className={classNames(
        "text-sm md:text-base lg:text-lg p-4 bg-violet-600 hover:bg-violet-700 font-medium rounded-md font-sans text-white drop-shadow-md",
        className,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
