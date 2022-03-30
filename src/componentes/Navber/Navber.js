 
import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navber = () => {
  const [open, setMenu] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Product", link: "/product" },
    { id: 3, name: "Deals", link: "/deals" },
    { id: 4, name: "Order", link: "/order" },
    { id: 5, name: "About", link: "/about" },
  ];
  return (
    <div>
      {/* <h1>amr bal</h1> */}
      <nav className="bg-slate-400">
        <div onClick={() => setMenu(!open)} className="h-6 w-6 md:hidden  ">
          {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>

        <ul
          className={`md:flex justify-center bg-slate-400 w-full	 absolute md:static duration-500 ease-in ${
            open ? "top-6" : "top-[-130px]"
          }`}
        >
          {routes.map((route) => (
            <Link route={route} key={route.id}></Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
