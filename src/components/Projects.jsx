import React from "react";
import learn from "../assets/learn.png";
import exp from "../assets/exp.png";
import uni from "../assets/uni.png";
import gamma from "../assets/gammasite.png";
import Tilt from "react-parallax-tilt"; 
import { SiFirebase, SiReact,SiMui } from "react-icons/si";
import { FaNodeJs,FaBootstrap } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const Projects = () => {
  return (
    <div
      className="flex flex-col justify-center items-center pt-24 z-10"
      id="projects"
    >
      <div className="text-[#14d0b0] font-bold text-3xl">Projects</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mt-12 w-[90%]">
        <Tilt tiltMaxAngleX={"5"} tiltMaxAngleY={"5"}>
          <div className="col-span-1 p-8 rounded-md border-2 border-[#14d0b0]">
            <img src={learn} className="w-full object-cover rounded-2xl" />
            <p className="text-center pt-6 font-semibold text-xl">LearnSpace</p>
            <p className="text-center">
              A YouTube clone that focuses on education
            </p>
            <div className="flex justify-center gap-12 pt-4">
              <SiReact size={"2rem"} />
              <FaNodeJs size={"2rem"} />
            </div>
            <div className="flex justify-between">
              <div className="mt-6">
                <button className="bg-[#12c3a4] text-white p-2 rounded-lg">
                  <a target={"blank"} href="https://learn-space.netlify.app/">
                    Live demo
                  </a>
                </button>
              </div>
              <div className="mt-6">
                <button className="bg-[#12c3a4] text-white p-2 rounded-lg">
                  <a
                    target={"blank"}
                    href="https://github.com/ArkaPrabhaChowdhury/LearnSpace"
                  >
                    Source code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={"5"} tiltMaxAngleY={"5"}>
          <div className="col-span-1 p-8 rounded-md border-2 border-[#12c3a4]">
            <img src={exp} className="w-full object-cover rounded-2xl" />
            <p className="text-center pt-6 font-semibold text-xl">xpTrack</p>
            <p className="text-center">A voice activated expense tracker</p>
            <div className="flex justify-center gap-12 pt-4">
              <SiReact size={"2rem"} />
              <SiMui size={"2rem"}/>
            </div>
            <div className="flex justify-between">
              <div className="mt-6">
                <button className="bg-[#12c3a4] text-white p-2 rounded-lg">
                  <a target={"blank"} href="https://xptrack.netlify.app/">
                    Live demo
                  </a>
                </button>
              </div>
              <div className="mt-6">
                <button className="bg-[#12c3a4] text-white p-2 rounded-lg">
                  <a
                    target={"blank"}
                    href="https://github.com/ArkaPrabhaChowdhury/ExpenseTracker"
                  >
                    Source code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Tilt>

        <Tilt tiltMaxAngleX={"5"} tiltMaxAngleY={"5"}>
          <div className="col-span-1 p-8 rounded-md border-2 border-[#14d0b0]">
            <img src={gamma} className="w-full object-cover rounded-2xl" />
            <p className="text-center pt-6 font-semibold text-xl">Gamma Innovations</p>
            <p className="text-center">
              A freelance project for a IT services startup
            </p>
            <div className="flex justify-center gap-12 pt-4">
              <TbBrandNextjs size={"2rem"} />
              <FaNodeJs size={"2rem"} />
            </div>
            <div className="flex justify-between">
              <div className="mt-6">
                <button className="bg-[#12c3a4] text-white p-2 rounded-lg">
                  <a
                    target={"blank"}
                    href="https://www.gammainnovations.com"
                  >
                    Live demo
                  </a>
                </button>
              </div>
              <div className="mt-6">
                <button className="bg-[#12c3a4] text-white p-2 rounded-lg">
                  <a
                    target={"blank"}
                    href="https://github.com/ArkaPrabhaChowdhury/gamma"
                  >
                    Source code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
      <div className="grid grid-cols-3 gap-32 mt-12"></div>
    </div>
  );
};

export default Projects;
