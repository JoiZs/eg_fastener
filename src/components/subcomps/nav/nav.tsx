import { Link } from "react-router-dom";
import Multilang from "./multilang";
import Onemenu from "./onedownmenu";
import { BsNutFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import gsap from "gsap";
import LangCtx from "../../contexts/langCtx";

interface Props {}

const Mobiledropmenu = () => {
  const [isMenu, setIsMenu] = useState(false);
  const btnRef: any = useRef();

  return (
    <Popover className={`flex flex-col justify-end w-full xl:hidden`}>
      <Popover.Button ref={btnRef} className=" lg:hidden px-8 ">
        <BsNutFill
          onClick={(e) => {
            setIsMenu(!isMenu);
            let rotatest, rotateed;
            if (isMenu) {
              rotatest = 90;
              rotateed = 0;
            } else {
              rotatest = 0;
              rotateed = 90;
            }
            gsap.fromTo(
              `#${e.currentTarget.id}`,
              { scale: 0.8, rotate: `${rotatest}` },
              { scale: 1, rotate: `${rotateed}` }
            );
          }}
          className="text-xl"
          id="btnnut"
        />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          id="dropmenu"
          className="bg-white absolute right-8 top-16 h-80 text-black tracking-widest text-xs  w-1/2 p-4 flex flex-col justify-evenly list-none rounded-md"
        >
          <li className="flex items-center  justify-center">
            <Multilang />
          </li>
          <li className="w-full h-full  flex items-center">
            <Link to="/">Home</Link>
          </li>
          <li className="w-full h-full flex items-center">
            <Onemenu title="Product" type="prod" />
          </li>
          <li className="w-full h-full flex items-center">
            <Onemenu title="Industry" type="ind" />
          </li>
          <li className="w-full h-full flex items-center">
            <Link to="/quality">Quality</Link>
          </li>
          <li className="w-full h-full flex items-center">
            <Link to="/inquiry">Send Inquiry</Link>
          </li>
          <li className="w-full h-full flex items-center">
            <Link to="/about">About Us</Link>
          </li>
          <li className="w-full h-full flex items-center">
            <Link to="/contact">Contact Us</Link>
          </li>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const Nav = (props: Props) => {
  useEffect(() => {});

  return (
    <LangCtx>
      <div className="w-full tracking-widest z-10 fixed bg-transparent flex justify-between py-4  text-sm">
        <div className="px-8 ">logo</div>
        <div>
          <Mobiledropmenu />
        </div>
        <div className="hidden px-8 lg:flex flex-row list-none justify-evenly gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Onemenu title="Product" type="prod" />
          </li>
          <li>
            <Onemenu title="Industry" type="ind" />
          </li>
          <li>
            <Link to="/quality">Quality</Link>
          </li>
          <li>
            <Link to="/inquiry">Send Inquiry</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="flex items-center justify-center">
            <Multilang />
          </li>
        </div>
      </div>
    </LangCtx>
  );
};

export default Nav;
