import React, { useState } from "react";
import Logo from "../components/Logo";
import { MdOutlineSchool } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-[3rem] my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <>
      <nav className="flex justify-between md:px-20 md:py-10 items-center bg-white px-5">
        <Logo />
        <button
          className="flex flex-col rounded justify-center items-center group md:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
        <ul className="md:flex md:items-center md:space-x-6 hidden">
          <li className="font-semibold text-gray-700 p-1 hover:bg-gray-100 rounded">
            <a href="#about">Hakkında</a>
          </li>
          <li className="font-semibold text-gray-700 p-1 hover:bg-gray-100 rounded">
            <a href="#articles">Makaleler</a>
          </li>
          <li className="font-semibold text-gray-700 p-1 hover:bg-gray-100 rounded">
            <a href="#books">Kitaplar</a>
          </li>
          <li className="font-semibold">
            <a
              href="#notes"
              className="flex text-gray-700 p-1 hover:bg-gray-100 rounded">
              <MdOutlineSchool size={24} />
              Ders Notlarım
            </a>
          </li>
          <li className="font-semibold">
            <a
              href="#contact"
              className="flex text-gray-700 p-1 hover:bg-gray-100 rounded">
              <AiOutlineMail size={24} />
              İletişim
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`flex items-center justify-center h-64 bg-gray-300 ${
          isOpen ? "" : "hidden"
        }`}>
        <ul className="md:flex md:items-center md:space-x-6">
          <li className="font-semibold text-gray-700 p-1 hover:bg-gray-100 rounded">
            <a href="#about">Hakkında</a>
          </li>
          <li className="font-semibold text-gray-700 p-1 hover:bg-gray-100 rounded">
            <a href="#articles">Makaleler</a>
          </li>
          <li className="font-semibold text-gray-700 p-1 hover:bg-gray-100 rounded">
            <a href="#books">Kitaplar</a>
          </li>
          <li className="font-semibold">
            <a
              href="#notes"
              className="flex text-gray-700 p-1 hover:bg-gray-100 rounded">
              <MdOutlineSchool size={24} />
              Ders Notlarım
            </a>
          </li>
          <li className="font-semibold">
            <a
              href="#contact"
              className="flex text-gray-700 p-1 hover:bg-gray-100 rounded">
              <AiOutlineMail size={24} />
              İletişim
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
