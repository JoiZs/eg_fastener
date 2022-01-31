import React, { useContext } from "react";
import gsap from "gsap";
import { LangContext } from "../../contexts/langCtx";

interface Props {}

const Multilang = (props: Props) => {
  const [selection, setSelection] = useContext(LangContext);
  const selectionHandler = () => {
    if (selection === 0) {
      gsap.fromTo(
        "#lgeg",
        { translateY: 10, opacity: 0 },
        { duration: 0.5, translateY: 0, opacity: 1 }
      );
      setSelection(1);
    }

    if (selection === 1) {
      gsap.fromTo(
        "#lgcz",
        { translateY: 10, opacity: 0 },
        { duration: 0.5, translateY: 0, opacity: 1 }
      );
      setSelection(0);
    }
  };
  const languages = [
    {
      country: "English",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="lgeg"
          viewBox="0 0 512 512"
          className="w-5 h-5 shadow-sm shadow-gray-400 rounded-full"
        >
          <path fill="#012169" d="M0 0h512v512H0z" />
          <path
            fill="#FFF"
            d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
          />
          <path
            fill="#C8102E"
            d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"
          />
          <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
          <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
        </svg>
      ),
    },
    {
      country: "Czech",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="lgcz"
          viewBox="0 0 512 512"
          className="w-5 h-5 shadow-sm shadow-gray-400 rounded-full"
        >
          <path fill="#fff" d="M0 0h512v256H0z" />
          <path fill="#d7141a" d="M0 256h512v256H0z" />
          <path fill="#11457e" d="M300 256 0 56v400z" />
        </svg>
      ),
    },
  ];
  return (
    <div className="cursor-pointer" onClick={selectionHandler}>
      {languages[selection].flag}
    </div>
  );
};

export default Multilang;
