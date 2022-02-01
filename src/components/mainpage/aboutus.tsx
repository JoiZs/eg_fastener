import React from "react";
import About from "../subcomps/aboutpg/aboutcont";

interface Props {}

const Aboutus = (props: Props) => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <About />
      <img
        src="wp2.jpg"
        alt="wp2"
        className="fixed filter brightness-75 object-cover w-screen h-screen object-center left-0 top-0 -z-10"
      />
    </div>
  );
};

export default Aboutus;
