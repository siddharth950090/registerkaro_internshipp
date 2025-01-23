import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "../Utilities/Button";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="p-4 flex justify-between items-center shadow-lg" >
      <img className="max-h-7" src={logo} alt="" />
      <div className="hidden md:flex">
        <ul className="flex items-center gap-4">
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Services">
              Our Services
              <span className="px-1">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="/Blog">Blog</a>
          </li>
          <li>
            <a href="/Contact">Contact Us</a>
          </li>
          <li>
            <a href="/About">About Us</a>
          </li>
          <li className="cursor-pointer">
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <Button color="bg-[#FFA229] " text="Talk an Expert" />
        </ul>
      </div>
      <div className="px-4 md:hidden flex gap-4 relative" >
        <i className="fa-solid fa-magnifying-glass" ></i>
        <i class="fa-solid fa-bars "  onClick={() => menu? setMenu(false):  setMenu(true)}></i>
        <ul className={` right-2 top-6 py-4 w-28 bg-black text-white rounded-xl ${menu? 'absolute': 'hidden'}`}>
          <li className="hover:bg-blue-700 px-4">Home</li>
          <li className="hover:bg-blue-700 px-4">Our Services</li>
          <li className="hover:bg-blue-700 px-4">Blog</li>
          <li className="hover:bg-blue-700 px-4">Contact Us</li>
        </ul>

      </div>
    </nav>
  );
}
