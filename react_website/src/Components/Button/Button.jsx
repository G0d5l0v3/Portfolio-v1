import React from 'react';
import getStart from "../../Assets/Images/getstart.svg";

const Button = ({ type, text, onClick }) => {
    switch (type.toLowerCase()) {
        case "black":
            return <button className="flex gap-[1rem] items-center bg-[#000000] px-[1.2rem] py-[0.5rem] font-[archivo-medium] text-[#FFFFFF] text-[1rem] rounded-[2rem]" onClick={onClick}>{text}  <img src={getStart} alt="" /></button>
            break;
        case "white":
            return <button className="flex items-center bg-[#FFFFFF] px-[1.2rem] py-[0.5rem] font-[archivo-regular] text-[#000000] text-[1rem] rounded-[2rem] outline-none outline-1 outline-[#dedede]" onClick={onClick}>{text}  <img src={getStart} alt="getStart" /></button>
            break;
        case "default":
            return <button className="flex items-center bg-[#FFFFFF] px-[1rem] py-[0.5rem] font-[archivo-regular] text-[#000000] text-[1rem] rounded-[2rem]" onClick={onClick}>{text}</button>
            break;
    }

}

export default Button;