import React from "react";
import InquiryCtx from "../contexts/inquiryCtx";
import Inquirycont from "../subcomps/inquirypg/inquirycont";

interface Props {}

const Inquiry = (props: Props) => {
  return (
    <InquiryCtx>
      <div className="w-screen h-screen absolute bg-black bg-opacity-50">
        <Inquirycont />
        <img
          src="wp2.jpg"
          alt="wp2"
          className="fixed object-cover w-screen h-screen object-center left-0 top-0 -z-10"
        />
      </div>
    </InquiryCtx>
  );
};

export default Inquiry;
