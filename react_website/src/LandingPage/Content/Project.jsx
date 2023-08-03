import React from "react";
import Cards from "../../Components/Cards/Cards";
import { Reveal } from "react-reveal";

const Project = () => {
  return (
    <React.Fragment>
      <h1 className="text-center font-[archivo-regular] text-[3.5rem] pt-[3rem] pb-[1rem]">
        Projects
      </h1>
      <Reveal effect="fadeInUp">
        <Cards></Cards>
      </Reveal>
    </React.Fragment>
  );
};

export default Project;
