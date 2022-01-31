import { Popover, Transition } from "@headlessui/react";
import { FaCaretDown, FaCar } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";
import { Fragment } from "react";

interface Prop {
  title: string;
  type: string;
}
const industries = [
  {
    name: "Automotive",
    description: "Measure actions your users take",
    href: "automotive",
    icon: FaCar,
  },
  {
    name: "Construction",
    description: "Measure actions your users take",
    href: "construction",
    icon: BsBuilding,
  },
  {
    name: "Electronics",
    description: "Measure actions your users take",
    href: "electronics",
    icon: GiElectric,
  },
  {
    name: "Others",
    description: "Measure actions your users take",
    href: "others",
    icon: FiMoreHorizontal,
  },
];

const products = [
  {
    name: "Cold Forging",
    description: "Measure actions your users take",
    href: "coldforging",
    icon: RiNumber1,
  },
  {
    name: "CNC Machining",
    description: "Measure actions your users take",
    href: "cncmachining",
    icon: RiNumber2,
  },
  {
    name: "Stamping",
    description: "Measure actions your users take",
    href: "stamping",
    icon: RiNumber3,
  },
  {
    name: "Wire Forming",
    description: "Measure actions your users take",
    href: "wireforming",
    icon: RiNumber4,
  },
  {
    name: "Tooling",
    description: "Measure actions your users take",
    href: "tooling",
    icon: RiNumber5,
  },
];

export default function Onemenu(props: Prop) {
  return (
    <div className="w-full max-w-sm ">
      <Popover className="relative ">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                 group rounded-md  inline-flex items-center text-base hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <li className=" text-xs md:text-sm ">{props.title}</li>
              <FaCaretDown
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-indigo-400 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
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
              <Popover.Panel className="absolute z-10 w-72 md:w-max max-w-sm px-4 mt-3 transform -translate-x-1/2 -left-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {(props.type === "ind" ? industries : products).map(
                      (item) => (
                        <a
                          key={item.name}
                          href={
                            props.type === "ind"
                              ? "industry?" + item.href
                              : "product?" + item.href
                          }
                          className="flex items-center  p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 sm:h-12 sm:w-12">
                            <div className="bg-indigo-500 bg-opacity-30 p-2 rounded-lg">
                              <item.icon className="text-indigo-600  text-3xl md:text-4xl" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-xs md:text-sm font-medium  text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-xs md:text-sm  text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      )
                    )}
                  </div>
                  <div className="p-4 bg-indigo-50">
                    <a
                      href={props.type === "ind" ? "industry" : "product"}
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-indigo-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          {props.type === "ind" ? "Industry" : "Product"}
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        {props.type === "ind"
                          ? "Start integrating industries"
                          : "Start integrating products and tools"}
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
