import gsap from "gsap";
import React, { useEffect } from "react";
import { BsNutFill } from "react-icons/bs";
// import SyncLoader from "react-spinners/SyncLoader";

interface Props {}

const Loading = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      "#loadingtext",
      { color: "rgb(69 60 219)" },
      {
        color: "rgb(89 80 239)",
        duration: 0.8,
        repeat: 99,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      "#nutIcon",
      { rotation: 0, opacity: 0.8 },
      { rotation: 45, repeat: 99, ease: "step.inOut", opacity: 1 }
    );
  });
  return (
    <div className="w-screen bg-black h-screen flex flex-col justify-center items-center">
      {/* <SyncLoader speedMultiplier={0.7} /> */}
      <BsNutFill id="nutIcon" className="text-4xl text-indigo-600" />
      <br />
      <span id="loadingtext" className="text-white">
        Loading
      </span>
    </div>
  );
};

export default Loading;
