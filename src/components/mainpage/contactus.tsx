import React from "react";
import Contactcont from "../subcomps/contactpg/contactcont";

interface Props {}

const Contactus = (props: Props) => {
  return (
    <div className="h-screen mx-auto md:max-w-screen-sm w-screen lg:max-w-screen-xl relative">
      <Contactcont />
      <img
        src="wp2.webp"
        alt="wp2"
        className="fixed filter brightness-75 object-cover w-screen h-screen object-center left-0 top-0 -z-10"
      />
    </div>
  );
};

export default Contactus;
