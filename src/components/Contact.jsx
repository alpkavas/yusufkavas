import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephoneOutbound } from "react-icons/bs";

function Contact() {
  return (
    <footer
      className="flex flex-col items-center bg-neutral-900 text-center text-white h-full"
      id="contact">
      <div className="container px-6 pt-6 flex lg:justify-between lg:flex-row flex-col ">
        <div className="mb-6 flex justify-center">
          <a
            href="https://twitter.com/kavas_yusuf"
            type="button"
            className="m-1 h-8 w-[2rem]  rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init=""
            data-te-ripple-color="light">
            <RiTwitterXFill size={28} className="p-1" />
          </a>
          <a
            href="#!"
            type="button"
            className=" m-1 h-8 w-[2rem] rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init=""
            data-te-ripple-color="light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-[1rem]"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            href="mailto:yusuf.kavas@amasya.edu.tr"
            type="button"
            className="animate-bounce hover:animate-none m-1 h-8 w-[2rem]  rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init=""
            data-te-ripple-color="light">
            <TfiEmail size={28} className="p-1" />
          </a>
        </div>
        <p className="text-center">
          Yunus Emre Mahallesi Şehit Özsaraç Caddesi No:98 A blok 05300
          Merzifon/Amasya
        </p>
        <div className="w-[10rem] justify-center items-center md:m-0 mt-4 mb-4  ">
          <button
            type="button"
            className="md:w-[18rem] w-[21rem]  rounded-lg py-[.25rem] px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex justify-around items-center">
            <BsTelephoneOutbound />
            <a href="tel:358"> 0 (358) 211 50 23</a>
            <div className="bg-pink-100 rounded-lg text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5    dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
              <span className="mr-1">Dahili:</span>3782
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
