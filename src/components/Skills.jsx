import React from "react";
import GitHubCalendar from "react-github-calendar";
import { technologies } from "../const";
import BallCanvas from "./Ball";
const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-24 Z-10" id="skills">
      <div className="text-[#14d0b0] font-bold text-3xl">Skills</div>
      <div className="flex flex-row flex-wrap justify-center gap-10 pt-12">
        {technologies.map((technology)=>(
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>

      <div className="mt-28">
        <p className="text-[#14d0b0] font-bold text-3xl ">
          Github Contributions
        </p>
      </div>
      <div className="mt-12">
        <GitHubCalendar username="arkaprabhachowdhury" color={"#17f6d0"}/>
      </div>
    </div>
  );
};

export default Skills;
