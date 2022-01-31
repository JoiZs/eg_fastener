import React from "react";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

interface Props {}

const Foooter = (props: Props) => {
  return (
    <footer className=" flex items-end bottom-0 w-full pb-8">
      <div className="max-w-screen-xl list-none mx-auto px-4">
        <li className="my-2 text-center">© 2022 []. All rights reserved.</li>
        <ul className="max-w-screen-md gap-3 mx-auto text-xs md:text-sm font-light flex flex-wrap justify-around">
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="---"
            >
              FAQ
            </a>
          </li>

          <li className="my-2">
            <a
              className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="---"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a href="https://social" className="hover:opacity-50">
            <FaFacebookF />
          </a>
          <a href="https://social" className="hover:opacity-50">
            <BsGoogle />
          </a>
          <a href="https://social" className="hover:opacity-50">
            <FaTwitter />
          </a>
          <a href="https://social" className="hover:opacity-50">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Foooter;
