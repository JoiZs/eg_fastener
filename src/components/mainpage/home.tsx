import React from "react";
import Homecont from "../subcomps/homepg/homecont";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="text-white  h-screen relative">
      <Homecont
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        subt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error quas officia nemo magnam pariatur voluptas totam odit minus?"
      />
      <img
        className="fixed pointer-events-none w-screen h-screen object-cover object-left left-0 top-0 -z-10"
        src="wp.jpg"
        alt="home"
      />
      <div className="flex absolute opacity-30 bottom-10 right-8 lg:right-40 flex-col justify-center items-center">
        <img
          className="w-16 filter brightness-75 p-2 border md:w-20"
          src="iso-2-1.svg"
          alt="iso"
        />
        <span className="bg-white w-16 md:w-20 text-black text-center text-xs md:text-sm">
          9001:2008
        </span>
      </div>
      <div className="flex absolute text-base gap-2 opacity-30 bottom-10 left-8 lg:left-40 flex-row justify-center items-center">
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
  );
};

export default Home;
