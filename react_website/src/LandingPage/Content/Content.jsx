import React from 'react'
import Header from '../Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pulse from 'react-reveal/Pulse'
import js from "../../Assets/Images/js.svg"
import tailwind from "../../Assets/Images/tailwind.svg"
import css from "../../Assets/Images/css.svg"
import html from "../../Assets/Images/html.svg"
import git from "../../Assets/Images/git.svg"
import sass from "../../Assets/Images/sass.svg"
import bootstrap from "../../Assets/Images/bootstrap.svg"
import node from "../../Assets/Images/node-js.svg"
import react from "../../Assets/Images/react.svg"
import github from "../../Assets/Images/github.svg"


const Content = () => {
  const skills = [html, css, js, node, tailwind, git, github, react];

  return (
    <React.Fragment>
        <section className="bg-[#f9f9f9] h-screen flex items-center justify-center" >
          <div className="px-[7%] py-[8%]" id="techstack">
            <div className="gap-3 h-[100vh] w-[100%]">
              <Pulse>
                <h1 className="text-center font-[archivo-regular] text-[3.5rem] pt-[3rem] pb-[1rem]">My Tech Stack</h1>
                <p className="text-center font-[archivo-regular] text-[1.5rem] pb-[3rem]">Technologies I've been working with recently</p>
                <div className="grid grid-cols-4 gap-7">
                  {skills.map((items, index) => (
                    <div key={index}>
                      <img src={items} alt="skills" />
                    </div>
                  ))}
                </div>
              </Pulse>
            </div>
          </div>
        </section>
    </React.Fragment>
  );
};

export default Content;





