import React from 'react'
import { Type } from './Type'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from '@mui/icons-material/Twitter';
const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-32 scroll-smooth' id="home">
        <div className='flex flex-wrap justify-center text-4xl'>
            Hey, I am &nbsp;<span className='text-[#14d0b0] font-bold pt-4 sm:pt-0'> <p className='text-center'>Arka Prabha Chowdhury</p></span>
        </div>
        <div className='py-4 text-2xl text-gray-400 font-semibold'>
        <Type/>
        </div>
        <div className='font-light text-lg py-2'>
           Developer who loves building projects that solve real-world problems
        </div>
        <div className="flex justify-center gap-12 mt-8">
          <a
            href="https://github.com/ArkaPrabhaChowdhury"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:arkopra@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
        
          <a
            href="https://www.linkedin.com/in/arka-pra/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/arkopra"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
    </div>
  )
}

export default Home