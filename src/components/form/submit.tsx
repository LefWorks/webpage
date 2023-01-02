import classNames from "classnames";
import React from "react";

type FormInputProps = {
  text: string;
  className?: string;
  disabled?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const FormSubmit = ({
  text,
  className = "",
  disabled = false,
  ...props
}: FormInputProps) => {
  return (
    <input
      type="submit"
      value={text}
      className={classNames(
        disabled ? "bg-gray-300" : "bg-violet-600 hover:bg-violet-700",
        "text-sm md:text-base lg:text-lg p-4 font-medium rounded-md font-sans text-white drop-shadow-md",
        className,
      )}
      disabled={disabled}
      {...props}
    />
  );
};

export default FormSubmit;
