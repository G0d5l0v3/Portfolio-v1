
import Button from "../../Components/Button/Button"
import { NavLink } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce'
import Pulse from 'react-reveal/Pulse'
import React, { useState } from 'react'
import coder from "../../Assets/Images/coder.gif"
import githubLink from "../../Assets/Images/github-link.svg"
import twitterLink from "../../Assets/Images/twitter-link.svg"
import linkedinLink from "../../Assets/Images/linkedin-link.svg"
import Marquee from "react-fast-marquee"

const Header = () => {
    const [hovered, setHovered] = useState(false)
    const handleHover = () => {
        setHovered(true)
    }
    const handleLeave = () => {
        setHovered(false)
    }

    return (
        <React.Fragment>
            <header className="height-[100svh] w-[100%]">
                <nav className="flex justify-between px-[5%]">
                    <div className="leading-[3.5rem]">
                        <h1 className="flex items-center font-[kostic] sm:text-[1.6rem] lg:text-[1.6rem]"> &lt; Ghost<span className="text-[#F7B32B]">Dev / &gt;</span></h1>
                    </div>
                    <div className="flex gap-[2.5rem] items-center font-[archivo-regular] text-[1rem]">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/techstack">Techstack</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                    <div className="flex items-center gap-[3rem]">
                        <img src = {githubLink} alt="github-link"/>
                        <img src = {twitterLink} alt="twitter-link"/>
                        <img src = {linkedinLink} alt="linkedin-link"/>
                    </div>
                </nav>

                <main className="px-[7%] ">
                    <div className="flex items-center font-[archivo-regular] sm:text-sm md:text-[4rem] lg:text-[4.3rem] xl:text-[4.3rem] mt-[3rem] mb-[3rem]">
                        <Bounce left>
                            <Pulse>
                                <div>
                                    <h1 className={hovered ? "blur-0 transition-[6s]" : "blur-sm text-[grey]"} onMouseOver={handleHover} >Hi, my name is</h1>
                                    <h1 className={hovered ? "blur-sm text-[grey] transition-[6s]" : "blur-0"} onMouseOver={handleLeave}><span className="text-[#F7B32B]">Godslove Udo</span> <br />I build things for the web</h1>
                                </div>

                            </Pulse>
                        </Bounce>

                        <Bounce right>
                            <div>
                                <img src={coder} alt="vector"/>
                            </div>
                        </Bounce>
                    </div>

                    <div className="flex items-center gap-[1rem] mb-[3.5rem]">
                        <Button type="black" text="Let's Connect"></Button>
                        <Button type="white" text="Preview CV"></Button>
                    </div>

                </main>
            </header>

        </React.Fragment>
    )
}

export default Header;