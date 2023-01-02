import React from "react";

type FormAreaProps = {
  title: string;
  placeholder?: string;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const FormArea = ({ title, placeholder, ...props }: FormAreaProps) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block mb-2 font-sans text-lg font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <textarea
        id="email"
        rows={6}
        className="resize-none bg-gray-50 font-sans text-lg border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        required
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default FormArea;
