import React from "react";

type ContactContainerProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const ContactContainer = ({ children, ...props }: ContactContainerProps) => {
  return (
    <section
      {...props}
      className="flex items-center justify-center w-full px-16 pt-32"
    >
      <div className="flex flex-col items-center max-w-screen-xl w-full gap-2">
        {children}
      </div>
    </section>
  );
};

export default ContactContainer;
