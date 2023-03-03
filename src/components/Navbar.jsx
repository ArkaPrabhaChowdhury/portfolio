import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import pdf from "../assets/Arka_s_Resume (10).pdf";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="bg-[#14d0b0] fixed top-0 w-full z-50">
      <div className="py-2 justify-end flex">
        <div className="w-32 pl-2">
        <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              onClick={() => setNav(false)}
            >
              <button><img src={logo}/></button>
            </Link>
        </div>
        <div className="w-full flex justify-end gap-8 pr-4 font-semibold text-black">
          <div className="hidden md:flex">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              onClick={() => setNav(false)}
            >
              <button>Home</button>
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              onClick={() => setNav(false)}
            >
              <button>About me</button>
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              onClick={() => setNav(false)}
            >
              <button>Skills</button>
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <button>Projects</button>
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <button>Contact</button>
            </Link>
          </div>
          <div className="hidden md:flex">
            <a href={pdf} download="ArkasResume" target="_blank">
              Resume
            </a>
          </div>
          <div className="flex md:hidden mt-1">
           {nav ? <RxCross2 onClick={() => setNav(false)}/> : <AiOutlineMenu onClick={() => setNav(true)} />  }
          </div>
        </div>
      </div>
      {nav ? (
        <div className="flex justify-center md:hidden">
          <ul>
            <li className="py-2 text-center font-semibold text-black">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                onClick={() => setNav(false)}
              >
                <button>Home</button>
              </Link>
            </li>
            <li className="py-2 text-center font-semibold text-black">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                onClick={() => setNav(false)}
              >
                <button>About me</button>
              </Link>
            </li>
            <li className="py-2 text-center font-semibold text-black">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                onClick={() => setNav(false)}
              >
                <button>Skills</button>
              </Link>
            </li>
            <li className="py-2 text-center font-semibold text-black">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                onClick={() => setNav(false)}
              >
                <button>Projects</button>
              </Link>
            </li>
            <li className="py-2 text-center font-semibold text-black">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                onClick={() => setNav(false)}
              >
                <button>Contact</button>
              </Link>
            </li>
            <li className="py-2 text-center font-semibold text-black">
              <a href={pdf} download="ArkasResume" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
