import React from "react";
import Contactform from "./contactform";
import Foooter from "./footer";

interface Props {}

const Contactcont = (props: Props) => {
  return (
    <div className="flex flex-col justify-end h-full 2xl:max-w-screen-2xl">
      <Contactform />
      <Foooter />
    </div>
  );
};

export default Contactcont;
