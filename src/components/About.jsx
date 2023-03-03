import React from "react";
import me from "../assets/me.png";
const About = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-24" id="about">
      <div className="text-[#14d0b0] font-bold text-3xl">About me</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 w-3/5 gap-24">
        <div className="flex flex-col justify-center items-center w-60">
          <img src={me} />
        </div>
        <div className="mt-2">
          Computer Science student at BVRIT and a Front-end
          developer, specializing in ReactJS & TailwindCSS
          <br />
          <br />Web development team lead of Google Developer Student
          Club(GSDC) at my college <br />
          <br /> I love guiding peers & I have also created DevSpawn, a
          community for college freshmen, where I regularly conduct workshops
          and mentor juniors for free
          <br/><br/>
          I regularly contribute to Open source & also casually write technical blogs

        </div>
      </div>
    </div>
  );
};

export default About;
