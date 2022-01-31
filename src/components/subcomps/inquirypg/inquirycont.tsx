import React from "react";
import Stepforminquiry from "./stepforminquiry";

interface Props {}

const Inquirycont = (props: Props) => {
  return (
    <div className="pt-16 lg:mx-auto max-w-screen-xl md:mx-auto md:max-w-screen-sm backdrop-blur-sm text-slate-900 h-full flex justify-center items-center">
      <Stepforminquiry />
    </div>
  );
};

export default Inquirycont;
