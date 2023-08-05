import React from "react";
import getStart from "../../Assets/Images/getstart.svg";
import Contact from "../../LandingPage/Content/Contact";
import { NavLink } from "react-router-dom";

const Button = ({ type, text, onClick }) => {
  switch (type.toLowerCase()) {
    case "black":
      return (
        <NavLink to="" target="_blank">
          <button
            className="flex gap-[1rem] items-center bg-[#000000] px-[1.2rem] py-[0.5rem] font-[archivo-medium] text-[#FFFFFF] text-[1rem] rounded-[2rem]"
            onClick={() =><Contact/>}
          >
            {text} <img src={getStart} alt="" />
          </button>
        </NavLink>
      );
      break;
    case "white":
      return (
        <NavLink
          to="https://drive.google.com/file/d/1s2ACCbhbbE9TAPA5GcxGt5jhzERBWEBQ/view?usp=sharing"
          target="_blank"
        >
          <button
            className="flex items-center bg-[#FFFFFF] px-[1.2rem] py-[0.5rem] font-[archivo-regular] text-[#000000] text-[1rem] rounded-[2rem] outline-none outline-1 outline-[#dedede]"
            onClick={onClick}
          >
            {text} <img src={getStart} alt="" />
          </button>
        </NavLink>
      );
      break;
    case "default":
      break;
  }
};

export default Button;
