import React from "react";

type AboutUsContainerProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const AboutUsContainer = ({ children, ...props }: AboutUsContainerProps) => {
  return (
    <section
      {...props}
      className="relative flex items-center justify-center w-full px-16 pt-32"
    >
      <div className="relative grid lg:grid-cols-2 justify-items-center items-center max-w-screen-xl w-full gap-5">
        {children}
      </div>
    </section>
  );
};

export default AboutUsContainer;
