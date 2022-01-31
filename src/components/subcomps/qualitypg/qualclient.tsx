import React from "react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  count: string;
  icon: IconType;
}

const QualityClient = (props: Props) => {
  return (
    <div className="shadow-lg rounded-2xl w-36 p-4 bg-gray-500 bg-opacity-50 backdrop-blur-md">
      <div className="flex items-center">
        <span className="bg-indigo-500 p-2 h-6 w-6 rounded-full relative">
          <props.icon className="absolute bottom-1/2 right-1/2 transform translate-y-1/2 translate-x-1/2" />
        </span>
        <p className="text-md text-gray-50 ml-2">{props.title}</p>
      </div>
      <div className="flex flex-col justify-start">
        <p className=" text-4xl text-left text-white font-bold my-4">
          {props.count}
        </p>
      </div>
    </div>
  );
};

export default QualityClient;
