import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { Link, Element} from "react-scroll";
import { Bounce } from "react-reveal";
import coder from "../../Assets/Images/coder.gif";
import githubLink from "../../Assets/Images/github-link.svg";
import twitterLink from "../../Assets/Images/twitter-link.svg";
import linkedinLink from "../../Assets/Images/linkedin-link.svg";

import Marquee from "react-fast-marquee";

const Header = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const handleHover = () => {
    setHovered(true);
  };
  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <React.Fragment>
      <header className="min-h-screen w-full">
        <nav className="flex flex-col top-0 w-full z-50 sm:flex-row justify-between px-4 sm:px-8 md:fixed  lg:fixed xl:fixed  py-4 bg-gray-900 text-white">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">
              &lt; Ghost<span className="text-[#F7B32B]">Dev / &gt;</span>
            </h1>
          </div>
          <div
            className="flex gap-4 sm:gap-8 items-center mt-4 sm:mt-0 font-[archivo-regular]"
            id="home"
          >
            <Link
              to="homeLink"
              smooth={true}
              duration={1500}
              className="block text-base hover:text-[#F7B32B] cursor-pointer transition-colors"
            >
              Home
            </Link>
            <Link
              to="techstackLink"
              smooth={true}
              duration={1500}
              className="block text-base hover:text-[#F7B32B] active:text-[#F7B32B] cursor-pointer transition-colors"
            >
              Techstack
            </Link>
            <Link
              to="projectLink"
              smooth={true}
              duration={1500}
              className="block text-base hover:text-[#F7B32B] cursor-pointer  transition-colors"
            >
              Projects
            </Link>
            <NavLink
              to="/contact"
              className="block text-base hover:text-[#F7B32B] cursor-pointer transition-colors"
              activeClassName="text-[#F7B32B]"
            >
              Contact Me
            </NavLink>
          </div>
          <div className="flex gap-4 sm:gap-8 items-center mt-4 sm:mt-0">
            <NavLink to="https://github.com/G0d5l0v3" target="_blank">
              <img src={githubLink} alt="github-link" className="w-6 h-6" />
            </NavLink>
            <NavLink to="https://twitter.com" target="_blank">
              <img src={twitterLink} alt="twitter-link" className="w-6 h-6" />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/godslove-udo-2099b7199/"
              target="_blank"
            >
              <img src={linkedinLink} alt="linkedin-link" className="w-6 h-6" />
            </NavLink>
          </div>
        </nav>
        <Element name="homeLink">
          <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-16 lg:py-24">
            <div className="flex flex-col justify-around sm:flex-row items-center font-[archivo-regular] text-3xl  sm:text-base  md:text-4xl lg:text-5xl xl:text-6xl mt-8 sm:mt-12 2xl:lg:mt-16 xl:mt-20">
              <Bounce left duration={1000} delay={500}>
                <div>
                  <h1
                    className={
                      hovered ? "blur-0 transition-[6s]" : "blur-sm text-[#666]"
                    }
                    onMouseOver={handleHover}
                  >
                    Hi, my name is
                  </h1>
                  <h1
                    className={
                      hovered ? "blur-sm text-[#666] transition-[6s]" : "blur-0"
                    }
                    onMouseOver={handleLeave}
                  >
                    <span className="text-[#F7B32B]">Godslove Udo</span>
                    <br />I build things for the web
                  </h1>
                </div>
              </Bounce>

              <Bounce right duration={1000} delay={500}>
                <div className="mt-4 sm:mt-0">
                  <img src={coder} alt="vector" className="w-full" />
                </div>
              </Bounce>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 sm:mt-12 lg:mt-16 xl:mt-20">
              <Button
                type="black"
                text="Let's Connect"
                className="w-full sm:w-auto"
              />
              <Button
                type="white"
                text="Preview CV"
                className="w-full sm:w-auto"
              />
            </div>
          </main>
        </Element>
      </header>
    </React.Fragment>
  );
};

export default Header;
