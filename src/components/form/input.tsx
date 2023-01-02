import React from "react";

type FormInputProps = {
  title: string;
  placeholder?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const FormInput = ({ title, placeholder, ...props }: FormInputProps) => {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 font-sans text-lg font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <input
        type="text"
        id={title}
        className="bg-gray-50 font-sans text-lg border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
        {...props}
      />
    </div>
  );
};

export default FormInput;
