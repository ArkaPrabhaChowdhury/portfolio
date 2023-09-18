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
        <div className="mt-2 text-md font-medium">
          I'm a Computer Science student at BVRIT with expertise in ReactJS and
          TailwindCSS.
          <br />
          <br />
          As the Web Development Team Lead at my college's Google Developer
          Student Club, I lead a team in creating innovative web applications.{" "}
          <br />
          <br />
          I'm also the founder of DevSpawn, a community where I mentor college
          freshmen and conduct workshops.
          <br />
          <br />
          With over <span className="font-semibold text-lg">10 months </span> of full-stack development internship experience
          and <span className="font-semibold text-lg">freelance work</span> for GammaInnovations, I've gained practical skills.
          I actively contribute to open-source projects and write technical
          blogs to share knowledge.
        </div>
      </div>
    </div>
  );
};

export default About;
