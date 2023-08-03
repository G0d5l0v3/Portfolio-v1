import React from "react";
import Cards from "../../Components/Cards/Cards";
import { Zoom } from "react-reveal";

const Project = () => {
  return (
    <React.Fragment>
      <h1 className="text-center font-[archivo-regular] text-[3.5rem] pt-[3rem] pb-[1rem]">
        Projects
      </h1>
      <Zoom left>
        <Cards></Cards>
      </Zoom>
    </React.Fragment>
  );
};

export default Project;
