import gsap from "gsap/all";
import React, { ReactElement, useEffect } from "react";

interface Prop {
  title: string;
  subt: string;
}

export default function Homecont(props: Prop): ReactElement {
  const titlelet = props.title.split("");
  const subtitlelet = props.subt.split("");

  useEffect(() => {
    gsap
      .fromTo(
        "#titlelet",
        { opacity: 0 },
        {
          duration: 0.5,
          opacity: 1,
          delay: (i) => {
            return i * 0.02;
          },
        }
      )
      .then(() => {
        gsap.fromTo(
          "#subtitlelet",
          { opacity: 0 },
          {
            duration: 0.5,
            opacity: 1,
            delay: (i) => {
              return i * 0.02;
            },
          }
        );
      });
  }, []);

  return (
    <div className="flex flex-col lg:mx-auto max-w-screen-xl 2xl:max-w-screen-2xl top-0 w-64 md:w-full relative px-8 h-96">
      <div className="absolute text-left lg:text-right top-1/2 md:top-1/2 transform  md:w-1/2 md:right-8">
        <div className="text-2xl md:text-6xl  tracking-wide">
          {titlelet.map((el) => (
            <span className="opacity-0" key={el + Math.random()} id="titlelet">
              {el}
            </span>
          ))}
        </div>
        <div className="text-sm leading-8 tracking-widest text-indigo-400">
          {subtitlelet.map((el) => (
            <span
              className="opacity-0"
              key={el + Math.random()}
              id="subtitlelet"
            >
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
