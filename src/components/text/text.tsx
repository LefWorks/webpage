import classNames from "classnames";
import React from "react";

type TextProps = {
  variant: "x-title" | "title" | "subtitle" | "paragraph";
  children: string | number;
  className?: string;
};

type TextCompProps = {
  text: string | number;
  style?: string;
};

const Text = ({ variant, children, className }: TextProps) => {
  const BASE_STYLE = "font-sans max-w-lg lg:max-w-2xl";

  const COMPONENTS = {
    "x-title": ({ text, style = "" }: TextCompProps) => (
      <h2
        className={classNames(
          BASE_STYLE,
          "text-2xl md:text-4xl lg:text-6xl font-semibold text-center lg:text-left",
          style,
        )}
      >
        {text}
      </h2>
    ),

    title: ({ text, style = "" }: TextCompProps) => (
      <h3
        className={classNames(
          BASE_STYLE,
          "text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:text-left",
          style,
        )}
      >
        {text}
      </h3>
    ),

    subtitle: ({ text, style = "" }: TextCompProps) => (
      <h3
        className={classNames(
          BASE_STYLE,
          "text-lg md:text-xl lg:text-2xl font-medium text-center",
          style,
        )}
      >
        {text}
      </h3>
    ),

    paragraph: ({ text, style = "" }: TextCompProps) => (
      <p
        className={classNames(
          BASE_STYLE,
          "pt-4 text-sm md:text-base lg:text-lg font-normal",
          style,
        )}
      >
        {text}
      </p>
    ),
  };

  return COMPONENTS[variant]({ text: children, style: className });
};

export default Text;
