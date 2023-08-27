import React from "react";
import Cards from "../../Components/Cards/Cards";
import { Zoom } from "react-reveal";
import { Element } from "react-scroll"

const Project = () => {
  return (
    <React.Fragment>
      <Element name ="projectLink">
      <h1 className="text-center font-[archivo-regular] text-[3.5rem] pt-[3rem] pb-[1rem]" id ="projects">
        Projects
      </h1>
      <Zoom left>
        <Cards></Cards>
      </Zoom>
      </Element>
    </React.Fragment>
  );
};

export default Project;
