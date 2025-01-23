import React from "react";
import logo from "../assets/logo.svg";
import Button from "../Utilities/Button";

export default function Nav() {
  return (
    <nav className="p-4 flex justify-between items-center shadow-lg">
      <img className="max-h-7" src={logo} alt="" />
      <div>
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
    </nav>
  );
}
