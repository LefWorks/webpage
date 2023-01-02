import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMenuOutline } from "react-icons/io5";
import classNames from "classnames";
import { useScrollPosition } from "../../utils";
import Logo from "@components/logo";

type NavbarProps = {
  onBrandTo: string;
  options: {
    title: string;
    to: string;
  }[];
};

const Navbar = ({ onBrandTo, options }: NavbarProps) => {
  const scrollPosition = useScrollPosition();
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav
      className={classNames(
        scrollPosition > 0 ? "bg-indigo-700" : "",
        "flex flex-col fixed top-0 z-10 items-center justify-center w-full",
      )}
    >
      <section className={"flex p-8 w-full max-w-screen-xl"}>
        <Link to={onBrandTo} smooth={true} className="cursor-pointer">
          <Logo />
        </Link>
        <div className="hidden flex-1 justify-end items-center gap-10 md:flex">
          {options.map(option => (
            <Link
              className="font-sans text-xl text-white cursor-pointer"
              to={option.to}
              smooth={true}
              key={option.title}
            >
              {option.title}
            </Link>
          ))}
        </div>
        <div className="flex-1 flex justify-end md:hidden">
          <IoMenuOutline
            color={"white"}
            size={32}
            onClick={() => setOpenNav(open => !open)}
          />
        </div>
      </section>

      <section
        className={classNames(
          !openNav ? "hidden" : "",
          "flex flex-col w-full px-12 py-4 gap-10 items-start",
        )}
      >
        {options.map(option => (
          <Link
            className="font-sans text-xl text-white cursor-pointer"
            to={option.to}
            smooth={true}
            key={option.title}
          >
            {option.title}
          </Link>
        ))}
      </section>
    </nav>
  );
};

export default Navbar;
