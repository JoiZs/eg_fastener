import gsap from "gsap";
import React, { useEffect } from "react";
import {
  SiAudi,
  SiLamborghini,
  SiPorsche,
  SiSeat,
  SiVolkswagen,
} from "react-icons/si";
import Certislider from "./certislider";
import QualityClient from "./qualclient";
import { AiOutlineProject } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineFeedback } from "react-icons/md";

interface Props {}

const Qualitycont = (props: Props) => {
  const clients = [
    { name: "Lamborghini", icon: SiLamborghini, extracss: "" },
    { name: "Audi", icon: SiAudi, extracss: "" },
    { name: "Seat", icon: SiSeat, extracss: "" },
    { name: "Volkswagen", icon: SiVolkswagen, extracss: "" },
    { name: "Porsche", icon: SiPorsche, extracss: "col-span-2" },
  ];
  useEffect(() => {
    gsap.fromTo(
      "#qualitytext",
      { opacity: 0, translateY: 10 },
      { translateY: 0, opacity: 1, delay: (i) => i * 0.8 }
    );
    gsap.fromTo(
      "#certslider",
      { opacity: 0, translateX: -20 },
      { translateX: 0, opacity: 1, delay: 0.8 }
    );
    gsap.fromTo(
      "#brandlogo",
      { translateY: 10, opacity: 0 },
      {
        translateY: 0,
        opacity: 1,
        delay: (i) => {
          return i * 0.3;
        },
      }
    );
  }, []);
  return (
    <div className="flex lg:mx-auto max-w-screen-xl flex-col w-full h-full">
      <div className="h-3/4 px-8 flex flex-col justify-around ">
        <h1
          id="qualitytext"
          className="tracking-widest uppercase text-2xl md:text-4xl font-semibold "
        >
          Certificates, <br />
          <span id="qualitytext" className="text-indigo-400 text-sm md:text-xl">
            by "Company"
          </span>
        </h1>
        <div className="lg:grid grid-cols-2">
          <div
            id="certslider"
            className="flex sm:p-10 justify-center opacity-0"
          >
            <Certislider />
          </div>
          <div className=" hidden lg:flex gap-5 flex-row opacity-70 justify-center items-center">
            <QualityClient
              title="Projects"
              count="100K"
              icon={AiOutlineProject}
            />
            <QualityClient
              title="Services"
              count="10+"
              icon={RiCustomerService2Line}
            />
            <QualityClient
              title="Feedbacks"
              count="Best"
              icon={MdOutlineFeedback}
            />
          </div>
        </div>
        <div className=" lg:hidden">
          <h1 className="uppercase text-center text-2xl">
            Certificate of ....{" "}
          </h1>
          <p className="tracking-widest leading-7 md:h-full text-xs  md:text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus officia deserunt deleniti omnis itaque maiores
            ducimus voluptates eligendi soluta quos aperiam earum porro, nobis
            placeat accusamus esse amet hic facilis?
          </p>
        </div>
      </div>

      <div className="grid pt-5 gap-x-32 relative grid-rows-3  grid-cols-2 text-center w-full lg:flex items-center text-white text-opacity-50 flex-1 text-2xl md:text-6xl md:flex-row justify-around px-40">
        <div className="absolute -rotate-90 left-0 tracking-widest text-left opacity-50 top-1/2 text-xs md:text-sm ">
          <div className="w-full uppercase"> Clients</div>
        </div>
        {clients.map((el) => (
          <div
            key={el.name}
            id="brandlogo"
            className={`${el.extracss} flex flex-col justify-center items-center`}
          >
            <el.icon />
            <span className=" text-xs md:text-sm">{el.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualitycont;
