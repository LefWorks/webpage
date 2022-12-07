import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMenuOutline } from "react-icons/io5";
import classNames from "classnames";
import { useScrollPosition } from "../../utils";

type NavbarProps = {
  brandTo: string;
  servicesTo: string;
  aboutTo: string;
  contactTo: string;
};

const Navbar = ({ brandTo, servicesTo, aboutTo, contactTo }: NavbarProps) => {
  const scrollPosition = useScrollPosition();
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav
      className={classNames(
        scrollPosition > 0
          ? "bg-sky-100 border-b-2 border-sky-200"
          : "bg-white",
        "flex flex-col fixed top-0 z-10 items-center justify-center w-full",
      )}
    >
      <div className={"flex p-8 w-full max-w-screen-2xl"}>
        <Link
          className="font-sans text-2xl text-black"
          to={brandTo}
          smooth={true}
        >
          Great Logo
        </Link>
        <div className="hidden flex flex-1 justify-end gap-10 lg:inline-flex">
          <Link
            className="font-sans text-2xl text-black"
            to={servicesTo}
            smooth={true}
          >
            Services
          </Link>
          <Link
            className="font-sans text-2xl text-black"
            to={aboutTo}
            smooth={true}
          >
            About us
          </Link>
          <Link
            className="font-sans text-2xl text-black"
            to={contactTo}
            smooth={true}
          >
            Contact
          </Link>
        </div>
        <div className="flex-1 flex justify-end lg:hidden">
          <IoMenuOutline size={32} onClick={() => setOpenNav(open => !open)} />
        </div>
      </div>

      <div
        className={classNames(
          !openNav ? "hidden" : "",
          "flex flex-col w-full border-b-2 px-12 py-4 gap-10 items-start",
        )}
      >
        <Link
          className="font-sans text-2xl text-black"
          to={servicesTo}
          smooth={true}
        >
          Services
        </Link>
        <Link
          className="font-sans text-2xl text-black"
          to={aboutTo}
          smooth={true}
        >
          About us
        </Link>
        <Link
          className="font-sans text-2xl text-black"
          to={contactTo}
          smooth={true}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
