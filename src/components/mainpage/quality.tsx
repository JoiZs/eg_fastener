import React from "react";
import Qualitycont from "../subcomps/qualitypg/qualitycont";

interface Props {}

const Quality = (props: Props) => {
  return (
    <div className="h-screen w-screen pt-12 bg-black bg-opacity-50">
      <Qualitycont />
      <img
        src="wp2.jpg"
        alt="wp2"
        className="fixed object-cover w-screen h-screen object-center left-0 top-0 -z-10"
      />
    </div>
  );
};

export default Quality;
