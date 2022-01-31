import React from "react";
import Contactform from "./contactform";
import Foooter from "./footer";

interface Props {}

const Contactcont = (props: Props) => {
  return (
    <div className="flex flex-col justify-end h-full">
      <Contactform />
      <Foooter />
    </div>
  );
};

export default Contactcont;
