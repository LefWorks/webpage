import React from "react";

type FormContainerProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const FormContainer = ({ children, ...props }: FormContainerProps) => {
  return <form {...props}>{children}</form>;
};

export default FormContainer;
