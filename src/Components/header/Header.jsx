import React, { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const links = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/simple-form", name: "Simple Form" },
    { id: 3, link: "/form-action", name: "Form Action" },
    { id: 4, link: "/controlled-field", name: "Controlled Field" },
    { id: 5, link: "/product-management", name: "Product Management" },
    { id: 6, link: "/family-tree", name: "Family Tree" },
  ];

  const [btnClicked, setBtnClicked] = useState(false);

  return (
    <header className="relative flex justify-end py-10 md:justify-center">
      {/* Nav menu */}
      <nav className="hidden md:block">
        <ul className="flex justify-center flex-wrap gap-x-5 gap-y-2.5">
          {links.map(({ id, link, name }) => (
            <NavLink key={id} to={link}>
              {name}
            </NavLink>
          ))}
        </ul>
      </nav>

      {/* Dropdown Nav menu */}
      <nav
        className={`absolute right-10 p-5 w-[250px] bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl transition-all duration-500 ease-in-out ${
          btnClicked
            ? "translate-y-10 opacity-100"
            : "-translate-y-52 opacity-0"
        } md:hidden`}
      >
        <ul className="flex flex-col gap-2">
          {links.map(({ id, link, name }) => (
            <NavLink key={id} to={link}>
              {name}
            </NavLink>
          ))}
        </ul>
      </nav>

      {/* Dropdown Menu Icon */}
      <div className="p-1.5 pt-0 font-bold border-2 rounded-sm rotate-90 cursor-pointer transition-all hover:text-amber-300 hover:border-amber-300 md:hidden">
        <span onClick={() => setBtnClicked(!btnClicked)}>|||</span>
      </div>
    </header>
  );
};

export default Header;
